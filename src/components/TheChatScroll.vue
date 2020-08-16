<template>
  <div
    ref="MzChatScrollBlock"
    v-if="arrChatSocialInfoDefine"
    class="mz-chat-scroll__block"
  >
    <div
      class="more-btn"
      :class="{ 'is-hide' : isShow }"
      @click="
        $event.stopPropagation();
        isShow = true;
      "
      data-stop-propagation
    >
      <img src="https://lh3.googleusercontent.com/JaALRt8Apn40qGKViQKDCS56rS-AMgyG0BG_LY7ZWvjmkxLq63HR5hIeLzxAb_pLQPKIU1qVeRo3LW6dQG7xKV3qWJP3KGb4fzFH7I_hiHv1YkBMwiI2QVhO7NcgLBwuiqga_6z4IrHZjUIsqiIMr4kuUKmUwjC7jQ3t_AfY7dgvGAiBm_1Dx6prUTisEnBh32H1qrkNZbBlxw_ANgbBTR4x38CnWry7nXFKqrOx07EkOfyG_Kp13kRA6ofbcEEYFVc9qBQCjOWBx157xZlQupjG4TLjBSpN0cHofHQlke4NJtrshvHwX974bkU4FdOnxQa8ImvB0lPVUAB9y7VRd-67CwqSYObqeNn73wQ-CPISWdcFln2dukkNVRlTugSq-nI2JqqCahwvkN7Bh6cqpY7thDDAxAT2u9vhm7P7VZLHYtG3ym2XgbDEFIWgDX9zgVeBwd-f8pcFggzwZy8J7JUoApf-6qY-wTONVy3icHFn_enkgK277L92LGk6iL3W8nhsIb9wF7jgB-0j7ZgdvyInCtaiBo69kH38VsjvI9_N8uWkeJSeMTf75ucyk-00I836pdmtSk0EawdJ2mSSlyJEQ9LTBuiEbrG-6j9hrve70_zGod7BZownVzHdEL_MhVLQCrG87lglApX3TpfSI6HTlubHHutakSb_ra-MY3NzrlWK9UYjzQ=s60-no?authuser=0" alt="" class="more-img">
    </div> <!-- .more-btn -->

    <div
      class="mz-chat-scroll__list"
      :class="{ 'is-show' : isShow }"
    >
      <template v-for="(arrChatBoxItem, idx) in arrChatBoxList">
        <a
          :key="idx"
          :href="getFullChatSocialUrl(arrChatBoxItem)"
          class="mz-chat-scroll__item"
        >
          <img
            :src="arrChatBoxItem.icon"
            :alt="arrChatBoxItem.name"
            class="icon-img"
          >
        </a>
      </template>
    </div> <!-- .chat-scroll__list -->
  </div> <!-- .chat-scroll -->
</template>

<script>
export default {
  props: {
    arrChatSocialInfoDefine: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      arrChatBoxList: [
        {
          'name': 'zalo',
          'icon': 'https://lh3.googleusercontent.com/WtYKwrSoROZUjRDO-XZ9DxjvJ3PAatO19abYDYw61xIwpNk9UwjEbH7Z4tKK00vZO6_T9sy6enSHWdhUUPMsy-EV3eHpiqGxf5qcYiLh-vbquWhSmCeq8wHi9YTBWBX3Tn5Zbf7CPQXxtpYzht0ELE8KiqbUcYgkesAYYFS2MO_otDKGu9Ei30jlDAPmJGv0qByW4IT7v925-gmMEdK_zGh1ofhASCOL8atkQEryMfvHv8rBgs2u8rkCHXF8GUwfYaWMsZPugnF_Af2lGERfAsv-MMerTmOzh1tKsphOwmX30nQ0A7bVLbA86l_4bbw-tBo7HQ35PIJAYxe8pRZqUDavNGqXqvUfBQXiXf6hA6OTDXnja623X8Bxw7JaJkbu3-rhlVdIhcMR0sR8fHc4qXnsKMt_DsAUYrPYyaDBZowAVc3hkAeLEtIjsVJladXYsGVERYvucEc7GDKa6zgWsrt3Bzpg0fOtrSs8p69KRZcByR9ThInOqeTCtLwA9o4HBv0aeLAnnbwoP9bgNn-4Kg-jdRpOZ-SLGs6r3Xx33VMsFrYGh8BDS_g0lr6nSDESRc9-V6edtZM5p3-vhSlqGRpjucoGJKXGs7GCwEu3k923_7TYIFGEAT2MzCpirrfsftjbYYLfqUnIgt1UP9890F1VJ8BToGFzJd6vjUGkR74RPTL5LsM5OA=w200-h205-no?authuser=0',
          'url': 'https://zalo.me/',
        },
        {
          'name': 'messenger',
          'icon': 'https://lh3.googleusercontent.com/mS7q5xwQG-PxIZqmEuCcCq-02ADusnstYBwV4VRNjLbiBiBq2UpTCfQT9lW0h8hhBFNw_9d9w9yd77qfkDL8-bSGN1SAMmsYI_6oFvF9FQpMtOV4CmkBM3VMIYrcBp25oIUNR_AFu-GLepJ8POeMmjoEv9CQyYhkeWIPJZmCDTJcJdOHdHdw7w80JZlamheWmNiHh1BHXdLEkBzbAd4ycXg5-prPQO8Ip-2InvISX14tt5LvYGETZwkcAuDCiK3gAnRKusNo-C-BKOUNDHLzqVJpk9ndU18GymZviEugXf01IIeVex0aD1JBwhKQUB4pPq88upWs0aHP4ICNqEYKKjiIK4BgDy_xNdOOTONVJ0MujNVTyNXwQyGQ_euItG7rGPL-REHx7lzpGcxZVw6SgTto1K-kY6cOs4AwexzISqGVJQ6V74Gfe_Y-DfDdvFF1k2pP0q-wZTTrywRIdRevMNWhfEndfMcmS9ErJ04F0dz116G0lXONwhB-NOpMnlhIBbVVCt8LZ_QKgW-u6lIRb2w2tOqCmpo9aKaMEFFZUHbduN-fNtdpXyyz8tGJb5eTQN8ip9mpLxTHbBmhZ2q1BCTBqIWr8HccVhW_Am_zxyrv2Z1O4z7f9sOMwdYwC1RIytltVlV-6RkgZPc6RaYVJdBS7c7VJPMYPaCW8c0rZgbkaCeWLgo8rA=s512-no?authuser=0',
          'url': 'http://m.me/',
        }
      ],

      isShow: false,
    };
  },

  created() {
  },

  mounted() {
    const self = this;

    if(self.$refs.MzChatScrollBlock) {
      document.addEventListener('click', function() {
        self.isShow = false;
      });
    }
  },

  methods: {
    getFullChatSocialUrl(arrChatBoxItem) {
      const self = this;

      if(
        !arrChatBoxItem.url ||
        !self.arrChatSocialInfoDefine[arrChatBoxItem.name]
      ) {
        return;
      }

      if(self.arrChatSocialInfoDefine[arrChatBoxItem.name].id) {
        return arrChatBoxItem.url + self.arrChatSocialInfoDefine[arrChatBoxItem.name].id;
      }

      if(self.arrChatSocialInfoDefine[arrChatBoxItem.name].page_name) {
        return arrChatBoxItem.url + self.arrChatSocialInfoDefine[arrChatBoxItem.name].page_name;
      }
    }, // getFullChatSocialUrl()
  },
}
</script>

<style lang="scss">
  @import '../scss/partial/chat-scroll.scss';
</style>