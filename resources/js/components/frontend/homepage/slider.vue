<template>
  <section class="hero-slider p-0 home-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 offset-lg-3">
          <VueSlickCarousel class="hero-section" v-bind="slick_settings" :rtl="settings.text_direction == 'rtl'">
            <div class="hero-slide-item" v-for="(slider,i) in sliders">
              <div class="slider__img">
                <a :href="slider.link" v-if="urlCheck(slider.link)">
                  <img :src="slider.slider_bg_image" :alt="slider.link">
                </a>
                <a href="javascript:void(0)" v-else-if="!slider.link">
                  <img :src="slider.slider_bg_image" :alt="slider.link">
                </a>
                <router-link v-else :to="slider.link"><img :src="slider.slider_bg_image" :alt="slider.link"></router-link>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <div class="hero-banner-section">

        <div class="row">
          <div class="col-lg-9 offset-lg-3">
            <div class="banner__items">
              <div class="banner__item" v-for="(banner,index) in banners" :key="'banner'+index">
                <div class="banner-img">
                  <a :href="banner.link" v-if="urlCheck(banner.link)">
                    <img :src="banner.image" :alt="banner.link">
                  </a>
                  <router-link v-else :to="banner.link"><img :src="banner.image" :alt="banner.link"></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!-- /.hero-banner-section -->
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: "slider",
  components : {VueSlickCarousel},
  data()
  {
    return {
      slick_settings : {
        "dots": true,
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "arrows": false,
        "autoplay": true,
        // "fade": true,
        "autoplaySpeed":5000,
      }
    }
  },
  computed: {
    sliders() {
      return this.$store.getters.getSliders;
    },
    banners() {
      return this.$store.getters.getSliderBanners;
    },
  },
  methods: {
  }
}
</script>