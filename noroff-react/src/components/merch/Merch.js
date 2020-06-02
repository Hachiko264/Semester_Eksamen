import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Merch() {
    return (
        <>
            <Heading title="MERCHANDISE" />
            
			<Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/looney_banner.png')} alt="looneytale merch" fluid /></p>
				</Col>
			</Row>

			<Row>
				<Col md={12} className="detail-image">
				<p><br /><br /></p>
	            <h3 class="center">COMING SOON...</h3>
	            <p><br /><br /></p>
				</Col>
			</Row>
        </>
    );
}

export default Merch;