var getJSON = require("async-get-json"); 
var { ValueViewerSymbol } = require("@runkit/value-viewer");
var cssURL = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css";
var result = await getJSON("https://api.github.com/search/repositories?q=javascript");

var myObject = {
    [ValueViewerSymbol]: {
        title: "リポジトリ数",
        HTML: `<link rel="stylesheet" href="${cssURL}">
        <div class="alert alert-warning" role="alert">
            <h1 class="alert-heading">JavaScriptのリポジトリ数は…</h1>
            <hr>
            <h2 class="alert alert-primary">${result.total_count}</h2>
        </div>`
    }
};
