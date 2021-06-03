import React from "react";
import { Container, Row, Alert, Spinner } from "react-bootstrap";

import './Cart.scss'

function Home() {
  return (
    <div className="cart-view">
      
      <Container fluid="md" className="cart">
            <Row className="justify-content-md-center">

                <Alert key="1" className="text-center cart-card">
                    <Alert.Heading>Here will be a cart...</Alert.Heading>
                    <br/>
                    <Spinner animation="grow" variant="danger" role="status">
                    </Spinner>
                    <br/><br/>
                    <Alert.Heading>soon.</Alert.Heading>
                </Alert>

            </Row>
        </Container>

    </div>
  );
}

export default Home
