import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import inst_logo from '../../images/logoinsta.png';
import './LoginPage.css';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state ={ }
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                       <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width="450"/>
                            </div>
                            <div>
                        
                        <div className="lopinpage_rightcomponent">
                            <img className="loginpage_logo" src={inst_logo} />
                                <div className="loginpage_signin">
                                    <input className="loginpage_text" type="text" placeholder="Phone Number, Email or Username"/>
                                    <input className="loginpage_text" type="password" placeholder="Password"/> 
                                    <button className="login_button">Sign In</button>
                                </div>
                                <div className="login_ordiv">
                                    <div className="login_dividor"></div>
                                    <div className="login_or">OR</div>
                                    <div className="login_dividor"></div>
                                </div>
                                <div className="login__fb">
                                    <img src={fb} width="15p" style= {{ "marginRight":"5px" }} />Log in with Facebook</div>
                                    <div className="login_forgt">Forgot Password?</div>
                                </div>

                            <div className="loginpage__signupoption">
                                <div className="loginPage__signin">
                                    Dont't have an Account? Sign Up
                                </div>
                                <div className="loginPage__downloadSection">
                                    <div>
                                        Get the App
                                    </div>
                            <div className="loginPage_option">
                                <img className="loginPage_dwimg" src={appstore} width="136px" />
                                <img className="loginPage_dwimg" src={playstore} width="136px" />
                            </div>
                            </div>
                            </div>
                            </div>

                            </div> 
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;