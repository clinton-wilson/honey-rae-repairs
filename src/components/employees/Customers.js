import { Link } from "react-router-dom"
import "./customer.css"
export const Customer = ({id, email, fullName, address, phoneNumber }) => {
    return <section className="customer">
                    <div>
                        <Link to={`/customers/${id}`}>Name: {fullName}</Link>
                    </div>
                    <div>Email: {email}</div>
                    <div>Address: {address}</div>
                    <div>Phone number: {phoneNumber}</div>
                </section>
}