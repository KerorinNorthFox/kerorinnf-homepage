import FooterNav from "./FooterNav";
import FooterSiteInfo from "./FooterSiteInfo";

const Footer = () => {
  return(
    <footer>
      <div className="h-48 pt-8 bg-[#e5e7eb] text-gray-500">
        <div className="mx-12 xl:mx-[20%] hidden md:flex justify-between">
          <FooterNav />
          <FooterSiteInfo />
        </div>
        <div className="flex md:hidden justify-center">
          <FooterSiteInfo />
        </div>
      </div>
    </footer>
  );
}

export default Footer;