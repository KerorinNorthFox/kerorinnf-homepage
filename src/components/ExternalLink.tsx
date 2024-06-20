interface ExternalLinkProps {
  href: string;
  children: React.ReactElement;
}

const ExternalLink = (props: ExternalLinkProps) => {
  const { href, children } = props;

  return (
    <a
      className="hover:text-black dark:hover:text-white"
      href={href}
      target="_blank">
      {children}
    </a>
  );
};

export default ExternalLink;
