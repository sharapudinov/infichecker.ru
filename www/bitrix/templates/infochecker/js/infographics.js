/*/Scripts/responsive/infographics.js*/
function initInfographics(n) {
    function s(n) {
        var r = document.createElement("div"), t, i;
        for (r.innerHTML = n, t = "", i = 0; i < r.childNodes.length; ++i) t = t + r.childNodes[i].nodeValue;
        return t
    }

    var o = function (n, t) {
        for (var i = 0, r = t.length; i < r; ++i) if (t[i].Id === n) return t[i]
    }, h = function (n) {
        var t = this.Config, i = function (r) {
            var f = 0, e = !1;
            for (var u in t) {
                if (r === f) {
                    e = !0;
                    $.ajax({
                        url: t[u].ConfigFileURL, complete: function (n, f) {
                            if (t[u].Status = f, f === "success") try {
                                t[u].Content = $.parseXML(n.responseText)
                            } catch (e) {
                                t[u].Status = "XML Parse Error"
                            }
                            r++;
                            i(r)
                        }
                    });
                    break
                }
                f++
            }
            e || n && n()
        };
        i(0)
    }, t = {}, r, u, f, i, e;
    for (window.Infographics || (window.Infographics = {}, window.__infographcisCount = 0), window.Infographics.Config = t.Config = {}, window.Infographics.Param = t.Param = {}, window.Infographics.LoadAllConfigFiles = t.LoadAllConfigFiles = h, window.Infographics.IsMobile = t.IsMobile = n.isMobile, window.Infographics[window.__infographcisCount] = t, window.__infographcisCount++, window.Infographics.RemoveEventAttributes = t.RemoveEventAttributes = function (n) {
        var t = {
            onabort: null,
            onblur: null,
            oncanplay: null,
            oncanplaythrough: null,
            onchange: null,
            onclick: null,
            oncontextmenu: null,
            oncuechange: null,
            ondblclick: null,
            ondrag: null,
            ondragend: null,
            ondragenter: null,
            ondragleave: null,
            ondragover: null,
            ondragstart: null,
            ondrop: null,
            ondurationchange: null,
            onemptied: null,
            onended: null,
            onerror: null,
            onfocus: null,
            onformchange: null,
            onforminput: null,
            oninput: null,
            oninvalid: null,
            onkeydown: null,
            onkeypress: null,
            onkeyup: null,
            onload: null,
            onloadeddata: null,
            onloadedmetadata: null,
            onloadstart: null,
            onmousedown: null,
            onmousemove: null,
            onmouseout: null,
            onmouseover: null,
            onmouseup: null,
            onmousewheel: null,
            onpause: null,
            onplay: null,
            onplaying: null,
            onprogress: null,
            onratechange: null,
            onreadystatechange: null,
            onreset: null,
            onscroll: null,
            onseeked: null,
            onseeking: null,
            onselect: null,
            onshow: null,
            onstalled: null,
            onsubmit: null,
            onsuspend: null,
            ontimeupdate: null,
            onvolumechange: null,
            onwaiting: null
        };
        return n.prop(t), $("*", n).prop(t), n
    }, window.Infographics.RemoveAttributeScripts = t.RemoveAttributeScripts = function (n) {
        var t = function () {
            if (this.attributes) for (a = 0; a < this.attributes.length; a++) this.attributes[0].value && this.attributes[0].value.toLowerCase().indexOf("javascript:") !== -1 && this.removeAttribute(this.attributes[0].name)
        };
        return n.each(t), $("*", n).each(t), n
    }, window.Infographics.RemoveScriptTags = t.RemoveScriptTags = function (n) {
        return n.filter("script").removeAttr("src").empty(), n = n.not("script"), $("script", n).removeAttr("src").empty().remove(), n
    }, window.Infographics.RemoveScripts = t.RemoveScripts = function (n) {
        return n = t.RemoveEventAttributes(n), n = t.RemoveAttributeScripts(n), t.RemoveScriptTags(n)
    }, u = 0, f = n.groups.length; u < f; ++u) r = n.groups[u], window.Infographics.Config[r.Name] = t.Config[r.Name] = r, r.AttachedXMLs && (window.Infographics.Config[r.Name].ConfigFileURL = t.Config[r.Name].ConfigFileURL = (r.SelectedInfographicsXMLId > 0 ? o(r.SelectedInfographicsXMLId, r.AttachedXMLs) : r.DefaultInfographicsXMLId > 0 ? o(r.DefaultInfographicsXMLId, r.AttachedXMLs) : r.AttachedXMLs[0]).XMLUrl);
    for (u = 0, f = n.params.length; u < f; ++u) i = n.params[u], i.Type === "Boolean" ? window.Infographics.Param[i.Name] = t.Param[i.Name] = i.Value === "" ? i.DefaultValue === "1" : i.Value === "true" : (e = (i.HtmlEncode === !0 ? i.Value : s(i.Value)).replace(/%27/gi, "'"), window.Infographics.Param[i.Name] = t.Param[i.Name] = e !== "" ? e : i.DefaultValue ? (i.HtmlEncode === !0 ? i.DefaultValue : s(i.DefaultValue)).replace(/%27/gi, "'") : "")
}
