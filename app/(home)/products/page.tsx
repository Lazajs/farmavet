import Client from './page.client'
import getProductsDB from './getProductsDB'
import NotificationProvider from '@/components/Notification/NotificationProvider'

export const metadata = {
  title: 'Productos | Farmavet'
}

interface Props {
  searchParams: {
    text?: string
    provider?: string
    type?: string
  }
}

export default async function Page ({ searchParams }: Props) {
  const products = await getProductsDB(searchParams)

  return (
    <NotificationProvider>
      <Client products={products} prevParams={searchParams} />
    </NotificationProvider>
  )
}
