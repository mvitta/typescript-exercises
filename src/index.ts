import axios from 'axios';
import 'dotenv/config';
import { Product } from './modules/product.model';
import { allProducts } from './modules/product.model';
import express from 'express';
import { log, table } from 'console';

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

  //-------------------------LEETCODE---------------------------------------------
  function removeElement(nums: number[], val: number): number {
    const MAX_LENGTH = 100;
    const MIN_LENGTH = 0;
    if (!(nums.length >= MIN_LENGTH && nums.length <= MAX_LENGTH)) {
      throw Error('Error Length');
    }
    let i = 0;
    for (const num of nums) {
      if (num != val) {
        nums[i++] = num;
      }
    }
    return i;
  }
  //-----------------------------------------------------------------------------
  // return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
  function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle, 0);
  }

  //-----------------------------------------------------------------------------------

  function twoSum(nums: number[], target: number): number[] {
    let aux: number[] = [];
    let sum = 0;
    let exit = false;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        sum += nums[i] + nums[j];
        if (sum === target) {
          exit = true;
          aux = [i, j];
          break;
        }
        sum = 0;
      }
      if (exit) break;
    }
    return aux;
  }
  //-------------------------------------------------------------------------------
  function longestCommonPrefix(strs: string[]): string {
    // comparar caracter con cada palabra eh ir concatenando
    let ch = '';
    let exit = false;
    for (let i = 0; i < strs[0].length; i++) {
      ch += strs[0][i];
      console.log(ch);
      for (const str of strs) {
        const r = str.startsWith(ch);
        console.log({ r });
        if (!r) {
          exit = true;
          ch = ch.slice(0, -1);
          break;
        }
      }
      if (exit) break;
    }

    return ch;
  }

  //------------------------------------------------------------------------------
  function plusOne(digits: number[]): number[] {
    return (BigInt(digits.toString().split(',').join('')) + BigInt(1))
      .toString()
      .split('')
      .map((n) => Number(n));
  }

  const output = plusOne([
    6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3,
  ]);
  console.log({ output });
})();
