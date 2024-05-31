import { useEffect } from "react"
import { useState } from "react"
import { UserList } from "./Components/UserList"
import './index.css'


function App() {
 const [data, setData] = useState([])
 const getData = async () =>{
  const rs = await fetch('https://jsonplaceholder.typicode.com/users')
  const rsJson = await rs.json()
  setData(rsJson)
 }

 useEffect(() =>{
  getData()
 },[])

  return (
    <div className="container">
        <UserList data={data}/>
    </div>
  )
}

export default App
