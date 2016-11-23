 $( document ).on('turbolinks:load', function() {
  
  $('body').on('click', '#add-gallery', function(e){
    e.preventDefault()
    var that = $(this)
    $.ajax({
      method: 'get',
      url: 'galleries/new',
      dataType: 'text'
    }).done(function(res){
      $('#new-content').html(res)
    }).error(function(err){
      //do error things
      console.log('error', err)
    })
    $('#new-content').toggle()
  })
      
  // $('body').on('submit', '#galleries-form', function(e){
  //   e.preventDefault()
  //   console.log('form submitted')
  // })
  
  $('body').on('click', '#add-review', function(e){
    e.preventDefault()

    $.ajax({
      method: 'get',
      url: 'comments/new',
      dataType: 'text'
    }).done(function(res){
      $('#new-content').html(res)
    }).error(function(err){
      //do error things
      console.log('error', err)
    })
    $('#new-content').toggle()

  })


})