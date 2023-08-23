import React from "react";
import Slider from "react-slick";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { Link, useNavigate } from "react-router-dom";
import CardBook from "../../CardBook";
import "./style.scss";

function OnSale(props) {
    const { saleBooks } = props; 
    let navigate = useNavigate();
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    const handleToPage = () => {
        let path = `/shop`; 
        navigate(path);
    }
    const slides = saleBooks.map((book, index) => {
        return (
            <div className="single-product">
                <CardBook detailBook={book} />
            </div>
        );
    });
    return (
        <div className="Banner">
            <div className="Banner-Container">
                <div className="Banner-header">
                    <span className="Banner-title">On Sale</span>
                    <div className="Banner-btn"> 
                            <button onClick={handleToPage}>viewAll</button> 
                    </div>
                </div>

                <div className="Banner-body">
                    <Slider {...settings}>{slides}</Slider>
                </div>
            </div>
        </div>
    );
}

export default OnSale;
