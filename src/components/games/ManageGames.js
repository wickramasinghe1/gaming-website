import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import { useTable } from 'react-table';

export default function ManageGames() {

    // table start
    const data = React.useMemo(
        () => [
            {
                col1: '001',
                col2: 'Call of duty 1',
                col3: '2023-02-25',
                imageUrl: require('../../assests/A1.jpg'),
                col5: ' delete button',
            },
            {
                col1: '002',
                col2: 'Call of duty 2',
                col3: '2023-02-25',
                imageUrl: require('../../assests/A2.jpg'),
                col5: ' delete button',
            },
            {
                col1: '003',
                col2: 'Assisin cread 1',
                col3: '2023-02-25',
                imageUrl: require('../../assests/A3.jpg'),
                col5: ' delete button',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Game Name',
                accessor: 'col2',
            },
            {
                Header: 'Game Date',
                accessor: 'col3',
            },
            {
                Header: 'Image',
                accessor: 'imageUrl',
                Cell: tableProps => (
                    <img
                        src={tableProps.row.original.imageUrl}
                        width={80}
                        alt='games'
                    />)
            },
            {
                Header: 'Action',
                accessor: 'col5',
                Cell: tableProps => (
                  <Button variant='danger'>Delete</Button>)
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    // table end


    // modal start
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
        const [selectedFile, setSelectedFile] = useState(null);
        const [isSelected, setIsSelected] = useState(false);

        const changeHandler = (event) => {
            setSelectedFile(event?.target?.files[0]);
            setIsSelected(true);
        };

       


        return (
            <div>
                <h3>Manage Games</h3>
                <br />


                <Button variant='success' onClick={handleShow}>[+] Add new Game</Button>
                <br />
                <br />

                <InputGroup className="mb-3" style={{ width: '30vw' }}>
                    <Form.Control
                        placeholder="Game's name"
                        aria-label="Game's name"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>

                {/* table start*/}
                <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            borderBottom: 'solid 1px blue',
                                            background: 'aliceblue',
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '13vw',
                                            paddingLeft: '10px'
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
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                    background: 'papayawhip',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* table end*/}


                {/* modal start */}



                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Game</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Game's Name:
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />

                        Game's date:
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />

                        Cover Image:
                        <div>
                            <input type="file" name="file" onChange={changeHandler} />
                        </div>
                        {/*More Info:  https://www.pluralsight.com/guides/uploading-files-with-reactjs */}
                        <br />


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* modal end */}



            </div>
        )
    
}
