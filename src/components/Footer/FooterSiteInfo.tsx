import SocialMediaLinks from "./SocialMediaLinks";

const FooterSiteInfo = () => {
  const today = new Date();
  return(
    <div>
      &copy; {today.getFullYear()} KerorinNF. All rights reserved.
      <div className="pt-4 md:pl-4 flex justify-center md:justify-start">
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default FooterSiteInfo;