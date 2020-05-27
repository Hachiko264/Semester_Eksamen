import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Disco() {
    return (
        <>
            <Heading title="Disco" />
            <p>Discography - Show released singles and albums with tracklist (connect to spotify) </p>

			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={8} className="detail-image">
	            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
	            	Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
	            	elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
	            	augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
	            	taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
	            	Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
	            	Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. 
	            	Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas 
	            	porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. 
	            	Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, 
	            	ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
	            	Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
	            	himenaeos. Nam nec ante. 

					Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, 
					a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. 
					Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. 
					Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo 
					eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
					 Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, 
					 at interdum magna augue eget diam.</p>
				</Col>
			</Row>

			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={8} className="detail-image">
	            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
	            	Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
	            	elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
	            	augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
	            	taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
	            	Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. 
	            	Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. 
	            	Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas 
	            	porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. 
	            	Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, 
	            	ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
	            	Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
	            	himenaeos. Nam nec ante. 

					Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, 
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
	            	<p><Image src={require('./images/Prototype_Martha4.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>
        </>
    );
}

export default Disco;