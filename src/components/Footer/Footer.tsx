import FooterNav from "./FooterNav";
import FooterSiteInfo from "./FooterSiteInfo";

const Footer = () => {
  return (
    <footer>
      <div className="h-64 bg-light-footer-bg pt-12 text-light-footer-text dark:bg-dark-footer-bg dark:text-dark-footer-text">
        <div className="mx-auto hidden max-w-[70%] justify-between px-4 lg:flex">
          <FooterNav />
          <FooterSiteInfo />
        </div>
        <div className="flex justify-center lg:hidden">
          <FooterSiteInfo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
