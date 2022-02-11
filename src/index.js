import React from 'react';
import ReactDOM from 'react-dom';
import Comment from "./comment.js";
const App=()=>{
  return(
    <Comment guess={[22,15,12,11]}/>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


