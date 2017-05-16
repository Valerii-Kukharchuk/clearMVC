(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;
            
    /*function bindSave() {
        gallery.saveDefer.then((item) => {
            model.saveData(item);    
        });
    }*/
    
    function bindUpdate() {
        gallery.eventHolder.on( gallery.updateEventName, (event, item) => {
            model.updateData(item);
        });
    }
    
    function bindEvents(){
        //bindSave();  
        bindUpdate();
    }
    
    function initGallery(data){
        gallery = new Gallery(data);   
    }
    
    function init() {
        
        model.getData().then((data) => {
            initGallery(data);
            bindEvents();
        });    
    }
    init();
    
}())
