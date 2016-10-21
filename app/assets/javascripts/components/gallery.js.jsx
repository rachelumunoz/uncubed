var Gallery = React.createClass({
  getInitialState: function(){
    return { gallery : this.props.gallery}
  },
  handleClick: function(e){
    console.log('/galleries/'+ this.props.gallery.id + '/exhibitions')
    $.ajax({
      method: 'get',
      url:'/galleries/'+ this.props.gallery.id+ '/exhibitions',
      dataType: 'json',
      success: function(e){
        e.map(function(exh){
          console.log(exh)
          // return <Exhibition exhibition={exh} key={exh.id} />
        })

      }.bind(this)
    })
    console.log('poop')
  }, 
  render: function(){
    return (
      <tr>
        <td>
          <a onClick={this.handleClick}>
            {this.state.gallery.name}
          </a>
        </td>
        <td>
          {this.state.gallery.address}
        </td>
      </tr>
    )
  }
})
