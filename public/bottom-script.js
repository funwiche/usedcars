var tpj = jQuery;

var revapi1;

if (window.RS_MODULES === undefined) window.RS_MODULES = {};
if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {
  once:
    RS_MODULES.modules["revslider11"] !== undefined
      ? RS_MODULES.modules["revslider11"].once
      : undefined,
  init: function () {
    window.revapi1 =
      window.revapi1 === undefined ||
      window.revapi1 === null ||
      window.revapi1.length === 0
        ? document.getElementById("rev_slider_1_1")
        : window.revapi1;
    if (
      window.revapi1 === null ||
      window.revapi1 === undefined ||
      window.revapi1.length == 0
    ) {
      window.revapi1initTry =
        window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
      if (window.revapi1initTry < 20)
        requestAnimationFrame(function () {
          RS_MODULES.modules["revslider11"].init();
        });
      return;
    }
    window.revapi1 = jQuery(window.revapi1);
    if (window.revapi1.revolution == undefined) {
      revslider_showDoubleJqueryError("rev_slider_1_1");
      return;
    }
    revapi1.revolutionInit({
      revapi: "revapi1",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,768,480",
      gridwidth: "1240,1024,778,480",
      gridheight: "750,600,500,400",
      lazyType: "smart",
      perspectiveType: "local",
      editorheight: "750,600,500,400",
      responsiveLevels: "1240,1024,768,480",
      progressBar: {
        color: "rgba(0,0,0,0.15)",
        vertical: "top",
        size: 5,
      },
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true,
          swipe_min_touches: 50,
        },
        arrows: {
          enable: true,
          style: "uranus",
          hide_onmobile: true,
          hide_under: 600,
          hide_onleave: true,
          left: {
            h_offset: 30,
          },
          right: {
            h_offset: 30,
          },
        },
      },
      parallax: {
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 47, 48, 49, 50, 51, 55],
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
      },
      viewPort: {
        global: true,
        globalDist: "-200px",
        enable: false,
        visible_area: "20%",
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true,
      },
    });
  },
}; // End of RevInitScript

if (window.RS_MODULES.checkMinimal !== undefined) {
  window.RS_MODULES.checkMinimal();
}

var tinvwl_add_to_wishlist = {
  text_create: "Create New",
  text_already_in: "Product already in Wishlist",
  simple_flow: "",
  hide_zero_counter: "",
  i18n_make_a_selection_text:
    "Please select some product options before adding this product to your wishlist.",
  tinvwl_break_submit: "No items or actions are selected.",
  tinvwl_clipboard: "Copied!",
  allow_parent_variable: "",
  block_ajax_wishlists_data: "",
  update_wishlists_data: "",
  hash_key: "ti_wishlist_data_5bc5f059ace3c5d5eb65b736884da3a3",
  nonce: "2b22e7e6fc",
  rest_root: "https://klbtheme.com/harrier/wp-json/",
  plugin_url:
    "https://klbtheme.com/harrier/wp-content/plugins/ti-woocommerce-wishlist/",
  wc_ajax_url: "/harrier/?wc-ajax=tinvwl",
  stats: "",
  popup_timer: "6000",
};
var myajax = {
  ajax_url: "https://klbtheme.com/harrier/wp-admin/admin-ajax.php",
};
var wpcm = {
  ajax_url_get_models: "https://klbtheme.com/harrier/?wpcm-ajax=get_models",
  ajax_endpoint: "wpcm-ajax",
  nonce_models: "fd156b019d",
  lbl_no_models_found: "No models found",
  lbl_select_make_first: "Select make first",
};
var translate = {
  day: "day",
  hrs: "hrs",
  mins: "mins",
  secs: "secs",
};

var wpcf7 = {
  api: {
    root: "https://klbtheme.com/harrier/wp-json/",
    namespace: "contact-form-7/v1",
  },
};
var myajax1 = {
  ajax_url: "https://klbtheme.com/harrier/wp-admin/admin-ajax.php",
  security: "d4ecc60287",
};
var woocommerce_params = {
  ajax_url: "/harrier/wp-admin/admin-ajax.php",
  wc_ajax_url: "/harrier/?wc-ajax=%%endpoint%%",
};
var wc_cart_fragments_params = {
  ajax_url: "/harrier/wp-admin/admin-ajax.php",
  wc_ajax_url: "/harrier/?wc-ajax=%%endpoint%%",
  cart_hash_key: "wc_cart_hash_5bc5f059ace3c5d5eb65b736884da3a3",
  fragment_name: "wc_fragments_5bc5f059ace3c5d5eb65b736884da3a3",
  request_timeout: "5000",
};
var yith_woocompare = {
  ajaxurl: "/harrier/?wc-ajax=%%endpoint%%",
  actionadd: "yith-woocompare-add-product",
  actionremove: "yith-woocompare-remove-product",
  actionview: "yith-woocompare-view-table",
  actionreload: "yith-woocompare-reload-product",
  added_label: "Added",
  table_title: "Product Comparison",
  auto_open: "yes",
  loader:
    "https://klbtheme.com/harrier/wp-content/plugins/yith-woocommerce-compare/assets/images/loader.gif",
  button_text: "Compare",
  cookie_name: "yith_woocompare_list",
  close_label: "Close",
};
window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.modules = window.RS_MODULES.modules || {};
window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
window.RS_MODULES.defered = false;
window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
window.RS_MODULES.type = "compiled";
(function () {
  function maybePrefixUrlField() {
    if (this.value.trim() !== "" && this.value.indexOf("http") !== 0) {
      this.value = "http://" + this.value;
    }
  }

  var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
  if (urlFields) {
    for (var j = 0; j < urlFields.length; j++) {
      urlFields[j].addEventListener("blur", maybePrefixUrlField);
    }
  }
})();
(function () {
  var c = document.body.className;
  c = c.replace(/woocommerce-no-js/, "woocommerce-js");
  document.body.className = c;
})();
if (typeof revslider_showDoubleJqueryError === "undefined") {
  function revslider_showDoubleJqueryError(sliderID) {
    console.log(
      "You have some jquery.js library include that comes after the Slider Revolution files js inclusion."
    );
    console.log("To fix this, you can:");
    console.log(
      "1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on"
    );
    console.log("2. Find the double jQuery.js inclusion and remove it");
    return "Double Included jQuery Library";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact_form");
  const error = document.getElementById("error_output");
  const success = document.getElementById("success_output");
  const spinner = document.getElementById("submit_spinner");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    spinner.removeAttribute("style");
    fetch("/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        success.removeAttribute("style");
        form.reset();
      })
      .catch((err) => error.removeAttribute("style"))
      .finally(() => {
        spinner.style.display = "none";
        setTimeout(() => {
          success.style.display = "none";
          error.style.display = "none";
        }, 5000);
      });
  });
});
