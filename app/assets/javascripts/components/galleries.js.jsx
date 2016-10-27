var Galleries = React.createClass({
  // handleClick: function(e){
  //   e.preventDefault()
  //   //move this swtich somewhre for all pages
  //   switch(e.target.text){
  //     case 'All':
  //       console.log('render all galleries')
  //       break;
  //     case 'Add':
  //       console.log('render add gallery form')
  //       break;
  //     default:
  //       console.log('all galleries')
  //   }
    
  // },
  render: function(){
    var {galleries} = this.props
    // return (
    //   <div>
    //     <h1>from gall</h1>
    //   </div>
    // )
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
                <li onClick={this.handleClick}> <a href="#">All</a></li>
                <li onClick={this.handleClick}><a href="#">Add</a></li>
                <li onClick={this.handleClick}><a href="#">Popular</a></li>
                <li onClick={this.handleClick}><a href="#">Photos</a></li>
                <li onClick={this.handleClick}><a href="#">Tags</a></li>
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