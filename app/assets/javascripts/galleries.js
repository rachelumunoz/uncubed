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
      $('#error-msg').toggle()
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
      form.trigger('reset')
      $('.gallery-info').prepend(
        `<div class="indiv-gallery">
          <div class="gallery-votes">
              <p>
                <a href="/galleries/${res.id}/like"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
                <p class="votes-count">
                  ${res.votes}
                </p>
                <a href="/galleries/${res.id}/dislike"><i class="fa fa-arrow-down" aria-hidden="true"></i></a>
          </div>
          <h3 class="gallery-name">${res.name}</h3>
        </div>`
      )
      $('#new-content').toggle()
    })
    .error(function(err){
      $('#error-msg').toggle()
      $('#error-msg').html(err.responseText)
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
      $('#error-msg').toggle()
      $('#error-msg').html(err.responseText)
    })
    $('.new-content .add-review').toggle()
  })

  // add review to gallery
  // $('body').on('click', '#add-review', function(e){
  //   e.preventDefault()
  //   var url = $(this).attr('href')
  //   var gallery = document.querySelector('[data-id]')
  //   var galleryId = gallery.dataset.id
  //   // console.log()
  //   $.ajax({
  //     method: 'post',
  //     url: `/galleries/${galleryId}/comments`,
  //     dataType: 'text'
  //   })
  //   .done(function(res){
  //     $('.new-content .add-review').html(res)
  //   })
  //   .error(function(err){
  //     //do error things
  //     console.log('error', err)
  //   })
  // })


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