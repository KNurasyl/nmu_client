import LessonList from '@/features/lesson/LessonList'

interface IProps {
	params: { courseId: string }
}

const Page = async ({ params }: IProps) => {
	const { courseId } = await params

	return <LessonList courseId={courseId} />
}

export default Page
