import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Draggable } from "react-beautiful-dnd";
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { getTabPanelUnstyledUtilityClass } from "@mui/base";
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@mui/material/Button';
import EditCard from "./EditCard";


const TrelloCard = ({ id, text, index, editPost, listId, deletePost }) => {
    const [form, setForm] = useState({
        formOpen: false,
        text: ""
    })

    const [editForm, setEditForm] = useState({
        formOpen: false,
        text: ""
    })

    const clickclick = (e) => {
        e.preventDefault();
        setEditForm({ ...editForm, formOpen: true })

       
    }

    const toggleHover = (e) => {
        e.target.style.color = "green"
    }

    const toggleLeave = (e) => {
        e.target.style.color = "lightgray"
    }
    const changeForm = () => {
        setForm({ ...form, formOpen: true })
    }
    const closeForm = (newForm, newEditForm) => {
        setForm(newForm)
        setEditForm(newEditForm)
    }

    if (editForm.formOpen === true) {
        return (<div >
           <EditCard deletePost={deletePost} text={text} closeForm={closeForm} editPost={editPost} cardId={id} listId={listId} />
        </div>)
    }
    if (form.formOpen === false) {
        return (
            <Draggable draggableId={String(id)} index={index}>
                {provided => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onContextMenu={e => clickclick(e)}>
                        <Card style={style.container}>
                            <CardContent>
                                <Icon style={style.icon} onClick={changeForm} onMouseEnter={event => toggleHover(event)} onMouseLeave={event => toggleLeave(event)}>edit</Icon>
                                <Typography gutterBottom>
                                    {text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>

                )}
            </Draggable>
        );
    } if (form.formOpen === true) {
        return (<div >
            <EditCard deletePost={deletePost} text={text} closeForm={closeForm} editPost={editPost} cardId={id} listId={listId} />
        </div>)
    } 
};


let style = {
    container: {
        marginBottom: 8
    },
    icon: {
        color: "lightgray",
        padding: 0,
        margin: 0,
        marginLeft: 230,
        position: "absolute",
        flexDirection: "row",
        cursor: "pointer"
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

export default TrelloCard;