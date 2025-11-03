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

    // 卡片圖層 (13層)
    const baseLayer = document.getElementById('base-layer');
    const bgVisualLayer = document.getElementById('bg-visual-layer');
    const markLayer = document.getElementById('mark-layer');
    // const fogLayer = document.getElementById('fog-layer'); // !! 關鍵修正：已刪除此行
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
    let currentImage = null; 
    let currentMask = new Image(); 
    let currentFogImage = new Image(); // Fog 圖片物件
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

    // --- 3. 核心繪圖函式 (Canvas) ---
    
    function redrawCanvas() {
        ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT); 

        // 檢查 3 個關鍵圖片
        if (!currentMask.complete || currentMask.naturalHeight === 0) return;
        // !! 關鍵修正：檢查 Fog 圖片
        if (!currentFogImage.complete || currentFogImage.naturalHeight === 0) return; 
        
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
        
        // --- 步驟 1 & 2: 繪製遮罩和玩家圖片 ---
        if (isFullArt) {
            ctx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
        } else {
            drawAspectCover(ctx, currentMask, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);
            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(currentImage, imgState.offsetX, imgState.offsetY, scaledWidth, scaledHeight);
        }
        
        // --- 步驟 3: 繪製 Fog (色彩增值) ---
        ctx.globalCompositeOperation = 'multiply'; 
        drawAspectCover(ctx, currentFogImage, 0, 0, TARGET_WIDTH, TARGET_HEIGHT); 
        
        // --- 步驟 4: 恢復狀態 ---
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
        fogPath = `${FRAME_FOLDER}/fog-${currentColor}.png`; // 計算 fog 路徑

        if (currentType === 'leader') {
            bgPath = `${FRAME_FOLDER}/bg-leader-${currentColor}.png`;
            framePath = `${FRAME_FOLDER}/frame-leader-${currentColor}.png`;
            topFramePath = `${FRAME_FOLDER}/topframe-leader.png`;
            extraBasePath = `${FRAME_FOLDER}/life-${currentColor}-base.png`;
            extraFactionPath = `${FRAME_FOLDER}/life-${currentColor}-${currentFaction}.png`;
            if (currentLifeStatus === 'before') {
                extraTextPath = `${FRAME_FOLDER}/life-${currentColor}-text.png`;
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

        // 4. 更新所有 <img> 圖層的 src (fogLayer.src 已被移除)
        baseLayer.src = basePath;
        bgVisualLayer.src = bgPath;
        markLayer.src = markPath; 
        // fogLayer.src = fogPath; // !! 關鍵修正：已刪除此行
        frameLayer.src = framePath;
        topFrameLayer.src = topFramePath;
        extraBaseLayer.src = extraBasePath;
        extraFactionLayer.src = extraFactionPath;
        extraTextLayer.src = extraTextPath;
        extraNumberLayer.src = extraNumberPath;
        supportRangeLayer.src = supportRangePath;
        supportValueLayer.src = supportValuePath;
        powerLayer.src = powerPath; 
        
        // 5. 更新 Canvas 遮罩和 Fog 圖片
        currentMask.crossOrigin = "anonymous";
        currentMask.src = bgPath; 
        currentMask.onload = () => { redrawCanvas(); };
        if (currentMask.complete) { redrawCanvas(); }
        
        // 載入 fog 圖片到 JS 物件
        currentFogImage.crossOrigin = "anonymous";
        currentFogImage.src = fogPath;
        currentFogImage.onload = () => { redrawCanvas(); };
        if (currentFogImage.complete) { redrawCanvas(); }
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
    powerSelect.addEventListener('change', onSelectionChange); 

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