var Main = React.createClass({
 
  render: function (){
    return (
      <div>
       <Nav/>
       <Galleries galleries={this.props.galleries} />
      </div>
    )
  }


})