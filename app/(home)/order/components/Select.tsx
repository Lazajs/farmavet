interface Props {
  name: string
  options: string[]
  label: string
  onChange: (event: React.SyntheticEvent) => void
}

export default function Select ({ name, options, label, onChange }: Props) {
  return (
  <>
    <label htmlFor={name} className="block font-bold text-small text-textBlack">{label}</label>
    <select id={name} defaultValue={options[0]} onChange={onChange} className="bg-white mb-[16px] text-textBlack font-medium text-small rounded-lg outline-none block w-full p-2.5 border border-black">
      {
        options.map((op, i) => {
          return <option value={op} key={op}>{op}</option>
        })
      }
    </select>
  </>

  )
}
