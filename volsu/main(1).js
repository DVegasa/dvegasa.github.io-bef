  
function vueSliderInit() {

    Vue.component('modal-slider', {
        props: ['prop', 'src', 'alt', 'mark'],
        computed: {
            PrevExists: function() {
                return this.$root.curPhoto-1>=0 ? true : false
            },
            NextExists: function() {
                return this.$root.curPhoto+1<this.$root.arPhoto.length ? true : false
            },
            TitleExists: function () {
                return this.alt === "" ? false : true
            },
            MarkExists: function () {
                return true
            },
        },
        methods: {
            CloseModal: function() {
                this.$root.showModal = false;
                document.getElementsByTagName("body")[0].className=""
            },
            PrevPhoto: function() {
                if(this.$root.curPhoto-1>=0)
                this.$root.arPhoto[this.$root.curPhoto-1].click()
    
            },
            NextPhoto: function() {
                if(this.$root.curPhoto+1<this.$root.arPhoto.length)
                this.$root.arPhoto[this.$root.curPhoto+1].click()
            },
        },
        template: '<div>'+
        '<div class="modal modal_media show" tabindex="-1" role="dialog" style="display:block;" >'+
            '<div class="container">'+
                '<div class="modal__dialog" role="document">'+
                    '<div class="modal__content">'+
                        '<div class="modal__header">'+
                            '<span class="mark" v-show="MarkExists" v-html="mark"></span>'+
                            '<h2 class="modal__title" ></h2>'+
                            '<button v-on:click="CloseModal" class="btn btn_transparent" data-dismiss="modal"><i id="upcomming_detail_close" class="icon icon-close-win"></i></button></div>'+
                        '<div class="modal__body modal__body_photo">'+
                            '<div class="photogallery">'+
                                '<div class="photogallery__wrapper photogallery__wrapper_view">'+
                                    '<i v-show="PrevExists" v-on:click="PrevPhoto" id="photo-arr-left" class="icon icon-arr_left"></i>'+
                                    '<div class="photogallery__box photogallery__box_view">'+
                                        '<div class="photogallery__photo">'+
                                            '<div class="photogallery__img-wrapper">'+
                                                '<img class="img" :src="src" :alt="alt" title="">'+
                                            '</div>'+
                                        '</div>'+
                                        '<div class="photogallery__descriptions mx-auto" v-show="TitleExists">'+
                                            '<div class="photogallery__descr-wrapper" style="border-radius: 10px 10px 10px 10px;">'+
                                                '<p class="photogallery__descr" style="align:center" v-html="alt"></p>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div><i v-show="NextExists" v-on:click="NextPhoto" id="photo-arr-right" class="icon icon-arr_right"></i>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="modal-backdrop show" style="display:block;"></div>'+ 
    '</div>',
    }); 

    var app = new Vue({
        el: '#averin-slider',
        data: {
            curPhoto: 0,
            showModal: false,
            arAlt: [],
            arPhoto: [],
            mark: "",
        },
        mounted: function () {
           
                elements = ($("a[rel='photo']"))
                // this.mark = document.getElementsByTagName('h2')[0].innerHTML
                this.mark = document.title
                var iter=0
                for(i=0;i<elements.length;i++){
                    if(elements[i].firstElementChild !== null){
                        elements[i].firstElementChild.style = "margin:30px;border-radius:10px"
                        elements[i].setAttribute('data-photo', iter++)
                        elements[i].onclick = function(e) {
                            e.preventDefault()
                            if(window.innerWidth> 992) {
                                app.curPhoto = parseInt(this.attributes["data-photo"].nodeValue)
                                app.showModal = true
                                document.getElementsByTagName("body")[0].className="modal-open"
                                Vue.nextTick(function(){
                                    
                                    document.getElementsByClassName("photogallery__descriptions")[0].style.width = 
                                            document.getElementsByClassName("photogallery__img-wrapper")[0].firstElementChild.width + 64
                                })
                            }
                        };
                    } else {
                        elements.splice(i, 1)
                    }
                    this.arPhoto.push(elements[i])
                    if(elements[i].firstChild.title || elements[i].firstChild.alt){
                        if(elements[i].firstChild.title) this.arAlt.push(elements[i].firstChild.title)
                        else this.arAlt.push(elements[i].firstChild.alt)
                    } else if (elements[i].title || elements[i].alt) {
                        if(elements[i].title) this.arAlt.push(elements[i].title)
                        else this.arAlt.push(elements[i].alt)
                    } else {
                        this.arAlt.push("")
                    }
                    
            }
    
        },
    })
    
    
    
    
}

window.vueSliderInit = vueSliderInit

