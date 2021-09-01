<template>
  <div style="background-color: #E5E5E5">
    <div id="home_id">
      <div class="background">
        <div class="topnav" id="myTopnav">
          <a href="#home" class="active">
            <img class="logo" src="../assets/White_logo.svg" alt="pic"/></a>
          <div style="float: right">
            <a v-on:click="menuClicked($refs.aboutUs)">{{ $t('aboutUs') }}</a>
            <a v-on:click="menuClicked($refs.games)">{{ $t('games') }}</a>
            <a v-on:click="menuClicked($refs.games)">{{ $t('partners') }}</a>
            <a v-on:click="menuClicked($refs.games)">{{ $t('contactUs') }}</a>
            <div class="language-btn">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                <img src="../assets/vietnam.svg" alt="pic">
                <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li class="pointer" v-on:click="selectLanguage('vn')">
                  <div class="check-icon">
                    <font-awesome-icon v-if="selectedLanguage === 'vn'" :icon="['fas','check']" size="1x"/>
                  </div>
                  <div><img class="m-r-5" src="../assets/vietnam.svg">
                    <span>Vietnamese</span></div>
                </li>
                <li class="pointer" v-on:click="selectLanguage('en')">
                  <div class="check-icon">
                    <font-awesome-icon  v-if="selectedLanguage === 'en'" :icon="['fas', 'check']" size="1x"/>
                  </div>
                  <div><img class="m-r-5" src="../assets/united-states.svg">
                    <span>English</span></div>
                </li>
              </ul>
            </div>
            <a href="javascript:void(0);" class="icon" v-on:click="openMenu()">
              <font-awesome-icon :icon="['fas','bars']"/>
            </a>
          </div>
        </div>

        <section id="home_content_id">
          <article>We’re Getting Ready</article>
          <article>
            <div class="countdown-timer">
              <div v-for="(time, index) in times" v-bind:key=index class="time-block">
                <div class="card text-center">
                  <div class="card-block">
                    <span class="card-title">{{ time.time }} </span>
                  </div>
                  <div class="card-footer">
                    {{ time.text }}
                  </div>
                </div>
                <span v-if="index !== times.length - 1">:</span>
              </div>
            </div>
          </article>
          <article>
            <div class="top-content-text">We will back to something amazing. Getting the latest updates about our games.
              Please sign up to our newsletter.
            </div>
            <div class="email">
              <input v-model="email" placeholder="Enter your email">
              <img class="arrow-icon" src="../assets/arrow-right.svg"/>
            </div>
          </article>
        </section>
        <div class="expand-btn">
          <font-awesome-icon v-on:click="isExpanded = !isExpanded"
                             :icon="['fas', isExpanded ? 'chevron-up': 'chevron-down']" size="2x"/>
        </div>
      </div>
    </div>
    <div :hidden="!isExpanded" id="about_us_id" ref="aboutUs">
      <div class="container m-auto">
        <div class="row">
          <div class="col-md-6">
            <section>
              <div class="about-us-title">{{ $t('aboutUs') }}</div>
              <div class="about-us-content">
                Browse our selection of free online games and have a great time without leaving the site! Our Kids Games
                option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have
                exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from
                all
                the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the
                Internet. Explore a whole new world of gaming on Etech.
              </div>
            </section>
            <section>
              <div class="about-numbers">600M+</div>
              <div class="about-info">Users</div>
            </section>
            <section>
              <div class="about-numbers">135+</div>
              <div class="about-info">Games</div>
            </section>
          </div>
          <div class="col-md-6 right-section">
            <div class="group">
              <div><img src="../assets/calendar-tick.svg" alt="pic"></div>
              <article>
                <div class="right-title">24 - Hour</div>
                <div class="right-content">24/7 access ensures operators' businesses runs smoothly all year long.</div>
              </article>
            </div>
            <div class="group">
              <div><img src="../assets/calendar-tick.svg"></div>
              <article>
                <div class="right-title">Design</div>
                <div class="right-content">Combining imaginative universes, play dynamics, and unprecedented gameplay,
                  our
                  games transcend the boundaries of the virtual world by weaving innovative gameplay.
                </div>
              </article>
            </div>
            <div class="group">
              <div><img src="../assets/calendar-tick.svg" alt="pic"></div>
              <article>
                <div class="right-title">Team</div>
                <div class="right-content">Etech is an award-winning, international studio of designers, artists,
                  animators and producers that create content for the biggest names in film and video games.
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <section class="map-group">
        <img class="illustrator" src="../assets/Illustrator.svg" alt="pic"/>
        <img class="map-img" src="../assets/Map.svg" alt="pic"/>
      </section>
    </div>
    <div :hidden="!isExpanded" id="games_id" ref="games">
      <div class="game-header">
        <div>Our Games</div>
        <div class="description">As a pioneer of mobile app gamification, we take pride in originality and
          individuality, providing global players with state-of-the-art games that feature splendid storylines,
          sensational sound effects and magnificent animation that never cease to impress.
        </div>
      </div>
      <section>
        <div class="row">
          <div class="col-md-6 col-xs-6 left-group">
            <div class="row">
              <div class="col-md-6 col-xs-12 even-col">
                <div class="card-game" v-for="(card, index) in cardGamesGroupLeft" v-bind:key=index>
                  <article v-if="index % 2 === 0">
                    <img :src="card.url"/>
                    <div class="card-description">
                      <div class="title">{{ card.name }}</div>
                      <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div class="col-md-6 col-xs-12 odd-col">
                <div class="card-game" v-for="(card, index) in cardGamesGroupLeft" v-bind:key=index>
                  <article v-if="index % 2 !== 0">
                    <img :src="card.url"/>
                    <div class="card-description">
                      <div class="title">{{ card.name }}</div>
                      <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-6 right-group">
            <div class="row">
              <div class="col-md-6 col-xs-12 even-col">
                <div class="card-game" v-for="(card, index) in cardGamesGroupRight" v-bind:key=index>
                  <article v-if="index % 2 === 0">
                    <img :src="card.url"/>
                    <div class="card-description">
                      <div class="title">{{ card.name }}</div>
                      <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div class="col-md-6 col-xs-12 odd-col">
                <div class="card-game" v-for="(card, index) in cardGamesGroupRight" v-bind:key=index>
                  <article v-if="index % 2 !== 0">
                    <img :src="card.url"/>
                    <div class="card-description">
                      <div class="title">{{ card.name }}</div>
                      <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>
    <div id="partners" :hidden="!isExpanded" ref="partners">
      <div class="title"></div>
      <div class="content">
        <VueSlickCarousel :arrows="true" :dots="false" :autoplay="true" :slidesPerRow="5">
          <div v-for="(img, index) in imagesSrc" v-bind:key=index><img :src="imagesSrc[index]"/></div>
        </VueSlickCarousel>
      </div>
    </div>
    <div :hidden="!isExpanded" id="footer_id" ref="contacts">
      <!-- Footer -->
      <footer class="text-center text-lg-start bg-light text-muted">
        <div class="footer-rectangle">
          <div class="row">
            <div class="col-md-4">
              <div>
                <img src="../assets/White_logo.svg"/>
              </div>
              <div class="social">
                <img src="../assets/twiter.svg"/>
                <img src="../assets/facebook.svg"/>
                <img src="../assets/linkin.svg"/></div>
            </div>
            <div class="col-md-4 address">
              <div>Địa chỉ</div>
              <div class="address-group">
                <div><img src="../assets/address.svg"/></div>
                <div>
                  <article>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ</article>
                  <article>Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam</article>
                </div>
              </div>
              <div class="address-group">
                <div><img src="../assets/phonr-address.svg"/></div>
                <div>(+1) 555-0108-000 or (+236) 555-0108</div>
              </div>
            </div>
            <div class="col-md-4 ">
              <div class="subscription">Theo giỏi</div>
              <div class="subscription-text">Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập
                nhật của chúng tôi
              </div>
              <div class="email-subscription">
                <input v-model="email" placeholder="Enter your email">
                <img class="arrow-icon" src="../assets/arrow-right-white.svg"/>
              </div>
            </div>
          </div>
        </div>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: black; padding: 30px">
          2017 Copyright. Policy.
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    </div>

    <div class="menu-mobile" v-if="isShow">
      <div class="container">
        <div class="language-btn">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            <img src="../assets/vietnam.svg" alt="pic">
            <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li class="pointer" v-on:click="selectLanguage('vn')">
              <div class="check-icon">
                <font-awesome-icon v-if="selectedLanguage === 'vn'" :icon="['fas','check']" size="1x"/>
              </div>
              <div><img class="m-r-5" src="../assets/vietnam.svg">
                <span>Vietnamese</span></div>
            </li>
            <li class="pointer" v-on:click="selectLanguage('en')">
              <div class="check-icon">
                <font-awesome-icon  v-if="selectedLanguage === 'en'" :icon="['fas', 'check']" size="1x"/>
              </div>
              <div><img class="m-r-5" src="../assets/united-states.svg">
                <span>English</span></div>
            </li>
          </ul>
        </div>
        <div class="close-icon" v-on:click="isShow = false"><font-awesome-icon :icon="['fas','times']" size="2x"/></div>
      </div>
      <div class="menu-list">
        <div v-on:click="menuClicked($refs.aboutUs)">{{ $t('aboutUs') }}</div>
        <div v-on:click="menuClicked($refs.games)">{{ $t('games') }}</div>
        <div v-on:click="menuClicked($refs.games)">{{ $t('partners') }}</div>
        <div v-on:click="menuClicked($refs.games)">{{ $t('contactUs') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import {i18n} from '../plugins/i18n';

export default {
  name: "Home",
  components: {FontAwesomeIcon, VueSlickCarousel},
  data: function () {
    return {
      isExpanded: false,
      isShow: false,
      selectedLanguage: 'vn',
      imagesSrc: [
        require('../assets/partners/Rectangle52.png'),
        require('../assets/partners/Rectangle53.png'),
        require('../assets/partners/Rectangle54.png'),
        require('../assets/partners/Rectangle55.png'),
        require('../assets/partners/Rectangle56.png'),
        require('../assets/partners/Rectangle57.png'),
        require('../assets/partners/Rectangle58.png'),
        require('../assets/partners/Rectangle59.png'),
        require('../assets/partners/Rectangle60.png'),
        require('../assets/partners/Rectangle61.png'),
        require('../assets/partners/Rectangle62.png'),
        require('../assets/partners/Rectangle63.png'),
      ],
      email: '',
      startTime: "July 7, 2017 12:03:00",
      endTime: "July 9, 2022 14:55:00",
      times: [
        {id: 0, text: "Days", time: 1},
        {id: 1, text: "Hours", time: 1},
        {id: 2, text: "Minutes", time: 1},
        {id: 3, text: "Seconds", time: 1}
      ],
      cardGamesGroupLeft: [
        {id: 0, name: 'Pirates', url: require('../assets/card-games/Bitmap0.svg')},
        {id: 1, name: 'Witch Party', url: require('../assets/card-games/Bitmap1.svg')},
        {id: 2, name: 'Rocky', url: require('../assets/card-games/Bitmap2.svg')},
        {id: 3, name: 'Magic tree', url: require('../assets/card-games/Bitmap3.svg')},
        {id: 4, name: 'Aborigines', url: require('../assets/card-games/Bitmap4.svg')},
        {id: 5, name: 'Cinderella', url: require('../assets/card-games/Bitmap5.svg')},
      ],
      cardGamesGroupRight: [
        {id: 6, name: 'Kingland', url: require('../assets/card-games/Bitmap6.svg')},
        {id: 7, name: 'E-Space', url: require('../assets/card-games/Bitmap7.svg')},
        {id: 8, name: 'Rocky', url: require('../assets/card-games/Bitmap8.svg')},
        {id: 9, name: 'Pirates', url: require('../assets/card-games/Bitmap9.svg')},
        {id: 10, name: 'Witch Party', url: require('../assets/card-games/Bitmap10.svg')},
        {id: 11, name: 'Pirates', url: require('../assets/card-games/Bitmap11.svg')},
      ],
      progress: 100,
      // isActive: false,
      timeInterval: undefined
    };
  },
  methods: {
    openMenu: function () {
      this.isShow = true;
    },
    selectLanguage: function (language) {
      i18n.locale = language;
      this.selectedLanguage = i18n.locale;
    },
    updateTimer: function () {
      if (
          this.times[3].time > 0 ||
          this.times[2].time > 0 ||
          this.times[1].time > 0 ||
          this.times[0].time > 0
      ) {
        this.getTimeRemaining();
        this.updateProgressBar();
      } else {
        clearTimeout(this.timeInterval);
        // this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
        this.progress = 0;
      }
    },
    getTimeRemaining: function () {
      let t = Date.parse(new Date(this.endTime).toString()) - Date.parse(new Date().toString());
      if (t >= 0) {
        this.times[3].time = Math.floor(t / 1000 % 60); //seconds
        this.times[2].time = Math.floor(t / 1000 / 60 % 60); //minutes
        this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24); //hours
        this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)); //days
      } else {
        this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
        this.progress = 0;
      }
    },
    updateProgressBar: function () {
      let startTime = Date.parse(new Date(this.startTime));
      let currentTime = Date.parse(new Date());
      let endTime = Date.parse(new Date(this.endTime));
      let interval = parseFloat(
          (currentTime - startTime) / (endTime - startTime) * 100
      ).toFixed(2);
      this.progress = 100 - interval;
    },
    menuClicked: function (ref) {

      if (ref) {
        this.isShow = false;
        // Use el.scrollIntoView() to instantly scroll to the element
        ref.scrollIntoView({behavior: 'smooth'});
      }
    },
  },
  created: function () {
    this.updateTimer();
    this.timeInterval = setInterval(this.updateTimer, 1000);
  }
}
</script>

<style scoped>

/*HOME Section*/
/*Global Class*/
.m-r-5 {
  margin-right: 5px;
}

.pointer {
  cursor: pointer;
}

#home_id {
  height: 100vh;
  background-image: url("../assets/BG.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
}

#home_id .expand-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 0;
  width: 66px;
  height: 66px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  display: inline-block;
  padding: 19px 18px;
  background-color: white;
  cursor: pointer;
}

#home_id > div.background {
  background-image: url("../assets/ongtien.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
}

.menu-mobile .language-btn {
  border-radius: 8px;
  border: 1px solid #AFAFAF;
  padding: 0 10px;
}

.language-btn {
  float: right;
  position: relative;
}

.language-btn .dropdown-menu {
  left: unset;
  right: 0;
}

.menu-mobile .language-btn .dropdown-menu {
  left: 0;
  right: unset;
}

.top-content-text {
  font-family: 'Montserrat';
  width: 560px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 126%;
  margin: 100px auto 32px;
}


.navbar-inverse .navbar-nav > li > a {
  color: white !important;
  font-family: 'Montserrat';
  font-weight: 700;
  Size: 14px;
  text-transform: uppercase;
}

section > article:first-child {
  font-family: 'Playfair Display';
  font-weight: 900;
  font-size: 80px;
  letter-spacing: 0.6px;
  color: white;
}

section > article:nth-child(3) {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.6px;
  color: white;
}

.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:focus, .navbar-inverse .navbar-nav > .open > a:hover {
  background-color: unset;
}

.dropdown-menu > li {
  display: grid;
  grid-template-columns: 40px 1fr;
  background-color: white;
  color: black;
}

.check-icon {
  padding: 8px;
}

/*HOME Section End*/

/*Countdown Timer*/
.card {
  display: inline-block;
  vertical-align: middle;
  padding: 26px;
}

.countdown-timer {
  font-family: "Playfair Display";
  width: 756px;
  height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 20px auto;
  font-size: 40px;
  color: black;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  background-color: white;
}

.card-footer {
  font-size: 20px;
}

#about_us_id {
  text-align: left;
  padding-top: 128px;
}

.about-us-title {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  /* or 100% */
  letter-spacing: 3.6px;
  text-align: center;
}

.about-us-content {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #757575;
  margin-top: 40px;
}

.about-numbers {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 98px;
  margin-top: 80px;
  color: #079BEE;
}

.about-info {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
}

.right-section {
  padding: 113px 75px;
  background: #EEEEEE;
}

.right-section > .group {
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-column-gap: 24px;
  margin-top: 40px;
}

.right-section > .group > div {
  padding: 13px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #E3FCFF;
}

.right-title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
}

.right-content {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #757575;
}

.map-group {
  text-align: center;
  margin-top: 200px;
  min-height: 500px;
}

.map-group > .illustrator {
  margin-bottom: 90px;
}

.illustrator {
  transform-origin: center;
  width: 50px;
  animation: scale 4s ease-in-out infinite, spin 4s infinite linear;
}

.map-img {
  width: calc(100vw - 30px);
  height: auto;
}

@keyframes scale {
  to {
    transform: scale(10);
  }
}

@keyframes spin {
  from {
    margin-left: calc(100% - 30px);
    /*margin-bottom: 0;*/
  }

  to {
    margin-left: calc(50% - 500px);
    /*margin-bottom: 90px;*/
  }
}

#games_id .game-header {
  font-family: Playfair Display;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  align-items: center;
  text-align: center;
  letter-spacing: 3.6px;
  padding: 0 530px;
  color: #000000;
}

.game-header .description {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: #757575;
  margin-bottom: 20px;
}

#games_id > section {
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  text-align: center;
}

.card-game {
  display: inline-block;
  position: relative;
  margin-bottom: 40px;
}

.odd-col {
  padding-top: 100px;
}

.card-game img {
  border-radius: 8px;
  width: 100%;
  height: auto;
}

.card-game .card-description {
  position: absolute;
  text-align: left;
  padding: 40px;
  left: 0;
  bottom: 0;
}

.card-game .title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  color: white;
}

.card-game .content {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: white;
}

.bottom-card {
  margin-top: 120px;
}

/*Partners*/
#partners .content {
  padding: 120px;
  background: #F6F6F6;
}

/*Footer*/
.footer-rectangle {
  height: 446px;
  padding: 130px 230px;
  background-image: url("../assets/Rectangle_booter.svg");
  background-size: cover;
  background-repeat: no-repeat;
  text-align: left;
}

.social {
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 32px;
  margin-top: 20px;
}

.address, .subscription {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: white;
}

.subscription-text,
.address-group {
  display: flex;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 32px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  margin-top: 40px;
  color: white;
}

.email-subscription {
  position: relative;
  margin-top: 40px;
  width: 100%;
  height: 40px;
}
.email-subscription > input{

  border-radius: 4px;
  background-color: unset;
  border: solid thin white;
  width: 100%;
  height: 40px;
  color: white;
}

#home_id .email input,
#home_id .email {
  position: relative;
  width: 560px;
  display: inline-block;
  height: 56px;
  color: #000000;
  overflow: hidden;
}

.arrow-icon {
  position: absolute;
  right: 10px;
  top: 15px;
  width: 24px;
  height: auto;
}

.email-subscription .arrow-icon {
  top: 10px;
}
  /*NAV test*/
.topnav {
  overflow: hidden;
  height: 150px;
}
.topnav > a {
  padding: 14px 16px;
  float: left;
  display: block;
}
.topnav.is-mobile > div {
  padding: 0;
}
.topnav > div {
  padding: 20px;
}
.topnav > div > a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  cursor: pointer;
}

.topnav a:hover {
  color: #F6F6F6;
}

.topnav a.active {
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav div a {
    display: none;
  }

  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }

  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

@media screen  and (max-width: 1024px) {
  #games_id .game-header {
    padding: 0 40px;
  }
}

@media screen  and (max-width: 600px) {

  .odd-col {
    padding-top: 0;
  }

  .right-group {
    padding-top: 40px;
  }

  .logo {
    width: 100px;
    height: 30px;
  }

  .card-game {
    margin-bottom: 20px;
    padding: 0;
  }

  .countdown-timer {
    font-family: "Playfair Display";
    width: 300px;
    height: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 20px auto;
    font-size: 20px;
    color: black;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 21px;
    background-color: white;
  }

  .card {
    padding: 10px;
  }

  .card-footer {
    font-size: 14px;
  }

  section > article:first-child {
    font-size: 40px;
    padding: 5px;
  }

  .top-content-text {
    width: 70vw;
    font-size: 12px;
    margin: 40px auto;
  }

  #home_id .email,
  #home_id .email > input {
    width: 70vw;
  }

  @keyframes scale {
    to {
      transform: scale(4);
    }
  }

  @keyframes spin {
    from {
      margin-left: 100%;
      /*margin-bottom: 0;*/
    }

    to {
      margin-left: calc(50% - 100px);
      /*margin-bottom: 90px;*/
    }
  }

  .map-group {
    height: 300px;
  }

  #games_id > section {
    padding: 0;
  }

  .game-header {
    padding: 0 40px !important;
    font-size: 30px !important;
  }

  .card-game > img {
    width: 164px;
  }

  .card-game .card-description {
    position: absolute;
    bottom: 0;
    text-align: left;
    left: 0;
    top: unset;
    padding: 15px;
  }

  .card-game .card-description .content {
    font-size: 12px;
  }

  .card-game .card-description .title {
    font-size: 24px;
  }

  .footer-rectangle {
    padding: 20px;
    height: auto;
  }

  .address, .subscription {
    margin-top: 20px;
  }

  .subscription-text, .address-group {
    margin-top: 15px;
  }

  /*Menu Mobile*/
  .menu-mobile {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 20px;
    background-color: white;
    z-index: 99999;
  }

  .menu-list > div{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    border-bottom: solid thin #EEEEEE;
    padding: 24px;
  }

  .close-icon {
    float: right;
  }
  .menu-mobile .language-btn {
    float: left;
  }
}
</style>