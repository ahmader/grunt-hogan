/*USAGE (Node.js):*/
/*var templates = require("./somewhere/default.js");*/
/*var soleTemplateOutput = templates.render({context: "example"});*/
/*var specificTemplateOutputs = templates.render({}, "specific");*/
/**/
/*USAGE (In Browser)*/
/*<script type="text/javascript" src="./somewhere/default.js"></script>*/
/*<script type="text/javascript">
/*var soleTemplateOutput = default.render({context: "example"});*/
/*var specificTemplateOutputs = default.render({}, "specific");*/
/*someDiv.innerHTML = soleTemplateOutput || specificTemplateOutput;*/
/*</script>*/


(function (exports) {
    var Hogan = require("hogan.js");
    var templates = {};

    templates["default"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("/*USAGE (Node.js):*/");_.b("\n" + i);_.b("/*var templates = require(\"./somewhere/");_.b(_.v(_.f("outputFileName",c,p,0)));_.b(".js\");*/");_.b("\n" + i);_.b("/*var soleTemplateOutput = templates.render({context: \"example\"});*/");_.b("\n" + i);_.b("/*var specificTemplateOutputs = templates.render({}, \"specific\");*/");_.b("\n" + i);_.b("/**/");_.b("\n" + i);_.b("/*USAGE (In Browser)*/");_.b("\n" + i);_.b("/*<script type=\"text/javascript\" src=\"./somewhere/");_.b(_.v(_.f("outputFileName",c,p,0)));_.b(".js\"></script>*/");_.b("\n" + i);_.b("/*<script type=\"text/javascript\">");_.b("\n" + i);_.b("/*var soleTemplateOutput = ");_.b(_.v(_.f("exportName",c,p,0)));_.b(".render({context: \"example\"});*/");_.b("\n" + i);_.b("/*var specificTemplateOutputs = ");_.b(_.v(_.f("exportName",c,p,0)));_.b(".render({}, \"specific\");*/");_.b("\n" + i);_.b("/*someDiv.innerHTML = soleTemplateOutput || specificTemplateOutput;*/");_.b("\n" + i);_.b("/*</script>*/");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("(function (exports) {");_.b("\n" + i);_.b("    var Hogan = require(\"hogan.js\");");_.b("\n" + i);_.b("    var templates = {};");_.b("\n" + i);_.b("\n" + i);if(_.s(_.f("templates",c,p,1),c,p,0,706,775,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    templates[\"");_.b(_.v(_.f("name",c,p,0)));_.b("\"] = new Hogan.Template(");_.b(_.t(_.f("template",c,p,0)));_.b(");");_.b("\n");});c.pop();}_.b("\n" + i);_.b("    function render(context, templateName) {");_.b("\n" + i);_.b("        if (templateName) {");_.b("\n" + i);_.b("            return templates[templateName].render(context);");_.b("\n" + i);_.b("        }");_.b("\n" + i);_.b("        else {");_.b("\n" + i);_.b("            for (name in templates) {");_.b("\n" + i);_.b("                if (templates.hasOwnProperty(name) && typeof(name) !== 'function') {");_.b("\n" + i);_.b("                    return templates[name].render(context);");_.b("\n" + i);_.b("                }");_.b("\n" + i);_.b("            }");_.b("\n" + i);_.b("            throw \"could not resolve default template\";");_.b("\n" + i);_.b("        }");_.b("\n" + i);_.b("    }");_.b("\n" + i);_.b("    exports.render = render;");_.b("\n" + i);_.b("}(typeof exports === 'undefined' ? (this.");_.b(_.v(_.f("exportName",c,p,0)));_.b(" = {}) : exports));");return _.fl();;});

    function render(context, templateName) {
        if (templateName) {
            return templates[templateName].render(context);
        }
        else {
            for (name in templates) {
                if (templates.hasOwnProperty(name) && typeof(name) !== 'function') {
                    return templates[name].render(context);
                }
            }
            throw "could not resolve default template";
        }
    }
    exports.render = render;
}(typeof exports === 'undefined' ? (this.default = {}) : exports));