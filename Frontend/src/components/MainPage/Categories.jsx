import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/c1.png",
      cateName: "Best Sellers",
    },
    {
      cateImg: "./images/category/c2.png",
      cateName: "Original Donuts",
    },
    {
      cateImg: "./images/category/c3.png",
      cateName: "Glazed Donuts",
    },
    {
      cateImg: "./images/category/c4.png",
      cateName: "Frosted Donuts",
    },
    {
      cateImg: "./images/category/c5.png",
      cateName: "Hot Drinks",
    },
    {
      cateImg: "./images/category/c6.png",
      cateName: "Cold Drinks",
    },
    {
      cateImg: "./images/category/c7.png",
      cateName: "Ecler",
    },
    {
      cateImg: "./images/category/c8.png",
      cateName: "Croissant",
    },
    {
      cateImg: "./images/category/c9.png",
      cateName: "Pretzel",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
