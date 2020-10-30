<template>
    <div>
        <h1 id="clock"><time>00:00:00</time></h1>
        <button id="start" @click="timer">start</button>
        <button id="stop" @click="stop">stop</button>
        <button id="clear" @click="clear">clear</button>
    </div>
</template>

<script>

//var h1 = document.getElementsByTagName('h1')[0];
var go = false;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var clear = document.getElementById('clear');
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;

export default {
    methods: {
        add() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                } 
            }
            
            document.getElementById("clock").textContent = "0" + hours + " : 0" + minutes + " : 0" + seconds;
            //h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
            this.timer();
        },

        timer() {
            go = true;
            t = setTimeout(this.add, 1000);
        },

        stop() {
            clearTimeout(t);
        },

        clear() {
            document.getElementById("clock").textContent = "00 : 00 : 00";
            seconds = 0;
            minutes = 0;
            hours = 0;
        }
        

        
    }

}
</script>

<style>

</style>