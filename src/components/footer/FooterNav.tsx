const FooterNav = () => {
  return (
    <div className="flex">
      <ul>
        <FooterNavContent
          name="Home"
          href="/"
        />
      </ul>
      <ul className="ml-2">
        <FooterNavContent
          name="Product"
          href="/product"
        />
        <FooterNavContent
          name="Blog"
          href="/blog"
        />
      </ul>
    </div>
  );
};

interface FooterNavContentProps {
  name: string;
  href: string;
}

const FooterNavContent = (props: FooterNavContentProps) => {
  const { name, href } = props;

  return (
    <li className="hover:bg-hover px-4 py-2">
      <a
        className="text-md"
        href={href}>
        {name}
      </a>
    </li>
  );
};

export default FooterNav;
