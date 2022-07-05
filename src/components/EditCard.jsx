import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const EditCard = ({ text, closeForm, editPost, cardId, listId, deletePost }) => {
    const [post, setPost] = useState({ id: cardId, text: '' })
    const [form, setForm] = useState({
        formOpen: false,
        text: ""
    })
    const [message, setMessage] = useState({ text });

    const toggleHover = (e) => {
        e.target.style.color = "green"
    }

    const toggleLeave = (e) => {
        e.target.style.color = "lightgray"
    }
    const closeEdit = (e) => {
        // e.target.style.display = "none"
        var el = document.getElementsByClassName('editMode')[0]
        setForm({ ...form, formOpen: false })
        el.style.display = "none"
    }

    const close = (e) => {
        e.preventDefault()
        const newForm = {
            ...form, formOpen: false
        }
        const newEditForm = {
            ...form, formOpen: false
        }
        closeForm(newForm, newEditForm)
        setForm({
            formOpen: false,
            text: ""
        })
    }
    const EditCard = (e) => {
        e.preventDefault()
        setMessage(e.target.value);
    }

    const EditCards = () => {

        let stringMessage = JSON.stringify(message)
        let msg = JSON.parse(stringMessage)

        const newText = {
            id: cardId, text: msg.text ? msg.text.trim() : msg.trim()
        }

        editPost(newText, listId)
    }
    const DeleteCards = () => {
        const deleteCard = {
            ...post
        }
        deletePost(deleteCard, listId)
        setPost(
            { id: cardId, text: '' }
        )
    }

    return (
        <div >
            <Card
                onChange={EditCard}
                style={{
                    overflow: "visible",
                    minHeight: 100,
                    minWidth: 50,
                    padding: "6px 8px 2px"
                }}>

                <textarea
                    autoFocus
                    onBlur={close}
                    style={style.textArea}
                    defaultValue={message.text}
                ></textarea>

            </Card>
            <div style={style.formButtonGroup}>
                <Button
                    onMouseDown={EditCards}
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#5aac44", marginBottom: 8 }} >Edit
                </Button>

                <Button
                    onMouseDown={DeleteCards}
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#CD5C5C", marginLeft: 8, marginBottom: 8 }} >Delete card
                </Button>
            </div>
        </div>

    )

}



const style = {
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    },
    textArea: {
        fontSize: "18px",
        resize: "none",
        width: "100%",
        overflow: "hidden",
        owerflowWrap: "break-word",
        outline: "none",
        border: "none"
    }
}

export default EditCard 