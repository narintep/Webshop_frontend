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
                        
                        img-src="https://lh3.googleusercontent.com/1q3K4OKMI_zmACXcToY74YIzKi2G9GsguYqY-JQIK_09X6fYnFU4PW2ySEL2HNxtabDR_F4_6GYFsVFZCHaJ3zPTxqPxZpSL9RZeHBSVOkAInuU9fYxLjtWedJfuDjwIcUffDSJl9at15ZB7hdedd4bWG9erWXOZGo907m0UReR454xAauLUdmhbAk9SMhyfFgT5QGzSy3lkFdVZb17EdWpuXoZyGN3UPNe5UPu5Fe-676v3v4NnU9m7IiMyc0Nuda4OQd65UdIN5kuh3HdRBQDdVlePyzUxLjnPx9n2OCvhB7LIgP8MImUYv7VGjOMYgtu8e2ZbHCyNC_QwCa4flm3d6C2umn3Ba2-WQMVELpX5GTlzhZwNSaADzI-ZwWFCP6_fR30U40vLfOi64aPEukF5tbdzKigspVScl2DmR4RRgkgWt-n9vAykkXvAJSkXuF2Z1rzfLVwdCs9MGLZLjaWXu5DiMJbCJfEFi9Vb0R2hSruNf8MExVwUeVoNHH8s1mWbz9-sAIwPxy20uKZILmQb3P6nmxp_42KMjqYtWs6zWhrInmD3XS7rn7iHeF2M04YIzd8sP03AUSSw7XLMaQ5Y6NQMilFzIInA8urKecSQXW-Iw4-0WTiSpDVG7a7VaXb6zZ9h6R2RH73fOFnCE9fpdvAM1sjDLExdfbCNSx7pskqI3U4hHuf0D9XFFEv4b0oSKkiqyWknq_nLdA=w600-h337-no"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
      
          caption="General Candles" 
          img-src="https://lh3.googleusercontent.com/dllf_7mbhoORiCFvKzJ8QmRz_NXEUkqrR64GQD2UzvvUylLhQJHgy6F2OVEMmmcCY4Kg1eQdNmvW8y-zkxk4q5wjOk6t6_BRhHum6xFeT6lgFVmmt4LkiD4RGlfVh82DMcpd5d6UntIECgiUyt1kaD4Lr-MoxhVk3p23SjzdzX7JHnF8O-MEZRe7kwOk4QWeesFN6VSN1gG06w0iTz0CUZaO43yXveLryN2sn54UjU1M06tkiVLrp8cJf8sB9ML4LN4frplkzNKxN68AgrC_YV92XNoni-feXw-kr6AVVk6kWbl6FAOBPKih-Z8qPaGePPJaab6pl48cmBnQ3Q5qikxzg6HHGBLfg8rkb1UTirw9VEqMYdC1CIFt14_z5bWYk1W2x9tFsK1jLscap2GW7JfsIS3k1UUIW94cbmlGmwVEXCvF4vVXDXT7t2Vz-D1LAM32Qlj4nekkCzoq9VXKhsnAw6slI9F4a7xqy-OdmexIpeB924aBPiaV3CcozA4IrvMHABLpUfDVogTMulns_7M55MKlrs4R6m6He7Fb_xP7abRHPq1pjfIageaek0JxeKDu6lLP6oAt379PwGmjhtAC1_GfF-FVPv3FwmdLuV4xF6jk7T6yL0KEPz1jEk378Dc5wO5h5RAXj89ac4d-siw_W3i97WAjpqUxNCYqrImNwhnY5BBeSx3UQ1teshncvTkGvHK6zTAU4O5YgA=w600-h337-no"   >
          
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
          caption="Symbol Candles"
          img-src="https://lh3.googleusercontent.com/cyZ7unyQS4z_HCE5RRy2DSShv40gpi7UG6r7j-XfgTJlVTVfM2xCf_1BkC8OEKiHN3Rn9YVxtsIkWw8gSMlKCFfBlwZ2nsKNDUQsq-45YuCIDcEefJbnBTNwC9VNn67cNFuObFPdvXun6C3m0zVsdM4yrOZoktFIUqt01DItesqD8lP-RKTigwbDhV7Fjn39rm_6Vq8WjGRP589xFikJYISJ5sfSP9rcFvibrxLiKFrYEjQIldnJCoxrEuUPoRpoHmRbmetOOklESJoStQOBcjN-jGc9jHVjTTGs_aW8jJYI7PO5tcEDnFDrwsq0rsDEqsqFantoUkSkqqCMZlmkk1rxs2FL6gq3k7QODfKl0RHom3ZC7-CDqkT_ggFnNzdkrDfVLztUaCrCviZffOtpjv9KLTqlobUQh0UOCzJfUGe9ZHZa9Wpovfoy2pjCWOou-HWRkOgy2sTnlHKMWG-WVzmD-RER_bFeVXoWnN4ZchNTT2IRVEdw-umPJ8kgNMv6MaUEOMRCPOdjzA9lDih5ui4Q3vLjdRGibQtn9DDfeokvP_KjUTqm4f4mZ2CC0zNabR0etYcJIhHycqmDFXNc5OxOaGIOSgDLW-jVDPn1Euik4iPeD9q7e8XAfF7NjhYzqtceRtCj9JIZ28k2eEyPQl73aUMckDZCqwV8ULdytKpUaFGXJco46S4lyrFGX76--vBd2B5UmO3amlL7uA=w600-h337-no">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide 
          caption="Geoshape Candles"
          img-src="https://lh3.googleusercontent.com/jKQzXA6k3Ag0KW_lWgYzkSeBbSaDbObhMg5dpAGyTGxGJXKr59bZuZcwW_uy_tMphHGOXyMQUuARob9b6woN6iOLY3ujpekZbJIlsr1Rf7Jo59JGU9hFGkrlETmwETY7l57iJE3Wi3fPHXIZl9OigtKXb9u_Hw5HqM589BF5UwKSsnW9fW9DJpTqXj8cb8dpGg1WSQRBWbiCv6xZOOkzDdgA1mW6trcTkRVMMx1GUeIC4JZUrav16RtzkaDHP4D5ARDIBZSJQ2aurB3-ki68nXSefuOAqt0z3aksM-BSwgl1nUqV1iiL8iuu1Pj4oKxzJdRcBASl58-fVlM7nD3DrBd4jlfYIIQsuTjPV4B2UTnvRMSPrpITPDAVfvcq9f6D-PhA1cEEj82j6ckRzInFDgHOpvTIi9iazbTv4DnykvAPUFqbXJFJmhe8h0iqm_ePqvD38BELMo_YW6-eQgwTeutOQgy5f2eiBeqT7QSd01f1v6_sP_R5ZHQA8Wc3ZTZo4gWZH8CLtdwQ2VLEI5iZzxsKYFKiCS0V94WiOdncZzC6NhBMyM5qW563CHSrww35LbQo1g0cnQX8rSKE4jhZE7N6V12X8mNOtc2SseAll9hEMGfpw2tqg21N2xK_6JNocTzfqS3l3riRo_vKEC8uiWlrIPZHO-mrPTeuqEmZTq8TcWakCgicQtMuJblaceDUsXaKgLwbJrq03w_kwg=w600-h337-no">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide 
          caption="Geoshape Candles"
          img-src="https://lh3.googleusercontent.com/e4TPFFNyFmNwZtgWqLYpLfokcj8nSLNW-nKDvAaOTIryUSircHtcn52EtZiniJxQeZDxUiaz3TshPJds5qx0m8napsqtAwt1yQ-QwgjTVJTDQFHnAwFF2SoCibQRp-_BvhiFcSal0nwJ2m9Sm-S5TZzTZ1RpvE-AK1TKy5C6QkRaRhe2bBKpj_jMIAUq872Fe5st23d07jzGNUKj_l0xn1lkPhzd6lIChMYoif6wuhmpOXF65noRSK4RGFrc-71qxvvAZD5GGB-kHD0Fvhi1ByZGMpd-zBjkqWGxazN0APDkc6f7jiOPvX5i9uPQw83_dZ2_v0rkhE2GB3ekhWi1CFAuLJAbvb8FaiSr8wCP7IAWht1eZQ8rqHwbXpqeESXr5lcjiAb9xy3i9bUulZ0mYK90s0FqiN8tAH2Nnop9bbPfFJcFqb_l5Butd4H-BvQ0SE9d9SubZY_6wZkgiZW5eKA27YkMPo1hbMsD4ZAYE5ftP9KWd1xUv_SdiWg3fUZDdgrTJKl_ciwtZ2MZZrKZselEb-WSP7__z8TusvodcVwqiXXtk_9n6XWam1vNnkj-QiWZlKzj6RKiDt3giXBTQLpwQeO-XeYqsVpJt1W5BlR5SRvoSwgxh3vIEgeZxSiaWcmHkwYiuKwcoD5gRoEewzH1bKhFi3cSzLkvhtvfN7REOsYlUV4QdQwtpsqUhHbhD5NyPfZrY_MpZ8mLNA=w600-h337-no">
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