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


  // handleClick: function(e){
  //   e.preventDefault()
  //   //move this swtich somewhre for all pages
  //   switch(e.target.text){
  //     case 'All':
  //       console.log('render all galleries')
  //       break;
  //     case 'Add':
  //       console.log('render add gallery form')
  //       break;
  //     default:
  //       console.log('all galleries')
  //   }