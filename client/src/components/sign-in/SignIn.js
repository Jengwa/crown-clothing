import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


const SignIn = ({googleSignInStart, emailSignInStart }) => {
	const [ userCredentials, setCredentials] = useState({email: '',password: ''})
	const {email,password} = userCredentials;
	const handleSubmit = async event => {
		
		event.preventDefault();
		
		

		emailSignInStart(email,password);

	
	}

	const handleChange = (event) => {
		const { name,value } = event.target;

		setCredentials({...userCredentials, [name]: value})
	}

		return(
			<div className='sign-in'>
				<h2 className='title'>I already have account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit= {handleSubmit}>
					<FormInput 
						name='email' 
						value={email} 
						type='email' 
						required 
						handleChange={handleChange}
						label='email'
					/>
				
					<FormInput 
						name='password' 
						value={password}
						type='password' 
						label='password'
						required 
						handleChange={handleChange} 
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
						{''}
						Sign In With Google{''}
						</CustomButton>
					</div>

				</form>
			</div>
		)
	}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn);