import dynamic from 'next/dynamic'

const PageClient = dynamic(() => import('@/(admin)/admin-board/page.client'), { ssr: false })

export default function AdminBoard () {
  return (
    <PageClient>
      <h1>lol</h1>
    </PageClient>
  )
}
