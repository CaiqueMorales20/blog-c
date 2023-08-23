// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="relative z-50 bg-primary">
      <nav className="m-auto flex h-20 w-[90%] items-center justify-between">
        <h1 className="text-white duration-300 hover:text-accent">Blog C</h1>
        <ul className="flex gap-6">
          <li>
            <a
              href="/"
              className="text-white duration-300 hover:text-accent"
              title="Navegar para Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/css"
              className="text-white duration-300 hover:text-accent"
              title="Navegar para CSS"
            >
              CSS
            </a>
          </li>
          <li>
            <a
              href="/react"
              className="text-white duration-300 hover:text-accent"
              title="Navegar para React"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="/next"
              className="text-white duration-300 hover:text-accent"
              title="Navegar para Next"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
