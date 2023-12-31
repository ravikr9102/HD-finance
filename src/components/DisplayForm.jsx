import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderSub from './HeaderSub';

function DisplayForm() {
  const [multipleUser, setMultipleUser] = useState([]);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    setMultipleUser([...storedFormData]);
  }, []);

  console.log(multipleUser);

  // console.log(storedFormData)

  return (
    <section className="h-auto md:h-screen bg-sky-900 display">
      <HeaderSub />
      <div className="p-6 pt-24">
        <div className="flex justify-center items-center">
          <Link className="bg-slate-300 py-1 px-4 rounded-full" to="/">
            Back
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {multipleUser.length > 0 ? (
            multipleUser.map((ele, i) => {
              return (
                <div
                  key={i}
                  className="bg-slate-300 rounded p-5 m-2 mt-10 flex justify-center items-center"
                >
                  <div>
                    <p>Name: {ele.name}</p>
                    <p>Email: {ele.email}</p>
                    <p>Message: {ele.message}</p>
                    <p>Mobile :{ele.mobile}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className='flex justify-center items-center'>
              <p>No data found</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DisplayForm;
