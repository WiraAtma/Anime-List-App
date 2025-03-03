'use client'
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    const keyword = searchRef.current.value
    if(!keyword || keyword.trim() == "") return // trim artinya spasi dihapus

    if(e.key === "Enter" || e.type === "click") { // enter punya keyboard sebaliknya button
      e.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="relative">
        <input
            placeholder="Cari Anime..."
            className=" w-full p-2 rounded"
            ref={searchRef}
            onKeyDown={handleSearch}
        />
        <button className="absolute top-2 end-2" onClick={handleSearch}>
          <MagnifyingGlass size={25} />
        </button>
    </div>
  )
}

export default InputSearch