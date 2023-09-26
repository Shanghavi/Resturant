import Chef from '@/components/Home/Chef'
import Feature from '@/components/Home/Feature'
import Header from '@/components/Home/Header'
import RootLayout from './RootLayout'



export default function Home() {
  return (
  <RootLayout>
   <main>
   <div className="mt-10 mb-20">
    <Header/>
    <Chef/>
    <Feature/>
    </div>
   </main>
   </RootLayout>
  )
}
