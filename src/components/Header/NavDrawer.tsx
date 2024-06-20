import NavDrawerContent from "./NavDrawerContent";

const NavDrawer = () => {
  return (
    <div
      id="drawer-navigation"
      className="fixed right-0 top-0 z-40 h-screen w-64 translate-x-full overflow-y-auto bg-light-bg p-4 text-light-text drop-shadow-2xl transition-transform dark:bg-dark-bg dark:text-dark-text"
      tabIndex={-1}
      aria-labelledby="drawer-navigation-label">
      <h5
        id="drawer-navigation-label"
        className="ml-4 font-semibold">
        Menu
      </h5>
      <button
        className="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation">
        <svg
          className="h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
      <hr className="mt-4" />
      <div className="overflow-y-auto">
        <ul>
          <NavDrawerContent>
            <a
              href="/"
              className="h-full w-full">
              Home
            </a>
          </NavDrawerContent>
          <NavDrawerContent>
            <a
              href="/product"
              className="h-full w-full">
              Product
            </a>
          </NavDrawerContent>
          <NavDrawerContent>
            <a
              href="/blog"
              className="h-full w-full">
              Blog
            </a>
          </NavDrawerContent>
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
