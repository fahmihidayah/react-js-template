import { User, UserData } from "@/data/dto/user";
import React from "react";
import { UserItem } from "./UserItem";

interface Props {
    users: Array<UserData> | null
}

export const UserTable: React.FC<Props> = ({ users }) => {
    return <table className="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email </th>
                <th>Email Verified</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users!!.map(e => <UserItem user={e}></UserItem>)}
        </tbody>
    </table>
}