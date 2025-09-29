document.addEventListener("DOMContentLoaded", () => {
  let thaiStocks = [
    { name: "PTT", price: 34.5, change: 1.2, sector: "Energy" },
    { name: "SCB", price: 112, change: -0.5, sector: "Banking" },
    { name: "CPALL", price: 58, change: 0.8, sector: "Retail" },
    { name: "ADVANC", price: 205, change: 1.5, sector: "Telecom" },
    { name: "BDMS", price: 29.75, change: -0.3, sector: "Healthcare" }
  ];

  const ctxThai = document.getElementById("thaiChart").getContext("2d");
  const thaiChart = new Chart(ctxThai, {
    type: "bar",
    data: {
      labels: thaiStocks.map(s => s.name),
      datasets: [
        {
          label: "การเปลี่ยนแปลง (%)",
          data: thaiStocks.map(s => s.change),
          backgroundColor: thaiStocks.map(s =>
            s.change >= 0 ? "#27ae60" : "#e74c3c"
          )
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  function updateThaiTable() {
    const tbody = document.getElementById("thaiTable");
    tbody.innerHTML = "";
    thaiStocks.forEach(s => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${s.name}</td>
        <td>${s.price}</td>
        <td class="${s.change >= 0 ? "positive" : "negative"}">${s.change}%</td>
        <td>${s.sector}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  updateThaiTable();

  setInterval(() => {
    thaiStocks = thaiStocks.map(s => {
      const delta = (Math.random() * 2 - 1).toFixed(2);
      return {
        ...s,
        change: parseFloat((s.change + parseFloat(delta)).toFixed(2))
      };
    });

    thaiChart.data.datasets[0].data = thaiStocks.map(s => s.change);
    thaiChart.data.datasets[0].backgroundColor = thaiStocks.map(s =>
      s.change >= 0 ? "#27ae60" : "#e74c3c"
    );
    thaiChart.update();

    updateThaiTable();
  }, 3000);
});
