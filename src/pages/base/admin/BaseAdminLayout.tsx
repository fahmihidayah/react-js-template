import React from "react";
import { AdminNavbar } from "./AdminNavbar";
import { AdminSideMenu } from "./AdminSideMenu";
import "../../../styles.css"
import { AdminFooterLayout } from "./AdminFooterLayout";

type Props = {
    title : string,
    breadcrumbs : Array<String>
    children : JSX.Element
}

export const BaseAdminLayout: React.FC<Props> = ({title, breadcrumbs = [] ,children}) => {
    return <><AdminNavbar></AdminNavbar>
        <div id="layoutSidenav">
            <AdminSideMenu></AdminSideMenu>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">{title}</h1>
                        <ol className="breadcrumb mb-4">
                            {breadcrumbs.map(e => <li className="breadcrumb-item active">{e}</li> )}
                        </ol>
                        {
                            children
                        }
                    </div>
                </main>
                <AdminFooterLayout></AdminFooterLayout>
            </div>
        </div>
    </>
}