"use client"
import react, { useEffect } from 'react';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CreateList() {
    const [formObj, setFormObj] = useState({
        label: '',
        description: '',
        columnNumber: ''
    })


    const [taskList, setTaskList] = useState([]);

    function saveData(event: any) {
        event.preventDefault();
        let data: any = [...taskList];
        data.push(formObj);
        setTaskList(data);

    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormObj(values => ({ ...values, [name]: value }))
    }

    function onDelete(itemIndex: any) {
        let data: any = [...taskList];
        data.splice(itemIndex, 1);
        setTaskList(data);
    }

    function onCopy(index: any) {
        let data: any = [...taskList];
        data.push(data[index]);
        setTaskList(data);

    }

    return (
        <>
            <div>
                <div className='text-center'>
                    <form onSubmit={saveData}>
                        <Row>
                            <Col lg="8">
                                <label>Label</label>
                                <input type="text" name="label"
                                    onChange={handleChange} value={formObj.label || ""}>

                                </input>
                            </Col>
                            <Col lg="8">
                                <label>Description</label>

                                <input type="text" name="description"
                                    onChange={handleChange} value={formObj.description || ""}>

                                </input>
                            </Col>
                            <Col lg="8">
                                <label>Column number</label>

                                <input type="number" name="columnNumber"
                                    onChange={handleChange} value={formObj.columnNumber || ""}>

                                </input>
                            </Col>
                        </Row>



                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <Row>
                        {
                            taskList?.length && taskList.map((item: any, index) => (
                                <Row>
                                    <Col md={4} lg={4}>
                                        <div>
                                            {
                                                item.columnNumber == 1 &&
                                                <div className="d-flex p-3 m-3 flex-column bd-highlight bg-white text-black">

                                                    <div>
                                                        Label: {item.label}
                                                    </div>
                                                    <div>
                                                        Description: {item.description}
                                                    </div>

                                                    <div className="d-flex flex-row bd-highlight mb-3">
                                                        <button className="p-2 bd-highlight"
                                                            onClick={() => onDelete(index)}
                                                        >Delete</button>
                                                        <button className="p-2 bd-highlight"
                                                            onClick={() => onCopy(index)}>Copy</button>
                                                    </div>
                                                </div>

                                            }
                                        </div>
                                    </Col>
                                    <Col md={4} lg={4}>
                                        <div>
                                            {
                                                item.columnNumber == 2 &&
                                                <div className="d-flex p-3 m-3 flex-column bd-highlight bg-white text-black">

                                                    <div>
                                                        Label: {item.label}
                                                    </div>
                                                    <div>
                                                        Description: {item.description}
                                                    </div>

                                                    <div className="d-flex flex-row bd-highlight mb-3">
                                                        <button className="p-2 bd-highlight"
                                                            onClick={() => onDelete(index)}
                                                        >Delete</button>
                                                        <button className="p-2 bd-highlight"
                                                            onClick={() => onCopy(index)}>Copy</button>
                                                    </div>
                                                </div>

                                            }
                                        </div>
                                    </Col>
                                    <Col md={4} lg={4}>
                                        <div>
                                            {
                                                item.columnNumber == 3 &&
                                                <div className="d-flex p-3 m-3 flex-column bd-highlight bg-white text-black">

                                                    <div>
                                                        Label: {item.label}
                                                    </div>
                                                    <div>
                                                        Description: {item.description}
                                                    </div>

                                                    <div className="d-flex flex-row bd-highlight mb-3">
                                                        <button className="p-2 bd-highlight"
                                                            onClick={() => onDelete(index)}
                                                        >Delete</button>
                                                        <button className="p-2 bd-highlight"
                                                            onClick={() => onCopy(index)}>Copy</button>
                                                    </div>
                                                </div>

                                            }
                                        </div>
                                    </Col>
                                </Row>

                            ))
                        }
                    </Row>

                </div>
            </div>
        </>
    )
}