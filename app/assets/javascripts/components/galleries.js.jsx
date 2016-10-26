var Galleries = React.createClass({
  render: function(){
    var {galleries} = this.props

    var renderGalleries = function (){
      return galleries.map((gallery)=> {
        return (  
            <Gallery key={gallery.id} {...gallery} />
          )
      })
    }
    
    return (
      <div className="container">
        <div className="row">
          <div className="well text-center col-md-8 col-md-offset-2">
            <h1 className="h1">Galleries</h1>
              <ul className="sub-nav text-center">
                <li><a href="#">All</a></li>
                <li><a href="#">Add</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">Photos</a></li>
                <li><a href="#">Tags</a></li>
              </ul>
          </div>
          <div>
            {renderGalleries()}
          </div>
        </div>
      </div>
    )
  }
})











































// var Galleries = React.createClass({

//   render: function(){
//     var galleries = this.props.galleries.map(function(gallery){
//       return(
//         <Gallery gallery={gallery} key={gallery.id} />
//       )
//     })
//     return (
//       <div> 
//         <div className="container">
//           <h1>Galleries</h1>
//           <div id="galleries">
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Location</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 { galleries }
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     )
//   }
// })