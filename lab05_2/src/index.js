import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', num: '978-156-455' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [searchText, setSearchText] = useState("")

  const handleAddPerson = () => {
    const newPerson = {
      name: newName,
      num: newNum,
    }
    if(persons.find(e =>e.name===newPerson.name)){
      alert(`${newName} is already added to phonebook`);
    }else{
      
      setPersons([...persons, newPerson])
    }
    
  }
    const handleNameChange = e =>{
    setNewName(e.target.value)
  }
  const handleNumChange = e =>{
    setNewNum(e.target.value)
  }
  const handleFormSubmit = e =>{
    e.preventDefault();
  }
  const handleSearchChange =(searchText)=>{
    if (persons?.length){
      const filterData = persons.filter((value) =>{
        return (
          value.name.includes(searchText) ||
          value.num.includes(searchText)
        )
      });
      
    }
    
  }
  
 

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with<input   onChange={e=>{setSearchText(e.target.value)}}/></p>
      
      <form onSubmit={handleFormSubmit}>
      <h2>add a new</h2>
        <div>
          name: <input  value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          num: <input  value={newNum} onChange={handleNumChange}/>
        </div>
        <div>
        <button type="submit" onClick={handleAddPerson}>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter((val)=>{
        if(searchText===""){
          return val
        } else if (val.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())){
          return val
        }
      }).map((val,key)=>{
        return (
          <div><p>{val.name} {val.num}</p></div>
        )
      })
      }
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)
export default App