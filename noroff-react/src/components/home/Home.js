import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Heading from "../layout/Heading";

import gal01 from "./images/gal01.jpg";
import gal02 from "./images/gal02.jpg";
import gal06 from "./images/gal06.jpg";
import gal07 from "./images/gal07.jpg";


export function Home() {
    return (
        <>
			<Row>
				<Col md={12} className="detail-image">
            		<Carousel>

		            	<Carousel.Item>
			            	<img
						      className="d-block w-100"
						      src={require('./images/gal01.jpg')}
						      alt="Slide 1"
						    />
		            	</Carousel.Item>


		            	<Carousel.Item>
			            	<img
						      className="d-block w-100"
						      src={require('./images/gal02.jpg')}
						      alt="Slide 2"
						    />
		            	</Carousel.Item>

		            	<Carousel.Item>
			            	<img
						      className="d-block w-100"
						      src={require('./images/gal06.jpg')}
						      alt="Slide 3"
						    />
		            	</Carousel.Item>

		            	<Carousel.Item>
			            	<img
						      className="d-block w-100"
						      src={require('./images/gal07.jpg')}
						      alt="Slide 4"
						    />
		            	</Carousel.Item>

            		</Carousel>
            	</Col>
			</Row>

			 <Row>
				<Col md={12} className="detail-text">
				<p><br />
				<br /><br /></p>
				</Col>		
			</Row>

            <Row>
				<Col md={2} className="detail-image">
	            	<p><Image src={require('./images/burden_disco.jpg')} alt="Logo design" fluid /></p>
				</Col>

				<Col md={4} className="detail-text">
					<h3>FIRST FULL ALBUM!</h3>
					<p>Listen to our first full album "A Common Burden" on Spotify and iTunes! 
					Includes the two first singles from the album: "Everyday Pressure" and "Looneytale". </p>
					<p>
		            Listen on: <a class="text-white" href="https://open.spotify.com/artist/2zynUZq7pD9AUK1eyTXmZY?si=xYhCpiUAQG2pdh1RLFkgsA/" target="_blank">Spotify </a>
		            <b>|</b> <a class="text-white" href="https://music.apple.com/us/artist/ashes-of-her-memory/1297217753/" target="_blank">iTunes </a>
		            </p>
		            <p>
		            <a href="https://open.spotify.com/artist/2zynUZq7pD9AUK1eyTXmZY?si=xYhCpiUAQG2pdh1RLFkgsA/">
	                    <Image 
	                    src={require('./images/spotify.svg')} 
	                    alt="Spotify" 
	                    fluid 
	                    className="d-inline-block"/>
	                </a>
	                <a href="https://music.apple.com/us/artist/ashes-of-her-memory/1297217753/">
	                    <Image 
	                    src={require('./images/itunes.svg')} 
	                    alt="Itunes" 
	                    fluid 
	                    className="d-inline-block"/>
	                </a>
	                </p>	
				</Col>	
				<Col md={2} className="detail-image">
	            	<p><Image src={require('./images/ashes.jpg')} alt="Logo design" fluid /></p>
				</Col>

				<Col md={4} className="detail-text">
					<h3>CONTACT FOR BOOKING!</h3>
					<p>Want to book us for a festival or concert? 
					Contact us here or on social media to tips us of 
					possible gigs. Stay updated for future plan here and 
					our social medias.</p>
				</Col>			
			</Row>
        </>
    );
}

export default Home;