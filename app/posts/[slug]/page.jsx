import { getPostBySlug } from '../../../lib/posts'

const Page = async ({ params }) => {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug)
  return (
    <section className='py-24'>
      <div className='container'>
        {/* Post frmatter */}
        <header className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='text-sm font-light uppercase leading-snug tracking-widest'>
            {frontmatter.author}
          </p>
        </header>
        <main className='mt-12 h-screen'>{content}</main>
      </div>
    </section>
  )
}

export default Page
