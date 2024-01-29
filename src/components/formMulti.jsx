import React, { useState } from 'react';

function formMulti() {
    const [firstName, setFirstName] = useState('');
 
    
    const handleChange = (e) => {
   
        setFirstName(e.target.name);
        setFirstName(e.target.value);
      
       
       };
       const onSubmit = (e) => {
        e.preventDefault();
        alert(firstName)
       
    
        // form
       };
        
  return (
    <div>
      <form onSubmit={onSubmit}>
      <p>Input Value: {firstName}</p>

      <input
        type="text"
        name="firstName"    
        onChange={handleChange}    
        placeholder="First name"
        required
      />
   
   <button type="submit">Submit</button>
   
      
      </form>


    </div>
  )
}

export default formMulti