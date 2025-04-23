//chart.js
// 隨機生成顏色的函數
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 生成圓餅圖的函數
function generateChampionChart() {
    const championCount = {};

    // 取得目前篩選的 Format 與 Level 值
    const selectedFormats = Array.from(document.querySelectorAll('#filterFormatGroup input[type="checkbox"]:checked')).map(cb => cb.value);
    const selectedLevels = Array.from(document.querySelectorAll('#filterLevelGroup input[type="checkbox"]:checked')).map(cb => cb.value);

    // 篩選資料，符合 Champion、Format、Level
    topDecks.forEach(deck => {
        const isChampion = deck.Champion === 1;
        const formatMatch = selectedFormats.length === 0 || selectedFormats.includes(deck.Format);
        const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(deck.Level);

        if (isChampion && formatMatch && levelMatch) {
            const flagship = deck.L_name;
            championCount[flagship] = (championCount[flagship] || 0) + 1;
        }
    });

    // 將統計結果整理與分類（保留原有小於 3 合併為「其他」的邏輯）
    const sortedEntries = Object.entries(championCount)
        .map(([flagship, count]) => ({ flagship, count }))
        .sort((a, b) => b.count - a.count);

    const labels = [];
    const data = [];
    let otherCount = 0;

    // 判斷是否有勾選任何篩選
	const hasFormatFilter = selectedFormats.length > 0;
	const hasLevelFilter = selectedLevels.length > 0;
	const mergeThreshold = (hasFormatFilter || hasLevelFilter) ? 2 : 3;

	// 根據條件合併為「其他」
	sortedEntries.forEach(({ flagship, count }) => {
		if (count < mergeThreshold) {
			otherCount += count;
		} else {
			labels.push(flagship);
			data.push(count);
		}
	});

    if (otherCount > 0) {
        labels.push("其他");
        data.push(otherCount);
    }

    if (labels.length === 0) {
        document.getElementById("championChart").style.display = "none";
        return;
    } else {
        document.getElementById("championChart").style.display = "block";
    }
	
	// 顯示篩選條件描述
	const filterText = [];
	if (selectedFormats.length > 0) {
		filterText.push(`環境: ${selectedFormats.join(', ')}`);
	}
	if (selectedLevels.length > 0) {
		filterText.push(`競爭等級: ${selectedLevels.join(', ')}`);
	}

	const chartFiltersText = filterText.length > 0 ? filterText.join("；") : "";
	const chartFiltersElement = document.getElementById("chartFilters");
	if (chartFiltersElement) {
		chartFiltersElement.textContent = chartFiltersText;
		chartFiltersElement.style.display = chartFiltersText ? 'block' : 'none';
	}

	//畫圖表
    const canvas = document.getElementById("championChart");
    if (!canvas) return;

    const existingChart = Chart.getChart(canvas);
    if (existingChart) existingChart.destroy();

    canvas.width = 650;
    canvas.height = 650;
    const ctx = canvas.getContext("2d");

    window.championChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: labels.map(() => getRandomColor()),
                borderColor: "#ffffff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            layout: { padding: 50 },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            animation: {
                onComplete: function () {
                    const chartArea = window.championChart.chartArea;
                    const centerX = (chartArea.left + chartArea.right) / 2;
                    const centerY = (chartArea.top + chartArea.bottom) / 2;
                    const radius = (chartArea.right - chartArea.left) / 2 * 0.55;

                    const datasetMeta = window.championChart.getDatasetMeta(0);
                    datasetMeta.data.forEach((arc, index) => {
                        const label = labels[index];
                        const percentage = ((data[index] / data.reduce((sum, val) => sum + val, 0)) * 100).toFixed(2);
                        const labelText = `${label} (${percentage}%)`;

                        const angle = (arc.startAngle + arc.endAngle) / 2;
                        const textX = centerX + Math.cos(angle) * radius * 1.5;
                        const textY = centerY + Math.sin(angle) * radius * 1.5;

                        ctx.save();
                        ctx.font = "20px Arial";
                        const textWidth = ctx.measureText(labelText).width;
                        const textHeight = 20;
                        const padding = 5;

                        ctx.fillStyle = "#000000";
                        ctx.strokeStyle = "#ffffff";
                        ctx.lineWidth = 3;
                        ctx.beginPath();
                        ctx.roundRect(textX - textWidth / 2 - padding, textY - textHeight / 2 - padding, textWidth + 2 * padding, textHeight + 2 * padding, 5);
                        ctx.fill();
                        ctx.stroke();

                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.fillText(labelText, textX, textY);
                        ctx.restore();
                    });
                }
            }
        }
    });
}
