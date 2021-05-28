import Vue from 'vue'

Vue.filter('formatPlayCount', function (value) {
    const param = {};
    let k = 10000,
        sizes = ['', '万', '亿', '万亿'],
        i;
    if (value < 100000) {
        return value
    } else {
        i = Math.floor(Math.log(value) / Math.log(k));
        param.value = parseInt(((value / Math.pow(k, i))))
        param.unit = sizes[i];
        return param.value + param.unit;
    }
})