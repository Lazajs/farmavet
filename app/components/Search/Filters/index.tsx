import { connect, disconnect } from '@/db/connection'
import TypeModel from '@/db/models/Type.model'
import ProviderModel from '@/db/models/Provider.model'
import ClientFilters from './Client'

export default async function ServerFilter () {
  const connection = await connect()
  let plainTypes = []
  let plainProviders = []

  if (connection) {
    const types = await TypeModel.find({}).select({ __v: 0, _id: 0 })
    plainTypes = types.map(type => type.toObject())
    const providers = await ProviderModel.find({}).select({ __v: 0, _id: 0 })
    plainProviders = providers.map(provider => provider.toObject())
  }

  await disconnect()

  return (
    <ClientFilters types={plainTypes} providers={plainProviders} />
  )
}
