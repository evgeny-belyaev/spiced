import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import { Logger } from "./logger"
import { ApiClient } from "./apiClient"

const log = new Logger("CreateCommunityForm")

export const CreateCommunityForm: React.FC<unknown> = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleCreate = async () => {
        log.debug("handleCreate!")

        await ApiClient.createCommunity({
            title: name,
            description: description
        })
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter community name" onChange={(e) => { setName(e.target.value) }} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter community description" onChange={(e) => { setDescription(e.target.value) }} />
            </Form.Group>

            <Button variant="primary" onClick={handleCreate}>
                Create!
            </Button>
        </Form>)
}