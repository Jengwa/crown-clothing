import React, { Component } from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.scss'
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/FirebaseUtils.js'


class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
				email: '',
				password: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({email: '' , password: ''})
	}

	handleChange = (event) => {
		const { name,value } = event.target;

		this.setState({ [name]: value})
	}

	render() {
		return(
			<div className='sign-in'>
				<h2 className='title'>I already have account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit= {this.handleSubmit}>
					<FormInput 
						name='email' 
						value={this.state.email} 
						type='email' 
						required 
						handleChange={this.handleChange}
						label='email'
					/>
				
					<FormInput 
						name='password' 
						value={this.state.password}
						type='password' 
						label='password'
						required 
						handleChange={this.handleChange} 
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						{''}
						Sign In With Google{''}
						</CustomButton>
					</div>

				</form>
			</div>
		)
	}

}

export default SignIn;