import { InputField } from "@/components/input";
import { BaseAdminLayout } from "@/pages/base/admin/BaseAdminLayout";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { AdminRoleFormHook, useAdminRoleForm } from "./hook";

const roleValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name required'),
})

export const AdminAddRole: React.FC = () => {

    const adminRoleFormHook : AdminRoleFormHook = useAdminRoleForm();

    return <BaseAdminLayout breadcrumbs={["Roles", "Add"]} title="Add Role">
        <div className="row">
            <div className="col-md-6">
            <div className="card">
            <div className="card-body">
                <Formik initialValues={{ name: '' }}
                    validationSchema={roleValidationSchema}
                    onSubmit={(values, isSubmitting) => {
                        adminRoleFormHook.createRole(values)
                    }}>
                    {
                        ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                        (
                            <form onSubmit={handleSubmit} method="post">
                                <InputField id="name" label="Name" type="text" onChange={handleChange} value={values.name} placeHolder="" error={errors.name}></InputField>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        </div>
            </div>
        </div>
    </BaseAdminLayout>
}