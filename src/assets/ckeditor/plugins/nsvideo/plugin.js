CKEDITOR.plugins.add( 'nsvideo', {
  requires: 'widget',
  icons:'nsvideo',
    init: function( editor ) {
    editor.widgets.add( 'nsvideo', {
      button: 'Insert Video',
      template:
      '<div class="simplebox">' +
      `<video id="video1" style="width:600px;max-width:100%;" controls="">
      //       <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      //       <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
      //       Your browser does not support HTML5 video.
      //     </video>`
      +'</div>'
   
  } );
  
    }
});