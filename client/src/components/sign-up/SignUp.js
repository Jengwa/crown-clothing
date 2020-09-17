import React, {useState} from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signUpStart } from '../../redux/user/user.action';

import './SignUp.scss'

const SignUp = ({signUpStart}) => {
	
	const [userCredentials, setUserCredentials] = useState(
		{ 
			displayName:'',
			email: '',
			password: '',
			confirmPassword: ''
		})

const {displayName,email,password,confirmPassword} = userCredentials;
	const handleSubmit = async event => {
		
		event.preventDefault()

		if(password !== confirmPassword) {
			alert('password dose not match try again')
			return;
		}
		signUpStart({displayName,email,password})
		
	}
	const handleChange = (event) => {
		const { name,value } = event.target;

		setUserCredentials({...userCredentials, [name]: value})
	}

	
		return(
			
			<div className= 'sign-up'>
				<h2 className='title'>I do not have account</h2>
				<span>Sign Up with email and password</span>
				<form className='sign-up-form' onSubmit={handleSubmit}>
					 <FormInput
					 name='displayName' 
					 type='text' 
					 onChange={handleChange} 
					 label='name' 
					 value={displayName} 
					 required
					/>
					<FormInput 
						name='email' 
						value={email} 
						type='email' 
						required 
						onChange={handleChange}
						label='email'
					/>
				 <FormInput 
				 	  name='password'
						type='password' 
						onChange={handleChange} 
						label='password' 
						value={password} 
						required
				 />
				 <FormInput
				 	  name='confirmPassword'  
				    type='password' 
						onChange={handleChange} 
						label='confirm password' 
						value={confirmPassword} 
						required
					/>

					<div className='buttons'>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</div>
				</form>

			</div>
		)
	}


const mapDispatchToProps = dispatch => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);