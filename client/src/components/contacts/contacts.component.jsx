import React,{useState} from 'react';
import CustomButton from '../custom-button/CustomButton';
import {firestore} from '../../firebase/FirebaseUtils';
import './contacts.styles.css'

const Contacts = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const [loader, setLoader] = useState(false);

   const handleSubmit = (e) => {
       e.preventDefault();
       setLoader(true)

       firestore.collection('contacts').add({
           name:name,
           email:email,
           message:message
       })
       .then(()=> {
           alert('Message has been submitted')
       })
       .catch(error => {
            alert(error.message)
            setLoader(false)
       })

       setName('')
       setEmail('')
       setMessage('')
   }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="title"> Contact Us</h1>

            <lebel>Name</lebel>
            <input placeholder='Enter your name' value={name}
              onChange={(event)=> setName(event.target.value)}
              required  
            /> 

            <lebel>Email</lebel>
            <input placeholder='Enter your email adrress'
            value={email}
            onChange={(event)=> setEmail(event.target.value)}
            required
            />

            <lebel>Message</lebel>
            <textarea placeholder='Email us'
            value={message}
            onChange={(event)=> setMessage(event.target.value)}
            ></textarea>

            <CustomButton style={{background : loader ? '#ccc' : '#'}}>Submit</CustomButton>
        </form>
    )
    
}

export default Contacts;