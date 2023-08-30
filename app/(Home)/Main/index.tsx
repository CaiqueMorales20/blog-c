// Imported Components
import { postData } from '../../../public/data/data'
import Post from './Post'

// Functional Component
export default function Main() {
  // Rendering
  return (
    <main className="flex flex-col gap-16 bg-secondary bg-wave2 bg-cover px-[5%] pt-20">
      <h1 className="text-xl font-bold text-primary">Últimos posts</h1>
      <div className="grid w-full  grid-cols-1 gap-6 pb-24 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* Rendering Posts */}
        {postData.map((post, index) => (
          <Post id={post.id} title={post.title} tech={post.tech} key={index} />
        ))}
      </div>
    </main>
  )
}
