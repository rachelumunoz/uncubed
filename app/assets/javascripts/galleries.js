 $( document ).on('turbolinks:load', function() {
  
  //get form for adding a gallery
  $('body').on('click', '#add-gallery', function(e){
    e.preventDefault()
    var that = $(this)
    $.ajax({
      method: 'get',
      url: '/galleries/new',
      dataType: 'text'
    }).done(function(res){
      $('#new-content').html(res)
    }).error(function(err){
      // alert(err.responseText)
      console.log('error', err.responseText)
      $('#error-msg').removeClass('hidden')
      $('#error-msg').html(err.responseText)
    })
    $('#new-content').toggle()
  })
   
  //submit gallery
  $('body').on('submit', '#new_gallery_form', function(e){
    e.preventDefault()
    var form = $(this)
    var url = form.attr('action')
    var data = form.serialize()
    $.ajax({
      method: 'post',
      url: url,
      data: data,
      dataType: 'json'
    })
    .done(function(res){
      console.log(res)
      form.trigger('reset')
      $('#new-content').toggle()
    })
    .error(function(err){
      console.log('error', err)
    })

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

  //get add review form
  $('body').on('click', '#add-review', function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    $.ajax({url: url, dataType: 'text'})
    .done(function(res){
      $('.new-content .add-review').html(res)
    }).error(function(err){
      //do error things
      console.log('error', err)
    })
    $('.new-content .add-review').toggle()
  })

  // add review to gallery
  $('body').on('click', '#add-review', function(e){
    e.preventDefault()
    var url = $(this).attr('href')
    console.log(url)
    $.ajax({
      method: 'post',
      url: url,
      dataType: 'text'
    })
    .done(function(res){
      $('.new-content .add-review').html(res)
    })
    .error(function(err){
      //do error things
      console.log('error', err)
    })
  })


  //upvote & downvote
  $('body').on('click', '.gallery-votes a', function(e){
    e.preventDefault()
    var arrowClicked = $(this)
    
    var url = arrowClicked.attr('href')
    $.ajax({ method: 'post', url: url })
    .done(function(res){
      // alert(res.votes)
      var votePlace = arrowClicked.closest('.gallery-votes').find('.votes-count')
      $(votePlace).html(res.votes)
    })

  })


})