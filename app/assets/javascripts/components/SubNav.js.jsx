var SubNav = React.createClass({
  render: function(){
    return (
      <ul className="sub-nav">
        <li onClick={this.handleClick}> <a href="#">All</a></li>
        <li onClick={this.handleClick}><a href="#">Add</a></li>
        <li onClick={this.handleClick}><a href="#">Popular</a></li>
        <li onClick={this.handleClick}><a href="#">Photos</a></li>
        <li onClick={this.handleClick}><a href="#">Tags</a></li>
      </ul>
    )
  }
})