var FormModal = React.createClass({
  handleSubmit: function(e){
    var {name, address} = this.refs
    e.preventDefault()
    console.log(name.value)
    console.log(address.value)
    var stringedName = JSON.stringify(name.value)
    var stringedAddress = JSON.stringify(address.value)
    $.ajax({
      method: 'post',
      url: '/galleries',
      dataType: 'json',
      data: JSON.stringify({name: name.value, address: address.value}),
      contentType: "application/json"
    }).done(function(res){
      console.log(res)
    }).fail(function(err){
      console.log(err)
    })
  },


  render: function (){
    return (
      <div>
        <form ref="addGallery" onSubmit={this.handleSubmit} >
          <div className="well">
            <div className="form-group">
              <input ref="name" type="text" ref="name" className="form-control"/>
            </div>
            <div className="form-group">
              <input ref="address" type="text" ref="address" className="form-control"/>
            </div>
            <button type="submit">Add gallery</button>
          </div>
        </form>
      </div>
    )
  }
})

// success: function(res){
       // return console.log(res)