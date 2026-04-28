import './App.css'
import CCounter from './Component/ComponetnLifecycle'
import ExUseEffect from './Component/ExUseEffect'
import UserList from './Component/UserList'
import { UserList2 } from './Component/UserList'
import Counter from './Component/Counter'
import {TimeTest} from './Component/TimeTest'
import MovieList  from './Component/MovieList'
import ExUseMemo,{UseMemoTest} from './Component/ExUseMemo'
import { ParentComponet } from './Component/ExUseCallback'
import UseRefTest from './Component/UseRefTest'
import UseReducerTest,{Login} from './Component/UseReducerTest'
import DarkOrLight from './Component/ContextProvider'
import CustomHook from './Component/CustomHook'
import UseFetchShow from './Component/UseFetchShow'

function App() {

  return (
    <>
     <CCounter count={0} />
     <ExUseEffect />
     <UserList />
     <UserList2 />
     <Counter/>
     <TimeTest/>
     <MovieList />
     <ExUseMemo num={1} />
     <UseMemoTest/>
     <ParentComponet />
     <UseRefTest/>
     <UseReducerTest />
     <Login />
     <DarkOrLight />
     <CustomHook />
     <UseFetchShow />
    </>
  )
}

export default App
