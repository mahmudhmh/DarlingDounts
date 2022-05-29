import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
   
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 plus product any range.",
    }, {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "City Delivery",
      decs: "We offer Delivery for our beloved Customers in the City of Alexandria.",
    },{
      cover: <i class='fa-solid fa-headset'></i>,
      title: "24/7 Support ",
      decs: "We have 24/7 Customer Support for any problems.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "Shop with your eyes closed we have high security at our website.",
    },
    
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
