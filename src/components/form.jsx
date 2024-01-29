import React, {useState} from 'react'

function form() {

    const [inputValue, setInputValue] = useState('');
    

    const  handleChange = (e) => {
		setInputValue(e.target.value);
       
	};

  return (
    <div>
        <form>
	<label>Input Value:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label>
	<p>Input Value: {inputValue}</p>
    </form>
     </div>
       
    
      
   
  )
}

export default form