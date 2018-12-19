import React, { Component } from 'react';

class Todolist extends Component {


    state = {
        Add: '',
        Items: []
    };

btnClicked =()=>{
    alert("button clicked")
    this.setState({Items:[this.state.Items, this.state.Add]})
    this.setState({Add:''})
}
    addTask=(event)=>
    {
        this.setState({Add:event.target.value})
    }

    deleteTask=(event)=>
    {
        let index = this.state.Items.indexOf(event.target.innerText)

        let newArr =[this.state.Items]
        newArr.splice(index,1)
        this.setState({Items:newArr})
    }

    render() {
        return (
            <div >
                <h1>This is my To Do List</h1>
                className="container">

                <div className="row">

                    <div className="col-md-offset-1 col-md-5 col-md-offset-1">

                        <input type="text" onChange={this.addTask} value={this.state.Add} className="form-control" id="text" placeholder="Enter anything"/>
                    </div>

                    <div className=" col-md-5">

                        <button onClick={this.btnClicked} className="btn btn-primary">ADD</button>

                    </div>

                </div>
                <div className="row">

                    <div className="col-md-offset-2 col-md-10">
                        <br/>
                        <h4>task</h4>
                        <ul>
                            {this.state.Items.map(task => (
                                <li onClick={this.deleteTask}>{task}</li>

                            ) )}


                        </ul>
                    </div>

                </div>

            </div>
        )
    }
}

export default Todolist;


