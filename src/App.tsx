import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  ThemeProvider,
} from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <>
          <style type='text/css'>
            {`
    .input {
      margin: 10px;
    }

    .btn-login {
      background-color: #4caf50
      ;
      color: white;
    }
    .btn-logout {
      background-color: #43a047
      ;
      color: white;
    }
    .btn-available {
      background-color: #ffc107;
      color: white;
    }
    .btn-upcoming {
      background-color: #ffb300;
      color: white;
    }
    .btn-kitchen {
      background-color: #fb8c00;
      margin: 10px;
      color: white;
    }
    .btn-upcomingEvents {
      background-color: #ef6c00;
      color: white;
    }
    .btn-more {
      background-color: #e65100

      ;
      color: white;
    }

    .xxl {
      padding: 3rem 4.5rem;
      font-size: 3rem;
    }
    `}
          </style>
        </>
        <ThemeProvider breakpoints={['xs', 'sm', 'md', 'lg', 'xl', 'xxl']}>
          <Container>
            <Row>
              <Col>
                <img
                  src='https://res.cloudinary.com/dgaobrwxs/image/upload/v1646408765/lzONMPVBa8DrhJhd6RE7fpduEchfea-removebg-preview_q20jwx.png'
                  alt='logo'
                  className='App-logo'
                />
              </Col>
            </Row>
            <Row>
              <h1>Time Watch</h1>
              <Col>
                <div className='d-grid gap-2'>
                  <Button variant='login' className='xxl'>
                    Log In
                  </Button>
                </div>
              </Col>
              <br />
              <Col>
                <div className='d-grid gap-2'>
                  <Button variant='logout' className='xxl'>
                    Log Out
                  </Button>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <input
                className='input'
                type='text'
                value='Time plus/minus and days to go'
              />
            </Row>
            <br />
            <Row>
              <h1>Vacation Days</h1>
              <Col>
                <div className='d-grid gap-2'>
                  <Button variant='available' className='xxl'>
                    Available
                  </Button>
                </div>
              </Col>
              <Col>
                <div className='d-grid gap-2'>
                  <Button variant='upcoming' className='xxl'>
                    Upcoming
                  </Button>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Button variant='kitchen' className='xxl'>
                Request For Kitchen
              </Button>
            </Row>
            <br />
            <Row>
              <h1>Events</h1>
              <Col>
                <div className='d-grid gap-2'>
                  <Button variant='upcomingEvents' className='xxl'>
                    Upcoming Events
                  </Button>{' '}
                </div>
              </Col>
              <Col>
                <div className='d-grid gap-2'>
                  <Button variant='more' className='xxl'>
                    ...
                  </Button>
                </div>
              </Col>
            </Row>
            <br />
          </Container>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
