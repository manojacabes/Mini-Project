import "./../../assets/style/Signin.css";
import Logo from "./../../assets/images/ProBook.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div>
        <div className="row Grid">
          <div className="col-md-2"></div>
          <div className="col-md-4 Column">
            <br></br>
            <br></br>
            <img className="text-center" src={Logo} alt="proBook Logo" />
          </div>
          <div className="col-md-4 ColumnFormSignUp text-dark">
            <p className="FormTitle text-center text-warning">
              <u> Sign In </u>
            </p>
            <br></br>
            <form className="Form text-white">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input"
                  id="firstName"
                  aria-describedby="firstName"
                  placeholder="First Name"
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input"
                  id="secondName"
                  aria-describedby="secondName"
                  placeholder="Second Name"
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control input"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <br></br>
              <div className="form-group ">
                <input
                  type="password"
                  className="form-control input"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <br></br>
              <div className="form-group ">
                <input
                  type="password"
                  className="form-control input"
                  id="confirm-password"
                  placeholder="Confirm Password"
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
              <p>
                {" "}
                I have an account ?{" "}
                <Link to="/" className="Link">
                  Login
                </Link>{" "}
              </p>
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

export default SignUp;
