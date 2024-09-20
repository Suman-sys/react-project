import React, {useState} from 'react'

const App = () => {

  const[data, setData] = useState({
    name: '',
    email: '',
    passwowd: ''
  })

  const handleChange = (e) => {
    const{name, value} = e.target;
    setData((prev) => {
      return {...prev, [name]: value};
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", data)
  };

  return (
    <div style={{marginLeft:'30px'}} onSubmit={handleSubmit}>
      <h3>Name:</h3><input type="text" name="name" onChange={handleChange} />
      <h3>Email:</h3><input type="email" name="email" onChange={handleChange} />
      <h3>Password:</h3><input type="password" name="password" onChange={handleChange} />
      <div style={{marginTop:'20px'}}>
      <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default App