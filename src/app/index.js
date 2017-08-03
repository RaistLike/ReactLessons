var React = require('react');
var ReactDOM = require('react-dom');

// Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      pages: ['About', 'Blog', 'Contact'],
      viewCount: 0
  }},
  render: function(){
    var viewCount = setTimeout(function(){
      this.setState({
        viewCount: 3000
      });
    }.bind(this), 5000);
    var pages = this.state.pages;
    pages = pages.map(function(item, index){
      return (
        <TodoItemComponent item = {item} key = {index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return (
      <div>
        <h1> Welcome to my World! </h1>
        <ui> {pages} </ui>
        <p> {this.state.viewCount} </p>
      </div>
    );
  },
  onDelete: function(item){
    var updatedPageList = this.state.pages.filter(val => val !== item);
    this.setState({
      pages: updatedPageList
    });
  }
});

var TodoItemComponent = React.createClass({
  render: function(){
    return (<li>
        <div className='todo-item'>
          <span className='item-name'>{this.props.item}</span>
          <span className='item-delete' onClick={this.handleDelete}> x </span>
        </div>
      </li>);
  },
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
});

// put the component into html page
ReactDOM.render(<TodoComponent />, document.getElementById("todo-wrapper"));
