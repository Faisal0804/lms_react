import React,{useState} from 'react'

function multiFormHandle() {

    const [user, setInputs] = useState({
        username:"",
        email:""

    });

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs({
        ...user,[name]:value
      })
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(user);
    };
  
    return (
       <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
         
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="text" 
            name="email" 
            
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
      </div> 
    )
}

export default multiFormHandle