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

    // 統計 Champion 為 1 的 L_name
    topDecks.forEach(deck => {
        if (deck.Champion === 1) {
            const flagship = deck.L_name;
            championCount[flagship] = (championCount[flagship] || 0) + 1;
        }
    });

    let labels = [];
    let data = [];
    let otherCount = 0;

    // **將總數為 1 的 L_name 合併為 "其他"**
    Object.entries(championCount).forEach(([flagship, count]) => {
        if (count === 1) {
            otherCount++;
        } else {
            labels.push(flagship);
            data.push(count);
        }
    });

    // **如果有 "其他"，則加入統計**
    if (otherCount > 0) {
        labels.push("其他");
        data.push(otherCount);
    }

    // 如果沒有數據，隱藏圖表
    if (labels.length === 0) {
        document.getElementById("championChart").style.display = "none";
        return;
    }

    // 獲取 canvas 元素
    const canvas = document.getElementById("championChart");
    if (!canvas) {
        console.error("Canvas element not found!");
        return;
    }

    // 設置 canvas 大小
    canvas.width = 650;
    canvas.height = 650;
    const ctx = canvas.getContext("2d");

    // 創建圓餅圖
    const chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels, // 標籤
            datasets: [{
                data: data, // 數據
                backgroundColor: labels.map(() => getRandomColor()), // 隨機顏色
                borderColor: "#ffffff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: false, // 固定大小
            maintainAspectRatio: false,
            layout: {
                padding: 50 // 留白，避免標籤擠壓
            },
            plugins: {
                legend: { display: false }, // 隱藏內建圖例
                tooltip: { enabled: false } // 禁用工具提示
            },
            animation: {
                onComplete: function () {
                    const chartArea = chart.chartArea;
                    const centerX = (chartArea.left + chartArea.right) / 2;
                    const centerY = (chartArea.top + chartArea.bottom) / 2;
                    const radius = (chartArea.right - chartArea.left) / 2 * 0.55; // 適度縮小圓餅圖

                    const datasetMeta = chart.getDatasetMeta(0);
                    datasetMeta.data.forEach((arc, index) => {
                        const { x, y } = arc.tooltipPosition(); // 標籤位置
                        const label = labels[index];
                        const percentage = ((data[index] / data.reduce((sum, val) => sum + val, 0)) * 100).toFixed(2);
                        const labelText = `${label} (${percentage}%)`;

                        // 標籤位置調整
                        const angle = (arc.startAngle + arc.endAngle) / 2;
                        const textDistance = radius * 1.3; // 標籤放置距離
                        const textX = centerX + Math.cos(angle) * textDistance;
                        const textY = centerY + Math.sin(angle) * textDistance;

                        // 計算文字寬度和高度
                        ctx.save();
                        ctx.font = "14px Arial"; // 字體大小
                        const textWidth = ctx.measureText(labelText).width;
                        const textHeight = 20; // 固定高度

                        // 繪製帶外框的標籤背景
                        ctx.fillStyle = "#000000"; // 黑色背景
                        ctx.strokeStyle = "#ffffff"; // 白色外框
                        ctx.lineWidth = 3;

                        // 背景框位置（根據文字寬度和高度動態調整）
                        const padding = 5; // 背景框內邊距
                        const rectX = textX - textWidth / 2 - padding;
                        const rectY = textY - textHeight / 2 - padding;
                        const rectWidth = textWidth + 2 * padding;
                        const rectHeight = textHeight + 2 * padding;

                        ctx.beginPath();
                        ctx.roundRect(rectX, rectY, rectWidth, rectHeight, 5); // 圓角矩形
                        ctx.fill();
                        ctx.stroke();

                        // 顯示標籤文字
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center"; // 文字水平居中
                        ctx.textBaseline = "middle"; // 文字垂直居中
                        ctx.fillText(labelText, textX, textY);
                        ctx.restore();
                    });
                }
            }
        }
    });
}