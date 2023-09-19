// Data
import Image from 'next/image'
import { postData } from '../../../public/data/data'

// Functional Component
export default function Trick({ params }: { params: { id: string } }) {
  // Variables
  const post = postData.find((post) => post.id === params.id)

  // Rendering
  return (
    <div className="-mt-[5rem] min-h-[100vh] bg-wave2 bg-cover px-[5%] py-[5rem]">
      <div className="mt-20 flex flex-col gap-10 rounded-xl bg-white p-10 text-justify shadow-sm md:w-2/3">
        <h1 className="text-lg font-bold text-accent">{post?.content.title}</h1>
        {/* Mapping Description */}
        <div className="flex flex-col gap-5">
          {post?.content.description.map((desc, index) => {
            if (desc.type === 'text') {
              return (
                <p key={`text, ${index}`} className="text-base text-primary">
                  {desc.content}
                </p>
              )
            }
            if (desc.type === 'image') {
              return (
                <Image
                  className="rounded-lg drop-shadow-lg md:w-2/3"
                  src={desc.content}
                  alt="Base do HTML"
                  width={1000}
                  height={1000}
                  key={`image, ${index}`}
                />
              )
            }
            if (desc.type === 'code') {
              return (
                <pre className='bg-gray-800 p-10 text-white rounded-lg'>
                  <code  children={desc.content}  />
                </pre>
              )
            }
            return <div key={`error, ${index}`}>Error</div>
          })}
        </div>
      </div>
    </div>
  )
}
