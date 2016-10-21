var Exhibitions = React.createClass({

  render: function(){
    return(
      <tr>
        <td>
          <a>
            {this.state.exhibition.name}
          </a>
        </td>
        <td>
          {this.state.gallery.address}
        </td>
      </tr>
    )
  }
})