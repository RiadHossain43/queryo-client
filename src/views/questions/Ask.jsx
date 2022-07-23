import useForm from "hooks/useForm";
import React from "react";
import { Container, Card, CardBody } from "reactstrap";
import { getAccessTokenData } from "services/authServices";
import { createPost } from "services/postServices";
import Editor from "views/editor/Editor";
import { defaultEditorDataSet } from "./utils/data";
const Ask = (props) => {
  let { dataModel, handleChange, handleSubmit, resetForm } =
    useForm(defaultEditorDataSet);
  async function _createPost() {
    try {
      await createPost(dataModel.data);
      alert("Question added successfully");
      resetForm();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      {getAccessTokenData() ? (
        <Editor
          editorTitle="Ask a qustion"
          previewTitle="Preview question"
          dataModel={dataModel}
          handleChange={handleChange}
          handleSubmit={(e) => handleSubmit(e, _createPost)}
        />
      ) : (
        <Container>
          <Card className="shadow border-0 mb-3">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="mb-4">
                <p className="text-center">Please login to ask a question</p>
              </div>
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Ask;
