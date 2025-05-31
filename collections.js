import { products } from "./products.js";

// --- Offer Banner ---
var offer = document.querySelector(".offer");
var offerclose = document.getElementById("offer-close");

offerclose.addEventListener("click", function () {
  offer.style.display = "none";
});

// --- Side Navbar ---
var sidenavmenu = document.getElementById("side-navbar-active");
var sidenavbar = document.querySelector(".side-navbar");

sidenavmenu.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "0px";
});

var sidenavbarclose = document.getElementById("side-navbar-close");

sidenavbarclose.addEventListener("click", function () {
  sidenavbar.style.marginLeft = "-60%";
});

// --- Products Render ---
var container = document.querySelector(".products");

products.forEach((product) => {
  var createItem = document.createElement("div");
  createItem.classList.add("product");
  createItem.innerHTML = `
    <img style="width: 20vw;" src="images/${product.src}">
    <h1 class="product-title">${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`;
  container.append(createItem);
});

// --- Tag Filter ---
var filterList = [];
var tags = document.getElementsByName("tags");

tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    if (e.target.checked) {
      filterList.push(e.target.value);
    } else {
      filterList = filterList.filter((item) => item !== e.target.value);
    }
    update();
  });
});

// --- Search Input ---
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  update();
});

// --- Update Function (Tag + Search Filtering) ---
function update() {
  var searchTerm = searchInput.value.toLowerCase();
  var productList = document.querySelectorAll(".product");

  productList.forEach((product) => {
    var matchesTag = false;
    var matchesSearch = false;

    // Get product tags
    var tempTags = product.querySelector("tags").innerHTML.split(",");

    // Get product title
    var productTitle = product.querySelector(".product-title").textContent.toLowerCase();

    // Check tag match
    if (filterList.length === 0) {
      matchesTag = true;
    } else {
      for (let tag of filterList) {
        if (tempTags.includes(tag)) {
          matchesTag = true;
          break;
        }
      }
    }

    // Check search match
    matchesSearch = productTitle.includes(searchTerm);

    // Show or hide product based on both
    if (matchesTag && matchesSearch) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
