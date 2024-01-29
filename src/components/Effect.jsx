import React, { Fragment ,useEffect,useState} from 'react'

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // The code that we want to run
        console.log('The count is:', count);
    
        // Optional return function
        return () => {
          console.log('I am being cleaned up!');
        };
      }, [count]); // The dependency array

  return (
    <Fragment>
        <div>
        <div >
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <p id="result"></p>
    </div>

        </div>
    </Fragment>
  )
}

export default Effect