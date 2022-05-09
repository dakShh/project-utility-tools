import React from 'react'
import { Form, Button } from "react-bootstrap"
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Auth = () => {
  const SignupSchema = yup.object().shape({
    email: yup.string().email().required("chahiye muje"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });

  const onSubmit = (data) => {
    console.log("submit data", data)
  }
  console.log("errors", errors)
  return (
    <div className="auth-container">
      <h1 className="w-100 text-center " style={{ fontWeight: "bold" }}>
        <strong>
          LOGIN
        </strong>
      </h1>
      <form className="w-100 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex flex-column" >
          <Form.Label>Email address</Form.Label>
          <input
            {...register("email")}
            type="text"
            placeholder="Email"
            className="tinput"
            autoComplete="off"
          />
          {/* <span className="custom-muted-text">
            We'll never share your email with anyone else.
          </span> */}
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column" >
          <Form.Label>Password</Form.Label>
          <input {...register("password")} type="text" placeholder="Password" className="tinput" />

        </Form.Group>
        <div className="d-flex justify-content-between">
          <p className="custom-muted-text font-italic">
            Don't have an account ?
          </p>
          <p className="custom-muted-text font-italic " style={{ fontSize: "14px" }}>
            Sign up
          </p>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div >
  )
}

export default Auth
