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
  width: 100vw;
   

    .header {
        display: flex;
        flex-direction: column;
         margin-top: 2rem;
        height: 80vh;
        justify-content: center;
        align-items: flex-end;
        
        .text{
            width: 55%;
            text-align: center;
            color: white;
            line-break: auto;
            letter-spacing: 2px;
            margin-top:-20em;

            h1 {
                font-size: 72px;
                margin-bottom: 0.5rem;
             
                font-weight: 900;
            }
            p{
                font-size: 30px;
                font-weight: 500;
               
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