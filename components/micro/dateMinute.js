import React from "react"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"

const DateMinute = ({ date, minuteRead }) => {
  const stringdate = new Date(date).toDateString()
  return (
    <div className="flex items-center h-4 text-grayText font-coda overflow-hidden">
      <CalendarIcon className="h-full inline mr-1" />
      <span className="text-xs mt-1">{stringdate}</span>
      <span className="mx-2">|</span>
      <ClockIcon className="h-full inline mr-1" />
      <span className="text-xs mt-1">{minuteRead} Min read</span>
    </div>
  )
}

export default DateMinute
