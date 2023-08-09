import { AdminListRoles } from "@/pages/admin/roles";
import { AdminAddRole } from "@/pages/admin/roles/form";
import { AdminUserDetail, adminUserDetailLoader } from "@/pages/admin/userDetail";
import { AdminListUsers } from "@/pages/admin/users";
import { IndexAdmin, indexAdminLoader } from "@/pages/base/admin";
import { HomePage } from "@/pages/home";
import { LoginPage, loginAction } from "@/pages/login";
import { logoutLoader } from "@/pages/logout";
import { SignUpPage } from "@/pages/signUp";
import { createBrowserRouter, IndexRouteObject, NonIndexRouteObject, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [{
    path: "/admin",
    loader : indexAdminLoader,
    children: [
        {
            path: "",
            element: <IndexAdmin></IndexAdmin>
        },
        {
            path: "users",
            element: <AdminListUsers></AdminListUsers>,
        },
        {
            path: "users/:id",
            element : <AdminUserDetail></AdminUserDetail>,
            loader : adminUserDetailLoader
        },
        {
            path : "roles",
            element : <AdminListRoles />
        },
        {
            path: "roles/add",
            element : <AdminAddRole></AdminAddRole>
        }
       
    ]
},
{
    path: "/",
    element: <HomePage></HomePage>
},
{
    path: "/login",
    element: <LoginPage></LoginPage>,
    action: loginAction
},
{
    path: "/sign_up",
    element: <SignUpPage></SignUpPage>
},
{
    path: "/logout",
    loader: logoutLoader
},]

export const applicationRouter = createBrowserRouter(routes);