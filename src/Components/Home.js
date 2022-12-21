import { Outlet,Link } from "react-router-dom";
const Home=()=>{
    return (
      
        <>
      <nav>
        <ul>
        <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <section>
        <h2>Section</h2>
      </section>
      
      <footer>
        <h2>Hello footer</h2>
      </footer>
      <Outlet></Outlet>

      
    </>
          
  
  
    );
  }
  
  export default Home