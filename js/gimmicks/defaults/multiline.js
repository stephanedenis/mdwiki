(function($) {
    var mlGimmick = new MDwiki.Gimmick.Gimmick('defaultml');
    var mlHandler = new MDwiki.Gimmick.GimmickHandler('multiline');
    mlHandler.loadStage = 'pregimmick';

    mlHandler.callback = function (params, done) {
        var trigger = params.options.__originalTrigger__;
        var text = params.text;
        var options = params.options;
        
        var $div = $('<div></div>');
        var $p = $('<p/>');
        var $pre = $('<pre/>');

        var msg1 = 'Attention! a multiline gimmick with the trigger "' + trigger + '" has been found!\n';
        msg1 += 'It has the following text: "' + text + '\n';
        msg1 += ' and has the following option(s):';
        $p.text(msg1);
        $pre.text(JSON.stringify(options, function(key, e){
            if(key=='__originalTrigger__')
                return undefined;
            return e;
        }, 4));

        $p.append($pre);
        $div.append($p);

        // multine gimmicks are inside a pre but it's domElement is the code block inside it
        // so we replace the parent pre with the div that we constructed
        $(params.domElement).parent().replaceWith($div);
        done();
    };

    mlGimmick.addHandler(mlHandler);
    $.md.wiki.gimmicks.registerGimmick(mlGimmick);
}(jQuery));