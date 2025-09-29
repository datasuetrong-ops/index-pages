// ===============================
// Dark/Light Mode Toggle
// ===============================
document.getElementById("toggleMode").addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
});

// ===============================
// Currency Chart
// ===============================
const ctxCurrency = document.getElementById("currencyChart").getContext("2d");
const currencyChart = new Chart(ctxCurrency, {
    type: "bar",
    data: {
        labels: ["KWD","BHD","OMR","JOD","GBP"], // ค่าเงินแข็ง
        datasets: [{
            label: "1 USD เท่ากับ (หน่วยเงินท้องถิ่น)",
            data: [0.31,0.38,0.38,0.71,0.79],
            backgroundColor:["#f39c12","#e74c3c","#27ae60","#2980b9","#8e44ad"]
        }]
    },
    options:{
        responsive:true,
        plugins:{
            tooltip:{
                enabled:true,
                backgroundColor:'rgba(0,0,0,0.8)',
                titleColor:'#f1c40f',
                bodyColor:'#fff'
            },
            legend:{display:false}
        },
        animation:{duration:1500},
        scales:{y:{beginAtZero:true}}
    }
});

// ===============================
// S&P500 Chart
// ===============================
const ctxSP500 = document.getElementById("sp500Chart").getContext("2d");
const sp500Chart = new Chart(ctxSP500,{
    type:"bar",
    data:{
        labels:["Apple","Microsoft","Amazon","Nvidia","Tesla"],
        datasets:[{
            label:"การเปลี่ยนแปลง (%)",
            data:[-0.8,1.2,0.5,2.4,-3.1],
            backgroundColor: ctx => ctx.raw >= 0 ? "#27ae60" : "#e74c3c"
        }]
    },
    options:{
        responsive:true,
        plugins:{
            tooltip:{
                enabled:true,
                backgroundColor:'rgba(0,0,0,0.8)',
                titleColor:'#f1c40f',
                bodyColor:'#fff'
            },
            legend:{display:false}
        },
        animation:{duration:1500},
        scales:{y:{beginAtZero:true}}
    }
});

// ===============================
// Sparkline S&P500
// ===============================
const sparkCtx = document.getElementById("sparklineSP500").getContext("2d");
const sparklineSP500 = new Chart(sparkCtx,{
    type:"line",
    data:{
        labels:["M1","M2","M3","M4","M5"],
        datasets:[{
            data:[0.5,0.6,0.4,0.7,0.6],
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
