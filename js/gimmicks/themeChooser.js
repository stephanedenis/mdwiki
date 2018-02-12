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
        var $menu = $('<div/>').addClass('dropdown');
        $menu.append(
            $('<button/>')
            .text(text)
            .addClass('btn btn-primary dropdown-toggle')
            .attr('type', 'button')
            .attr('data-toggle', 'dropdown')
            .append(
                $('<span/>')
                .addClass('caret')
            )
        );

        var $menuContent;

        if($elem.parents('.navbar').length > 0) {
            // TODO: Test particular styling when the themeChooser is in a navbar (I.E. added in the `navigation.md` file)
        } else {
            $menuContent = $('<ul/>').addClass('dropdown-menu');
            $.each(tc.themeNames, function(i, name) {
                $menuContent.append(
                    $('<li/>')
                    .append(
                        $('<a/>')
                        .text(name)
                        .attr('href', '')
                        .click(function(e) {
                            e.preventDefault();
                            tc.currentTheme = name;
                            window.location.reload();
                        })
                    )
                );
            });

            $menuContent.append([
                $('<li/>')
                .addClass('divider'),
                
                $('<li/>')
                .append(
                    $('<a/>')
                    .text('Use default')
                    .click(function(e) {
                        e.preventDefault();
                        tc.currentTheme = '';
                        window.location.reload();
                    })
                ),

                $('<li/>')
                .addClass('divider'),

                $('<li/>')
                .append(
                    $('<a/>')
                    .text('Powered by Bootswatch')
                    .attr('href', 'http://www.bootswatch.com')
                )
            ]);
        }

        $menu.append($menuContent);
        $elem.replaceWith($menu);
    };
}(jQuery));