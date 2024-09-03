import SocialMediaLinks from "./SocialMediaLinks";

const FooterSiteInfo = () => {
  const today = new Date();
  return (
    <>
      &copy; {today.getFullYear()} KerorinNF. All rights reserved.
      <div className="mt-4 flex justify-center lg:justify-start lg:pl-4">
        <SocialMediaLinks />
      </div>
    </>
  );
};

export default FooterSiteInfo;
