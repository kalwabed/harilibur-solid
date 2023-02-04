import { format, isAfter } from 'date-fns'
import id from 'date-fns/locale/id/index.js'

export const toDateNumber = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'd', { locale: id })
}

export const toDateDay = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'EEEE', { locale: id })
}

export const toMonth = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'MMMM', { locale: id })
}

export const today = (): string => {
  const _date = new Date()

  return format(_date, 'EEEE, d MMMM yyyy', { locale: id })
}

export const isAfterEvent = (event: string) => {
  const today = new Date()
  const eventDate = new Date(event)

  return isAfter(today, eventDate)
}
