function loadConfig() {
    var Config = {};
    try {
        if (localStorage && localStorage.getItem('config_regex')) {
            Config = JSON.parse(localStorage.getItem('config_regex'));
            var selStr = '#mode-option-group input[value="{0}"]'.format(Config.mode);
            $('#inputRegex').val(Config.inputRegex);
            $('#code_input').val(Config.input);
            onChange();
        }
    } catch (e) {
        console.error(e);
    }
    return Config;
}

function saveConfig() {
    if (!localStorage) return;
    var Config = {};
    Config.inputRegex = $('#inputRegex').val();
    Config.input = $('#code_input').val();
    Config.mode = $('#mode-option-group input[name="genMode"]:checked').val();
    localStorage.setItem("config_regex", JSON.stringify(Config));
}

function initEvent() {
    var input = $('#code_input')[0];
    input.onchange = onChange;
    input.onkeyup = onChange;
    input = $('#inputRegex')[0];
    input.onchange = onChange;
    input.onkeyup = onChange;
    $('#mode-option-group input, #gen-option-group input').click(function () {
        onChange();
    });
}

function onChange() {
    var input = $('#code_input').val();
    var reg = $('#inputRegex').val().trim();

    var mode = parseInt($('#mode-option-group input[name="genMode"]:checked').val());

    switch (mode) {
        case 1: reg = 'Mapped "\\{\\[(.*?)\\]'; break;
        case 2: reg = '^(\\d+\\.\\d+.*)$'; break;
        case 3: reg = '^(\\d+\\.\\d+\\.\\d+\\.[^\\d].*)$'; break;
    }
    var javaSrc;
    try {
        javaSrc = doReg(input, reg);
    } catch (error) {
        javaSrc = error.stack;
        console.error(error);
    }
    $('pre code').text(javaSrc);

    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    saveConfig();
}

function doReg(text, reg) {
    var r = new RegExp(reg);
    var arr = text.split(/\n/g);
    var resultArr = [];
    arr.forEach(function (item) {
        if (r.test(item)) {
            var m = item.match(r);
            resultArr.push(m[1]);
        }
    });
    return resultArr.join('\n');
};

function initDragEvent(){
    console.log("hello world.");
    var counts = [ 0, 0, 0 ];
    $(".draggable").draggable({ axis: false,        // "x"  "y"
                                distance: 5,
                                delay: 200,
                                addClasses: true,
                                containment: "document",
                                cursor: "crosshair",
//                                 cursorAt: { right: 15, bottom:15 },
                                disabled: false,
//                                 grid: [ 50, 50 ],   // 拖动时对齐到网格
//                                 handle: "span",     // 拖动手柄
                                helper: "clone",       // original clone
                                revert: true,          // true invalid valid
                                revertDuration: 200,
                                scope: "default",      // 拖放分组 tasks default
                                scroll: false,
                                scrollSensitivity: 100, // 拖放滚动敏感度
                                scrollSpeed: 100,       // 拖放滚动速度
                                snap: true,
                                snapMode: "both",       // "inner", "outer", "both"
                                snapTolerance: 30,
                                stack: ".container",    // 元素层级
                                zIndex: 100,            // 元素层级
                                iframeFix: true,
                                opacity: 0.85,
                                start: function(e) {
                                   counts[ 0 ]++;
                                   console.dir(e);
                                 },
                                 drag: function() {
                                   counts[ 1 ]++;
                                 },
                                 stop: function() {
                                   counts[ 2 ]++;
                                 }
                                });
}
