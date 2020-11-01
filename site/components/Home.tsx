import App from '../components/App'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Head from 'next/head'
import { FacebookLogin } from "../components/facebookLogin"
import React, { useState } from 'react'
import { Logger } from '../components/logger'

const log = new Logger("index")

export function Home() {
    const [value, setValue] = useState("")

    const handleChange = (s: fb.LoginStatus) => {
        log.debug("logged in")
    }

    return (
        <App>
            <Head>
                {/* <script src="init.js"/> */}
                <script src="https://connect.facebook.net/en_US/sdk.js" nonce="KMGyQ6eG" />
            </Head>

            <FacebookLogin onLoggedIn={handleChange} />

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </App>
    )
}
