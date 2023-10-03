import { Grid } from '@mui/material';
import React, { Component } from 'react';
import './LoginPage.css'
import insta_image from '../../images/9364675fb26a.svg';
import logoinsta from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIN from '../SignIN/SignIN';



class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div>
                <Grid container>
                    <Grid item xs={3}>
                       
                    </Grid>
                    <Grid item xs={6}>
                        <div className='loginpage_main'>
                            <div>
                                <img src={insta_image} width="454px"/>
                            </div>
                            <div>
                                <div className='loginpage_rightcomponent'> 
                                    <img className='loginpage_logo' src={logoinsta}/>
                                    <div className='loginpage_signin'>
                                        
                                        <SignIN/>

                                        <div className='login_ordiv'>
                                            <div className='login_divider'></div>
                                            <div className='login_or'>OR</div>
                                            <div className='login_divider'></div>
                                        </div>

                                        <div className="login__fb">
                                            <img src={fb} width="15px" style={{ "marginRight":"5px" }} />Log in with Facebook
                                        </div>
                                        <div className="login_forgt"> Forgot password?</div>
                                    </div>
                                </div>

                                <div className="loginpage__signupoption">
                                    
                                        
                                        <div className="loginPage__signin">
                                                 Don't have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span>
                                        </div>
                                        <div className="loginPage__signup">
                                                Have an account? <span onClick={this.changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>
                                        </div>
                                    
                                    
                                   
                                </div>

                                <div className="loginPage__downloadSection">
                                    <div>
                                    Get the app.
                                    </div>
                                    <div className="loginPage__option">
                                        <img className="loginPage_dwimg" src={appstore} width="136px" />
                                        <img className="loginPage_dwimg" src={playstore} width="136px" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                       
                    </Grid>
                </Grid>
            </div>
        );
    }
}
 
export default LoginPage;