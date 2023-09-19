var viewportWidth = window.innerWidth, viewportHeight = window.innerHeight, webControls = {
    smoothScroll: function() {
        for (var links = document.querySelectorAll("[data-href]"), i = 0; i < links.length; i++) links[i].addEventListener("click", clickHandler);
        function clickHandler(e) {
            e.preventDefault();
            var href = this.getAttribute("data-href");
            $("[data-href]").removeClass("active_"), $(".law_main_content .content_").removeClass("active_"), 
            this.classList.add("active_"), $("#" + href).addClass("active_");
            var topCap = 980 < window.innerWidth ? $("header").height() + 20 : 0, offsetTop = $("#" + href).offset().top - topCap;
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    },
    counterAnim: function(element) {
        var obj = document.querySelectorAll(element), startTime = null;
        Date.now();
        obj.forEach(function(el) {
            var lastVal = el.innerText, step = function(currentTime) {
                startTime || (startTime = currentTime);
                var progress = Math.min((currentTime - startTime) / 2e3, 1), fVal = Math.floor(progress * (lastVal - 0) + 0), zValue = "0" + fVal;
                el.innerHTML = fVal < 10 ? zValue : fVal, progress < 1 ? window.requestAnimationFrame(step) : window.cancelAnimationFrame(window.requestAnimationFrame(step));
            };
            window.requestAnimationFrame(step);
        });
    },
    scrollClass: function() {
        var lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            10 < window.scrollY ? document.body.classList.add("scrolled") : document.body.classList.remove("scrolled"), 
            window.scrollY > lastScrollTop ? document.body.classList.remove("scrolling_top") : document.body.classList.add("scrolling_top"), 
            lastScrollTop = window.scrollY;
        });
    },
    customTab: function(target) {
        var t = document.querySelector(target);
        if (t) {
            var tt = t.querySelectorAll("[data-tab-link]"), w = t.querySelectorAll("[data-tab-id]");
            tt.forEach(function(e, i, a) {
                e.onclick = function(el) {
                    el.preventDefault(), w.forEach(function(x, indx) {
                        x.style.display = "none";
                        var m = e.getAttribute("data-tab-link"), n = x.getAttribute("data-tab-id");
                        a[indx].classList.remove("active_"), m == n && (x.style.display = null);
                    }), e.classList.add("active_");
                }, a[0].click();
            });
        }
    },
    togglerButton: function() {
        var x = document.querySelector("[data-toggler]");
        x && x.addEventListener("click", function() {
            document.body.classList.toggle("menu_active"), x.classList.toggle("active_");
        });
    },
    inputControls: function() {
        var fields = document.querySelectorAll("input:-webkit-autofill,input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default), input[type=date]:not(.browser-default), input[type=datetime]:not(.browser-default), input[type=datetime-local]:not(.browser-default), input[type=tel]:not(.browser-default), input[type=number]:not(.browser-default), input[type=search]:not(.browser-default), textarea");
        fields && fields.forEach(function(el) {
            el.value.length && el.parentElement.classList.add("active_"), el.addEventListener("focus", function() {
                el.parentElement.classList.add("active_");
            }), el.addEventListener("blur", function() {
                el.value.length ? el.parentElement.classList.add("active_") : el.parentElement.classList.remove("active_");
            });
        });
    }
};

window.addEventListener("DOMContentLoaded", function() {
    webControls.customTab("[data-tab]"), webControls.scrollClass(), webControls.togglerButton(), 
    webControls.smoothScroll(), webControls.inputControls(), console.log("%c Developed by PGS (http://pgsuae.com/)", "background: #45d98e; color: #fff;");
}), window.addEventListener("load", function() {
    var isCounter1 = !0, isCounter2 = !0;
    document.body.classList.add("is-loaded"), document.body.classList.add("init-delay"), 
    this.setTimeout(function() {
        document.querySelector("[data-loader").remove(), document.body.classList.remove("init-delay");
    }, 2e3);
    inView("section").on("enter", function(el) {
        el.classList.add("active-view"), el.classList.remove("exit-view"), "statistics" == el.id && isCounter1 && (webControls.counterAnim("[data-counter]"), 
        isCounter1 = !1), "most-watched" == el.id && isCounter2 && (webControls.counterAnim(".most_watched_wrapper .link_ h4"), 
        isCounter2 = !1);
    }).on("exit", function(el) {
        el.classList.add("exit-view");
    }), inView.offset(250), $("[data-model-box]").fancybox({
        modal: !0
    });
});