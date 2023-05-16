$(function(params) {
    $('.module').on('click','>div',function(params) {
       console.log('111');
    })
    $('.module>div').click(function(params) {
        console.log('111');
    })
})