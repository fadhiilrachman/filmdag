base_url='http://127.0.0.1:3002';
function getMovie() {
    $.get(base_url + '/api/movieNowPlaying', function(result) {
        html='';
        for(var i=0;i<result.length;i++) {
            html+='<li class="page-item"><div class="pagethumb" data-toggle="tooltip" data-placement="top" title="" data-original-title="'+ result[i].original_title +'"><a href="/movie/'+ result[i].id +'">';
            html+='<img src="https://image.tmdb.org/t/p/w154/'+ result[i].poster_path +'" style="display: inline;"></a></div><div class="info"><h3><a href="/movie/'+ result[i].id +'">'+ result[i].original_title +'</a></h3>';
            html+='<span class="summary"></span></div></li>';
        }
        $('ul.page-itemlist').html(html);
        an_init();
    });
}
function an_init() {
    $('.container img').imgLazyLoad({
        container: window,
        effect: 'fadeIn',
        speed: 600,
        delay: 400,
        callback: function(){}
    });
    $(".navbar-form select").dropdown();
    $(".genre-filter select").dropdown();
    $('[data-toggle="tooltip"]').tooltip();
}
$(document).ready(function(){
    $.material.init();
    getMovie();
});
