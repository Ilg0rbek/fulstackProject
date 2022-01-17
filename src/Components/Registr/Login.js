import React from 'react'
import ImageOne from "./images/image1.jpeg"
import { Facebook } from '@mui/icons-material'
import GooglePlay from "./images/googleplay.png"
import PlayStore from "./images/appstore.png";
import Insta from './images/insta.svg.png'
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="container d-flex">
                <div className="loginImages">
                    <div className="scroleImg">
                        <img src={ImageOne} alt="" />
                    </div>
                </div>
                <div className="registrInput">
                    <div className="usersInput">
                        <div className="instagramLogo mt-2 mb-3">
                            <img width={"175px"} height={"51px"} src={Insta} alt="" />
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder='Phone number , username , or email' className='my-2 form-control' />
                            <input type="password" placeholder='Password' className='my-2 form-control' />
                        </div>
                        <button disabled className="btn my-3 form-control btn-primary">
                            Log In
                        </button>

                        <div className="liner">
                            <div className="lineOne"></div>
                            <div className='or'>OR</div>
                            <div className="lineOne"></div>
                        </div>

                        <div className="facebook my-2">
                            <a href="#"> <span> <Facebook /></span>   Log in with Facebook</a>
                        </div>

                        <div className="forgotPassword">Forgot Passwort ?</div>
                    </div>

                    <div className="userInput my-3 pt-3">
                        Dont`t hava an account ? <span className="text-success">Sign up</span>
                    </div>

                    <div className="aplications">
                        <p> Get the app .</p>
                        <div className="aplication">
                            <a href="#">
                                <img height={"40px"} src={PlayStore} alt="" />
                            </a>
                            <a href="#">
                                <img height={"40px"} src={GooglePlay} alt="" />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
            <div className="footer">
                <ul>
                    <li><a href="">Meta</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">API</a></li>
                    <li><a href="">Ptivacy</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Top Accounts</a></li>
                    <li><a href="">Hashtags</a></li>
                    <li><a href="">Locations</a></li>
                    <li><a href="">Instagram Lite</a></li>
                </ul>
                <ul>
                    <li><a href="">Beauty</a></li>
                    <li><a href="">Dance</a></li>
                    <li><a href="">Fitnes</a></li>
                    <li><a href="">Foot & Drink</a></li>
                    <li><a href="">Home & Garden</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Visual Arts</a></li>
                </ul>
                <p>@ 2022 Instagram from meta</p>
            </div>
        </div>
    )
}

export default Login
