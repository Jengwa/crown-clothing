import React, {Component} from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signUpStart } from '../../redux/user/user.action';

import './SignUp.scss'

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}

	}

	handleSubmit = async event => {
		const {signUpStart} = this.props;
		const {displayName,email,password,confirmPassword} = this.state;
		event.preventDefault()

		if(password !== confirmPassword) {
			alert('password dose not match try again')
			return;
		}
		signUpStart({displayName,email,password})
		
	}
	handleChange = (event) => {
		const { name,value } = event.target;

		this.setState({ [name]: value})
	}

	render() {
		const {displayName,email,password,confirmPassword} = this.state;
		return(
			
			<div className= 'sign-up'>
				<h2 className='title'>I do not have account</h2>
				<span>Sign Up with email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					 <FormInput
					 name='displayName' 
					 type='text' 
					 onChange={this.handleChange} 
					 label='name' 
					 value={displayName} 
					 required
					/>
					<FormInput 
						name='email' 
						value={email} 
						type='email' 
						required 
						onChange={this.handleChange}
						label='email'
					/>
				 <FormInput 
				 	  name='password'
						type='password' 
						onChange={this.handleChange} 
						label='password' 
						value={password} 
						required
				 />
				 <FormInput
				 	  name='confirmPassword'  
				    type='password' 
						onChange={this.handleChange} 
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
}

const mapDispatchToProps = dispatch => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);