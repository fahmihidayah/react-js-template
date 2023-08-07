import { User, UserData } from "@/data/dto/user";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    user: UserData
}

export const UserItem: React.FC<Props> = ({ user }) => {
    return <tr>
        <td>{user.id}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.email}</td>
        <td>{user.is_email_verified ?
            <a className="btn btn-success btn-sm">Verified</a> : 
            <a className="btn btn-danger btn-sm">Unverified</a>}</td>
        <td>{user.created_at}</td>
        <td>{user.updated_at}</td>
        <td>
            <Link className="btn btn-danger btn-sm me-1" to="">Delete</Link>
            <Link className="btn btn-success btn-sm me-1" to={`/admin/users/${user.id}`}>Detail</Link></td>
    </tr>

}