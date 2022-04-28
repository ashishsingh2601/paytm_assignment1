import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Card } from 'antd';
import './SpecificUser.css';

const SpecificUser = () => {

  const { id } = useParams();

  const url = `https://gorest.co.in/public/v2/users/${id}/posts`;

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    setLoading(true);
    axios.get(url)
      .then((response) => {
        const user = response.data;
        console.log(user);
        setUser(user);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  return (
      <>
        <div className="user-details-container"> 
          {
            loading && <h1>Loading...</h1>
          }
          {
            (!loading && user.length === 0) && <h1>No posts yet :):</h1>
          }
          <div className="user-details-card-container">
            
            {
              user.map((ur)=>{
                return (
                  <Card className="user-card" title={ur.title} key={user.id} style={{width: '450px'}}>
                      <p><strong>Post ID: </strong>{ur.id}</p>
                      <p><strong>User ID: </strong>{ur.user_id}</p>
                      <p>{ur.body}</p>
                  </Card>
                )
              })
            }

          </div>
        </div>
      </>
    )
}

export default SpecificUser