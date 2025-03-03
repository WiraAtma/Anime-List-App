import { getAnimeResposen } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const page = async ({params: {id}}) => {
    const anime = await getAnimeResposen(`/anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: {user_email: user?.email, anime_mal_id: id }
    })
    
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
                {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>}
            </div>
            <div className="p-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>PERINGKAT</h3>
                    <h3>{anime.data.rank}</h3>
                </div>
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>SKOR</h3>
                    <h3>{anime.data.score}</h3>
                </div>
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>ANGGOTA</h3>
                    <h3>{anime.data.members}</h3>
                </div>
                <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-primary">
                    <h3>EPISODE</h3>
                    <h3>{anime.data.episodes}</h3>
                </div>
            </div>
            <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default page