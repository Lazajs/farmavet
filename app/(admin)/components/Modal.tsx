'use client'
import * as XLSX from 'xlsx'
import { useState } from 'react'

export default function Modal () {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const readFileAndSend = (file: Blob) => {
    if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      const reader = new FileReader()

      reader.onload = (e: ProgressEvent<FileReader>): void => {
        const data = new Uint8Array((e.target as FileReader).result as ArrayBuffer)
        const workbook = XLSX.read(data, { type: 'array' })
        const sheet = workbook.Sheets[workbook.SheetNames[0]]

        const startRow = 8
        const range = XLSX.utils.decode_range(sheet['!ref'] || '')
        range.s.r = Math.max(startRow, range.s.r)

        const jsonData = XLSX.utils.sheet_to_json(sheet, {
          blankrows: false,
          defval: 'N/A',
          header: ['TIPO', 'PROVEEDOR', 'CODIGO', 'ARTICULO', 'N/A', 'PRECIO'],
          range
        })

        if (Array.isArray(jsonData) && jsonData.length > 0) {
          fetch('/api/products', { method: 'PUT', body: JSON.stringify(jsonData) })
            .then(res => res.ok ? res.json : null)
            .finally(() => setIsLoading(false))
        }
      }
      reader.readAsArrayBuffer(file)
    }
  }

  const handleDragOver = (e: React.SyntheticEvent) => e.preventDefault()

  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   if (!e.target.files) return
  //   const file = e.target.files[0]
  //   if (file) {
  //     readFileAndSend(file)
  //   }
  // }

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const files = e.dataTransfer.files

    if (files.length > 0) {
      const file = files[0]
      readFileAndSend(file)
    }
  }

  const toggleVisibility = () => setIsOpen(!isOpen)

  return (
    <>
    <button onClick={toggleVisibility}>Importar datos</button>

    {
      isOpen
        ? <div onDrop={handleDrop} onDragOver={handleDragOver} className='border-mainGreen border-4 border-dashed w-[500px] h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {
            isLoading
              ? 'Importando datos'
              : null
          }

        </div>
        : null
    }
    </>
  )
}
