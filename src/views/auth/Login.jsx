import useForm from "hooks/useForm";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import { login } from "services/authServices";
import { defaultAuthDataSet } from "./utils/data";
const Login = () => {
  let { dataModel, handleChange, handleSubmit } = useForm(defaultAuthDataSet);
  let history = useHistory();
  async function _login() {
    await login(dataModel.data);
    history.push("/admin/questions");
  }
  return (
    <>
      <Col lg="4" md="7">
        <Card className="shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="off"
                    id="email"
                    onChange={(e) =>
                      handleChange({
                        key: "email",
                        value: e.currentTarget.value,
                      })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="off"
                    id="password"
                    onChange={(e) =>
                      handleChange({
                        key: "password",
                        value: e.currentTarget.value,
                      })
                    }
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button
                  className="btn-block my-5"
                  color="primary"
                  type="button"
                  onClick={(e) => handleSubmit(e, _login)}
                >
                  Sign in
                </Button>
              </div>
              <Link className="btn-link" to={"/auth/register"}>
                <Button className="btn-link" size="sm">Create an account</Button>
              </Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
