import React,{ useState,useEffect} from 'react'

function UseCaseInputValidation() {
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    const inputHandler = (e) => {

        setInput(e.target.value);
    };

    useEffect(() => {
        if (input.length < 5 || /\d/.test(input)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [input]);

    return (
        <>
            <hr />
            

            <form>
                <label htmlFor="input">Write something (more than 5 non numerical characters is a valid input)</label><br></br>
                <input type="text"  id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
            </form><br></br>
            <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem' } : { backgroundColor: 'lightpink', padding: '.5rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>
        </>
    );
};

export default UseCaseInputValidation;