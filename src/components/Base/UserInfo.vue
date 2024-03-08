<script setup>
const user = {
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com',
  image: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
}
</script>

<template>
  <div class="d-none d-lg-flex">
    <v-menu min-width="58px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar size="large">
            <v-img :alt="user.fullName" :src="user.image"></v-img>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-icon color="gray" icon="mdi-account" left></v-icon>
            <v-btn variant="text" rounded>
              會員中心
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-icon color="gray" icon="mdi-logout" left></v-icon>
            <v-btn variant="text" rounded>
              登出
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>

</template>