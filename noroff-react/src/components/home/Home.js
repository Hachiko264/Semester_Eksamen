import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Heading from "../layout/Heading";


export function Home() {
    return (
        <>
            <Heading title="Home" />
            <p>This is the home page</p>

			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>

				<Col md={6} className="detail_text">
					<p><Image src={require('./images/poster.jpg')} alt="Shoes website" fluid /></p>	
				</Col>			
			</Row>
        </>
    );
}

export default Home;