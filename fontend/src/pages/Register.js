import React from 'react';
import { Link, Redirect } from "react-router-dom";
import {
    Container,
    Card, CardBody,
    CardTitle, Button,
    Form, FormGroup, Label, Input
} from 'reactstrap';

const Register = (props) => {
    return (
        <Container className="mt-5">
            <Card>
                <CardBody>
                    <CardTitle style={{ textAlign: "center" }}>สมัครสมาชิก</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>email</Label>
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