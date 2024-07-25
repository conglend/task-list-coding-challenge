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
        console.log('formObj', formObj);
        let data: any = [...taskList];
        data.push(formObj);
        setTaskList(data);
        console.log('taskList', taskList);
    }

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormObj(values => ({ ...values, [name]: value }))
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

                                <input type="text" name="columnNumber"
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
                            taskList?.length && taskList.map((item: any) => (
                                <div>
                                    {
                                        item.columnNumber == 1 &&
                                        <Col>
                                            <div>
                                                {item.label}
                                            </div>
                                        </Col>
                                    }
                                    {item.columnNumber == 2 &&
                                        <Col>
                                            <div>
                                                {item.label}
                                            </div>
                                        </Col>
                                    }

                                    {item.columnNumber == 3 &&
                                        <Col>
                                            <div>
                                                {item.label}
                                            </div>
                                        </Col>
                                    }
                                </div>

                            ))
                        }
                    </Row>

                </div>
            </div>
        </>
    )
}