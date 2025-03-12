import { Navbar, Container, Nav, NavDropdown, InputGroup, Form, FormControl, Button, Image } from 'react-bootstrap';
import RIcon from '../assets/react.svg'
import Logo from '../assets/logo.png'
import Search from '../assets/search.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header({ NavList }) {
    const handleOnSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={Logo} alt="Lỗi hình ảnh" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Form onSubmit={event => handleOnSubmit(event)}>
                                <InputGroup>
                                    <Button variant="secondary" className='border border-0'>
                                        <Image src={Search} className='mb-1' />
                                    </Button>
                                    <FormControl placeholder='What would you like to cook' />
                                </InputGroup>
                            </Form>
                        </Nav>
                        <Nav className="me-auto">
                            {
                                NavList.map((i, index) => (
                                    <Nav.Link href={`#${i}`} key={index}>{i}</Nav.Link>
                                ))
                            }
                        </Nav>
                        <Nav className="align-items-center">
                            <Button>Your Recipe Box</Button>
                            <NavDropdown title={
                                <Image src={RIcon} roundedCircle />
                            }>
                                <NavDropdown.Item href="#">Thông tin</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Thoát</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header