import { SITE_TITLE } from "@/consts"
import HeaderNav from "./HeaderNav"

const Header = () => {
  return(
    <header>
      <nav className="w-screen h-16 px-4 flex justify-between items-center fixed bg-gradient-to-r from-gradient-from to-gradient-to animate-bg-pan-left bg-200% drop-shadow-lg">
        <a className="text-xl">{SITE_TITLE}</a>
        <HeaderNav />
      </nav>
    </header>
  )
}

export default Header