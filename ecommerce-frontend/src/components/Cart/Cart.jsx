import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data = [
        {
            id: 1,
            img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1665405926_6980127.jpg?format=webp&w=376&dpr=1.0",
            title: "long sleve graphics tshirt",
            desc:"long sleve graphics tshirtlong sleve graphics tshirtlong sleve graphics tshirt long sleve graphics tshirt",
            isNew: true,
            oldPrice: 10,
            price: 8
        },
        {
            id: 1,
            img1: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1670479338_7309681.jpg?format=webp&w=376&dpr=1.0",
            title: "long sleve graphics tshirt 2",
            desc:"long sleve graphics tshirtlong sleve graphics tshirtlong sleve graphics tshirt long sleve graphics tshirt",
            isNew: true,
            oldPrice: 15,
            price: 12
        }
    ];

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img1} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            {2} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className="delete" />
                </div>
            ))}

            <div className="total">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">
                Reset Cart
            </span>
        </div>
    )
}

export default Cart;

