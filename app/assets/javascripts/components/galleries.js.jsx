var Galleries = React.createClass({
  getInitialState: function(){
    return {
      galleryData: this.props.galleryData,
      onDisplay: 'all'

    }

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
  handleDisplay: function(type){
    // console.log(type)
    this.setState({
      onDisplay: type
    })
  },
  render: function(){
    var {galleryData, onDisplay} = this.state

    var mainDisplay = function(){
      switch(onDisplay){
        case 'All':
        return renderGalleries()
        break
        case 'Add':
        return <FormModal/>
        break
        case 'Popular':
        console.log('popular filter')
        break
        case 'Photos':
        console.log('photos')
        break
        case 'Tags':
        console.log('tags')
        break
      }
    }
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
            <SubNav onDisplay={this.handleDisplay}/>
          </div>
          <div>
            {mainDisplay()}
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