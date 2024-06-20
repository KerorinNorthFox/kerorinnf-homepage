import FooterNav from "./FooterNav";
import FooterSiteInfo from "./FooterSiteInfo";

const Footer = () => {
  return(
    <footer>
      <div className="h-64 pt-12 bg-light-footer-bg dark:bg-dark-footer-bg text-light-footer-text dark:text-dark-footer-text">
        <div className="max-w-[70%] mx-auto px-4 hidden lg:flex justify-between">
          <FooterNav />
          <FooterSiteInfo />
        </div>
        <div className="flex lg:hidden justify-center">
          <FooterSiteInfo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;