import { useState } from 'react';
import './App.css';
import NavBar from './Navbar';
import NavbarActive from './NavbarActive'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)


  function handleSubmit(event) {
    event.preventDefault();
    setLoggedIn(true)
  }

  return (
    <div className="App">
      {loggedIn ? (<NavbarActive />) : (<NavBar />)}

      <Form style={{ maxWidth: "500px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={(e) => {
          e.preventDefault();
          setLoggedIn(true)
        }}>
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default App;
