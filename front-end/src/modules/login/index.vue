<template>
  <v-app id="login" class="dark">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>TP SHOP</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    ref="username"
                    v-model="user.username"
                    :rules="usernameRules"
                    prepend-icon="person"
                    label="Username"
                    required
                    autofocus
                    v-on:keyup.13="subLogin"
                  />
                  <v-text-field
                    ref="password"
                    v-model="user.password"
                    :rules="passwordRules"
                    type="password"
                    label="Password"
                    prepend-icon="lock"
                    required
                    v-on:keyup.13="subLogin"
                  />
                  <v-alert
                    :value="!hasLoadedOnce"
                    color="error"
                    icon="warning"
                    outline
                  >
                    {{ message }}
                  </v-alert>
                  <v-btn
                    :loading="isProcess"
                    :disabled="isProcess"
                    color="primary"
                    primary
                    large
                    block
                    @click="subLogin"
                  >
                    Login
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Service from 'core/service';

export default {
  components: {},
  data: () => ({
    isProcess: false,
    user: {
      username: '',
      password: ''
    },
    loading: false,
    usernameRules: [v => !!v || 'Username is required'],
    passwordRules: [v => !!v || 'Password is required']
  }),

  computed: {
    ...mapGetters('login', ['hasLoadedOnce', 'message'])
  },

  mounted() {
    Service.interceptors({
      request: request => {
        return request;
      }
    });
  },

  methods: {
    ...mapActions('login', ['login']),

    async subLogin() {
      this.isProcess = true;
      if (!this.user.username) {
        this.$refs.username.focus();
      } else if (!this.user.password) {
        this.$refs.password.focus();
      } else {
        await this.login({
          username: this.user.username,
          password: this.user.password
        });
      }
      this.isProcess = false;
      
    }
  }
};
</script>
