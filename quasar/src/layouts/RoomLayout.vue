<template>
  <q-layout view="hHh Lpr lff" class="room-layout" ref="layout">
    <Login v-if="!user" />
    <q-header elevated class="bg-white header">
      <q-toolbar class="row">
        <q-toolbar-title class="col text-primary text-h5 btn" @click="$router.push('/')" >meetnav</q-toolbar-title>
        <VideoControls
          class="col-8 justify-center row q-gutter-md"
          @chat="openChat = !openChat"
          @message="onMessage"
        />
        <div class="col row justify-end">
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="anyUser"
      show-if-above
      :breakpoint="700"
      elevated
      class="bg-primary text-white btn"
      :mini="userMini"
      :mini-width="150"
      @click="userMini = !userMini"
    >
      <div class="q-pa-xs fit users column justify-start">
        <div class="col-auto" v-for="(stream, userid, ix) in userStreams" :key="ix">
          <UserVideo
          :style="{ 'max-height': userVideoHeight() }"
          :stream="stream"
          :showUserInfo="true"
        />
        </div>
      </div>
    </q-drawer>

    <q-drawer
      side="right"
      v-model="openChat"
      bordered
      :breakpoint="500"
    >
      <q-scroll-area class="fit chat">
        <div class="q-pa-sm fit">
          <NekoChat />
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <component :is="'style'" v-html="style"></component>
  </q-layout>
</template>

<script>
import Login from '../components/Login'
import VideoControls from '../components/VideoControls'
import NekoChat from '../components/neko/NekoChat'

import UserVideo from '../components/UserVideo'

export default {
  components: {
    Login,
    VideoControls,
    NekoChat,
    UserVideo
  },
  data () {
    return {
      selectedLanguage: 'English',
      leave: false,
      openChat: false,
      userMini: false
    }
  },
  computed: {
    user () {
      return this.$storex.user.user
    },
    neko () {
      return this.$storex.room.nekoConnected
    },
    anyUser () {
      return Object.keys(this.$storex.room.streams).length !== 0
    },
    users () {
      return this.$storex.room.streams
    },
    userStreams () {
      return Object.keys(this.$storex.room.streams)
        .map(k => this.$storex.room.streams[k])
        .reduce((a, b) => a.concat(b), [])
    },
    style () {
      const { room } = this.$storex.room
      return room ? room.style : ''
    },
    userCount () {
      return Object.keys(this.users).length
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
      this.selectedLanguage = this.$t('name')
    },
    logout () {
      this.$store.commit('user/SET_USER', {})
      location.reload()
    },
    onMessage (msg) {
      this.$storex.room.neko.chat.sendMessage(msg)
      if (!this.openChat) {
        this.openChat = true
      }
    },
    userVideoHeight () {
      const { minHeight } = this.$refs.layout.style
      const height = parseInt(minHeight.replace('px', ''))
      const userCount = this.userCount
      return `${height / userCount}px`
    }
  }
}
</script>
<style lang="sass">
.room-layout
  .q-scrollarea
    .absolute.full-width
      height: 100% !important

  .neko-chat
    .neko-emoji
      width: 100% !important
    .message
      margin-top: 3px
      background-color: #ffffffe0 !important
      border-radius: 5px !important

  .emotes
    > ul
      padding-inline-start: 0px
      > li
        display: none
        &:last-child
          display: inherit
    ul.context
      background-color: white !important
      li
        display: inherit
  .q-drawer
    background: transparent

@import url(/layouts/standard.css)
</style>
