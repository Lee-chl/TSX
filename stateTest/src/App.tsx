import './App.css'
import ClickState from './component/Click_state'
import ClassCounter from './component/Class_component'
import LiveInput from './component/Input_state'
import ParentCompont from './component/Parent_state'
import StateParent from './component/Step_parent'

function App() {

  return (
    <>
      <ClickState click_num={0}/>
      <ClassCounter init={0} />
      <LiveInput />
      <ParentCompont/>
      <StateParent/>
    </>
  )
}

export default App
