// 圖片點擊全屏預覽
document.querySelector('.about-section .image-col img').addEventListener('click', function() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.9);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: zoom-out;
    `;
    
    const enlargedImg = this.cloneNode();
    enlargedImg.style.maxHeight = '90vh';
    enlargedImg.style.maxWidth = '90vw';
    enlargedImg.style.objectFit = 'contain';
    
    overlay.appendChild(enlargedImg);
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    
    document.body.appendChild(overlay);
});

// 在kyoto.js中替換天氣函數
const weatherData = {
    1: { temp: "5°C", icon: "cloudy.png", gear: "厚外套+圍巾" },
    4: { temp: "18°C", icon: "sunny.png", gear: "薄外套" },
    7: { temp: "30°C", icon: "rainy.png", gear: "防曬+雨傘" },
    10: { temp: "20°C", icon: "cloudy.png", gear: "毛衣" }
};

function updateWeather() {
    const month = new Date().getMonth() + 1;
    const data = weatherData[month] || { temp: "20°C", icon: "default.png", gear: "普通外套" };
    
    document.getElementById("sim-temp").textContent = data.temp;
    document.getElementById("weather-icon").src = `img/weather/${data.icon}`;
    document.getElementById("sim-gear").textContent = data.gear;
}

// 手動選擇月份更新
document.getElementById("month-select").addEventListener("change", (e) => {
    const data = weatherData[e.target.value] || { temp: "20°C", icon: "default.png" };
    document.getElementById("sim-temp").textContent = data.temp;
    document.getElementById("weather-icon").src = `img/weather/${data.icon}`;
});
