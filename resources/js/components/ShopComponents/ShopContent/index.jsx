import React from 'react';    
import { Col, Container, Row } from "react-bootstrap";
import CardBook from "../../CardBook"; 
import "./style.scss";   

function ShopContent(props)
{ 
  const {BooksAll} = props
  const slides = BooksAll.map((book, index) => {
    return (
        <Col className="col" key={index}>
            <CardBook detailBook={book}/>
        </Col>
    );
});
  
  return (      
    <>  
    <Container>
                <Row className="row" xs="4">{slides}</Row>
            </Container> </>
  );
}
export default ShopContent;
