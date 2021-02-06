import React,{useState,useEffect} from 'react'
import useFetch from "./hooks/useFetch";
import { Button,Pane,Heading,TextInput,Dialog,Spinner } from 'evergreen-ui'
import './App.css'
function App() {
  const [name, setName] = useState('')
  const [query, setQuery] = useState('')

  const [isShown, setIsShown] = useState(false)

    const {...state} =useFetch(query)

    console.log(state);

    function onSubmit(e) {
      e.preventDefault()
      setQuery(name)
    }
useEffect(() => {
  state.data.age && setIsShown(true)
}, [state.data.age])
    
    if(state.loading) return (
      <Pane display="flex" alignItems="center" justifyContent="center"     height='100vh'
      width='100%'     border="none"
      backgroundColor='#212121'
      color='#fff'>
      <Spinner />
      </Pane>
    )
  return (
    <Pane
    height='100vh'
    width='100%'
    border="none"
    backgroundColor='#212121'
    color='#fff'
    >
          <Pane
            marginBottom='200px'
            paddingTop='100px'          
          >
          <Heading textAlign='center' size={900}>A project for practicing custom hooks!</Heading>
          </Pane>
        
        <Pane>
        <form
        onSubmit={onSubmit}
        >
          <Pane
            display='flex'
            alignItems="center"
            justifyContent="center"
          >

          <TextInput onChange={e=>setName(e.target.value)} width="90%" height={48} placeholder="Enter a Name!" />
          <Button height={48} appearance="primary">Submit</Button>
          </Pane>
        </form>
        </Pane>
        
            <Pane>
            <Dialog
              isShown={isShown}
              title={`Yo! my man: ${query}`}
              onCloseComplete={() => setIsShown(false)}
              confirmLabel="Do it again!"
            >
              Your Age is: {state.data.age}
            </Dialog>
          </Pane>
        
    </Pane>
  );
}

export default App;
