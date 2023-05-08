import "./../assets/style/Signin.css";
import { useState } from "react";

function SendInvitation() {
  return (
    <div>
      <div>
        <div className="row Grid">
          <div className="col-md-3"></div>
          <div className="col-md-3 ColumnFormSendEmail text-dark">
            <p className="FormTitle text-center text-warning">
              <u> Send Invitation for Individual </u>
            </p>
            <br></br>
            <form className="Form text-white">
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
              <br></br>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control input"
                  id="Subject"
                  placeholder="Subject"
                />
              </div>
              <br></br>
              <br></br>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control input"
                  id="Body"
                  placeholder="Body"
                />
              </div>
              <br></br>
              <br></br>
              <input
                type="submit"
                value="Send Email"
                className="btn text-dark text-center LoginButton"
              />
            </form>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-3 ColumnFormSendEmail text-dark">
            <p className="FormTitle text-center text-warning">
              <u> Send Invitation for Batch </u>
            </p>
            <br></br>
            <form className="Form text-white">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input"
                  id="batch"
                  aria-describedby="emailHelp"
                  placeholder="Enter the batch"
                />
              </div>
              <br></br>
              <br></br>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control input"
                  id="SubjectBatch"
                  placeholder="Subject"
                />
              </div>
              <br></br>
              <br></br>
              <div className="form-group ">
                <input
                  type="text"
                  className="form-control input"
                  id="BodyBatch"
                  placeholder="Body"
                />
              </div>
              <br></br>
              <br></br>
              <input
                type="submit"
                value="Send Email"
                className="btn text-dark text-center LoginButton"
              />
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
        <br></br>
        <br></br>
        <p className="text-center"> Send Inivitation for Events Announcement</p>
      </div>
    </div>
  );
}

export default SendInvitation;
