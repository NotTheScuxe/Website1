import { Link } from 'react-router-dom';

function Navbar() {
  return (<>
  <header className='Heading'>
    <h1>Scuxe - The developer who lives</h1>
    <h4>An introductory Web Page</h4>
  </header>
    <nav className='navtile'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
    </>
  );
}

export default Navbar