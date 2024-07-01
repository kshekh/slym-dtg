<template>
       <svg :class="classIcon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="url(#paint0_linear_2038_51)"/>
<defs>
<linearGradient id="paint0_linear_2038_51" x1="-3.70568" y1="-5.01167" x2="18.8903" y2="-4.32451" gradientUnits="userSpaceOnUse">
<stop stop-color="#40BEBE"/>
<stop offset="1" stop-color="#2361E6"/>
</linearGradient>
</defs>
</svg>


</template>

<script>
export default {
    name: 'Ring',
    props: {
        classIcon: {
            type: String,

        }
    }
}
</script>
 