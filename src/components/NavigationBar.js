import { Navbar, Container, Nav } from "react-bootstrap"
const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark mb-3">
                <Container>
                    <Navbar.Brand href="/">
                        Fatoni Film
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Trending</Nav.Link>
                        <Nav.Link href="#superhero">Superhero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavigationBar