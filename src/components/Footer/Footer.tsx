import FooterNav from "./FooterNav";
import FooterSiteInfo from "./FooterSiteInfo";

const Footer = () => {
  return(
    <footer>
      <div className="w-screen h-64 pt-12 bg-[#e5e7eb] text-gray-500">
        <div className="max-w-[60%] mx-auto px-4 hidden lg:flex justify-between">
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