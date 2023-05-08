import "./../../assets/style/Signin.css";
import Logo from "./../../assets/images/ProBook.png";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div>
      <div>
        <div className="row Grid" >
          <div className="col-md-2"></div>
          <div className="col-md-4 Column">
            <br></br>
            <br></br>
            <img className="text-center" src={Logo} alt="proBook Logo" />
          </div>
          <div className="col-md-4 ColumnForm text-dark">
            <p className="FormTitle text-center text-warning">
              <u> Sign In </u>
            </p>
            <br></br>
            <form className="Form text-white">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <br></br>
              <div className="form-group ">
                <input
                  type="password"
                  className="form-control input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <br></br>
              <br></br>
              <input
                type="submit"
                value="Sign In"
                className="btn text-dark text-center LoginButton"
              />
              <br></br>
              <br></br>
              <br></br>
              <p>I don't hane an account ? <Link to="/signUp" className="Link"> Create an account</Link> </p>
              {/* <Link to="/main"> go </Link> */}
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
        <p className="text-dark text-center p-5">
          Developed for Profile Management and Send Inivitation
        </p>
      </div>
    </div>
  );
}

export default Signin;
