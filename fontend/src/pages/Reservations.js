import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const Reservations = (props) => {

    const [date1, setDate1] = useState()
    const [rooms, setRooms] = useState([])

    let el_name, el_title, el_phone, el_etcs

    useEffect(() => {
        axios.get('http://localhost:8000/api/book/')
            .then(res => setRooms(res.data))
    }, [])

    const room = rooms.map((room, index) => (
        <option key={index}>{room.name}</option>
    ))

    const handleSubmit = e => {
        e.preventDefault()
        const config = {
            headers: {
              "Content-Type": "application/json"
            }
          }
        const name = el_name.value
        const title = el_title.value
        const phone = el_phone.value
        const description = el_etcs.value
        const time = date1
        const data = JSON.stringify({ name, title, phone, time, description })
        axios.post('http://localhost:8000/api/reservations/', data, config)
            .then(res => {
                alert("บันทึกการจองสำเร็จ")
                el_name.value = ""
                el_title.value = ""
                el_phone.value = ""
                el_etcs.value = ""
                setDate1("")
            })
    }

    return (
        <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleSelect">ชื่อห้องประชุม</Label>
                    <Input type="select" name="select" innerRef={el => el_name = el}>
                        {room}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">หัวข้อ</Label>
                    <Input type="text" name="article" innerRef={el => el_title = el}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">โทรศัพท์</Label>
                    <Input type="text" name="phone" innerRef={el => el_phone = el}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">วันที่เริ่มต้น/เวลาเริ่มต้น</Label>
                    <DatePicker
                        className="form-control ml-2"
                        name="time"
                        selected={date1}
                        onChange={date => setDate1(date)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">อื่นๆ</Label>
                    <Input type="textarea" name="text" id="exampleText" innerRef={el => el_etcs = el}/>
                </FormGroup>
                <Button>บันทึก</Button>
            </Form>
        </Container>
    );
}

export default Reservations;