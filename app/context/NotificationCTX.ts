import { createContext } from 'react'
import { type NotificationOption } from '@/components/Notification/NotificationProvider'

interface CTX {
  displayNotification: (value: NotificationOption) => void
  closeNotification: () => void
}

export const NotificationCTX = createContext({} as CTX)
