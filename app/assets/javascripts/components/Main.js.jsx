var Main = React.createClass({
  getInitialState: function(){
    return {
      galleryData: [],
      onDisplay: 'All',
      pageType: 'Galleries',
      currentUser: this.props.currentUser
    }
  },
  // handleNavBarClick: function (e){
  //   e.preventDefault()
  // },
  render: function(){
    var {pageType} = this.state
    var renderPageType = function (){
      switch(pageType){
        case 'Galleries':
          return <Galleries/>
          break
      }
    }
    return(
      <div>
        {renderPageType()}
      </div>
    )
  }
})