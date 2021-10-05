import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./TeacherProfile.css";

const TeacherProfile = (props) => {
  const { Name, img, Subject, Skill, Topic } = props.teacher;
  return (
    <>
      <div className="my-3 ">
        <CardGroup className="cards mt-2 mx-auto" style={{ width: "25rem" }}>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={img} />
              <Card.Title>{Name}</Card.Title>
              <Card.Text>Subject: {Subject}</Card.Text>
              <Card.Text>Skill: {Skill}</Card.Text>
              <Card.Text>Topic: {Topic}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};
export default TeacherProfile;
