import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function RandomPassphrase(){
    
    // state
    let [number, setNumber] = useState(0);

    let [password, setPassword] = useState('');
    let [copyPassword, setCopyPassword] = useState(false);

    const getRandomPassphrase = async (event) => {

        event.preventDefault();

        if (number === 0){
            alert('Plese select a length.');
            return;
        }

        const request = {number}

        const response = await fetch('https://password-server.herokuapp.com/password/passphrase', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(request),
            headers: {'Content-Type': 'application/json',}
        });

        if (response.status === 200){
            const responseCPW = await response.json();
            setPassword(responseCPW);

        } else {
            alert('Recieved response code: ' + response.status);
        }

        // clear values
        setNumber(0);
        
    }


    const clear = (event) => {

        event.preventDefault();

        setPassword('');

        // clear values
        setNumber(0);
        setCopyPassword(false);
    }

    return(
        <Container className='custom'>
            <Row>
                <Col className='text-center'>
                    <h3>Random Passphrase</h3>
                </Col>
            </Row>

            <Row>
                <Col className='text-center'>
                    <h5>Choose this option if you want a passphrase, of certain word length.</h5>
                </Col>
            </Row>

            <br></br>

            <Form onSubmit={getRandomPassphrase}>
                <Row className='d-flex justify-content-center'>
                
                    <Col lg={3} >
                        <Form.Group  controlId="length">
                            <Form.Label>Words</Form.Label>
                            <Form.Control type="number" placeholder="Enter length"  value={number} min={0} onChange={e => setNumber(e.target.value)}/>
                            <Form.Text className="text-muted">
                                Required.
                            </Form.Text>
                        </Form.Group>
                    </Col>
        
                </Row>

                <br></br>
                
                <Row>
                    <Col className='d-flex justify-content-center'>
                        <Stack direction="horizontal" gap={3}>
                            <Button size="sm" variant="outline-primary" type="submit" onClick={getRandomPassphrase}>
                                Get Random Passphrase
                            </Button>


                            <Button size="sm" variant="outline-secondary" type="submit" onClick={e => clear(e)}>
                                Clear Password & Options
                            </Button>

                            {password.password ? 
                            <CopyToClipboard text={password.password} onCopy={() => setCopyPassword(true)}>
                                <Button size="sm" variant="outline-success">
                                    Copy Password
                                </Button>
                            </CopyToClipboard> : 
                            <CopyToClipboard text={password.password} onCopy={() => setCopyPassword(true)} disabled>
                            <Button size="sm" variant="outline-success">
                                Copy Password
                            </Button>
                            </CopyToClipboard>}
                        </Stack>
                    </Col>
                </Row>
            </Form>

            <br></br>

            <Row>
                <Col className='text-center'>
                    <p>New Password Here: &nbsp; <span>{password.password}</span>{copyPassword ? <span style={{color: 'green'}}>&nbsp; Copied.</span> : null}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default RandomPassphrase;