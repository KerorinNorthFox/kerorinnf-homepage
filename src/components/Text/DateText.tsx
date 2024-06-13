import FormattedDate from "../FormattedDate";

interface DateTextProps {
  publishedDate?: Date
  updatedDate?: Date
}

const DateText = (props: DateTextProps) => {
  const { publishedDate, updatedDate } = props
  return(
    <p className="text-sm font-thin text-gray-500">
      {
        publishedDate && (
          <span>投稿日：<FormattedDate date={publishedDate} /></span>
        )
      }
      {
        updatedDate && (
          <>
            <span className="mx-2">/</span>
            <span>更新日：<FormattedDate date={updatedDate} /></span>
          </>
        )
      }
    </p>
  );
}

export default DateText;