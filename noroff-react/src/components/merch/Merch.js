import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Merch() {
    return (
        <>
            <Heading title="Merch" />
            <p>Merch - coming soon, tease page </p>

            <Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/Prototype_Martha5.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>


			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
			
			</Row>
        </>
    );
}

export default Merch;