import React from 'react'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import ProductBestSeller from '../../components/product-best-seller/ProductBestSeller'
import { categories } from '../../constants/categories'
import './categories.css'

const Categories = () => {

    const allCategories = categories

    return (
        <div className='all-categories-page'>
            <div className='container'>
                <Banner />
                <h2>Barcha Kategoriyalar</h2>
                <div className='categories-page'>
                    {
                        allCategories.map((category, index) => {
                            return (
                                <Category key={index} category={category} productsNumberShow={true} />
                            )
                        })
                    }</div>
                <ProductBestSeller count={5} />
            </div>
        </div>
    )
}

export default Categories