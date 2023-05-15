import React from 'react';
import './style.css';
import { useState } from 'react';

import Header from './Header.jsx';
import Corps from './Corps.jsx';
import Footer from './Footer.jsx';

function Papa({ name }) {
  return <h1> Projet Read {name} </h1>;
}

export default function App() {
  return (
    <>
      <Papa name="Papa" />
      <Header />
      <Corps />
      <Footer />
    </>
  );
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function MyButton1() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


function MyButton() {
  const [count, setCount] = useState(0);
  const [a , setA] = useState('lass');

  function handleClick() {
    setCount(count+1);
     setA("papa lo") ;
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} {a} times
    </button>
  );
}

function MyButton3({ count, onClick }) {
  return (
    <button onClick={onClick}>
      clikk {count} me
    </button>
  );
}


export default function ShoppingList() {
  const [count, setCount] = useState(0);
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  function tata(){
    setCount(count+1);
  }

  return (
    //<ul>{listItems}</ul>
    <>
      <ul>
        {products.map(products => 
        <li key={products.id} style ={{color: products.isFruit ? "red": "green"}} > 
          {products.title}
        </li>
        )}
      </ul>

      <br/>

      <MyButton />
      <br/>
      <MyButton3  count={count+1} onClick={tata}/>


    </>
  );
}
