import { getAnimeResposen } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({params}) => {
    const {keyword} = params // atau pakai const keyword = params.keyword
    const decodedKeyword = decodeURI(keyword) // biar ga ada %20% pada spasi
    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    // const searchAnime = await response.json()
    const searchAnime = await getAnimeResposen('/anime', `q=${decodedKeyword}`)

    return (
        <>
        <section>
            <Header title={`Pencarian Untuk "${decodedKeyword}"`}/>
            <AnimeList api={searchAnime}/>
        </section>
        </>
    )
}

export default Page
