interface WindowProps {
  children: React.ReactElement;
}

const Window = (props: WindowProps) => {
  const { children } = props;
  return <div className="h-56 w-full border border-gray-400">{children}</div>;
};

export default Window;
