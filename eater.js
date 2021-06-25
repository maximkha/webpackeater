window.webpackChunk.push([[666], {
    //
    666: function (ourmodule, ourexports, webpackrequire) {
        console.log("HELLO!!");
        console.log("ourmodule:");
        console.log(ourmodule);
        console.log("ourexports:");
        console.log(ourexports);
        console.log("webpackrequire:");
        console.log(webpackrequire);
        console.log("attempting alien contact...");

        var arr = Object.keys(window.webpackChunk).filter((x) => x != "push").map((x) => window.webpackChunk[x]);
        console.log("Got other modules: ");
        console.log(arr.length + " other modules");

        for (var a of arr) {
            console.log("Module main @ " + a[0])
            for (var moduleid in a[1])
            {
                try {
                    console.log("==========================")
                    console.log("attempting import of " + moduleid);
                    var module = webpackrequire(moduleid);
                    console.log("Imported!");
                    console.log("name");
                    console.log(module);
                    console.log("keys");
                    console.log(Object.keys(module));
                } catch (error) {
                    console.error(error);
                }   
            }    
        }
    }
},
    function (requirehandle) {
        // after debugging this looks to be a require handle, so let's just require our own module to run it!
        console.log(requirehandle); //f r(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}
        console.log(requirehandle(666))
    }
]);