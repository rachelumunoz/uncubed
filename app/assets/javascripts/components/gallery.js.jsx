// var Gallery = React.createClass({
//   render: function(){
//     var {name, address, image_file_name, votes} = this.props
//     return (
//       <div id="gallery-component"className="well col-md-4 col-md-offset-4"> 
//         <span className="gallery-info"><h3 className="h3">{name}</h3></span>
//         <h5 className="h5 gallery-info">{address}</h5>
//         <h2></h2>
//         <img className="gallery-info" src={image_file_name}/>
//       </div>
//     )
//   }
// })





































// // var Gallery = React.createClass({
// //   getInitialState: function(){
// //     return { gallery : this.props.gallery}
// //   },
// //   handleClick: function(e){
// //     console.log('/galleries/'+ this.props.gallery.id + '/exhibitions')
// //     $.ajax({
// //       method: 'get',
// //       url:'/galleries/'+ this.props.gallery.id+ '/exhibitions',
// //       dataType: 'json',
// //       success: function(e){
// //         e.map(function(exh){
// //           console.log(exh)
    
// //         })

// //       }.bind(this)
// //     })
// //     console.log('poop')
// //   }, 
// //   render: function(){
// //     return (
// //       <tr>
// //         <td>
// //           <a href="/galleries/"onClick={this.handleClick}>
// //             {this.state.gallery.name}
// //           </a>
// //         </td>
// //         <td>
// //           {this.state.gallery.address}
// //         </td>
// //       </tr>
// //     )
// //   }
// // })
