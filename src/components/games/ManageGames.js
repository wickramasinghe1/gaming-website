import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import {useTable} from 'react-table';
import axios from "axios";
import {baseUrl, deleteGameUrl, getAllGameUrl, saveGameUrl} from "../../Config/urlConfig";
import {IMAGES} from "../../assests";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";

export default function ManageGames() {

    const [value, setValue] = useState([]);
    const [state, setState] = useState({
        gameName: '',
        gameDate: new Date(),
    });
    const [search, setSearch] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        getAllGamesHandler()
    }, [])

    const getAllGamesHandler = () => {
        axios.get(baseUrl + getAllGameUrl)
            .then(function (response) {
                // handle success
                console.log(response);
                if (!response.data.result) {
                    toast.warn("Games not Found! Please try again laser.")
                } else {
                    console.log("\n\n");
                    // console.log(response.data.result);
                    // setValue(response.data.result)

                    let data = response.data.result.map((item, index) => {
                        return (
                            {
                                col1: index + 1,
                                col2: item.gameName ? item.gameName : "-",
                                col3: item.gameDate ? item.gameDate : "-",
                                imageUrl: item.imageUrl ? item.imageUrl : IMAGES.NOTFOUND_IMG,
                                col5: item.gameId
                            })
                    });

                    setValue(data);
                }
            })
            .catch(function (error) {
                // handle error
                toast.error("[500] Internal Server Error! - " + error)
            })
    }

    const deleteRowHandler = (gameId) => {
        if (gameId) {
            axios.delete(baseUrl + deleteGameUrl + gameId)
                .then(function (response) {
                    // handle success

                    getAllGamesHandler()
                    toast.success(response.data.result)

                })
                .catch(function (error) {
                    // handle error
                    toast.error("[500] Internal Server Error! - " + error)
                })
        }
    }

    // table start
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
                Cell: tableProps => {
                    return moment(tableProps.row.original.col3).format('ll');
                }
            },
            {
                Header: 'Image',
                accessor: 'imageUrl',
                Cell: tableProps => {
                    return <img
                        src={tableProps.row.original.imageUrl}
                        width={80}
                        alt='games'
                    />
                }

            },
            {
                Header: 'Action',
                accessor: 'col5',
                Cell: tableProps => {
                    return <Button variant='danger'
                                   onClick={() => deleteRowHandler(tableProps.row.original.col5)}>Delete</Button>
                }
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
    } = useTable({columns, data: value})
    // table end


    // modal start
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const saveHandler = () => {
        const form = new FormData();
        form.append('gameName', state.gameName)
        if (selectedFile) form.append('imageFile', selectedFile)
        if (state.gameDate) {
            let _gameDate = state.gameDate
            let year = _gameDate.getUTCFullYear();
            let month = _gameDate.getUTCMonth() + 1;
            let date = _gameDate.getUTCDate();
            let finalDate = year + '-' + month + '-' + date
            console.log(finalDate)
            form.append('gameDate', finalDate)
        }

        axios.postForm(baseUrl + saveGameUrl, form)
            .then(function (response) {
                // handle success
                getAllGamesHandler()
                toast.success(response.data.result)
            })
            .catch(function (error) {
                // handle error
                toast.error("[500] Internal Server Error! - " + error)
            })

        handleClose()
    }


    const changeHandler = (event) => {
        setSelectedFile(event?.target?.files[0]);
        console.log(event?.target?.files[0])
        setIsSelected(true);
    };


    const searchHandler = () => {
        console.log(search.length)
        if (search.length > 0) {
            let dataArr = [...value]
            dataArr = dataArr.filter(item => item.col2.toUpperCase().includes(search.toUpperCase()))
            setValue(dataArr)
        } else {
            getAllGamesHandler()
        }
    }

    return (
        <div>
            <h3>Manage Games</h3>
            <br/>


            <Button variant='success' onClick={handleShow}>[+] Add new Game</Button>
            <br/>
            <br/>

            <InputGroup className="mb-3" style={{width: '30vw'}}>
                <Form.Control
                    placeholder="Game's name"
                    aria-label="Game's name"
                    aria-describedby="basic-addon2"
                    value={search} onChange={(event) => {
                    setSearch(event.target.value)
                    if (event.target.value.length === 0) {
                        getAllGamesHandler()
                    }
                }}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={searchHandler}>
                    Search
                </Button>
            </InputGroup>

            {/* table start*/}
            <table {...getTableProps()} style={{border: 'solid 1px blue'}}>
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


            {/* =====modal start==== */}
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
                        value={state.gameName} onChange={(event) =>
                        setState({
                            ...state,
                            gameName: event.target.value
                        })
                    }
                    />

                    Game's date:
                    <DatePicker selected={state.gameDate}
                                onChange={(date) => setState({...state, gameDate: date})}/>


                    Cover Image:
                    <div>
                        <input type="file" name="file" onChange={changeHandler}/>
                    </div>
                    {/*More Info:  https://www.pluralsight.com/guides/uploading-files-with-reactjs */}
                    <br/>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveHandler}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* modal end */}

            <ToastContainer/>
        </div>
    )

}
