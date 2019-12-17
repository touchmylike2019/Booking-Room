import React from 'react';
import { Link, Redirect } from "react-router-dom";
import {
    Container,
    Card, CardBody,
    CardTitle, Button,
    Form, FormGroup, Label, Input
} from 'reactstrap';
import axios from 'axios'

const Register = (props) => {

    let el_username, el_password, el_email, el_repassword

    const handleSubmit = e => {
        e.preventDefault()
        const headers = {
            'Content-Type': 'application/json'
        }
        const name = el_username.value
        const email = el_email.value
        const password = el_password.value
        const re_password = el_repassword.value
        if (password === re_password) {
            const data = JSON.stringify({ name, email, password})
            axios.post('http://localhost:8000/api/reservations/', data, headers)
                .then(res => <Redirect to="/" />)
        }
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
                                innerRef={el => el_repassword = el}
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