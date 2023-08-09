import React from "react";

interface Props {
    columnNames: Array<string>
    children: JSX.Element
}

export const SimpleTable: React.FC<Props> = ({ columnNames, children }) => {
    return <table className="table table-bordered">
        <thead>
            <tr>
                {columnNames.map(e => <th>{e}</th> )}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
}