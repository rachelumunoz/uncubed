var GalleryForm = React.createClass({
  render: function(){
    return(
      <div>
        <form >
          <div className="well">
            <div className="form-group">
              <input type="text" ref="name" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="text" ref="address" className="form-control"/>
            </div>
            <button type="submit">Add gallery</button>
          </div>
        </form>
      </div>
    )
  }
})