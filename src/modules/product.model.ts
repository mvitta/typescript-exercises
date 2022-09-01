export type Product = {
  nameProduct: string;
  price: number;
  description: string;
  image: string;
};

export const allProducts: Product[] = [
  {
    nameProduct: 'pera',
    description: 'esto es una pera',
    price: 1000,
    image: 'link-de-la-imagen',
  },

  {
    nameProduct: 'manzana',
    description: 'esto es una manzana',
    price: 2000,
    image: 'link-de-la-imagen',
  },
  {
    nameProduct: 'lulo',
    description: 'esto es una lulo',
    price: 3000,
    image: 'link-de-la-imagen',
  },
  {
    nameProduct: 'mora',
    description: 'esto es una mora',
    price: 4000,
    image: 'link-de-la-imagen',
  },
  {
    nameProduct: 'naranja',
    description: 'esto es una naranja',
    price: 5000,
    image: 'link-de-la-imagen',
  },
];
