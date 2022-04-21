import { useState } from 'react';


function RandomPassword(){
    
    let [randomPassword, setRandomPassword] = useState([]);

    const getRandomPassword = async () => {
        const response = await fetch(' https://password-server.herokuapp.com/password');
        const responsePW= await response.json();
        
        setRandomPassword(responsePW);
    }

    return(
        <>
            <div>
                <p>Choose this option if you want a randomly generated password.</p>
                <button onClick={getRandomPassword}>Random</button>
                <p><span>{randomPassword.password}</span></p>
            </div>
        </>
    );
}

export default RandomPassword;