import React from 'react'
import Card from './card'
import './menu.css'
import { useState } from 'react'


function Menu(props) {
  // 
  const card = [
    {
      id: 1,
      img: "./card_home.png",
      p: 'Продаю 10km дом  в Бишкеке',
      price: 5000
    },
    {
      id: 2,
      img: "./home2.jpg",
      p: 'Продаю 15km дом  в Бишкеке',
      price: 25000,
    },
    {
      id: 3,
      img: "./hom3.jpg",
      p: 'Продаю 2km дом  в Бишкеке',
      price: 2000,
    },
    {
      id: 4,
      img: "./home4.jfif",
      p: 'Продаю 20km дом  в Бишкеке',
      price: 4500
    },
    {
      id: 5,
      img: "./home5.jfif",
      p: 'Продаю 8km дом  в Бишкеке',
      price: 7400
    },
    {
      id: 6,
      img: "./home6.jfif",
      p: 'Продаю 12km дом  в Бишкеке',
      price: 24000
    },
    {
      id: 7,
      img: "./home7.jfif",
      p: 'Продаю 7km дом  в Бишкеке',
      price: 6000
    },
    {
      id: 8,
      img: "./home8.jpg",
      p: 'Продаю 12km дом  в Бишкеке',
      price: 12000
    },
  ]
  //
  const [objArr, setValue] = useState(card);
  // 
  function Delete(id) { // удаление объекта из массива при совпадении id
    setValue(objArr.filter(obj => obj.id != id));
  }
  //
  const result = objArr.map((obj) => {
    return <div className='card'>
      <div>
        <img src={obj.img} />
        <p>{obj.p}</p>
        <div>{obj.price}</div>
        <div className='btn' key={obj.id}>
          <button  onClick={() => Delete(obj.id)}>Купить</button>
        </div>
      </div>
    </div>
  });

  return (
    <menu >

      <div className='last_Adt'>
        <h1>Последние объявления</h1>
      </div>

      <div>

        {/*  */}
        <div className='square'>
          {result}
        </div>
        {/*  */}

      </div>


    </menu>
  )
}

export default Menu