import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom"
import axios from 'axios'
import {
    Container,
    Card, CardBody,
    CardTitle, Button,
    Form, FormGroup, Label, Input
} from 'reactstrap';

const Login = () => {

    let el_username, el_password
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        const username = el_username.value
        const password = el_password.value
        // Headers
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        }
      
        // Request Body
        const body = JSON.stringify({ username, password })
      
        axios
          .post("http://localhost:8000/api/auth/login", body, config)
          .then(res => {
                localStorage.setItem('user', res.data.user.username)
                localStorage.setItem('email', res.data.user.email)
                localStorage.setItem('authentication', true)
                setIsAuthenticated(!isAuthenticated)
            })
          .catch(() => alert("Invalid username or password."))
      }

      if(isAuthenticated) 
        return <Redirect to="/" />

    return (
        <Container className="mt-5">
            <Card>
                <CardBody>
                    <CardTitle style={{ textAlign: "center" }}>เข้าสู่ระบบ</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                innerRef={el => el_username = el}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                innerRef={el => el_password = el}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit" onClick={handleLogin}>
                                Login
                            </Button>
                        </FormGroup>
                        <p>
                            หากยังไม่มีบัญชีผู้ใช้? <Link to="/register">สมัครสมาชิก</Link>
                        </p>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Login;