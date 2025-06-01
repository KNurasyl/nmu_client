import LessonList from '@/features/lesson/LessonList'

interface IProps {
	params: { courseId: string }
}

const Page = async ({ params }: IProps) => {
	return <LessonList courseId={params.courseId} />
}

export default Page
