CKEDITOR.plugins.add( 'nsvideo', {
    init: function( editor ) {
        editor.addCommand('insertNsVideo', {
            exec: function (e) {
              const now = new Date();
              const content = `
              <iframe width="560" height="315" src="https://www.youtube.com/embed/dV-znS6RPbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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