<template>
    <svg viewBox="0 0 18 18" fill="none" :class="classIcon" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-4.1197" y1="11.399" x2="18.4763" y2="10.7118" gradientTransform="matrix(1 0 0 -1 0 20)">
	<stop  offset="0" style="stop-color:#40BEBE"/>
	<stop  offset="1" style="stop-color:#2361E6"/>
</linearGradient>
<path class="st0" d="M9,16.5c4.1,0,7.5-3.4,7.5-7.5c0-4.1-3.4-7.5-7.5-7.5C4.9,1.5,1.5,4.9,1.5,9C1.5,13.1,4.9,16.5,9,16.5z M9,18
	c5,0,9-4,9-9c0-5-4-9-9-9C4,0,0,4,0,9C0,14,4,18,9,18z"/>
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
<style type="text/css">
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:url(#SVGID_1_);}
</style>