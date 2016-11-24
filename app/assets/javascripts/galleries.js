 $( document ).on('turbolinks:load', function() {
  
  //form for adding a gallery
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
   

  //form for adding images    
  $('body').on('click', '#add-image', function(e){
    e.preventDefault()
    var imageForm = $('.add-image')

    if (imageForm.hasClass('hidden')){
      imageForm.removeClass('hidden')
    }else{
      imageForm.addClass('hidden')
    }
  })

  $('body').on('click', '#add-review', function(e){
    e.preventDefault()
    // alert('review clicked')
    var url = $(this).attr('href')
    console.log(url)
    $.ajax({
      method: 'get',
      url: url,
      dataType: 'text'
    }).done(function(res){
      $('.new-content .add-review').html(res)
    }).error(function(err){
      //do error things
      console.log('error', err)
    })
    $('.new-content .add-review').toggle()



  })
})