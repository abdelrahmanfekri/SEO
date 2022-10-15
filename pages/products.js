import React from 'react'
import { NextSeo } from 'next-seo'
import MyArticleJsonLD from '../components/MyArticleJsonLD'
import MyProductJsonLD from '../components/MyProductJsonLD'
import MyRecipeJsonLD from '../components/MyRecipeJsonLD'

export default function products() {
    return (
        <>
            <MyArticleJsonLD/>
            <MyRecipeJsonLD/>
            <MyProductJsonLD/>
            <NextSeo title="products" description='products descriptions'></NextSeo>
            <div>products</div>
        </>

    )
}
