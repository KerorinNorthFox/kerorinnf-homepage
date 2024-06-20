interface NavDrawerContentProps {
  children: React.ReactElement
}

const NavDrawerContent = (props: NavDrawerContentProps) => {
  const { children } = props;

  return(
    <li>
      <div className="flex p-4 items-center hover:bg-hover">{children}</div>
    </li>
  );
}

export default NavDrawerContent;