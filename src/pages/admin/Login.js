import Logo from "../../assets/basma-logo.svg";

import React from "react"; 
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import UncontrolledAlert from "reactstrap/lib/UncontrolledAlert";
import { useContext, useState } from "react";
import SessionContext from "../../components/session/SessionContext";

export default function LoginAdmin() {
  const {
    actions: { login },
  } = useContext(SessionContext);

  const [state, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  function setState(nextState) {
    // console.log(nextState)
    setValue((prevState) => ({
      ...prevState,
      ...nextState,
      
    }));
    console.log(state)
  }

  function handleChange(e) {
    let { name, value } = e.target;

    setState({ [name]: value });
  }

  async function handleSubmit(e) {
    e.nativeEvent.preventDefault();
    login(state);
  }

  return (

      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "30vw",
            margin: "100px 33% 100px auto ",
            border: "solid 1px black",
            padding: "50px 50px",
          }}
        >
          {/* {login.errors && (
            <UncontrolledAlert color="warning">
              {login.errors}{" "}
            </UncontrolledAlert>
          )} */}
          <Form onSubmit={handleSubmit}>
            <div className="text-center pb-4">
              <img
                src={Logo}
                className="rounded"
                style={{ width: 150, height: 100, cursor: "pointer" }}
                alt="logo"
              />
            </div>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Are You An Admin?"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </FormGroup>

            <hr />
            <Button
              size="lg"
              style={{ marginLeft: "34%" }}
              className="border-0 bg-primary"
              block
              type='submit'
            >
              LOGIN
            </Button>

            <div className="text-center pt-5">
              <h6>ADMIN</h6>
            </div>
          </Form>
        </div>
      </div>
  );
}

