import React from 'react';
import '../assets/bootstrap/bootstrap.min.css';
import './Main.css';
import './Theme.css';

function Login() {
    return (
        <div className="auth">
            <div className="auth_left">
                <div className="card">
                    {/* <div className="text-center mb-2">
                        <a className="header-brand" href="index-2.html"><i className="fa fa-soccer-ball-o brand-logo"></i></a>
                    </div> */}
                    <div className="card-body">
                        <div className="card-title">Login to your account</div>
                        <div className="form-group">
                            <select className="custom-select">
                                <option>Project Manager</option>
                                <option>Team Leader</option>
                                <option>Employee</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password<a href="forgot-password.html" className="float-right small">I forgot password</a></label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label">Remember me</span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <a href="index-2.html" className="btn btn-primary btn-block" title="">Sign in</a>
                        </div>
                    </div>
                    <div className="text-center text-muted">
                        Don't have account yet? <a href="register">Sign up</a>
                    </div>
                </div>        
            </div>
            <div className="auth_right full_img"></div>
        </div>
    );
};

export default Login;