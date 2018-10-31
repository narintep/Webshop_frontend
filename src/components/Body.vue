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
                        img-src="https://lh3.googleusercontent.com/tWXWGX8LGuXP2_kKqEgkzgjo3_dqahpMFhVIqRCUF3FYUezgsmjgAT1z1KngcOC2RnvxPgADgmHlRn725zGzlWtfzwHYj3HBX-VKn0woyTjbvLxfIneEEofMOu37tLVVKNoiSaO1MahkfJ1g_aBhg7qmKXPito5YtgMxq_3e8-jPiCNuGLpRGyu3IGIheMptrkm-VZy39M55A2lkIkgOgCvAImaKjWe50xFeNnHdSShNVKPxpH--RZS3IZAjj1Dz-k1G6JJ6EEK1HwJqCT4_atn7lFxCWl7mDGGP1Bli_NBZEXlGOHlzY7oVnPDHGZToX0G_gv3sJzxJnSTF1ce6ROnksesH8rAu3ssprT746FVr2Esv_F9chDfdlIO7c-gq-llTeXToFcrv4YBetlf8OPa4gWKksaihEKi3olN0TlyuFli_BY5jB_qFFGfklWVEm8GM9PwSw9CG2Rf3A4pOwHMPqZt-laV-JZpX0jjqqGRW1IF4trsOhUSow9C6FkBT2KSXRAVJxFk4uOb6NuwGxZTPnTNRbAjAXSCVKq9Q_0RcsFvCby5dA7awzOYICCUtR3Y1uA8GLNpZD5g7MrJaChvvc8iXr4OmHgxrXvm1qzWe7lBWa1a9tvjk1V6z_tNiYPiBdMKgBR9fe7aTw5YPzhpV=w600-h337-no"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
      
          caption="General Candles" 
          img-src="https://lh3.googleusercontent.com/nYDl02beXwGoHzdX8uZpqQzc9TPyz0TDiyEt7igZt3ED7j0QAWwoz8wSdKTIu_AZqx4U70PDTrbWfjzvJk5VTY18D66o4R2WOBz-49QuGtZYDoTtaUrNE2cbqk9kysBG2wxz5lgni5MZoR4O55VGASzjUKXMvYsx-6b4EqETvBT0QKwGa9GHwrzdzlvTh-uanFHaV69cNLr-2CrOm-P_p-sjS9yOS4gZI1BOvIFs5jhuBwjqncz0AGWOhJwbIUNbpqYqYCt0b7UEU6CQ1JHU15Bm6Y5QPDh1jmGVW5lWjGT3b1ewjhrwx67OwFPwn4pgFwEwCeYC1azAecJrMnFwP6MG-fHJMPJlDoCSfEq60USK0LPDtMcwQNCBZsks1iAJcRQ8knW0jZbsYJeyq2VXbpapddWMdwz9qR_5WSWPv7HXqqNNbwefziAlTtdqKYXaEIVPfjxO28R_YDGauz2m98xPn1xgaSS-8kJSZsW5zdy_iTwufSRV7jW9DRL30phmKVbDto6XvnJH_cHoFexzN6IpT-Q37nRr1R2_72ggwzmkyohF-ndyeS1H0EgQeFtzb2QaYgYtCahlkGT3Wte-ytbCXpvpoazKykLbqG9_GnQ9UB5Z_qRQ8ZQ7Q6RYdLPVKLfaqv6wM1qZuED4hA6LUWKr=w600-h337-no"   >
          
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
          caption="Symbol Candles"
          img-src="https://lh3.googleusercontent.com/iS2Lm33YFmzfq9K_Ema1rH6Anhl-VFyPjjYaiXqdHWvLz2oIKuXfhqbPLtgHP2catLRDtQpPp2X-FKSzY-Sb_QRDPnORftMk5juIYwYyeuTQTtXzv5r_9ga-aSwCeUpzbiTtFPY12QotE7sNTot6umCYdgNfDIEM49IBEPVcInz1lMO4XHsvC-MdqGqRV1oYTPss_tgq0p84LAaesGimhPDYnVan1qGIokurioU1TZDoisednSWZvMSEpp3MkBMS9c9A2N5p5PQbJgjZ2F5A5aSYyvzGBSLhjKIOZKXQfBPUfhOIx3jPsp1Z1I5qnL24CMJa66wazXWpVpbC7q-9cqI7o74W17U7Y5eNRPyNJ5_aTyzeFifO1bOR_iv3PFwL0rUHeQNjtFe1SruZ9mjeVcnsum-5GhzEiL47buKlT_ZvwvM00kkfp4LcgA3mYrGvRpC45y4KChBH5mNAXtXNH0B6w8VXFHVnNJmAzGW7gxcWnuSnltWyYJWudYNTRd0eJtSt9Hskq4Qin-4O-5unNEL5GCTqKyq8Ulkj5UmKlUmGy9oRfnOBZ3V6ZdsAHzFYAym63bda1aYsD6kPGVWye8ZIvPtDUml7VWLlFT2OljbDHgY9VWwV5gOKFMZ4i02FZMN-Wm4wiMdCZmF3nHnlj_J7=w600-h337-no">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide 
          caption="Geoshape Candles"
          img-src="https://lh3.googleusercontent.com/wYnXIO9iY03grs6lMlWozt4wXwGzo9qz8g7IkiCBz4GmZhhrz1ucRp3HD_ht3pa-AhbIG5flRyUQxXPU-X5xL0vucN9PVRZk7Fl_bo3rgt6RxrAKI-59uL6Xz29OSYyZzZx1xQdFEKHUL4qQJQjV2SVPsxxOjsEaay-c9cIgo1pVRH70cieTBxzVOn6yT9rpdFl6xFagbUlwmwIjEm_OJnBId4PedcX2MV6m4n7Qv49Pd91dzYkJrQtGux4Ruis439mEC2tveetlazJoz_reVZi7mk_ZEqHb52bq-RG0QQZs9w4CfeXwHJChMGJlWDZb3GxF_mlEGxcUyVHRCqpwCaOk8q6r4vPklJVh9manH8ftuVwxrCQH82XXpnx7SLnJQGv1KWujEqAxJDj4rUdHX9QOA0B_X7AKybUdOrLJdGqLcZw_Pky4ga1GDfFFUI4su-B3-HfPGTEw8yKikzoF5ggSS3v8OHpW5-TTcEXlhtz4wxOIIhIa0-_1tjrHQM-b5R73FzqA2NR94KrORqAzm4Gr0zgRi30oCOPk0-tOWrZu4IA3blVNZA4LbyYX8WPjR95f4IoCb55OfECHqO9Q6OPEQjb57TChX_6e5pVnlnWtNjk2mr6ShjtNQTfEYWBRbGZr3nqxRb_uDFPCQWyKlppR=w600-h337-no">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide 
          caption="Geoshape Candles"
          img-src="https://lh3.googleusercontent.com/VkaSqDE7tFfGFYgcdL75rgvayo3GJaODEhnyXCbhHNFPROApthwB6KN_7PQLWo0nwSkM82lCg2TrvhJn3UGzWVAy9O40wGk-zpcL5p1k3dpFArY87XshK8Xr2T2jMP1xIHlogsaAN8ZiE3WEs41A16_whmrdL-UkUhulFR2A2xRFro8dHy1DKpOW336rbbh6l681uV7puOu4dyX6BWghFZVpTzZ1yxc7kBpvYpcsMQqlfq__laDkaTPuXc_qew1vfV3-oPLWz9LDOMMbXqcDusjdo-u4u38bRLN0l20fRlVDMfpzOZl-oL9bl9m1c5OPPS7yL_JmLIiZ7xsIQWsyEdzsiCMCq8aP0xODhdjDVJ-nRWR7EaTxstfmzHX2aAdGWcNrP4IkDBq7KHcciQA1g1eugJ9vdYzdo0B1DHsugcjgOk3qUM2IczNS-PFyf3ES_Rp22SI6EmgAf2ZjA02CN6eUpM4aIrZn7-3naCj-4DTw8DHEVpXvUbCv5bm-wwSfe-QFLg9sLjHII7AQoKi101QLsQnu7HdDAO5Tyo1dYM2hYRiEILbQyQv9YkF86KTelJYH0MrtsJyD-0HD127kPdxh0W0piUcKYw_t1Uk5-fhBwvnm_n3IlXoDnrYJmtGqGHuniJsnmGxBiYlWHfWAJbvH=w600-h337-no">
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