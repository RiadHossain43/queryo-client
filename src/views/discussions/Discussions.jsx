import React, { useEffect, useState } from "react";
// reactstrap components
import { Row, Col, Button, Card, CardBody, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Question from "components/Question/Question";
import Answer from "components/Answer/Answer";
import Comment from "components/Comment/Comment";
import { getPost, getPostAnswers } from "services/postServices";
import { getUser } from "services/userServices";
import { getCommentsByPost } from "services/commentServices";
const Discussions = (props) => {
  let { id } = props.match.params;
  let [post, setPost] = useState(null);
  let [postAnswers, setPostAnswers] = useState([]);
  let [comments, setComments] = useState([]);
  let [author, setAuthor] = useState(null);
  useEffect(() => {
    async function _getPost() {
      let { data } = await getPost(id);
      setPost(data);
    }
    async function _getPostAnswers() {
      let { data } = await getPostAnswers(id);
      setPostAnswers(data);
    }
    _getPost();
    _getPostAnswers();
  }, [id]);
  useEffect(() => {
    async function _getUser(id) {
      let { data } = await getUser(id);
      setAuthor(data);
    }
    post && _getUser(post.createdBy);
  }, [post]);
  useEffect(() => {
    async function _getCommentsByPost(id) {
      let { data } = await getCommentsByPost(id);
      setComments(data.reverse());
    }
    post && _getCommentsByPost(post.id);
  }, [post]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6"></Col>
          <Col md="6">
            <p className="text-md-right text-bold">
              <Link to={`/admin/ans/${id}`}>
                <Button color="primary">Answer this question</Button>
              </Link>
            </p>
          </Col>
        </Row>
        <Card className="shadow border-0 mb-3">
          <CardBody className="px-lg-5 py-lg-5">
            {post && author && (
              <Question
                data={post}
                metaInfo={{
                  askedAt: post?.createdDate,
                  userName: author?.name,
                }}
              />
            )}
          </CardBody>
        </Card>
        <Container>
          <Row>
            <Col md="6"></Col>
            <Col md="6">
              <p className="text-md-right text-bold">
                <Link to={`/admin/comment/post/${id}`}>
                  <Button size="sm" className="btn-link">
                    Add a comment
                  </Button>
                </Link>
              </p>
            </Col>
          </Row>
          {comments.map((comment) => (
            <Comment key={comment.id} body={comment.body} />
          ))}
        </Container>
        <h2 className="text-bold my-3">Answers</h2>
        {postAnswers.map((answer) => (
          <Card key={answer.id} className="shadow border-0 mb-3">
            <CardBody className="px-lg-5 py-lg-5">
              <Answer data={answer} />
            </CardBody>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Discussions;
