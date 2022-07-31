import { default as Link } from '@/components/Link'
import { useSFX } from '@/hooks/useSFX'

export default function BlogPostCard({ title, slug, total }) {
  const { playMouseClick } = useSFX()
  return (
    <Link
      href={slug}
      className={`w-full rounded-xl md:w-1/3`}
      //@ts-ignore
      onClick={playMouseClick}
    >
      <div className="flex h-full flex-col justify-between rounded-lg bg-nfh-background-secondary p-4">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full text-base font-medium tracking-tight text-nfh-text-primary">
            {title}
          </h4>
          <span className="ml-2 align-baseline">
            {total ? new Number(total).toLocaleString() : '---'}
          </span>
        </div>
      </div>
    </Link>
  )
}
