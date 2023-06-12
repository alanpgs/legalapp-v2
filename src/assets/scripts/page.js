(function ($) {
    
    inView('section')
    .on('enter', function(el){
        el.classList.add('active-view')
    });

    inView.offset(150);
  
})(jQuery);  

window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('is-loaded');

    this.setTimeout(function(){
        document.querySelector('[data-loader').remove();
    }, 1000)

});