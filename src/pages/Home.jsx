import React from 'react'
import Bannerhome from '../components/Bannerhome'
import Textslider from '../components/Textslider'
import Sol from '../components/Sol'
import About from '../components/About'
import Modalc from '../components/Modalc'
function Home() {
  return (
    <div>
     <Bannerhome />
     <Modalc/>
     <Textslider />
     <Sol />
     <About />
    </div>
  )
}

export default Home