import React from 'react';

function Table() {
    return(
        <table border-collapse="collapse">
            <tr>
                <th>Type</th>
                <th>Duration</th>
                <th>Ongoing</th>
            </tr>
            <tr>
                <td>PreMEST</td>
                <td>4 weeks</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Core MEST</td>
                <td>12 weeks</td>
                <td>No</td>
            </tr>
        </table>
    );
}

export default Table;