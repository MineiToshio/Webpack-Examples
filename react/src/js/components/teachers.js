import React, { Component } from "react";
import Teacher from "./teacher.js"

class Teachers extends Component {
  render() {
    return (
      <ul className="teachers">
        {
          this.props.data.teachers.map((teacherData) => {
            return <Teacher {...teacherData} key={teacherData.twitter} />
          })
        }
      </ul>
    )
  }
}

export default Teachers;