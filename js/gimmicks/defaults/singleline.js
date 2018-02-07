(function($) {
    var slGimmick = new MDwiki.Gimmick.Gimmick('defaultsl');
    var slHandler = new MDwiki.Gimmick.GimmickHandler('singleline');
    slHandler.loadStage = 'pregimmick';

    slHandler.callback = function (params, done) {
        var trigger = params.trigger;
        var text = params.text;
        var options = params.options;
        
        var $div = $('<div></div>');
        var $p = $('<p/>');
        var $pre = $('<pre/>');

        var msg1 = 'Attention! a gimmick with the trigger "' + trigger + '" has been found!\n';
        msg1 += 'It has the following text: "' + text + '"\n';
        msg1 += ' and has the following option(s):';
        $p.text(msg1);
        $pre.text(JSON.stringify(options, null, 4));

        $p.append($pre);
        $div.append($p);

        $(params.domElement).replaceWith($div);
        done();
    };

    slGimmick.addHandler(slHandler);
    $.md.wiki.gimmicks.registerGimmick(slGimmick);
}(jQuery));