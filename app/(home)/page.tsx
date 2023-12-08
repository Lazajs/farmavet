import { OrderForm } from '../components/OrderForm'
import { Input } from '../components/Input'

export default function Home () {
  return (
    <>
      <h1>Farmavet</h1>
      <OrderForm>
        <Input name='email' placeholder="Email" />
        <Input name='name' placeholder="Name" />
        <button>Submit Button!</button>
      </OrderForm>
    </>
  )
}
