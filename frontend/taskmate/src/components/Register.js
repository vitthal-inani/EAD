import React from 'react';
import '../assets/bootstrap/bootstrap.min.css';
import './Main.css';
import './Theme.css';

function Register() {
    return(
        <div className="auth">
            <div className="auth_left">
                <div className="card">
                    {/* <div className="text-center mb-5">
                        <a className="header-brand" href="index-2.html"><i className="fa fa-soccer-ball-o brand-logo"></i></a>
                    </div> */}
                    <div className="card-body">
                        <div className="card-title">Create new account</div>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <span className="custom-control-label">Agree the <a href="#">terms and policy</a></span>
                            </label>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary btn-block">Create new account</button>
                        </div>
                    </div>
                    <div className="text-center text-muted">
                        Already have account? <a href="login">Sign in</a>
                    </div>
                </div>
            </div>
            <div className="auth_right full_img"></div>
        </div>
    );
};

export default Register;