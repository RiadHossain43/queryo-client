import useForm from "hooks/useForm";
import React from "react";
import { useHistory } from "react-router-dom";
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
import { createUser } from "services/userServices";
const Register = () => {
  let { dataModel, handleChange, handleSubmit } = useForm({
    data: {
      name: "",
      email: "",
      password: "",
    },
  });
  let history = useHistory();
  async function _register() {
    try {
      await createUser(dataModel.data);
      alert("User created");
      history.push("/admin/questions");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Col lg="4" md="7">
        <Card className="shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign up as a user</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-user-run" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name"
                    type="text"
                    autoComplete="new-username"
                    id="name"
                    onChange={(e) =>
                      handleChange({
                        key: "name",
                        value: e.currentTarget.value,
                      })
                    }
                  />
                </InputGroup>
              </FormGroup>
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
                    autoComplete="new-email"
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
                    autoComplete="new-password"
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
                  onClick={(e) => handleSubmit(e, _register)}
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
