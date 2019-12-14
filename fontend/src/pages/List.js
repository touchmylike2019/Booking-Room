import React from 'react'
import {
    Container,
    Table
} from 'reactstrap'

const List = () => {
    return (
        <Container className="mt-5">
            <Table>
                <thead>
                    <tr>
                        <th>ชื่อห้องประชุม</th>
                        <th>สถานะ</th>
                        <th>รายละเอียด</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>ห้องประชุม 2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default List