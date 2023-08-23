import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CardBook from "../../CardBook";
import "./style.scss"; 

function FeaturedBook(props) {
    const { featuredBooks, onFilterBook } = props;
    const [ active, setActive ] = useState('get-recommend')

    const handleFilterBook = (apiUrl) => {
        if(onFilterBook) {
            onFilterBook(apiUrl)
        }
        setActive(apiUrl)
    }
 
    const slides = featuredBooks.map((book, index) => {
        return (
            <Col className="col" key={index}>
                <CardBook detailBook={book}/>
            </Col>
        );
    });
    return (
        <div className="container__feature">
            <div className="container__feature-btn"> 
                <Button 
                    className={active == 'get-recommend' ? 'active' : ''}
                    onClick={() => handleFilterBook('get-recommend')}
                >
                    Recommended
                </Button>
                <Button 
                    className={active == 'get-popular' ? 'active' : ''}
                    onClick={() => handleFilterBook('get-popular?limit=15')}
                >
                    Popular
                </Button>
            </div>
            <Container className="container__feature-card">
                <Row className="row" xs="4">{slides}</Row>
            </Container>
        </div>
    );
}

export default FeaturedBook;
