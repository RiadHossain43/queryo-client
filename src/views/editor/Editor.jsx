import useForm from "hooks/useForm";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import InputArea from "./InputArea";
import Preview from "./Preview";
import { defaultEditorDataSet } from "./utils/data";
const Editor = () => {
  let { dataModel, handleChange } = useForm(defaultEditorDataSet);
  return (
    <>
      <Col lg="12 mb-3">
        <Card className="shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="mb-4">
              <big>Preview question</big>
            </div>
            <Preview data={dataModel?.data} />
          </CardBody>
        </Card>
      </Col>
      <Col lg="12">
        <Card className="shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="mb-4">
              <big>Ask your question</big>
            </div>
            <InputArea handleChange={handleChange} />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Editor;
