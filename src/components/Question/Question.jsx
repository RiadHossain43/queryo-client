import React from "react";
import { Button, Col, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

const Question = ({ data, votes }) => {
  return (
    <>
      <Row>
        <Col md="1">
          <Button
            disabled={votes.upButton.disabled}
            onClick={votes.upButton.onUpVote}
            size="sm"
            className="btn-link"
          >
            <i className="ni ni-bold-up" />
          </Button>
          <p className="mx-1 m-0">
            <small className="text-center">{votes?.count}</small>
          </p>
          <Button
            disabled={votes.upButton.disabled}
            onClick={votes.upButton.onDownVote}
            size="sm"
            className="btn-link"
          >
            <i className="ni ni-bold-down" />
          </Button>
        </Col>
        <Col md="11">
          <h1 className="text-bold">{data?.title}</h1>
        </Col>
      </Row>
      <ReactMarkdown children={data?.body} />
    </>
  );
};
Question.defaultProps = {
  votes: {
    count: 0,
    upButton: {
      disabled: true,
      onUpVote: () => {},
    },
    downButton: {
      disabled: true,
      onDownVote: () => {},
    },
  },
};

Question.propTypes = {
  votes: PropTypes.shape({
    count: PropTypes.string.isRequired,
    upButton: PropTypes.shape({
      disabled: PropTypes.bool,
      onUpVote: PropTypes.func,
    }),
    downButton: PropTypes.shape({
      disabled: PropTypes.bool,
      onDownVote: PropTypes.func,
    }),
  }),
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default Question;
