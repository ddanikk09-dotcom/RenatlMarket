const marketGrid = document.getElementById("marketGrid");

fetch("https://renatl-market-njda.vercel.app/")
  .then(res => res.json())
  .then(data => {
    data.forEach(nft => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${nft.name}</h3><p>ID: ${nft.id}</p>`;
      marketGrid.appendChild(card);
    });
  });