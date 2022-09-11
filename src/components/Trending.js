import { Card, Container, Row, Col, Image } from "react-bootstrap"
import "../style/landingPage.css"

const Trending = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className=" movieImage">
                            <Image
                                className="images"
                                src="https://media.istockphoto.com/photos/asian-chinese-mixed-age-group-audience-watching-movie-sitting-in-a-picture-id1334584173?b=1&k=20&m=1334584173&s=170667a&w=0&h=KRYZOvFdEDkVmi_A2UyJnBWFXJsQ0gwiyfItopsp4ac="
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

export default Trending