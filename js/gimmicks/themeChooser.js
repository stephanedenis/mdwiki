(function($) {
    var tcGimmick = new MDwiki.Gimmick.Gimmick('themechooser');
    var tcHandler = new MDwiki.Gimmick.GimmickHandler('link');
    var tc = new MDwiki.Core.ThemeChooser();

    tc.registerDefaultThemes();

    $.md.wiki.stages.getStage('bootstrap').subscribe(function(done) {
        tc.loadDefaultTheme();
        done();
    });

    tcHandler.callback = function (params, done) {
        tc.enableChooser = true;

        themechooserBuilder(
            params.domElement,
            params.options,
            params.text,
            tc
        );
        done();
    };

    tcGimmick.addHandler(tcHandler);
    $.md.wiki.gimmicks.registerGimmick(tcGimmick);

    // creates the "Select Theme" navbar entry
    var themechooserBuilder = function($elem, opt, text, tc) {
        $this = $($elem);
        // TODO: Correct this code to make a drop down menu in place of a fulkl on menu
        var $chooser = $('<a href=""></a><ul></ul>');
        $chooser.eq(0).text(text);

        $.each(tc.themeNames, function(i, themeName) {
            var $li = $('<li></li>');
            $chooser.eq(1).append($li);

            var $a = $('<a/>')
                .text(themeName)
                .attr('href', '')
                .click(function(ev) {
                    ev.preventDefault();
                    tc.currentTheme = themeName;
                    window.location.reload();
                })
                .appendTo($li);
        });

        $chooser.eq(1).append('<li class="divider" />');
        var $li = $('<li/>');
        var $a_use_default = $('<a>Use default</a>');
        $a_use_default.click(function(ev) {
            ev.preventDefault();
            tc.currentTheme = '';
            window.location.reload();
        });
        $li.append($a_use_default);
        $chooser.eq(1).append($li);

        $chooser.eq(1).append('<li class="divider" />');
        $chooser.eq(1).append('<li><a href="http://www.bootswatch.com">Powered by Bootswatch</a></li>');
        $this.replaceWith($chooser);
    };
}(jQuery));