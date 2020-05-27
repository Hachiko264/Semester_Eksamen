import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Heading from "../layout/Heading";


export function Home() {
    return (
        <>
            <Heading title="Home" />
            <p>Homepage - Slideshow/videobackground with logo, welcome/enter page.</p>

			<Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/Prototype_Martha.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>


			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>

				<Col md={8} className="detail-image">
					<p><Image src={require('./images/Style_Tile_Martha.jpg')} alt="Shoes website" fluid /></p>	
				</Col>			
			</Row>
        </>
    );
}

export default Home;