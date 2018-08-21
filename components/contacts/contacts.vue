<template lang="pug">
  section.section#contacts
    .contacts.min-height
      .contacts__map
        GmapMap(:center="{lat: 43.2492113, lng: 42.6313622}" :zoom="16" style="width: 100%; height: 100%")
          GmapMarker(:position="{lat: 43.2492113, lng: 42.6313622}")
      .container
        .contacts__wrapper
          h2.contacts__title
            | {{ $t('CONTACTS.TITLE') }}
            .reviews__title--decorative.hatching-white
          .contacts__body
            .contacts__body--upper
              .contacts__info.info
                .info__title
                  | {{ $t('HERO.HOTEL_NAME') }}
                .info__address
                  font-awesome-icon.icon(:icon="icons.faMapMarkerAlt")
                  | {{ $t('CONTACTS.ADDRESS') }}
                .info__contacts
                  a.info__phone(href="tel:+7 (928) 912-11-12")
                    font-awesome-icon.icon(:icon="icons.faPhone" style="transform: rotate(90deg);")
                    | +7 (928) 912-11-12
                  a.info__email(href="mailto:info@elbrusplaza.com")
                    font-awesome-icon.icon(:icon="icons.faEnvelope")
                    | info@elbrusplaza.com
                .info__maps
                  font-awesome-icon.icon(:icon="icons.faMapMarkedAlt")
                  a.info__map-link(href="https://yandex.ru/maps/-/CBulzAxggC" target="_blank") {{ $t('CONTACTS.YANDEX_MAPS') }}
                  |&nbsp;|&nbsp;
                  a.info__map-link(href="https://goo.gl/maps/gsrL4VBf2LL2" target="_blank") {{ $t('CONTACTS.GOOGLE_MAPS') }}
            .contacts__body--bottom
              .contacts__feedback.feeback
                p.feedback__text
                  font-awesome-icon.icon.icon--white(:icon="icons.faComment")
                  | {{ $t('CONTACTS.FEEDBACK_FORM') }}
                form.feedback__form.form(@submit.prevent="sendFeedback")
                  .form__row
                    .form__group
                      input(v-model="name" name="name" :placeholder="$t('CONTACTS.FORM.NAME')")
                      input(v-model="email" name="email" :placeholder="$t('CONTACTS.FORM.EMAIL')")
                  .form__row
                    textarea(v-model="msg" rows="5" :placeholder="$t('CONTACTS.FORM.QUESTION')")
                  .form__row
                    div
                      button.button.button--white-outline.form__submit(type="submit") {{ $t('CONTACTS.FORM.SUBMIT') }}
</template>

<script>
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faPhone, faEnvelope, faMapMarkedAlt, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMapMarkerAlt)

export default {
  data() {
    return {
      name: '',
      email: '',
      msg: ''
    }
  },
  methods: {
    sendFeedback() {
      axios.post('/api/feedback', {
        name: this.name,
        email: this.email,
        msg: this.msg
      })
    }
  },
  computed: {
    icons() {
      return {
        faMapMarkerAlt,
        faPhone,
        faEnvelope,
        faMapMarkedAlt,
        faComment
      }
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>


<style lang="scss" >

  @import './contacts.scss';

</style>
