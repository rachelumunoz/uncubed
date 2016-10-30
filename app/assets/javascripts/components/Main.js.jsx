var Main = React.createClass({
  getInitialState: function(){
    return {
      galleryData: [],
      onDisplay: 'all',
      pageType: 'Galleries',
      currentUser: this.props.currentUser
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
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.pageType !== prevState.pageType){
      switch(this.state.pageType){
        case 'Galleries':
          return this.mainDisplay('Galleries')
          break
        case 'Sign Out':
          console.log('cdu')
          return this.mainDisplay('Sign Out')
      }
    }
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
  renderPageType: function(type){
    this.setState({
      pageType: type
    })
    alert('wired up')
  },
  handleDisplay: function(type){
    this.setState({
      onDisplay: type
    })
  },

  mainDisplay: function(type){
    switch(type){
        case 'Galleries':
          return <h1>render galleries</h1>
          
        case 'Add':
          return <FormModal/>
          break
    }
  },
  render: function(){
    var {galleryData, onDisplay, pageType} = this.state

    // var mainDisplay = function(){
      
    //     // case 'Popular':
    //     //   console.log('popular filter')
    //     //   break
    //     // case 'Photos':
    //     //   console.log('photos')
    //     //   break
    //     // case 'Tags':
    //     //   console.log('tags')
    //     //   break
    //   }
    // }
    var renderGalleries = function(){
      return galleryData.map((gallery)=>{
        return (
         <Gallery key={gallery.id} {...gallery} />
        )
      })
    }
    return(
      <div>
        <div>  
          <Navbar renderPageType={this.renderPageType}currentUser={this.props.currentUser}/>
        </div>
         <div className="container">
          <div className="row">
            <div className="well text-center col-md-8 col-md-offset-2">
              <h1 className="h1">{this.state.pageType}</h1>
              <SubNav onDisplay={this.handleDisplay}/>
            </div>
            <div>
              {/*mainDisplay()*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
})