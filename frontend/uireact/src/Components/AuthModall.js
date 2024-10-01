import React, { useState } from 'react';
// Assurez-vous d'importer Bootstrap CSS dans votre projet, par exemple dans index.js
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-sm-8">
                    <div className="text-center mb-4">
                        <button className="btn btn-primary mx-2" onClick={openLoginModal}>Log in</button>
                        <button className="btn btn-secondary mx-2" onClick={openRegisterModal}>Register</button>
                    </div>

                    <div className={`modal fade ${isLogin ? 'show' : ''}`} style={{ display: isLogin ? 'block' : 'none' }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Login with</h4>
                                    <button type="button" className="close" onClick={() => setIsLogin(false)}>&times;</button>
                                </div>
                                <div className="modal-body">
                                    <div className="box">
                                        <div className="social text-center mb-3">
                                            <a className="btn btn-outline-dark mx-1" href="#"><i className="fa fa-github fa-fw"></i></a>
                                            <a className="btn btn-outline-danger mx-1" href="#"><i className="fa fa-google-plus fa-fw"></i></a>
                                            <a className="btn btn-outline-primary mx-1" href="#"><i className="fa fa-facebook fa-fw"></i></a>
                                        </div>
                                        <div className="division text-center mb-3">
                                            <div className="line l"></div>
                                            <span>or</span>
                                            <div className="line r"></div>
                                        </div>
                                        <div className="error"></div>
                                        <div className="form loginBox">
                                            <input id="email" className="form-control mb-2" type="text" placeholder="Email" name="email" />
                                            <input id="password" className="form-control mb-2" type="password" placeholder="Password" name="password" />
                                            <button className="btn btn-primary" onClick={loginAjax}>Login</button>
                                        </div>
                                    </div>
                                    <div className={`box ${isLogin ? 'd-none' : ''}`}>
                                        <div className="content registerBox">
                                            <div className="form">
                                                <input id="email" className="form-control mb-2" type="text" placeholder="Email" name="email" />
                                                <input id="password" className="form-control mb-2" type="password" placeholder="Password" name="password" />
                                                <input id="password_confirmation" className="form-control mb-2" type="password" placeholder="Repeat Password" name="password_confirmation" />
                                                <button className="btn btn-secondary" onClick={registerUser}>Create account</button>
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
            </div>
        </div>
    );
};

export default AuthModal;
