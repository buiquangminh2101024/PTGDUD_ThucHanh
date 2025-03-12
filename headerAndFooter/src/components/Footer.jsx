import { Navbar, Container, Nav, NavDropdown, InputGroup, Form, FormControl, Button, Image, Row, Col } from 'react-bootstrap';
import RIcon from '../assets/react.svg'
import Logo from '../assets/logo.png'
import LogoFooter from '../assets/LogoFooter.png'
import Search from '../assets/search.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer({ FooterLink }) {
    const [LearnMore, Shop, Recipes] = FooterLink
    const handleOnSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <>
            <Row className='bg-dark text-light py-4' style={{ height: '350px' }}>
                <Col xs={12} md={6} className='d-flex flex-column justify-content-between'>
                    <Form onSubmit={event => handleOnSubmit(event)} className='w-75'>
                        <Form.Label className='fw-bold'>About Us</Form.Label>
                        <p>
                            Welcome to our website, a wonderful place to explore and learn how to
                            cook like a pro.
                        </p>
                        <div className='d-flex justify-content-between'>
                            <Form.Control className='w-75' placeholder='Enter your email'/>
                            <Button className=''>Send</Button>
                        </div>
                    </Form>
                    <div className='d-flex justify-content-around align-items-center'>
                        <Image src={LogoFooter} className='mb-1' />
                        <span>
                            2023 Chefify Company
                        </span>
                        <span>
                            Terms of Service | Privacy Policy
                        </span>
                    </div>
                </Col>
                <Col className='d-flex flex-column justify-content-between' xs={12} md={3}>
                    <div className='d-flex flex-column justify-content-around' style={{ height: '50%' }}>
                        <div className='fw-bold'>{LearnMore.id}</div>
                        {
                            LearnMore.content.map((i, index) => (
                                <Nav.Link key={index} href='#' className='text-light'>{i}</Nav.Link>
                            ))
                        }
                    </div>
                    <div className='d-flex flex-column justify-content-around' style={{ height: '40%' }}>
                        <div className='fw-bold'>{Shop.id}</div>
                        {
                            Shop.content.map((i, index) => (
                                <Nav.Link key={index} href='#' className='text-light'>{i}</Nav.Link>
                            ))
                        }
                    </div>
                </Col>
                <Col className='d-flex flex-column justify-content-around' xs={12} md={3}>
                    <div className='fw-bold'>{Recipes.id}</div>
                    {
                        Recipes.content.map((i, index) => (
                            <Nav.Link key={index} href='#' className='text-light'>{i}</Nav.Link>
                        ))
                    }
                </Col>
            </Row>
        </>
    )
}

export default Footer