import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import AddComment from "./AddComment"; /* aggiunto AddComment ma non riesco a renderizzarlo */

const CommentList = ({ comments }) => {
  return (
    <ListGroup className="my-4"> 
      <h4>Recensioni</h4>
      {comments.slice(0, 10).map((comment, id) => (
        <ListGroup.Item key={id}>
          <p className="mb-0">{comment.comment}</p>
          <small>
            Valutazione:{" "}
            <Badge bg="info" className="mx-1">
              {comment.rate}
            </Badge>
          </small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;


