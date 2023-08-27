// Data
import { postData } from '../../../public/data/data'

// Functional Component
export default function Trick({ params }: { params: { id: string } }) {
  // Variables
  const post = postData.find((post) => post.id === params.id)

  // Rendering
  return (
    <div className="-mt-[5rem] min-h-[100vh] pt-[5rem]">
      <div className="flex flex-col gap-10 pt-20 text-justify md:w-1/2">
        <h1 className="text-lg font-bold text-primary">
          {post?.content.title}
        </h1>
        <p className="text-base text-primary">{post?.content.description}</p>
      </div>
    </div>
  )
}
