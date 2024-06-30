<template>
    <svg viewBox="0 0 18 18" fill="none" :class="classIcon" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-4.1197" y1="11.399" x2="18.4763" y2="10.7118" gradientTransform="matrix(1 0 0 -1 0 20)">
	<stop  offset="0" style="stop-color:#40BEBE"/>
	<stop  offset="1" style="stop-color:#2361E6"/>
</linearGradient>
<circle class="st0" cx="9" cy="9" r="9"/>
<path class="st1" d="M12.5,6.5c0.3,0.3,0.3,0.8,0,1.1l-4.1,4c-0.3,0.3-0.8,0.3-1,0L5.5,9.7C5.2,9.4,5.2,9,5.5,8.7
	c0.3-0.3,0.8-0.3,1.1,0L7.9,10l3.6-3.5C11.8,6.2,12.3,6.2,12.5,6.5z"/>
    </svg>

</template>


<style type="text/css">
	.st0{fill:url(#SVGID_1_);}
	.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
</style>
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