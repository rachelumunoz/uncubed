var Galleries = React.createClass({

  render: function(){
    var galleries = this.props.galleries.map(function(gallery){
      return(
        <Gallery gallery={gallery} key={gallery.id} />
      )
    })
    return (
      <div> 
        <div className="container">
          <h1>Galleries</h1>
          <div id="galleries">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                { galleries }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
})