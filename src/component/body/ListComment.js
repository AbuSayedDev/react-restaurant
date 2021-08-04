import React from 'react';
import dateFormat from 'dateformat';



const ListComment = props =>{

    return(
        props.comments.map( comment =>{
            return(
                <div key={comment.id} className="py-3">
                    <h5>Author : {comment.author}</h5>
                    <p className="mb-0"><b>Comment :</b> {comment.comment}</p>
                    <p className="mb-0"><b>Rating :</b> {comment.rating}</p>
                    <p className="mb-0"><b>Date:</b> {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            );
        })
    );
}

export default ListComment;