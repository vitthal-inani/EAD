import { connect } from 'react-redux';
import { login, signup, removeSessionErrors } from '../actions/session_actions';
import Auth from './session_form/Auth';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        mode: 'signin',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processSignIn: (user) => dispatch(login(user)),
        processSignUp: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(removeSessionErrors()),
        login: user => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);