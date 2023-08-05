import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import React from "react";
import { LoaderFunction } from "react-router-dom";

interface Props {

}

export const AdminUserDetail : React.FC = () => {
    return <BaseAdminLayout title="User Detail" breadcrumbs={['users', 'detail']}>
        <div className="card">
            <div className="card-body">

            </div>
        </div>
    </BaseAdminLayout>
}

export const adminUserDetailLoader : LoaderFunction = ({params, request}) => {
    
    return ""
}