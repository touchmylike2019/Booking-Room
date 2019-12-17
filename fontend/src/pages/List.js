import React, { useState, useEffect } from 'react'
import {
    Container,
    Table
} from 'reactstrap'
import axios from 'axios' 

const List = () => {

    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/book/')
            .then(res => setInfo(res.data))
    }, [])

    const member = info.map((field, index) => (
        <tr key={index}>
            <td>{field.name}</td>
            <td>{field.size}</td>
            <td>{field.amount}</td>
            <td>{field.description}</td>
            {field.status === false ? <td style={{color: "green"}}>ใช้งานได้</td> : <td style={{color: "red"}}>จองเเล้ว</td>}
        </tr>
    ))

    return (
        <Container className="mt-5">
            <Table hover>
                <thead>
                    <tr>
                        <th>ชื่อห้องประชุม</th>
                        <th>ขนาด</th>
                        <th>รองรับจำนวนคน</th>
                        <th align="center">รายละเอียด</th>
                        <th>สถานะ</th>
                    </tr>
                </thead>
                <tbody>
                    { member }
                </tbody>
            </Table>
        </Container>
    )
}

export default List