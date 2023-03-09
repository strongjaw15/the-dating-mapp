import background from '../images/blue-hearts.jpeg'



const Wrapper = ({children}) => {

  return (
    <div style={{        
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'center center',
      // minHeight: '100vh', 
      // backgroundImage: `url(${background})`  
    }}>
      { children }
    </div>
  )
}

export default Wrapper