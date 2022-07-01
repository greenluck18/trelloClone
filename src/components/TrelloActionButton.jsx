import React, { useState } from 'react'
import Icon from '@mui/material/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardForm from './CardForm';


const TrelloActionButton = ({addNewCard, columnName, buttontitle}) => {
        const [form, setForm] = useState({
        formOpen: false,
        text: ""
    })

    const closeForm = (newForm) => {
        setForm(newForm)
    }

    if (form.formOpen === false) {
        return (<div
            onClick={e => setForm({...form, formOpen : true})}
            style={style.button}>
            <Icon>add</Icon>
            <p>Add another card</p>
        </div>)
    } if (form.formOpen === true) {
        return (<div>
            <CardForm addNewCard={addNewCard} columnName={columnName} closeCard={closeForm}  buttontitle="Add Card" />
        </div>)
    }


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

export default TrelloActionButton 