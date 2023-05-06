import React from 'react'

const DisplaySingleWoreda = () => {
  return (
    <div>
      <div className="farmer">
        <h2>Detail information of woreda</h2>
        <table>
          <thead>
            <tr>
              <th>Woreda name</th>
              <th>First name</th>
              <th>Middle name</th>
              <th>Birth_date</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone_number</th>
              <th>Land amount</th>
              <th>User name</th>
              <th>password</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas) => {
              return (
                <tr key={datas.id}>
                  <td>{datas.fname}</td>
                  <td>{datas.mname}</td>
                  <td>{datas.lname}</td>
                  <td>{datas.birth_date}</td>
                  <td>{datas.email}</td>
                  <td>{datas.address}</td>
                  <td>{datas.phone_number}</td>
                  <td>{datas.land_amount}</td>
                  <td>{datas.user_name}</td>
                  <td>{datas.password}</td>
                  <td>{datas.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplaySingleWoreda