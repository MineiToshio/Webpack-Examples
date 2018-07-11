import React from "react";

function Teacher(props) {
  return (
    <li className="Teacher">
      <p>
        {props.name} <a href={`https://twitter.com/${props.twitter}`}>{props.twitter}</a>
      </p>
    </li>
  )
}

export default Teacher;