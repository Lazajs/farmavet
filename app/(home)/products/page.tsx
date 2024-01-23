import Client from './page.client'
import getProductsDB from './getProductsDB'

export default async function Page () {
  const products = await getProductsDB()

  return (
    <Client products={products} />
  )
}
