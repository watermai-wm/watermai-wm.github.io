document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DOM 元素獲取 ---
    const cardEditor = document.getElementById('card-editor');
    const imageUpload = document.getElementById('image-upload');
    const downloadButton = document.getElementById('download-card'); // 修正 ID
    
	
    // 控制項
    const colorSelect = document.getElementById('color-select');
    const cardTypeSelect = document.getElementById('card-type-select');
    const factionSelect = document.getElementById('faction-select');
    const affiliationSelect = document.getElementById('affiliation-select'); // !! 關鍵改動：新增
    const zoomSlider = document.getElementById('zoom-slider');
    const fullArtToggle = document.getElementById('full-art-toggle');
    const cardNameInput = document.getElementById('card-name-input'); // 獲取輸入框
	const factionInput = document.getElementById('faction-input'); // !! 關鍵改動 !!
	const cardIdInput = document.getElementById('card-id-input'); // !! 新增 !!
    
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
    const affiliationLayer = document.getElementById('affiliation-layer'); // !! 關鍵改動：新增
    
    // Canvas 相關
    const playerCanvas = document.getElementById('player-image-canvas');
    const ctx = playerCanvas.getContext('2d');
    const textCanvas = document.getElementById('text-canvas');
    const textCtx = textCanvas.getContext('2d');
    
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
	let currentCardId = ''; // !! 新增：卡片編號狀態
    let currentAffiliation = 'none'; // !! 關鍵改動：新增
    let isFullArt = false; 
    let currentLifeStatus = 'before';
    let currentLifeNumber = '4';
    let currentCost = '0';
    let currentSupportRange = 'hand';
    let currentSupportValue = '0';
    let currentPower = '100'; 
    let currentCardName = ''; // 卡片名稱狀態
	let currentfaction = ''; // !! 關鍵改動：新增勢力狀態
    
    // 圖片變換狀態
    const imgState = { zoom: 1, offsetX: 0, offsetY: 0 };
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // 圖片載入計數器
    let imagesToLoad = 0;
    let imagesLoaded = 0;

    // --- 3. 核心繪圖函式 (Canvas) ---
    
    // 繪製文字
    function redrawText() {
        textCtx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);

        // --- 1. 繪製卡片名稱 ---
        if (currentCardName) {
            const textX = TARGET_WIDTH / 2;
            const textY = 936;
            const fontSize = 40; // 這是您在 script.js 中設定的 40px

            textCtx.font = `300 ${fontSize}px "Chiron GoRound TC"`;
            textCtx.textAlign = 'center';
            textCtx.strokeStyle = 'black';
            textCtx.lineWidth = 3; // 這是您在 script.js 中設定的 3px
            textCtx.fillStyle = 'white';
            
            textCtx.strokeText(currentCardName, textX, textY);
            textCtx.fillText(currentCardName, textX, textY);
        }
		// --- 2. 繪製勢力 ---
        if (currentfaction) {
            let textX;
            const textY = 1010;
            
            // !! 您可以在這裡調整「勢力」的字體大小 !!
            const fontSize = 20; // 設為 30px，比卡片名稱小

            // 根據卡牌種類決定 X 座標 (置中點)
            if (currentType === 'leader' || currentType === 'kansen') {
                textX = 531; // 旗艦/艦船: 靠右置中
            } else { // 'event'
                textX = TARGET_WIDTH / 2; // 事件: 整張圖置中
            }

            // 使用相同的字體和樣式
            textCtx.font = `300 ${fontSize}px "Chiron GoRound TC"`; // 300 = Light
            textCtx.textAlign = 'center';
            textCtx.strokeStyle = 'black';
            textCtx.lineWidth = 2; // 2px 描邊
            textCtx.fillStyle = 'white';
            
            textCtx.strokeText(currentfaction, textX, textY);
            textCtx.fillText(currentfaction, textX, textY);
        }
		// --- 3. 繪製編號 --- (!! 新增區塊 !!)
        if (currentCardId) {
            const textX = 579;
            const textY = 1052;
            
            // !! 您可以在這裡單獨調整「編號」的字體大小 !!
            const fontSize = 18; // 設置一個獨立的字體大小

            textCtx.font = `500 ${fontSize}px "Chiron GoRound TC"`; // 300 = Light
            textCtx.textAlign = 'left'; // 根據您的要求 (579, 1052) 往右
            textCtx.strokeStyle = 'black';
            textCtx.lineWidth = 1; // 1px 描邊 (可自行調整)
            textCtx.fillStyle = 'white';
            
            textCtx.strokeText(currentCardId, textX, textY);
            textCtx.fillText(currentCardId, textX, textY);
        }
    }
    
    // 繪製背景/圖片/Fog
    function redrawCanvas() {
        if (imagesLoaded < imagesToLoad) {
            ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);
            ctx.fillStyle = '#999';
            ctx.font = '60px sans-serif'; 
            ctx.textAlign = 'center';
            ctx.fillText('圖片載入中...', TARGET_WIDTH / 2, TARGET_HEIGHT / 2);
            return;
        }
        ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT); 
        ctx.save(); 
        drawAspectCover(ctx, currentBaseImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
        drawAspectCover(ctx, currentBgVisualImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
        drawAspectCover(ctx, currentMarkImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
        if (currentImage) {
            ctx.save();
            const scaledWidth = currentImage.width * imgState.zoom;
            const scaledHeight = currentImage.height * imgState.zoom;
            if (isFullArt) {
                ctx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
            } else {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = TARGET_WIDTH;
                tempCanvas.height = TARGET_HEIGHT;
                const tempCtx = tempCanvas.getContext('2d');
                drawAspectCover(tempCtx, currentMask, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
                tempCtx.globalCompositeOperation = 'source-in';
                tempCtx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
                ctx.drawImage(tempCanvas, 0, 0);
            }
            ctx.restore();
        } else {
            ctx.fillStyle = 'rgba(153, 153, 153, 0.5)'; 
            ctx.font = '60px sans-serif'; 
            ctx.textAlign = 'center';
            ctx.fillText('上傳你的卡圖', TARGET_WIDTH / 2, TARGET_HEIGHT / 2);
        }
        ctx.globalCompositeOperation = 'multiply'; 
        drawAspectCover(ctx, currentFogImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT); 
        ctx.restore(); 
        redrawText();
    }
    
    // 輔助函式：修正 typo (img.img.height -> img.height)
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
        onSelectionChange(); // <--- 這樣就夠了，onSelectionChange 會處理後續所有繪製
    }


    // --- 4. 核心更新函式 (IMG 圖層) ---

    // 圖片批次載入器
    function loadAllImages(paths) {
        let baseImages = [
            { obj: currentBaseImage, src: paths.basePath },
            { obj: currentBgVisualImage, src: paths.bgPath },
            { obj: currentMarkImage, src: paths.markPath },
            { obj: currentFogImage, src: paths.fogPath },
            { obj: currentMask, src: paths.bgPath }
        ];
        imagesToLoad = baseImages.length;
        imagesLoaded = 0;
        const onImageLoad = () => {
            imagesLoaded++;
            if (imagesLoaded === imagesToLoad) {
                redrawCanvas(); 
            }
        };
        if (currentImage) {
            imagesToLoad++;
            if (currentImage.complete) {
                onImageLoad();
            } else {
                currentImage.onload = onImageLoad;
            }
        }
        baseImages.forEach(imgData => {
            imgData.obj.crossOrigin = "anonymous";
            if (imgData.obj.src !== imgData.src) {
                imgData.obj.src = imgData.src;
                if (!imgData.obj.complete) {
                    imgData.obj.onload = onImageLoad;
                } else {
                    onImageLoad();
                }
            } else {
                onImageLoad();
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
        let affiliationPath = TRANSPARENT_PIXEL; // !! 關鍵改動：新增

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
                // 修正：FRAME_DELETE -> FRAME_FOLDER
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

        // !! 關鍵改動：處理勢力圖層 !!
        if (currentAffiliation === 'al') {
            if (currentType === 'leader') {
                affiliationPath = `${FRAME_FOLDER}/affiliation-al-leader.png`;
            } else if (currentType === 'kansen') {
                affiliationPath = `${FRAME_FOLDER}/affiliation-al-kansen.png`;
            } else if (currentType === 'event') {
                affiliationPath = `${FRAME_FOLDER}/affiliation-al-event.png`;
            }
        } else if (currentAffiliation === 'ca') {
            if (currentType === 'leader') {
                affiliationPath = `${FRAME_FOLDER}/affiliation-ca-leader.png`;
            } else if (currentType === 'kansen') {
                affiliationPath = `${FRAME_FOLDER}/affiliation-ca-kansen.png`;
            } else if (currentType === 'event') {
                affiliationPath = `${FRAME_FOLDER}/affiliation-ca-event.png`;
            }
        }
        // 如果 currentAffiliation === 'none'，affiliationPath 會維持 TRANSPARENT_PIXEL

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
        affiliationLayer.src = affiliationPath; // !! 關鍵改動：新增
        
        // 5. 返回需要載入到 Canvas 的圖片路徑
        return { basePath, bgPath, markPath, fogPath };
    }

    // --- 5. 事件監聽器 ---
    
    function onSelectionChange() {
        // 1. 讀取所有全域狀態
        currentColor = colorSelect.value;
        currentType = cardTypeSelect.value;
        currentFaction = factionSelect.value;
        currentAffiliation = affiliationSelect.value; // !! 關鍵改動：新增
        isFullArt = fullArtToggle.checked;
        currentLifeStatus = document.querySelector('input[name="awake-status"]:checked').value;
        currentLifeNumber = lifeNumberSelect.value;
        currentCost = costSelect.value;
        currentSupportRange = supportRangeSelect.value;
        currentSupportValue = supportValueSelect.value;
        currentPower = powerSelect.value;
        currentCardName = cardNameInput.value; 
		currentfaction = factionInput.value; // !! 新增
		currentCardId = cardIdInput.value; // !! 新增
        
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
        
        // 4. (文字繪製已交給 redrawCanvas 處理)
        // redrawText(); // <--- 已刪除
    }

    // 綁定所有會影響卡片的控制項到主函式
    colorSelect.addEventListener('change', onSelectionChange);
    cardTypeSelect.addEventListener('change', onSelectionChange);
    factionSelect.addEventListener('change', onSelectionChange);
    affiliationSelect.addEventListener('change', onSelectionChange); // !! 關鍵改動：新增
    fullArtToggle.addEventListener('change', onSelectionChange);
    lifeNumberSelect.addEventListener('change', onSelectionChange);
    awakeStatusRadios.forEach(radio => {
        radio.addEventListener('change', onSelectionChange);
    });
    costSelect.addEventListener('change', onSelectionChange);
    supportRangeSelect.addEventListener('change', onSelectionChange);
    supportValueSelect.addEventListener('change', onSelectionChange);
    powerSelect.addEventListener('change', onSelectionChange); 

    // 新增文字輸入框的即時監聽
    cardNameInput.addEventListener('input', () => {
        currentCardName = cardNameInput.value;
        redrawText(); // 只需要重繪文字畫布
    });
	// !! 關鍵改動：新增勢力輸入框的即時監聽
    factionInput.addEventListener('input', () => {
        currentfaction = factionInput.value;
        redrawText(); // 只需要重繪文字畫布
    });
	// !! 新增：編號輸入框的即時監聽 !!
    cardIdInput.addEventListener('input', () => {
        currentCardId = cardIdInput.value;
        redrawText(); // 只需要重繪文字畫布
    });

    // 處理圖片上傳
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                currentImage = new Image();
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
                    
                    onSelectionChange(); // 重新觸發載入
                };
                currentImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            resetPlaceholder(); // 取消選擇時，移除玩家圖片並重繪
        }
    });

    // 處理縮放滑桿
    zoomSlider.addEventListener('input', () => {
        if (!currentImage) return;
        imgState.zoom = parseFloat(zoomSlider.value);
        redrawCanvas();
    });

    // 處理滑鼠拖曳
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
        redrawCanvas();
    });
    const stopDragging = () => {
        if (isDragging) {
            isDragging = false;
            playerCanvas.style.cursor = 'grab';
        }
    };
    playerCanvas.addEventListener('mouseup', stopDragging);
    playerCanvas.addEventListener('mouseleave', stopDragging);

    // 處理下載卡片功能
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
    affiliationSelect.value = 'none'; // !! 關鍵改動：新增
    document.querySelector('input[name="awake-status"][value="before"]').checked = true;
    lifeNumberSelect.value = '5';
    costSelect.value = '0';
    supportRangeSelect.value = 'handfield';
    supportValueSelect.value = '100';
    powerSelect.value = '400';
    fullArtToggle.checked = false;
    cardNameInput.value = '';
	factionInput.value = ''; // !! 關鍵改動：初始化勢力輸入框
	cardIdInput.value = 'CE00-000'; // !! 新增：初始化編號輸入框
    
    // 等待字體載入
    document.fonts.ready.then(() => {
        console.log('字體已載入，執行初始繪製。');
        onSelectionChange();
    });
});