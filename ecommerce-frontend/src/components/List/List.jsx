import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () =>{

    const data = [
        {
            id: 1,
            img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1665405926_6980127.jpg?format=webp&w=376&dpr=1.0",
            img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654324617_3798106.jpg?format=webp&w=376&dpr=1.0",
            title: "long sleve graphics tshirt",
            isNew: true,
            oldPrice: 10,
            price: 8
        },
        {
            id: 1,
            img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670479338_7309681.jpg?format=webp&w=376&dpr=1.0",
            img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670482560_5632899.jpg?format=webp&w=376&dpr=1.0",
            title: "long sleve graphics tshirt 2",
            isNew: true,
            oldPrice: 15,
            price: 12
        },
        {
            id: 1,
            img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670344103_7026664.jpg?format=webp&w=376&dpr=1.0",
            img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670344096_9495688.jpg?format=webp&w=376&dpr=1.0",
            title: "long sleve graphics tshirt 3",
            isNew: false,
            oldPrice: 18,
            price: 15
        },
        {
            id: 1,
            img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1665405926_6980127.jpg?format=webp&w=376&dpr=1.0",
            img2: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1654324617_3798106.jpg?format=webp&w=376&dpr=1.0",
            title: "long sleve graphics tshirt 4",
            isNew: false,
            oldPrice: 25,
            price: 20
        }
    ]

    return (
        <div className="list">
            {data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
    )
}

export default List;