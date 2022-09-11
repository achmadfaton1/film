import { Card, Container, Row, Col, Image } from "react-bootstrap"
import "../style/landingPage.css"

const Superhero = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className=" movieImage">
                            <Image
                                className="images"
                                src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXJoZXJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                alt="cardImage"
                            />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">

                                    <Card.Title className="text-center">Card title</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a longer card with supporting text
                                    </Card.Text>
                                </div>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero