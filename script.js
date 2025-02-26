// script.js
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
    filterObtainGroup: 'acquisition_method'
};

function populateFilterOptions() {
    if (!cards || cards.length === 0) {
        console.error("卡片資料未載入！");
        return;
    }

    Object.entries(filterMapping).forEach(([groupId, attributeKey]) => {
        const filterGroup = document.getElementById(groupId);
        if (!filterGroup) return;

        let uniqueValues;
        if (attributeKey === "acquisition_method") {
            uniqueValues = new Set(cards.map(card => card.acquisition_method?.trim()).filter(Boolean));
        } else {
            const normalizedKey = attributeKey.trim();
            uniqueValues = new Set(cards.map(card => card.attributes[normalizedKey]?.trim()).filter(Boolean));
        }

        if (uniqueValues.size === 0) {
            console.warn(`未找到 ${attributeKey} 的數據`);
            return;
        }

        // **保留 h3，僅清空 checkbox**
        const existingTitle = filterGroup.querySelector("h3")?.outerHTML || "";
        filterGroup.innerHTML = existingTitle;

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

        console.log(`已載入 ${attributeKey}:`, sortedValues);
    });
}

function resetFilters() {
    document.querySelectorAll("input[type=checkbox]").forEach(checkbox => checkbox.checked = false);
    document.getElementById('searchName').value = '';
    document.getElementById('searchCode').value = '';
    document.getElementById('searchEffect').value = '';
    searchCards();
}

function searchCards(page = 1) {
    if (!filterMapping) {
        console.error("filterMapping 未定義！");
        return;
    }

    const nameInput = document.getElementById('searchName').value.toLowerCase();
    const codeInput = document.getElementById('searchCode').value.toLowerCase();
    const effectInput = document.getElementById('searchEffect').value.toLowerCase();

    const filters = {};
    Object.keys(filterMapping).forEach(groupId => {
        filters[groupId] = Array.from(document.querySelectorAll(`input[name="${groupId}"]:checked`)).map(checkbox => checkbox.value);
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const filteredCards = cards.filter(card => 
        (nameInput === '' || card.card_name.toLowerCase().includes(nameInput)) &&
        (codeInput === '' || card.card_code.toLowerCase().includes(codeInput)) &&
        (effectInput === '' || card.card_effect.toLowerCase().includes(effectInput)) &&
        Object.entries(filters).every(([groupId, values]) => {
            const attributeKey = filterMapping[groupId];
            const cardValue = attributeKey === "acquisition_method" ? card.acquisition_method : card.attributes[attributeKey];
            return values.length === 0 || values.includes(cardValue);
        })
    );

    const itemsPerPage = 10;
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedCards = filteredCards.slice(startIndex, startIndex + itemsPerPage);

    if (paginatedCards.length === 0) {
        resultsContainer.innerHTML = '<p>沒有找到相關卡片。</p>';
        return;
    }

    paginatedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const cardName = document.createElement('h2');
        cardName.textContent = card.card_name;
        cardElement.appendChild(cardName);

        const cardCode = document.createElement('p');
        cardCode.textContent = `卡片編號: ${card.card_code}`;
        cardElement.appendChild(cardCode);

        const cardAttributes = document.createElement('p');
        cardAttributes.textContent = `顏色: ${card.attributes['顏　色']}, 種類: ${card.attributes['種　類']}, 費用: ${card.attributes['費　用']}, 戰力: ${card.attributes['戰　力']}`;
        cardElement.appendChild(cardAttributes);

        const cardEffect = document.createElement('p');
        cardEffect.textContent = `效果: ${card.card_effect}`;
        cardElement.appendChild(cardEffect);

        resultsContainer.appendChild(cardElement);
    });

    const paginationControls = document.getElementById('pagination');
    paginationControls.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = () => searchCards(i);
        paginationControls.appendChild(button);
    }
}

window.onload = function() {
    populateFilterOptions();
    searchCards(); // 讓網站載入時顯示所有卡片
    document.getElementById('resetButton').addEventListener('click', resetFilters);
};
