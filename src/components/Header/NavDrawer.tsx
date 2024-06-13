import NavDrawerContent from "./NavDrawerContent";

const NavDrawer = () => {
  return(
    <div id="drawer-navigation" className="h-screen p-4 top-0 right-0 z-40 fixed overflow-y-auto transition-transform translate-x-full bg-white w-64" tabIndex={-1} aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" className="text-light-text ml-4">Menu</h5>
      <button className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
      <hr className="mt-4" />
      <div className="overflow-y-auto">
        <ul>
          <NavDrawerContent name="Home" href="/" />
          <NavDrawerContent name="Product" href="/product" />
          <NavDrawerContent name="Blog" href="/blog" />
        </ul>
      </div>
    </div>
  );
}

export default NavDrawer;