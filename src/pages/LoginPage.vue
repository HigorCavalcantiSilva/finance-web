<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-card class="my-card" style="width: 80vw">
        <q-card-section>
          <q-input filled v-model="credentials.email" label="E-mail" />
          <br />
          <q-input filled type="password" v-model="credentials.password" label="Senha" />
        </q-card-section>

        <q-separator />

        <q-card-actions vertical>
          <q-btn label="Login" type="submit" color="primary" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      credentials: ref({ email: '', password: '' }),
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await this.$api.post('/users/login', this.credentials)

        localStorage.setItem('authToken', data.token)
        localStorage.setItem('idUser', data.id)

        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Login realizado com sucesso',
        })

        this.$router.push('/')
      } catch {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Acesso não autorizado',
        })
        this.$redirectToLogin()
      }
    },
  },
})
</script>
