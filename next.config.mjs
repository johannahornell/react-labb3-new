/** @type {import('next').NextConfig} */
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.myanimelist.net',
                port: '',
                pathname: '/images/**'
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}

export default nextConfig
