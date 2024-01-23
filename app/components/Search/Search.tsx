import Filters from '../Filters'
import SearchClient from './Search.client'

export default function SearchServer () {
  return (
    <SearchClient>
      <Filters />
    </SearchClient>
  )
}
