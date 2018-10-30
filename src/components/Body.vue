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
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel></b-col>
        <b-col><b-row><h1>The candle</h1></b-row><b-row>A candle is an ignitable wick embedded in wax, or another flammable solid substance such as tallow, that provides light, and in some cases, a fragrance. A candle can also provide heat, or be used as a method of keeping time.

A person who makes candles is traditionally known as a chandler.[1] Various devices have been invented to hold candles, from simple tabletop candlesticks, also known as candle holders, to elaborate chandeliers.[2]

For a candle to burn, a heat source (commonly a naked flame) is used to light the candle's wick, which melts and vaporizes a small amount of fuel (the wax). Once vaporized, the fuel combines with oxygen in the atmosphere to ignite and form a constant flame. This flame provides sufficient heat to keep the candle burning via a self-sustaining chain of events: the heat of the flame melts the top of the mass of solid fuel; the liquefied fuel then moves upward through the wick via capillary action; the liquefied fuel finally vaporizes to burn within the candle's flame.

As the solid fuel (wax) is melted and burned, the candle becomes shorter. Portions of the wick that are not emitting vaporized fuel are consumed in the flame. The incineration of the wick limits the exposed length of the wick, thus maintaining a constant burning temperature and rate of fuel consumption. Some wicks require regular trimming with scissors (or a specialized wick trimmer), usually to about one-quarter inch (~0.7 cm), to promote slower, steady burning, and also to prevent smoking. Special candle-scissors called "snuffers" were produced for this purpose in the 20th century and were often combined with an extinguisher. In modern candles, the wick is constructed so that it curves over as it burns. This ensures that the end of the wick gets oxygen and is then consumed by fire—a self-trimming wick.</b-row></b-col>
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