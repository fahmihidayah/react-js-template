import { Role } from "@/data/dto/role";
import React from "react";
import { Link } from "react-router-dom";
interface Props {
    role : Role
}

export const RoleItem : React.FC<Props> = ({role}) => {
    return <tr>
    <td>{role.id}</td>
    <td>{role.name}</td>
    <td>{role.created_at}</td>
    <td>{role.updated_at}</td>
    <td>
        <Link className="btn btn-danger btn-sm me-1" to="">Delete</Link>
        <Link className="btn btn-success btn-sm me-1" to={`/admin/users/${role.id}`}>Detail</Link></td>
</tr>
}