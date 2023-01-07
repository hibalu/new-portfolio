import React from "react";
import "./skills.css";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Skills = () => {
const arr =[
  {
    id:1,
    title:"HTML"
  },
  {
    id:2,
    title:"CSS"
  },
  {
    id:3,
    title:"BOOTSTRAP"
  },
  {
    id:4,
    title:"JAVA SCRIPT"
  },
  {
    id:4,
    title:"REACT>JS"
  }
]
  return (
    <div>
      <Navbar />

      <div className="mdbcards">
        <div className="mdbcard1">
          <MDBCard>
            <MDBCardBody>
              <MDBCardText></MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="mdbcard2">
          <MDBCard>
            <MDBCardBody>
              <MDBCardText></MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="mdbcard3">
          <MDBCard>
            <MDBCardBody>
              <MDBCardText></MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="mdbcard4">
          <MDBCard>
            <MDBCardBody>
              <MDBCardText></MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="mdbcard5">
          <MDBCard>
            <MDBCardBody>
              <MDBCardText></MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div>
        {
          arr.map(
            (value) => <li key={value.id}>{value.title}</li>
          )
        }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
