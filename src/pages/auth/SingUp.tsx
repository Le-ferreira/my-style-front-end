import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap"
import { FiLogIn } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";

import '../../styles/pages/auth/SingUp.css'
const recaptchaRef = React.createRef<ReCAPTCHA>();
class SingUp extends Component {
  onChange = (value: any) => {
    console.log("Captcha value:", value);
  }

  onSubmit = () => {
    const recaptchaValue = recaptchaRef.current?.getValue();
    console.log(recaptchaValue)
  }

  render() {
    return (
      <div id="page-SingUp">

        <aside>
          <div className='content-wrapper'>
            <main>
              <h1>MyStyle</h1>
              <p>Register</p>
            </main>
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Endereço de email" />
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LfbV5saAAAAAEHimZ9WKlklVPoq9pK_lxyl34OF"
                  onChange={this.onChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Cadastre-se
              </Button>

              <Link to='/' className='register-app'>
                <FiLogIn color='#4dacb1' className="icon" />
                Já possuo cadastro
             </Link>
            </Form>
          </div>
        </aside>

      </div>
    );
  }
}

export default SingUp