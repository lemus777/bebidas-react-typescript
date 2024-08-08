import { StateCreator } from 'zustand'
import { FavoritesSliceType } from './favoritesSlice'

type Notification = {
  text: string
  error: boolean
  show: boolean
}

export type NotificationSliceType = {
  notification: Notification
  showNotification: (payload : Pick<Notification, 'text' | 'error'>) => void
}

export const createNotificationSlice : StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set) => ({
  notification: {
    text: 'Texto notificación',
    error: false,
    show: false
  },
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true
      }
    })
  }
})
