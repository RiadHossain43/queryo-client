import useForm from "hooks/useForm";
import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, CardBody } from "reactstrap";
import { getAccessTokenData } from "services/authServices";
import { createComment } from "services/commentServices";
import Editor from "views/editor/Editor";
import { defaultEditorDataSet } from "./utils/data";
const Comment = (props) => {
  let { dataModel, handleChange, handleSubmit } = useForm(defaultEditorDataSet);
  let history = useHistory();
  async function _createComment() {
    try {
      await createComment({
        postId: props.match.params.id,
        ...dataModel.data,
      });
      alert("Commentwer added successfully");
      history.goBack();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      {getAccessTokenData() ? (
        <Editor
          options={{ hideTitle: true }}
          editorTitle="Comment a qustion"
          previewTitle="Preview question"
          dataModel={dataModel}
          handleChange={handleChange}
          handleSubmit={(e) => handleSubmit(e, _createComment)}
        />
      ) : (
        <Container>
          <Card className="shadow border-0 mb-3">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="mb-4">
                <p className="text-center">Please login to post a comment</p>
              </div>
            </CardBody>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Comment;
