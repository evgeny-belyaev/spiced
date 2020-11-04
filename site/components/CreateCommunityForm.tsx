import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import { Logger } from "./logger"
import { ApiClient } from "./apiClient"

const log = new Logger("CreateCommunityForm")

type Props = {
    userId: string
}

export const CreateCommunityForm: React.FC<Props> = (props: Props) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")

    const handleCreate = async () => {
        log.debug("handleCreate!")

        const response = await ApiClient.createCommunity({
            title: name,
            description: description,
            userId: props.userId
        })

        setUrl(response.url)
    }

    return url ? (
        <a href={url}>Community url</a>
    ) : (
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter community name" onChange={(e) => { setName(e.target.value) }} />
                </Form.Group >

                <Form.Group>
                    <Form.Control type="text" placeholder="Enter community description" onChange={(e) => { setDescription(e.target.value) }} />
                </Form.Group>

                <Button variant="primary" onClick={handleCreate}>
                    Create
            </Button>
            </Form >)
}