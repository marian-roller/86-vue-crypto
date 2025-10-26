<template>
    <div class="">
        <span>Mining time:</span> 
        <span :class="{ 'ml-5': true, 'font-weight-bold': true, highlight: isHighlighted }">
            {{ seconds }}.{{ ms }} s
        </span>
    </div>
</template>

<script>
export default {
    name: 'minetime',
    props: {
        timeElapsed: Number,
        mineFinished: Boolean,
    },
    data() {
        return { isHighlighted: false }
    },
    computed: {
        seconds() {
            return Math.floor(this.timeElapsed / 1000)
        },
        ms() {
            return String(this.timeElapsed % 1000).padStart(3, '0')
        }
    },
    watch: {
        mineFinished(newVal) {
            if (newVal) this.triggerHighlight()
        }
    },
    methods: {
        triggerHighlight() {
            this.isHighlighted = true;
            setTimeout(() => (this.isHighlighted = false), 1000);
        }
    }
}
</script>

<style>
.highlight {
  display: inline-block;
  animation: pulseText 1.5s ease-in-out;
}

@keyframes pulseText {
  0%   { transform: scale(1);   color: inherit; }
  50%  { transform: scale(1.25); color: #17a2b8; }
  100% { transform: scale(1);   color: #17a2b8; }
}
</style>