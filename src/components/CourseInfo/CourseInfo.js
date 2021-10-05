import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./CourseInfo.css";

const CourseInfo = (props) => {
  const { name, img, fee, duration, prerequsite } = props.course;
  return (
    <>
      <div className="my-3 ">
        <CardGroup className="cards mt-2 mx-auto" style={{ width: "25rem" }}>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={img} />
              <Card.Title>{name}</Card.Title>
              <Card.Text>Duration: {duration}</Card.Text>
              <Card.Text>Prerequsite: {prerequsite}</Card.Text>
              <Card.Text>Fee: {fee}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" size="lg">
                Enroll Now
              </Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};
export default CourseInfo;
