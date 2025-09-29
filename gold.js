// Dark/Light Mode Toggle
document.getElementById("toggleMode").addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
});

// Mock Gold Price Real-Time
function updateGoldPrice() {
    const mockPrice = (1970 + Math.random() * 10).toFixed(2); // ราคาสุ่ม
    document.getElementById("goldPriceValue").textContent = mockPrice;
}
updateGoldPrice();
setInterval(updateGoldPrice, 10000); // อัปเดตทุก 10 วินาที

// Gold Price Line Chart
const ctxGold = document.getElementById("goldChart").getContext("2d");
const goldChart = new Chart(ctxGold,{
    type:"line",
    data:{
        labels:["Day1","Day2","Day3","Day4","Day5","Day6","Day7"],
        datasets:[{
            label:"ราคาทอง (USD/oz)",
            data:[1920,1935,1940,1928,1950,1965,1972],
            borderColor:"#f39c12",
            backgroundColor:"rgba(243,156,18,0.2)",
            fill:true,
            tension:0.3,
            pointRadius:5,
            pointBackgroundColor:"#e67e22"
        }]
    },
    options:{
        responsive:true,
        animation:{duration:1500},
        plugins:{
            tooltip:{
                enabled:true,
                backgroundColor:'rgba(0,0,0,0.8)',
                titleColor:'#f1c40f',
                bodyColor:'#fff'
            },
            legend:{display:true}
        },
        scales:{y:{beginAtZero:false}}
    }
});

// Sparkline Gold Chart
const sparkCtxGold = document.getElementById("sparklineGold").getContext("2d");
const sparklineGold = new Chart(sparkCtxGold,{
    type:"line",
    data:{
        labels:["D1","D2","D3","D4","D5","D6","D7"],
        datasets:[{
            data:[1920,1935,1940,1928,1950,1965,1972],
            borderColor:"#f39c12",
            fill:false,
            tension:0.3,
            pointRadius:0
        }]
    },
    options:{
        responsive:false,
        plugins:{legend:{display:false}},
        scales:{x:{display:false}, y:{display:false}}
    }
});
