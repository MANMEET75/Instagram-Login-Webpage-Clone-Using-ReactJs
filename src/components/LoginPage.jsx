
import React from "react";
import PlayStoreDownloadBtn from "./PlayStoreDownloadBtn";
import MircosoftDownloadBtn from "./MircosoftDownloadBtn";


function LoginPage(){
    return <div className="cardContainer">
    <div className="card">
      <center>
        <img src="logo.png" id="logo" class="card-img-top" alt="..." /></center>
      <div className="card-body">

        <div className="mid-container">
          <form>
            <div class="mb-2">
              <input  type="email" placeholder="Phone number, username, or email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn" id="loginBtn">Log in</button>
          </form>
          <br />
          <h6 className="orText">OR</h6>
          <br />
          <i className="fa-brands fa-square-facebook"></i> &nbsp; <a id="LoginWithFBLink">Log in with Facebook</a>
          <br />
          <br />

          <p id="forgotPassLink">Forgot password?</p>

        </div>



      </div>
    </div>
    <br />

    <div class="card bottomCard">
      <div class="card-body mb-2 my-2" style={{margin:"50px"}}>
        Don't have an account? <a id="SignUpLink">Sign up</a>
      </div>
    </div>
    <br />
    <p>Get the app.</p>

    <PlayStoreDownloadBtn />
    &nbsp;
    &nbsp;
    <MircosoftDownloadBtn />

  </div>;
}

export default LoginPage;