<template>
<div class="wrapper">
    <Nav />
    <section class="header">
        <div class="text">
        <h1>Fisketräffar.se</h1>
        <p>Hitta likasinnade människor för en bättre fiskeupplevelse</p>
        <button>Se events</button>
    </div>
  </section>
  </div>
</template>

<script>
import Nav from "@/components/Nav"
export default {
components: { Nav}
}
</script>

<style lang="scss" scoped>
.wrapper {
    background-image: url("../assets/img/fishing.jpg");
    background-repeat: no-repeat;
    background-size: 100% ;
    background-position: center;
    background-attachment: fixed;
    box-shadow: 0px 10px 10px -8px rgba(0,0,0,0.75);
    height: 100vh;
   

    .header {
        display: flex;
        flex-direction: column;
         margin-left: 10rem;
        height: 80vh;
        justify-content: center;
        align-items: flex-start;
        

        .text{
            width: 40rem;
            text-align: center;
            color: white;
            line-break: auto;
            letter-spacing: 2px;
          

            h1 {
                font-size: 72px;
                margin-bottom: 0.5rem;
            }
            button {
                width: 200px;
                height: 40px;
            }
            button:active {
                transform: scale(1.02);
            }
        }
   
        
    }
}
</style>