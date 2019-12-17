import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import axios from 'axios' 
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const Reservations = (props) => {

    const [date1, setDate1] = useState()
    const [date2, setDate2] = useState()
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/book/')
            .then(res => setRooms(res.data))
    }, [])

    const room = rooms.map((room, index) => (
        <option key={index}>{ room.name }</option>
    ))

    return (
        <Container className="mt-5">
            <Form>
                <FormGroup>
                    <Label for="exampleSelect">ชื่อห้องประชุม</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        { room }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">หัวข้อ</Label>
                    <Input type="text" name="article" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">โทรศัพท์</Label>
                    <Input type="text" name="phone" />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSelect">วันที่เริ่มต้น/เวลาเริ่มต้น</Label>
                            <DatePicker 
                                className="form-control ml-2"
                                selected={date1}
                                onChange={date => setDate1(date)}
                                />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleSelect ml-5">วันที่สิ้นสุด/เวลาสิ้นสุด</Label>
                            <DatePicker 
                                className="form-control ml-2"
                                selected={date2}
                                onChange={date => setDate2(date)}
                                />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleText">อื่นๆ</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button>บันทึก</Button>
            </Form>
        </Container>
    );
}

export default Reservations;