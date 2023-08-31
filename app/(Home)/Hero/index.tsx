// Imported Components
import Image from 'next/image'

// Functional Component
export default function Hero() {
  // Rendering
  return (
    <div className="-mt-20 flex min-h-[100vh] items-center justify-center bg-secondary bg-wave bg-cover px-[5%] pt-20">
      <div className="grid h-[60vh] w-full grid-cols-1 grid-rows-none gap-10 md:grid-cols-3 md:grid-rows-2">
        <div className="cursor-pointer overflow-hidden rounded-2xl duration-300 hover:scale-90 md:col-span-2 md:row-span-2">
          <Image
            className="h-full w-full object-cover"
            src="/posts/css-thumb.jpg"
            title="CSS"
            alt="CSS"
            width={4000}
            height={2844}
          />
        </div>
        <div className="cursor-pointer overflow-hidden rounded-2xl duration-300 hover:scale-90 ">
          <Image
            className="h-full w-full object-cover"
            src="/posts/react-thumb.jpg"
            title="CSS"
            alt="CSS"
            width={4000}
            height={2844}
          />
        </div>
        <div className="cursor-pointer overflow-hidden rounded-2xl duration-300 hover:scale-90 ">
          <Image
            className="h-full w-full object-cover"
            src="/posts/html-thumb.jpg"
            title="CSS"
            alt="CSS"
            width={4000}
            height={2844}
          />
        </div>
      </div>
    </div>
  )
}
