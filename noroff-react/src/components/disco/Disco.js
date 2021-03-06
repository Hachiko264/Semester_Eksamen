import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";
import Container from 'react-bootstrap/Container'

export function Disco() {
    return (
        <>
            <Heading class="mainheading" title="DISCOGRAPHY" />
            
            
			<Row>
				<Col md={6} className="detail-image">
	            	<p><Image src={require('./images/burden_disco_large.jpg')} alt="A common burden album cover" fluid /></p>
				</Col>
				<Col md={6} className="detail-text">
				<h3>A COMMON BURDEN</h3>
				<h5>ASHES OF HER MEMORY </h5>
				<h6>FULL ALBUM (2017), PIGGTRÅD RECORDS</h6>
	            	<p>	<b>1.</b> Everyday Pressure <b>3:40</b><br />
						<b>2.</b> Goodnight Promise <b>4:36</b><br />
						<b>3.</b> Nobody <b>6:45</b><br />
						<b>4.</b> Raging Roses <b>3:42</b><br />
						<b>5.</b> Ixia <b>4:45</b><br />
						<b>6.</b> Somebody <b>4:47</b><br />
						<b>7.</b> Anybody <b>3:58</b><br />
						<b>8.</b> Lying Under Dead Outlines <b>3:45</b><br />
						<b>9.</b> Looneytale <b>4:00</b><br />
						<b>10.</b> Everybody <b>4:23</b><br />
	            	</p>
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
			</Row>

			 <Row>
				<Col md={12} className="detail-text">
				<p><br />
				<br /><br /></p>
				</Col>		
			</Row>

			<Row>
				<Col sx={12} md={3} className="detail-image">
	            	<p><Image src={require('./images/looney_disco.jpg')} alt="Looneytale single cover" fluid /></p>
				</Col>
				<Col sx={12} md={3} className="detail-text">
					<h3>LOONEYTALE</h3>
					<h5>ASHES OF HER MEMORY </h5>
					<h6>SINGLE (2017), PIGGTRÅD RECORDS</h6>
		            <p><b>1.</b> Looneytale feat. Poeh - Single Version <b>4:00</b></p>
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

				<Col sx={10} md={3} className="detail-image">
	            	<p><Image src={require('./images/everyday_disco.jpg')} alt="Everyday pressure single cover" fluid /></p>
				</Col>
				<Col sx={10} md={3} className="detail-text">
					<h3>EVERYDAY PRESSURE</h3>
					<h5>ASHES OF HER MEMORY </h5>
					<h6>SINGLE (2017), PIGGTRÅD RECORDS</h6>
		            <p><b>1.</b> Everyday Pressure - Single Version <b>3:40</b></p>
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
			</Row>
        </>
    );
}

export default Disco;