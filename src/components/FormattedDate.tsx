interface FormattedDateProps {
	date: Date
}

const FormattedDate = (props: FormattedDateProps) => {
	const { date } = props;
	return(
		<time dateTime={date.toISOString()}>
			{
				date.toLocaleDateString('ja-JP')
			}
		</time>
	);
}

export default FormattedDate;