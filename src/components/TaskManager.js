
import React from "react";
import ReactDOM from "react-dom";


var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "Go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});

class TodoList extends React.Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
       <div className="relative shadow-lg mx-auto  card-body w-50 h-80 z-depth-2 align-items-center justify-content-center ">
         
          <TodoListItem key={index} 
          item={item} index={index}
           removeItem={this.props.removeItem}
            markTodoDone={this.props.markTodoDone} />
         
       </div>
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
  }
}
  
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.markTodoDone(index);
  }
  render () {
    var todoClass = this.props.item.done ? 
        "done" : "undone";
    return(
      <li className="list-group-item ">
        <div className={todoClass}>
          <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
        </div>
      </li>     
    );
  }
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      this.props.addItem({newItemValue});
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <div className=" container-fluid relative shadow-lg mx-auto  card-body w-50 h-80 z-depth-2 align-items-center justify-content-center ">
        <form ref="form" onSubmit={this.onSubmit} className="form-inline">
          <input type="text" ref="itemName" className="form-control w-100" placeholder="add a new Task..."/>
          <div className="flex justify-content-md-between" >
            <button type="submit" className="btn btn-primary m-3 "> Add Task </button> 
            <button type="submit" className="btn btn-primary m-3 "> Edit Task </button> 
          </div>
        </form>
      </div>
    );   
  }
}
  
class TodoHeader extends React.Component {
  render () {
    return <div className="flex justify-content-between container-fluid bg-danger text-white ">
            <div>
            <h1>RG Media</h1>
            </div>
            <div>
            <a href="/login">
                <button>Login</button>
              </a>
            </div>

            </div>
  }
}
  
class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems};
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

 //ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('app'));
export default TodoApp;