const pdtImgSrc = "assets/img/products/";

export const detailProduct = {
  id: 1,
  title: "Cabage Vegetable",
  img: `${pdtImgSrc}img-1.jpg`,
  price: 93,
  oldPrice: 99,
  featured: true,
  description: "",
  category: 1,
  inCart: false,
  total: 0,
  count: 1,
};

export const products = [
  {
    id: 1,
    title: "Cabage Vegetable",
    img: `${pdtImgSrc}img-1.jpg`,
    price: 97,
    oldPrice: 99,
    featured: true,
    description: "",
    category_id: 1,
    inCart: false,
    total: 0,
    count: 1,
  },

  {
    id: 2,
    title: "Straw berry fruit",
    img: `${pdtImgSrc}img-2.jpg`,
    price: 45,
    oldPrice: 50,
    featured: true,
    description: "",
    category_id: 4,
    inCart: false,
    total: 0,
    count: 1,
  },
  {
    id: 3,
    title: "Passion fruit",
    img: `${pdtImgSrc}img-3.jpg`,
    price: 12,
    oldPrice: 16,
    featured: true,
    description: "",
    category_id: 8,
    inCart: false,
    total: 0,
    count: 1,
  },

  {
    id: 4,
    title: "Carrot fruit",
    img: `${pdtImgSrc}img-4.jpg`,
    price: 8,
    oldPrice: 10,
    featured: true,
    description: "",
    category_id: 2,
    inCart: false,
    total: 0,
    count: 1,
  },
  {
    id: 5,
    title: "Bannana fruit",
    img: `${pdtImgSrc}img-5.jpg`,
    price: 5,
    oldPrice: 10,
    featured: true,
    description: "",
    category_id: 1,
    inCart: false,
    total: 0,
    count: 1,
  },
  {
    id: 6,
    title: "Ovacado fruit",
    img: `${pdtImgSrc}img-6.jpg`,
    price: 65,
    oldPrice: 70,
    featured: true,
    description: "",
    category_id: 3,
    inCart: false,
    total: 0,
    count: 1,
  },
  {
    id: 7,
    title: "American Orange fruit",
    img: `${pdtImgSrc}img-7.jpg`,
    price: 34,
    oldPrice: 36,
    featured: true,
    description: "",
    category_id: 4,
    inCart: false,
    total: 0,
    count: 1,
  },
  {
    id: 8,
    title: "Egg Plant fruit",
    img: `${pdtImgSrc}img-8.jpg`,
    price: 26,
    oldPrice: 30,
    featured: true,
    description: "",
    category_id: 3,
    inCart: false,
    total: 0,
    count: 1,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

const categoryImgSrc = "assets/img/category/";

const categories = [
  {
    id: 1,
    title: "Vegatables",
    img: `${categoryImgSrc}icon-1.svg`,
  },
  {
    id: 2,
    title: "Drinks",
    img: `${categoryImgSrc}icon-2.svg`,
  },
  {
    id: 3,
    title: "Milk",
    img: `${categoryImgSrc}icon-3.svg`,
  },
  {
    id: 4,
    title: "American Orange fruit",
    img: `${categoryImgSrc}icon-4.svg`,
  },
  {
    id: 5,
    title: "American Orange fruit",
    img: `${categoryImgSrc}icon-5.svg`,
  },
  {
    id: 6,
    title: "American Orange fruit",
    img: `${categoryImgSrc}icon-6.svg`,
  },
  {
    id: 7,
    title: "American Orange fruit",
    img: `${categoryImgSrc}icon-7.svg`,
  },
  {
    id: 8,
    title: "American Orange fruit",
    img: `${categoryImgSrc}icon-8.svg`,
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(id) {
  return categories.find((c) => c.id === id);
}

const offerImgSrc = "assets/img/best-offers/";

const offers = [
  {
    id: 1,
    title: "Daily essentials",
    img: `${offerImgSrc}offer-1.jpg`,
  },
  {
    id: 2,
    title: "Daily offers",
    img: `${offerImgSrc}offer-2.jpg`,
  },
  {
    id: 3,
    title: "Discount Offers",
    img: `${offerImgSrc}offer-3.jpg`,
  },
  {
    id: 4,
    title: "Mega offers",
    img: `${offerImgSrc}offer-4.jpg`,
  },
  {
    id: 5,
    title: "Discount Offers",
    img: `${offerImgSrc}offer-3.jpg`,
  },
  {
    id: 6,
    title: "mega offers",
    img: `${offerImgSrc}offer-4.jpg`,
  },
];

export function getOffers() {
  return offers;
}

export function getOffer(id) {
  return offers.find((o) => o.id === id);
}

const addsImgSrc = "assets/img/adds/";
const adds = [
  {
    id: 1,
    img: `${addsImgSrc}img-1.jpg`,
  },
  {
    id: 2,
    img: `${addsImgSrc}img-2.jpg`,
  },
  {
    id: 3,
    img: `${addsImgSrc}img-3.jpg`,
  },
];

export function getAdds() {
  return adds;
}

export const singleAdd = {
  img: `${addsImgSrc}single-add.jpg`,
};

const cart = [];

export function getCart() {
  return cart;
}
