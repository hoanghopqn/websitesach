import React, { useEffect, useState } from "react";
import FeaturedBook from "../../components/HomeComponents/FeaturedBook";
import * as sanphamServices from '../../apiServices/sanphamServices';
import "./style.scss";
import {
    Alert,
} from "reactstrap";
import OnSale from "../../components/HomeComponents/OnSale";
import { useSelector } from "react-redux";

function Home() {
    const [featuredBooks, setFeaturedBooks] = useState([]);
    const [SalesBooks, setSalesBooks] = useState([]);
    const [apiUrl, setApiUrl] = useState('get-recommend')
    
  const listUserDDHLink = useSelector((state) => state.sanpham);    
  console.log(listUserDDHLink)
    const handleFilterBook = (apiUrl) => {
        setApiUrl(apiUrl);
    }

    useEffect(() => {
        const getFeaturedBooks = async () => {
            const result = await sanphamServices.getListSanPham(apiUrl);
            setFeaturedBooks(result.sanpham.data)
        }
        getFeaturedBooks() 
    }, [apiUrl]); 
    useEffect(() => { 
        const getSaleBooks = async () => {
            const result = await sanphamServices.getListSanPham('get-sanpham-sale');
            setSalesBooks(result.sanpham.data)
        }
        getSaleBooks()
    }, []); 
    return (
        <>
        <OnSale 
                saleBooks={SalesBooks}/>
            <FeaturedBook
                featuredBooks={featuredBooks}
                onFilterBook={handleFilterBook}
            />
        </>
    );
}

export default Home;
