modelName = "android"

tem = """
======================= index.html ==============================
<a class="btn btn-primary btn-lg" role="button" href="./src/{modelName}/{modelName}.html">{modelName}</a>


======================= {modelName}.html =======================
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width,initial-scale=1.0,user-scalable=no" name="viewport">

    <title>Android-sample</title>
    <!-- utils -->
    <script src="../js/utils/jquery.js"></script>
    <script src="../js/utils/StringUtil.js"></script>
    <script src="../js/utils/string-format.js"></script>
    <script src="../js/utils/beautify.js"></script>
    <script src="../js/utils/code-format.js"></script>
    <script src="../js/utils/common.js"></script>
    <!--bootstrap-->
    <link rel="stylesheet" href="../../bootstrap-3.3.6-dist/css/bootstrap.css" />
    <link rel="stylesheet" href="../../bootstrap-3.3.6-dist/css/bootstrap-theme.css" />
    <script src="../../bootstrap-3.3.6-dist/js/bootstrap.js"></script>
    <!-- highlight -->
    <link rel="stylesheet" href="../../highlight/styles/default.css">
    <script src="../../highlight/highlight.pack.js"></script>
    <!-- func -->
    <script src="../js/escape/MD5.js"></script>
    <script src="../js/escape/Base64.js"></script>
    <script src="../js/escape/he.js"></script>
    <script src="../js/escape/crypto-js.js"></script>
    <script src="../js/escape/escape.js"></script>
    <!-- local -->
    <link rel="stylesheet" href="./android.css" />
    <script src="./android.js"></script>
</head>

<body>
    <div class="page-header">
        <h1>Android <small>sample</small></h1>
    </div>
    <div class="head-config-panel">
        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputRegex" class="col-sm-2 control-label">正则表达式</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputRegex" placeholder="/^(.{5}).*$/">
                </div>
            </div>
            <div id="mode-option-group" class="form-group col-sm-offset-2 col-sm-12">
                <label class="radio-inline"><input type="radio" name="genMode" value="1"> LogUrl </label>
                <label class="radio-inline"><input type="radio" name="genMode" value="2"> 接口文档目录 </label>
                <label class="radio-inline"><input type="radio" name="genMode" value="3"> 接口文档目录(2) </label>
            </div>
        </form>
    </div>

    <div class="input-code-panel">
        <textarea id="code_input" class="form-control" rows="5" spellcheck="false"> </textarea>
    </div>

    <div class="output-code-panel">
        <div class="code_output" contenteditable="true" spellcheck="false">
            <pre><code class="java" id="code_output"> </code></pre>
        </div>
    </div>

    <script type="text/javascript">
        $(function() {
            console.log('====================hello==============');
            loadConfig();
            initEvent();
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        });
    </script>

</body>

</html>



======================= {modelName}.js =========================



======================= {modelName}.css ========================



"""
