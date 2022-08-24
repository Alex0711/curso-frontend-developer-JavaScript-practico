// desktop menu
const email = document.querySelector(".navbar-email");
email.addEventListener("click", toggleMenu);

// mobile menu
const burgerMenu = document.querySelector(".menu");
burgerMenu.addEventListener("click", toggleMenu);

//shopping cart
const cartButton = document.querySelector(".navbar-shopping-cart");
cartButton.addEventListener("click", toggleMenu);

//abrir y cerrar los menus
function toggleMenu(event) {
  console.log({ event });
  console.log(event.target.className);

  const mobileMenu = document.querySelector(".mobile-menu");
  const desktopMenu = document.querySelector(".desktop-menu");
  const shoppingCart = document.querySelector(".product-detail");

  switch (event.target.className) {
    case "navbar-email":
      openOne(desktopMenu, shoppingCart);
      break;

    case "menu":
      openOne(mobileMenu, shoppingCart);
      break;

    case "carrito":
      openOne(shoppingCart, mobileMenu);
      if (!desktopMenu.classList.contains("toggleMenu")) {
        desktopMenu.classList.add("toggleMenu");
      }
      break;

    default:
      break;
  }
}

function openOne(open, close) {
  const isMenuOpen = !close.classList.contains("toggleMenu");
  if (isMenuOpen) {
    close.classList.toggle("toggleMenu");
  }
  open.classList.toggle("toggleMenu");
}

//products
const productList = [
  {
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "TV",
    price: 220,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEVEhUWFRIPERIVFRISEhERDxEPERERGBUZGRgUGBgcITwlHB4rHxgYJjgmKy84ODU1GiQ7QDs1QC41ODEBDAwMEA8QHxISGjQhISE0MTQ0NDE/NDE0NDQxNDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMkA+wMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQcGAf/EAEsQAAICAQICBAcKCwQLAAAAAAABAgMEESEFBhIxQVEiMmFzdJGxEyVxcoGhsrPBwgcUJDQ1UmKEkqLwI0KT0RUzQ1NVY2SDo+Hx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAUB/8QAKxEAAgIBAgMJAAIDAAAAAAAAAAECEQMSIQQxQRMUIjIzUXGBsZHBI1Jh/9oADAMBAAIRAxEAPwDswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIbsiEd5ThBd8pKPtNdZzLw+L0eZidL9VZFcpepPUA24PP3c3YMf8AaXT81h5V0f4oVtfOVb+dsePi0ZlnkjVXX9ZOJHXH3RYsWR7qLf0z1QPEz56k/EwrU+67Iph9X0iOHNubLVrHw612N5F179XucfaePJBdSXd8v+rPdA51ZzJxJv8A1uJBd0MOxy/ila18xWt4lny686+K/VrqxIL562/nPO1h7ju+Tqjpx8OU3O6XjZWfP4My+pP5K5RRCuGVTXhwdvnpzyPpyY7WJCWNx5nUMnieNXvO/HrXa53Qhp62a6XOHDNdFm4tj7qrY3v1Q1Z4/D4RRDxKKIfEprh7EbuFfRhotV8DJRlqdIhk/wAcbLtnO2EvFWZZ2f2fD8zT1utL5ytbzzBeLhZ9nlaxql/PYn8xqr1uUrnomXKFmXvD9jf8C52/GM38VeLZTL3OVvTndXPZabaQ1Xb39h7I49yVLXjv7tZ907CQapmmLtJgAHh6AAAAAAAAADTcY5ioxpKE1ZKco9NRhBS8HVrrbS60+03Jzv8ACAvyqvzMfrJkoK3R7FW6NzLnODXg42Q/jypivmmyGPNeRJ+DjUxXfLJnJ/wqte087iw108i1Nxi42kURk1FGuPDxZLkcw53914sPJ+L22P1+6L2EMuKZzS1yXBv/AHdNEV/PGRlbVq0ieNHUjNPK0ti+PD473RBSr5+Pk5Ul5LnT9X0Sf/RtbXhKdnnb7r1/PJlmqGhajXsZ+0k+pKUca5RX8GllwvGjq40URffGiuL9aRi4adWy7lsbHIRX6BkyZN9zRjdLY1+RE106us298dyrOB5CRqjLY10atyxFtR0LMKl2kN/Xoi9SvYhKKZXiZ9EQiSdEvRhyPej4oFjGr3Ptdexs8LH03Z5KWlGWtUjOjH00JMhaIuVQ7SnlPc1cLF6bfNnP4+auuiNTdHc1mfPRG4vR5/iTbZv5GDAnkfwV+Q379/u1n3DspxrkRe/a9Gs+4dlKJ8zpRVIAAiegAAAAAAAAA59z1DXLh5mH07DoJ4XnCGuXHyUV/TtLMXmLMSuaKnC6dU38C9W/+RvY1rolThlGkY+t/C9zZTWiMuaVzOjdKkU417tksYGaWx91MeSyTkfYRLSWxXgyex+CVx5MqnzNfe9yCbJJvchmc6b3NUUV7EQSLMkRuBZiZoiyBldx1ZasiYxga8Z7N7ECgfYx1aJLFp8JniwbeprirOZlko3ZdxqddDY1wIKo6I2GJXq9SqUdc6KVLTHUSOGkTUZG7Zucl7GotWh1cKOFxsrW5UnDVGh4hXuz0bNNxGBGc9yzhI1t7mq5J/Ti9Gs+6dhOP8lr38Xo1n3TsAbs2sAA8AAAAAAAAAAPFc0R1zEv+TV9Zce1PG8xrXNXmKvrLv8A2Sg6Zdg9Rff4y3iR0RNa9iOrqRm+/uMr3kbnzMGzFM+SZipFGRUiaRPB9RNkS8ErVvckypdSKHtBkGvEinMhkzO2ZA2c2XM1RR9SPjRJGPb2e0+uJbjRKyuoamajp2avsJoxS3fyIzpr11bNuONkMmSka6yrv62WMWGiM7IbkkFob4bI5GWTlKixSbbFhpE1mLHqNxHZHkFTshJ2qK2QzVZLNhfI1WXPQ0RnojZjy4O0kokHT3KmfHY+uwxvlqjPrs0LBokqNLyevf1eiz+6deOR8pL3+/dZfYdcL48kTl5mAAekQAAAAAAAAAeR49HXN/7FP07j1x5bjK/LG+6in6dwRfw3qr7/ABmcWZ9hDGRnrsyqjYRTZEpH26RDGRRm5F+NWi7Q9XoZZctzDF2enb2sizZ+FoZJ7YyKVzorTkIw7X1e0+xj2vqMlvu+rsRh07mhszgtd31diMpNJav5EfY97+REFs99fV5PgNEYkErYUm3v193cbDHh4PlZSxoPrNriwN8IbWZ+KmkqRSnVuRRjuXMtaNleCL4vY57W9l3BhvqXL56Ijxo6IjyJjrR4okF0tjTZtm5fyLdEabJsIZJb0X4MVvUVpz3EJ6lWywwjZuRs19kfeVl7/L0WX2HWTk/Kz146n/0svsOsGqHlRzcyqbQABIrAAAAAAAAAB5bjb/KpeZo+neepPJcelply8zR9O89jzLsHqL7/ABiuRJGWxTjYSQs2PGqN9EWRPcxhPT4fYQ5FunwleNpjzbo0QRuMSe7IZ7ybfUfMOXgtnzpGXIvAkEvE2fZS9XYgn2vq7DGRHOZmUbZYo2WYT13fyEOmrM49RPiV6s1ySgkQ1JWyauOiRexZblOaLGM+00wfgow5le5hmPcjqhufbnrIkoW5YuRQ40y25aI19s+tljLs0Whrb7NiGqtyzHi1bFXMtNRkWE+Xaa6cii7dnUjiUURzkYH2SMGTIMscoPXja9Gn9h1s5Jyd+mo+jT+w62bIeVHGz+pL5AAJFQAAAAAAAAAPI8wL8qfmaPrLz1x5HmH86fmaPrLyUOZdw/qL7/CnH2n1z0TPkXsV5WdZ7JHSK2RMhrnq9D5kWH3Dh2mOaNC2Ru8daQPkF3//AEyq8RHx7dZRljyKYy5/JHbIgr3kfbtWyXDhqymMLmkaNSjBszulo0jY466mjVZUdZ7dhtMbxC7LC5Iyy8iJJkla0RhAz6W+hbGNIzzfQxUNyWvY+6EFtmkWTfIqVtkGRbrJmtzLiW63RGoyLtWZssuh1OGw9SG6epX0JJMxIxNM1SI2RsmaI3EsM7JeTf01H0ef2HWzk3J36Zj6PP7DrJtj5UcTP6svkAAkVAAAAAAAAAA8jzF+dPzNH07z1x4/mT86fmKfrLieNeIu4f1F9/hr5S2Kjn1k90ilOezJzR1EiG3dl7Cr2KVK1ZtsaOiMemyc5VsXatkRzW4rlufZPc8lFUULZkFyLmFX4OpXuWuhfrjpEqxw8bYyz8CXuV1DWRca0WhHXHczk9z2K1OyEn0JIsGKkfSyik+9Mp5lnYTyl1moy7ushLbcuwQ1SorZV5rpy/r7EZ22a/11mEY6mN77ncjFRjQMNCx0DCSJQKchHoYyJWiKaLjKyXlB+/MfR5/YdYOT8nr35j6PP7DrBsh5UcXP6kvkAAkVAAAAAAAAAA0/FeX8fInGdnu8bIxUVOrJuo8FNtJqMknu31rtNhl5ddUJWWTjXXFaynOSjGK722eBzucc3NnKnhOPNx6p8QyIOFMNe2Ckvam/2X1gDmjBwcOvp28RzqpNN10qWPkW2adkYTg5NeVtJdrR4Cvi3E5wldViZFmKm+jdOj+73ycIpPytbLvOj8B/BvRCfu+bZLiGVJ9Jyu1lTGXkg/G0/a27kj3cYpJJJJLZJLRJEtTLFlyLlJnJOWPdsyHTx7cC6cUnbROd+NbW33rozTXdJbP5jfPB4lFb4MJ+Yzap6/4kYmx4xyHjW3xyaJ24GVGXSd2NpHp9/Si/Bbfa+3t1PVVRaik25NJJyaScml16Jab+QjsS7xk9/wAOfq/Ihr0+H8Rj5Y01Xr/xzk/mIZcapi/DWTV57Dy6l65V6HSwR0ol3qf/AA5zjccwpySWXi69zvrg/VJm9VkJJdCcJrvhOM18x6C/Bpn49VVnx64z9qNVfyhwyb1lg4nS/WhTCEvXFJjQqaPHnbabXIqpNd6InPc+y5DxNdYWZ1C116NOZZXHT9X4BPk1rxOIcRh8edF6X+JW385GOOupNcRHqjKDMpTK75a4hHxeI1T7lfw+GvyyrnH2EMuF8Yj/AMLuXkeTjy9T6SJaSHaKyXJs0izz2Vkav+ty7nYvFns8CMl3051Uv5Zxiaa6jLh4+BnrvddKuX8smZ8sJPodLhM2GKtySf2v6MtdWWKzWW8Qrh48b6fOY18PbE+0cWx5dV1Pyy6PtKHjkuaZ0e8Ymtpp/aNqzFxFF0Z+LOEviyjL2Fj3HyEI7MrnLYrdA+ThoWJLQik0XpGNzI+Ul78R9HmdWOWcrfpmPo8zqZrj5UcnN6jAAJFYAAAAAAAAB8PoAAAAAAAAAAAAAAAAAAAAAAAKmRw7Hn49NFnx6oT9qLYANBfydw2fjYeMviVqp+uOhzn8IHAljZGHTgQsrnke7dKELbZOXRcOil0peDpq/X5Dsp4bLj7tzDRHrWJhTtfd07ZSh7Oieg57wnNUbJU5mRn4tiaXTek1D49c49JL9pN/B2nuKuTsmUVOniVN0JLpQcsSDi13qcJ7+o9ZxvgGLlw6N9MbNPFnvG2vyxmt4+vR9p5zgPJeVhZGtHEH+KtqUqLaPdHNdqeklHpftxSfVqn2+NJ9CayTXVnzl3lPMozlkXWY04Kudf8AZuxTbemnguOnf2nuwARbbdsAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPOcL4JZXxDMypyhJXqmumMel0oVVwin0211uSey1/y9GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z",
  },
  {
    name: "Phone",
    price: 1100,
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Plane",
    price: 650000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJve9Ih1rK8iOC0H71GhQdT6r09qdPmzk93Q&usqp=CAU",
  },
  {
    name: "T-Shirt",
    price: 20,
    image: "data:image/jpeg;base64,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",
  },
  {
    name: "Shoes",
    price: 50,
    image: "data:image/jpeg;base64,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",
  },
];

const cardsContainer = document.querySelector(".cards-container");
for (const product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const image = document.createElement("img");
  image.setAttribute("src", product.image);
  productCard.append(image);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");
  productCard.append(productInfo);

  const div = document.createElement("div");
  productInfo.append(div);

  const price = document.createElement("p");
  price.innerText = `$${product.price}`;
  div.append(price);

  const name = document.createElement("p");
  name.innerText = product.name;
  div.append(name);

  const figure = document.createElement("figure");
  productInfo.append(figure);

  const cartImg = document.createElement("img");
  cartImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
  figure.append(cartImg);

  cardsContainer.append(productCard);
}