import React from 'react';
import { useParams } from 'react-router-dom';

function User() {

    const params = useParams();

  return (
    <div>User: {params.userid}</div>
  )
}

export default User