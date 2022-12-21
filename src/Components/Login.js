
import { Link } from "react-router-dom";


const Login=()=>{

    return(
        <div>
            <form>
                <label>UserName</label>
                <input type={"text"} placeholder={"UserName"}/>
                <br/>
                <label>Password</label>
                <input type={"password"} placeholder={"Password"}/>
                <button type="submit"> <Link to="/Home">Submit</Link></button>
            </form>
        </div>

    )
}

export default Login;