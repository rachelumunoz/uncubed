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


      
  $('body').on('submit', '#galleries-form', function(e){
    e.preventDefault()
    console.log('form submitted')
  })
  // $('#add-review').on('click', function(e){
  //   e.preventDefault()

  //   var url = $(this).attr('href')
    
  //   $.ajax({url: url, dataType: 'text'})
  //   .done(function(res){
  //     if($('#new-review-form').length === 0){
  //       var form = $(res).insertAfter('#page-heading')
  //     }
      
  //     $('#new-review-form').toggle()
  //   }).error(function(err){
  //     //do error things
  //     console.log('error', err)
  //   })
  // })

})