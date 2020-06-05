import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Heading from "../layout/Heading";


export function Home() {
    return (
        <>
            <Heading title="Home" />

            <h2> H2 undertittel </h2>
            <p>Homepage - Slideshow/videobackground with logo, welcome/enter page. 
            <br/> landingsside med flash background maybe? og slideslow på gallery?
            <br/> mulig løsning for store bilder. evt fixed bakgrunn? https://github.com/tailwindcss/discuss/issues/41</p>

            <Row>
				<Col md={12} className="detail-image">
            		<Carousel>

		            	<Carousel.Item>
			            	<img
						      className="d-block w-100"
						      src={require('./images/slidetest.jpg')}
						      alt="Slide"
						    />
						     <Carousel.Caption>
							    <h3>SLIDE LABEL</h3>
							    <p>Label text under image</p>
						    </Carousel.Caption>
		            	</Carousel.Item>


		            	<Carousel.Item>
			            	<img
						      className="d-block w-100"
						      src={require('./images/slidetest.jpg')}
						      alt="Slide"
						    />
		            	</Carousel.Item>

		            	<Carousel.Item>
			            	<img
						      className="d-block w-100"
						      src={require('./images/slidetest.jpg')}
						      alt="Slide"
						    />
		            	</Carousel.Item>

            		</Carousel>
            	</Col>
			</Row>

            <Row>
				<Col md={2} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>

				<Col md={4} className="detail-text">
					<p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
	            	elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
	            	augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
	            	taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
	            	Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>	
				</Col>	
				<Col md={2} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>

				<Col md={4} className="detail-text">
					<p>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
	            	elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
	            	augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent 
	            	taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
	            	Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>	
				</Col>			
			</Row>




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