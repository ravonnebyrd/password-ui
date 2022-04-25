import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

/* 
    Citation: https://github.com/jasoncartera/writersblock_cs340/blob/main/ui/src/components/readers/InsertReader.js
    Accessed: 4-21-2022

    Citation: https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
    Accessed: 4-22-2022

    Citation: https://codesandbox.io/s/react-checkbox-component-functional-component-lh9v8?file=/src/index.js
    Accessed: 4-22-2022
*/
function CustomizedPassword(){
    
    // state
    let [length, setLength] = useState(0);
    let [symbols, setSymbols] = useState(false);
    let [uppercase, setUppercase] = useState(false);
    let [lowercase, setLowercase] = useState(false);
    let [numbers, setNumbers] = useState(false);
    let [customPassword, setCustomPassword] = useState('');

    const [checkedSymbols, setCheckedSymbols] = useState(false);
    const [checkedUppercase, setCheckedUppercase] = useState(false);
    const [checkedLowercase, setCheckedLowercase] = useState(false);
    const [checkedNumbers, setCheckedNumbers] = useState(false);

    // Updating checkboxes
    const updateSymbols = (e) => {

        setCheckedSymbols(!checkedSymbols);
        setSymbols(!symbols);
        
    }

    const updateUppercase = (e) => {

        setCheckedUppercase(!checkedUppercase);
        setUppercase(!uppercase);
        
    }

    const updateLowercase = (e) => {

        setCheckedLowercase(!checkedLowercase);
        setLowercase(!lowercase);
        
    }

    const updateNumbers = (e) => {

        setCheckedNumbers(!checkedNumbers);
        setNumbers(!numbers);
        
    }


    const getCustomPassword = async (event) => {

        event.preventDefault();

        if (length === 0){
            alert('Please select a length');
            return; 
        }

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

        } else {
            alert('Recieved response code: ' + response.status);
        }

        // clear values
        setLength(0);
        setSymbols(false);
        setUppercase(false);
        setLowercase(false);
        setNumbers(false);
        
        setCheckedSymbols(false);
        setCheckedUppercase(false);
        setCheckedLowercase(false);
        setCheckedNumbers(false);
        
    }


    const clear = (event) => {

        event.preventDefault();

        setCustomPassword('');

        // clear values
        setLength(0);
        setSymbols(false);
        setUppercase(false);
        setLowercase(false);
        setNumbers(false);
        
        setCheckedSymbols(false);
        setCheckedUppercase(false);
        setCheckedLowercase(false);
        setCheckedNumbers(false);
    }

    return(
        <>
            <Row>
                <Col>
                    <h2>Custom Password</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3>Choose this option if you want a customized password, of certain length and types of characters.</h3>
                </Col>
            </Row>
            <Row>
                <Container>

                    <Form onSubmit={getCustomPassword}>
                        <Form.Group controlId="length">
                            <Form.Label>Length</Form.Label>
                            <Form.Control type="number" placeholder="Enter length"  value={length} min={0} onChange={e => setLength(e.target.value)}/>
                            <Form.Text className="text-muted">
                                Required.
                            </Form.Text>
                        </Form.Group>

                        <br></br>

                        <Form.Group controlId="checkboxes">
                            <Form.Switch inline size="lg" label="Symbols" value={symbols} checked={checkedSymbols} onChange={e => updateSymbols(e)}/>
                            <Form.Switch inline size="lg" label="Lowercase" value={lowercase} checked={checkedLowercase} onChange={e => updateLowercase(e)}/>
                            <Form.Switch inline size="lg" label="Uppercase" value={uppercase} checked={checkedUppercase} onChange={e => updateUppercase(e)}/>
                            <Form.Switch inline size="lg"label="Numbers" value={numbers} checked={checkedNumbers} onChange={e => updateNumbers(e)}/>
                            <br></br>
                            <Form.Text className="text-muted">
                                Please select at least one (1) switch option. 
                            </Form.Text>
                        </Form.Group>

                        <br></br>

                        <Stack direction="horizontal" gap={3}>
                            <Button size="sm" variant="outline-primary" type="submit" onClick={getCustomPassword}>
                                Get Custom Password
                            </Button>


                            <Button size="sm" variant="outline-secondary" type="submit" onClick={e => clear(e)}>
                                Clear Password & Options
                            </Button>
                        </Stack>

                    </Form>

                </Container>
            </Row>

            <br></br>
            
            <Row>
                <Col>
                    <p><span>{customPassword.password}</span></p>
                </Col>
            </Row>
        </>
    );
}

export default CustomizedPassword;