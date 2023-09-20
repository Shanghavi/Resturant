import Chef from '@/components/Chef'
import Feature from '@/components/Feature'
import Header from '@/components/Header'


export default function Home() {
  return (
   <main>
   <div className="mt-10 mb-20">
    <Header/>
    <Chef/>
    <Feature/>
    </div>
   </main>
  )
}
