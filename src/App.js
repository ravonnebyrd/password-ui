
import { Container } from 'react-bootstrap';
import './App.css';
import CustomizedPassword from './components/CustomizedPassword';
import RandomPassword from './components/RandomPassword';
import RandomUsername from './components/RandomUsername';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">

        <br></br>
        <br></br>

        <Container>
            <Row>
                <Col className='text-center title-pw'>
                    <h1>Password Generator</h1>
                </Col>
            </Row>
        </Container>

        <br></br>

        <Container>
            <Row>
                <Col>
                        <RandomPassword />
                </Col>
            </Row>
        
            <br></br>

            <Row>
                <Col>
                    <CustomizedPassword />
                </Col>
            </Row>

            <br></br>

            <Row>
                <Col>
                    <RandomUsername />
                </Col>
            </Row>

        </Container>
    </div>
  );
}

export default App;
