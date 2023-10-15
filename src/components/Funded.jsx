import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSub from './HeaderSub';
import { FaRupeeSign } from 'react-icons/fa';

export default function Funded() {
  return (
    <>
      <HeaderSub />
      <body
        style={{ backgroundColor: 'rgb(12 74 110)', height: 'auto' }}
        className="p-10"
      >
        <section className="p-10">
          <div className="flex justify-center items-center py-2">
            <Link className="bg-slate-300 py-1 px-4 rounded-full" to="/">
              Back
            </Link>
          </div>
          <h1 className="text-center text-white text-2xl">
            This is Funded Stage!
          </h1>
        </section>
        <div>
          <table className="centered-table">
            <tbody>
              <tr>
                <td className="text-white">1.</td>
                <td className="text-white">
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 30k
                  </p>
                </td>
                <td className="text-white">
                  Funded Account -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 300k
                  </p>
                </td>
                <td className="text-white">
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 20% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td className="text-white">
                    <butoon>Pay</butoon>
                  </td>
                </Link>
              </tr>
              <tr>
                <td className="text-white">2.</td>
                <td className="text-white">
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 50k
                  </p>
                </td>
                <td className="text-white">
                  Funded Account -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 500k
                  </p>
                </td>
                <td className="text-white">
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 20% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td className="text-white">
                    <butoon>Pay</butoon>
                  </td>
                </Link>
              </tr>
              <tr>
                <td className="text-white">3.</td>
                <td className="text-white">
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 100k
                  </p>
                </td>
                <td className="text-white">
                  Funded Account -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 50k
                  </p>
                </td>
                <td className="text-white">
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 20% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td className="text-white">
                    <butoon>Pay</butoon>
                  </td>
                </Link>
              </tr>
              <tr>
                <td className="text-white">4.</td>
                <td className="text-white">
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 1M
                  </p>
                </td>
                <td className="text-white">
                  Funded Account-{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 10M
                  </p>
                </td>
                <td className="text-white">
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 10% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td className="text-white">
                    <butoon>Pay</butoon>
                  </td>
                </Link>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              color: 'white',
              fontSize: '25px',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            Note-To get an account with us, you must successfully complete the
            following two phases within 15-15 days
          </p>
          <h2 className="text-white">Phase 1</h2>
          <table className="centered-table">
            <tbody>
              <tr className='text-white'>
                <td>1.</td>
                <td>Trading Period</td>
                <td>15 days</td>
                <td>20% loss || 40% profit</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-white">Phase 2</h2>
          <table className="centered-table">
            <tbody>
              <tr className='text-white'>
                <td>2.</td>
                <td>Trading Period</td>
                <td>15 days</td>
                <td>10% loss || 20% profit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </>
  );
}
