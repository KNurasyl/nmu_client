import { i18nConfig } from '@/i18n/config'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	...i18nConfig,
}

export default nextConfig
