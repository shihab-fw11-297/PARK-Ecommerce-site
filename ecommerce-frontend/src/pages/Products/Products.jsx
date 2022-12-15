import List from "../../components/List/List"
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './Products.scss'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Products = () => {
    const location = useLocation();
    let cats = location.pathname.split("/")[2];
    const [selectCats, setSelectCats] = useState("");
    const [maxPrice, setMaxPrice] = useState(30000);
    let [items, setItems] = useState([]);
    const [sort, setSort] = useState("newest");
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            try {
                const res = await axios.get(`http://localhost:5000/api/products?category=${cats}`);
                setItems(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        
    }, [cats])

    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true);
            try {
                const res = await axios.get(cats ? `http://localhost:5000/api/products?category=${cats}` :
                `http://localhost:5000/api/products`
                );
                setItems(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        
    }, [])

    useEffect(() => {
    setSelectedCheckboxes([])
    setSelectCats("")
    },[location.pathname.split("/")[2]]);

    const handleChange = async (e) => {
        // cat = e.target.value;
        let data = await axios.get(e.target.value
            ? `http://localhost:5000/api/products?category=${e.target.value}` :
            `http://localhost:5000/api/products`);

        // console.log("data",e.target.value)
        setSelectCats(e.target.value);
        if (e.target.value === 'shoes' || e.target.value === 'sandle' || e.target.value === 'slides') {
            console.log("datas", data)
            data = data.data.filter((item) => (item.categories[0] === e.target.value && item.categories[1] === location.pathname.split("/")[2]))
            setItems(data)
        } else {
            setItems(data.data)
        }
    }

    const getData = async () => {

        let data = await axios.get(selectCats
            ? `http://localhost:5000/api/products?category=${selectCats}` :
            `http://localhost:5000/api/products`);

        data = data.data.filter((item) => item.price <= maxPrice);
        setItems(data);
    }

    useEffect(() => {
        if (sort === "newest") {
            setItems((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setItems((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setItems((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);


    const filterByColor = async (id) => {
        //    console.log(e);
        const selectedCheckboxe = selectedCheckboxes;

        const findIdx = selectedCheckboxe.indexOf(id);

        if (findIdx > -1) {
            selectedCheckboxe.splice(findIdx, 1);
        } else {
            selectedCheckboxe.push(id);
        }
        setSelectedCheckboxes(selectedCheckboxe);
        // console.log("unique", selectedCheckboxe);
        if (selectedCheckboxe.length !== 0) {
            let data = await axios.get(selectCats
                ? `http://localhost:5000/api/products?category=${selectCats}` :
                cats
                ? `http://localhost:5000/api/products?category=${cats}` :
                `http://localhost:5000/api/products`);
            const res = data.data.filter(x => selectedCheckboxe.some(y => y === x.color[0]));
            setItems(res)
        } else {
            let data = await axios.get(selectCats
                ? `http://localhost:5000/api/products?category=${selectCats}` :
                cats
                ? `http://localhost:5000/api/products?category=${cats}` :
                `http://localhost:5000/api/products`);
            setItems(data.data)
        }
        // console.log("unique", res);
    }



    return (
        <>
            <Navbar />
            <div className='Products'>
                <div className="left">
                    <div className="filterItem">
                        <h2>Product Categories</h2>
                        <div className="cats">
                            <input type="radio" id="1" value={cats} name="cats" defaultChecked onChange={(e) => handleChange(e)} />
                            <label htmlFor="1">All</label>
                        </div>

                        <div className="cats">
                            <input type="radio" id="1" value="shoes" name="cats" onChange={(e) => handleChange(e)} />
                            <label htmlFor="1">Shoes</label>
                        </div>
                        <div className="cats">
                            <input type="radio" id="3" value="sandle" name="cats" onChange={(e) => handleChange(e)} />
                            <label htmlFor="3">sandle</label>
                        </div>
                        <div className="cats">
                            <input type="radio" id="2" value="slides" name="cats" onChange={(e) => handleChange(e)} />
                            <label htmlFor="2">Slides</label>
                        </div>
                    </div>
                    <div className="filterItem">
                        <h2>Filter by price</h2>
                        <div className="inputItem">
                            <span>0</span>
                            <input
                                type="range"
                                min={0}
                                max={30000}
                                onChange={(e) => { setMaxPrice(e.target.value); getData() }}
                            />
                            <span>{maxPrice}</span>
                        </div>
                    </div>
                    <div className="filterItem">
                        <h2>Sort by</h2>
                        <div className="inputItem">
                            <input
                                type="radio"
                                id="asc"
                                value="asc"
                                name="price"
                                onChange={(e) => setSort("New")}
                            />
                            <label htmlFor="asc">Newest</label>
                        </div>

                        <div className="inputItem">
                            <input
                                type="radio"
                                id="asc"
                                value="asc"
                                name="price"
                                onChange={(e) => setSort("asc")}
                            />
                            <label htmlFor="asc">Price (Lowest first)</label>
                        </div>

                        <div className="inputItem">
                            <input
                                type="radio"
                                id="desc"
                                value="desc"
                                name="price"
                                onChange={(e) => setSort("desc")}
                            />
                            <label htmlFor="desc">Price (Highest first)</label>
                        </div>
                    </div>

                    <div className="filterItem">
                        <h2>Filter by Color</h2>
                        <div className="inputItem">
                            <input
                                type="checkbox"
                                id="black"
                                value="black"
                                name="black"
                                onChange={(e) => filterByColor("black")}
                                selected={selectedCheckboxes.includes("black")}
                            />
                            <div className="filterColor" style={{width:'20px', height:'20px',borderRadius:'50%',backgroundColor:'black',margin:'0px 5px 0px 1rem'}}></div>
                            <label htmlFor="Black">Black</label>
                        </div>

                        <div className="inputItem">
                            <input
                                type="checkbox"
                                id="blue"
                                value="blue"
                                name="blue"
                                onChange={(e) => filterByColor("blue")}
                                selected={selectedCheckboxes.includes("blue")}
                            />
                            <div className="filterColor" style={{width:'20px', height:'20px',borderRadius:'50%',backgroundColor:'blue',margin:'0px 5px 0px 1rem'}}></div>
                            <label htmlFor="blue">Blue</label>
                        </div>

                        <div className="inputItem">
                            <input
                                type="checkbox"
                                id="white"
                                value="white"
                                name="white"
                                onChange={(e) => filterByColor("white")}
                                selected={selectedCheckboxes.includes("white")}
                            />
                            <div className="filterColor" style={{width:'20px', height:'20px',borderRadius:'50%',backgroundColor:'white',margin:'0px 5px 0px 1rem'}}></div>
                            <label htmlFor="white">White</label>
                        </div>

                        <div className="inputItem">
                            <input
                                type="checkbox"
                                id="Red"
                                value="Red"
                                name="Red "
                                onChange={(e) => filterByColor("Red")}
                                selected={selectedCheckboxes.includes("Red")}
                            />
                            <div className="filterColor" style={{width:'20px', height:'20px',borderRadius:'50%',backgroundColor:'red',margin:'0px 5px 0px 1rem'}}></div>
                            <label htmlFor="Red">Red</label>
                        </div>

                        <div className="inputItem">
                            <input
                                type="checkbox"
                                id="Multicolour"
                                value="Multi-Colour"
                                name="Multi-Colour"
                                onChange={(e) => filterByColor("Multi-Colour")}
                                selected={selectedCheckboxes.includes("Multi-Colour")}
                            />
                            <div className="filterColor" style={{width:'20px', height:'20px',borderRadius:'50%',backgroundColor:'#ff00e1',margin:'0px 5px 0px 1rem'}}></div>
                            <label htmlFor="Multi-color">Multi-color</label>
                        </div>
                    </div>

                </div>

                <div className="right">
                    <img
                        className="catImg"
                        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <List data={items} selectedCheckboxes={selectedCheckboxes} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Products