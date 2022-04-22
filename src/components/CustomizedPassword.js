import { useState } from 'react';

/* 
    Citation: https://github.com/jasoncartera/writersblock_cs340/blob/main/ui/src/components/readers/InsertReader.js
    Accessed: 4-21-2022
*/
function CustomizedPassword(){
    
    // state
    let [length, setLength] = useState('');
    let [symbols, setSymbols] = useState('');
    let [uppercase, setUppercase] = useState();
    let [lowercase, setLowercase] = useState('');
    let [numbers, setNumbers] = useState('');
    let [customPassword, setCustomPassword] = useState([]);

    const getCustomPassword = async (event) => {

        event.preventDefault();


        const request = {length, symbols, uppercase, lowercase, numbers}

        const response = await fetch('https://password-server.herokuapp.com/password', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(request),
            headers: {'Content-Type': 'application/json',}
        });

        if (response.status === 200){
            const responseCPW = await response.json();
            setCustomPassword(responseCPW);

            // clear values
            setLength('');
            setSymbols('');
            setUppercase('');
            setLowercase('');
            setNumbers('');

        } else {
            alert('Recieved response code: ' + response.status.toString);
        }
        
    }

    return(
        <>
            <div>
                <form onSubmit={getCustomPassword}>
                    <p>Choose this option if you want a customized password.</p>

                    <label htmlFor="length">Length</label>
                    <input type="text" name="length" id="length" value={length} onChange={e => setLength(e.target.value)}/>

                    <label htmlFor="symbols">Symbols?</label>
                    <input type="checkbox" name="symbols" id="symbols" value={symbols} onChange={e => setSymbols(e.target.value)}/>

                    <label htmlFor="uppercase">Uppercase?</label>
                    <input type="checkbox" name="uppercase" id="uppercase" value={uppercase} onChange={e => setUppercase(e.target.value)}/>
                    
                    <label htmlFor="lowercase">Lowercase?</label>
                    <input type="checkbox" name="lowercase" id="lowercase" value={lowercase} onChange={e => setLowercase(e.target.value)}/>

                    <label htmlFor="numbers">Numbers?</label>
                    <input type="checkbox" name="numbers" id="numbers" value={numbers} onChange={e => setNumbers(e.target.value)}/>

                    <button onClick={getCustomPassword}>Custom</button>
                </form>
                <p><span>{customPassword.password}</span></p>
            </div>
        </>
    );
}

export default CustomizedPassword;