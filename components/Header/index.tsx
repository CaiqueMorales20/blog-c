// Imported Components
import Link from 'next/link'

// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="relative z-50 bg-primary">
      <nav className="m-auto flex h-20 w-[90%] items-center justify-between">
        <Link href="/">
          <h1 className="rounded-lg p-2 text-base font-bold text-white duration-300 hover:bg-white hover:text-accent">
            Dev Trick
          </h1>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="rounded-lg p-2 text-sm font-bold text-white duration-300 hover:bg-white hover:text-accent"
              title="Navegar para Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/css"
              className="rounded-lg p-2 text-sm font-bold text-white duration-300 hover:bg-white hover:text-accent"
              title="Navegar para CSS"
            >
              CSS
            </Link>
          </li>
          <li>
            <Link
              href="/react"
              className="rounded-lg p-2 text-sm font-bold text-white duration-300 hover:bg-white hover:text-accent"
              title="Navegar para React"
            >
              React
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
