import { Link } from "react-router-dom"
import { BaseAdminLayout } from "../base/admin/BaseAdminLayout"
import { useHome } from "./hook"
import { UiState } from "@/data/constants";
import { TopMessage } from "@/components/message";

export const HomePage : React.FC= () => {
    const [viewState] = useHome();
    return <div className="container">

        <div className="row mt-4">
            <TopMessage viewState={viewState} />
            <div className="col-md-12">
                <Link to="login" className="btn btn-primary me-3">Login</Link>
                <Link to="sign_up" className="btn btn-success">Register</Link>
            </div>
        </div>
    </div>
}
