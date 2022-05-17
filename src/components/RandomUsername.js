import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function RandomUsername(){
    
    let [randomUsername, setRandomUsername] = useState('');
    let [copyUsername, setCopyUsername] = useState(false);

    const getRandomPassword = async () => {
        const response = await fetch(' https://password-server.herokuapp.com/password/username');
        const responseUN= await response.json();
        
        setRandomUsername(responseUN);
    }

    const clear = () => {
        setRandomUsername('');
        setCopyUsername(false);
    }

    return(
        <Container className='random'>
            <Row>
                    <Col className='text-center'>
                        <h3>Random Username</h3>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center'>
                        <h5>Choose this option if you want a randomly generated username.</h5>
                    </Col>
                </Row>

                <br></br>

                <Row>
                    <Col className='d-flex justify-content-center'>

                        <Stack direction="horizontal" gap={3}>
                            <Button size="sm" variant="outline-primary" type="submit" onClick={getRandomPassword}>
                                Get Random Username
                            </Button>

                        

                            <Button size="sm" variant="outline-secondary" type="submit" onClick={clear}>
                                Clear Username
                            </Button>

                            {randomUsername.username ? 
                            <CopyToClipboard text={randomUsername.username} onCopy={() => setCopyUsername(true)}>
                                <Button size="sm" variant="outline-success">
                                    Copy Username
                                </Button>
                            </CopyToClipboard> : 
                            <CopyToClipboard text={randomUsername.username} onCopy={() => setCopyUsername(true)} disabled>
                            <Button size="sm" variant="outline-success">
                                Copy Username
                            </Button>
                            </CopyToClipboard>}
                            
                        </Stack>
                    </Col>
                </Row>

                <br></br>
                
                <Row>
                    <Col className='text-center'>
                        <p>New Username Here: &nbsp; <span>{randomUsername.username}</span>{copyUsername ? <span style={{color: 'green'}}>&nbsp; Copied.</span> : null}</p>
                        
                    </Col>
                </Row>

            </Container>
    );
}

export default RandomUsername;