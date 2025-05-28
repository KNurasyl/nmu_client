import 'dotenv/config'

export const service = {
	endpoint: {
		url: process.env.GRAPHQL_API,
		skipSSLValidation: true,
	},
}
