import React from 'react'
import './s3.scss'
import pic from './image.png'

const S3 = () => {
  return (
    <section className='s3'>
        <div className="container">
            <div className="row">
                <div className="text">
                    <h2>Clean and <br /> fragrant soy wax</h2>
                    <b>Made for your home and for your wellness</b>
                    <ul>
                        <li><p>Eco-sustainable:All recyclable materials, 0% CO2 emissions</p></li>
                        <li><p>Hyphoallergenic: 100% natural, human friendly ingredients </p></li>
                        <li><p>Handmade: All candles are craftly made with love.</p></li>
                        <li><p>Long burning: No more waste. Created for last long.</p></li>
                    </ul>
                    <button>Learn more</button>
                </div>
                <div className="pic">
                    <img src={pic} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default S3