// import { useEffect } from 'react'
import cookie from 'js-cookie'
import logo from  '../images/map-cloud.jpeg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
    <header className="px-2 pb-0 mb-0" style={{ borderBottom: "1px solid #333" }}>
      <div className='header-bar'>
        <div className='header-bar'>
          <h1 className='brand' >Dating Mapp</h1>
          <img src={logo} alt='map' className='logo'/>
        </div>
        <div className='options'>
        <Navbar bg="white" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto flex-column">
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
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

      </div>

      {/* <div className='header-bar'>
        <div className='header-bar'>
          <h1 >Dating Mapp</h1>
          <img src={logo} alt='map' className='logo'/>
        </div>
        <nav className="navbar navbar-light navbar-expand-md bg-body-secondary" data-bs-theme="light">
          <div className="container-fluid">
            <div>
              <title>Dating Mapp</title>
            </div>
            <a className="navbar-brand" href="##">Dating Mapp</a>
            <img src={logo} alt='map' className='logo' />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                
                { !user ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/signup">Get Started</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/get-connected">Get Connected</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/profile">Profile</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="##" onClick={logout}>Logout</a>
                    </li>
                  </>
                )}
                
              </ul>
            </div>
          </div>
        </nav>
      </div> */}
    </header>
  )
}

export default Header