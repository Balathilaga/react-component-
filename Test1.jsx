import React from 'react'

function Test1 () {

  const bp = 20000;
  return (
    <div>
      <h1>EMPLOYEE DETAILS</h1>
      Basic Day:{bp} <br />
      HRA : {bp*.4} <br />
      DA : {bp*.1} <br />
      PF :{bp*.12} <br />
      Net Salary :{bp + (bp*.4) + (bp*.1) - bp*.12}

    </div>
  )
}
export default Test1