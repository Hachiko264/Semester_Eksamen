import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Contact() {
    return (
        <>
            <Heading title="Contact" />
            <p>Contact - contact form and social media link for booking</p>

 
			<Row>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={9} className="detail-image">
	            	<p>Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, 
					a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. 
					Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. 
					Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo 
					eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
					 Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, 
					 at interdum magna augue eget diam.</p>
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