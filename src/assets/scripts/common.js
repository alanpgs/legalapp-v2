var viewportWidth = window.innerWidth;
var viewportHeight = window.innerHeight;

// Website Controls

var webControls = {
  smoothScroll: function () {
    var links = document.querySelectorAll("[data-href]");

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
      e.preventDefault();
      var href = this.getAttribute("data-href");
      $("[data-href]").removeClass("active_");
      $(".law_main_content .content_").removeClass("active_");
      this.classList.add("active_");
      $("#" + href).addClass('active_');
      // var offsetTop = document.getElementById(href).offsetTop;
      var topCap = window.innerWidth > 980 ? $("header").height() + 20 : 0;
      var offsetTop = $("#" + href).offset().top - topCap;

      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  },
  counterAnim: function (element) {
    var obj = document.querySelectorAll(element);
    var startTime = null;
    var currentTime = Date.now();
    var initVal = 0;
    var duration = 2000;

    obj.forEach(function (el) {
      var lastVal = el.innerText;
      var step = function (currentTime) {
        if (!startTime) {
          startTime = currentTime;
        }

        var progress = Math.min((currentTime - startTime) / duration, 1);
        var fVal = Math.floor(progress * (lastVal - initVal) + initVal);

        var zValue = "0" + fVal;
        el.innerHTML = fVal < 10 ? zValue : fVal;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
      };

      window.requestAnimationFrame(step);
    });
  },
  scrollClass: function () {
    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
      window.scrollY > 10
        ? document.body.classList.add("scrolled")
        : document.body.classList.remove("scrolled");

      if (window.scrollY > lastScrollTop) {
        document.body.classList.remove("scrolling_top");
      } else {
        document.body.classList.add("scrolling_top");
      }
      lastScrollTop = window.scrollY;
    });
  },
  customTab: function (target) {
    var t = document.querySelector(target);

    if (t) {
      var tt = t.querySelectorAll("[data-tab-link]");
      var w = t.querySelectorAll("[data-tab-id]");

      tt.forEach(function (e, i, a) {
        e.onclick = function (el) {
          el.preventDefault();

          w.forEach(function (x, indx) {
            x.style.display = "none";
            var m = e.getAttribute("data-tab-link");
            var n = x.getAttribute("data-tab-id");

            a[indx].classList.remove("active_");

            if (m == n) {
              x.style.display = null;
            }
          });

          e.classList.add("active_");
        };

        a[0].click();
      });
    }
  },
  togglerButton: function () {
    var x = document.querySelector("[data-toggler]");

    if (!x) return;

    x.addEventListener("click", function () {
      document.body.classList.toggle("menu_active");
      x.classList.toggle("active_");
    });
  },
  inputControls: function () {
    var fields = document.querySelectorAll(
      "input:-webkit-autofill,input:not([type]),input[type=text]:not(.browser-default),input[type=password]:not(.browser-default),input[type=email]:not(.browser-default),input[type=url]:not(.browser-default),input[type=time]:not(.browser-default), input[type=date]:not(.browser-default), input[type=datetime]:not(.browser-default), input[type=datetime-local]:not(.browser-default), input[type=tel]:not(.browser-default), input[type=number]:not(.browser-default), input[type=search]:not(.browser-default), textarea"
    );

    if (!fields) return;

    fields.forEach(function (el) {
      if (el.value.length) {
        el.parentElement.classList.add("active_");
      }

      el.addEventListener("focus", function () {
        el.parentElement.classList.add("active_");
      });

      el.addEventListener("blur", function () {
        if (el.value.length) {
          el.parentElement.classList.add("active_");
        } else {
          el.parentElement.classList.remove("active_");
        }
      });
    });
  },
};

window.addEventListener("DOMContentLoaded", function () {
  webControls.customTab("[data-tab]");
  webControls.scrollClass();
  webControls.togglerButton();
  webControls.smoothScroll();
  webControls.inputControls();
  // webControls.counterAnim('data-counter');

  console.log(
    "%c Developed by PGS (http://pgsuae.com/)",
    "background: #45d98e; color: #fff;"
  );
});
