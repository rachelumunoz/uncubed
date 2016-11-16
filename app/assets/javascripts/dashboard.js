$( document ).on('turbolinks:load', function() {
    if !($('header')){
      $('header').removeClass('hide')
    }
//     const pages = (type)=>{
//       switch(type){
//         case 'Galleries':
//         console.log('galleries')
//         break
//         case 'Photos':
//         console.log('photos')
//         break
//         case 'Reviews':
//         console.log('reviews')
//         break
//       }
//     }
    
//     $('body').on('click', '.sub-nav a', (e)=>{
//       e.preventDefault()
//       pages(e.target.innerHTML)
//     })
})