import React from "react"


const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/donut1.png",
      cateName: "Dunkin Donuts",
    },
    {
      cateImg: "./images/category/donut2.png",
      cateName: "Krispy Kreme",
    },
    {
      cateImg: "./images/category/donut1.png",
      cateName: "Rose",
    },
    {
      cateImg: "./images/category/donut2.png",
      cateName: "360 Donuts",
    },
    {
      cateImg: "./images/category/donut1.png",
      cateName: "Donuts Corner",
    },
    {
      cateImg: "./images/category/donut2.png",
      cateName: "Vanilloz Donuts",
    },
  ];
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
