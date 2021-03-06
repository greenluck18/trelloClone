import React, { useState } from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const style = {
    container: {
        backgroundColor: "#FFFFF0",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}

const TrelloList = ({ addNewCard, column, listId , editPost, deletePost}) => {

    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={style.container}>
                    <h4 style={{padding : "6px 8px 16px 8px", textAlign : "center"}}>{column.title}</h4>
                    {column.items.map((card, index) =>
                            <TrelloCard deletePost={deletePost} text={card.text} key={card.id} id={card.id} index={index} editPost={editPost} listId={listId}/>
                        )}
                    {provided.placeholder}
                    <TrelloActionButton addNewCard={addNewCard} columnName={column.title} buttontitle="Add Card" />
                </div>
            )}
        </Droppable>
    );
};

export default TrelloList;