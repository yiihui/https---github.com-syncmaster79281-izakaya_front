<script setup>

</script>

<template>
   <!-- ======= Hero Section =======  -->
  <section id="herohome" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1>Welcome to <span>Izakaya</span></h1>
          <h2>Delivering great food for more than 18 years!</h2>

          <div class="btns">
            <RouterLink :to="{ name: 'menu' }" class="btn-menu animate fadeInUp scrollto">菜單介紹</RouterLink>
            <RouterLink :to="{ name: 'seat' }" class="btn-book animate fadeInUp scrollto">線上訂位</RouterLink>
          </div>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in"
          data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
        </div>

      </div>
    </div>
  </section>
  <!-- End Hero -->

</template>