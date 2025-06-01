import { graphql } from '@/graphql/generated'

export const GET_LESSON_BY_COURSE = graphql(
	'query GetLessonsByCourseId($courseId: String!) {\n  getLessonsByCourseId(courseId: $courseId) {\n    _id\n    description\n    lang\n    lessonCode\n    lessonName\n    order\n    videoUrl\n  }\n}'
)
