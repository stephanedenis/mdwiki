(function($) {
    var disqusHandler = new MDwiki.Core.GimmickHandler('link');
    var dqAlreadyDone = false;
    disqusHandler.loadStage = 'ready';
    disqusHandler.callback = function (params, done) {
        disqus(params.domElement, params.options, params.text);
    };

    var disqusGimmick = new MDwiki.Core.Gimmick('disqus', disqusHandler);
    $.md.wiki.gimmicks.registerGImmick(disqusGimmick);

    function disqus($links, opt, text) {
        var protocol = window.location.protocol;
        var default_options = {identifier: ''};
        var options = $.extend(default_options, opt);
        var disqus_div = $(
            '<div id="disqus_thread" class="md-external md-external-noheight md-external-nowidth">' +
            '<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>' +
            '</div>'
        );
        disqus_div.css('margin-top', '2em');
    }
}(jQuery));