import NavDrawer from "@/components//Drawer/NavDrawer";
import HeaderNavContent from "./HeaderNavContent"

const HeaderNav = () => {
  return(
    <>
      <div className="h-full hidden sm:flex">
        <HeaderNavContent name="Home" href="/" />
        <HeaderNavContent name="Product" href="/product" />
        <HeaderNavContent name="Blog" href="/blog" />
      </div>
      <div className="h-full flex sm:hidden justify-center items-center">
        <button className="h-full w-header flex justify-center items-center hover:bg-hover" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" data-drawer-placement="right" aria-controls="drawer-navigation">
          <img className="size-8" src="/menu_icon.svg" alt="menu iconh"/>
        </button>
        <NavDrawer />
      </div>
    </>
  );
}

export default HeaderNav;