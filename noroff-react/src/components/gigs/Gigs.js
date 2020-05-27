import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Gigs() {
    return (
        <>
            <Heading title="Gigs" />
            <p>Upcoming gigs - list of upcoming/past gigs (link to facebook, contact and image gallery) </p>

			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/poster.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={6} className="detail-image">
	            	<p>Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. 
	            	Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas 
	            	porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. 
	            	Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, 
	            	ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
	            	Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
	            	himenaeos. Nam nec ante.</p>
				</Col>

				
			</Row>

			<Row>
				<Col md={12} className="detail-text">
	            	<h2> Earlier gigs</h2>
				</Col>		
			</Row>

			<Row>
				
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/poster.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/poster.jpg')} alt="Logo design" fluid /></p>
				</Col>
			</Row>

			<Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/Prototype_Martha6.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>
        </>
    );
}

export default Gigs;