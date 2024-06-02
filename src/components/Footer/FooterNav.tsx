import FooterNavContent from "./FooterNavContent";

const FooterNav = () => {
  return(
    <div className="flex">
      <ul>
        <FooterNavContent name="Home" href="/" />
      </ul>
      <ul className="pl-2">
        <FooterNavContent name="Product" href="/product" />
        <FooterNavContent name="Blog" href="/blog" />
      </ul>
    </div>
  );
}

export default FooterNav;