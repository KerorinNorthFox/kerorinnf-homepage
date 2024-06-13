import SocialMediaLinks from "./SocialMediaLinks";

const FooterSiteInfo = () => {
  const today = new Date();
  return(
    <div>
      &copy; {today.getFullYear()} KerorinNF. All rights reserved.
      <div className="mt-4 lg:pl-4 flex justify-center lg:justify-start">
        <SocialMediaLinks />
      </div>
    </div>
  );
}

export default FooterSiteInfo;