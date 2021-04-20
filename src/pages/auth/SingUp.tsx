import React, { Component, FormEvent } from 'react';
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap"
import { FiLogIn } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";

import '../../styles/pages/auth/SingUp.css'
import axios from 'axios';
const recaptchaRef = React.createRef<ReCAPTCHA>();

type MyState = { senha: string; email: string; nome: string; confirmar_senha: string };
class SingUp extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      confirmar_senha: '',
      nome: 'Nicholas'
    };
  }

  onChange = (value: any) => {
    console.log("Captcha value:", value);
  }

  onSubmit = async (e: any) => {
    e.preventDefault()
    const recaptchaValue = recaptchaRef.current?.getValue();

    await axios.post(`http://localhost:3000/auth/signup`, {
      ...this.state
    }, { 
      headers: { recaptcha: recaptchaValue }
    }).catch(err => {
      console.error(err)
    }).then(res => {
      console.log(res)
    })
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
                <Form.Control type="email" placeholder="Endereço de email" onChange={(e) => this.setState({ email: e.target.value })} />
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} />
              </Form.Group>

              <Form.Group controlId="formGroupPassword">
                <Form.Control type="password" placeholder="Confirmar Senha" onChange={(e) => this.setState({ confirmar_senha: e.target.value })} />
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