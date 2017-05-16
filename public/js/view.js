'use strict';
(function() {

    function Gallery (items) {        
        this.DOMElements = {
            saveBtn     : document.querySelector("#saveBtn"),
            refreshBtn  : document.querySelector("#refreshBtn"),
            galleryContainer : document.querySelector("#content"),
            searchText : document.querySelector("#searchText")
        };

        //this.saveDefer = $.Deferred();
        this.items = items;
        this.counter = 0;
        
        this.eventHolder = $({});
        this.updateEventName = "update";
        this.changeEventName = "changeSearchText";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery(this.items);
            this.initListeners();
        },

        formContentCard : function (element) {
            var div = document.createElement('div');
            div.className = "col-sm-6 col-md-4";
        
            div.innerHTML = //"<div class=\"col-sm-6 col-md-4\" > " +
                "<div class=\"thumbnail\"> " +
                "<img src=\"" + element.Poster + "\" alt=\"" + element.Poster + "\">" + 
                "<div class=\"caption\">" +
                    "<h3>" + element.Title + "</h3>" +
                    //"<p>...</p>
                    "<p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Detail</a></p>" +
                "</div>" +
                //"</div>" +
            "</div>";
            return div;
        },
        
        buildGallery : function (items) {
            console.log("Gallery is ready");
            console.log(items);
            // for( var i = 0; i < items.Search.length; i++) {
            //     this.DOMElements.galleryContainer
            //         .appendChild( this.formContentCard(items.Search[i]) );
            // }

            items.Search.forEach(item => this.DOMElements.galleryContainer
                    .appendChild( this.formContentCard(item) ));
        },

        cleanGallery : function() {
             while(this.DOMElements.galleryContainer.childNodes[0]){
                this.DOMElements.galleryContainer.removeChild(
                    this.DOMElements.galleryContainer.childNodes[0]);
             }    
        },

        updateGallery : function (items) {
           this.cleanGallery();
           this.buildGallery(items);
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

            this.DOMElements.searchText.addEventListener("change", (e) => {
                this.eventHolder.trigger( this.changeEventName, [e.currentTarget.value]);
            });
        } 

    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());
