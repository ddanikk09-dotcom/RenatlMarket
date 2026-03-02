const myItemsGrid = document.getElementById("myItemsGrid");

fetch("https://ВАШ-BACKEND-URL/nfts/user1")
  .then(res => res.json())
  .then(data => {
    data.forEach(nft => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${nft.name}</h3><p>ID: ${nft.id}</p>`;
      myItemsGrid.appendChild(card);
    });
  });

