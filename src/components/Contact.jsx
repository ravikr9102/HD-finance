import React, { useState, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobile: '',
  });
  const [multipleUser, setMultipleUser] = useState(
    JSON.parse(localStorage.getItem('formData')) || []
  );

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...multipleUser];
    newData.push(formData);
    setMultipleUser(newData);
    localStorage.setItem('formData', JSON.stringify(newData));
    toast.success('Submitted Sucessfully!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
    // document.getElementById("myform").reset();
    formRef.current.reset();
  };

  return (
    <section id="contact" className="p-10 py-20 bg-sky-900">
      <div className="grid md:grid-cols-2 gap-5 ">
        <div className="text-base mt-12">
          <h2 className="text-4xl text-center  font-semibold">
            {' '}
            <strong className="m-2 text-slate-200">Contact Us</strong>
            Now
          </h2>
          <p className="text-slate-200 leading-relaxed tracking-wider pt-7 text-center">
            Complete the form below to get in touch with us. answer any
            questions you may have and provided for your funded account
          </p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            pe="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-8 py-2  rounded w-full text-center"
            placeholder="Enter your name!"
          />

          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="py-2 rounded w-full mt-3 text-center"
            placeholder="Enter your email!"
          />
          <input
            style={{ marginTop: '10px' }}
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="py-2 rounded w-full mt-3 text-center"
            placeholder="Enter your number!"
          />

          <textarea
            pe="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded py-4 mt-5 text-left w-full text-center"
            placeholder="Enter your message!"
          />
          <div className="text-right  mt-4">
            <button
              type="submit"
              className="border border-white py-1 px-10 rounded text-white bg-cyan-700"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
