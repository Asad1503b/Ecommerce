import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const Cards = (props) => {
    return (

        <div className="container text-center Card" >
            <Card style={{ width: '13rem', float: "left", marginLeft: "12px" }}>
                <Card.Img variant="top" src={props.img} alt="there was an image" />
                <Card.Body>
                    <Card.Title>{props.sname}</Card.Title>
                    <Card.Text>
                        {props.title}
                    </Card.Text>
                    <a href="{props.links}">
                        <Button variant="primary">watch now</Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}


export default Cards
