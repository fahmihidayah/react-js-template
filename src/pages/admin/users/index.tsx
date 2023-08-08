import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import React, { ChangeEvent } from "react";
import { UserTable } from "./UserTable";
import { AdminListUserHook, useAdminListUser } from "./hook";
import { PageNumberComponent } from "@/components/pageNumber";
import { InputField } from "@/components/input";

export const AdminListUsers: React.FC = () => {
    const adminListUserHook : AdminListUserHook = useAdminListUser();

    return <BaseAdminLayout title="Users" breadcrumbs={['Users']}>
        <div className="card">
            <div className="card-header">
                <h5>Users</h5>
            </div>
            <div className="card-body">
                <InputField id="keyword"
                    error={""} 
                    label="Search" 
                    value={adminListUserHook.searchQuery.keyword} 
                    onChange={adminListUserHook.onChangeEvent} 
                    placeHolder=""></InputField>
                <UserTable users={adminListUserHook?.data?.data ?? []}></UserTable>
                <PageNumberComponent current={adminListUserHook?.data?.page ?? 1} total={adminListUserHook?.data?.total ?? 1}></PageNumberComponent>
            </div>
        </div>
    </BaseAdminLayout>
}