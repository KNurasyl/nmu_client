import LessonPage from '@/features/lesson/LessonPage'

interface IProps {
	params: { lessonId: string }
}

const Page = async ({ params }: IProps) => {
	const { lessonId } = await params

	return <LessonPage lessonId={lessonId} />
}

export default Page
