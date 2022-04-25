import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function RandomPassword(){
    
    let [randomPassword, setRandomPassword] = useState('');
    let [copyPassword, setCopyPassword] = useState(false);

    const getRandomPassword = async () => {
        const response = await fetch(' https://password-server.herokuapp.com/password');
        const responsePW= await response.json();
        
        setRandomPassword(responsePW);
    }

    const clear = () => {
        setRandomPassword('');
        setCopyPassword(false);
    }

    return(
        <Container className='random'>
            <Row>
                    <Col className='text-center'>
                        <h3>Random Password</h3>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center'>
                        <h5>Choose this option if you want a randomly generated password.</h5>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col className='d-flex justify-content-center'>

                        <Stack direction="horizontal" gap={3}>
                            <Button size="sm" variant="outline-primary" type="submit" onClick={getRandomPassword}>
                                Get Random Password
                            </Button>

                        

                            <Button size="sm" variant="outline-secondary" type="submit" onClick={clear}>
                                Clear Password
                            </Button>

                            {randomPassword.password ? 
                            <CopyToClipboard text={randomPassword.password} onCopy={() => setCopyPassword(true)}>
                                <Button size="sm" variant="outline-success">
                                    Copy Password
                                </Button>
                            </CopyToClipboard> : 
                            <CopyToClipboard text={randomPassword.password} onCopy={() => setCopyPassword(true)} disabled>
                            <Button size="sm" variant="outline-success">
                                Copy Password
                            </Button>
                            </CopyToClipboard>}
                            
                        </Stack>
                    </Col>
                </Row>

                <br></br>
                
                <Row>
                    <Col className='text-center'>
                        <p>New Password Here: &nbsp; <span>{randomPassword.password}</span>{copyPassword ? <span style={{color: 'green'}}>&nbsp; Copied.</span> : null}</p>
                        
                    </Col>
                </Row>

            </Container>
    );
}

export default RandomPassword;