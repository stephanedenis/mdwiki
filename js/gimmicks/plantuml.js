/* # PlantUML GIMMICK
 *
 * Create diagrams in no time with [PlantUML][PlantUML].
 *
 * ## Usage
 *
 *     [gimmick:plantuml]( Bob->Alice : salut )
 *
 * ## Options
 *
 *
 * ## Author
 *
 * Copyright 2017 Stephane Denis
 *
 * <https://github.com/stephanedenis/>
 *
 * ## License
 *
 * Licensed under the [GNU Lesser General Public License][LGPL].
 *
 * [LGPL]: http://www.gnu.org/copyleft/lesser.html
 */

function encode6bit(b) {
    if (b < 10) {
        return String.fromCharCode(48 + b);
    }
    b -= 10;
    if (b < 26) {
        return String.fromCharCode(65 + b);
    }
    b -= 26;
    if (b < 26) {
        return String.fromCharCode(97 + b);
    }
    b -= 26;
    if (b === 0) {
        return '-';
    }
    if (b === 1) {
        return '_';
    }
    return '?';
}

function append3bytes(b1, b2, b3) {
    var c1 = b1 >> 2;
    var c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
    var c3 = ((b2 & 0xF) << 2) | (b3 >> 6);
    var c4 = b3 & 0x3F;
    var r = "";
    r += encode6bit(c1 & 0x3F);
    r += encode6bit(c2 & 0x3F);
    r += encode6bit(c3 & 0x3F);
    r += encode6bit(c4 & 0x3F);
    return r;
}

function encode64(data) {
    var r = "";
    for (var i = 0; i < data.length; i += 3) {
        if (i + 2 === data.length) {
            r += append3bytes(data[i], data[i + 1], 0);
        } else if (i + 1 === data.length) {
            r += append3bytes(data[i], 0, 0);
        } else {
            r += append3bytes(data[i], data[i + 1],
                data[i + 2]);
        }
    }
    return r;
}



function getImageUrlFromPlantUmlCode(s) {
    //UTF8
    return ("http://www.plantuml.com/plantuml/img/" + encode64(pako.deflate(s)));
}


(function($) {
    'use strict';

    function plantuml($link, opt, text) {
        return $link.each(function(i, e) {

            var $this = $(e);
            var data = $this.attr('href');
            var title = $this.attr('title');

            title = (title ? title : '');

            /* `FOOBAR´ => (FOOBAR)
            May need a better alternative because PlantUML use () in many cases
            */
            data = data.replace(new RegExp('`', 'g'), '(').replace(new RegExp('´', 'g'), ')');

            var $img = $('<img src="' + getImageUrlFromPlantUmlCode(data) + '">');

            $this.replaceWith($img);
        });
    }

    var plantumlgimmick = {
        name: 'plantuml',
        version: $.md.version,
        once: function() {
            $.md.linkGimmick(this, 'plantuml', plantuml);
            $.md.registerScript(this, '', {
                license: 'LGPL',
                loadstage: 'postgimmick',
                finishstage: 'all_ready'
            });
        }
    };
    $.md.registerGimmick(plantumlgimmick);

}(jQuery));
