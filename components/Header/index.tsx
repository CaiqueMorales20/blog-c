// Functional Component
export default function Header() {
  // Rendering
  return (
    <header className="bg-primary relative z-50">
      <nav className="m-auto flex h-20 w-[90%] items-center justify-between">
        <h1 className="hover:text-accent text-white duration-300">Blog C</h1>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-accent text-white duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent text-white duration-300">
              CSS
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent text-white duration-300">
              React
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent text-white duration-300">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
