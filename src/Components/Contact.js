import { Outlet,Link } from "react-router-dom";
const Contact = () => {
    return (<div>
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
        <h1>Contact Me</h1>
        <section>
        <h2>Section</h2>
      </section>
      
      <footer>
        <h2>Hello footer</h2>
      </footer>

      <Outlet></Outlet>
    </div>
    );
  };
  
  export default Contact;