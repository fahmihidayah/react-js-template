import React from "react";
import { Link } from "react-router-dom";

interface Props {
    current : number;
    total : number;
}

export const PageNumberComponent : React.FC<Props> = ({current, total}) => {
    const pageArray = Array.from(Array(total).keys()).map(e => e + 1)         
    return <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><Link className="page-link" to="/admin/users?page=1">First</Link></li>
      <li className="page-item"><Link className="page-link" to={`/admin/users?page=${current-1 <= 0 ? 1 : current-1}`}>Previous</Link></li>
        { pageArray.map(e => <li className="page-item"><Link className="page-link"  to={`/admin/users?page=${e}`}>{e}</Link></li>) }
      <li className="page-item"><Link className="page-link" to={`/admin/users?page=${current+1 >= total ? total : current+1}`}>Next</Link></li>
      <li className="page-item"><Link className="page-link" to={`/admin/users?page=${total}`}>Last</Link></li>
    </ul>
  </nav>
}