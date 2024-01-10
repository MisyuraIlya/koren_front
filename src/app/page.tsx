import Image from 'next/image'
import Auth from '@/modules/auth'
export default function Home() {
  return (
      <main className='h-full flex items-center ml-40 mr-40'>
          <div>
            <Auth.Description.LoginDescription/>
            <Auth.Forms.LoginForm/>
        </div>
      </main>
  )
}
