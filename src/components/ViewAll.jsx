import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [todoData,changeData]=useState(
        
            {"todos":[],"total":254,"skip":0,"limit":30}
        
    )
    const fetchData=()=>(
        axios.get("https://dummyjson.com/todos").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    )
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">todo</th>
                                            <th scope="col">completed</th>
                                            <th scope="col">userId</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {todoData.todos.map(
                                        (value,index)=>{
                                            return(
                                                <tr>
                                            <td>{value.id}</td>
                                            <td>{value.todo}</td>
                                            <td>{value.completed}</td>
                                            <td>{value.userId}</td>
                                        </tr>
                                            )
                                        }
                                    )}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll