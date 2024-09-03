interface ExternalLinkProps {
  href: string;
  ariaLabel: string;
  children: React.ReactElement;
}

const ExternalLink = (props: ExternalLinkProps) => {
  const { href, ariaLabel, children } = props;

  return (
    <a
      className="hover:text-black dark:hover:text-white"
      href={href}
      target="_blank"
      aria-label={ariaLabel}>
      {children}
    </a>
  );
};

export default ExternalLink;
