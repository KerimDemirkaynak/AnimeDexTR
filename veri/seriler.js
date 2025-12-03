const TUM_SERILER = [];

for (let i = 0; i < 30; i++) { // 2 seri x 30 = 60
  TUM_SERILER.push(
    {
      "id": `beyblade_${i+1}`,
      "isim": "Beyblade",
      "poster": "https://i.ebayimg.com/images/g/psMAAOSwKFFnq2Ws/s-l400.jpg",
      "bolumSayisi": "51"
    },
    {
      "id": `bakugan_${i+1}`,
      "isim": "Bakugan",
      "poster": "https://m.media-amazon.com/images/I/612F8bfniwL._AC_UF894,1000_QL80_.jpg",
      "bolumSayisi": "276"
    }
  );
}

console.log(TUM_SERILER.length); // 60
