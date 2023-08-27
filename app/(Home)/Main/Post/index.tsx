// Imported Components
import Image from 'next/image'
import Link from 'next/link'

// Types
export type PostType = {
  id: string
  title: string
  tech: string[]
}

// Functional Component
export default function Post(props: PostType) {
  // Rendering
  return (
    <Link href={`/trick/${props.id}`}>
      <div className="cursor-pointer overflow-hidden rounded-2xl drop-shadow-lg duration-300 ease-in-out hover:scale-90">
        <Image src="/thumb.jpg" alt="Post" width={500} height={500} />
        <div className="flex min-h-full flex-col gap-2 bg-white px-8 py-4">
          <h2 className="text-sm font-bold text-primary">{props.title}</h2>
          <div className="flex flex-wrap gap-2">
            {props.tech.map((tech, index) => {
              return (
                <>
                  {tech === 'HTML' && (
                    <div
                      key={`html ${index}`}
                      className="w-max rounded-lg bg-red-500 px-2 py-1"
                    >
                      <h3 className="text-xs text-white">{tech}</h3>
                    </div>
                  )}
                  {tech === 'CSS' && (
                    <div
                      key={`css ${index}`}
                      className="w-max rounded-lg bg-blue-500 px-2 py-1"
                    >
                      <h3 className="text-xs text-white">{tech}</h3>
                    </div>
                  )}
                  {tech === 'React' && (
                    <div
                      key={`react ${index}`}
                      className="w-max rounded-lg bg-purple-900 px-2 py-1"
                    >
                      <h3 className="text-xs text-white">{tech}</h3>
                    </div>
                  )}
                  {tech === 'Styled Components' && (
                    <div
                      key={`styled components ${index}`}
                      className="w-max rounded-lg bg-red-400 px-2 py-1"
                    >
                      <h3 className="text-xs text-white">{tech}</h3>
                    </div>
                  )}
                  {tech === 'Next' && (
                    <div
                      key={`next ${index}`}
                      className="w-max rounded-lg bg-black px-2 py-1"
                    >
                      <h3 className="text-xs text-white">{tech}</h3>
                    </div>
                  )}
                  {tech === 'Tailwind' && (
                    <div
                      key={`tailwind ${index}`}
                      className="w-max rounded-lg bg-accent px-2 py-1"
                    >
                      <h3 className="text-xs text-white">{tech}</h3>
                    </div>
                  )}
                </>
              )
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}
