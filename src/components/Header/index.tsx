// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="relative z-50 bg-primary">
      <nav className="m-auto flex h-20 w-[90%] items-center justify-between">
        <h1 className="text-white duration-300 hover:text-accent">Blog C</h1>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="text-white duration-300 hover:text-accent">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white duration-300 hover:text-accent">
              CSS
            </a>
          </li>
          <li>
            <a href="#" className="text-white duration-300 hover:text-accent">
              React
            </a>
          </li>
          <li>
            <a href="#" className="text-white duration-300 hover:text-accent">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
