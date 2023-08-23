import React from "react"; 
import { Card, CardBody, CardTitle, CardText, CardFooter } from "reactstrap";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function CardBook(props) {
    const { detailBook } = props;
    const {  
        masp,	
        tensp,	 
        gia,	 
        hinhanh,
        soluongton,
        loaisanpham_id,	 	
        tentacgia,
        phantram,
        giagg,	
        tennuoc,
    } = detailBook;

    const urlImg = `/images/${
        hinhanh ? hinhanh : "default-image"
    }.jpg`;
    const styleprice = phantram? 'style-price'  : 'price';  
    const stylediscount = phantram ? 'discount' : 'discount_price' ;
    const stylephantram = phantram ? 'style-phantram' : 'discount_price' ;

    let navigate = useNavigate()

    const handleGetDetail = (loaisanpham_id,masp) => {
        localStorage.setItem("masanpham",JSON.stringify(masp)); 
        localStorage.setItem("idloaisanpham",JSON.stringify(loaisanpham_id));  
        let path = `/shop/product/${masp}`; 
        navigate(path);
    }
 
    return (
        <Card 
            className="m-2 mt-4 mb-4"
            onClick={() => handleGetDetail(loaisanpham_id,masp)}
        >
         <span className={stylephantram}>{phantram+"%"}</span>
            <img className="card__image" alt="Sample" src={urlImg} />
            <CardBody>
                <CardTitle tag="h5">{tensp}</CardTitle> 
            </CardBody>
            <CardFooter>
                <span className={styleprice}>{gia+"đ"}</span>
                <span className={stylediscount}>{giagg+"đ"}</span>
            </CardFooter>
        </Card>
    );
}

export default CardBook;
