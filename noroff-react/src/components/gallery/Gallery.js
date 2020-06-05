import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";
//import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import gal01 from "./images/gal01.jpg";
import gal02 from "./images/gal02.jpg";
import gal03 from "./images/gal03.jpg";
import gal04 from "./images/gal04.jpg";
import gal05 from "./images/gal05.jpg";
import gal06 from "./images/gal06.jpg";
import gal07 from "./images/gal07.jpg";
import gal08 from "./images/gal08.jpg";
import gal09 from "./images/gal09.jpg";
import gal10 from "./images/gal10.jpg";
import gal11 from "./images/gal11.jpg";
import gal13 from "./images/gal13.jpg";





export function Gallery() {
    return (
        <>
            <Heading title="GALLERY" />
            
			<Row>
				<Col xs={8} md={12}>
					<h2>LIVE @ INSIDE ROCK CAFE</h2>
            	

					<Carousel>
		                <div>
		                    <img src={gal01} class="slidergallery" alt="Liveconcert 1" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal02} class="slidergallery" alt="Liveconcert 2" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal03} class="slidergallery" alt="Liveconcert 3" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal04} class="slidergallery" alt="Liveconcert 4" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal05} class="slidergallery" alt="Liveconcert 5" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal06} class="slidergallery" alt="Liveconcert 6" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal07} class="slidergallery" alt="Liveconcert 7" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal08} class="slidergallery" alt="Liveconcert 8" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal09} class="slidergallery" alt="Liveconcert 9" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal10} class="slidergallery" alt="Liveconcert 10" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal11} class="slidergallery" alt="Liveconcert 11" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>
		                <div>
		                    <img src={gal13} class="slidergallery" alt="Liveconcert 13" />
		                    <p>Foto: Ashes of Her Memory © 20XX </p>
		                    <br />
		                </div>

		            </Carousel>

            	</Col>
			</Row>

			<Row>

			</Row>

        </>
    );
}

export default Gallery;