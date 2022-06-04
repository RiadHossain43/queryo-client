import React from "react";
// reactstrap components
import { Card, CardBody, Container } from "reactstrap";
import { questions } from "./questions";
import Question from "components/Question/Question";
const QuestionDetails = () => {
  return (
    <>
      <Container fluid>
        <Card className="shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Question data={questions[0]} />
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default QuestionDetails;
