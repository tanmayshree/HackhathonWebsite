import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import './contact.css'

const ContactForm = () => {

	const [details, setDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		msg: ''
	});

	const handleForm = (e) => {
		const { name, value } = e.target;
		setDetails({
			...details,
			[name]: value,
		});
	};

	return (
		<>
			<SectionTitle title='Contact Us' />
			<section className='contact_form'>
				<div className='contact_wrapper'>
					<div className="contact_left">
						<input
							className='contact_input'
							name='firstName'
							onChange={handleForm}
							value={details.firstName}
							type="text"
							placeholder='First Name' />
						<input
							className='contact_input'
							name='lastName'
							onChange={handleForm}
							value={details.lastName}
							type="text"
							placeholder='Last Name' />
						<input
							className='contact_input'
							name='email'
							onChange={handleForm}
							value={details.email}
							type="email"
							placeholder='Email' />
					</div>
					<div className="contact_right">
						<textarea
							rows='6'
							name='msg'
							value={details.msg}
							onChange={handleForm}
							className='contact_textarea'
							placeholder='Message' />
					</div>
				</div>
				<div className='contact_btn_box'>
					<button className='contact_btn'>Submit</button>
				</div>
			</section>
		</>
	)
}

export default ContactForm