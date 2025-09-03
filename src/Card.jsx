import React from 'react'
import './Card.css'
export default function Card() {
  return (
   <div className="birthdayCard">
    <div className="cardFront">
      <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">HAPPY BIRTHDAY Love!</h3>
      <p>Dear Friend,</p>
      <p>
        Поздравляю тебя 🌷 Пусть в жизни будет как можно больше счастливых
        моментов. Ты удивительный человек, и с тобой всё вокруг становится ярче.
        Очень ценю наше общение — и верю, что впереди у нас ещё много прекрасных
        моментов вместе.
      </p>
      <p className="name">Temirlan</p>
    </div>
  </div>
  )
}
