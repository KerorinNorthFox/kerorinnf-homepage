interface NavDrawerContentProps {
  name: string
  href: string
}

const NavDrawerContent = (props: NavDrawerContentProps) => {
  const { name, href } = props;

  return(
    <li>
      <a href={href} className="flex p-4 items-center hover:bg-hover">
          <span className="text-light-text">{name}</span>
      </a>
    </li>
  );
}

export default NavDrawerContent;