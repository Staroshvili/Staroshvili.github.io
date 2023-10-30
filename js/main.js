function downloadFile(url){
    var link = document.createElement('a');
    link.href = url;
    link.target="_blank";
    link.download='';
    
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent("click");
    link.dispatchEvent(event);
  }
  
  var but = document.getElementById('dbut')
  but.addEventListener('click', function(){
    downloadFile(but.getAttribute('data-path'));
  })