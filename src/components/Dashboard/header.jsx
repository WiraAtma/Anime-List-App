'use client'
import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()

    const handleBack = (e) => {
        e.preventDefault()
        router.back()
    }

  return (
    <div className="flex justify-between items-center mb-4">
        <button className="text-color-primary" onClick={handleBack}><ArrowLeft size={32} /></button>
        <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  )
}

export default Header