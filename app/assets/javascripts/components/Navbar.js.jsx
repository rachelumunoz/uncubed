var Navbar = React.createClass({
  handleClick: function(e){
    e.preventDefault()
    var type = e.target.text
    this.props.renderPageType(type)
  }, 

  render: function(){
    var {currentUser} = this.props
    var hasCurrentUser = function(){
      if(currentUser){
        return (
            <li><a onClick={this.handleClick} href="#">Sign Out</a></li>
        )
      }else{
        return(
            <li><a href="#">Log In</a></li>
        )

      }
    }
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">WhiteCube</a>
            </div>
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li onClick={this.handleClick}><a ref="Galleries" href="#">Galleries</a></li>  
                {hasCurrentUser()}
              </ul>
            </div>
          </div>
        </nav>
      </div>  
    )
  }
})