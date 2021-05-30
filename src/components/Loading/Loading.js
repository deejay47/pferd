import React from "react";
import { Container, Row, Alert, Spinner } from "react-bootstrap";

import './Loading.scss'

function Loading() {

    return (
        <Container fluid="md" className="loading">
            <Row className="justify-content-md-center">

                <Alert key="1" variant="light" className="text-center">
                    <Alert.Heading>Cargando</Alert.Heading>
                    <br/>
                    <Spinner animation="border" variant="danger" role="status">
                    </Spinner>
                    <br/><br/>
                    <p>Aguarde por favor</p>
                </Alert>

            </Row>
        </Container>
    );
}

export default Loading;
