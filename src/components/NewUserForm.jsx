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

  const updateField = (e,fieldName)=>{
    setFields(prevFields=>({
      ...prevFields,
      [fieldName]:e.target.value
    }))
    console.log(fields)
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Email</label><input type="text" onChange={(e)=> updateField(e,'email')}/>
            <label htmlFor="">New password</label><input type="text" onChange={(e)=> updateField(e,'password')}/>
            <label htmlFor="">Name</label><input type="text" onChange={(e)=> updateField(e,'name')}/>
            <label htmlFor="">Surname</label><input type="text" onChange={(e)=> updateField(e,'surname')}/>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default NewUserForm