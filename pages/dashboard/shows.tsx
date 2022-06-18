import { BiLeftArrowAlt } from 'react-icons/bi'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { default as Link } from '@/components/Link'
import { MoviesWatched, ShowsWatched } from '@/components/metrics/Trakt'

export default function Shows(): JSX.Element {
  return (
    <>
      <PageSEO
        title={`Music Dashboard - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <main className="container flex flex-col flex-1 px-3 mx-auto space-y-2 md:space-y-5 max-w-5xl">
        <div className="space-y-2 md:space-y-5">
          <Link
            href="/dashboard"
            className="block py-3 px-3 text-xs font-bold leading-normal uppercase rounded shadow-lg bg-off-main"
          >
            <BiLeftArrowAlt className="m-auto w-6 h-6" />
          </Link>
        </div>
        <div className="pt-6 space-y-2 md:space-y-5">
          <div className="relative">
            <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight">Shows</h1>
          </div>
        </div>
        <p className="mb-4">List of recent 10 movies I've watched</p>
        <MoviesWatched />
        <p className="mb-4">List of recent 10 tv shows I've watched</p>
        <ShowsWatched />
      </main>
    </>
  )
}
