import React from "react";
import { Button, FormGroup, Form, Input, InputGroup, Label } from "reactstrap";

const InputArea = ({ dataModel, handleChange, handleSubmit, options }) => {
  return (
    <Form role="form">
      {!options?.hideTitle && (
        <FormGroup className="mb-3">
          <Label for="question-title">Title</Label>
          <InputGroup className="input-group-alternative">
            <Input
              id="question-title"
              placeholder="Be specific and imagine you’re asking a question to another person"
              type="text"
              value={dataModel?.data?.title}
              onChange={(e) =>
                handleChange({
                  key: "title",
                  value: e.currentTarget.value,
                })
              }
            />
          </InputGroup>
        </FormGroup>
      )}
      <FormGroup>
        <Label for="question-description">Body</Label>
        <InputGroup className="input-group-alternative">
          <Input
            id="question-description"
            placeholder="Include all the information someone would need to answer your question"
            type="textarea"
            rows="15"
            value={dataModel?.data?.body}
            onChange={(e) =>
              handleChange({
                key: "body",
                value: e.currentTarget.value,
              })
            }
          />
        </InputGroup>
      </FormGroup>
      <div className="text-right">
        <Button
          className="my-4"
          color="primary"
          type="button"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </div>
    </Form>
  );
};

export default InputArea;
