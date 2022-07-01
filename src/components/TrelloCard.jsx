import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ id, text, index }) => {
    console.log("id", id)
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card style={style.container}>
                        <CardContent>
                            <Typography gutterBottom>
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
    );
};

const style = {
    container: {
        marginBottom: 8
    }
}
export default TrelloCard;