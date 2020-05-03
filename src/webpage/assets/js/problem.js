// 3rd party plugins / script (don't forget the full path is necessary)
var FULL_PATH = 'assets/js/', s =
[
    FULL_PATH + 'yosysjs.js' // Yosysjs, verilog parser
];

function load(url)
{
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url, false);
    ajax.onreadystatechange = function ()
    {
        var script = ajax.response || ajax.responseText;
        if (ajax.readyState === 4)
        {
            switch(ajax.status)
            {
                case 200:
                    eval.apply( window, [script] );
                    //console.log("library loaded: ", url);
                    break;
                default:
                    //console.log("ERROR: library not loaded: ", url);
            }
        }
    };
    ajax.send(null);
}

function init(){
    // initialize a full load of scripts
    if (s.length > 0)
    {
        for (i = 0; i < s.length; i++)
        {
            load(s[i]);
        }
    }

    YosysJS.load_viz();
    var ys = YosysJS.create();
    return ys;
}

function compile(){
    //console.log('Compile button pressed');
};

function test(){
    //window.console.log("Test button pressed");
};

function console(){
    //window.console.log("Console button pressed");
};

var ys = init();