'use client'

import { GetTaskByIdQuery } from '@/graphql/generated/graphql'
import { GET_TASK_BY_ID } from '@/graphql/task'
import { useQuery } from '@apollo/client'
import { Row, Spin } from 'antd'

interface IProps {
	taskId: string
}

const TaskPage = ({ taskId }: IProps) => {
	const { data, loading } = useQuery<GetTaskByIdQuery>(GET_TASK_BY_ID, {
		variables: {
			id: taskId,
		},
	})

	console.log(data)

	return (
		<Spin spinning={loading}>
			<Row>{taskId}</Row>
		</Spin>
	)
}

export default TaskPage
