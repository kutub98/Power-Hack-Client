import React from "react";

const Table = () => {
  return (
    <div>
      <div className="w-full">
        <table className="w-full">
          
          <thead className="bg-gray-300 text-center">
            <tr className="text-center">
              <th className="p-3">Billing ID</th>
              <th className="p-3">full Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3 text-right">Paid Amount</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
				<tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 justify-end text-center">
					<td className="p-3 text-center">
						<p>97412378923</p>
					</td>
					<td className="p-3 text-center">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3 text-center">
						<p>14 Jan 2022</p>
						<p className="text-gray-600">Friday</p>
					</td>
					<td className="p-3 text-center">
						<p>01 Feb 2022</p>
						<p className="text-gray-600">Tuesday</p>
					</td>
					<td className="p-3 text-center">
						<p className="text-center">$15,792</p>
					</td>
					<td className="p-3 text-center">
						<span className="px-3 py-1 font-semibold rounded-md bg-pink-600 text-gray-50">
							<span>Edit</span>
							
						</span>
						<span className="px-3 py-1 font-semibold rounded-md bg-pink-600 text-gray-50">
							<span>Delete</span>
							
						</span>
                        
					</td>
				</tr>
				
			</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
