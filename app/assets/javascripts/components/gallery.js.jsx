var Gallery = React.createClass({
  render: function(){
    var {name, address, image_file_name, upvotes} = this.props
    return (
      <div className="well col-md-4 col-md-offset-4 text-center"> 
        <h3 className="h3">{name}</h3>
        <h5 className="h5">{address}</h5>
        <h2>{upvotes}</h2>
        <img src={image_file_name} />
      </div>
    )
  }
})





































// var Gallery = React.createClass({
//   getInitialState: function(){
//     return { gallery : this.props.gallery}
//   },
//   handleClick: function(e){
//     console.log('/galleries/'+ this.props.gallery.id + '/exhibitions')
//     $.ajax({
//       method: 'get',
//       url:'/galleries/'+ this.props.gallery.id+ '/exhibitions',
//       dataType: 'json',
//       success: function(e){
//         e.map(function(exh){
//           console.log(exh)
    
//         })

//       }.bind(this)
//     })
//     console.log('poop')
//   }, 
//   render: function(){
//     return (
//       <tr>
//         <td>
//           <a href="/galleries/"onClick={this.handleClick}>
//             {this.state.gallery.name}
//           </a>
//         </td>
//         <td>
//           {this.state.gallery.address}
//         </td>
//       </tr>
//     )
//   }
// })
