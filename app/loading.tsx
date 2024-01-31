import React from 'react'
import SplashScreen from './components/loading/splash-screen';
import { sleep } from './utils/utils';

const LoadingHome = async () => {
  sleep(1000)
  return (
    <main className='min-h-screen bg-gray-500 flex items-center justify-center'>
        <SplashScreen></SplashScreen>
    </main>
  )
}

export default LoadingHome