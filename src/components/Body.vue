<template>
  <div>
     <b-row>
        <b-col> <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="Flower Candles"
                        text=""
                        img-src="http://www.candle.in.th/wp-content/uploads/2018/04/WC-L07.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
          caption="General Candles" 
          img-src="https://www.girlsallaround.com/wp-content/uploads/2016/04/ti_725_46923805513341-600x337.jpg">
         
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
          caption="Symbol Candles"
          img-src="http://www.candle.in.th/wp-content/uploads/2018/04/WC-L22.jpg">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide 
          caption="Geoshape Candles"
          img-src="https://patcharachat5651.files.wordpress.com/2014/02/benjawan.jpg">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide 
          caption="Geoshape Candles"
          img-src="https://3.bp.blogspot.com/-IYtFeT7WDr0/WOIEua7C4oI/AAAAAAAAEOM/5kPEUl85sMUXtQw8SUxxcsFmK8wx0wRlwCLcB/s320/%25E0%25B8%2587%25E0%25B8%25B2%25E0%25B8%2599%25E0%25B9%2580%25E0%25B8%2597%25E0%25B8%25B5%25E0%25B8%25A2%25E0%25B8%2599%25E0%25B8%25AB%25E0%25B8%25AD%25E0%25B8%25A1%2B%25E0%25B8%25AA%25E0%25B8%25B3%25E0%25B8%25AB%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%259A%25E0%25B8%259C%25E0%25B8%25B9%25E0%25B9%2589%25E0%25B8%2597%25E0%25B8%25B5%25E0%25B9%2588%25E0%25B8%25AB%25E0%25B8%25B2%25E0%25B8%2587%25E0%25B8%25B2%25E0%25B8%2599%25E0%25B8%2597%25E0%25B9%258D%25E0%25B8%25B2%25E0%25B8%2597%25E0%25B8%25B5%25E0%25B9%2588%25E0%25B8%259A%25E0%25B9%2589%25E0%25B8%25B2%25E0%25B8%2599%2B%25E0%25B9%2580%25E0%25B8%259B%25E0%25B9%2587%25E0%25B8%2599%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%25A2%25E0%25B9%2584%25E0%25B8%2594%25E0%25B9%2589%25E0%25B9%2580%25E0%25B8%25AA%25E0%25B8%25A3%25E0%25B8%25B4%25E0%25B8%25A1%25E0%25B8%2588%25E0%25B8%25B2%25E0%25B8%2581%25E0%25B8%2587%25E0%25B8%25B2%25E0%25B8%2599%25E0%25B8%259D%25E0%25B8%25B5%25E0%25B8%25A1%25E0%25B8%25B7%25E0%25B8%25AD.jpg">
      </b-carousel-slide>

    </b-carousel></b-col>
        <b-col><b-row><h1>The candle</h1></b-row><b-row> Aroma candles are made with essential oils and have aromatherapeutic properties. That is to say, aroma candles are made for holistic therapeutic care — for providing well-being to the body, mind, and spirit. Aromatherapy is a curative that people have, for centuries, used to gain energy, relieve stress, enhance concentration, and manage pain. The fragrances of essential oils are emanated in order to stimulate the senses. Some aromas can even lower systolic blood pressure. Basically, aroma candles are used, not just for their pleasant fragrances, but also for their ability to change our mood 
          — to help us feel good. </b-row></b-col>
    </b-row>
   



  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>