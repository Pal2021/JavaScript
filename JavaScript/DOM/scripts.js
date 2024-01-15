document.getElementById("refreshBtn").addEventListener("click", function () {
  fetch("/getPrices")
    .then((response) => response.json())
    .then((data) => {
      let priceTable = document.getElementById("priceTable");
      priceTable.innerHTML = "";

      data.forEach((item) => {
        let div = document.createElement("div");
        div.className = "price-item";
        div.innerHTML = `
                    <h2>${item.platform}</h2>
                    <p>BTC/INR: ${item.price}</p>
                `;
        priceTable.appendChild(div);
      });
    });
});
