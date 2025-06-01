interface IProps {
	lessonId: string
}

const LessonPage = ({ lessonId }: IProps) => {
	return <div>LessonPage {lessonId}</div>
}

export default LessonPage
