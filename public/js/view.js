'use strict';
(function() {

    function Gallery (items) {        
        this.DOMElements = {
            saveBtn     : document.querySelector("#saveBtn"),
            refreshBtn  : document.querySelector("#refreshBtn")
        };

        //this.saveDefer = $.Deferred();
        this.items = items;
        this.counter = 0;
        
        this.eventHolder = $({});
        this.updateEventName = "update";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery();
            this.initListeners();
        },
        
        buildGallery : function () {
            console.log("Gallery is ready");
            console.log(this.items);
        },

        initListeners : function () {
            
            /*this.DOMElements.saveBtn.addEventListener("click", () => {
                let item = this.items[0];
                item.name = "New name";
                this.saveDefer.resolve(item);
            });*/
            
            this.DOMElements.refreshBtn.addEventListener("click", () => {
                this.eventHolder.trigger( this.updateEventName , [{counter: this.counter++}]);
            });
        } 

    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());
