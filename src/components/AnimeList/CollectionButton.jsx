'use client'
import { useState } from "react"

const CollectionButton = ({anime_mal_id, user_email, anime_title, anime_image}) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (e) => {
        e.preventDefault()

        const data = {anime_mal_id, user_email, anime_title, anime_image} 

        const response = await fetch("/api/v1/collection", {
            method: 'POST',
            body: JSON.stringify(data)
        })

        const collection = await response.json()
        if(collection.status === 200) {
            setIsCreated(true)
        }

        return 
    }

  return (
    <>
    {isCreated ? <p className="text-color-primary">Berhasil Ditambahkan Di Koleksi</p>
        : 
        <button 
            onClick={handleCollection} 
            className="px-2 py-1 bg-color-accent">
            Add To Collection
        </button>
    }
    
    </>
  )
}

export default CollectionButton