import Chef from '@/components/Chef'
import Feature from '@/components/Feature'
import Header from '@/components/Header'
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
