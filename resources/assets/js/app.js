
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
* Initialize event bus
*/
export const EventBus = new Vue();

// Need to be checked!
window.flash = (message, type) => {
	EventBus.$emit('flash', message, type);
}

window.auth = { auth: '{{ auth()->check() }}' }

import router from './router.js' // Importing routes

import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/bg'

Vue.use(VueRouter);

Vue.use(ElementUI, { locale });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('flash', require('./components/FlashComponent.vue'));
Vue.component('follow', require('./components/FollowComponent.vue'));
Vue.component('like', require('./components/LikeComponent.vue'));
Vue.component('box-hover', require('./components/BoxHoverComponent.vue'));
Vue.component('carousel', require('./components/CarouselComponent.vue'));
Vue.component('event-feed', require('./components/EventFeedComponent.vue'));
Vue.component('venue-feed', require('./components/VenueFeedComponent.vue'));
Vue.component('venue-slider', require('./components/VenueSliderComponent.vue'));
Vue.component('related-feed', require('./components/RelatedFeedComponent.vue'));
Vue.component('event-box', require('./components/EventBoxComponent.vue'));
Vue.component('theme-box', require('./components/ThemeBoxComponent.vue'));
Vue.component('request-modal', require('./components/RequestModalComponent.vue'));
Vue.component('company-view', require('./components/company/CompanyViewComponent.vue'));
Vue.component('imageUpload', require('./components/ImageUploadComponent.vue'));

Vue.component('comments', require('./components/CommentsComponent.vue'));

// Auth
Vue.component('login', require('./components/auth/LoginComponent.vue'));
Vue.component('register', require('./components/auth/RegisterComponent.vue'));

// Settings
Vue.component('settings', require('./components/SettingsComponent.vue'));

// Dashboard
Vue.component('dashboard', require('./components/DashboardComponent.vue'));

// Messanger
//Vue.component('messanger', require('./components/messanger/MessangerComponent.vue'));
Vue.component('messanger-app', require('./components/messanger/MessangerAppComponent.vue'));
Vue.component('thread-list', require('./components/messanger/ThreadListComponent.vue'));
Vue.component('messages-feed', require('./components/messanger/MessagesFeedComponent.vue'));

const app = new Vue({
    el: '#app',

    router
});
