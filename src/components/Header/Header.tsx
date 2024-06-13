import HeaderNav from "./HeaderNav"

const Header = () => {
  return(
    <header>
      <nav className="w-screen h-16 px-4 fixed bg-gradient-to-r from-gradient-from to-gradient-to animate-bg-pan-left bg-200% drop-shadow-lg">
        <div className="h-full lg:max-w-[60%] mx-auto flex justify-between items-center">
          <a className="text-xl" href="/">HomePage</a>
          <HeaderNav />
        </div>
      </nav>
    </header>
  )
}

export default Header 