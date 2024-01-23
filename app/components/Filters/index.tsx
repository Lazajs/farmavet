import ClientFilters from './Filters.client'
import getDataDB from './getDataDB'

export default async function Filters () {
  const [plainTypes, plainProviders] = await getDataDB()

  return (
    <ClientFilters types={plainTypes} providers={plainProviders} />
  )
}
