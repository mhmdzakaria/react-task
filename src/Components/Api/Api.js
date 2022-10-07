import React, { Component } from 'react'
import axios from 'axios'
import './Api.css'
export class Api extends Component {
    state =
        {
            users: []
        }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ users: response.data })
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            })
    }
    render() {
        const { users } = this.state
        return (
            <div>
                <div className='p-12 md:py-16 md:px-32 '> I used <b>Axios</b> with  <b>jsonplaceholder</b> to retrieve data . <br></br>
                    I tried to use <b>unsplash</b> api to retrieve cars images on the cards but there was an <b>error</b> and I am trying to solve it . </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-3  gap-4 p-5 grid-cols-1'>
                    {users.map(user =>
                        <div class="">
                            <div className='api-card rounded md:col-span-1 sm:col-span-1 col-span-1 shadow px-8 py-8 h-60'>
                                <h1 className='card-title'>
                                    User name : {user.name} {<br></br>}
                                    ID : {user.id}  {<br></br>}
                                    City : {user.address.city}  {<br></br>}
                                    Phone : {user.phone}  {<br></br>}
                                </h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default Api