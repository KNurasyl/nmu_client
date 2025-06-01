import { graphql } from '../generated'

export const GET_TASK_BY_LESSON = graphql(
	'query GetTasksByLesson($lessonId: String!) {\n  getTasksByLesson(lessonId: $lessonId) {\n    _id\n    data\n    description\n    lessonCode\n    type\n  }\n}'
)
