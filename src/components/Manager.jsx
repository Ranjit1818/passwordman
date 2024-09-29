import React, { useEffect } from 'react'
import { useState, } from 'react';
import { v4 as uuidv4 } from 'uuid';



const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordarray, setpasswordarray] = useState([])

  useEffect(() => {

    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordarray(JSON.parse(passwords))

    }

  }, [])

  const savepassword = () => {
   
    
    setpasswordarray([...passwordarray, {...form, id:uuidv4()}])
    
    localStorage.setItem("passwords", JSON.stringify([...passwordarray, {...form, id:uuidv4()}]))
    setform
   
    console.log([...passwordarray, form])
  }

  const deletepassword = (id) => {
    let c = confirm("Do you really want to delete this password")
    if(c){
    console.log("deleteing passwords with id ", id)
    setpasswordarray(passwordarray.filter(item=>item.id!==id))
    localStorage.getItem("passwords", JSON.stringify([passwordarray.filter(item=>item.id!==id)]))
    }
    // console.log([...passwordarray, form])
  }

  const editpassword = (id) => {
    console.log("Editing passwords with id ", id)
    setform(passwordarray.filter(i=>i.id===id)[0])
    setpasswordarray(passwordarray.filter(item=>item.id!==id))
    // localStorage.getItem("passwords", JSON.stringify([...passwordarray, form]))

    // console.log([...passwordarray, form])
  }

  const handdlechange = (e) => {

    setform({...form, [e.target.name]: e.target.value})

  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <div className=" mycontainer">
        <h1 className='text-2xl text text font-bold text-center'>
          <span className='text-green-500'>/ &lt;</span>
          Pass
          <span className='text-green-500'>OP/ &gt;</span>
        </h1>
        <p className='text-green-700 text-lg text-center'>Your own Password manager</p>
        <div className=" flex flex-col p-4 text-black gap-5 items-center">

          <input value={form.site} onChange={handdlechange} placeholder='Enter website url' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="" />
          <div className="flex w-full justify-between gap-5">
            <input value={form.username} onChange={handdlechange} placeholder='Enter UserName' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="" />
            {/* <input className='rounded-full' type="text" /> */}
            <div className="relative">
              <input value={form.password} onChange={handdlechange} placeholder='Enter password' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="password" id="" />


            </div>
          </div>
          <button onClick={savepassword} className='flex justify-center items-center gap-2 bg-green-500 hover:bg-green-300 rounded-full px-3 py-2 w-fit border-2 border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover" >

            </lord-icon>
            Add password</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-xl py-4'>Your passwords</h2>
          {passwordarray.length === 0 && <div> No passwords to show</div>}

          {passwordarray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden">
            <thead className=' bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>UserName</th>
                <th className='py-2'>Passowrds</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordarray.map((item, index) => {
                return <tr key={index}>
                  <td className='text-center border border-white py-2 w-32'><a href={item.site} target='_blank'>{item.site}</a>

                  </td>
                  <td className='text-center border border-white py-2  w-32'>{item.username}</td>
                  <td className='text-center border border-white py-2  w-32'>{item.password}</td>
                  <td className='text-center border border-white py-2  w-32 font-semibold'>

                    <span className='my-3 gap-4 mx-2' onClick={()=>{deletepassword(item.id)}}>
                      <lord-icon
                      src="https://cdn.lordicon.com/wpyrrmcq.json"
                      trigger="hover"
                      style={{ "width": "25px", "height": "25px" }}>
                    </lord-icon></span>
                    <span className='my-3 gap-3 mx-2' onClick={()=>{editpassword(item.id)}}><lord-icon
                      src="https://cdn.lordicon.com/xdbaztkd.json"
                      trigger="hover"
                      style={{ "width": "25px", "height": "25px" }}>
                    </lord-icon></span>

                  </td>
                </tr>
              })}
            </tbody>
          </table>
          }
        </div>
      </div>
    </>
  )
}

export default Manager
