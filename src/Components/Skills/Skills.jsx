import React from 'react'
import './skills.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
 
} from 'mdb-react-ui-kit';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Skills = () => {
  return (
    <div >
      <Navbar/>

      <div className="mdbcards">
        <div className="mdbcard1">
        <MDBCard>
      <MDBCardBody>
        <MDBCardText>
          
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="mdbcard2">
        <MDBCard>
     
      <MDBCardBody>

        <MDBCardText>
        
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="mdbcard3">
        <MDBCard>
      <MDBCardBody>
        <MDBCardText>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="mdbcard4">
        <MDBCard>
      <MDBCardBody>
        <MDBCardText>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className="mdbcard5">
        <MDBCard>
      <MDBCardBody>
        <MDBCardText>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
        </div>
    </div>
    <Footer/>
  
   </div>
  );
}

export default Skills