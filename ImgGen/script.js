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
    
    // !! 關鍵改動：獲取戰力控制項
    const powerOptionsGroup = document.getElementById('power-options-group');
    const powerSelect = document.getElementById('power-select');

    // 卡片圖層 (13層)
    const baseLayer = document.getElementById('base-layer');
    const bgVisualLayer = document.getElementById('bg-visual-layer');
    const markLayer = document.getElementById('mark-layer');
    const fogLayer = document.getElementById('fog-layer');
    const frameLayer = document.getElementById('frame-layer');
    const topFrameLayer = document.getElementById('top-frame-layer'); 
    const extraBaseLayer = document.getElementById('extra-layer-base');
    const extraFactionLayer = document.getElementById('extra-layer-faction');
    const extraTextLayer = document.getElementById('extra-layer-text');
    const extraNumberLayer = document.getElementById('extra-layer-number');
    const supportRangeLayer = document.getElementById('support-range-layer');
    const supportValueLayer = document.getElementById('support-value-layer');
    // !! 關鍵改動：獲取戰力圖層
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
    let currentImage = null; 
    let currentMask = new Image(); 
    let currentColor = 'none'; 
    let currentType = 'leader'; 
    let currentFaction = 'uss'; 
    let isFullArt = false; 
    let currentLifeStatus = 'before';
    let currentLifeNumber = '4';
    let currentCost = '0';
    let currentSupportRange = 'hand';
    let currentSupportValue = '100';
    // !! 關鍵改動：新增戰力狀態
    let currentPower = '100'; 
    // 圖片變換狀態
    const imgState = { zoom: 1, offsetX: 0, offsetY: 0 };
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    // --- 3. 核心繪圖函式 (Canvas) ---
    // ( ... redrawCanvas, drawAspectCover, resetPlaceholder 函式保持不變 ... )
    function redrawCanvas() {
        ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT); 
        if (!currentMask.complete || currentMask.naturalHeight === 0) return;
        if (!currentImage) {
            ctx.fillStyle = '#999';
            ctx.font = '60px sans-serif'; 
            ctx.textAlign = 'center';
            ctx.fillText('上傳你的卡圖', TARGET_WIDTH / 2, TARGET_HEIGHT / 2);
            return;
        }
        ctx.save();
        const scaledWidth = currentImage.width * imgState.zoom;
        const scaledHeight = currentImage.height * imgState.zoom;
        if (isFullArt) {
            ctx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
        } else {
            drawAspectCover(ctx, currentMask, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
        }
        ctx.globalCompositeOperation = 'source-over';
        ctx.restore();
    }
    function drawAspectCover(ctx, img, x, y, w, h) {
        const imgRatio = img.width / img.height;
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
        currentImage = null;
        zoomSlider.value = 1;
        imgState.zoom = 1;
        imgState.offsetX = 0;
        imgState.offsetY = 0;
        redrawCanvas(); 
    }

    // --- 4. 核心更新函式 (IMG 圖層) ---

    // !! 關鍵改動：更新所有 <img> 圖層
    function updateCardFrame() {
        // ... (讀取狀態) ...

        // 2. 宣告所有圖層路徑
        let basePath, bgPath, framePath, topFramePath, markPath, fogPath;
        let extraBasePath = TRANSPARENT_PIXEL;
        let extraFactionPath = TRANSPARENT_PIXEL;
        let extraTextPath = TRANSPARENT_PIXEL;
        let extraNumberPath = TRANSPARENT_PIXEL;
        let supportRangePath = TRANSPARENT_PIXEL;
        let supportValuePath = TRANSPARENT_PIXEL;
        let powerPath = TRANSPARENT_PIXEL; // 新增

        // 3. 根據規則計算路徑
        
        basePath = `${FRAME_FOLDER}/base-${currentColor}.png`;
        markPath = `${FRAME_FOLDER}/mark-${currentColor}-${currentFaction}.png`;
        fogPath = `${FRAME_FOLDER}/fog-${currentColor}.png`;

        if (currentType === 'leader') {
            // --- 旗艦規則 ---
            bgPath = `${FRAME_FOLDER}/bg-leader-${currentColor}.png`;
            framePath = `${FRAME_FOLDER}/frame-leader-${currentColor}.png`;
            topFramePath = `${FRAME_FOLDER}/topframe-leader.png`;
            
            // 載入「耐久度」
            extraBasePath = `${FRAME_FOLDER}/life-${currentColor}-base.png`;
            extraFactionPath = `${FRAME_FOLDER}/life-${currentColor}-${currentFaction}.png`;
            if (currentLifeStatus === 'before') {
                extraTextPath = `${FRAME_FOLDER}/life-${currentColor}-text.png`;
                extraNumberPath = `${FRAME_FOLDER}/life-${currentColor}-${currentLifeNumber}.png`;
            } else { 
                extraTextPath = `${FRAME_FOLDER}/life-${currentColor}-awake.png`;
                extraNumberPath = TRANSPARENT_PIXEL; 
            }
            
            // 載入「支援」(僅值)
            supportValuePath = `${FRAME_FOLDER}/support-${currentSupportValue}.png`;
            supportRangePath = TRANSPARENT_PIXEL; 
            
            // 載入「戰力」
            powerPath = `${FRAME_FOLDER}/power-${currentPower}.png`;

        } else if (currentType === 'kansen') {
            // --- 艦船規則 ---
            bgPath = `${FRAME_FOLDER}/bg-kansen-${currentColor}.png`;
            framePath = `${FRAME_FOLDER}/frame-kansen-${currentColor}.png`;
            topFramePath = `${FRAME_FOLDER}/topframe-kansen.png`;
            
            // 載入「費用」
            extraBasePath = `${FRAME_FOLDER}/cost-${currentColor}-base.png`;
            extraFactionPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentFaction}.png`;
            extraTextPath = `${FRAME_FOLDER}/cost-${currentColor}-text.png`;
            extraNumberPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentCost}.png`;

            // 載入「支援」(範圍 + 值)
            supportRangePath = `${FRAME_FOLDER}/support-${currentSupportRange}.png`;
            supportValuePath = `${FRAME_FOLDER}/support-${currentSupportValue}.png`;
            
            // 載入「戰力」
            powerPath = `${FRAME_FOLDER}/power-${currentPower}.png`;

        } else if (currentType === 'event') {
            // --- 事件規則 ---
            bgPath = `${FRAME_FOLDER}/bg-event.png`; 
            framePath = `${FRAME_FOLDER}/frame-event-${currentColor}.png`;
            topFramePath = `${FRAME_FOLDER}/topframe-event.png`;
            
            // 載入「費用」
            extraBasePath = `${FRAME_FOLDER}/cost-${currentColor}-base.png`;
            extraFactionPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentFaction}.png`;
            extraTextPath = `${FRAME_FOLDER}/cost-${currentColor}-text.png`;
            extraNumberPath = `${FRAME_FOLDER}/cost-${currentColor}-${currentCost}.png`;
            
            // 事件無支援、無戰力 (路徑保持透明)
        }

        // 4. 更新所有 13 個 <img> 圖層的 src
        baseLayer.src = basePath;
        bgVisualLayer.src = bgPath;
        markLayer.src = markPath; 
        fogLayer.src = fogPath; 
        frameLayer.src = framePath;
        topFrameLayer.src = topFramePath;
        extraBaseLayer.src = extraBasePath;
        extraFactionLayer.src = extraFactionPath;
        extraTextLayer.src = extraTextPath;
        extraNumberLayer.src = extraNumberPath;
        supportRangeLayer.src = supportRangePath;
        supportValueLayer.src = supportValuePath;
        powerLayer.src = powerPath; // 設定新圖層
        
        // 5. 更新 Canvas 遮罩
        currentMask.crossOrigin = "anonymous";
        currentMask.src = bgPath; 
        currentMask.onload = () => { redrawCanvas(); };
        if (currentMask.complete) { redrawCanvas(); }
    }

    // --- 5. 事件監聽器 ---

    // !! 關鍵改動：唯一的主控制函式
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
        currentPower = powerSelect.value; // 新增

        // 2. 處理條件 UI 顯示 (規則 1)
        if (currentType === 'leader') {
            leaderOptionsGroup.style.display = 'flex';
            costOptionsGroup.style.display = 'none';
            supportOptionsGroup.style.display = 'flex';
            powerOptionsGroup.style.display = 'flex'; // 顯示戰力
            
            supportRangeGroup.style.display = 'none'; 
            supportValueGroup.style.display = 'flex'; 
            lifeNumberGroup.style.display = (currentLifeStatus === 'after') ? 'none' : 'flex';

        } else if (currentType === 'kansen') {
            leaderOptionsGroup.style.display = 'none';
            costOptionsGroup.style.display = 'flex';
            supportOptionsGroup.style.display = 'flex';
            powerOptionsGroup.style.display = 'flex'; // 顯示戰力
            
            supportRangeGroup.style.display = 'flex'; 
            supportValueGroup.style.display = 'flex'; 

        } else if (currentType === 'event') {
            leaderOptionsGroup.style.display = 'none';
            costOptionsGroup.style.display = 'flex';
            supportOptionsGroup.style.display = 'none';
            powerOptionsGroup.style.display = 'none'; // 隱藏戰力
        }
        
        // 3. 觸發卡片重繪
        updateCardFrame();
        // 4. 觸發 Canvas 重繪
        redrawCanvas(); 
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
    powerSelect.addEventListener('change', onSelectionChange); // 新增

    // (不變) 處理圖片上傳
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
                    redrawCanvas(); 
                };
                currentImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            resetPlaceholder(); 
        }
    });

    // (不變) 處理縮放滑桿
    zoomSlider.addEventListener('input', () => {
        if (!currentImage) return;
        imgState.zoom = parseFloat(zoomSlider.value);
        redrawCanvas();
    });

    // (不變) 處理滑鼠拖曳
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
            const image = canvas.toDataURL('png');
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
    // (更新) 設定所有預設值
    cardTypeSelect.value = 'leader';
    colorSelect.value = 'none';
    factionSelect.value = 'uss';
    document.querySelector('input[name="awake-status"][value="before"]').checked = true;
    costSelect.value = '0';
    fullArtToggle.checked = false;
    // !! 關鍵改動：在這裡設定您要的預設值 !!
    lifeNumberSelect.value = '5';        // 耐久度 5
    supportRangeSelect.value = 'handfield'; // 支援範圍 手牌‧戰場
    supportValueSelect.value = '100';      // 支援值 100
    powerSelect.value = '400';         // 戰力 400
    // 執行一次主函式來設定初始 UI 和卡片
    onSelectionChange();
});