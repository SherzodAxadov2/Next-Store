import React from 'react'
import './category.css'

const Category = ({ category, productsNumberShow }) => {
    console.log(productsNumberShow)

    return (
        <>

            <div className='category'>
                <div className='display' style={{ backgroundImage: `${category.image}` }}>
                    <img alt='' src={category.image}></img>

                </div>
                <div className='description'>
                    <div style={{ display: productsNumberShow ? 'inline-block' : 'none' }}>{category.allproduct}</div>
                    <div>{category.title}</div>
                    <div style={{ display: productsNumberShow ? 'inline-block' : 'none' }}>{category.productsNumberShow}</div>
                </div>
            </div>





        </>
    )
}

export default Category