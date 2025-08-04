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