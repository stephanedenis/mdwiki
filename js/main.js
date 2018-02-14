(function($) {
    'use strict';


    if (window.location.href.indexOf('SpecRunner') >= 0)
        $.md.initMDwiki(undefined, false);
    else
        $.md.initMDwiki(undefined, true);

    //$.md.wiki.gimmicks.registerGimmick(new MDwiki.Core.ThemeChooserGimmick());

}(jQuery));
