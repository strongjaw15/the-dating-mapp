// import { useEffect } from 'react'
import cookie from 'js-cookie'
import logo from  '../images/map-cloud.jpeg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header = ({user}) => {

  const logout = () => {
    cookie.remove('auth-token')
    window.location.href = '/'
  }

  // useEffect(() => {
  //   const authToken = cookie.get('auth-token');
  //   if (authToken && !user) {
  //     window.location.href = '/';
  //     }
  //     }, [user]);

  return (
    <header className="pb-0 mb-0 animate__animated animate__fadeInRight animate__slow">
      <div className='header-box border-gradient border-gradient-stars only-bottom'>
        <div className='header-bar'>
          <h1 className='brand' >Dating Mapp</h1>
          <img src={logo} alt='map' className='logo'/>
        </div>
        <div className='options'>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Offcanvas id="offcanvasNavbar-expand-md" aria-labelledby="offcanvasNavbar-expand-md" placement='end'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbar-expand-md"> Dating Map</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 flex-column">
                <Nav.Link href="/">Home</Nav.Link>

                { !user ? (
                  <>
                  <Nav.Link href='/signup'>Get Started</Nav.Link>
                  <Nav.Link href='/login'>Login</Nav.Link>
                  </>
                ) : (
                  <>
                  <Nav.Link href='/profile'>Profile</Nav.Link>
                  <Nav.Link href='/##' onClick={logout}>Logout</Nav.Link>
                  <Nav.Link href='/get-connected' >Get Connected</Nav.Link>
                  </>
                )}
              </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </div>

      </div>
    </header>
  )
}

export default Header