import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Gallery() {
    return (
        <>
            <Heading title="Gallery" />
            <h2>Image Gallery - images from past gigs and band practices.</h2>
            <p>Image Gallery - images from past gigs and band practices.<br/>
            Kommer bedre løsning på fotogalleri. potensielt https://reactstrap.github.io/components/carousel/</p>

			<Row>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
			
			</Row>
			<Row>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
			
			</Row>
			<Row>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
			
			</Row>

			 <Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/Prototype_Martha3.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>

        </>
    );
}

export default Gallery;