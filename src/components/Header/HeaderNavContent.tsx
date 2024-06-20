interface HeaderNavContentProps {
  name: string;
  href: string;
}

const HeaderNavContent = (props: HeaderNavContentProps) => {
  const { name, href } = props;
  return (
    <a
      className="flex h-full items-center justify-center px-4 hover:bg-hover"
      href={href}>
      <p className="text-lg font-bold">{name}</p>
    </a>
  );
};

export default HeaderNavContent;
