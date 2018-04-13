import React from 'react';
import Button from 'material-ui/Button'

function LoginForm() {
    return (
        <form className="login100-form validate-form" onSubmit={e => this.doLogin(e)}>
            <span className="login100-form-title p-b-33">Account Creation</span>

            <div className="wrap-input100 validate-input" data-validate="First Name is required">
                <input className="input100" type="text" placeholder="First Name" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div><br/>

            <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                <input className="input100" type="text" placeholder="Last Name" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div><br/>

            <div className="wrap-input100 validate-input" data-validate="Email is required">
                <input className="input100" type="email" placeholder="Email" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div><br/>

            <div className="wrap-input100 validate-input" data-validate="Address is required">
                <input className="input100" type="text" placeholder="Address" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div><br/>

            <div className="wrap-input100 validate-input" data-validate="Gamertag is required">
                <input className="input100" type="text" placeholder="Gamertag" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div><br/>

            <div className="wrap-input100 validate-input" data-validate="Image url is required">
                <input className="input100" type="text" placeholder="Profile picture image url" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div><br/>

            <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                <input className="input100" type="password" placeholder="Password" />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
            </div><br/>

            <div className="container-login100-form-btn m-t-20">
                <Button type='submit' size='large' className="container-login100-form-btn m-t-20" variant="raised" color="primary">Sign up</Button>
            </div>
        </form>
    );
}

export default LoginForm;