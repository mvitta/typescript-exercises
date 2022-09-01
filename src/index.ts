import axios from 'axios';
import 'dotenv/config';
import { Product } from './modules/product.model';
import { allProducts } from './modules/product.model';
import express from 'express';

(() => {
  const myProducts: Product[] = [];
  // alias type: crea una tipo de dato que acepta diferentes tipos de datos
  type data = string | number | null;
  type Size = 'S' | 'M' | 'L' | 'XL';
  type Person = {
    name: string;
    age: number;
    response: boolean;
  };
  //literal types: conjunto acotado de opciones
  // let shirtSize: 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Size;
  // let data : string | number | null

  function promedio(array: number[]): number {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      suma += element;
    }
    return suma / array.length;
  }

  function contarMayores(array: number[], compare: number): number {
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element > compare) {
        cont++;
      }
    }
    return cont;
  }

  function mayor(array: number[]): number {
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      console.log(`${mayor} > ${element})`);
      let rta: boolean = mayor < element;
      console.log(rta);
      if (rta) {
        mayor = element;
      }
    }
    return mayor;
  }

  const fetchData = async () => {
    const URL = `https://free-nba.p.rapidapi.com/teams?page=${0}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bd05e0d471msh7ec8334312fa389p1bf0f6jsn1be1d32fe181',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
    };
    try {
      const response = await fetch(URL, options);
      const json = await response.json();
      const { data } = json;
      // console.log(data);
      return data;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  function myFunction(theData: data): number {
    if (typeof theData === 'number') {
      return theData.toString().length;
    } else if (typeof theData === 'string') {
      return theData.length;
    }
    return -1;
  }

  function tamañoCamisa(theSize: Size) {
    console.log(theSize);
  }

  //si especificamos de la siquiente forma: name?: string, este parametro sera opcional
  const information = (
    name: string,
    age: number,
    response: boolean
  ): Object => ({
    name,
    age,
    response,
  });

  // Objetos en funciones

  const informationV1 = (newPerson: Person): void => {
    console.log(newPerson);
    console.log(newPerson.name);
    console.log({ rt1: newPerson.response });
  };

  const addProducts = (data: Product) => {
    allProducts.forEach((product) => {
      myProducts.push(product);
    });
    myProducts.push(data);
  };

  const showProducts = (): void => {
    console.log(myProducts);
  };

  addProducts({
    nameProduct: 'Jugo de lulo',
    description: 'esto es un jugo de lulo',
    price: 1500,
    image: 'link-de-la-imagen',
  });

  showProducts();

  //----------------------------------------------------
  let sum: number = 0;
  myProducts.forEach((item) => {
    const { price } = item;
    sum += price;
  });
  console.log({ sum });

  const server = (): void => {
    const app = express();
    const port: number = 3000;

    app.get('/', (req, res) => {
      res.send(`Hello word, ${new Date()}`);
      res.status(200);
    });

    app.listen(port, () => {
      console.log(`listening http://localhost:${port}/`);
    });
  };

  //fin
})();
