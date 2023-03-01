import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../constants/categories'
import Category from '../category/Category'
import './categorieshome.css'

const CategoryHome = () => {

    const allCategories = categories.slice(0, 8)

    return (
        <div className='container'>
            <div className='box'>
                {
                    allCategories.map((category, index) => {
                        return (
                            <Category key={index} category={category} productsNumberShow={false} />
                        )
                    })
                }

            </div>

            <Link to='/categories' className='link' >Batafsil</Link>

        </div>
    )
}

export default CategoryHome