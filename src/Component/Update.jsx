import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const navigateRead = useNavigate()
    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`https://65f09cbada8c6584131c24a6.mockapi.io/curd/${id}`, {
            name: name,
            email: email
        }).then(() => {
            navigateRead('/read')
        })
    }

    return (
        <>
            <div className="container">
                <h2>Update Form</h2>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-success btn-sm">Update</button>
                            <Link to="/">
                                <button className="btn btn-secondary btn-sm mx-1" style={{minWidth:"70px"}}>Home</button>
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update
