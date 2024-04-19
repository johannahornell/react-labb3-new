import { Inter, Poppins } from 'next/font/google'
import './style.scss'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins'
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable}`}>
                <Navigation />
                {children}
            </body>
        </html>
    )
}
