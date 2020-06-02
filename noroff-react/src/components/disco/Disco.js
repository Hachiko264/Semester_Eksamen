import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Disco() {
    return (
        <>
            <Heading title="DISCOGRAPHY" />
            <p>Discography - Show released singles and albums with tracklist (connect to spotify, maybe api</p>

			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/burden_disco.jpg')} alt="A common burden album cover" fluid /></p>
				</Col>
				<Col md={8} className="detail-text">
				<h3>A COMMON BURDEN</h3>
				<h5>ASHES OF HER MEMORY </h5>
				<h6>FULL ALBUM (2017), PIGGTRÅD RECORDS</h6>
	            	<p>Everyday Pressure <b>3:40</b><br /> 





	            	</p>				</Col>
			</Row>

			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/looney_disco.jpg')} alt="Looneytale single cover" fluid /></p>
				</Col>
				<Col md={8} className="detail-text">
				<h3>LOONEYTALE</h3>
				<h5>ASHES OF HER MEMORY </h5>
				<h6>SINGLE (2017), PIGGTRÅD RECORDS</h6>
	            	<p><b>1.</b> Looneytale feat. Poeh - Single Version <b>4:00</b></p>
				</Col>
			</Row>

			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/everyday_disco.jpg')} alt="Everyday pressure single cover" fluid /></p>
				</Col>
				<Col md={8} className="detail-text">
				<h3>EVERYDAY PRESSURE</h3>
				<h5>ASHES OF HER MEMORY </h5>
				<h6>SINGLE (2017), PIGGTRÅD RECORDS</h6>
	            	<p><b>1.</b> Everyday Pressure - Single Version <b>3:40</b></p>
				</Col>
			</Row>

			 <Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/Prototype_Martha4.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>
        </>
    );
}

export default Disco;