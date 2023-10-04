<script setup lang="ts">

</script>

<template>
  <div class="">
    <a class="text-white hover:text-" href="#buy" data-uk-toggle>Buy</a>

    <div id="buy" class="uk-flex-top" data-uk-modal>
      <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" data-uk-close></button>
        <h3>Contact us for purchase</h3>
        <p><span class="font-bold">Phone Number:</span> <a href="tel:+2348085626448">+2348085626448</a></p>
        <p>
          <span class="font-bold">Email:</span> <a href="mailto:support@baccologne.com">support@baccologne.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.uk-modal-body {
    padding: 50px;
    border-radius: 25px;
    background: rgba(218, 40, 0, 0.27);
    box-shadow: 0 50px 100px 0 rgba(0, 0, 0, 0.25);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    p, h3, .uk-close {
      color: #fafafa;
    }
    h3 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1;
    }
  }
</style>