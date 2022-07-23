import React from "react";
import { Card, CardBody, Container } from "reactstrap";
import InputArea from "./InputArea";
import Preview from "./Preview";
const Editor = (props) => {
  return (
    <Container>
      <Card className="shadow border-0 mb-3">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="mb-4">
            <big>{props.editorTitle}</big>
          </div>
          <InputArea
            options={props.options}
            dataModel={props.dataModel}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
        </CardBody>
      </Card>
      <Card className="shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <div className="mb-4">
            <big>{props.previewTitle}</big>
          </div>
          <Preview data={props?.dataModel?.data} />
        </CardBody>
      </Card>
    </Container>
  );
};

export default Editor;
