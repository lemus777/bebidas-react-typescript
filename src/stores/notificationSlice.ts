import { StateCreator } from 'zustand'

type Notification = {
  text: string
  error: boolean
  show: boolean
}

export type NotificationSliceType = {
  notification: Notification
}

export const createNotificationSlice : StateCreator<NotificationSliceType> = (set, get) => ({
  notification: {
    text: 'Texto notificación',
    error: false,
    show: false
  }
})
