import TaskPage from '@/features/task/TaskPage'

interface IProps {
	params: { taskId: string }
}

const Page = async ({ params }: IProps) => {
	const { taskId } = await params

	return <TaskPage taskId={taskId} />
}

export default Page
