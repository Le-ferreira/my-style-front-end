import React from 'react';
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap"

import { FiLogIn } from "react-icons/fi";

import '../../styles/pages/auth/SingUp.css'

function SingUp() {
    return (
        <div id="page-SingUp">

            <aside>
                <div className='content-wrapper'>
                    <main>
                        <h1>MyStyle</h1>
                        <p>Register</p>
                    </main>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Endereço de email" />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Senha" />
                    </Form.Group>

                    <Link to='SingUp' className='enter-app'>
                        <p>Cadastre-se</p>
                    </Link>

                    <Link to='/' className='register-app'>
                        <FiLogIn color='#4dacb1' />
                        <p> Já tenho cadastro </p>
                    </Link>
                </div>
            </aside>

        </div>
    );
}


export default SingUp