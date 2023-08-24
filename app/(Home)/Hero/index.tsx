// Imported Components
import Image from 'next/image'

// Functional Component
export default function Hero() {
  // Rendering
  return (
    <div className="-mt-20 flex min-h-[100vh] items-center justify-center pt-20">
      <div className=" grid h-[40rem] w-full grid-cols-1 grid-rows-none gap-10 md:grid-cols-3 md:grid-rows-2">
        <div className="cursor-pointer overflow-hidden rounded-2xl duration-300 hover:scale-[1.02] md:col-span-2 md:row-span-2">
          <Image
            className="h-full object-cover"
            src="/thumb.jpg"
            title="CSS"
            alt="CSS"
            width={4000}
            height={2844}
          />
        </div>
        <div className="cursor-pointer overflow-hidden rounded-2xl duration-300 hover:scale-[1.02] ">
          <Image
            className="h-full object-cover"
            src="/thumb.jpg"
            title="CSS"
            alt="CSS"
            width={4000}
            height={2844}
          />
        </div>
        <div className="cursor-pointer overflow-hidden rounded-2xl duration-300 hover:scale-[1.02] ">
          <Image
            className="h-full object-cover"
            src="/thumb.jpg"
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
