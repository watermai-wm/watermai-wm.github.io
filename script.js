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

    Object.entries(filterMapping).forEach(([groupId, attributeKey]) => {
       // 使用 Set 來獲取唯一值，並過濾掉 "-"
        const uniqueValues = new Set(
            cards
                .map(card => card.attributes[attributeKey])
                .filter(value => value && value !== "-") // 過濾掉 "-"
        );

        const filterGroup = document.getElementById(groupId);

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
        (filters.faction.length === 0 || filters.faction.includes(card.attributes['陣　營'])) &&
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

function updatePagination(totalCards) {
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const pageInfo = document.getElementById('pageInfo');
    pageInfo.textContent = `第 ${currentPage} 頁，共 ${totalPages} 頁`;

    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
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
    populateFilterOptions();
    searchCards(); // 初始顯示所有卡片
};