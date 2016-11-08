// var FormModal = React.createClass({
//   handleSubmit: function(e){
//     var {name, address, image, file} = this.refs
//     e.preventDefault()
//     var formData = new FormData()
//     formData.append('file', file.files[0])
//     // ReactDOM.findDOMNode(
//     $.ajax({
//       method: 'post',
//       url: 'galleries',
//       dataType: 'json',
//       // data: {gallery: {name: name.value, address: address.value }},
//       data: { 
//         "gallery": { 
//           "name": name.value, 
//           "address": address.value
//         }
//       },

//       cache: false,
//       // contentType: false,
//       processData: false
//     }).done(function(res){
//       console.log(res)
//     }).fail(function(err){
//       console.log(err)
//     })

//     this.refs.address.value = ""
//     this.refs.name.value = ""
//   },

//   render: function (){
//     return (
//       <div className="well col-md-4 col-md-offset-4 text-center">
//         <form id="form" action="/api/v1/galleries" method="post"ref="addGallery" onSubmit={this.handleSubmit} encType="multipart/form-data" name="gallery">
//           <div >
//             <div className="form-group">
//               <input type="text" ref="name" className="form-control" placeholder="name"/>
//             </div>
//             <div className="form-group">
//               <input type="text" ref="address" className="form-control" placeholder="address"/>
//             </div>
//             <div>
//               <input id="upload" type="file" name="file" ref="file"/>
//             </div>

//             <button className="btn btn-primary"type="submit">Add gallery</button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// })

