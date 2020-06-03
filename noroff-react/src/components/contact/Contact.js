import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import * as yup from "yup";


const schema = yup.object().shape({
	firstName: yup.string().required("First name is required"),
	lastName: yup.string().required("Last name is required"),
	email: yup
		.string()
		.label('Email')
		.email("Please enter a valid email")
		.required("Email is required"),
	message: yup
		.string()
		.label('Message')
		.required("A message is required")
});


function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}
	return (
        <>
            <Heading title="CONTACT" />
 
			<Row>
				<Col md={4} className="detail-image">
	            	<p><Image src={require('./images/bio02.jpg')} alt="Logo design" fluid /></p>
	            	<p><Image src={require('./images/bio01.jpg')} alt="Logo design" fluid /></p>
				</Col>
				<Col md={8} className="detail-text">
	            	<h3>WANT TO BOOK US?</h3>
					<h6>CONTACT US!</h6>

					<Form name="contact" onSubmit={handleSubmit(onSubmit)}>
				        <input type="hidden" name="form-name" value="contact" />
				        <p>
				            <Form.Group>
				                <Form.Label>First Name</Form.Label>
				                <Form.Control name="firstName" placeholder="Enter your first name" ref={register({required: true, min: 4, maxLength: 80})} />
				                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
				            </Form.Group>

				            <Form.Group>
				                <Form.Label>Last Name</Form.Label>
				                <Form.Control name="lastName" placeholder="Enter your last name" ref={register({required: true, min: 4, maxLength: 80})} />
				                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
				            </Form.Group>

				            <Form.Group>
				                <Form.Label>Email</Form.Label>
				                <Form.Control name="email" placeholder="Enter your email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
				                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
				            </Form.Group>

				            <Form.Group>
				                <Form.Label>Message</Form.Label>
				                <Form.Control name="message" placeholder="Write you message here" ref={register({required: true, min: 10, maxLength: 500})} />
				                {errors.message && <ErrorMessage>{errors.message.Message}</ErrorMessage>}
				            </Form.Group>
				            <Button type="submit" variant="light">Submit</Button>
				        </p>
			        </Form>

					 <h6>WHERE TO FIND US</h6>
					 <p>
			        	<a href="https://www.facebook.com/martha264/">
				        	<Image 
				        	src={require('./images/002-facebook.svg')} 
				        	alt="Facebook" 
				        	fluid 
				        	className="d-inline-block"/>
			        	</a>
			        	<a href="https://www.instagram.com/hachiko264/">
				        	<Image 
				        	src={require('./images/003-instagram.svg')} 
				        	alt="Instagram" 
				        	fluid 
				        	className="d-inline-block"/>
			        	</a>
			        	youtube, spotify
			        </p>
				</Col>
			</Row>

        </>
    );
}

export default Contact;