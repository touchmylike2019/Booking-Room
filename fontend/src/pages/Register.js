import React from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'
import {
    Container,
    Card, CardBody,
    CardTitle, Button,
    Form, FormGroup, Label, Input
} from 'reactstrap';

const Register = (props) => {

    let el_username, el_password, el_email

    const handleSubmit = e => {
        e.preventDefault()
        const username = el_username.value
        const email = el_email.value
        const password = el_password.value
        // Headers
        const config = {
          headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json"
          }
        }
      
        // Request Body
        const body = JSON.stringify({ username, email, password })
        axios
            .post("http://localhost:8000/api/auth/register", {
                "username": "user101",
                "email":"user101@gmail.com",
                "password": "123456"
            }, config)
            .then(res => console.log(res.data))
    }

    return (
        <Container className="mt-5">
            <Card>
                <CardBody>
                    <CardTitle style={{ textAlign: "center" }}>สมัครสมาชิก</CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                innerRef={el => el_username = el}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>email</Label>
                            <Input
                                type="text"
                                name="username"
                                innerRef={el => el_email = el}
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
                            <Label>Confirm Password</Label>
                            <Input
                                type="password"
                                name="password"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit" className="btn btn-primary">
                                Register
                            </Button>
                        </FormGroup>
                        <p>
                            หากมีบัญชีผู้ใช้เเล้ว? <Link to="/login">เข้าสู่ระบบ</Link>
                        </p>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Register