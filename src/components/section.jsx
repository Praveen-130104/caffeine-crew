import React,{useState} from 'react';
import Coffee from './products/coffee'
import Tea from './products/tea'
import Juice from './products/juice'
import Pastries from './products/pastries'
import Categories from './products/categories';

//datas
const MENU = {
  coffee: [
    { name: 'Espresso', price: 100 },
    { name: 'Cappuccino', price: 150 },
    { name: 'Latte', price: 180 },
    { name: 'Americano', price: 120 },
    { name: 'Mocha', price: 200 },
  ],
  tea: [
    { name: 'Masala Chai', price: 20 },
    { name: 'Darjeeling Tea', price: 70 },
    { name: 'Assam Tea', price: 20 },
    { name: 'Green Tea', price: 50 },
    { name: 'Earl Grey Tea', price: 70 },
  ],
  pastries: [
    { name: 'Croissant', price: 75 },
    { name: 'Danish Pastry', price: 75 },
    { name: 'Éclair', price: 80 },
    { name: 'Muffin', price: 120 },
    { name: 'Apple turnover', price: 100 },
  ],
  juice: [
    { name: 'Orange Juice', price: 30 },
    { name: 'Apple Juice', price: 30 },
    { name: 'Pomegranate Juice', price: 80 },
    { name: 'Carrot Juice', price: 50 },
    { name: 'Watermelon Juice', price: 30 },
  ]

}
function Section(props) {
  const { atpage, handleClic, cart } = props;

  if (atpage === 'home') {
    return (
      <div className="container d-flex flex-wrap">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Coffee handleClic={handleClic} menu={MENU.coffee} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Tea handleClic={handleClic} menu={MENU.tea} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Pastries handleClic={handleClic} menu={MENU.pastries} />
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <Juice handleClic={handleClic} menu={MENU.juice} />
        </div>
      </div>
    );
  } else if (atpage === 'menu') {
    return (
      <div className="">
        <Categories menu={MENU} handleClic={handleClic} cart={cart} />
      </div>
    );
  }
}

export default Section;