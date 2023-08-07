import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import React from "react";
import { UserTable } from "./UserTable";
import { useAdminListUser } from "./hook";
import { PageNumberComponent } from "@/components/pageNumber";

export const AdminListUsers: React.FC = () => {
    const [viewState, paginateResponseUser] = useAdminListUser();

    return <BaseAdminLayout title="Users" breadcrumbs={['Users']}>
       <div className="card">
        <div className="card-header">
            <h5>Users</h5>
        </div>
            <div className="card-body">
            <UserTable users={paginateResponseUser?.data??[]}></UserTable>
            <PageNumberComponent current={paginateResponseUser?.page??1} total={paginateResponseUser?.total??1}></PageNumberComponent>
            </div>
       </div>
    </BaseAdminLayout>
}