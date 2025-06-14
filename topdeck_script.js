let currentDeckPage = 1;
const decksPerPage = 10; // 每頁顯示的牌組數量


function searchDecks() {
    const descriptionInput = document.getElementById('searchDescription').value.toLowerCase();
    const lNameFilter = document.getElementById('filterLNameSelect').value;
    const formatFilters = Array.from(document.querySelectorAll('input[name="filterFormat"]:checked')).map(checkbox => checkbox.value);
    const levelFilters = Array.from(document.querySelectorAll('input[name="filterLevel"]:checked')).map(checkbox => checkbox.value);

    // **篩選符合條件的牌組**
    let filteredDecks = topDecks.filter(deck =>
        (descriptionInput === '' || (deck.Description && deck.Description.toLowerCase().includes(descriptionInput))) &&
        (lNameFilter === '' || deck.L_name === lNameFilter) &&
        (formatFilters.length === 0 || formatFilters.includes(deck.Format)) &&
        (levelFilters.length === 0 || levelFilters.includes(deck.Level))
    );

    // **按照 deck_id 降冪排序**
    filteredDecks.sort((a, b) => b.deck_id.localeCompare(a.deck_id, undefined, { numeric: true }));

    displayDeckResults(filteredDecks);
}



function displayDeckResults(filteredDecks) {
    const resultsContainer = document.getElementById('deckResults');
    resultsContainer.innerHTML = '';

    if (filteredDecks.length === 0) {
        resultsContainer.innerHTML = '<p>沒有找到符合條件的牌組。</p>';
        updateDeckPagination(0);
        return;
    }

    // 進行分頁處理
    const startIndex = (currentDeckPage - 1) * decksPerPage;
    const endIndex = startIndex + decksPerPage;
    const paginatedDecks = filteredDecks.slice(startIndex, endIndex);

    paginatedDecks.forEach(deck => {
        const deckElement = document.createElement('div');
        deckElement.classList.add('deck');

        // **圖片區塊**
        const deckImage = document.createElement('img');
        deckImage.src = `topdeck_images/${deck.deck_id}.jpg`; // 圖片路徑
        deckImage.alt = `Deck ${deck.deck_id}`;
        deckImage.classList.add('deck-image'); // 讓圖片符合 CSS 樣式
        deckImage.onclick = function() { openImageModal(this.src); }; // 點擊放大
        deckElement.appendChild(deckImage);

        // **環境 (Format)**
        const deckFormat = document.createElement('p');
        deckFormat.textContent = `環境: ${deck.Format || "未知"}`;
        deckElement.appendChild(deckFormat);
		
		// **競爭等級 (Level)**
        const deckLevel = document.createElement('p');
        deckLevel.textContent = `競爭等級: ${deck.Level || "未知"}`;
        deckElement.appendChild(deckLevel);

        // **旗艦 (L_name)**
        const deckLName = document.createElement('p');
        deckLName.textContent = `旗艦: ${deck.L_name}`;
        deckElement.appendChild(deckLName);

        // **描述 (Description)**
        const deckDescription = document.createElement('p');
        deckDescription.textContent = `${deck.Description || "無描述"}`;
        deckElement.appendChild(deckDescription);

        resultsContainer.appendChild(deckElement);
    });

    updateDeckPagination(filteredDecks.length);
}

// **打開放大圖片視窗**
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.style.display = 'flex'; // 顯示模態框
}

// **關閉圖片視窗**
function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}



function updateDeckPagination(totalDecks) {
    const totalPages = Math.ceil(totalDecks / decksPerPage);
    const paginationContainer = document.getElementById('deckPagination');
    paginationContainer.innerHTML = ''; // 清空現有的分頁按鈕

    if (totalPages <= 1) return; // 如果只有一頁，不顯示分頁按鈕

    // 創建「上一頁」按鈕
    const prevButton = document.createElement('button');
    prevButton.textContent = '上一頁';
    prevButton.onclick = () => goToPage(currentDeckPage - 1);
    prevButton.disabled = currentDeckPage === 1;
    paginationContainer.appendChild(prevButton);

    // 動態生成頁碼按鈕
    const maxVisiblePages = 5; // 最多顯示的頁碼數
    let startPage = Math.max(1, currentDeckPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationContainer.appendChild(createPageButton(1)); // 第一頁按鈕
        if (startPage > 2) {
            paginationContainer.appendChild(createEllipsis()); // 省略號 ...
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationContainer.appendChild(createPageButton(i));
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationContainer.appendChild(createEllipsis()); // 省略號 ...
        }
        paginationContainer.appendChild(createPageButton(totalPages)); // 最後一頁按鈕
    }

    // 創建「下一頁」按鈕
    const nextButton = document.createElement('button');
    nextButton.textContent = '下一頁';
    nextButton.onclick = () => goToPage(currentDeckPage + 1);
    nextButton.disabled = currentDeckPage === totalPages;
    paginationContainer.appendChild(nextButton);
}

// **建立頁碼按鈕**
function createPageButton(pageNumber) {
    const pageButton = document.createElement('button');
    pageButton.textContent = pageNumber;
    pageButton.onclick = () => goToPage(pageNumber);
    if (pageNumber === currentDeckPage) {
        pageButton.classList.add('current-page'); // 加上當前頁碼的 class
    }
    return pageButton;
}

// **建立省略號**
function createEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.textContent = '...';
    ellipsis.style.margin = '0 5px';
    ellipsis.style.color = '#ccc';
    return ellipsis;
}

// **跳轉到指定頁數**
function goToPage(pageNumber) {
    currentDeckPage = pageNumber;
    searchDecks();
}


// **更改頁面（上一頁 / 下一頁）**
function changeDeckPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > Math.ceil(filteredDecks.length / decksPerPage)) return;
    currentDeckPage = pageNumber;
    searchDecks();
}


function changeDeckPage(delta) {
    currentDeckPage += delta;
    searchDecks();
}

function resetDeckFilters() {
    document.getElementById('searchDescription').value = '';
    document.getElementById('filterLNameSelect').selectedIndex = 0;
    document.querySelectorAll('input[name="filterFormat"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelectorAll('input[name="filterLevel"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    currentDeckPage = 1;
    searchDecks();
}

function populateFilters() {
    const lNameSelect = document.getElementById('filterLNameSelect');
    const formatGroup = document.getElementById('filterFormatGroup');
    const levelGroup = document.getElementById('filterLevelGroup');
    const uniqueLNames = new Set();
    const uniqueFormats = new Set();
    const uniqueLevels = new Set();

    // 取得所有 L_name、Format 和 Level 的唯一值
    topDecks.forEach(deck => {
        if (deck.L_name) uniqueLNames.add(deck.L_name);
        if (deck.Format) uniqueFormats.add(deck.Format);
        if (deck.Level) uniqueLevels.add(deck.Level);
    });

    // 填充 L_name 選單
    Array.from(uniqueLNames).sort().forEach(lName => {
        const option = document.createElement('option');
        option.value = lName;
        option.textContent = lName;
        lNameSelect.appendChild(option);
    });

    // 填充 Format 多選 Checkbox
    Array.from(uniqueFormats).sort().forEach(format => {
		const label = document.createElement('label');
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.name = 'filterFormat';
		checkbox.value = format;

		checkbox.addEventListener('change', () => {
			searchDecks();
			generateChampionChart(); // 加上這行才能更新圖表
		});

		label.appendChild(checkbox);
		label.appendChild(document.createTextNode(` ${format}`));
		formatGroup.appendChild(label);
	});

    // 填充 Level 多選 Checkbox
	Array.from(uniqueLevels).sort().forEach(level => {
		const label = document.createElement('label');
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.name = 'filterLevel';
		checkbox.value = level;

		// 加上 onchange 行為：搜尋＋更新圖表
		checkbox.addEventListener('change', () => {
			searchDecks();
			generateChampionChart();
		});

		label.appendChild(checkbox);
		label.appendChild(document.createTextNode(` ${level}`));
		levelGroup.appendChild(label);
	});
	generateChampionChart(); // 確保 filter 載完再畫圖表

}

// **顯示/隱藏圓餅圖**
function toggleChart() {
    const chartModal = document.getElementById("chartModal");
    chartModal.style.display = "flex"; // **顯示模態框**
}

// **點擊模態框以外的地方關閉圓餅圖**
function closeChartModal(event) {
    if (event.target.id === "chartModal") {
        document.getElementById("chartModal").style.display = "none";
    }
}
// 當頁面加載時，初始化搜尋與篩選選單
window.onload = function () {
	document.getElementById('imageModal').style.display = 'none'; // 強制隱藏模態框
	document.getElementById('chartModal').style.display = 'none'; // 強制隱藏模態框
    populateFilters();
    searchDecks();
	generateChampionChart();
};
