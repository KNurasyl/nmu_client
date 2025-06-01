import { i18nConfig } from '@/i18n/config'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	...i18nConfig,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.vimeocdn.com',
			},
			{
				protocol: 'http',
				hostname: 'f.vimeocdn.com', // если используешь src1
			},
		],
	},
}

export default nextConfig
