import React from 'react'
import Navbar from './Navbar'

const AddTodo = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="label form-label">UserId</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="label form-label">Id</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="label form-label">Title</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div className="label form-label">Completed</div>
                            <input type="checkbox" name="" id="" className="form-check-input" /> true <br />
                            <input type="checkbox" name="" id="" className="form-check-input" /> false
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="button btn btn-success">Submit</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTodo