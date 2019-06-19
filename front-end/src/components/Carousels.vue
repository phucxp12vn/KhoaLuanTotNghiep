<template>
    <div id="carousel">
        <v-carousel>
        <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade"
                    transition="fade"
        >
        </v-carousel-item>
    </v-carousel>    
    </div>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                src: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/47363850_573187323144331_5575456703756894208_n.jpg?_nc_cat=106&_nc_oc=AQktL-RJS29y1nNk-OpZuju96qTy6AkGNfuSLj1WsUfxjVxqG4WRElKk39-j-h-GBDicHy7xdid06DD2Wx3IzjDG&_nc_ht=scontent.fsgn5-6.fna&oh=cffb427ba699f71159b6115df5e0d1ac&oe=5D8EB4E6'
                },
                {
                src: 'https://cache.desktopnexus.com/cropped-wallpapers/901/901930-1366x768-[DesktopNexus.com].jpg?st=xgZBpjyX7QPkne7drvekwQ&e=1560682208'
                },
                {
                src: 'http://66.media.tumblr.com/f89e45629f6a1e3724c49a34f542f7e6/tumblr_msthwlKVzP1svir0eo1_500.jpg'
                },
                {
                src: 'https://i.dailymail.co.uk/i/newpix/2018/03/07/11/49F663A400000578-5472257-image-a-29_1520422025590.jpg'
                }
            ]
        }
    }
}
</script>

