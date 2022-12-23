import { Routes , Route} from 'react-router-dom'
import {Home} from './component/Home'
import {User} from './component/User'
import {About} from './component/About'

function App() {

  return (
   <>
   <User/>
   {/* <Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='about' element={<About/>}/>
   <Route path='user' element={<User/>}/>
   </Routes> */}
   </>
  )
}

export default App
