import React, { useState, useEffect } from 'react';
import {
    Container,
    Card, CardBody,
    CardTitle, Button,
    Form, FormGroup, Label, Input, CardText,
    Row, Col
} from 'reactstrap'
import axios from 'axios'

const Account = () => {

    const [infos, setInfo] = useState([])

    const username = localStorage.getItem('user')
    const email = localStorage.getItem('email')

    useEffect(() => {
        axios.get('http://localhost:8000/api/reservations/')
            .then(res => {setInfo(res.data)})
    })

    const reservation = infos.map((info, index) => (
        <Card key={index}>
            <CardBody>
                <Row>
                    <Col>
                        <CardText>
                            {info.name}
                        </CardText>
                    </Col>
                    <Col>
                        {info.status === true ? <Button color="success">อนุมัติเเล้ว</Button>: <Button color="warning">รออนุมัติ</Button>}
                    </Col>
                </Row>
            </CardBody>
        </Card>
    ))

    return (
        <Container className="mt-5">
            <Card>
                <CardBody>
                    <CardTitle style={{ textAlign: "center" }}>บัญชีผู้ใช้</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="text"
                                name="username"
                                value={username}
                                readOnly={true}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label>email</Label>
                            <Input
                                type="text"
                                name="email"
                                value={email}
                                readOnly={true}
                            />
                        </FormGroup>
                    </Form>
                    <p>รายการจอง: </p>
                    { reservation }
                </CardBody>
            </Card>
        </Container>
    );
};

export default Account