var FormModal = React.createClass({
  handleSubmit: function(e){
    var {name, address, image} = this.refs
    e.preventDefault()
    $.ajax({
      method: 'post',
      url: '/api/v1/galleries',
      dataType: 'json',
      data: {gallery: {name: name.value, address: address.value}}
    }).done(function(res){
      console.log(res)
    }).fail(function(err){
      console.log(err)
    })

    this.refs.address.value = ""
    this.refs.name.value = ""
  },

  render: function (){
    return (
      <div className="well col-md-4 col-md-offset-4 text-center">
        <form action="/galleries" method="post"ref="addGallery" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div >
            <div className="form-group">
              <input type="text" ref="name" className="form-control" placeholder="name"/>
            </div>
            <div className="form-group">
              <input type="text" ref="address" className="form-control" placeholder="address"/>
            </div>

            <button className="btn btn-primary"type="submit">Add gallery</button>
          </div>
        </form>
      </div>
    )
  }
})


            
//*<div className="form-group">
//<input id="file" ref="image" type="file" className="form-control"/>
//</div>*/

// JSON.stringify({ 
//         gallery: { 
//           name: "this from gall",
//           address: '123 address', 
//           images_attributes: { 
//             image: formattedImage
//           },
//           tags: []
//         } 
      // })
// success: function(res){
       // return console.log(res)