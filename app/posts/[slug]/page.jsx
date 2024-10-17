import React from 'react'

const Page = async ({ params }) => {
  console.log(params)
  //   const post = await getPostBySlug('learn-nextjs')
  return (
    <section className='py-24'>
      <div className='container'>
        {/* Post frmatter */}
        <header className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>Learn NextJs</h1>
          <p className='text-sm font-light uppercase'>Faruk Ahmad</p>
        </header>
      </div>
    </section>
  )
}

export default Page
