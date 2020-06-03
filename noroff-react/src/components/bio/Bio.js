import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Bio() {
    return (
        <>
            <Heading title="BIOGRAPHY" />
            

			<Row>
				<Col md={12} className="detail-image">
				<p><br /><br /></p>
	            <h3 class="center">THE STORY</h3>
	            <p><br /></p>
				</Col>
			</Row>
			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/bio03.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={8} className="detail-image">
	            	<p>Ashes of Her Memory started in Glesvær on the west coast of Norway under 
	            	the opening of <b>"Sund Rock Club"</b> in 2010. It was started by three of the current 
	            	members: Marius, "Moppen" and Stian, 
	            	joined shortly after by Toril and Per-Arne.</p> 

	            	<p>For a couple of years music was created out in the periphery of Norway until the 
	            	last two members to join fell out of the group to focus on career. Eventually AoHM 
	            	was joined by "Addi" and Alv-Erlend, and shortly after released their first full album, 
	            	<b>"A Common Burden"</b> in 2017 under the <b>selfmade label "Piggtråd"</b>, meaning razorwire. 
	            	Alv-Erlend then decided to quit only months after, due to personal reasons, and the band 
	            	was once again incomplete. Per-Arne was a stand in for the remaining gigs, but didn't 
	            	want to continue playing with the band moving forward.</p>

	            	<p>The following year, auditions were had. Most were 
	            	dissapointing due to most guitarists having <b>problems picking up the "style"</b> of music, 
	            	but eventually <b>the golden egg</b> was laid. Anders came in strong on his audition, claiming 
	            	to only have practised an hour or so, because he just came home from vacation and has since 
	            	kept on playing in the band. </p>
				</Col>
			</Row>

			<Row>
				<Col md={12} className="detail-image">
				<p><br /><br /></p>
	            <h3 class="center">CURRENT MEMBERS</h3>
	            <p><br /></p>
				</Col>
			</Row>

			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/marius.jpg')} alt="Logo design" fluid /></p>
		            <h4>MARIUS</h4>
					<h6>VOCAL</h6>
				</Col>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/moppen.jpg')} alt="Logo design" fluid /></p>
		            <h4>TORSTEIN <b>|</b> MOPPEN</h4>
					<h6>BASS</h6>
				</Col>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/adrian.jpg')} alt="Logo design" fluid /></p>
		            <h4>ADRIAN <b>|</b> ADDI</h4>
					<h6>DRUMS</h6>
				</Col>
			</Row>

			<Row>
				<Col md={4} className="detail-image">
	            	<br /><br />
	            	<p><Image src={require('./images/stian.jpg')} alt="Logo design" fluid /></p>
		            <h4>STIAN</h4>
					<h6>LEAD GUITAR</h6>
				</Col>

				<Col md={4} className="detail-image">
					<br /><br />
	            	<p><Image src={require('./images/anders.jpg')} alt="Logo design" fluid /></p>
		            <h4>ANDERS</h4>
					<h6>RYTHM GUITAR</h6>
				</Col>
			</Row>

			<Row>	
				<Col md={12} className="detail-text">
					<p><br /><br /></p>
		            <h3 class="center">PAST MEMBERS</h3>
		            <p><br /></p>
				</Col>
			</Row>

			<Row>
				
				<Col md={3} className="detail-image">
	            	<Image src={require('./images/guitar.png')} alt="guitar" fluid />
	            	<h4>PER-ARNE</h4>
					<h6>RYTHM GUITAR</h6>
				</Col>
				<Col md={3} className="detail-image">
	            	<Image src={require('./images/guitar.png')} alt="guitar" fluid />
	            	<h4>ALV-ERLEND</h4>
					<h6>RYTHM GUITAR</h6>
				</Col>
				<Col md={3} className="detail-image">
	            	<Image src={require('./images/drums.png')} alt="drums" fluid />
	            	<h4>TONY</h4>
					<h6>DRUMS</h6>
				</Col>
				<Col md={3} className="detail-image">
	            	<Image src={require('./images/drums.png')} alt="drums" fluid />
	            	<h4>TORIL</h4>
					<h6>DRUMS</h6>
				</Col>
			</Row>

        </>
    );
}

export default Bio;