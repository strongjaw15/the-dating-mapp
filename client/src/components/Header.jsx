// import { useEffect } from 'react'
import cookie from 'js-cookie'

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
      <h1>Dating Mapp</h1>
      <nav className="navbar navbar-dark navbar-expand-md bg-body-secondary" data-bs-theme="dark">
        <div className="container-fluid">
          <div>
            <title>Dating Mapp</title>
          </div>
          {/* <a className="navbar-brand" href="##">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
    </header>
  )
}

export default Header

