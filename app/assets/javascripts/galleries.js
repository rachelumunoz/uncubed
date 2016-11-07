 $( document ).on('turbolinks:load', function() {

  $('#add-gallery').on('click', function(e){
    e.preventDefault()
    
    $.ajax({
      method: 'get',
      url: 'galleries/new',
      dataType: 'text'
    }).done(function(res){
      $('#this-is-it').html(res)
    }).error(function(err){
      console.log('error', err)
    })
  })
})