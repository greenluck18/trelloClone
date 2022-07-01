import React from 'react'
import TrelloList from "./TrelloList"

const TrelloBoard = ({posts, create}) => {
    return (<div style={styles.listsContainer}>
        {posts.map(post =>
            <TrelloList create={create} post={post} key={post.id}/>
        )}
    </div>)
}
const styles = {
    listsContainer: {
        display: "flex",
        flexDirection: "row",
        marginRight : 8
    }
}

export default TrelloBoard;