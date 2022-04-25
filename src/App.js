
import { Container } from 'react-bootstrap';
import './App.css';
import CustomizedPassword from './components/CustomizedPassword';
import RandomPassword from './components/RandomPassword';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
        <Container>
            <Row>
                <Col>
                    <h1>Password Generator</h1>
                </Col>
            </Row>
        </Container>

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

        </Container>
    </div>
  );
}

export default App;
