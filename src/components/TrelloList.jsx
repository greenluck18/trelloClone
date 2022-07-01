import React, { useState } from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ addNewCard, column, index, listId }) => {

    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={style.container}>
                    <h4>{column.title}</h4>
                    {column.items.map((card, index) =>
                        <div>
                            <TrelloCard text={card.text} key={card.id} id={card.id} index={index}/>
                        </div>)}
                    <TrelloActionButton addNewCard={addNewCard} columnName={column.title} buttontitle="Add Card" />
                    {provided.placeholder}
                </div>
)}
        </Droppable>
    );
};

const style = {
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}
export default TrelloList;