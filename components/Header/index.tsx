import Link from "next/link";

// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="relative z-50 bg-primary">
      <nav className="m-auto flex h-20 w-[90%] items-center justify-between">
        <h1 className="text-white duration-300 hover:text-accent">Blog C</h1>
        <ul className="flex gap-6">
          <li>
            <Link 
              href="/"
              className="text-white duration-300 hover:text-accent"
              title="Navegar para Home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/css"
              className="text-white duration-300 hover:text-accent"
              title="Navegar para CSS"
            >
              CSS
            </Link>
          </li>
          <li>
            <Link 
              href="/react"
              className="text-white duration-300 hover:text-accent"
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
