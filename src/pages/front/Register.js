import Logo from "../../assets/basma-logo.svg";

import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  UncontrolledAlert,
} from "reactstrap";
// import { Redirect } from "react-router-dom";

export default function Register(props) {
  const [errors, setErrors] = useState(false);
  const [state, setValue] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  function setState(nextState) {
    // console.log(nextState)
    setValue((prevState) => ({
      ...prevState,
      ...nextState,
    }));
    console.log(state);
  }

  function handleChange(e) {
    let { name, value } = e.target;

    setState({ [name]: value });
  }

  async function handleSubmit(e) {
    e.nativeEvent.preventDefault();
    console.log(process.env.REACT_APP_URL)
    const response = await fetch(
      `${process.env.REACT_APP_URL}/api/customer/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          //Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          ...state,
        }),
      }
    );
    const result = await response.json();
    // console.log(result);
    if (result.success) {
      setErrors(result);

      props.history.push("/home");
    } else {
      setErrors(result.errors);
    }
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
        <Form onSubmit={handleSubmit}>
          <div className="text-center pb-4">
            <img
              src={Logo}
              className="rounded"
              style={{ width: 150, height: 100, cursor: "pointer" }}
              alt="logo"
            />
          </div>

          <div className="text-center pb-4">
           <h4><strong>Register Your Information</strong></h4>
          </div>

          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="name"
              name="name"
              onChange={handleChange}
              placeholder="Name"
            />
          </FormGroup>
          {errors.name ? (
            <UncontrolledAlert color="danger">{errors.name} </UncontrolledAlert>
          ) : (
            ""
          )}

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </FormGroup>
          {errors.email ? (
            <UncontrolledAlert color="danger">
              {errors.email}{" "}
            </UncontrolledAlert>
          ) : (
            ""
          )}

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </FormGroup>
          {errors.password ? (
            <UncontrolledAlert color="danger">
              {errors.password}{" "}
            </UncontrolledAlert>
          ) : (
            ""
          )}

          <FormGroup>
            <Label for="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              onChange={handleChange}
              placeholder="Phone Number minimum 8 digits "
            />
          </FormGroup>
          {errors.phone ? (
            <UncontrolledAlert color="danger">
              {errors.phone}{" "}
            </UncontrolledAlert>
          ) : (
            ""
          )}

          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Your Address"
            />
          </FormGroup>
          {errors.address ? (
            <UncontrolledAlert color="danger">
              {errors.address}{" "}
            </UncontrolledAlert>
          ) : (
            ""
          )}

          <hr />
          <Button
            size="lg"
            style={{ marginLeft: "34%" }}
            className="border-0 bg-primary"
            block
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
