#### Get all items

```http
  To run this locally-
    1st Step - Clone (https://github.com/snehasishdasz/Squbix-eCommerce.git)
    2nd Step - npm i on your terminal
    3rd Step - npm start
```

<h1 align="center">
    ⚡ SD Mart: Ecommerce Portal ⚡
</h1>
<p align="center">
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/a4f6da75-1d00-4eef-851e-23dc2376325e" alt="Login Page" width="600">
</p>

<p align="center">
  SD-Mart is a Ecpmmerce platform where you can buy all your favourite products
</p>


## 📌Screenshots

<p align="center">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/28428e06-f654-45cc-85d5-26b1a64779a0" alt="Main Interface" width="800">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/2024598c-2271-4cfd-97c4-8bdf5917c7fa" alt="Main Interface" width="800">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/463fd104-9c25-4419-b99f-cbcc0a2da21b" alt="Main Interface" width="800">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/3eb6bdd0-f42a-4efd-b7d8-39916d804849" alt="Main Interface" width="800">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/a36eb4a7-39c0-4f05-a466-6e2bf06642aa" alt="Main Interface" width="800">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/25c44e31-e6b2-46e7-a375-7d976aa9efcd" alt="Main Interface" width="800">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/3811ef8f-d733-48a5-81b4-c9dfe95a1b40" alt="Main Interface" width="800">

  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/0246f167-3e75-4ed3-a758-09aa3bb3d889" alt="Main Interface" width="800">
  
  <img src="https://github.com/snehasishdasz/Squbix-eCommerce/assets/78856467/8932b2c6-7719-4c8b-80ac-78ec50e73a23" alt="Main Interface" width="800">
  
</p>

## 📌Live Demo

Explore the live demo [SD-Mart](https://sdmart.vercel.app/).

## 📌Technologies Used

- React.js
- Bootstrap
- CSS
- Font-Awesom
- React-skeleton-loader
- npm
- react-redux
- react-router-dom


## API Reference

#### Get all items

```http
  fetch('https://fakestoreapi.com/products')
     //output
            [
                {
                    id:1,
                    title:'...',
                    price:'...',
                    category:'...',
                    description:'...',
                    image:'...'
                },
                /*...*/
                {
                    id:30,
                    title:'...',
                    price:'...',
                    category:'...',
                    description:'...',
                    image:'...'
                }
            ]

```

#### Get item

```http
fetch('https://fakestoreapi.com/products/${id}')
  //output
            {
                id:1,
                title:'...',
                price:'...',
                category:'...',
                description:'...',
                image:'...'
            }
```

#### Get Categories

```http
fetch('https://fakestoreapi.com/products/categories')
   //output
            [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
            ]
```
