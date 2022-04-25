import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function RandomPassword(){
    
    let [randomPassword, setRandomPassword] = useState('');

    const getRandomPassword = async () => {
        const response = await fetch(' https://password-server.herokuapp.com/password');
        const responsePW= await response.json();
        
        setRandomPassword(responsePW);
    }

    const clear = () => {
        setRandomPassword('');
    }

    return(
        <>
            <Row>
                <Col>
                    <h2>Random Password</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3>Choose this option if you want a randomly generated password.</h3>
                </Col>
            </Row>

            <Row>
                <Col>

                    <Stack direction="horizontal" gap={3}>
                        <Button size="sm" variant="outline-primary" type="submit" onClick={getRandomPassword}>
                            Get Random Password
                        </Button>

                    

                        <Button size="sm" variant="outline-secondary" type="submit" onClick={clear}>
                            Clear Password
                        </Button>
                    </Stack>
                </Col>
            </Row>

            <br></br>
            
            <Row>
                <Col>
                    <p><span>{randomPassword.password}</span></p>
                </Col>
            </Row>
        </>
    );
}

export default RandomPassword;