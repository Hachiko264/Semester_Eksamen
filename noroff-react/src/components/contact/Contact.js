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
	            	<h3>WANT TO BOOK US? GIVE FEEDBACK?</h3>
					<h6>CONTACT US!</h6>

					 <Form onSubmit={handleSubmit(onSubmit)}>
				        
			         <Form.Group>
				        <Form.Label>Name</Form.Label>
				        <Form.Control name="firstName" placeholder="Enter your name" ref={register} />
				        {errors.firstName && <p>First name is required</p>}
			    	</Form.Group>

				    <Form.Group>
				        <Form.Label>Email</Form.Label>
				        <Form.Control name="email" placeholder="Enter your email" ref={register} />
				        {errors.email && <p>Email is required</p>}
				    </Form.Group>

				    <Form.Group>
				        <Form.Label>Age</Form.Label>
				        <Form.Control type="number" name="age" placeholder="Enter your age" ref={register} />
				        {errors.age && <p>Age is required</p>}
				    </Form.Group>



				        <Button type="submit">Submit</Button>
				    </Form>

					 <h6>WHERE TO FIND US</h6>
					 <p>SoMe +++ </p>
				</Col>
			</Row>

			 <Row>
				<Col md={12} className="detail-image">
	            	<p><Image src={require('./images/Prototype_Martha7.png')} alt="Logo design" fluid /></p>
				</Col>		
			</Row>
        </>
    );
}

export default Contact;