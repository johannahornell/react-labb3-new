import { Inter, Poppins, Viga } from 'next/font/google'
import './style.scss'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap'
})
const viga = Viga({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-viga',
    display: 'swap'
})

export const metadata = {
    title: 'Explore Anime'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${poppins.variable} ${viga.variable}`}
            >
                <Navigation />
                {children}
            </body>
        </html>
    )
}
