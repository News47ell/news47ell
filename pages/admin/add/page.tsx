import { useEffect, useState } from 'react'
import { withPageAuth, getUser } from '@supabase/auth-helpers-nextjs'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { getAddContent } from '@/lib/supabase'
import { Editor } from '@/components/Dynamic'
import { LoaderIcon } from '@/components/icons'
import 'easymde/dist/easymde.min.css'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { SectionContainer } from '@/components/UI'

export default function AddPage({ user }): JSX.Element {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState(null)

  async function addNewPage() {
    setLoading(true)

    if (!content) {
      setLoading(false)
      return toast.error('Please fill out the required fields.')
    }

    const { newContent, error } = await getAddContent('pages', content, user.id)
    router.push(`/admin/edit/page/${newContent.id}`)

    if (error) {
      console.error(error)
      return toast.error(`An unexpected error occurred when publishing: ${error.message}`, {
        duration: 10000,
      })
    }

    setLoading(false)
    toast.success('Blog published successfully! Redirecting you to the blog page...', {
      duration: 3000,
    })
  }

  useEffect(() => {
    if (!user) router.push('/')
  }, [router, user])

  return (
    <>
      <PageSEO
        title={`Add new page - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <SectionContainer>
        {user ? (
          <>
            <h1 className="mt-6 text-3xl font-semibold tracking-wide">Add new page</h1>

            <Editor content={content} setContent={setContent} />

            <div className="text-right">
              <button
                type="button"
                onClick={addNewPage}
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Page
              </button>
            </div>
          </>
        ) : (
          <LoaderIcon className="h-12 w-12 animate-spin fill-nfh-accent-primary" />
        )}
      </SectionContainer>
    </>
  )
}

export const getServerSideProps = withPageAuth({
  redirectTo: '/',
  async getServerSideProps(ctx) {
    // Access the user object
    const { user } = await getUser(ctx)
    return { props: { email: user?.email } }
  },
})
