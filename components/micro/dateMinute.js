import React from "react"
import { ClockIcon, CalendarIcon } from "@heroicons/react/outline"
import FormattedDate from './formattedDate'

const DateMinute = ({ date, minuteRead }) => {

  return (
    <div className="flex items-center h-4 text-grayTex text-gray-400 font-coda overflow-hidden">
      <CalendarIcon className="h-full inline mr-1" />
      <span className="text-sm mt-1"><FormattedDate date={date} /></span>
      <span className="mx-2">|</span>
      <ClockIcon className="h-full inline mr-1" />
      <span className="text-sm mt-1">{minuteRead} Min read</span>
    </div>
  )
}

export default DateMinute
