(function ($) {
    
    inView('section')
    .on('enter', function(el){
        el.classList.add('active-view')
    });

    inView.offset(150);
  
})(jQuery);  

var filterExpandFn = function(){
    var btn_ = document.querySelector('[data-filter-expand-btn]');

    if(!btn_) return false;

    btn_.addEventListener('click', function(){
        document.body.classList.toggle('filter_expand')
    })

    if(window.innerWidth < 1200){
        btn_.click();
    }

}


window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('is-loaded');

    this.setTimeout(function(){
        document.querySelector('[data-loader').remove();
    }, 1000)

    filterExpandFn();

    $('[data-counter]').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});
