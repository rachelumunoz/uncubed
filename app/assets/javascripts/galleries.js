 $( document ).on('turbolinks:load', function() {

  $('#add-gallery').on('click', function(e){
    e.preventDefault()
    
    $.ajax({
      method: 'get',
      url: 'galleries/new',
      dataType: 'text'
    }).done(function(res){
      $('#new-content').html(res)
    }).error(function(err){
      console.log('error', err)
    })
  })

  $('#add-review').on('click', function(e){
    e.preventDefault()

    var url = $(this).attr('href')
    $.ajax({url: url, dataType: 'text'})
    .done(function(res){
      console.log($('#new-review-form').length)
      if($('#new-review-form').length === 0){
        var form = $(res).insertAfter('#page-heading')
      }
      
      $('#new-review-form').toggle()
    }).error(function(err){
      console.log('error', err)
    })
  })

})