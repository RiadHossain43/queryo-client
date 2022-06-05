import Avatar from "components/Avatar/Avatar";
import ReactMarkdown from "react-markdown";
import { Button, Card, CardBody, CardText } from "reactstrap";
import PropTypes from "prop-types";
const Comment = ({ body }) => {
  return (
    <Card className="bg-transparent shadow border-0">
      <CardBody>
        <Avatar
          imageSrc="..."
          avatarDisabled={true}
          userName="Riad Hossain"
          actionAt="12 Jul, 2022"
        />
        <small>
          <ReactMarkdown children={body} />
        </small>
        <CardText>
          <Button size="sm" className="btn-link">
            <i className="ni ni-bold-up" /> 12k
          </Button>
          <Button size="sm" className="btn-link">
            <i className="fas fa-flag" />
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
};
Comment.propTypes = {
  body: PropTypes.string,
};

export default Comment;
