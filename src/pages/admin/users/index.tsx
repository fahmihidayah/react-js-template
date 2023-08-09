import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import React, { ChangeEvent } from "react";
import { AdminListUserHook, useAdminListUser } from "./hook";
import { PageNumberComponent } from "@/components/pageNumber";
import { InputField } from "@/components/input";
import { SimpleTable } from "@/components/table";
import { UserItem } from "./UserItem";

export const AdminListUsers: React.FC = () => {
    const adminListUserHook : AdminListUserHook = useAdminListUser();
    const users = adminListUserHook.data?.data ?? []

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
                <SimpleTable columnNames={["ID", "First Name", "LastName", "Email", "Email Verified", "Created At", "Updated At", "Action"]}>
                    <>
                        {users.map(e => <UserItem user={e}></UserItem>)}
                    </>
                </SimpleTable>
                <PageNumberComponent current={adminListUserHook?.data?.page ?? 1} total={adminListUserHook?.data?.total ?? 1}></PageNumberComponent>
            </div>
        </div>
    </BaseAdminLayout>
}