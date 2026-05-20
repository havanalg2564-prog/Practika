
  const product = [
    {
      name: "Peperomia Ginny",
      price: 25,
      image: "images/image 8.png"
    },
    {
      name: "Bird’s Nest Fern",
      price: 45,
      image: "images/image 9.png"
    },
    {
      name: "Large Majesty Palm",
      price: 52,
      image: "images/image 10.png"
    },
    {
      name: "Pet Friendly Plant",
      price: 30,
      image: "images/image 11.png"
    },
  ]
for (const element of product) {
    const html = `
     <div class="card">
                <div class="card_img">
                    <img src="${element.image}" alt="">
                </div>
                <div class="card_title">
                    <p>${element.name}</p>
                    <p>$${element.price}</p>
                </div>
                <div class="card_buy">
                    <div class="buy_color">
                        <p>Pot color</p>
                        <div class="color">
                            <div style="background-color: #39362E;"></div>
                            <div style="background-color: #F3A195;"></div>
                            <div style="background-color: #EFEAE6;"></div>
                            <div style="background-color: #C38364;"></div>
                        </div>
                    </div>
                    <button>Buy</button>
                </div>
            </div>
    `;
    const cards = document.querySelector(".cards");
    cards.innerHTML += html;
}
