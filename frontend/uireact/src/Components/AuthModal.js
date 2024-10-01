import React, { useState } from 'react';
//import './YourComponent.css'; // Importez votre fichier CSS ici

const AuthModal = () => {
    const [isLogin, setIsLogin] = useState(true);

    const openLoginModal = () => setIsLogin(true);
    const openRegisterModal = () => setIsLogin(false);

    const loginAjax = () => {
        // Implémentez votre logique de connexion ici
        console.log('Logging in...');
    };

    const registerUser = () => {
        // Implémentez votre logique d'inscription ici
        console.log('Registering user...');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <button className="btn big-login" onClick={openLoginModal}>Log in</button>
                    <button className="btn big-register" onClick={openRegisterModal}>Register</button>
                </div>
                <div className="col-sm-4"></div>
            </div>

            <div className={`modal fade login ${isLogin ? 'show' : ''}`} style={{ display: isLogin ? 'block' : 'none' }}>
                <div className="modal-dialog login animated">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={() => setIsLogin(false)}>&times;</button>
                            <h4 className="modal-title">Login with</h4>
                        </div>
                        <div className="modal-body">
                            <div className="box">
                                <div className="content">
                                    <div className="social">
                                        <a className="circle github" href="#"><i className="fa fa-github fa-fw"></i></a>
                                        <a id="google_login" className="circle google" href="#"><i className="fa fa-google-plus fa-fw"></i></a>
                                        <a id="facebook_login" className="circle facebook" href="#"><i className="fa fa-facebook fa-fw"></i></a>
                                    </div>
                                    <div className="division">
                                        <div className="line l"></div>
                                        <span>or</span>
                                        <div className="line r"></div>
                                    </div>
                                    <div className="error"></div>
                                    <div className="form loginBox">
                                        <input id="email" className="form-control" type="text" placeholder="Email" name="email" />
                                        <input id="password" className="form-control" type="password" placeholder="Password" name="password" />
                                        <button className="btn btn-default btn-login" onClick={loginAjax}>Login</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`box ${isLogin ? 'd-none' : ''}`}>
                                <div className="content registerBox">
                                    <div className="form">
                                        <input id="email" className="form-control" type="text" placeholder="Email" name="email" />
                                        <input id="password" className="form-control" type="password" placeholder="Password" name="password" />
                                        <input id="password_confirmation" className="form-control" type="password" placeholder="Repeat Password" name="password_confirmation" />
                                        <button className="btn btn-default btn-register" onClick={registerUser}>Create account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="forgot login-footer">
                                <span>Looking to <a href="#" onClick={openRegisterModal}>create an account?</a></span>
                            </div>
                            <span>Already have an account?</span>
                            <a href="#" onClick={openLoginModal}>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
