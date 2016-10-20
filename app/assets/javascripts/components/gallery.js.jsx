var Gallery = React.createClass({
  getInitialState: function(){
    return { gallery : this.props.gallery}
  },

  render: function(){
    return (
      <tr>
        <td>{this.state.gallery.name}</td>
        <td>{this.state.gallery.address}</td>
      </tr>
    )
  }
})