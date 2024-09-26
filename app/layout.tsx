import 'swiper/css';
import "styles/tailwind.css"
import { montserrat } from "./ui/fonts";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
