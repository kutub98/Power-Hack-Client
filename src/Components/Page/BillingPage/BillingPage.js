import React from "react";
import Table from "./Table/Table";
import "./BillingPage.css";


const BillingPage = () => {
   
  return (
    <div className="my-8 mx-auto">
      <div className="py-4 items-center">
        <div className="flex container justify-between px-[10%] my-4 mx-auto items-center">
          <div className="flex items-center">
            <h3 className="mr-3">Billing</h3>
            <input required type="search" placeholder="Search here" className="py-2 px-2 bg-gray-100 rounded-md w-64" />
          </div>
          <div className="tooltip " data-tip="Click to Add New Bill">
            <label htmlFor="AddNewBillForm" className="btn bg-blue-800 rounded text-white py-2 px-4">
              Add new Bill
            </label>
          </div>
        </div>
        <div className=" container px-[10%] w-full my-4 mx-auto">
          <Table></Table>
        </div>

        {/* modal box of add new bill form  */}

        <input required type="checkbox" id="AddNewBillForm" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="AddNewBillForm" className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
            <form noValidate="" action="" className="space-y-4 ng-untouched  ng-valid text-black">
              <div className="space-y-1 text-sm">
                <label htmlFor="Full Name" className="block dark:text-gray-400">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  name="Full Name"
                  id="Full Name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="Email" className="block dark:text-gray-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="Mobile" className="block dark:text-gray-400">
                  Mobile Number
                </label>
                <div>
                <select name="" id=""></select>
                <input
                  required
                  type="number"
                  name="MobileNumber"
                  id="MobileNumber"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="Payable" className="block dark:text-gray-400">
                  Payable Amount
                </label>
                <input
                  required
                  type="number"
                  name="PayableAmount"
                  id="PayableAmount"
                  placeholder="Payable Amount"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <button className="block bg-blue-600 text-white rounded-md w-full p-3 text-center  dark:text-gray-900 dark:bg-violet-400">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
