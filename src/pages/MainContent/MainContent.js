import React, {useState} from 'react'
import {Button, Card, Badge} from 'antd';
import axios from 'axios';
import './MainContent.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFetchedUsers } from '../../redux/actions/userActions';



const url = 'https://gorest.co.in/public/v2/users';

const MainContent = () => {

    const users = useSelector((state) => state.allUsers.users);
    console.log(users);
    const dispatch = useDispatch();


    // const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleUserFetch = () =>{
       setLoading(true);
        axios.get(url)
            .then(response => {
                const users = response.data;
                console.log(users);
                dispatch(setFetchedUsers(users));
                setLoading(false);
            }).catch((e)=>{
                console.log(e);
            })
    }

    return (
        <>
            <div className='content-container'>
                <Button className='data-fetch-button' type="primary" onClick={handleUserFetch} disabled={loading}>Fetch Users</Button>
                {
                    loading && <h1>Loading...</h1>
                }
                <div className='user-card-container'>
                    {
                        users.map((user) => {
                            return (
                                
                                (user.status === "active") ?    
                                    <Link to={`/users/${user.id}`}>
                                        <Badge.Ribbon text="Active" color="green" className="status-badge">
                                            <Card className="user-card" title={user.name} key={user.id} style={{width: '450px'}}>
                                            <p><strong>User ID: </strong>{user.id}</p>
                                            <p><strong>E-mail: </strong>{user.email}</p>
                                            <p><strong>Gender: </strong>{user.gender}</p>
                                        </Card>
                                        </Badge.Ribbon>
                                    </Link>
                                :
                                (
                                    <Link to={`/users/${user.id}`}>
                                        <Badge.Ribbon text="Inactive" color="volcano" className="status-badge">
                                            <Card className="user-card" title={user.name} key={user.id} style={{width: '450px'}}>
                                            <p><strong>User ID: </strong>{user.id}</p>
                                            <p><strong>E-mail: </strong>{user.email}</p>
                                            <p><strong>Gender: </strong>{user.gender}</p>
                                        </Card>
                                        </Badge.Ribbon>
                                    </Link>
                                )
                                
                                
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MainContent