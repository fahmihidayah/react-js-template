import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import React from "react";
import { UserTable } from "./UserTable";
import { useAdminListUser } from "./hook";

export const AdminListUsers: React.FC = () => {
    const [viewState, listUsers] = useAdminListUser();

    return <BaseAdminLayout title="Users" breadcrumbs={['Users']}>
       <div className="card">
        <div className="card-header">
            <h5>Users</h5>
        </div>
            <div className="card-body">
            <UserTable users={listUsers}></UserTable>
            </div>
       </div>
    </BaseAdminLayout>
}