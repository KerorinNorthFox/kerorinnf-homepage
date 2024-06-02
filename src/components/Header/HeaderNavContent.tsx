interface HeaderNavContentProps {
  name: string
  href: string
}

const HeaderNavContent = (props: HeaderNavContentProps) => {
  const { name, href } = props
  return(
    <a className="h-full px-4 flex justify-center items-center hover:bg-hover" href={href}>
      <p className="text-lg font-bold text-light-text">{name}</p>
    </a>
  );
}

export default HeaderNavContent;