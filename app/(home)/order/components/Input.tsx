interface Props {
  name: string
  id: string
  error: boolean
  placeholder?: string
}

export default function Input (props: Props) {
  return (
    <input type="text" {...props} className={`${props.error ? 'border-red-500 border-[2px] border-solid' : 'border-none'} w-full bg-[#F3F4EC] p-2 h-[40px] max-w-[690px] text-small rounded-[10px] outline-none`}/>
  )
}
