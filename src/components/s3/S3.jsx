import React from 'react'
import './s3.scss'
import pic from './image.png'
import { LIST } from '../../static'


const S3 = () => {
  return (
    <section className='s3'>
        <div className="container">
            <div className="row">
                <div className="text">
                    <h2>Clean and <br /> fragrant soy wax</h2>
                    <b>Made for your home and for your wellness</b>
                    <ul>
                        {
                          LIST.map((item)=>{
                            return<li>
                              <p href="#">{item}</p>
                              </li>
                          })
                        }
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