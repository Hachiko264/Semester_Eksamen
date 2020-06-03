import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Contact() {
    return (
        <>
            <Heading title="CONTACT" />
 
			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/bio02.jpg')} alt="Logo design" fluid /></p>
	            	<p><Image src={require('./images/bio01.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={8} className="detail-text">
	            	<h3>WANT TO BOOK US? GIVE FEEDBACK?</h3>
					<h6>USE THE CONTACT FORM TO GET IN TOUCH!</h6>
	            	

					 <h6>WHERE TO FIND US</h6>
					 <p>SoMe +++ </p>
				</Col>
			</Row>

			 <Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/Prototype_Martha7.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>
        </>
    );
}

export default Contact;