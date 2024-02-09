const products = document.querySelectorAll(".card");
const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const btnPurchase = document.getElementById("btn-purchase");
const btnCouponApply = document.getElementById("btn-coupon-apply");
const couponBox = document.getElementById("coupon-box");
const discountPriceElement = document.getElementById("discount-price");
const priceAfterDiscountElement = document.getElementById(
  "price-after-discount"
);
const btnHome = document.getElementById("btn-home");

let totalPrice = 0;

for (const product of products) {
  product.addEventListener("click", function () {
    const title = product.querySelector(".title").textContent;
    const price = product.querySelector(".price").textContent;
    console.log(title, price);

    const li = document.createElement("li");
    li.innerText = title;
    cartItems.appendChild(li);

    totalPrice = totalPrice + Number(price);
    totalPriceElement.innerText = totalPrice;

    if (totalPrice > 0) {
      btnPurchase.removeAttribute("disabled");
    }
    if (totalPrice >= 200) {
      btnCouponApply.removeAttribute("disabled");
    }
  });
}

btnCouponApply.addEventListener("click", function () {
  const couponCode = couponBox.value;
  console.log(couponCode);
  if (couponCode === "SELL200") {
    const discount = ((20 / 100) * totalPrice).toFixed(2);
    const priceAfterDiscount = (totalPrice - discount).toFixed(2);

    discountPriceElement.textContent = discount;
    priceAfterDiscountElement.innerText = priceAfterDiscount;
    couponBox.value = "";
  } else {
    alert("Wrong coupon code!");
  }
});

btnHome.addEventListener("click", function () {
  totalPrice = 0;
  cartItems.innerHTML = "";
  totalPriceElement.innerText = "00";
  discountPriceElement.innerText = "00";
  priceAfterDiscountElement.innerText = "00";
});
