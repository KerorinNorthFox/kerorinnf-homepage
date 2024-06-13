interface SentenceBlockProps  {
  children: React.ReactElement
}

const SentenceBlock = (props: SentenceBlockProps) => {
  const { children } = props;
  return(
    <div className="py-4">
      <p className="text-md font-medium text-gray-900">{children}</p>
    </div>
  )
}

export default SentenceBlock;