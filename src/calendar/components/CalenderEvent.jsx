import React from 'react'

export const CalenderEvent = ( {event} ) => {
  const { title , user } = event;

  return (
    <>
      <span> {title} </span>
      <span> - {user?.name} </span>
    </>
  )
}
