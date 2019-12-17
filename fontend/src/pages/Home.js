import React, { Fragment, useState, useEffect } from 'react'
import {
    Container
} from 'reactstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './Home.scss'
import axios from 'axios'

const Home = () => {

    const [info, setInfo] = useState({})
    const [modal, setModal] = useState(false)
    const [reservation, setReservation] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/reservations/')
            .then(res => setReservation(res.data))
    })

    const member = reservation.map((re) => {
        return {['title']: re.name, ['date']: re.time}
    })

    const info_events = member

    return (
        <Fragment>
            <Container className="mt-5">
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin]}
                    events={info_events}
                    eventClick={(info) => {
                        setModal(!modal)
                        setInfo(info.event)
                    }}
                />
            </Container>
        </Fragment>
    )
}

export default Home