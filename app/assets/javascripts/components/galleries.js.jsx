var Galleries = React.createClass({
  getInitialState: function(){
    return {galleryData: this.props.galleryData}

  },
  showResults: function(response){
    this.setState({
            galleryData: response
        });
    console.log(this.state.galleryData[0])
  },
  componentDidMount: function() {
      this.loadData("/api/v1/galleries");
    },
  loadData: function(url){
    var that = this
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: url,
        success: function(response){
          return that.showResults(response);
        }
      })
  },
  render: function(){
    var {galleryData} = this.state

    var renderGalleries = function(){
      return galleryData.map((gallery)=>{
        return (
         <Gallery key={gallery.id} {...gallery} />
        )
      })
    }
    return(
       <div className="container">
        <div className="row">
          <div className="well text-center col-md-8 col-md-offset-2">
            <h1 className="h1">Galleries</h1>
            <SubNav/>
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