import { useState } from 'react';
import  Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function PasswordStrength(){
    
    let [password, setPassword] = useState('');
    let [strength, setStrength] = useState('');

    const getStrength = () => {
        
        if (password.length > 15) {
            setStrength('strong');
        } else {
            setStrength('weak');
        }
    }

    const clear = () => {
        setPassword('');
        setStrength('');
    }

    return(
        <Container className='random'>
            <Row>
                    <Col className='text-center'>
                        <h3>Strength Check</h3>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center'>
                        <h5>Use this option if you want to check the strength of a password.</h5>
                    </Col>
                </Row>

                <br></br>

                <Form onSubmit={getStrength}>
                    <Row className='d-flex justify-content-center'>
                    
                        <Col lg={6} >
                            <Form.Group  controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" placeholder="Enter password"  value={password} min={0} onChange={e => setPassword(e.target.value)}/>
                                <Form.Text className="text-muted">
                                    Required.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <Row>
                    <Col className='d-flex justify-content-center'>

                        <Stack direction="horizontal" gap={3}>
                            <Button size="sm" variant="outline-primary" type="submit" onClick={getStrength}>
                                Get Strength
                            </Button>

                        

                            <Button size="sm" variant="outline-secondary" type="submit" onClick={clear}>
                                Clear Password
                            </Button>
                            
                        </Stack>
                    </Col>
                </Row>

                <br></br>
                
                <Row>
                    <Col className='text-center'>
                        <p>Strength: &nbsp; {strength} </p>
                        
                    </Col>
                </Row>

            </Container>
    );
}

export default PasswordStrength;