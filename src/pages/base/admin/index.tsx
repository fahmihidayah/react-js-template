import React from "react";
import { BaseAdminLayout } from "./BaseAdminLayout";
import { LoaderFunction, redirect } from "react-router-dom";
import { getUserWithToken, isTokenAvailable } from "@/data/locals";

export const indexAdminLoader : LoaderFunction = () => {
    if(isTokenAvailable()) {
        return null
    }
    else {
        return redirect("/login")
    }
}

export const IndexAdmin: React.FC = () => {
    return <>
        <BaseAdminLayout title="Dashboard" breadcrumbs={["Dashboard", "Admin"]}>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">Users</div>
                        <div className="card-body">
                            <h4>20</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-header">Posts</div>
                        <div className="card-body">
                        <h4>20</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-header">Trafic</div>
                        <div className="card-body">
                        <h4>20</h4>
                        </div>
                    </div>
                </div>
                
            </div>
        </BaseAdminLayout>
    </>
}