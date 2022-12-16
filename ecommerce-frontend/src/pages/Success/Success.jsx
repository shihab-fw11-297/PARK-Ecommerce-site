import React from 'react'
import './Success.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Success = () => {
    const [data, setData] = useState([])

    function check(product) {
        let data = product.products.length;
        return data;
    }

    const fetchPosts = async () => {
        await axios.get(`http://localhost:5000/api/order/find/63949194f78806644ff1f542`).then((res) => {
          setData(res.data);
        })
    
      };
    
    //   console.log("data",data)
    
      useEffect(() => {
        fetchPosts();
        //eslint-disable-next-line
      }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="success">
                    <h1 className="title">Thank you for New Order</h1>
                    <h4 className="secondtitle">Click Perticular Order and Check Order Full Details</h4>
                </div>

                <div className="wrapper">
                    <div className="infos">
                        <div className="product">
                            <div className="productDetails">
                                <div className="details">
                                    <div className="productTitle">
                                        Account
                                    </div>
                                    <span className="productId">
                                        <b>Name :  Shihab Shaikh</b>
                                    </span>

                                    <span className="productId">
                                        <b>User email : shihab@gmail.com</b>
                                    </span>

                                    <span className="productId">
                                        <b>Shipping Address : vapi</b>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="product">
                            <div className="productDetails">
                                <div className="details">
                                    <div className="productTitle">
                                        <b>ORDERS </b>
                                    </div>

                                    <div className="productTitle">
                                        <b>Orders & Returns </b>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product">
                            <div className="productDetails">
                                <div className="details">
                                    <div className="productTitle">
                                        <b>CREDITS </b>
                                    </div>

                                    <div className="productId">
                                        <b> Coupons </b>
                                    </div>

                                    <div className="productId">
                                        <b> Champion Credit</b>
                                    </div>

                                    <div className="productId">
                                        <b> Champion Cash</b>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="infos">
                        {data?.map((product) => (
                            <div className="product">
                                
                                    <Link to={`/Singleorder/${product.orderID}`}>
                                        <div className="productDetails">
                                            <div className="productDetail">
                                                <div className="productId">
                                                    <b>Shipping Address : {product.address}  </b>
                                                </div>

                                                <div className="productId">
                                                    <b>Total Amount : {product.amount} </b>
                                                </div>

                                                <div className="productId">
                                                    <b>Quantity: {check(product)} </b>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="PriceDetail">
                                        {
                                            product.status === 'pending' ?
                                                <div className="productPrices">
                                                    <button className="cancelOrder">cancel Order</button>
                                                </div>
                                                : product.status === 'fullfield' ?
                                                    <div className="productPrice">
                                                        <b>Order has been deliverd.</b>
                                                    </div>
                                                    :
                                                    <div className="productPrice">
                                                        <b>Order has been cancelled.</b>
                                                    </div>
                                        }
                                        <div className="productPrice">
                                            <b>Order status :{product.status} </b>
                                        </div>
                                        <div className="productPrice">
                                            <b>Order Date: {new Date(product.createdAt).toDateString()} </b>
                                        </div>
                                    </div>
                            </div>
                        ))}
                        <hr/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Success;
