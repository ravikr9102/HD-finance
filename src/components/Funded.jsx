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
          <h1
            className="text-center"
            style={{ color: 'white', fontSize: '22px' }}
          >
            This is Funded Stage!
          </h1>
        </section>
        <div>
          <table className="centered-table">
            <tbody>
              <tr>
                <td style={{ color: 'white' }}>1.</td>
                <td style={{ color: 'white' }}>
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 30k
                  </p>
                </td>
                <td style={{ color: 'white' }}>
                  Funded Account -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 300k
                  </p>
                </td>
                <td style={{ color: 'white' }}>
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 20% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td style={{ color: 'white' }}>
                    <butoon>Pay</butoon>
                  </td>
                </Link>
              </tr>
              <tr>
                <td style={{ color: 'white' }}>2.</td>
                <td style={{ color: 'white' }}>
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 50k
                  </p>
                </td>
                <td style={{ color: 'white' }}>
                  Funded Account -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 500k
                  </p>
                </td>
                <td style={{ color: 'white' }}>
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 20% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td style={{ color: 'white' }}>
                    <butoon>Pay</butoon>
                  </td>
                </Link>
              </tr>
              <tr>
                <td style={{ color: 'white' }}>3.</td>
                <td style={{ color: 'white' }}>
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 100k
                  </p>
                </td>
                <td style={{ color: 'white' }}>
                  Funded Account -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 50k
                  </p>
                </td>
                <td style={{ color: 'white' }}>
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 20% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td style={{ color: 'white' }}>
                    <butoon>Pay</butoon>
                  </td>
                </Link>
              </tr>
              <tr>
                <td style={{ color: 'white' }}>4.</td>
                <td style={{ color: 'white' }}>
                  Fee -{' '}
                  <p className="flex justify-center items-center">
                    <FaRupeeSign /> 1M
                  </p>
                </td>
                <td style={{ color: 'white' }}>Funded Account-Rs.10M</td>
                <td style={{ color: 'white' }}>
                  Profit Split <br></br> A 60% profit share within 10 days is
                  lucrative, while a 10% loss can be significant, so careful
                  investment and risk management are crucial.{' '}
                </td>
                <Link to="/payment">
                  <td style={{ color: 'white' }}>
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
          <h2 style={{ color: 'white' }}>Phase 1</h2>
          <table className="centered-table">
            <tbody>
              <tr>
                <td style={{ color: 'white' }}>1.</td>
                <td style={{ color: 'white' }}>Trading Period</td>
                <td style={{ color: 'white' }}>15 days</td>
                <td style={{ color: 'white' }}>20% loss || 40% profit</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 style={{ color: 'white' }}>Phase 2</h2>
          <table className="centered-table">
            <tbody>
              <tr>
                <td style={{ color: 'white' }}>2.</td>
                <td style={{ color: 'white' }}>Trading Period</td>
                <td style={{ color: 'white' }}>15 days</td>
                <td style={{ color: 'white' }}>10% loss || 20% profit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </>
  );
}
