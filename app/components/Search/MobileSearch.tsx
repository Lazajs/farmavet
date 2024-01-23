import Filters from '@/components/Filters'
import MobileSearch from './MobileSearch.client'

export default function MobileSearchServer () {
  return (
    <>
      <MobileSearch>
        <Filters />
      </MobileSearch>
    </>
  )
}
