import React from "react";
// reactstrap components
import { Card, CardBody, Container } from "reactstrap";
import { questions } from "../data/questionsData";
import { answers } from "views/data/answersData";
import Question from "components/Question/Question";
import Answer from "components/Answer/Answer";
import Comment from "components/Comment/Comment";
const Discussions = () => {
  return (
    <>
      <Container fluid>
        <Card className="shadow border-0 mb-3">
          <CardBody className="px-lg-5 py-lg-5">
            <Question data={questions[0]} />
          </CardBody>
        </Card>
        <Container>
          <Comment body="Seome comment big one"/>
        </Container>
        <h1>Answers</h1>
        <Card className="shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Answer data={answers[0]} />
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Discussions;
