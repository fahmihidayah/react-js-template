import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import React from "react";
import { LoaderFunction } from "react-router-dom";
import { useUserDetail } from "./hook";

export const AdminUserDetail: React.FC = () => {

    const [viewState, user] = useUserDetail();

    return <BaseAdminLayout title="User Detail" breadcrumbs={['Users', 'detail']}>
        <div className="card">
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>{user?.id}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{user?.first_name}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{user?.last_name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user?.email}</td>
                        </tr>
                        <tr>
                            <td>Is Verified</td>
                            <td>{user?.is_email_verified ?
                                <a className="btn btn-success btn-sm">Verified</a> :
                                <a className="btn btn-danger btn-sm">Unverified</a>}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </BaseAdminLayout>
}

export const adminUserDetailLoader: LoaderFunction = ({ params, request }) => {

    return ""
}