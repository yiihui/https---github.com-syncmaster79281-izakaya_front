<script setup>
import BaseLayout from "@/components/Base/BaseLayout.vue"
import About from '@/components/About/About.vue'
import Seat from '@/components/Seat/Seat.vue'
import Chef from '@/components/Chefs/Chefs.vue'
import Contact from '@/components/Contact/Contact.vue'
import Event from '@/components/Events/Events.vue'
import Gallery from '@/components/Gallery/Gallery.vue'
import Hero from '@/components/Hero/Hero.vue'
import Menu from '@/components/Menu/Menu.vue'
import Specials from '@/components/Specials/Specials.vue'
import Testimonials from '@/components/Testimonials/Testimonials.vue'
import WhyUs from '@/components/WhyUs/WhyUs.vue'
import Carousel from "@/components/Carousel/Carousel.vue"

</script>

<template>

  <BaseLayout>
    <Carousel/>
    <About />
    <WhyUs />
    <Menu />
    <Specials />
    <Event />
    <Seat />
    <Testimonials />
    <Gallery />
    <Chef />
    <Contact />
  </BaseLayout>

</template>
