import Vue from 'vue';
import App from './App.vue';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

new Vue({
  el: '#app',
  render: h => h(App),
});

Sentry.init({
  dsn: 'https://b691fec176ae444ba200404dc621046d@sentry.io/1538659',
  integrations: [
    new Integrations.Vue({Vue, attachProps: true, logErrors: true}),
  ],
});

Sentry.captureException(new Error('Error in my-project'));
