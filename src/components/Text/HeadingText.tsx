interface HeadingTextProps {
  level: number
  text: string
}

enum HeadingLevel {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
  H6
}

const HeadingText = (props: HeadingTextProps) => {
  const { level, text } = props;
  const levelSwitch = (level: number, content: string) => {
    switch (level) {
      case HeadingLevel.H1:
        return(<h1>{content}</h1>);
      case HeadingLevel.H2:
        return(<h2>{content}</h2>);
      case HeadingLevel.H3:
        return(<h3>{content}</h3>);
      case HeadingLevel.H4:
        return(<h4>{content}</h4>);
      case HeadingLevel.H5:
        return(<h5>{content}</h5>);
      case HeadingLevel.H6:
        return(<h6>{content}</h6>)
      default:
        return(<h1>{content}</h1>)
    }
  }

  return(
    <div className="text-lg font-bold">
      {levelSwitch(level, text)}
    </div>
  )
}

export default HeadingText;