(function(){
    var languages = ["abap","abc","actionscript","ada","apache_conf","asciidoc","assembly_x86","autohotkey","batchfile","bro","c_cpp","c9search","cirru","clojure","cobol","coffee","coldfusion","csharp","css","curly","d","dart","diff","dockerfile","dot","drools","dummy","dummysyntax","eiffel","ejs","elixir","elm","erlang","forth","fortran","ftl","gcode","gherkin","gitignore","glsl","gobstones","golang","groovy","haml","handlebars","haskell","haskell_cabal","haxe","hjson","html","html_elixir","html_ruby","ini","io","jack","jade","java","javascript","json","jsoniq","jsp","jsx","julia","kotlin","latex","less","liquid","lisp","livescript","logiql","lsl","lua","luapage","lucene","makefile","markdown","mask","matlab","maze","mel","mushcode","mysql","nix","nsis","objectivec","ocaml","pascal","perl","pgsql","php","pig","powershell","praat","prolog","properties","protobuf","python","r","razor","rdoc","rhtml","rst","ruby","rust","sass","scad","scala","scheme","scss","sh","sjs","smarty","snippets","soy_template","space","sql","sqlserver","stylus","svg","swift","tcl","tex","text","textile","toml","tsx","twig","typescript","vala","vbscript","velocity","verilog","vhdl","wollok","xml","xquery","yaml","django"];

    if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
            value: function(searchElement, fromIndex) {

                // 1. Let O be ? ToObject(this value).
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                // 2. Let len be ? ToLength(? Get(O, "length")).
                var len = o.length >>> 0;

                // 3. If len is 0, return false.
                if (len === 0) {
                    return false;
                }

                // 4. Let n be ? ToInteger(fromIndex).
                //    (If fromIndex is undefined, this step produces the value 0.)
                var n = fromIndex | 0;

                // 5. If n ≥ 0, then
                //  a. Let k be n.
                // 6. Else n < 0,
                //  a. Let k be len + n.
                //  b. If k < 0, let k be 0.
                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                function sameValueZero(x, y) {
                    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                }

                // 7. Repeat, while k < len
                while (k < len) {
                    // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                    // b. If SameValueZero(searchElement, elementK) is true, return true.
                    // c. Increase k by 1.
                    if (sameValueZero(o[k], searchElement)) {
                        return true;
                    }
                    k++;
                }

                // 8. Return false
                return false;
            }
        });
    }

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    $('pre').each(function(){
        var el = $(this);
        var language = el.attr('language');
        if(language == undefined) {
            if(el.html().indexOf(":") > -1) {
                language = el.html().split(':')[0]
                if(languages.includes(language)){
                    el.html(el.html().replace(el.html().split(':')[0]+':', ''));
                }else {
                    language = 'javascript';
                }
            }else {
                language = 'javascript';
            }
        }
        create_snippet(el, language);
    })


    function create_snippet (el, language){
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
        editor.setReadOnly(true)
    }
})()
