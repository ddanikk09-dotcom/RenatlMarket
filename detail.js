const nftDetail = document.getElementById("nftDetail");
const params = new URLSearchParams(window.location.search);
const nftId = params.get("id");

fetch("https://ВАШ-BACKEND-URL/nfts/user1")
  .then(res => res.json())
  .then(data => {
    const nft = data.find(n => n.id == nftId);
    if(nft){
      nftDetail.innerHTML = `<h2>${nft.name}</h2><p>ID: ${nft.id}</p>`;
    } else { nftDetail.innerHTML = "<p>NFT not found</p>"; }
  });
