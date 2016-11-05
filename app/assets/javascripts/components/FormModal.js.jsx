var FormModal = React.createClass({
  handleSubmit: function(e){
    var {name, address, image, file} = this.refs
    e.preventDefault()
    console.log(file)
    // var formData = new FormData()
    var $form = $('#form')
    var formData = new FormData($form)
    // formDatax.append('gallery', $input[0].files[0])
    console.log(formData)
    // $.ajax({
    //   method: 'post',
    //   url: '/api/v1/galleries',
    //   dataType: 'json',
    //   data: $input,
    //   processData: false
    //   // data: {gallery: {name: name.value, address: address.value}}

    // }).done(function(res){
    //   console.log(res)
    // }).fail(function(err){
    //   console.log(err)
    // })

    this.refs.address.value = ""
    this.refs.name.value = ""
  },

  render: function (){
    return (
      <div className="well col-md-4 col-md-offset-4 text-center">
        <form id="form" action="/api/v1/galleries" method="post"ref="addGallery" onSubmit={this.handleSubmit} encType="multipart/form-data" name="gallery">
          <div >
            <div className="form-group">
              <input type="text" ref="name" className="form-control" placeholder="name"/>
            </div>
            <div className="form-group">
              <input type="text" ref="address" className="form-control" placeholder="address"/>
            </div>
            <div>
              <input id="upload" type="file" name="file" ref="file"/>
            </div>

            <button className="btn btn-primary"type="submit">Add gallery</button>
          </div>
        </form>
      </div>
    )
  }
})

