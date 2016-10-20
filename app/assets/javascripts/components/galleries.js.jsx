var Galleries = React.createClass({

  render: function(){
    var galleries = this.props.galleries.map(function(gallery){
      return(
        <Gallery gallery={gallery} key={gallery.id} />
      )
    })
    return (
      <div>
        <h1>Galleries</h1>
        <div id="galleries">
          <table>
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
    )
  }
})