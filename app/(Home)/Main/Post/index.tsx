import Image from 'next/image'

// Functional Component
export default function Post() {
  // Rendering
  return (
    <div className="cursor-pointer overflow-hidden rounded-2xl duration-300 ease-in-out hover:scale-90">
      <Image src="/thumb.jpg" alt="Post" width={500} height={500} />
      <div className="flex flex-col gap-2 bg-white px-8 py-4">
        <h2 className="text-sm font-bold text-primary">Seletores no CSS</h2>
        <div className="flex gap-2">
          <div className="w-max rounded-lg bg-red-500 px-2 py-1">
            <h3 className="text-xs text-white">HTML</h3>
          </div>
          <div className="w-max rounded-lg bg-blue-500 px-2 py-1">
            <h3 className="text-xs text-white">CSS</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
