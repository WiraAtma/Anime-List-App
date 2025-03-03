'use client'
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleCloseButton = () => {
        setIsOpen((prev) => !prev)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button onClick={handleCloseButton} className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                    X
                </button>
                <YouTube
                    videoId={youtubeId} 
                    onReady={(e) => e.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button onClick={handleCloseButton} className="text-xl fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark shadow-lg">Tonton Trailer</button>
        )
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer/>
}

export default VideoPlayer