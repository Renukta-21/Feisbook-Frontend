import { useState } from "react"

function NewUserForm() {
  const [fields, setFields] = useState({
    email:'',
    password:'',
    name:'',
    surname:''
  })

  const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(fields)
  }

  const updateField = (e)=>{
    const {name, value} = e.target

    setFields(prevFields=>{
      return {
        ...prevFields,
        [name]:value
      }
    })
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label><input type="text" name='email' onChange={updateField}/>
            <label htmlFor="">New password</label><input type="text" name='password' onChange={updateField}/>
            <label htmlFor="">Name</label><input type="text" name='name' onChange={updateField}/>
            <label htmlFor="">Surname</label><input type="text" name='surname' onChange={updateField}/>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default NewUserForm