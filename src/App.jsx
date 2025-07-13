import React from 'react'
import Main from './components/main/Main'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import S3 from './components/s3/S3'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Main/>
      <S3/>
    </div>
  )
}

export default App