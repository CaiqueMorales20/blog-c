// Imported Components
import Image from 'next/image'

// Types
export type PostType = {
  title: string
  tech: string[]
}

// Functional Component
export default function Post(props: PostType) {
  // Rendering
  return (
    <div className="cursor-pointer drop-shadow-lg overflow-hidden rounded-2xl duration-300 ease-in-out hover:scale-90">
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
                    key={index}
                    className="w-max rounded-lg bg-blue-500 px-2 py-1"
                  >
                    <h3 className="text-xs text-white">{tech}</h3>
                  </div>
                )}
                {tech === 'React' && (
                  <div
                    key={index}
                    className="w-max rounded-lg bg-purple-900 px-2 py-1"
                  >
                    <h3 className="text-xs text-white">{tech}</h3>
                  </div>
                )}
                {tech === 'Styled Components' && (
                  <div
                    key={index}
                    className="w-max rounded-lg bg-red-400 px-2 py-1"
                  >
                    <h3 className="text-xs text-white">{tech}</h3>
                  </div>
                )}
                {tech === 'Next' && (
                  <div
                    key={index}
                    className="w-max rounded-lg bg-black px-2 py-1"
                  >
                    <h3 className="text-xs text-white">{tech}</h3>
                  </div>
                )}
                {tech === 'Tailwind' && (
                  <div
                    key={index}
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
  )
}
