import React, { useState } from "react";
import { PiCalculatorFill } from "react-icons/pi";
import img1 from "../assets/calculator.svg";
function Home() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [repaymentChecked, setRepaymentChecked] = useState(false);
  const [interestOnlyChecked, setInterestOnlyChecked] = useState(false);

  const handleClearAll = () => {
    setAmount("");
    setYears("");
    setInterestRate("");
    setRepaymentChecked(false);
    setInterestOnlyChecked(false);
  };

  return (
    <div className="flex justify-center items-center bg-blue-200 w-full h-screen p-4">
      <div className="bg-white flex flex-col lg:flex-row w-full lg:w-[70%] rounded-2xl">
        <div className="p-6 lg:mr-7 w-full lg:w-1/2">
          <div className="flex justify-between items-center mb-7">
            <h1 className="font-bold text-2xl text-black">
              Mortgage Calculator
            </h1>
            <div className="font-light text-sm underline">
              <a
                className="text-gray-800 cursor-pointer"
                onClick={handleClearAll}
              >
                Clear All
              </a>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-[16px] mb-2 text-sky-900">Mortgage Amount</h2>
            <div className="flex">
              <span className="rounded-l-md bg-blue-200 px-3 pt-[6px] pb-[7px] border-t border-l border-b border-sky-900 text-sky-900">
                £
              </span>
              <input
                className="rounded-r-md w-full border-t border-r focus:border-sky-900 focus:outline-none text-black border-b border-sky-900 px-3 py-1"
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3 w-full mt-5">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[16px] mb-2 text-sky-900">Mortgage Term</h2>
                <div className="flex">
                  <input
                    className="rounded-l-md w-full border-t border-l focus:border-sky-900 focus:outline-none text-black border-b border-sky-900 px-3 py-1"
                    type="text"
                    placeholder="Years"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                  />
                  <span className="rounded-r-md bg-blue-200 px-3 pt-[6px] pb-[7px] border-t border-r border-b border-sky-900 text-sky-900">
                    years
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-[16px] mb-2 text-sky-900">Interest Rate</h2>
                <div className="flex">
                  <input
                    className="rounded-l-md w-full border-t border-l focus:border-sky-900 focus:outline-none text-black border-b border-sky-900 px-3 py-1"
                    type="text"
                    placeholder="Rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                  <span className="rounded-r-md bg-blue-200 px-3 pt-[6px] pb-[7px] border-t border-r border-b border-sky-900 text-sky-900">
                    %
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 w-full">
              <h2 className="text-[16px] mb-2 text-sky-900">Mortgage Type</h2>
              <label
                htmlFor="repayment-checkbox"
                className="flex items-center border w-full border-black border-opacity-50 rounded-md px-3 py-2 cursor-pointer"
              >
                <input
                  className="custom-checkbox rounded-full"
                  type="checkbox"
                  id="repayment-checkbox"
                  checked={repaymentChecked}
                  onChange={(e) => setRepaymentChecked(e.target.checked)}
                />
                <h2 className="text-[18px] font-[500] text-black ml-2 cursor-pointer">
                  Repayment
                </h2>
              </label>
              <label
                htmlFor="interest-checkbox"
                className="flex items-center mt-2 border w-full border-black border-opacity-50 rounded-md px-3 py-2 cursor-pointer"
              >
                <input
                  className="custom-checkbox rounded-full"
                  type="checkbox"
                  id="interest-checkbox"
                  checked={interestOnlyChecked}
                  onChange={(e) => setInterestOnlyChecked(e.target.checked)}
                />
                <h2 className="text-[18px] font-[500] text-black ml-2 cursor-pointer">
                  Interest Only
                </h2>
              </label>
            </div>
            <div>
              <button className="flex items-center px-5 py-3 mt-7 bg-yellow-500 text-black rounded-full font-[500] text-[18px] hover:opacity-80">
                <PiCalculatorFill className="mr-2" />
                Calculate Repayments
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex fondo2 w-[50%] relative text-center pt-24 px-10 rounded-bl-[90px] rounded-r-2xl bg-gray-800 text-white">
          <div>
            <div className="flex items-center justify-center">
              <img className="" src={img1} alt="Illustration" />
            </div>
            <h1 className="font-[500] text-[22px]">Results shown here</h1>
            <h3 className="text-gray-400 text-sm mt-2">
              Complete the form click "calculate repayments" to see what your
              monthly repayments would be.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
