import React, { useState } from "react";
import "./App.css"
import ReactDOM from 'react-dom';
import TrelloList from "./components/TrelloList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { v4 as uuidv4 } from 'uuid';
import TrelloCard from "./components/TrelloCard";

const itemsFrom = [
]
const itemsDone = [
   
]

const columnsFromBackend =
{
    [uuidv4()]: {
        title: "ToDo",
        items: itemsFrom
    },
    [uuidv4()]: {
        title: "Done",
        items: itemsDone
    }
}


const App = () => {

    const [columns, setBoards] = useState(columnsFromBackend);

    // const [boards, setBoards] = useState([
    //     { id: 1, title: "ToDo", items: [{ id: 1, text: "Buy apples" }, { id: 2, text: "Wash cat" }, { id: 3, text: "information" }] },
    //     { id: 2, title: "Done", items: [{ id: 1, text: "Grab Crab" }, { id: 2, text: "Eat" }] }
    // ])

    // let numberOfItems = 0;
    // columns.forEach(el => {
    //     numberOfItems = +numberOfItems + (el.items.length)
    // })

    const styles = {
        listsContainer: {
            display: "flex",
            flexDirection: "row",
            marginRight: 8,
            padding : "6px 8px 16px 10px"
        }
    }

    const onDragEnd = (result, columns, setBoards) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {

            const sourceColumn = columns[source.droppableId];
            const destinationColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destinationColumn.items];
            const [removed] = sourceItems.splice(source.index, 1)
            destItems.splice(destination.index, 0, removed)

            setBoards({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destinationColumn,
                    items: destItems
                }
            })
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items]
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)

            setBoards({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            })
        }
    };

    const createPost = (newPost, columnName) => {
        if (newPost.text.trim().length !== 0) {
            Object.entries(columns).find(el => {
                if (el[1].title == columnName) {
                    el[1].items.push(newPost)
                }
            })
        }
  
        setBoards({
            ...columns
        })
    }

    const editPost = (newText, listId) => {
        if(newText.id){
        if (newText.text.length > 0) {
            const column = columns[listId];
            const copiedItems = [...column.items]
          
            copiedItems.map(el => {
                if (el.id == newText.id) {
                    el.text = newText.text
                }
            })
            setBoards({
                ...columns,
                [listId]: {
                    ...column,
                    items: copiedItems
                }
            })
        }
    } else {
            setBoards({
                ...columns
            })
        }

    }

    return (
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setBoards)}>
            <div className="App">
                <h1>Trello Clone</h1>
                <div style={styles.listsContainer}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <TrelloList addNewCard={createPost} key={columnId} column={column} index={index} listId={columnId} editPost={editPost} />)
                    })}
                </div>
            </div>
        </DragDropContext>
    );
}
export default App;
