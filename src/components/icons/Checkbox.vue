<template>
  <svg :class="classIcon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="9" fill="url(#paint0_linear_0_1)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5384 6.47789C12.8268 6.77525 12.8195 7.25007 12.5221 7.53842L8.39713 11.5384C8.10622 11.8205 7.64383 11.8205 7.35291 11.5384L5.4779 9.72026C5.18053 9.43191 5.17322 8.95709 5.46157 8.65972C5.74992 8.36236 6.22474 8.35505 6.52211 8.6434L7.87501 9.95529L11.4779 6.46158C11.7753 6.17322 12.2501 6.18053 12.5384 6.47789Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="-3.70568" y1="-5.01167" x2="18.8903" y2="-4.32451" gradientUnits="userSpaceOnUse">
<stop stop-color="#40BEBE"/>
<stop offset="1" stop-color="#2361E6"/>
</linearGradient>
</defs>
</svg>


</template>

 
<script>
export default {
    name: 'Checkbox',
    props: {
        classIcon: {
            type: String,

        }
    }
}
</script>