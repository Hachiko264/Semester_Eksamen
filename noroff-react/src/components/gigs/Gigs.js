import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";

export function Gigs() {
    return (
        <>
            <Heading title="UPCOMING GIGS" />

			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/gigs07.jpg')} alt="live concert" fluid /></p>
	            	<p><Image src={require('./images/gigs06.jpg')} alt="live concert" fluid /></p>
	            	<p><Image src={require('./images/gigs01.jpg')} alt="live concert" fluid /></p>
	            	<p><Image src={require('./images/gigs14.jpg')} alt="live concert" fluid /></p>
				</Col>

				<Col md={4} className="detail-text">
		            <h3>UPCOMING GIGS</h3>
					<h5>None....</h5>
					<p>Want to book us?<br />
					Contact us button to form</p>
	

		            <p><br /><br /></p>
		            <h3>PAST GIGS</h3>
		            <h5>ASKØY ROCK FESTIVAL (AVLYST)</h5>
					<h6 class="passedgig">18. APRIL 2020, FLORVÅG</h6>
		            <p><b>TICKETS</b> | <b>EVENT</b></p>
		            <br />
		            <h5>SUND ROCK CLUB + INSIDE</h5>
					<h6 class="passedgig">23. NOVEMBER 20XX, INSIDE ROCK CAFE</h6>
		            <p><b>TICKETS</b> | <b>EVENT</b></p>
		            <br />
		            <h5>TORSDAGSROCK @ HULEN</h5>
					<h6 class="passedgig">1. FEBRUARY 20XX, HULEN</h6>
		            <p><b>TICKETS</b> | <b>EVENT</b></p>
		            <br />
		            <h5>EMERGENZAFINALE @ USF </h5>
					<h6 class="passedgig">2. DECEMBER 20XX, USF VERFTET</h6>
		            <p><b>TICKETS</b> | <b>EVENT</b></p>
		            <br />
		            <h5>EMERGENZA SEMIFINALE @ GARAGE</h5>
					<h6 class="passedgig">04. NOVEMBER 20XX, GARAGE</h6>
		            <p><b>TICKETS</b> | <b>EVENT</b></p>
		            <br />

				</Col>

				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/gigs04.jpg')} alt="live concert" fluid /></p>
	            	<p><Image src={require('./images/gigs11.jpg')} alt="live concert" fluid /></p>
	            	<p><Image src={require('./images/gigs12.jpg')} alt="live concert" fluid /></p>
	            	<p><Image src={require('./images/gigs08.jpg')} alt="live concert" fluid /></p>
				</Col>
			</Row>
<Row>
				<Col md={12} className="detail-image">
				<p><br /><br /></p>
	            <h3 class="center">PAST PROMOS</h3>
	            <p><br /></p>
				</Col>
			</Row>
			<Row>
				<Col md={3} className="detail-image">
	            	<p><Image src={require('./images/poster01.jpg')} alt="Logo design" fluid /></p>
	            </Col>

	            <Col md={3} className="detail-image">
	            	<p><Image src={require('./images/poster02.jpg')} alt="Logo design" fluid /></p>
	            </Col>

	            <Col md={3} className="detail-image">
	            	<p><Image src={require('./images/live_verftet.jpg')} alt="Logo design" fluid /></p>
	            </Col>

	            <Col md={3} className="detail-image">
	            	<p><Image src={require('./images/live_hulen.jpg')} alt="Logo design" fluid /></p>
	            </Col>
			</Row>



        </>
    );
}

export default Gigs;