import './Table.css'

export default function Table(props) {
    const {list} = props
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Money</th>
                        <th>Rate</th>
                        <th>End Year</th>
                    </tr>
                </thead>
                <tbody>
                {list.map(result => {
                    return (
                        <tr key={result.Year}>
                            <td>{result.Year}</td>
                            <td>{result.Money}</td>
                            <td>{result.Rate}</td>
                            <td>{result.EndYear}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}