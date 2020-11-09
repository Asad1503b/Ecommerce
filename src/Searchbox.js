import React from 'react'
import './A.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const Searchbox = () => {
    return (
        <div>
            <InputGroup>
                <FormControl style={{ height: "5rem" }}

                    placeholder="Search Product"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="" className="btn-info">Search</Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    )
}

export default Searchbox
