import React from 'react';
import { Link, Redirect } from "react-router-dom";
import {
    Container,
    Card, CardBody,
    CardTitle, Button,
    Form, FormGroup, Label, Input
} from 'reactstrap';

const Login = (props) => {
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
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit">
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