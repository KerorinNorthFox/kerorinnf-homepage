interface NavDrawerContentProps {
  children: React.ReactElement;
}

const NavDrawerContent = (props: NavDrawerContentProps) => {
  const { children } = props;

  return (
    <li>
      <div className="flex items-center p-4 hover:bg-hover">{children}</div>
    </li>
  );
};

export default NavDrawerContent;
