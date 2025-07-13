import axios from "axios";
import React, { useEffect, useState } from "react";
import "./main.scss";

const API = "https://dummyjson.com";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${API}/products`, {params: {limit:8}})
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className="container">Loading...</div>;
    if (error) return <div className="container">Error :( {error}</div>;

    return (
        <div className="container products">
            <h2>Products</h2>
            <p>Order it for you or for your beloved ones </p>
            <div className="wrapper">
            {products.map((item) => (
                <div className="card" key={item.id}>
                    <img src={item.images} alt="" width={300} />
                    <div className="text">
                    <b>{item.title}</b>
                    <p>{item.price} $</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Main;
