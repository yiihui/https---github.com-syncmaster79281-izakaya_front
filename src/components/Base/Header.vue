<script setup>
import { RouterLink } from 'vue-router';
import UserInfo from './UserInfo.vue';
</script>

<template>
  <header id="header" class="d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 class="logo me-auto me-lg-0"><a href="index.html">Izakaya</a></h1>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li>
            <RouterLink :to="{ name: 'home' }" class="nav-link scrollto active">首頁</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'hero' }" class="nav-link scrollto active">影片</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'about' }" class="nav-link scrollto active">關於我們</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'menu' }" class="nav-link scrollto active">熱門菜單</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'specials' }" class="nav-link scrollto active">特別菜單</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'events' }" class="nav-link scrollto active">活動專區</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'member' }" class="nav-link scrollto active">會員中心</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'gallery' }" class="nav-link scrollto active">店家資訊</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'contact' }" class="nav-link scrollto active">聯絡我們</RouterLink>
          </li>

        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      <!-- <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a> -->
      <button class="book-a-table-btn scrollto d-none d-lg-flex">
        <RouterLink :to="{ name: 'seat' }" class="nav-link scrollto active">線上訂位</RouterLink>
      </button>
      <UserInfo />


    </div>
  </header><!-- End Header -->
</template>
