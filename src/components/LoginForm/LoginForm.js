import React from 'react';
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <form className="login100-form validate-form">
            <span className="login100-form-title p-b-33">Account Login</span>

            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>

            <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div>

            <div className="container-login100-form-btn m-t-20">
                <Button type='submit' size='large' className="container-login100-form-btn m-t-20" variant="raised" color="primary">Sign in</Button>
            </div>

            <div className="text-center p-t-45 p-b-4">
                <span className="txt1">Forgot&nbsp;</span>
                <a href="#" className="txt2 hov1">Username / Password?</a>
            </div>

            <div className="text-center">
                <span className="txt1">Create an account?&nbsp;</span>

                <a href="#" className="txt2 hov1">Sign up</a>
            </div>

            <div className="text-center">
                {/* <span className="txt1">Continue as guest&nbsp;</span> */}

                <Link to='/store' className="txt2 hov1">Continue as guest</Link>
            </div>
        </form>
    );
}

export default LoginForm;