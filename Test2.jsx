import React from 'react'
 function Test2 () {
    const x = "myClass";
    const myobj = {
        name : "Viswa",
        bp : "50000",
        hra : "10000",
        da : "5000",
        pf :"8000"

    };


  return (
    <div>
      <h3 myClass={x}> Hi {myobj.name} Your Basic Pay {myobj.bp}
         Your House Rent Allowence{myobj.hra} Dearness Allowence{myobj.da} 
         Your Pf is {myobj.pf}</h3>
    </div>
  );
}
export default Test2
