(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;            

    function bindUpdateGallery() {
        gallery.eventHolder.on( gallery.changeEventName, (event, item) => {
            updateGallery(item);
        });
    }

    function updateGallery(searchText) {
        model.getData(searchText).then((data) => {
            gallery.updateGallery(data);
        });   
    }
    
    function bindEvents(){
        bindUpdateGallery();
    }
    
    function initGallery(data){
        gallery = new Gallery(data);   
    }
    
    function init() {
        let startText = "start";
        model.getData(startText).then((data) => {
            initGallery(data);
            bindEvents();
        });    
    }
    
    init();
    
}())
