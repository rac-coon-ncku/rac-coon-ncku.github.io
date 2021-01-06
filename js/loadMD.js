function loadRemoteMDtoHtml(_url) {
    var converter = new showdown.Converter(),
        text = $.ajax({
            url: _url,
            async: false
        }).responseText,
        html = converter.makeHtml(text);
    document.write(html);
}