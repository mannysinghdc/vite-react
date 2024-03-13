import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([])
    const [mode, setMode] = useState("primary")


    const toggle = () => {

        mode === "primary" ? setMode("dark") : setMode("primary")

    }

    const getData = async () => {
        axios.get("https://65f09cbada8c6584131c24a6.mockapi.io/curd")
            .then((resp) => {
                setData(resp.data)
            })

    }

    const deleteHandler = (id) => {
        if (id > 0) {
            if (confirm("Are you sure to delete this item?")) {
                axios.delete(`https://65f09cbada8c6584131c24a6.mockapi.io/curd/${id}`)
                    .then(() => {
                        getData()
                    })
            }
        }

    }

    const setStraoge = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>

            <div className="container">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={toggle} />
                </div>
                <h2>Read Opration</h2>
                <Link to='/'>
                    <button className="btn btn-primary btn-sm">Back</button>
                </Link>

                <div className="row mt-2">
                    <div className="col">
                        <table className={`table table-${mode}`}>
                            <thead>
                                <tr>
                                    <th scope="col">SNo.</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, i) => (
                                        <tr key={item.id}>
                                            <th scope="col">{i + 1}</th>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <Link to='/update'>
                                                    <button className="btn btn-primary btn-sm" onClick={() => setStraoge(
                                                        item.id,
                                                        item.name,
                                                        item.email)
                                                    }>Edit</button>
                                                </Link>
                                                <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(item.id)}>Delete</button>
                                            </td>

                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read
