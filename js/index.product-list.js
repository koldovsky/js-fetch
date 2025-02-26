const products = [
  {
    id: "1",
    title: "Baby Yoda",
    image: "img/baby-yoda.svg",
    description: "A cute Baby Yoda sticker from the Star Wars universe. This adorable sticker captures Baby Yoda's innocent charm and makes it a must-have for any Star Wars fan. Perfect for decorating laptops, water bottles, and more!",
    price: 10.99,
  },
  {
    id: "2",
    title: "Banana",
    image: "img/banana.svg",
    description: "A fun and quirky banana sticker. This vibrant sticker brings a touch of humor and playfulness to your belongings. Its bright colors and unique design make it a standout accessory for anyone who loves fun and quirky items.",
    price: 8.99,
  },
  {
    id: "3",
    title: "Girl",
    image: "img/girl.svg",
    description: "A stylish girl sticker with a modern look. This chic sticker embodies modern style and sophistication. Its sleek design and trendy aesthetic make it a perfect addition to any collection, adding a touch of elegance and flair.",
    price: 12.99,
  },
  {
    id: "4",
    title: "Viking",
    image: "img/viking.svg",
    description: "A fierce Viking sticker with a traditional helmet. This powerful sticker embodies the strength and bravery of the Viking spirit. Its detailed design and bold imagery make it a perfect emblem for those who admire courage and history.",
    price: 11.99,
  },
];

function renderProducts(products) {
  let productsHTML = "";
  for (const product of products) {
    productsHTML += `<article class="products__item">
            <img class="products__image" src="${product.image}" alt="${product.title}">
            <h3 class="products__name">${product.title}</h3>
            <p class="products__description">
            ${product.description}
            </p>
            <div class="products__actions">
                <button class="products__button products__button--info button button-card">
                    Info
                </button>
                <button class="products__button products__button--buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".products__list");
  productsContainer.innerHTML = productsHTML;
}

renderProducts(products);