// Restore console log
/*
if (!("console" in window) || !("firebug" in console))
{

  console.log = null;
  console.log;         // null

  delete console.log;

  // Original by Xaerxess
  var i = document.createElement('iframe');
  i.style.display = 'none';
  document.body.appendChild(i);
  window.console = i.contentWindow.console;

}
*/

window.webpackJsonp.push([["a666"], {
    a666: (ourmodule, ourexports, webpackrequire) => {
        console.log("HELLO!!");
        console.log("ourmodule:");
        console.log(ourmodule);
        console.log("ourexports:");
        console.log(ourexports);
        console.log("webpackrequire:");
        console.log(webpackrequire);

        var arr = Object.keys(window.webpackJsonp).filter((x) => x != "push").map((x) => window.webpackJsonp[x]);
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
    [["a666"]]
]);