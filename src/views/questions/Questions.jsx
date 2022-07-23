import React, { useEffect, useState } from "react";
// reactstrap components
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  Row,
  Col,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { getPosts } from "services/postServices";
const Questions = () => {
  let [posts, setPosts] = useState([]);
  async function _getPosts() {
    let { data } = await getPosts();
    setPosts(data.reverse());
  }
  useEffect(() => {
    _getPosts();
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <h1>All questions</h1>
          </Col>
          <Col md="6">
            <p className="text-md-right text-bold">
              <Link to="/admin/ask">
                <Button color="primary">Ask a question ?</Button>
              </Link>
            </p>
          </Col>
        </Row>
        {posts.map((question) => (
          <Card key={question?.id} className="shadow mb-3">
            <CardBody>
              <CardTitle>
                <Link to={`/admin/questions/${question?.id}`}>
                  {question?.title.slice(0, 100)}...
                </Link>
              </CardTitle>
              <CardText>{question?.body.slice(0, 100)}...</CardText>
              <CardText>
                {question?.tags?.map((tag) => (
                  <small key={tag}>
                    <Badge color="light" className="mr-1">
                      {tag}
                    </Badge>
                  </small>
                ))}
              </CardText>
              <CardText>
                <small className="text-bold mr-3">
                  {question?.upVote - question?.downVote} Votes
                </small>
                <small className="text-success mr-3">
                  {question?.answers} Answers
                </small>
                <small className="text-warning mr-3">
                  {question?.views} Views{" "}
                </small>
              </CardText>
            </CardBody>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Questions;
