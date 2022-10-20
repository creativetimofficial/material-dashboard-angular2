CKEDITOR.plugins.add( 'nsvideo', {
    init: function( editor ) {
        editor.addCommand('insertNsVideo', {
            exec: function (e) {
              const now = new Date();
              const content = `
              <div class="ckeditor-html5-video" data-responsive="true" style="text-align:center">
<video autoplay="autoplay" controlslist="nodownload" src="https://www.w3schools.com/html/mov_bbb.mp4" style="max-width: 100%; height: auto;">&nbsp;</video>
</div>

<div class="ckeditor-html5-video" style="text-align: center;">
<video controlslist="nodownload" src="https://www.w3schools.com/html/mov_bbb.mp4">&nbsp;</video>
</div>

<p>&nbsp;</p>

              `
              e.insertHtml(content);
            }
          });
          editor.ui.addButton('nsvideo', {
            label: 'Insert Video',
            command: 'insertNsVideo',
            toolbar: 'insert,0',
            icon: 'plugins/nsvideo/icons/timestamp.png'
          });
    }
});