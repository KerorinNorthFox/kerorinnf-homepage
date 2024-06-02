interface FooterNavContentProps {
  name: string
  href: string
}

const FooterNavContent = (props: FooterNavContentProps) => {
  const { name, href } = props;
  
  return(
    <li className="px-4 py-2 hover:bg-hover">
      <a className="text-lg" href={href}>{name}</a>
    </li>
  );
}

export default FooterNavContent;