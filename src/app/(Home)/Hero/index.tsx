// Functional Component
export default function Hero() {
  // Rendering
  return (
    <div className="-mt-20 flex min-h-[100vh] items-center justify-center pt-20">
      <div className="grid h-[40rem] w-full grid-cols-1 grid-rows-1 gap-10 md:grid-cols-3 md:grid-rows-2">
        <div className="rounded-2xl bg-accent duration-300 hover:scale-[1.02] md:col-span-2 md:row-span-2"></div>
        <div className="rounded-2xl bg-accent duration-300 hover:scale-[1.02] "></div>
        <div className="rounded-2xl bg-accent duration-300 hover:scale-[1.02] "></div>
      </div>
    </div>
  )
}
