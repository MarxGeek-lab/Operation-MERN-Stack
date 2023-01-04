import React from "react"

class DataComponent extends React.Component {
   render() {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>nom</th>
                        <th>nom</th>
                        <th>nom</th>
                        <th>nom</th>
                    </tr>
                </thead>
                <tbody>
                    {new Array(4).fill().map((_, i) => {
                        return (
                            <tr key={i}>
                                <td>Prenom</td>
                                <td>Prenom</td>
                                <td>Prenom</td>
                                <td>Prenom</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
   }
}

export default DataComponent