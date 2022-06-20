import React from "react";

class BasicForm extends React.Component {

    constructor() {
        super()
        this.state = {
            userName: "",
            comments: "",
            course: "React"
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value,
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleCourseChange = (event) => {
        this.setState({
            course: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName}  ${this.state.comments}  ${this.state.course}`)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h2>Basic Form</h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label name="userName">UserName</label>
                            <input type="text" placeholder="Enter name" value={this.state.userName} onChange={this.handleUserNameChange} />
                        </div>
                        <div>
                            <label name="comments">Comments</label>
                            <textarea placeholder="Enter comments here" value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                        </div>
                        <div>
                            <label name="course">Select Course</label>
                            <select value={this.state.course} onChange={this.handleCourseChange}>
                                <option value="React">React</option>
                                <option value="Vue">Vue</option>
                                <option value="Angular">Angular</option>
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default BasicForm