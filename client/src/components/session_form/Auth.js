import React from 'react';
import './Auth.css';
import Log from '../../assets/log.svg';
import Register from '../../assets/register.svg';


class Auth extends React.Component{

    state = {
        signupMode: false,
        signin_data: {
            email: '',
            password: ''
        },
        signup_data: {
            username: '',
            email: '',
            fName: '',
            lName: '',
            password: '',
            password2: ''
        }
    }

    signin_data_update = (field) => (event) => {
        let signin_data = this.state.signin_data;
        signin_data[field] = event.currentTarget.value;
        return this.setState({
            signin_data: signin_data
        });
    }

    signup_data_update = (field) => (event) => {
        let signup_data = this.state.signup_data
        signup_data[field] = event.currentTarget.value;
        return this.setState({
            signup_data: signup_data
        });
    }

    handleSignIn = (e) => {
        e.preventDefault();
        const user = this.state.signin_data;
        this.props.processSignIn(user);
    }

    handleSignUp = (e) => {
        e.preventDefault();
        const user = this.state.signup_data;
        this.props.processSignUp(user);
    }

    componentDidMount(){
        const { mode } = this.props;
        if (mode === 'signup'){
            this.setState({
                signupMode: true
            })
        }
        else{
            this.setState({
                signupMode: false
            })
        }
    }

    render(){
        
        // const [isSignupMode, setSignupMode] = useState(false);

        const signInHandler = () =>{
            this.setState({signupMode: false});
            // setSignupMode(false);
        };

        const signUpHandler = () =>{
            this.setState({signupMode: true});
            // setSignupMode(true);
        };

        return(
            <div className={this.state.signupMode ? "container sign-up-mode" : "container"}>
            <div className="forms-container">
                <div className="signin-signup">
                <form className="sign-in-form" onSubmit={this.handleSignIn} id="auth-form">
                    <h2 className="title" id="title">Sign in</h2>
                    <div className="input-field" id="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Email Address" onChange={this.signin_data_update('email')} />
                    </div>
                    <div className="input-field" id="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" onChange={this.signin_data_update('password')} />
                    </div>
                    <input type="submit" value="Login" className="btn solid" id="btn" />
                    <p className="social-text">Or Sign in with social platforms</p>
                    <div className="social-media" id="social-media">
                    <a className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                </form>
                <form className="sign-up-form" onSubmit={this.handleSignUp} id="auth-form">
                    <h2 className="title" id="title">Sign up</h2>

                    <div className="input-field" id="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" onChange={this.signup_data_update('username')} />
                    </div>
                    <div className="input-field" id="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" onChange={this.signup_data_update('email')} />
                    </div>
                    <div className="input-field" id="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="First Name" onChange={this.signup_data_update('fName')} />
                    </div>
                    <div className="input-field" id="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Last Name" onChange={this.signup_data_update('lName')} />
                    </div>
                    <div className="input-field" id="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" onChange={this.signup_data_update('password')} />
                    </div>
                    <div className="input-field" id="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Confirm Password" onChange={this.signup_data_update('password2')} />
                    </div>
                    <input type="submit" className="btn" value="Sign up" id="btn" />
                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media" id="social-media">
                    <a className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>
                    <a className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>New here ?</h3>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                    ex ratione. Aliquid!
                    </p>
                    <button className="btn transparent" id="sign-up-btn" onClick={signUpHandler}>
                    Sign up
                    </button>
                </div>
                <img src={Log} className="image" alt="Hello" />
                </div>
                <div className="panel right-panel">
                <div className="content">
                    <h3>One of us ?</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    laboriosam ad deleniti.
                    </p>
                    <button className="btn transparent" id="sign-in-btn" onClick={signInHandler}>
                    Sign in
                    </button>
                </div>
                <img src={Register} className="image" alt="" />
                </div>
            </div>
            </div>
        );
    };
}

export default Auth;