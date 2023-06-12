window.addEventListener('load', function() {
    
    var isCounter1 = true;
    var isCounter2 = true;
    // Adding Load Class
    document.body.classList.add('is-loaded');
    document.body.classList.add('init-delay');
    
    this.setTimeout(function(){
        document.querySelector('[data-loader').remove();
        document.body.classList.remove('init-delay');
    }, 2000)

    var removeActiveClassMenu = function(){
        var t = document.querySelectorAll('[data-href]');
        
        t.forEach(function(el){
            el.classList.remove('active_')
        })
    }

    inView('section')
    .on('enter', function(el){
        el.classList.add('active-view')
        el.classList.remove('exit-view');

        if(el.id == 'statistics'){
            if(isCounter1){
                webControls.counterAnim('[data-counter]')
                isCounter1 = false;
            }
        }

        if(el.id == 'most-watched'){
            if(isCounter2){
                webControls.counterAnim('.most_watched_wrapper .link_ h4')
                isCounter2 = false;
            }
        }

    }).on('exit', function(el){
        el.classList.add('exit-view')
    })

    inView.offset(250);

    $('[data-model-box]').fancybox({
        modal: true,           
    })

});
