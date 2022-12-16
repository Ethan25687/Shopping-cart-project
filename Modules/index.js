addShopItem = (shopItem) => {  // addshopItem makes an object (tested. no it does not 😓) and renders shopItems on Website
  const shopItemHTML =
    '<div class="shopItemBoxOuter">\n' + // Shop item container
    '    <div class="shopItemBoxInner">\n' + // shopItem container for shopItem Text
    '        <div class="shopItemImgWrapper">\n' +
    '            <img class="shopItemImg" alt=' + shopItem.shopItemName + ' src=' + shopItem.shopItemImage + ' >\n' +
    '        </div>\n' +
    '        <div class="shopItemBoxInfo">\n' +
    '            <p style="margin: 0px; font-weight: bold;">' + shopItem.shopItemName + '</p>\n' +
    '            <p><b>Description:</b> ' + shopItem.shopItemDescription + '</p>\n' +
    '            <p><b>Price:</b> ' + shopItem.shopItemPrice + '</p>\n' +
    '            <button class="add">Add ' + shopItem.shopItemName + ' to Cart</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n';
  const shopItemContainer = document.getElementById("app");
  shopItemContainer.innerHTML += shopItemHTML;
};

const shopItemArray = [
addShopItem({
    'shopItemName':'Cooler Master Hyper212X',
    'shopItemImage':'./Images/Cooler-Master-Hyper212X.jpg',
    'shopItemDescription':'Tested, Works, runs smoothly and quietly',
    'shopItemPrice':'AU$40'
}),

addShopItem({
    'shopItemName':'AMD Ryzen 5 2600',
    'shopItemImage':'./Images/AMD-Ryzen-5-2600.jpg',
    'shopItemDescription':'Tested, Works and minor scratches to IHS',
    'shopItemPrice':'AU$120'
}),

addShopItem({
    'shopItemName':'EVGA GTX 1070',
    'shopItemImage':'./Images/EVGA-GTX-1070.jpg',
    'shopItemDescription':'Tested, Works',
    'shopItemPrice':'AU$225'
}),

addShopItem({
    'shopItemName':'Kingston DDR3 4x8GB 1600MHZ',
    'shopItemImage':'./Images/Kingston-4x8gb-ddr3-1600Mhz.jpg',
    'shopItemDescription':'Tested, Works',
    'shopItemPrice':'AU$130'
})
];

const stringedShopItemArray = JSON.stringify(shopItemArray)

let addToCartBtn = document.getElementsByClassName('add');
window.addEventListener('load', addToCart);

function addToCart() {
  for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].onclick = test();
  };
};

function test() {
  console.log('test')
}