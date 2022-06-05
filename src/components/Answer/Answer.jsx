import React from "react";
import { Col, Row } from "reactstrap";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import MetaInfo from "components/MetaInfo/MetaInfo";
import Vote from "components/Vote/Vote";

const Answer = ({ data, votes }) => {
  return (
    <>
      <Row>
        <Col md="1">
          <Vote votes={votes} />
          <p className="m-2 text-success">
            <i className="ni ni-check-bold"></i>
          </p>
        </Col>
        <Col md="11">
          <ReactMarkdown children={data?.body} />
        </Col>
      </Row>
      <hr />
      <MetaInfo />
    </>
  );
};
Answer.defaultProps = {
  votes: {
    count: 0,
    upButton: {
      disabled: false,
      onUpVote: () => {},
    },
    downButton: {
      disabled: false,
      onDownVote: () => {},
    },
  },
};

Answer.propTypes = {
  votes: PropTypes.shape({
    count: PropTypes.number.isRequired,
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
    body: PropTypes.string.isRequired,
  }),
  isAccepted: PropTypes.bool,
};

export default Answer;
