/* eslint-disable no-prototype-builtins */

import connect from '@/db/connection'
import TypeModel from '@/db/models/Type.model'
import ProviderModel from '@/db/models/Provider.model'

export default async function getDataDB () {
  await connect()
  let plainTypes: Record<string, string[]> = {}
  let plainProviders: Record<string, string[]> = {}

  function groupByWord (arr: {name: string}[]) {
    const result: Record<string, string[]> = {}

    arr.forEach(wordRaw => {
      const word = wordRaw.name
      const firstLetter = word.charAt(0).toLowerCase()

      if (result.hasOwnProperty(firstLetter)) {
        result[firstLetter].push(word)
      } else {
        result[firstLetter] = [word]
      }
    })

    return result
  }

  const types = await TypeModel.find({}).select({ __v: 0, _id: 0 })
  plainTypes = groupByWord(types.map(type => type.toObject()))
  const providers = await ProviderModel.find({}).select({ __v: 0, _id: 0 })
  plainProviders = groupByWord(providers.map(provider => provider.toObject()))

  return [plainTypes, plainProviders]
}
