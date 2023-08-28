// Imported Components
import Link from 'next/link'

// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="relative z-50 bg-primary">
      <nav className="m-auto flex h-20 w-[90%] items-center justify-between">
        <Link href="/">
          <h1 className="text-base font-bold text-white duration-300 hover:text-accent">
            Dev Trick
          </h1>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/"
              className="text-sm font-bold text-white duration-300 hover:text-accent"
              title="Navegar para Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/css"
              className="text-sm font-bold text-white duration-300 hover:text-accent"
              title="Navegar para CSS"
            >
              CSS
            </Link>
          </li>
          <li>
            <Link
              href="/react"
              className="text-sm font-bold text-white duration-300 hover:text-accent"
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
