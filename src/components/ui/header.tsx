import Logo from "./logo"
import ThemeToggle from "./theme-toggle"


export default function Header({title}:{title?:string}) {
  return (
    <header className="bg-background/70 backdrop-blur-sm sticky top-0">
      <nav className="px-4 py-2 w-full flex justify-between items-center max-w-screen-2xl mx-auto">
        <Logo />
        {
          title ?? (<section>{title}</section>)
        }
        <ThemeToggle className="outline-none border-none" />
      </nav>
    </header>
  )
}
