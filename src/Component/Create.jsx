import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const naviagte = useNavigate()
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
    const submitHandler = (e) => {
        e.preventDefault()

        if (!name || !email) {
            alert("Please fill all details")
        } else {
            axios.post("https://65f09cbada8c6584131c24a6.mockapi.io/curd", {
                name: name,
                email: email,
                // headers
            })
            alert("New user created")
            naviagte('/read')
        }

    }

    return (
        <>
            <div className="container">
                <h2>Create Form</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-success btn-sm">Submit</button>
                            <Link to='/read'>
                                <button className="btn btn-dark btn-sm mx-4" style={{ minWidth: "70px" }}>List</button>
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create
