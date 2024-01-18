import Spinner from '@/components/Spinner'

export default function loading () {
  return (
    <main className='w-screen h-screen relative'>
      <Spinner center={true} />
    </main>
  )
}
