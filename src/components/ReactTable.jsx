import React, { useState } from 'react';
import { useTable } from 'react-table';

function ReactTable() {
    
    // Define state
    const [cellValue, setCellValue] = useState('');
 
    // Add data here to show in table
    const data = React.useMemo(
        () => [
            {
                reactCol1: 'Hey',
                reactCol2: 'World',
            },
            {
                reactCol1: 'Here',
                reactCol2: 'is the',
            },
            {
                reactCol1: 'Here',
                reactCol2: 'is the',
            },
            {
                reactCol1: 'Example',
                reactCol2: 'of react-table',
            },
        ],
        []
    )
 
    // Define column of the table
    const columns = React.useMemo(
        () => [
            {
                Header: 'React',
 
                // Accessor is the "key" in the data
                accessor: 'reactCol1',
            },
            {
                Header: 'Table',
                accessor: 'reactCol2',
            },
        ],
        []
    )
 
    // Function to get cell value
    const getCellValue = (cell) => {
        setCellValue(cell.value)
    }
 
    // Create the instance of table by
    // using hooks of react-table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })
 
  return (
    <>
            {/* Showing cell value */}
            <h3>Selected Cell Value: {cellValue}</h3>
            <table {...getTableProps()}
                style={{ border: 'solid 1px blue' }}>
 
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px red',
                                        background: 'aliceblue',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <>
                                            {/* Here added onClick function
                                            to get cell value */}
                                            <td
                                                onClick={() => getCellValue(cell)}
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                    background: 'papayawhip',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        </>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
  )
}

export default ReactTable