import Vue from 'vue'
import App from 'src/App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'

import locales from 'src/locales'
import router from 'src/router'
import store from 'src/store'
import { mapGetters, mapActions } from 'vuex'


describe('App.vue', () => {

  beforeEach(() => {
    Vue.use(VueRouter)
    Vue.use(VueResource)
    Vue.use(VueI18n)

    Vue.config.debug = true

    Vue.config.lang = 'en'

    Object.keys(locales).forEach(lang => {
      Vue.locale(lang, locales[lang])
    })
  })

  context("can translate based on locale", () => {

    it('expect english welcome to be rendered', () => {
      const vm = new Vue({
        el: document.createElement('div'),
        router: router,
        store,
        render: (h) => h(App)
      });

      expect(vm.$el.querySelector('#app h2').textContent)
          .to.equal('its a example for using i18n with vue')
    });

    it('expect french welcome to be rendered', () => {
      Vue.config.lang = 'fr'

      const vm = new Vue({
        el: document.createElement('div'),
        router: router,
        store,
        render: (h) => h(App)
      });

      expect(vm.$el.querySelector('#app h2').textContent)
          .to.equal('Son un exemple pour utiliser i18n avec vue')
    });
  });

  context("Increment and decrement counter", () => {
    var vm;
    before(() => {
      vm = new Vue({
        el: document.createElement('div'),
        router: router,
        store,
        render: (h) => h(App)
      });
    })

    it('can increment the counter', (done) => {
      expect(vm.$el.querySelector('.counter').textContent)
          .to.equal('0')

      store.dispatch('increment');
      expect(store.getters['count']).to.equal(1)

      setTimeout(function () {
        expect(vm.$el.querySelector('.counter').textContent)
            .to.equal('1')
          done();
      }, 200);
    });

    it('can decrement the counter', (done) => {
      expect(vm.$el.querySelector('.counter').textContent)
          .to.equal('1')

      store.dispatch('decrement');
      expect(store.getters['count']).to.equal(0)

      setTimeout(function () {
        expect(vm.$el.querySelector('.counter').textContent)
            .to.equal('0')
        done();
      }, 200);
    });
  })

});