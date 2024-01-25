import { useContext } from 'react'
import { NotificationCTX } from '@/context/NotificationCTX'

export default function useNotification () {
  return useContext(NotificationCTX)
}
