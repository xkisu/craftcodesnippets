var supportedModes = {
    ABAP:        ["abap"],
    ABC:         ["abc"],
    ActionScript:["as"],
    ADA:         ["ada|adb"],
    Apache_Conf: ["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],
    AsciiDoc:    ["asciidoc|adoc"],
    Assembly_x86:["asm|a"],
    AutoHotKey:  ["ahk"],
    BatchFile:   ["bat|cmd"],
    Bro:         ["bro"],
    C_Cpp:       ["cpp|c|cc|cxx|h|hh|hpp|ino"],
    C9Search:    ["c9search_results"],
    Cirru:       ["cirru|cr"],
    Clojure:     ["clj|cljs"],
    Cobol:       ["CBL|COB"],
    coffee:      ["coffee|cf|cson|^Cakefile"],
    ColdFusion:  ["cfm"],
    CSharp:      ["cs"],
    CSS:         ["css"],
    Curly:       ["curly"],
    D:           ["d|di"],
    Dart:        ["dart"],
    Diff:        ["diff|patch"],
    Dockerfile:  ["^Dockerfile"],
    Dot:         ["dot"],
    Drools:      ["drl"],
    Dummy:       ["dummy"],
    DummySyntax: ["dummy"],
    Eiffel:      ["e|ge"],
    EJS:         ["ejs"],
    Elixir:      ["ex|exs"],
    Elm:         ["elm"],
    Erlang:      ["erl|hrl"],
    Forth:       ["frt|fs|ldr|fth|4th"],
    Fortran:     ["f|f90"],
    FTL:         ["ftl"],
    Gcode:       ["gcode"],
    Gherkin:     ["feature"],
    Gitignore:   ["^.gitignore"],
    Glsl:        ["glsl|frag|vert"],
    Gobstones:   ["gbs"],
    golang:      ["go"],
    Groovy:      ["groovy"],
    HAML:        ["haml"],
    Handlebars:  ["hbs|handlebars|tpl|mustache"],
    Haskell:     ["hs"],
    Haskell_Cabal:     ["cabal"],
    haXe:        ["hx"],
    Hjson:       ["hjson"],
    HTML:        ["html|htm|xhtml"],
    HTML_Elixir: ["eex|html.eex"],
    HTML_Ruby:   ["erb|rhtml|html.erb"],
    INI:         ["ini|conf|cfg|prefs"],
    Io:          ["io"],
    Jack:        ["jack"],
    Jade:        ["jade|pug"],
    Java:        ["java"],
    JavaScript:  ["js|jsm|jsx"],
    JSON:        ["json"],
    JSONiq:      ["jq"],
    JSP:         ["jsp"],
    JSX:         ["jsx"],
    Julia:       ["jl"],
    Kotlin:      ["kt|kts"],
    LaTeX:       ["tex|latex|ltx|bib"],
    LESS:        ["less"],
    Liquid:      ["liquid"],
    Lisp:        ["lisp"],
    LiveScript:  ["ls"],
    LogiQL:      ["logic|lql"],
    LSL:         ["lsl"],
    Lua:         ["lua"],
    LuaPage:     ["lp"],
    Lucene:      ["lucene"],
    Makefile:    ["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],
    Markdown:    ["md|markdown"],
    Mask:        ["mask"],
    MATLAB:      ["matlab"],
    Maze:        ["mz"],
    MEL:         ["mel"],
    MUSHCode:    ["mc|mush"],
    MySQL:       ["mysql"],
    Nix:         ["nix"],
    NSIS:        ["nsi|nsh"],
    ObjectiveC:  ["m|mm"],
    OCaml:       ["ml|mli"],
    Pascal:      ["pas|p"],
    Perl:        ["pl|pm"],
    pgSQL:       ["pgsql"],
    PHP:         ["php|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],
    Pig:         ["pig"],
    Powershell:  ["ps1"],
    Praat:       ["praat|praatscript|psc|proc"],
    Prolog:      ["plg|prolog"],
    Properties:  ["properties"],
    Protobuf:    ["proto"],
    Python:      ["py"],
    R:           ["r"],
    Razor:       ["cshtml|asp"],
    RDoc:        ["Rd"],
    RHTML:       ["Rhtml"],
    RST:         ["rst"],
    Ruby:        ["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],
    Rust:        ["rs"],
    SASS:        ["sass"],
    SCAD:        ["scad"],
    Scala:       ["scala"],
    Scheme:      ["scm|sm|rkt|oak|scheme"],
    SCSS:        ["scss"],
    SH:          ["sh|bash|^.bashrc"],
    SJS:         ["sjs"],
    Smarty:      ["smarty|tpl"],
    snippets:    ["snippets"],
    Soy_Template:["soy"],
    Space:       ["space"],
    SQL:         ["sql"],
    SQLServer:   ["sqlserver"],
    Stylus:      ["styl|stylus"],
    SVG:         ["svg"],
    Swift:       ["swift"],
    Tcl:         ["tcl"],
    Tex:         ["tex"],
    Text:        ["txt"],
    Textile:     ["textile"],
    Toml:        ["toml"],
    TSX:         ["tsx"],
    Twig:        ["twig|swig"],
    Typescript:  ["ts|typescript|str"],
    Vala:        ["vala"],
    VBScript:    ["vbs|vb"],
    Velocity:    ["vm"],
    Verilog:     ["v|vh|sv|svh"],
    VHDL:        ["vhd|vhdl"],
    Wollok:      ["wlk|wpgm|wtest"],
    XML:         ["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],
    XQuery:      ["xq"],
    YAML:        ["yaml|yml"],
    // Add the missing mode "Django" to ext-modelist
    Django:      ["html"]
};

var nameOverrides = {
    ObjectiveC: "Objective-C",
    CSharp: "C#",
    golang: "Go",
    C_Cpp: "C and C++",
    coffee: "CoffeeScript",
    HTML_Ruby: "HTML (Ruby)",
    HTML_Elixir: "HTML (Elixir)",
    FTL: "FreeMarker"
};

(function(){

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    // Here we setup a snippet editor that's displayed as a custom field in a new entry
    jQuery.fn.editorcodesnippet = function(id, name, language){

        var el = $('<div style="margin-top: -15px;"></div>')
        $(this[0]).append(el);

        var lang_select = $('select[id="'+id+'-language"]');
        for (var k in supportedModes){
            var n = nameOverrides[k] || k;
            n = n.replace(/_/g, ' ');
            lang_select.append($('<option value="'+n.toLowerCase()+'">'+n+'</option>'))
        }

        var uuid = guid();
        el.attr('id', 'editors_'+uuid);

        var editor = ace.edit('editors_'+uuid);
        editor.setOptions({
            maxLines: 120//Infinity
        });
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/" + language);
        editor.getSession().setTabSize(4);
        editor.setShowPrintMargin(false);
        editor.setFontSize(16)

        el.editor = editor;

        var ta = $('textarea[name="fields['+name+']"]')
        if(ta.val().indexOf(':') > -1){
            var l = ta.val().split(':')[0];
            var v = ta.val().replace(l+':', '');
            editor.getSession().setMode("ace/mode/" + l);
            editor.getSession().setValue(v);
            lang_select.val(l);
        }else {
            editor.getSession().setValue(ta.val());
        }

        editor.getSession().on("change", c);
        lang_select.on('change', c)

        function c (){
            var language = lang_select.val();
            editor.getSession().setMode("ace/mode/" + language);
            ta.val(language + ':' + editor.getSession().getValue());
        }


        return this;
    }
})()

if (!RedactorPlugins) var RedactorPlugins = {};
{

    var modesByName = {};
    for (var name in supportedModes) {
        var data = supportedModes[name];
        var displayName = (nameOverrides[name] || name).replace(/_/g, " ");
        var filename = name.toLowerCase();
        modesByName[name] = displayName;
        // modes.push(mode);
    }

    function searchForLanguage (language) {
        for(var key in modesByName) {
            if (key.toLowerCase().match(language.toLowerCase())) return modesByName[key];
        }
        return -1;
    }

    function searchForLanguages (language) {


        var languages = [];
        for(var k in nameOverrides)
        if(nameOverrides[k].toLowerCase().match(language.toLowerCase().replace(/\+/g, '\\+')))
        languages.push(k);
        for(var key in supportedModes) {
            var name = language;// nameOverrides[language] || language;
            if (key.toLowerCase().match(name.toLowerCase().replace(/\+/g, '\\+')) && languages.indexOf(key) <= -1) languages.push(key);
        }
        return languages;
    }

    var snippeteditor = undefined;
    RedactorPlugins.codesnippets = function()
    {
        return {
            init: function ()
            {
                var button = this.button.add('insert-codesnippet', 'Code Snippet');
                this.button.setIcon(button, '<i class="code-snippet-icon"></i>');
                this.button.addCallback(button, this.codesnippets.show);
                window.red = this;
            },
            show: function(buttonName)
            {
                this.modal.addTemplate('codesnippet', this.codesnippets.getTemplate());
                this.modal.load('codesnippet', 'Insert Code Snippet', 800);

                var button = this.modal.getActionButton();
                button.on('click', this.codesnippets.insert);

                this.modal.show();

                // $('#code-snippet-ace').focus();
                this.codesnippets.editor = ace.edit("code-snippet-ace");
                this.codesnippets.editor.setTheme("ace/theme/monokai");
                this.codesnippets.editor.getSession().setMode("ace/mode/javascript");
                this.codesnippets.editor.getSession().setTabSize(4);
                this.codesnippets.editor.setShowPrintMargin(false);
                this.codesnippets.editor.setFontSize(16)

                if(this.selection.block()){
                    var block = $(this.selection.block());
                    if(this.selection.block().nodeName == 'PRE'){
                        console.log($(this.selection.block()));
                        var language = block.attr('language') != undefined ? block.attr('language') : 'javascript';
                        this.codesnippets.setLanguage(language, language);
                        block.contents().filter(function(){
                            return ($(this).hasClass('redactor-selection-marker')); // Remove element that readctor adds to show the cursor position
                        }).remove();
                        this.codesnippets.editor.setValue(this.selection.block().innerText);
                        // this.caret.after(this.selection.block());
                    }
                }

                var _t = this;

                var mouseoverselect = false;

                $('#codesnippet-language').blur(function(){
                    if(!mouseoverselect)
                    $('#codesnippet-language-selector').hide();
                })

                $('#codesnippet-language-selector').mouseover(()=>{
                    mouseoverselect = true;
                    console.log('mouseover')
                })
                $('#codesnippet-language-selector').mouseleave(()=>{
                    mouseoverselect = false;
                })

                $('#codesnippet-language').on('input', function(){
                    $('#codesnippet-language').css({
                        "background": "#FF9E9E"
                    })

                    var text = $(this).val();
                    // _t.codesnippets.mode = searchForLanguage(text);
                    var languages = searchForLanguages(text);
                    // console.log(_t.codesnippets.mode);

                    $('#codesnippet-language-selector').show();
                    $('#codesnippet-language-selector').css({
                        "postion": "absolute",
                        "top": $('#codesnippet-language').position().top + $('#codesnippet-language').outerHeight() + 'px',
                        "left": $('#codesnippet-language').position().left + 'px',
                        "width":  ($('#codesnippet-language').outerWidth()-2) + 'px'
                    });
                    $('#codesnippet-language-selector ul').html('');
                    languages.forEach(function(language){
                        var name = nameOverrides[language] || language
                        var li = $('<li></li>');
                        var a = $('<a value="'+language+'">'+name+'</a>');
                        li.append(a);
                        $('#codesnippet-language-selector ul').append(li);
                        $(a).click(function(){
                            _t.codesnippets.setLanguage($(this).html(), $(this).attr('value').toLowerCase());
                        })
                    })
                })
            },
            setLanguage: function (name, lang){
                $('#codesnippet-language').css({
                    "background": "#9EFFBD"
                })
                $('#codesnippet-language').val(name );
                $('#codesnippet-language-icon').html('<i class="devicon-' + lang + '-plain"></i>');
                this.codesnippets.editor.getSession().setMode("ace/mode/" + lang);
                $('#codesnippet-language-selector').hide();
            },
            insert: function()
            {
                var html = $('#codesnippet-textarea').val();
                var language = $('#codesnippet-language').val().toLowerCase();
                var title = $('#codesnippet-title').val();

                this.modal.close();

                this.buffer.set(); // for undo action

                if(this.selection.block().nodeName == 'PRE') {
                    this.selection.block().remove();
                }

                this.buffer.set(); // for undo action

                this.insert.raw('</br><pre class="codesnippet" title="'+title+'" language="'+language+'">'+this.codesnippets.editor.getValue()+'</pre></br>');
            },
            getTemplate: function()
            {
                return String()
                + '<div id="codesnippet-language-selector"><ul></ul></div>'
                + '<div class="modal-section" id="redactor-modal-advanced">'
                + '<div class="snippet-main-options">'
                + '<input type="text" id="codesnippet-title" placeholder="Title">'
                + '<input type="text" id="codesnippet-language" placeholder="Language">'
                + '<div id="codesnippet-language-icon"></div>'
                + '</div>'
                + '<div id="code-snippet-ace" height="200px" style="height:200px;"></div>'
                + '</section>'
                + '<section>'
                + '<button id="redactor-modal-button-action">Insert</button>'
                + '<button id="redactor-modal-button-cancel">Cancel</button>'
                + '</section>'
                + '</div>';
            },
        };
    };

}
