document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DOM 元素獲取 ---
    const cardEditor = document.getElementById('card-editor');
    const imageUpload = document.getElementById('image-upload');
    const downloadButton = document.getElementById('download-card');
    
    // 控制項
    const colorSelect = document.getElementById('color-select');
    const cardTypeSelect = document.getElementById('card-type-select');
    const factionSelect = document.getElementById('faction-select');
    const zoomSlider = document.getElementById('zoom-slider');
    const fullArtToggle = document.getElementById('full-art-toggle');
    
    // 旗艦專用
    const leaderOptionsGroup = document.getElementById('leader-options-group');
    const lifeNumberGroup = document.getElementById('life-number-group');
    const lifeNumberSelect = document.getElementById('life-number-select');
    const awakeStatusRadios = document.querySelectorAll('input[name="awake-status"]');

    // 費用
    const costOptionsGroup = document.getElementById('cost-options-group');
    const costSelect = document.getElementById('cost-select');

    // 支援
    const supportOptionsGroup = document.getElementById('support-options-group');
    const supportRangeGroup = document.getElementById('support-range-group');
    const supportValueGroup = document.getElementById('support-value-group');
    const supportRangeSelect = document.getElementById('support-range-select');
    const supportValueSelect = document.getElementById('support-value-select');
    
    // 戰力
    const powerOptionsGroup = document.getElementById('power-options-group');
    const powerSelect = document.getElementById('power-select');

    // 卡片圖層 (前景)
    const frameLayer = document.getElementById('frame-layer');
    const topFrameLayer = document.getElementById('top-frame-layer'); 
    const extraBaseLayer = document.getElementById('extra-layer-base');
    const extraFactionLayer = document.getElementById('extra-layer-faction');
    const extraTextLayer = document.getElementById('extra-layer-text');
    const extraNumberLayer = document.getElementById('extra-layer-number');
    const supportRangeLayer = document.getElementById('support-range-layer');
    const supportValueLayer = document.getElementById('support-value-layer');
    const powerLayer = document.getElementById('power-layer');
    
    // Canvas 相關
    const playerCanvas = document.getElementById('player-image-canvas');
    const ctx = playerCanvas.getContext('2d');
    const TARGET_WIDTH = 767;
    const TARGET_HEIGHT = 1073;

    // 資源路徑
    const FRAME_FOLDER = 'CardFrame'; 
    const TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    // --- 2. 全域狀態 ---
    let currentImage = null; // 玩家圖片
    
    // 背景圖層的 Image 物件
    let currentMask = new Image(); 
    let currentFogImage = new Image();
    let currentBaseImage = new Image();
    let currentBgVisualImage = new Image();
    let currentMarkImage = new Image();

    // 選單狀態
    let currentColor = 'none'; 
    let currentType = 'leader'; 
    let currentFaction = 'uss'; 
    let isFullArt = false; 
    let currentLifeStatus = 'before';
    let currentLifeNumber = '4';
    let currentCost = '0';
    let currentSupportRange = 'hand';
    let currentSupportValue = '0';
    let currentPower = '100'; 
    const imgState = { zoom: 1, offsetX: 0, offsetY: 0 };
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // 圖片載入計數器
    let imagesToLoad = 0;
    let imagesLoaded = 0;

    // --- 3. 核心繪圖函式 (Canvas) ---
    
    function redrawCanvas() {
        // 檢查所有必要的圖片是否都載入完成了
        if (imagesLoaded < imagesToLoad) {
            ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);
            ctx.fillStyle = '#999';
            ctx.font = '60px sans-serif'; 
            ctx.textAlign = 'center';
            ctx.fillText('圖片載入中...', TARGET_WIDTH / 2, TARGET_HEIGHT / 2);
            return;
        }

        ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT); 
        ctx.save(); // 儲存初始狀態

        // 步驟 1: 繪製所有背景圖層 (Base, BG, Mark)
        drawAspectCover(ctx, currentBaseImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
        drawAspectCover(ctx, currentBgVisualImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
        drawAspectCover(ctx, currentMarkImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);

        // 步驟 2: 繪製玩家圖片 (有遮罩或全圖)
        if (currentImage) {
            const scaledWidth = currentImage.width * imgState.zoom;
            const scaledHeight = currentImage.height * imgState.zoom;
            
            if (isFullArt) {
                // --- 全圖模式 ---
                // 直接在主畫布上繪製
                ctx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
            } else {
                // --- 遮罩模式 (使用離屏畫布) ---
                
                // 1. 建立一個暫時的、看不見的畫布
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = TARGET_WIDTH;
                tempCanvas.height = TARGET_HEIGHT;
                const tempCtx = tempCanvas.getContext('2d');

                // 2. 在「暫時畫布」上繪製遮罩 (bg-*.png)
                drawAspectCover(tempCtx, currentMask, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
                
                // 3. 設定混合模式為 "source-in"
                tempCtx.globalCompositeOperation = 'source-in';
                
                // 4. 在「暫時畫布」上繪製玩家圖片 (會被遮罩)
                tempCtx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
                
                // 5. 將「暫時畫布」(現在只剩下被遮罩的圖片) 畫回到「主畫布」上
                ctx.drawImage(tempCanvas, 0, 0);
            }
            
        } else {
            // 沒有玩家圖片時，顯示佔位符
            ctx.fillStyle = 'rgba(153, 153, 153, 0.5)'; 
            ctx.font = '60px sans-serif'; 
            ctx.textAlign = 'center';
            ctx.fillText('上傳你的卡圖', TARGET_WIDTH / 2, TARGET_HEIGHT / 2);
        }

        // 步驟 3: 繪製 Fog (色彩增值)
        // (此時 fog 會蓋在 base, bg, mark 和 playerImage 之上)
        ctx.globalCompositeOperation = 'multiply'; 
        drawAspectCover(ctx, currentFogImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT); 
        
        // 步驟 4: 恢復狀態
        ctx.restore(); // 恢復初始狀態 (重置 globalCompositeOperation)
    }
    
    // !! 關鍵修正：修正 typo (img.img.height -> img.height)
    function drawAspectCover(ctx, img, x, y, w, h) {
        if (!img || img.naturalHeight === 0) return; 

        const imgRatio = img.width / img.height; // <-- 修正
        const canvasRatio = w / h;
        let sx = 0, sy = 0, sw = img.width, sh = img.height;
        if (imgRatio > canvasRatio) { 
            sw = img.height * canvasRatio; sx = (img.width - sw) / 2;
        } else { 
            sh = img.width / canvasRatio; sy = (img.height - sh) / 2;
        }
        ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
    }
    
    function resetPlaceholder() {
        currentImage = null; // 移除玩家圖片
        // 觸發一次 onSelectionChange 來重新載入所有5張基礎圖片
        onSelectionChange();
    }


    // --- 4. 核心更新函式 (IMG 圖層) ---

    // (新增) 圖片批次載入器
    function loadAllImages(paths) {
        // 基礎圖片 (base, bg, mark, fog, mask) 5 張
        let baseImages = [
            { obj: currentBaseImage, src: paths.basePath },
            { obj: currentBgVisualImage, src: paths.bgPath },
            { obj: currentMarkImage, src: paths.markPath },
            { obj: currentFogImage, src: paths.fogPath },
            { obj: currentMask, src: paths.bgPath } // 遮罩與 bg 相同
        ];

        imagesToLoad = baseImages.length; // 基礎圖片 5 張
        imagesLoaded = 0;

        const onImageLoad = () => {
            imagesLoaded++;
            if (imagesLoaded === imagesToLoad) {
                redrawCanvas(); // 所有圖片載入完成後，執行繪製
            }
        };
        
        // 處理玩家圖片
        if (currentImage) {
            imagesToLoad++; // 總數 +1
            // 確保玩家圖片的 onload 也會觸發 onImageLoad
            if (currentImage.complete) {
                onImageLoad();
            } else {
                currentImage.onload = onImageLoad;
            }
        }

        // 為每張基礎圖片設定 src 並綁定 onload
        baseImages.forEach(imgData => {
            imgData.obj.crossOrigin = "anonymous";
            // 檢查 src 是否真的改變，避免不必要的重載
            if (imgData.obj.src !== imgData.src) {
                imgData.obj.src = imgData.src;
                if (!imgData.obj.complete) {
                    imgData.obj.onload = onImageLoad;
                } else {
                    onImageLoad(); // 處理快取
                }
            } else {
                onImageLoad(); // 如果 src 相同，直接計為已載入
            }
        });
    }


    function updateCardFrame() {
        let basePath, bgPath, framePath, topFramePath, markPath, fogPath;
        let extraBasePath = TRANSPARENT_PIXEL;
        let extraFactionPath = TRANSPARENT_PIXEL;
        let extraTextPath = TRANSPARENT_PIXEL;
        let extraNumberPath = TRANSPARENT_PIXEL;
        let supportRangePath = TRANSPARENT_PIXEL;
        let supportValuePath = TRANSPARENT_PIXEL;
        let powerPath = TRANSPARENT_PIXEL; 

        // 3. 根據規則計算路徑
        basePath = `${FRAME_FOLDER}/base-${currentColor}.png`;
        markPath = `${FRAME_FOLDER}/mark-${currentColor}-${currentFaction}.png`;
        fogPath = `${FRAME_FOLDER}/fog-${currentColor}.png`;

        if (currentType === 'leader') {
            bgPath = `${FRAME_FOLDER}/bg-leader-${currentColor}.png`;
            framePath = `${FRAME_FOLDER}/frame-leader-${currentColor}.png`;
            topFramePath = `${FRAME_FOLDER}/topframe-leader.png`;
            extraBasePath = `${FRAME_FOLDER}/life-${currentColor}-base.png`;
            extraFactionPath = `${FRAME_FOLDER}/life-${currentColor}-${currentFaction}.png`;
            if (currentLifeStatus === 'before') {
                extraTextPath = `${FRAME_FOLDER}/life-${currentColor}-text.png`;
                // !! 關鍵修正：FRAME_DELETE -> FRAME_FOLDER
                extraNumberPath = `${FRAME_FOLDER}/life-${currentColor}-${currentLifeNumber}.png`; 
            } else { 
                extraTextPath = `${FRAME_FOLDER}/life-${currentColor}-awake.png`;
                extraNumberPath = TRANSPARENT_PIXEL; 
            }
            supportValuePath = `${FRAME_FOLDER}/support-${currentSupportValue}.png`;
            supportRangePath = TRANSPARENT_PIXEL; 
            powerPath = `${FRAME_FOLDER}/power-${currentPower}.png`;
        } else if (currentType === 'kansen') {
            bgPath = `${FRAME_FOLDER}/bg-kansen-${currentColor}.png`;
            framePath = `${FRAME_FOLDER}/frame-kansen-${currentColor}.png`;
            topFramePath = `${FRAME_FOLDER}/topframe-kansen.png`;
            extraBasePath = `${FRAME_FOLDER}/cost-${currentColor}-base.png`;
            extraFactionPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentFaction}.png`;
            extraTextPath = `${FRAME_FOLDER}/cost-${currentColor}-text.png`;
            extraNumberPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentCost}.png`;
            supportRangePath = `${FRAME_FOLDER}/support-${currentSupportRange}.png`;
            supportValuePath = `${FRAME_FOLDER}/support-${currentSupportValue}.png`;
            powerPath = `${FRAME_FOLDER}/power-${currentPower}.png`;
        } else if (currentType === 'event') {
            bgPath = `${FRAME_FOLDER}/bg-event.png`; 
            framePath = `${FRAME_FOLDER}/frame-event-${currentColor}.png`;
            topFramePath = `${FRAME_FOLDER}/topframe-event.png`;
            extraBasePath = `${FRAME_FOLDER}/cost-${currentColor}-base.png`;
            extraFactionPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentFaction}.png`;
            extraTextPath = `${FRAME_FOLDER}/cost-${currentColor}-text.png`;
            extraNumberPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentCost}.png`;
            supportRangePath = TRANSPARENT_PIXEL;
            supportValuePath = TRANSPARENT_PIXEL;
            powerPath = TRANSPARENT_PIXEL;
        }

        // 4. 更新「前景」 <img> 圖層的 src
        frameLayer.src = framePath;
        topFrameLayer.src = topFramePath;
        extraBaseLayer.src = extraBasePath;
        extraFactionLayer.src = extraFactionPath;
        extraTextLayer.src = extraTextPath;
        extraNumberLayer.src = extraNumberPath;
        supportRangeLayer.src = supportRangePath;
        supportValueLayer.src = supportValuePath;
        powerLayer.src = powerPath; 
        
        // 5. 返回需要載入到 Canvas 的圖片路徑
        return { basePath, bgPath, markPath, fogPath };
    }

    // --- 5. 事件監聽器 ---
    
    function onSelectionChange() {
        // 1. 讀取所有全域狀態
        currentColor = colorSelect.value;
        currentType = cardTypeSelect.value;
        currentFaction = factionSelect.value;
        isFullArt = fullArtToggle.checked;
        currentLifeStatus = document.querySelector('input[name="awake-status"]:checked').value;
        currentLifeNumber = lifeNumberSelect.value;
        currentCost = costSelect.value;
        currentSupportRange = supportRangeSelect.value;
        currentSupportValue = supportValueSelect.value;
        currentPower = powerSelect.value;

        // 2. 處理條件 UI 顯示
        if (currentType === 'leader') {
            leaderOptionsGroup.style.display = 'flex';
            costOptionsGroup.style.display = 'none';
            supportOptionsGroup.style.display = 'flex';
            powerOptionsGroup.style.display = 'flex'; 
            supportRangeGroup.style.display = 'none'; 
            supportValueGroup.style.display = 'flex'; 
            lifeNumberGroup.style.display = (currentLifeStatus === 'after') ? 'none' : 'flex';
        } else if (currentType === 'kansen') {
            leaderOptionsGroup.style.display = 'none';
            costOptionsGroup.style.display = 'flex';
            supportOptionsGroup.style.display = 'flex';
            powerOptionsGroup.style.display = 'flex'; 
            supportRangeGroup.style.display = 'flex'; 
            supportValueGroup.style.display = 'flex'; 
        } else if (currentType === 'event') {
            leaderOptionsGroup.style.display = 'none';
            costOptionsGroup.style.display = 'flex';
            supportOptionsGroup.style.display = 'none';
            powerOptionsGroup.style.display = 'none'; 
        }
        
        // 3. 獲取路徑並觸發批次載入
        const paths = updateCardFrame();
        loadAllImages(paths);
        
        // ( redrawCanvas() 會在 loadAllImages 完成後自動觸發 )
    }

    // 綁定所有會影響卡片的控制項到主函式
    colorSelect.addEventListener('change', onSelectionChange);
    cardTypeSelect.addEventListener('change', onSelectionChange);
    factionSelect.addEventListener('change', onSelectionChange);
    fullArtToggle.addEventListener('change', onSelectionChange);
    lifeNumberSelect.addEventListener('change', onSelectionChange);
    awakeStatusRadios.forEach(radio => {
        radio.addEventListener('change', onSelectionChange);
    });
    costSelect.addEventListener('change', onSelectionChange);
    supportRangeSelect.addEventListener('change', onSelectionChange);
    supportValueSelect.addEventListener('change', onSelectionChange);
    powerSelect.addEventListener('change', onSelectionChange); 

    // (更新) 處理圖片上傳
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                currentImage = new Image(); // 每次都創建新 Image 物件
                currentImage.crossOrigin = "anonymous";
                currentImage.onload = () => {
                    const imgRatio = currentImage.width / currentImage.height;
                    const canvasRatio = TARGET_WIDTH / TARGET_HEIGHT;
                    let baseZoom;
                    if (imgRatio > canvasRatio) { 
                        baseZoom = TARGET_HEIGHT / currentImage.height;
                        imgState.offsetX = (TARGET_WIDTH - (currentImage.width * baseZoom)) / 2;
                        imgState.offsetY = 0;
                    } else { 
                        baseZoom = TARGET_WIDTH / currentImage.width;
                        imgState.offsetX = 0;
                        imgState.offsetY = (TARGET_HEIGHT - (currentImage.height * baseZoom)) / 2;
                    }
                    imgState.zoom = baseZoom;
                    zoomSlider.min = baseZoom * 0.5;
                    zoomSlider.value = baseZoom;
                    zoomSlider.max = baseZoom * 3;
                    
                    // 重新觸發 onSelectionChange 來載入所有圖片 (包括這張新圖)
                    onSelectionChange(); 
                };
                currentImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            resetPlaceholder(); // 取消選擇時，移除玩家圖片並重繪
        }
    });

    // (更新) 處理縮放滑桿
    zoomSlider.addEventListener('input', () => {
        if (!currentImage) return;
        imgState.zoom = parseFloat(zoomSlider.value);
        redrawCanvas(); // 只需要重繪 Canvas
    });

    // (更新) 處理滑鼠拖曳
    playerCanvas.addEventListener('mousedown', (e) => {
        if (!currentImage) return;
        isDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        playerCanvas.style.cursor = 'grabbing';
    });
    playerCanvas.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        const canvasScaleRatio = TARGET_WIDTH / playerCanvas.clientWidth;
        imgState.offsetX += (deltaX * canvasScaleRatio);
        imgState.offsetY += (deltaY * canvasScaleRatio);
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        redrawCanvas(); // 只需要重繪 Canvas
    });
    const stopDragging = () => {
        if (isDragging) {
            isDragging = false;
            playerCanvas.style.cursor = 'grab';
        }
    };
    playerCanvas.addEventListener('mouseup', stopDragging);
    playerCanvas.addEventListener('mouseleave', stopDragging);


    // (不變) 處理下載卡片功能
    downloadButton.addEventListener('click', () => {
        const DOWNLOAD_MULTIPLIER = 1;
        const cssWidth = cardEditor.clientWidth; 
        const baseScale = TARGET_WIDTH / cssWidth; 
        const finalScale = baseScale * DOWNLOAD_MULTIPLIER;
        
        downloadButton.innerText = '生成中...';
        downloadButton.disabled = true;

        html2canvas(cardEditor, {
            useCORS: true, 
            backgroundColor: null, 
            scale: finalScale, 
        }).then(canvas => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            const outputWidth = TARGET_WIDTH * DOWNLOAD_MULTIPLIER;
            const outputHeight = TARGET_HEIGHT * DOWNLOAD_MULTIPLIER;
            link.download = `my-card-${currentType}-${currentColor}-${currentFaction}-${outputWidth}x${outputHeight}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            downloadButton.innerText = '下載卡片';
            downloadButton.disabled = false;
        }).catch(error => {
            console.error('卡片生成失敗:', error);
            alert('卡片生成失敗，請稍後再試。');
            downloadButton.innerText = '下載卡片';
            downloadButton.disabled = false;
        });
    });
    
    // --- 6. 初始化 ---
    cardTypeSelect.value = 'leader';
    colorSelect.value = 'none';
    factionSelect.value = 'uss';
    document.querySelector('input[name="awake-status"][value="before"]').checked = true;
    lifeNumberSelect.value = '5';
    costSelect.value = '0';
    supportRangeSelect.value = 'handfield';
    supportValueSelect.value = '100';
    powerSelect.value = '400';
    fullArtToggle.checked = false;
    
    // 執行一次主函式來設定初始 UI 和卡片
    onSelectionChange();
});