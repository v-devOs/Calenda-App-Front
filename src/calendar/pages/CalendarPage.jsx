import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { addHours } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { getMessagesCalendar, localizer } from '../../helpers'
import { Navbar } from '../'



const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2)

}]

export const CalendarPage = () => {
  
  const eventsCalendar = ( event, start, end, isSelected ) => {
    console.log({event, start, end, isSelected});

  }
  
  return (
    <>
      <Navbar/>

      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px)' }}
      messages={getMessagesCalendar()}
      eventPropGetter={eventsCalendar}
    />
      
    </>
  )
}
