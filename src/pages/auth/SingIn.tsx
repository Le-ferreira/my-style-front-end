import React from 'react';
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap"


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

                        <Link to='app' className='enter-app' type='text'>
                            <p>Entrar</p>
                        </Link>
                    </Form>
                    
                </div>
            </aside>
        </div>
    )
}

export default SingIn