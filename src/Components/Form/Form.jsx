import './form.css'
import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Form = () => {
const [data, setData] = useState({
  subject:'',
  email:'',
  message:''
})
const {subject,email,message} = data;
const changeHandler = e =>{
  setData({...data,[e.target.name]:e.target.value})
}
const submitHandler = e =>{
  e.preventDefault();
  emailjs.sendForm('service_lbi2l3o', 'template_mmjv9gd', e.target, 'user_8RAYQFLs6nWjYIyzfxpWf')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
};

  return (
    <div className='form'>
        <form onSubmit = {submitHandler} autoComplete="off">

        <h1>To Contact</h1>
            <label>Subject:</label>
            <input type="text" name="subject" value={subject} onChange={changeHandler}></input>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={changeHandler}></input>
            <label>Subject</label>
            <input type="Message"></input>
            <label>Message:</label>
            <input type="text" name="message" value={message} onChange={changeHandler}></input>
            <input type="submit"  name='submit'/>
        </form>
    </div>
  )
}

export default Form