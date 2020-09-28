<template>
<div class="wrapper">
    <Nav class="nav" />
    <section class="header">
        <div class="text">
        <h1>Fisketräffar.se</h1>
        <p>Hitta likasinnade människor för en bättre fiskeupplevelse</p>
        <button @click="seeEvent">Se events</button>
    </div>
  </section>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
export default {
components: { Nav},

methods: {
    seeEvent() {
        document.querySelector(".seeEvent").scrollIntoView({behavior: "smooth"});
    }
}
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/buttons";
@import "@/assets/scss/variables";

.wrapper {
  height: 100vh;
   

    .header {
        display: flex;
        flex-direction: column;
         margin-top: 2rem;
        height: 80vh;
        justify-content: center;
        align-items: center;
        

        .text{
            width: 60rem;
            text-align: center;
            color: white;
            line-break: auto;
            letter-spacing: 2px;
          

            h1 {
                font-size: 72px;
                margin-bottom: 0.5rem;
            }
            p{
                font-size: 24px;
            }

            button {
                width: 200px;
                height: 40px;
                margin-top: 1rem;
                @include buttons
                
            }
            button:active {
                transform: scale(1.02);
            }
        }
   
        
    }
}
</style>