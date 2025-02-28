// script.js
let currentPage = 1;
const cardsPerPage = 20; // 每頁顯示的卡片數量

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
        (filters.obtain === '' || card.acquisition_method === filters.obtain) // 篩選獲取方法
    );

    displayResults(filteredCards);
}

function displayResults(filteredCards) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (filteredCards.length === 0) {
        resultsContainer.innerHTML = '<p>沒有找到相關卡片。</p>';
        updatePagination(0);
        return;
    }
	 // 依照 card_id **降冪排序**（從大到小）
    filteredCards.sort((a, b) => parseInt(b.card_id) - parseInt(a.card_id));


    // 分頁邏輯
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const paginatedCards = filteredCards.slice(startIndex, endIndex);

    paginatedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // 卡片內容容器（使用 flex 佈局）
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        cardElement.appendChild(cardContent);

        // 圖片部分
        const cardImageContainer = document.createElement('div');
        cardImageContainer.classList.add('card-image-container');
        cardContent.appendChild(cardImageContainer);

        const cardImage = document.createElement('img');
        cardImage.src = `images/${card.card_id}.png`; // 假設圖片存放在 images/ 資料夾中
        cardImage.alt = card.card_name; // 設置圖片的替代文字
        cardImage.classList.add('card-image');
		cardImage.onclick = function() { openImageModal(this.src); }; // 新增點擊事件
        cardImageContainer.appendChild(cardImage); // 將圖片添加到圖片容器中
		

        // 文字部分
        const cardText = document.createElement('div');
        cardText.classList.add('card-text');
        cardContent.appendChild(cardText);

        // 顯示卡片名稱
        const cardName = document.createElement('h2');
        cardName.textContent = card.card_name;
        cardText.appendChild(cardName);

        // 顯示卡片編號
        const cardCode = document.createElement('p');
        cardCode.textContent = `卡片編號: ${card.card_code}`;
        cardText.appendChild(cardCode);

        // 顯示卡片屬性
        const cardAttributes = document.createElement('p');
        cardAttributes.textContent = `顏色: ${card.attributes['顏　色']}, 種類: ${card.attributes['種　類']}, 費用: ${card.attributes['費　用']}, 戰力: ${card.attributes['戰　力']}`;
        cardText.appendChild(cardAttributes);

        // 顯示卡片效果
        const cardEffect = document.createElement('p');
        cardEffect.textContent = `效果: ${card.card_effect}`;
        cardText.appendChild(cardEffect);

        resultsContainer.appendChild(cardElement);
    });

    updatePagination(filteredCards.length);
}

// 打開放大圖片視窗
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
	if (!modal || !modalImage) {
        console.error("模態框或圖片未找到");
        return;
    }

	
    modalImage.src = imageSrc;
    modal.style.display = 'flex'; // 顯示模態框
}

// 關閉圖片視窗
function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function updatePagination(totalCards) {
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // 清空現有分頁內容

    if (totalPages <= 1) return; // 如果只有 1 頁，則不顯示分頁

    // 創建「上一頁」按鈕
    const prevButton = document.createElement('button');
    prevButton.textContent = '上一頁';
    prevButton.onclick = function () { changePage(-1); };
    prevButton.disabled = currentPage === 1;
    paginationContainer.appendChild(prevButton);

    // 動態生成頁碼按鈕
    const maxPagesToShow = 5; // 顯示的最大頁碼數（不包含省略號）

    if (totalPages <= maxPagesToShow) {
        // 如果總頁數較少，直接顯示所有頁碼
        for (let i = 1; i <= totalPages; i++) {
            addPageButton(i);
        }
    } else {
        // 確保「1」永遠出現在最前面
        addPageButton(1);

        // 當前頁碼前後的範圍
        let startPage = Math.max(2, currentPage - 2);
        let endPage = Math.min(totalPages - 1, currentPage + 2);

        // 添加省略號
        if (startPage > 2) {
            addEllipsis();
        }

        // 添加範圍內的頁碼
        for (let i = startPage; i <= endPage; i++) {
            addPageButton(i);
        }

        // 添加省略號
        if (endPage < totalPages - 1) {
            addEllipsis();
        }

        // 確保「最後一頁」永遠出現在最右側
        addPageButton(totalPages);
    }

    // 創建「下一頁」按鈕
    const nextButton = document.createElement('button');
    nextButton.textContent = '下一頁';
    nextButton.onclick = function () { changePage(1); };
    nextButton.disabled = currentPage === totalPages;
    paginationContainer.appendChild(nextButton);

    // **輔助函式：添加頁碼按鈕**
    function addPageButton(pageNumber) {
        const pageButton = document.createElement('button');
        pageButton.textContent = pageNumber;
        pageButton.onclick = function () {
            currentPage = pageNumber;
            searchCards();
        };
        if (pageNumber === currentPage) {
            pageButton.style.fontWeight = 'bold'; // 高亮顯示當前頁
        }
        paginationContainer.appendChild(pageButton);
    }

    // **輔助函式：添加省略號**
    function addEllipsis() {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.style.margin = '0 5px';
        paginationContainer.appendChild(ellipsis);
    }
}

function changePage(delta) {
    currentPage += delta;
    searchCards();
}

function resetFilters() {
    // 清空文字輸入框
    document.getElementById('searchName').value = '';
    document.getElementById('searchCode').value = '';
    document.getElementById('searchEffect').value = '';

    // 取消所有 Checkbox 的選中狀態
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // 重置分頁
    currentPage = 1;
    searchCards();
}

// 當頁面加載時，填充篩選選項
window.onload = function() {
    document.getElementById('imageModal').style.display = 'none'; // 強制隱藏模態框
    populateFilterOptions();
    searchCards(); // 初始顯示所有卡片
};

