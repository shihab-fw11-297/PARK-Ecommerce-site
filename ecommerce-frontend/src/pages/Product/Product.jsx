import React from 'react'
import './Product.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useState } from "react";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState("img");

    const images = [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1665405926_6980127.jpg?format=webp&w=376&dpr=1.0",
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654324617_3798106.jpg?format=webp&w=376&dpr=1.0",
    ];


    return (
        <>
            <Navbar />
            <div className='Product'>
                <div className="left">
                    <div className="images">
                        <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
                        <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
                    </div>

                    <div className="mainImg">
                        <img src={images[selectedImg]} alt="" />
                    </div>
                </div>

                <div className="right">

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Product