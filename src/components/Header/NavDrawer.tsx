import NavDrawerContent from "./NavDrawerContent";

const NavDrawer = () => {
  return(
    <div id="drawer-navigation" className="h-screen w-64 p-4 top-0 right-0 z-40 fixed overflow-y-auto transition-transform translate-x-full bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text drop-shadow-2xl" tabIndex={-1} aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" className="font-semibold ml-4">Menu</h5>
      <button className="text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation">
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
      </button>
      <hr className="mt-4" />
      <div className="overflow-y-auto">
        <ul>
          <NavDrawerContent>
            <a href="/" className="w-full h-full">Home</a>
          </NavDrawerContent>
          <NavDrawerContent>
            <a href="/product" className="w-full h-full">Product</a>
          </NavDrawerContent>
          <NavDrawerContent>
            <a href="/blog" className="w-full h-full">Blog</a>
          </NavDrawerContent>
        </ul>
      </div>
    </div>
  );
}

export default NavDrawer;