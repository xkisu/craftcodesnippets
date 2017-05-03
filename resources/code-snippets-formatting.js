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

    $('pre').each(function(){
        var el = $(this);
        var language = el.attr('language') || 'javascript';
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
