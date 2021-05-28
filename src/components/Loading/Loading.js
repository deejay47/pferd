import React from "react";
import { Container, Row, Alert, Spinner } from "react-bootstrap";

function Loading() {

    return (
        <Container fluid="md">
            <Row className="justify-content-md-center">

                <Alert key="1" variant="light" className="text-center">
                    <Alert.Heading>Cargando</Alert.Heading>
                    <br></br>

                    <Spinner animation="border" variant="danger" role="status">
                    </Spinner>
                    <br></br>
                    <br></br>

                    <p>Aguarde por favor</p>

                </Alert>

            </Row>
        </Container>
    );
}

export default Loading;
