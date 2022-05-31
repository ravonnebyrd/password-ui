
import { Container } from 'react-bootstrap';
import './App.css';
import PasswordStrength from './components/PasswordStrength';
import CustomizedPassword from './components/CustomizedPassword';
import RandomPassword from './components/RandomPassword';
import RandomPassphrase from './components/RandomPassphrase';
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
                    <h1>Username & Password Generator</h1>
                </Col>
            </Row>
        </Container>

        <br></br>

        <Container>

            <Row>
                <Col>
                    <RandomUsername />
                </Col>
            </Row>

            <br></br>

            <Row>
                <Col>
                    <RandomPassword />
                </Col>
            </Row>
            <br></br>

            <Row>
                <Col>
                    <RandomPassphrase />
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
                    <PasswordStrength />
                </Col>
            </Row>

        </Container>
    </div>
  );
}

export default App;
