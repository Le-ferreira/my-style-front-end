import React from 'react';
import { Link } from "react-router-dom";

import { FiLogIn } from "react-icons/fi";
import { Form, Button } from "react-bootstrap"


import '../../styles/pages/auth/SingIn.css'


function SingIn() {
  return (
    <div id='page-SingIn'>
      <aside>
        <div className='content-wrapper'>
          {/* <img src={logoImg} alt="Logo Happy" />*/}
          <main>
            <h1>MyStyle</h1>
          </main>

          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Endereço de email" />
            </Form.Group>

            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Entrar
            </Button>

            <Link to='SingUp' className='register-app'>
              <FiLogIn color='#4dacb1' className="icon" />
              Não tenho cadastro
            </Link>
          </Form>
        </div>
      </aside>
    </div>
  )
}

export default SingIn