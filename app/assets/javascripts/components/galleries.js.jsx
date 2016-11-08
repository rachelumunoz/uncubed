// var Galleries = React.createClass({
//   getInitialState: function(){
//     return {
//       galleryData: [],
//       onDisplay: 'All',
//       pageType: 'Galleries',
//       currentUser: this.props.currentUser
//     }
//   },
//   showResults: function(response){
//     this.setState({
//             galleryData: response
//         });
//     // console.log(this.state.galleryData[0])
//   },
//   componentDidMount: function() {
//       this.loadData("/api/v1/galleries");
//     },
//   componentDidUpdate: function(prevProps, prevState){
//     if(this.state.onDisplay !== prevState.onDisplay){
//       switch(this.state.onDisplay){
//         case 'All':
//           //want to show all galleries

//           console.log('all galleries from componenet did update')
//           break
//         case 'Add':
//           //want to show form
//           console.log('add gallery form from component did update')

//       }
//     }
//   },
//   loadData: function(url){
//     var that = this
//       $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         url: url,
//         success: function(response){
//           return that.showResults(response);
//         }
//       })
//   },
//   // renderPageType: function(type){
//   //   this.setState({
//   //     pageType: type
//   //   })
//   //   alert('wired up')
//   // },
//   handleSubNavDisplay: function(type){
//     this.setState({
//       onDisplay: type
//     })
//   },

//   mainDisplay: function(type){
//     switch(type){
//         case 'Galleries':
//           return <h1>render galleries</h1>
          
//         case 'Add':
//           return <FormModal/>
//           break
//     }
//   },
//   render: function(){
//     var {galleryData, onDisplay, pageType} = this.state

//     var mainDisplay = function(){
//       switch(onDisplay){
//         case 'Add':
//           return <FormModal/>
//           break
//         default:
//           return renderGalleries()
//       }
//     }
//     var renderGalleries = function(){
//       return galleryData.map((gallery)=>{
//         return (
//          <Gallery key={gallery.id} {...gallery} />
//         )
//       })
//     }
//     return(
//       <div>
//          <div className="container">
//           <div className="row">
//             <div className="well text-center col-md-8 col-md-offset-2">
//               <h1 className="h1">{this.state.pageType}</h1>
//               <SubNav onSubNavClick={this.handleSubNavDisplay}/>
//             </div>
//             <div>
//               {mainDisplay()}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// })