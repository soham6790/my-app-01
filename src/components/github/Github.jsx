import React, { useEffect, useState } from 'react'

function Github() {


    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/soham6790')
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <div>Followers: {data.followers}</div>
    <div>Location: {data.location}</div>
    <div>Created At: {data.created_at}</div>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github