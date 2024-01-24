import Client from './page.client'
import getProductsDB from './getProductsDB'

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
    <Client products={products} prevParams={searchParams} />
  )
}
