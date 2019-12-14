import React, { Fragment } from 'react'
import { Container } from 'reactstrap'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './Home.scss'

const Home = () => {
    return (
        <Fragment>
            <Container className="mt-5">
                <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[dayGridPlugin]}
                    events={[
                        { title: 'จองเเล้ว', date: '2019-12-01' },
                        { title: 'อิอิ', date: '2019-12-02' }
                    ]}
                />
            </Container>
        </Fragment>
    )
}

export default Home