import { InputField } from "@/components/input";
import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import React from "react";
import { useAdminListRole } from "./hook";
import { SimpleTable } from "@/components/table";
import { RoleItem } from "./RoleItem";
import { Link } from "react-router-dom";

export const AdminListRoles: React.FC = () => {
    const { data } = useAdminListRole();
    return <BaseAdminLayout title="Roles" breadcrumbs={['Roles']}>
        <div className="card">
            <div className="card-header">
                <h5>Roles</h5>
            </div>
            <div className="card-body">
                
                <InputField id="keyword"
                    error={""}
                    label="Search"
                    value={""}
                    onChange={e => { }}
                    placeHolder=""></InputField>
                <SimpleTable columnNames={["ID", "Name", "Created At", "Updated At", "Actions"]}>
                    <>
                        {data.data?.map(e => <RoleItem role={e} />)}
                    </>
                </SimpleTable>
                <div className="text-end">
                    <Link className="btn btn-primary btn-sm" to="/admin/roles/add">Add</Link>
                </div>
                {/* <UserTable users={adminListUserHook?.data?.data ?? []}></UserTable>
                <PageNumberComponent current={adminListUserHook?.data?.page ?? 1} total={adminListUserHook?.data?.total ?? 1}></PageNumberComponent> */}
            </div>
        </div>
    </BaseAdminLayout>
}