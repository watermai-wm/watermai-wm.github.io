let allCards = []; // 存儲所有卡片數據
let currentPage = 1;
const cardsPerPage = 20;
let deck = { flagship: {}, mainDeck: {} }; // 旗艦與牌組


document.addEventListener("DOMContentLoaded", () => {
    console.log("頁面加載完成");
    if (typeof cards === "undefined") {
        console.error("錯誤: cards 變數未定義，請確保 data.js 正確載入");
        return;
    }
    allCards = cards;
    console.log("成功載入卡片數據", allCards);
	populateFilterOptions();
    searchCards();
});

function populateFilterOptions() {
    const filterMapping = {
        filterColorGroup: '顏　色',
        filterTypeGroup: '種　類',
        filterCostGroup: '費　用',
        filterPowerGroup: '戰　力',
        filterFactionGroup: '陣　營',
        filterShipTypeGroup: '艦船類型',
        filterRarityGroup: '罕　貴',
        filterForceGroup: '勢　力',
        filterSupportTypeGroup: '支援範圍',
        filterSupportValueGroup: '支援值',
    };
	
	const colorOrder = [
        "紅", "藍", "黃", "黑",
        "紅藍", "紅黃", "紅黑",
        "藍黃", "藍黑", "黃黑",
        "魔方", "無"
    ];
	
	const factionOrder = [
        "白鷹", "皇家", "鐵血", "重櫻",
        "自由鳶尾", "維希教廷", "東煌",
        "北方聯合"
    ];
	
	const shiptypeOrder = [
        "驅逐", "戰巡", "輕巡", "重巡",
        "輕航", "航母", "潛艇", "戰列",
        "維修", "潛母", "超巡", "航戰"
    ];
	
	const rarityOrder = [
        "N", "R", "SR", "SSR",
        "UR", "L", "SR-SEC", "SSR-SEC",
        "UR-SEC", "L-SEC", "PR", "N-SEC", "SPR"
    ];
	const forceOrder = [
        "碧藍航線", "赤色中軸"
    ];
	const supporttypeOrder = [
        "手牌", "戰場", "手牌·戰場"
    ];

    Object.entries(filterMapping).forEach(([groupId, attributeKey]) => {
       // 使用 Set 來獲取唯一值，並過濾掉 "-"
        const uniqueValues = new Set(
            cards
                .map(card => card.attributes[attributeKey])
                .filter(value => value && value !== "-") // 過濾掉 "-"
        );

        const filterGroup = document.getElementById(groupId);
		
		//顏色排序
		if (groupId === 'filterColorGroup') {
            // 依照指定順序排序
            const sortedValues = colorOrder.filter(color => uniqueValues.has(color));

            sortedValues.forEach(value => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${groupId}" value="${value}" onchange="searchCards()"> ${value}`;
                filterGroup.appendChild(label);
            });

        }
		
		//陣營排序
		else if (groupId === 'filterFactionGroup') {
            // 依照指定順序排序
            const sortedValues = factionOrder.filter(faction => uniqueValues.has(faction));

            sortedValues.forEach(value => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${groupId}" value="${value}" onchange="searchCards()"> ${value}`;
                filterGroup.appendChild(label);
            });

        }
		
		//艦船類型排序
		else if (groupId === 'filterShipTypeGroup') {
            // 依照指定順序排序
            const sortedValues = shiptypeOrder.filter(shipType => uniqueValues.has(shipType));

            sortedValues.forEach(value => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${groupId}" value="${value}" onchange="searchCards()"> ${value}`;
                filterGroup.appendChild(label);
            });

        }
		
		//稀有度排序
		else if (groupId === 'filterRarityGroup') {
            // 依照指定順序排序
            const sortedValues = rarityOrder.filter(rarity => uniqueValues.has(rarity));

            sortedValues.forEach(value => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${groupId}" value="${value}" onchange="searchCards()"> ${value}`;
                filterGroup.appendChild(label);
            });

        }
		
		//勢力排序
		else if (groupId === 'filterForceGroup') {
            // 依照指定順序排序
            const sortedValues = forceOrder.filter(force => uniqueValues.has(force));

            sortedValues.forEach(value => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${groupId}" value="${value}" onchange="searchCards()"> ${value}`;
                filterGroup.appendChild(label);
            });

        }
		
		//支援範圍排序
		else if (groupId === 'filterSupportTypeGroup') {
            // 依照指定順序排序
            const sortedValues = supporttypeOrder.filter(supportType => uniqueValues.has(supportType));

            sortedValues.forEach(value => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${groupId}" value="${value}" onchange="searchCards()"> ${value}`;
                filterGroup.appendChild(label);
            });

        }
		
		else {
        // 針對數字類型屬性進行排序
        const sortedValues = Array.from(uniqueValues).sort((a, b) => {
                if (!isNaN(a) && !isNaN(b)) {
                    return parseFloat(a) - parseFloat(b);
                }
                return a.localeCompare(b);
            });

            sortedValues.forEach(value => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="checkbox" name="${groupId}" value="${value}" onchange="searchCards()"> ${value}`;
                filterGroup.appendChild(label);
            });
        }
    });

    // 填充「獲取方法」的下拉式選單
    const obtainSelect = document.getElementById('filterObtainSelect');
    const uniqueObtainMethods = new Set(
        cards
            .map(card => card.acquisition_method)
            .filter(method => method) // 過濾掉空值
    );

    // 將獲取方法排序並添加到下拉式選單
    Array.from(uniqueObtainMethods)
        .sort()
        .forEach(method => {
            const option = document.createElement('option');
            option.value = method;
            option.textContent = method;
            obtainSelect.appendChild(option);
        });
}

function searchCards() {
    const nameInput = document.getElementById('searchName').value.toLowerCase();
    const codeInput = document.getElementById('searchCode').value.toLowerCase();
    const effectInput = document.getElementById('searchEffect').value.toLowerCase();
	const effectFilter = document.getElementById('filterEffectSelect').value; // 取得下拉選單選擇的值

    // 獲取選中的篩選條件
    const filters = {
        color: Array.from(document.querySelectorAll('input[name="filterColorGroup"]:checked')).map(checkbox => checkbox.value),
        type: Array.from(document.querySelectorAll('input[name="filterTypeGroup"]:checked')).map(checkbox => checkbox.value),
        cost: Array.from(document.querySelectorAll('input[name="filterCostGroup"]:checked')).map(checkbox => checkbox.value),
        power: Array.from(document.querySelectorAll('input[name="filterPowerGroup"]:checked')).map(checkbox => checkbox.value),
        faction: Array.from(document.querySelectorAll('input[name="filterFactionGroup"]:checked')).map(checkbox => checkbox.value),
        shipType: Array.from(document.querySelectorAll('input[name="filterShipTypeGroup"]:checked')).map(checkbox => checkbox.value),
        rarity: Array.from(document.querySelectorAll('input[name="filterRarityGroup"]:checked')).map(checkbox => checkbox.value),
        force: Array.from(document.querySelectorAll('input[name="filterForceGroup"]:checked')).map(checkbox => checkbox.value),
        supportType: Array.from(document.querySelectorAll('input[name="filterSupportTypeGroup"]:checked')).map(checkbox => checkbox.value),
        supportValue: Array.from(document.querySelectorAll('input[name="filterSupportValueGroup"]:checked')).map(checkbox => checkbox.value),
        obtain: document.getElementById('filterObtainSelect').value // 獲取下拉式選單的值
    };

    const filteredCards = cards.filter(card => 
        (nameInput === '' || card.card_name.toLowerCase().includes(nameInput)) &&
        (codeInput === '' || card.card_code.toLowerCase().includes(codeInput)) &&
        (effectInput === '' || card.card_effect.toLowerCase().includes(effectInput)) &&
        (filters.color.length === 0 || filters.color.includes(card.attributes['顏　色'])) &&
        (filters.type.length === 0 || filters.type.includes(card.attributes['種　類'])) &&
        (filters.cost.length === 0 || filters.cost.includes(card.attributes['費　用'])) &&
        (filters.power.length === 0 || filters.power.includes(card.attributes['戰　力'])) &&
        (filters.faction.length === 0 ||  filters.faction.some(faction => card.attributes['陣　營'].split('/').includes(faction))) && // 處理陣營為「白鷹/重櫻」的情況
        (filters.shipType.length === 0 || filters.shipType.includes(card.attributes['艦船類型'])) &&
        (filters.rarity.length === 0 || filters.rarity.includes(card.attributes['罕　貴'])) &&
        (filters.force.length === 0 || filters.force.includes(card.attributes['勢　力'])) &&
        (filters.supportType.length === 0 || filters.supportType.includes(card.attributes['支援範圍'])) &&
        (filters.supportValue.length === 0 || filters.supportValue.includes(card.attributes['支援值'])) &&
        (filters.obtain === '' || card.acquisition_method === filters.obtain) && // 篩選獲取方法
		(effectFilter === '' || (card.card_effect && card.card_effect.includes(effectFilter))) // 🔹 根據選單篩選技能關鍵字
    );

    renderCards(filteredCards);
}

function renderCards(filteredCards) {
    let resultsDiv = document.getElementById("results");
    if (!resultsDiv) {
        console.error("錯誤: 找不到 results 容器");
        return;
    }
    resultsDiv.innerHTML = "";
	resultsDiv.style.display = "flex";
    resultsDiv.style.flexWrap = "wrap";
    resultsDiv.style.gap = "10px";
    resultsDiv.style.justifyContent = "center";
     // 依照 card_id **降冪排序**（從大到小）
    filteredCards.sort((a, b) => parseInt(b.card_id) - parseInt(a.card_id));
    let start = (currentPage - 1) * cardsPerPage;
    let paginatedCards = filteredCards.slice(start, start + cardsPerPage);
    
    paginatedCards.forEach(card => {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
		cardDiv.style.width = "200px";
        cardDiv.style.textAlign = "center";
        
        let cardHTML = `
            <div class="card-image-container">
                <img src="images/${card.card_id}.png" class="card-image" alt="${card.card_name} style="cursor: pointer;" onclick="openImageModal(this.src)">
                <div class="card-overlay" id="overlay-${card.card_id}"></div>
            </div>
            <div class="card-text">
                <h2>${card.card_name}</h2>
                
                <div class="card-options" style="display: grid; grid-template-columns: 1fr; gap: 5px; justify-items: center; padding: 5px; border-radius: 5px;">
                    <label style="font-size: 14px; display: block; text-align: center; padding: 5px; border-radius: 3px;">
                        <input type="radio" name="card-${card.card_id}" value="0" ${deck[card.card_id] === 0 ? "checked" : ""} onchange="updateDeck('${card.card_id}', 0)"> 0
                    </label>
                    ${card.attributes['罕　貴'] === 'L' || card.attributes['罕　貴'] === 'L-SEC' ? `
                        <label style="font-size: 14px; padding: 5px; border-radius: 3px;">
                            <input type="radio" name="card-${card.card_id}" value="1" ${deck[card.card_id] === 1 ? "checked" : ""} onchange="updateDeck('${card.card_id}', 1)"> 1
                        </label>
                    ` : `
                        <div style="display: flex; gap: 5px;">
                            <label style="font-size: 14px; padding: 5px; border-radius: 3px;">
                                <input type="radio" name="card-${card.card_id}" value="1" ${deck[card.card_id] === 1 ? "checked" : ""} onchange="updateDeck('${card.card_id}', 1)"> 1
                            </label>
                            <label style="font-size: 14px; padding: 5px; border-radius: 3px;">
                                <input type="radio" name="card-${card.card_id}" value="2" ${deck[card.card_id] === 2 ? "checked" : ""} onchange="updateDeck('${card.card_id}', 2)"> 2
                            </label>
                        </div>
                        <div style="display: flex; gap: 5px;">
                            <label style="font-size: 14px; padding: 5px; border-radius: 3px;">
                                <input type="radio" name="card-${card.card_id}" value="3" ${deck[card.card_id] === 3 ? "checked" : ""} onchange="updateDeck('${card.card_id}', 3)"> 3
                            </label>
                            <label style="font-size: 14px; padding: 5px; border-radius: 3px;">
                                <input type="radio" name="card-${card.card_id}" value="4" ${deck[card.card_id] === 4 ? "checked" : ""} onchange="updateDeck('${card.card_id}', 4)"> 4
                            </label>
                        </div>
                    `}
                </div>
            </div>
        `;
        
        cardDiv.innerHTML = cardHTML;
        resultsDiv.appendChild(cardDiv);
    });
	// Render pagination buttons
    renderPagination(filteredCards.length);
}



function updateDeck(cardID, count) {
    let card = allCards.find(c => c.card_id == cardID);
    let rarity = card.attributes['罕　貴'];
    let cardCode = card.card_code;
    
    if (rarity === 'L' || rarity === 'L-SEC') {
        if (count > 1) {
            count = 1; // 旗艦只能選擇 0 或 1
        }
        if (!deck.flagship) {
            deck.flagship = {};
        }
        if (count === 1) {
            if (Object.keys(deck.flagship).length < 2) {
                deck.flagship[cardID] = count;
            } else {
                showSoftAlert("旗艦區最多只能選擇兩張卡片");
                return;
            }
        } else {
            delete deck.flagship[cardID];
        }
    } else {
		let totalCards = Object.values(deck.mainDeck).reduce((sum, c) => sum + c, 0);
        if (totalCards + count > 50) {
            showSoftAlert("超過上限");
            return;
        }
        if (count === 0) {
            delete deck.mainDeck[cardID];
        } else {
            deck.mainDeck[cardID] = count;
        }
    }
    renderDeck();
	updateDeckCounter();
    document.getElementById(`overlay-${cardID}`).innerText = count;
    document.getElementById(`overlay-${cardID}`).style.display = count > 0 ? 'block' : 'none';
}


function renderDeck() {
    let flagshipDiv = document.getElementById("flagship");
    let deckDiv = document.getElementById("deck");
    
    if (!flagshipDiv) {
        flagshipDiv = document.createElement("div");
        flagshipDiv.id = "flagship";
        document.body.appendChild(flagshipDiv);
    }
    if (!deckDiv) {
        deckDiv = document.createElement("div");
        deckDiv.id = "deck";
        document.body.appendChild(deckDiv);
    }
    
    flagshipDiv.innerHTML = "<h2 style='text-align: center; width: 100%;'>旗艦</h2><div class='flagship-container' style='max-width: 800px; margin: 0 auto;display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;'></div>";
    deckDiv.innerHTML = "<h2 style='text-align: center; width: 100%;'>牌組</h2><div class='deck-container' style='max-width: 800px; margin: 0 auto;display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;'></div>";
    
    let flagshipContainer = flagshipDiv.querySelector(".flagship-container");
    let deckContainer = deckDiv.querySelector(".deck-container");
    
    Object.keys(deck.flagship).forEach(cardID => {
        let card = allCards.find(c => c.card_id == cardID);
        let cardDiv = createCardElement(card, deck.flagship[cardID]);
        flagshipContainer.appendChild(cardDiv);
    });
    

	 let sortedDeck = Object.keys(deck.mainDeck)
        .map(cardID => allCards.find(c => c.card_id == cardID))
        .sort((a, b) => {
            const typeOrder = { "艦船卡": 1, "事件卡": 2 };
            const typeA = typeOrder[a.attributes['種　類']] || 3;
            const typeB = typeOrder[b.attributes['種　類']] || 3;
            
            if (typeA !== typeB) return typeA - typeB;
            
            const costA = parseInt(a.attributes['費　用']) || 0;
            const costB = parseInt(b.attributes['費　用']) || 0;
            
            if (costA !== costB) return costB - costA;
            
            return b.card_code.localeCompare(a.card_code, 'zh-Hans-CN');
        });
    
    sortedDeck.forEach(card => {
        let cardDiv = createCardElement(card, deck.mainDeck[card.card_id]);
        deckContainer.appendChild(cardDiv);
    });
}


function createCardElement(card, count) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("deck-card");
    cardDiv.style.width = "100px";
    cardDiv.style.textAlign = "center";
    
    cardDiv.innerHTML = `
        <div class="card-image-container" style="position: relative;">
            <img src="images/${card.card_id}.png" class="deck-image" alt="${card.card_name}" style="width: 100px; height: auto; cursor: pointer;" onclick="openImageModal(this.src)">
            <div class="deck-overlay" style="position: absolute; top: 5px; right: 5px; background: rgba(0,0,0,0.7); color: white; border-radius: 50%; width: 20px; height: 20px; text-align: center; line-height: 20px; font-size: 14px;">${count}</div>
        </div>
        <div class="card-info" style="font-size: 14px; margin-top: 5px; text-align: center;">
            <div>${card.card_code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            <div>${card.card_name}</div>
        </div>
    `;
    return cardDiv;
}
// 打開放大圖片視窗
function openImageModal(imageSrc) {
    let modal = document.getElementById('imageModal');
    let modalImage = document.getElementById('modalImage');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';
        modal.onclick = closeImageModal;
        document.body.appendChild(modal);
        
        modalImage = document.createElement('img');
        modalImage.id = 'modalImage';
        modalImage.style.maxWidth = '80%';
        modalImage.style.maxHeight = '80%';
        modalImage.style.border = '5px solid white';
        modal.appendChild(modalImage);
    }
    
    modalImage.src = imageSrc;
    modal.style.display = 'flex';
}

// 關閉圖片視窗
function closeImageModal(event) {
    if (event.target.id === 'imageModal') {
        event.target.style.display = 'none';
    }
}


//分頁
function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / cardsPerPage);
    
    // Create pagination container if it doesn't exist
    let paginationDiv = document.getElementById("pagination");
    if (!paginationDiv) {
        paginationDiv = document.createElement("div");
        paginationDiv.id = "pagination";
        paginationDiv.style.textAlign = "center";
        paginationDiv.style.margin = "20px 0";
        document.getElementById("results").after(paginationDiv);
    } else {
        paginationDiv.innerHTML = "";
    }
    
    // Don't show pagination if there's only one page
    if (totalPages <= 1) {
        paginationDiv.style.display = "none";
        return;
    } else {
        paginationDiv.style.display = "block";
    }
    
    // Previous page button
    const prevBtn = document.createElement("button");
    prevBtn.innerText = "上一頁";
    prevBtn.disabled = currentPage === 1;
    prevBtn.style.margin = "0 5px";
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            searchCards();
        }
    };
    paginationDiv.appendChild(prevBtn);
    
    // Determine which page numbers to show
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // First page
    if (startPage > 1) {
        const pageBtn = createPageButton(1);
        paginationDiv.appendChild(pageBtn);
        
        // Add ellipsis if there's a gap
        if (startPage > 2) {
            const ellipsis = document.createElement("span");
            ellipsis.innerText = "...";
            ellipsis.style.margin = "0 5px";
            paginationDiv.appendChild(ellipsis);
        }
    }
    
    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = createPageButton(i);
        paginationDiv.appendChild(pageBtn);
    }
    
    // Last page
    if (endPage < totalPages) {
        // Add ellipsis if there's a gap
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement("span");
            ellipsis.innerText = "...";
            ellipsis.style.margin = "0 5px";
            paginationDiv.appendChild(ellipsis);
        }
        
        const pageBtn = createPageButton(totalPages);
        paginationDiv.appendChild(pageBtn);
    }
    
    // Next page button
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "下一頁";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.style.margin = "0 5px";
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            searchCards();
        }
    };
    paginationDiv.appendChild(nextBtn);
    
    // Helper function to create page buttons
    function createPageButton(pageNum) {
        const pageBtn = document.createElement("button");
        pageBtn.innerText = pageNum;
        pageBtn.style.margin = "0 5px";
        
        // Highlight current page
        if (pageNum === currentPage) {
            pageBtn.style.fontWeight = "bold";
            pageBtn.style.backgroundColor = "#4CAF50";
            pageBtn.style.color = "white";
        }
        
        pageBtn.onclick = () => {
            currentPage = pageNum;
            searchCards();
        };
        
        return pageBtn;
    }
}

// Remove the old changePage function as it's no longer needed
// function changePage(direction) {
//     currentPage += direction;
//     searchCards();
// }
// 清空構築表函數（使用 Soft Alert）
// 清空構築表函數（使用 Soft Alert）
function clearDeck() {
    let confirmationBox = document.createElement("div");
    confirmationBox.style.position = "fixed";
    confirmationBox.style.top = "50%";
    confirmationBox.style.left = "50%";
    confirmationBox.style.transform = "translate(-50%, -50%)";
    confirmationBox.style.background = "rgba(0, 0, 0, 0.8)";
    confirmationBox.style.color = "white";
    confirmationBox.style.padding = "20px";
    confirmationBox.style.borderRadius = "10px";
    confirmationBox.style.textAlign = "center";
    confirmationBox.style.zIndex = "1000";

    confirmationBox.innerHTML = `
        <p>確定要清空構築表嗎？此操作無法還原！</p>
        <button id="confirmClear">確定</button>
        <button id="cancelClear">取消</button>
    `;
    
    document.body.appendChild(confirmationBox);
    
    document.getElementById("confirmClear").onclick = function() {
        deck.flagship = {};
        deck.mainDeck = {};
        renderDeck();
        updateDeckCounter(); // 更新計數器
        
        // 清除所有選擇的數字選項
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = input.value === "0"; // 重置所有選項為 0
        });
        
        document.body.removeChild(confirmationBox);
    };
    
    document.getElementById("cancelClear").onclick = function() {
        document.body.removeChild(confirmationBox);
    };
}

// 計數器函數
function updateDeckCounter() {
    let totalCards = Object.values(deck.mainDeck).reduce((sum, count) => sum + count, 0);
    let counterDisplay = document.getElementById("deckCounter");
    if (!counterDisplay) {
        counterDisplay = document.createElement("div");
        counterDisplay.id = "deckCounter";
        counterDisplay.style.position = "fixed";
        counterDisplay.style.top = "10px";
        counterDisplay.style.right = "10px";
        counterDisplay.style.background = "rgba(0, 0, 0, 0.8)";
        counterDisplay.style.color = "white";
        counterDisplay.style.padding = "10px";
        counterDisplay.style.borderRadius = "5px";
        counterDisplay.style.zIndex = "1000";
        document.body.appendChild(counterDisplay);
    }
    counterDisplay.textContent = `卡牌數量: ${totalCards}/50`;
    
    if (totalCards > 50) {
        showSoftAlert("超過上限");
    }
}

// 顯示 Soft Alert
function showSoftAlert(message) {
    let alertBox = document.createElement("div");
    alertBox.style.position = "fixed";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.background = "rgba(255, 0, 0, 0.8)";
    alertBox.style.color = "white";
    alertBox.style.padding = "20px";
    alertBox.style.borderRadius = "10px";
    alertBox.style.textAlign = "center";
    alertBox.style.zIndex = "1000";
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    setTimeout(() => document.body.removeChild(alertBox), 2000);
}

// 分享構築為圖片
function shareDeckAsImage() {
    let deckArea = document.createElement("div");
	//自訂背景顏色
	deckArea.style.backgroundColor="#121212";
    //deckArea.appendChild(document.getElementById("deckCounter").cloneNode(true));
    deckArea.appendChild(document.getElementById("deck").cloneNode(true));
    deckArea.appendChild(document.getElementById("flagship").cloneNode(true));
    
    document.body.appendChild(deckArea);
    
    html2canvas(deckArea).then(canvas => {
        let image = canvas.toDataURL("image/png");
        let link = document.createElement("a");
        link.href = image;
        link.download = "deck_build.png";
        link.click();
        document.body.removeChild(deckArea);
    });
}

// 在頁面上新增按鈕
window.onload = function() {
    document.getElementById("clearDeckButton").onclick = clearDeck;
	updateDeckCounter();// 初始化計數器
	let shareButton = document.getElementById("shareDeckButton");
    if (shareButton) {
        shareButton.onclick = shareDeckAsImage;
    }
};
