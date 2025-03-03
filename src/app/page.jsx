import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResposen, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"

const Page = async () => {

  const topAnime = await getAnimeResposen('/top/anime', 'limit=8')
  let recommendation = await getNestedAnimeResponse('/recommendations/anime', 'entry')
  recommendation = reproduce(recommendation, 8)
  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua"/>
        <AnimeList api={topAnime}/>
      </section>
      <section>
        <Header title="Rekomendasi"/>
        <AnimeList api={recommendation}/>
      </section>
    </>
  )
}

export default Page
