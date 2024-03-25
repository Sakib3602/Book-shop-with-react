import { useEffect } from "react"


function App() {

  useEffect(()=>{
    fetch('fake.json')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])


  return (
    <>
    <button className="btn btn-primary">ok</button>
      
    </>
  )
}

export default App
