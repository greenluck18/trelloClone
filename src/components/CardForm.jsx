import React, { useState } from 'react'
import Icon from '@mui/material/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

const CardForm = ({ addNewCard, columnName, buttontitle, create, closeCard}) => {
    const [post, setPost] = useState({ id: '', text: '' })
    const [form, setForm] = useState({
        formOpen: false,
        text: ""
    })
   

    const addNewPost = (e) => {
        // post = { ...post, id: +number.lastItemId + 1 }
        e.preventDefault()
        const newPost = {
            ...post, id:  uuidv4()
        }
        // console.log(newPost)

        addNewCard(newPost, columnName)
        setPost({
            id: '',
            text: ''
        })
    }

    const close = (e) => {
        e.preventDefault()
        const newForm = {
            ...form, formOpen: false
        }
        closeCard(newForm)
        setForm({
            formOpen: false,
            text: ""
        })
    }

    return (<div >
        <Card

            style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>

            <TextareaAutosize
                placeholder="Enter a title for this card"
                autoFocus
                onBlur={close}
                value={post.text}
                onChange={e => setPost({ ...post, text: e.target.value })}
                style={{
                    resize: "none",
                    width: "100%",
                    overflow: "hidden",
                    outline: "none",
                    border: "none"
                }}
            />

        </Card>
        <div style={style.formButtonGroup}>
            <Button
                onMouseDown={addNewPost}
                variant="contained"
                style={{ color: "white", backgroundColor: "#5aac44", }} >{buttontitle}
            </Button>
            <Icon
                onClick={close}
                style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>

        </div>
    </div>)
}

const style = {
    button: {
        opacity: 0.5,
        color: "inherit",
        backgroundColor: "inherit",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        heigh: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

export default CardForm