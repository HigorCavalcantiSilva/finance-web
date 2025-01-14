<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          v-if="showMenu"
        />

        <q-toolbar-title> Finances </q-toolbar-title>

        <div>By Higor Cavalcanti</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu Principal </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Salário',
    icon: 'request_quote',
    link: '/#/salary',
  },
  {
    title: 'Ganhos',
    icon: 'attach_money',
    link: '/#/earnings',
  },
  {
    title: 'Despesas',
    icon: 'money_off',
    link: '/#/expences',
  },
  {
    title: 'Poupança',
    icon: 'savings',
    link: '/#/saving',
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  data() {
    return {
      linksList,
      leftDrawerOpen: ref(false),
      showMenu: ref(true),
    }
  },
  mounted() {
    this.showMenu = this.$route.meta.showMenu ?? true

    if (!this.showMenu) this.leftDrawerOpen = false
  },
  watch: {
    $route(to) {
      this.$validateToken()
      this.showMenu = to.meta.showMenu ?? true

      if (!this.showMenu) this.leftDrawerOpen = false
    },
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
  },
})
</script>
