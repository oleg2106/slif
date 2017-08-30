/*! Childrenscience tasks engine - v1.0.1.0.1 - 2017-03-27 12:07:19 */
function _debug() {}

function compareRandom(a, b) {
    return Math.random() - .5
}

function draw() {
    task[data.currentTask].settings && task[data.currentTask].settings["grid-random"] && (task[data.currentTask].settings.grid && task[data.currentTask].settings.grid[task[data.currentTask].settings["grid-random"]] && task[data.currentTask].settings.grid[task[data.currentTask].settings["grid-random"]].sort(compareRandom), task[data.currentTask].settings["grid-sm"] && task[data.currentTask].settings["grid-sm"][task[data.currentTask].settings["grid-random"]] && task[data.currentTask].settings["grid-sm"][task[data.currentTask].settings["grid-random"]].sort(compareRandom), task[data.currentTask].settings["grid-md"] && task[data.currentTask].settings["grid-md"][task[data.currentTask].settings["grid-random"]] && task[data.currentTask].settings["grid-md"][task[data.currentTask].settings["grid-random"]].sort(compareRandom), task[data.currentTask].settings["grid-lg"] && task[data.currentTask].settings["grid-lg"][task[data.currentTask].settings["grid-random"]] && task[data.currentTask].settings["grid-lg"][task[data.currentTask].settings["grid-random"]].sort(compareRandom)), data.data[data.currentTask] = {};
    var a = getContainer(),
        b = a.find(".field:eq(0)");
    task[data.currentTask].settings && task[data.currentTask].settings.height && b.css("height", task[data.currentTask].settings.height), b.html(""), a.removeClass("final-overlay"), updateSteps();
    var c = $(window).width();
    c < 800 && task[data.currentTask].settings["height-sm"] ? b.css("height", task[data.currentTask].settings["height-sm"]) : c > 799 && c < 1200 && task[data.currentTask].settings["height-md"] ? b.css("height", task[data.currentTask].settings["height-md"]) : c > 1199 && task[data.currentTask].settings["height-lg"] && b.css("height", task[data.currentTask].settings["height-lg"]), task[data.currentTask].settings && task[data.currentTask].settings.description ? a.find(".description:eq(0)").html(task[data.currentTask].settings.description) : a.find(".description:eq(0)").html("");
    for (var d in task[data.currentTask])
        if ("settings" === d);
        else if (window[d]) {
        window.debug && console.log(task[data.currentTask][d]);
        var e = window[d].create(task[data.currentTask][d]);
        e.each(appendToField)
    } else window.debug && console.log("Widget " + d + " not found");
    var f = $("<div></div>").addClass("right-wrong-message");
    if (f.css("display", "none"), a.find(".footer:eq(0)").html(""), task[data.currentTask].settings && task[data.currentTask].settings.checkButton !== !1 && !task[data.currentTask].settings.autoCheck) {
        var g = generateButton({
            type: "dark",
            icon: "check.png",
            text: "Проверить",
            size: "large"
        });
        g.click(check), task[data.currentTask].settings.checkButton && task[data.currentTask].settings.checkButton.style && task[data.currentTask].settings.checkButton.style.top ? (g.css("top", task[data.currentTask].settings.checkButton.style.top), f.css("top", task[data.currentTask].settings.checkButton.style.top)) : (g.css("top", "0px"), f.css("top", "0px")), !task[data.currentTask].settings.checkButton || !task[data.currentTask].settings.checkButton.style || !task[data.currentTask].settings.checkButton.style.left, a.find(".footer:eq(0)").append(g), f.css("min-height", g.height() + "px")
    }
    a.find(".footer:eq(0)").append(f), a.find("*").mousedown(allElementsClick), data.currentTask == task.length - 1 && task[0].finalScreen && a.addClass("final-overlay-all"), window.parent && window.parent.document && window.parent.document.getElementsByClassName("contentIframe")[0] && (window.parent.document.getElementsByClassName("contentIframe")[0].height = $(document).height() + 5, window.parent.document.getElementsByClassName("contentIframe")[0].style.height = $(document).height() + 5 + "px")
}

function resize() {
    var a = getContainer().find(".field:eq(0)");
    task[data.currentTask].settings && task[data.currentTask].settings.height && a.css("height", task[data.currentTask].settings.height);
    var b = $(window).width();
    b < 800 && task[data.currentTask].settings["height-sm"] ? a.css("height", task[data.currentTask].settings["height-sm"]) : b > 799 && b < 1200 && task[data.currentTask].settings["height-md"] ? a.css("height", task[data.currentTask].settings["height-md"]) : b > 1199 && task[data.currentTask].settings["height-lg"] && a.css("height", task[data.currentTask].settings["height-lg"]);
    var c = getContainer().find(".footer:eq(0)").find(".button:eq(0)");
    c && $(".right-wrong-message:eq(0)").css("min-height", c.height() + "px");
    for (var d in task[data.currentTask]) "settings" === d || (window[d] ? (window.debug && console.log(task[data.currentTask][d]), window[d].resize && window[d].resize()) : window.debug && console.log("Widget " + d + " not found"))
}

function getGridCell(a, b, c) {
    return function() {
        return getGridCellFunc(a, b, c)
    }
}

function activate() {
    if (task[data.currentTask].settings && task[data.currentTask].settings.resetStatus) {
        for (var a in task[data.currentTask]) window[a] && window[a].resetStatus && window[a].resetStatus();
        $(".right-wrong-message:eq(0)").hide()
    }
}

function getGridCellFunc(a, b, c) {
    c = c || "x";
    var d = {
            x: "0vw",
            y: "0vw"
        },
        e = $(window).width();
    return window.task ? (task[data.currentTask] && task[data.currentTask].settings && task[data.currentTask].settings.grid && (task[data.currentTask].settings.grid.x && task[data.currentTask].settings.grid.x[a] && (d.x = task[data.currentTask].settings.grid.x[a]), task[data.currentTask].settings.grid.y && task[data.currentTask].settings.grid.y[b] && (d.y = task[data.currentTask].settings.grid.y[b])), e < 800 && task[data.currentTask].settings && task[data.currentTask].settings["grid-sm"] ? (task[data.currentTask].settings["grid-sm"].x[a] && (d.x = task[data.currentTask].settings["grid-sm"].x[a]), task[data.currentTask].settings["grid-sm"].y[b] && (d.y = task[data.currentTask].settings["grid-sm"].y[b])) : e > 799 && e < 1200 && task[data.currentTask].settings && task[data.currentTask].settings["grid-md"] ? (task[data.currentTask].settings["grid-md"].x[a] && (d.x = task[data.currentTask].settings["grid-md"].x[a]), task[data.currentTask].settings["grid-md"].y[b] && (d.y = task[data.currentTask].settings["grid-md"].y[b])) : e > 1199 && task[data.currentTask].settings && task[data.currentTask].settings["grid-lg"] && (task[data.currentTask].settings["grid-lg"].x[a] && (d.x = task[data.currentTask].settings["grid-lg"].x[a]), task[data.currentTask].settings["grid-lg"].y[b] && (d.y = task[data.currentTask].settings["grid-lg"].y[b]))) : alert("no window.task"), d[c]
}

function generateButton(a) {
    var b = $("<div></div>").addClass("button");
    a.size && b.addClass(a.size), a.type && b.addClass(a.type);
    var c = $("<p>" + a.text + "</p>");
    return b.append(c), b
}

function nexStep() {
    getContainer().find(".field").fadeOut("fast", function() {
        getContainer().find(".field").fadeIn("fast"), data.currentTask++, draw()
    })
}

function check() {
    var a = !0,
        b = 0;
    for (var c in task[data.currentTask])
        if ("settings" != c && window[c] && window[c].check) {
            var d = window[c].check();
            b += d.score, d.result || (a = !1)
        }
    if (task[data.currentTask].settings && task[data.currentTask].settings.customCheck) {
        var e = task[data.currentTask].settings.customCheck({
            result: a,
            score: b
        });
        e && (a = e.result, e.score && (b = b))
    }
    a ? (data.steps[data.currentTask] = !0, getContainer().addClass("final-overlay"), data.currentTask == task.length - 1 && getContainer().addClass("final-overlay-all"), getContainer().find("*").each(function() {
        $(this).hasClass("check-message-button") || $(this).hasClass("reload") || $(this).unbind(), "INPUT" == this.nodeName && $(this).attr("disabled", "disabled")
    })) : data.steps[data.currentTask] = !1, a && task[data.currentTask].settings && task[data.currentTask].settings.rightText ? showRightWrongMessage() : !a && task[data.currentTask].settings && task[data.currentTask].settings.wrongText && showRightWrongMessage(!0), a && task[data.currentTask].settings && task[data.currentTask].settings.help && task[data.currentTask].settings.helpAfterWrong ? help[task[data.currentTask].settings.help]() : !a && task[data.currentTask].settings && task[data.currentTask].settings.help && task[data.currentTask].settings.helpAfterWrong && help[task[data.currentTask].settings.help](), a && task[data.currentTask].settings && task[data.currentTask].settings.delayBeforeNextStep && setTimeout(nexStep, task[data.currentTask].settings.delayBeforeNextStep)
}

function showRightWrongMessage(a) {
    var b = $("<div></div>"),
        c = $(".right-wrong-message:eq(0)");
    c.children().each(function() {
        $(this).remove()
    }), b.css("width", $(window).width() - c.show().offset().left + "px"), b.css("height", c.height() + "px"), a ? (b.addClass("wrongText"), b.html(task[data.currentTask].settings.wrongText)) : (b.addClass("rightText"), b.html(task[data.currentTask].settings.rightText)), c.append(b)
}

function appendToContainer() {
    getContainer().append($(this))
}

function appendToField() {
    getContainer().find(".field:eq(0)").append($(this))
}

function reload() {
    task[0].softReload ? data.data[data.currentTask] = {} : (data.data = [], data.steps = [], data.currentTask = 1), getContainer().remove(), draw()
}

function getContainer() {
    var a;
    if (task[0].format && "vertical" == task[0].format) {
        if (document.getElementById("content" + data.currentTask)) return $("#content" + data.currentTask);
        a = $("<div></div>").attr("id", "content" + data.currentTask).addClass("taskArea"), a.css("top", parseInt($("#content" + (data.currentTask - 1)).css("top")) + parseInt($("#content" + (data.currentTask - 1)).css("height")) + "px"), $("body").append(a), $("html, body").animate({
            scrollTop: $("#content" + data.currentTask).offset().top
        }, 1e3), data.currentTask > 1 && a.css("border-top", "2px solid #c0c0c0")
    } else {
        if ($("#content0")[0]) return $("#content0");
        a = $("<div></div>").attr("id", "content0").addClass("taskArea"), $("body").append(a)
    }
    var b = $("<div></div>").addClass("header"),
        c = $("<div></div>").addClass("reload"),
        d = $("<div></div>").addClass("field"),
        e = $("<div></div>").addClass("footer");
    c.click(reload), b.append(c);
    var f = $("<div></div>").addClass("description"),
        g = $("<div></div>").addClass("stepTitle"),
        h = $("<div>" + data.currentTask + "</div>").addClass("stepNum");
    g.append(h), h = $("<div>&nbsp;</div>").addClass("stepTitleContent"), task[data.currentTask].settings && task[data.currentTask].settings.title && h.html(task[data.currentTask].settings.title), g.append(h), task[data.currentTask].settings && task[data.currentTask].settings.description && f.html(task[data.currentTask].settings.description), task[data.currentTask].settings && task[data.currentTask].settings.headerStyle && b.css(task[data.currentTask].settings.headerStyle), b.append("<h1>" + task[0].title + "</h1>"), b.append(f);
    var i;
    return task.length > 1 && task[0].showSteps && (i = $("<ul></ul>").addClass("steps")), a.append(b), i && a.append(i), a.append(d), a.append(e), d.css("height", $(window).height() - d.offset().top - 50 + "px"), task[data.currentTask].settings && task[data.currentTask].settings.title && a.append(g), a
}

function updateSteps() {
    steplist = getContainer().find(".steps:eq(0)"), steplist.html("");
    for (var a = task[0].finalScreen ? task.length - 1 : task.length, b = 1; b < a; b++) {
        var c = $("<li>" + b + "</li>");
        b > data.currentTask ? c.addClass("new-step") : b < data.currentTask && (data.steps[b] ? c.addClass("right-step") : c.addClass("wrong-step")), steplist.append(c)
    }
}

function enableButton() {}

function allElementsClick() {
    $(".help").remove(), help.enabled = !1
}

function setSize(a, b, c) {
    a.css(b, getSize(c) + "px")
}

function getSize(a) {
    return Math.round(a * getContainer().find(".field:eq(0)").width() / 1e3)
}! function(a, b) {
    function c(a) {
        return y.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
    }

    function d(a) {
        if (!Ua[a]) {
            var b = y("<" + a + ">").appendTo("body"),
                c = b.css("display");
            b.remove(), "none" !== c && "" !== c || (c = "block"), Ua[a] = c
        }
        return Ua[a]
    }

    function e(a, b) {
        var c = {};
        return y.each(Xa.concat.apply([], Xa.slice(0, b)), function() {
            c[this] = a
        }), c
    }

    function f(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d, e, f, g, h, i, j, k = a.dataTypes,
            l = a.converters,
            m = k.length,
            n = k[0];
        for (d = 1; d < m; d++)
            if (f = n, n = k[d], "*" === n) n = f;
            else if ("*" !== f && f !== n) {
            if (g = f + " " + n, h = l[g] || l["* " + n], !h) {
                j = b;
                for (i in l)
                    if (e = i.split(" "), (e[0] === f || "*" === e[0]) && (j = l[e[1] + " " + n])) {
                        i = l[i], i === !0 ? h = j : j === !0 && (h = i);
                        break
                    }
            }!h && !j && y.error("No conversion from " + g.replace(" ", " to ")), h !== !0 && (c = h ? h(c) : j(i(c)))
        }
        return c
    }

    function g(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (;
            "*" === j[0];) j.shift(), e === b && (e = c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        if (g) return g !== j[0] && j.unshift(g), d[g]
    }

    function h(a, b, c, d) {
        y.isArray(b) && b.length ? y.each(b, function(b, e) {
            c || xa.test(a) ? d(a, e) : h(a + "[" + ("object" == typeof e || y.isArray(e) ? b : "") + "]", e, c, d)
        }) : c || null == b || "object" != typeof b ? d(a, b) : y.isArray(b) || y.isEmptyObject(b) ? d(a, "") : y.each(b, function(b, e) {
            h(a + "[" + b + "]", e, c, d)
        })
    }

    function i(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, j = a[f], k = 0, l = j ? j.length : 0, m = a === La; k < l && (m || !h); k++) h = j[k](c, d, e), "string" == typeof h && (g[h] ? h = b : (c.dataTypes.unshift(h), h = i(a, c, d, e, h, g)));
        return (m || !h) && !g["*"] && (h = i(a, c, d, e, "*", g)), h
    }

    function j(a) {
        return function(b, c) {
            if ("string" != typeof b && (c = b, b = "*"), y.isFunction(c))
                for (var d, e, f, g = b.toLowerCase().split(Ha), h = 0, i = g.length; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function k(a, b, c) {
        var d = "width" === b ? ta : ua,
            e = "width" === b ? a.offsetWidth : a.offsetHeight;
        return "border" === c ? e : (y.each(d, function() {
            c || (e -= parseFloat(y.css(a, "padding" + this)) || 0), "margin" === c ? e += parseFloat(y.css(a, "margin" + this)) || 0 : e -= parseFloat(y.css(a, "border" + this + "Width")) || 0
        }), e)
    }

    function l(a, b) {
        b.src ? y.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : y.globalEval(b.text || b.textContent || b.innerHTML || ""), b.parentNode && b.parentNode.removeChild(b)
    }

    function m(a, b) {
        if (1 === b.nodeType) {
            var c = b.nodeName.toLowerCase();
            b.clearAttributes(), b.mergeAttributes(a), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(y.expando)
        }
    }

    function n(a, b) {
        if (1 === b.nodeType && y.hasData(a)) {
            var c = y.expando,
                d = y.data(a),
                e = y.data(b, d);
            if (d = d[c]) {
                var f = d.events;
                if (e = e[c] = y.extend({}, d), f) {
                    delete e.handle, e.events = {};
                    for (var g in f)
                        for (var h = 0, i = f[g].length; h < i; h++) y.event.add(b, g, f[g][h], f[g][h].data)
                }
            }
        }
    }

    function o(a, b) {
        return y.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function p(a, b, c) {
        if (y.isFunction(b)) return y.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return y.grep(a, function(a, d) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = y.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (Y.test(b)) return y.filter(b, d, !c);
            b = y.filter(b, d)
        }
        return y.grep(a, function(a, d) {
            return y.inArray(a, b) >= 0 === c
        })
    }

    function q(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function r(a, b) {
        return (a && "*" !== a ? a + "." : "") + b.replace(K, "`").replace(L, "&")
    }

    function s(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n = [],
            o = [],
            p = y._data(this, O);
        if ("function" == typeof p && (p = p.events), a.liveFired !== this && p && p.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
            a.namespace && (l = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
            var q = p.live.slice(0);
            for (h = 0; h < q.length; h++) f = q[h], f.origType.replace(I, "") === a.type ? o.push(f.selector) : q.splice(h--, 1);
            for (e = y(a.target).closest(o, a.currentTarget), i = 0, j = e.length; i < j; i++)
                for (k = e[i], h = 0; h < q.length; h++) f = q[h], k.selector !== f.selector || l && !l.test(f.namespace) || (g = k.elem, d = null, "mouseenter" !== f.preType && "mouseleave" !== f.preType || (a.type = f.preType, d = y(a.relatedTarget).closest(f.selector)[0]), (!d || d !== g) && n.push({
                    elem: g,
                    handleObj: f,
                    level: k.level
                }));
            for (i = 0, j = n.length; i < j && (e = n[i], !(c && e.level > c)) && (a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, m = e.handleObj.origHandler.apply(e.elem, arguments), m !== !1 && !a.isPropagationStopped() || (c = e.level, m === !1 && (b = !1), !a.isImmediatePropagationStopped())); i++);
            return b
        }
    }

    function t(a, b, c) {
        return c[0].type = a, y.event.handle.apply(b, c)
    }

    function u() {
        return !0
    }

    function v() {
        return !1
    }

    function w(a, c, d) {
        if (d === b && 1 === a.nodeType)
            if (d = a.getAttribute("data-" + c), "string" == typeof d) {
                try {
                    d = "true" === d || "false" !== d && ("null" === d ? null : y.isNaN(d) ? z.test(d) ? y.parseJSON(d) : d : parseFloat(d))
                } catch (a) {}
                y.data(a, c, d)
            } else d = b;
        return d
    }
    var x = a.document,
        y = function() {
            function c() {
                if (!h.isReady) {
                    try {
                        x.documentElement.doScroll("left")
                    } catch (a) {
                        return void setTimeout(c, 1)
                    }
                    h.ready()
                }
            }
            var d, e, f, g, h = function(a, b) {
                    return new h.fn.init(a, b, d)
                },
                i = a.jQuery,
                j = a.$,
                k = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
                l = /\S/,
                m = /^\s+/,
                n = /\s+$/,
                o = /\d/,
                p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                q = /^[\],:{}\s]*$/,
                r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                t = /(?:^|:|,)(?:\s*\[)+/g,
                u = /(webkit)[ \/]([\w.]+)/,
                v = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                w = /(msie) ([\w.]+)/,
                y = /(mozilla)(?:.*? rv:([\w.]+))?/,
                z = navigator.userAgent,
                A = !1,
                B = "then done fail isResolved isRejected promise".split(" "),
                C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            return h.fn = h.prototype = {
                constructor: h,
                init: function(a, c, d) {
                    var e, f, g, i;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && x.body) return this.context = x, this[0] = x.body, this.selector = "body", this.length = 1, this;
                    if ("string" == typeof a) {
                        if (e = k.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                        if (e[1]) return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : x, g = p.exec(a), g ? h.isPlainObject(c) ? (a = [x.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
                        if (f = x.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1, this[0] = f
                        }
                        return this.context = x, this.selector = a, this
                    }
                    return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
                },
                selector: "",
                jquery: "1.5",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return null == a ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    return h.isArray(a) ? E.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                },
                each: function(a, b) {
                    return h.each(this, a, b)
                },
                ready: function(a) {
                    return h.bindReady(), f.done(a), this
                },
                eq: function(a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(h.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function() {
                var a, c, d, e, f, g, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); j < k; j++)
                    if (null != (a = arguments[j]))
                        for (c in a) d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                return i
            }, h.extend({
                noConflict: function(b) {
                    return a.$ = j, b && (a.jQuery = i), h
                },
                isReady: !1,
                readyWait: 1,
                ready: function(a) {
                    if (a === !0 && h.readyWait--, !h.readyWait || a !== !0 && !h.isReady) {
                        if (!x.body) return setTimeout(h.ready, 1);
                        if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                        f.resolveWith(x, [h]), h.fn.trigger && h(x).trigger("ready").unbind("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        if (A = !0, "complete" === x.readyState) return setTimeout(h.ready, 1);
                        if (x.addEventListener) x.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                        else if (x.attachEvent) {
                            x.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                            var b = !1;
                            try {
                                b = null == a.frameElement
                            } catch (a) {}
                            x.documentElement.doScroll && b && c()
                        }
                    }
                },
                isFunction: function(a) {
                    return "function" === h.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === h.type(a)
                },
                isWindow: function(a) {
                    return a && "object" == typeof a && "setInterval" in a
                },
                isNaN: function(a) {
                    return null == a || !o.test(a) || isNaN(a)
                },
                type: function(a) {
                    return null == a ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                    var c;
                    for (c in a);
                    return c === b || D.call(a, c)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw a
                },
                parseJSON: function(b) {
                    return "string" == typeof b && b ? (b = h.trim(b), q.test(b.replace(r, "@").replace(s, "]").replace(t, "")) ? a.JSON && a.JSON.parse ? a.JSON.parse(b) : new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null
                },
                parseXML: function(b, c, d) {
                    return a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)), d = c.documentElement, (!d || !d.nodeName || "parsererror" === d.nodeName) && h.error("Invalid XML: " + b), c
                },
                noop: function() {},
                globalEval: function(a) {
                    if (a && l.test(a)) {
                        var b = x.getElementsByTagName("head")[0] || x.documentElement,
                            c = x.createElement("script");
                        c.type = "text/javascript", h.support.scriptEval() ? c.appendChild(x.createTextNode(a)) : c.text = a, b.insertBefore(c, b.firstChild), b.removeChild(c)
                    }
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        i = g === b || h.isFunction(a);
                    if (d)
                        if (i) {
                            for (e in a)
                                if (c.apply(a[e], d) === !1) break
                        } else
                            for (; f < g && c.apply(a[f++], d) !== !1;);
                    else if (i) {
                        for (e in a)
                            if (c.call(a[e], e, a[e]) === !1) break
                    } else
                        for (var j = a[0]; f < g && c.call(j, f, j) !== !1; j = a[++f]);
                    return a
                },
                trim: G ? function(a) {
                    return null == a ? "" : G.call(a)
                } : function(a) {
                    return null == a ? "" : (a + "").replace(m, "").replace(n, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (null != a) {
                        var d = h.type(a);
                        null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? E.call(c, a) : h.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b) {
                    if (b.indexOf) return b.indexOf(a);
                    for (var c = 0, d = b.length; c < d; c++)
                        if (b[c] === a) return c;
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if ("number" == typeof c.length)
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        for (; c[e] !== b;) a[d++] = c[e++];
                    return a.length = d, a
                },
                grep: function(a, b, c) {
                    var d, e = [];
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, b, c) {
                    for (var d, e = [], f = 0, g = a.length; f < g; f++) d = b(a[f], f, c), null != d && (e[e.length] = d);
                    return e.concat.apply([], e)
                },
                guid: 1,
                proxy: function(a, c, d) {
                    return 2 === arguments.length && ("string" == typeof c ? (d = a, a = d[c], c = b) : c && !h.isFunction(c) && (d = c, c = b)), !c && a && (c = function() {
                        return a.apply(d || this, arguments)
                    }), a && (c.guid = a.guid = a.guid || c.guid || h.guid++), c
                },
                access: function(a, c, d, e, f, g) {
                    var i = a.length;
                    if ("object" == typeof c) {
                        for (var j in c) h.access(a, j, c[j], e, f, d);
                        return a
                    }
                    if (d !== b) {
                        e = !g && e && h.isFunction(d);
                        for (var k = 0; k < i; k++) f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
                        return a
                    }
                    return i ? f(a[0], c) : b
                },
                now: function() {
                    return (new Date).getTime()
                },
                _Deferred: function() {
                    var a, b, c, d = [],
                        e = {
                            done: function() {
                                if (!c) {
                                    var b, f, g, i, j, k = arguments;
                                    for (a && (j = a, a = 0), b = 0, f = k.length; b < f; b++) g = k[b], i = h.type(g), "array" === i ? e.done.apply(e, g) : "function" === i && d.push(g);
                                    j && e.resolveWith(j[0], j[1])
                                }
                                return this
                            },
                            resolveWith: function(e, f) {
                                if (!c && !a && !b) {
                                    b = 1;
                                    try {
                                        for (; d[0];) d.shift().apply(e, f)
                                    } finally {
                                        a = [e, f], b = 0
                                    }
                                }
                                return this
                            },
                            resolve: function() {
                                return e.resolveWith(h.isFunction(this.promise) ? this.promise() : this, arguments), this
                            },
                            isResolved: function() {
                                return b || a
                            },
                            cancel: function() {
                                return c = 1, d = [], this
                            }
                        };
                    return e
                },
                Deferred: function(a) {
                    var b, c = h._Deferred(),
                        d = h._Deferred();
                    return h.extend(c, {
                        then: function(a, b) {
                            return c.done(a).fail(b), this
                        },
                        fail: d.done,
                        rejectWith: d.resolveWith,
                        reject: d.resolve,
                        isRejected: d.isResolved,
                        promise: function(a, d) {
                            if (null == a) {
                                if (b) return b;
                                b = a = {}
                            }
                            for (d = B.length; d--;) a[B[d]] = c[B[d]];
                            return a
                        }
                    }), c.then(d.cancel, c.cancel), delete c.cancel, a && a.call(c, c), c
                },
                when: function(a) {
                    var b, c = arguments,
                        d = c.length,
                        e = d <= 1 && a && h.isFunction(a.promise) ? a : h.Deferred(),
                        f = e.promise();
                    return d > 1 ? (b = Array(d), h.each(c, function(a, c) {
                        h.when(c).then(function(c) {
                            b[a] = arguments.length > 1 ? F.call(arguments, 0) : c, --d || e.resolveWith(f, b)
                        }, e.reject)
                    })) : e !== a && e.resolve(a), f
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = u.exec(a) || v.exec(a) || w.exec(a) || a.indexOf("compatible") < 0 && y.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.subclass = this.subclass, a.fn.init = function c(c, d) {
                        return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(x);
                    return a
                },
                browser: {}
            }), f = h._Deferred(), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), e = h.uaMatch(z), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), H && (h.inArray = function(a, b) {
                return H.call(b, a)
            }), l.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(x), x.addEventListener ? g = function() {
                x.removeEventListener("DOMContentLoaded", g, !1), h.ready()
            } : x.attachEvent && (g = function() {
                "complete" === x.readyState && (x.detachEvent("onreadystatechange", g), h.ready())
            }), a.jQuery = a.$ = h
        }();
    ! function() {
        y.support = {};
        var b = x.createElement("div");
        b.style.display = "none", b.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var c = b.getElementsByTagName("*"),
            d = b.getElementsByTagName("a")[0],
            e = x.createElement("select"),
            f = e.appendChild(x.createElement("option"));
        if (c && c.length && d) {
            y.support = {
                leadingWhitespace: 3 === b.firstChild.nodeType,
                tbody: !b.getElementsByTagName("tbody").length,
                htmlSerialize: !!b.getElementsByTagName("link").length,
                style: /red/.test(d.getAttribute("style")),
                hrefNormalized: "/a" === d.getAttribute("href"),
                opacity: /^0.55$/.test(d.style.opacity),
                cssFloat: !!d.style.cssFloat,
                checkOn: "on" === b.getElementsByTagName("input")[0].value,
                optSelected: f.selected,
                deleteExpando: !0,
                optDisabled: !1,
                checkClone: !1,
                _scriptEval: null,
                noCloneEvent: !0,
                boxModel: null,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableHiddenOffsets: !0
            }, e.disabled = !0, y.support.optDisabled = !f.disabled, y.support.scriptEval = function() {
                if (null === y.support._scriptEval) {
                    var b = x.documentElement,
                        c = x.createElement("script"),
                        d = "script" + y.now();
                    c.type = "text/javascript";
                    try {
                        c.appendChild(x.createTextNode("window." + d + "=1;"))
                    } catch (a) {}
                    b.insertBefore(c, b.firstChild), a[d] ? (y.support._scriptEval = !0, delete a[d]) : y.support._scriptEval = !1, b.removeChild(c), b = c = d = null
                }
                return y.support._scriptEval
            };
            try {
                delete b.test
            } catch (a) {
                y.support.deleteExpando = !1
            }
            b.attachEvent && b.fireEvent && (b.attachEvent("onclick", function a() {
                y.support.noCloneEvent = !1, b.detachEvent("onclick", a)
            }), b.cloneNode(!0).fireEvent("onclick")), b = x.createElement("div"), b.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            var g = x.createDocumentFragment();
            g.appendChild(b.firstChild), y.support.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, y(function() {
                var a = x.createElement("div"),
                    b = x.getElementsByTagName("body")[0];
                if (b) {
                    a.style.width = a.style.paddingLeft = "1px", b.appendChild(a), y.boxModel = y.support.boxModel = 2 === a.offsetWidth, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, y.support.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", y.support.shrinkWrapBlocks = 2 !== a.offsetWidth), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                    var c = a.getElementsByTagName("td");
                    y.support.reliableHiddenOffsets = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", y.support.reliableHiddenOffsets = y.support.reliableHiddenOffsets && 0 === c[0].offsetHeight, a.innerHTML = "", b.removeChild(a).style.display = "none", a = c = null
                }
            });
            var h = function(a) {
                var b = x.createElement("div");
                if (a = "on" + a, !b.attachEvent) return !0;
                var c = a in b;
                return c || (b.setAttribute(a, "return;"), c = "function" == typeof b[a]), b = null, c
            };
            y.support.submitBubbles = h("submit"), y.support.changeBubbles = h("change"), b = c = d = null
        }
    }();
    var z = /^(?:\{.*\}|\[.*\])$/;
    y.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (y.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? y.cache[a[y.expando]] : a[y.expando], !!a && !y.isEmptyObject(a)
        },
        data: function(a, c, d, e) {
            if (y.acceptData(a)) {
                var f, g = y.expando,
                    h = "string" == typeof c,
                    i = a.nodeType,
                    j = i ? y.cache : a,
                    k = i ? a[y.expando] : a[y.expando] && y.expando;
                if ((!k || e && k && !j[k][g]) && h && d === b) return;
                return k || (i ? a[y.expando] = k = ++y.uuid : k = y.expando), j[k] || (j[k] = {}), "object" == typeof c && (e ? j[k][g] = y.extend(j[k][g], c) : j[k] = y.extend(j[k], c)), f = j[k], e && (f[g] || (f[g] = {}), f = f[g]), d !== b && (f[c] = d), "events" !== c || f[c] ? h ? f[c] : f : f[g] && f[g].events
            }
        },
        removeData: function(b, c, d) {
            if (y.acceptData(b)) {
                var e = y.expando,
                    f = b.nodeType,
                    g = f ? y.cache : b,
                    h = f ? b[y.expando] : y.expando;
                if (!g[h]) return;
                if (c) {
                    var i = d ? g[h][e] : g[h];
                    if (i && (delete i[c], !y.isEmptyObject(i))) return
                }
                if (d && (delete g[h][e], !y.isEmptyObject(g[h]))) return;
                var j = g[h][e];
                y.support.deleteExpando || g != a ? delete g[h] : g[h] = null, j ? (g[h] = {}, g[h][e] = j) : f && (y.support.deleteExpando ? delete b[y.expando] : b.removeAttribute ? b.removeAttribute(y.expando) : b[y.expando] = null)
            }
        },
        _data: function(a, b, c) {
            return y.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = y.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), y.fn.extend({
        data: function(a, c) {
            var d = null;
            if ("undefined" == typeof a) {
                if (this.length && (d = y.data(this[0]), 1 === this[0].nodeType))
                    for (var e, f = this[0].attributes, g = 0, h = f.length; g < h; g++) e = f[g].name, 0 === e.indexOf("data-") && (e = e.substr(5), w(this[0], e, d[e]));
                return d
            }
            if ("object" == typeof a) return this.each(function() {
                y.data(this, a)
            });
            var i = a.split(".");
            return i[1] = i[1] ? "." + i[1] : "", c === b ? (d = this.triggerHandler("getData" + i[1] + "!", [i[0]]), d === b && this.length && (d = y.data(this[0], a), d = w(this[0], a, d)), d === b && i[1] ? this.data(i[0]) : d) : this.each(function() {
                var b = y(this),
                    d = [i[0], c];
                b.triggerHandler("setData" + i[1] + "!", d), y.data(this, a, c), b.triggerHandler("changeData" + i[1] + "!", d)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                y.removeData(this, a)
            })
        }
    }), y.extend({
        queue: function(a, b, c) {
            if (a) {
                b = (b || "fx") + "queue";
                var d = y._data(a, b);
                return c ? (!d || y.isArray(c) ? d = y._data(a, b, y.makeArray(c)) : d.push(c), d) : d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = y.queue(a, b),
                d = c.shift();
            "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), d.call(a, function() {
                y.dequeue(a, b)
            })), c.length || y.removeData(a, b + "queue", !0)
        }
    }), y.fn.extend({
        queue: function(a, c) {
            return "string" != typeof a && (c = a, a = "fx"), c === b ? y.queue(this[0], a) : this.each(function(b) {
                var d = y.queue(this, a, c);
                "fx" === a && "inprogress" !== d[0] && y.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                y.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = y.fx ? y.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function() {
                var c = this;
                setTimeout(function() {
                    y.dequeue(c, b)
                }, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var A = /[\n\t\r]/g,
        B = /\s+/,
        C = /\r/g,
        D = /^(?:href|src|style)$/,
        E = /^(?:button|input)$/i,
        F = /^(?:button|input|object|select|textarea)$/i,
        G = /^a(?:rea)?$/i,
        H = /^(?:radio|checkbox)$/i;
    y.props = {
        for: "htmlFor",
        class: "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    }, y.fn.extend({
        attr: function(a, b) {
            return y.access(this, a, b, !0, y.attr)
        },
        removeAttr: function(a, b) {
            return this.each(function() {
                y.attr(this, a, ""), 1 === this.nodeType && this.removeAttribute(a)
            })
        },
        addClass: function(a) {
            if (y.isFunction(a)) return this.each(function(b) {
                var c = y(this);
                c.addClass(a.call(this, b, c.attr("class")))
            });
            if (a && "string" == typeof a)
                for (var b = (a || "").split(B), c = 0, d = this.length; c < d; c++) {
                    var e = this[c];
                    if (1 === e.nodeType)
                        if (e.className) {
                            for (var f = " " + e.className + " ", g = e.className, h = 0, i = b.length; h < i; h++) f.indexOf(" " + b[h] + " ") < 0 && (g += " " + b[h]);
                            e.className = y.trim(g)
                        } else e.className = a
                }
            return this
        },
        removeClass: function(a) {
            if (y.isFunction(a)) return this.each(function(b) {
                var c = y(this);
                c.removeClass(a.call(this, b, c.attr("class")))
            });
            if (a && "string" == typeof a || a === b)
                for (var c = (a || "").split(B), d = 0, e = this.length; d < e; d++) {
                    var f = this[d];
                    if (1 === f.nodeType && f.className)
                        if (a) {
                            for (var g = (" " + f.className + " ").replace(A, " "), h = 0, i = c.length; h < i; h++) g = g.replace(" " + c[h] + " ", " ");
                            f.className = y.trim(g)
                        } else f.className = ""
                }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return y.isFunction(a) ? this.each(function(c) {
                var d = y(this);
                d.toggleClass(a.call(this, c, d.attr("class"), b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, g = y(this), h = b, i = a.split(B); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else "undefined" !== c && "boolean" !== c || (this.className && y._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : y._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                if ((" " + this[c].className + " ").replace(A, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            if (!arguments.length) {
                var c = this[0];
                if (c) {
                    if (y.nodeName(c, "option")) {
                        var d = c.attributes.value;
                        return !d || d.specified ? c.value : c.text
                    }
                    if (y.nodeName(c, "select")) {
                        var e = c.selectedIndex,
                            f = [],
                            g = c.options,
                            h = "select-one" === c.type;
                        if (e < 0) return null;
                        for (var i = h ? e : 0, j = h ? e + 1 : g.length; i < j; i++) {
                            var k = g[i];
                            if (k.selected && (y.support.optDisabled ? !k.disabled : null === k.getAttribute("disabled")) && (!k.parentNode.disabled || !y.nodeName(k.parentNode, "optgroup"))) {
                                if (a = y(k).val(), h) return a;
                                f.push(a)
                            }
                        }
                        return f
                    }
                    return H.test(c.type) && !y.support.checkOn ? null === c.getAttribute("value") ? "on" : c.value : (c.value || "").replace(C, "")
                }
                return b
            }
            var l = y.isFunction(a);
            return this.each(function(b) {
                var c = y(this),
                    d = a;
                if (1 === this.nodeType)
                    if (l && (d = a.call(this, b, c.val())), null == d ? d = "" : "number" == typeof d ? d += "" : y.isArray(d) && (d = y.map(d, function(a) {
                            return null == a ? "" : a + ""
                        })), y.isArray(d) && H.test(this.type)) this.checked = y.inArray(c.val(), d) >= 0;
                    else if (y.nodeName(this, "select")) {
                    var e = y.makeArray(d);
                    y("option", this).each(function() {
                        this.selected = y.inArray(y(this).val(), e) >= 0
                    }), e.length || (this.selectedIndex = -1)
                } else this.value = d
            })
        }
    }), y.extend({
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            if (!a || 3 === a.nodeType || 8 === a.nodeType || 2 === a.nodeType) return b;
            if (e && c in y.attrFn) return y(a)[c](d);
            var f = 1 !== a.nodeType || !y.isXMLDoc(a),
                g = d !== b;
            if (c = f && y.props[c] || c, 1 === a.nodeType) {
                var h = D.test(c);
                if ("selected" === c && !y.support.optSelected) {
                    var i = a.parentNode;
                    i && (i.selectedIndex, i.parentNode && i.parentNode.selectedIndex)
                }
                if ((c in a || a[c] !== b) && f && !h) {
                    if (g && ("type" === c && E.test(a.nodeName) && a.parentNode && y.error("type property can't be changed"), null === d ? 1 === a.nodeType && a.removeAttribute(c) : a[c] = d), y.nodeName(a, "form") && a.getAttributeNode(c)) return a.getAttributeNode(c).nodeValue;
                    if ("tabIndex" === c) {
                        var j = a.getAttributeNode("tabIndex");
                        return j && j.specified ? j.value : F.test(a.nodeName) || G.test(a.nodeName) && a.href ? 0 : b
                    }
                    return a[c]
                }
                if (!y.support.style && f && "style" === c) return g && (a.style.cssText = "" + d), a.style.cssText;
                if (g && a.setAttribute(c, "" + d), !a.attributes[c] && a.hasAttribute && !a.hasAttribute(c)) return b;
                var k = !y.support.hrefNormalized && f && h ? a.getAttribute(c, 2) : a.getAttribute(c);
                return null === k ? b : k
            }
            return g && (a[c] = d), a[c]
        }
    });
    var I = /\.(.*)$/,
        J = /^(?:textarea|input|select)$/i,
        K = /\./g,
        L = / /g,
        M = /[^\w\s.|`]/g,
        N = function(a) {
            return a.replace(M, "\\$&")
        },
        O = "events";
    y.event = {
        add: function(c, d, e, f) {
            if (3 !== c.nodeType && 8 !== c.nodeType) {
                if (y.isWindow(c) && c !== a && !c.frameElement && (c = a), e === !1) e = v;
                else if (!e) return;
                var g, h;
                e.handler && (g = e, e = g.handler), e.guid || (e.guid = y.guid++);
                var i = y._data(c);
                if (!i) return;
                var j = i[O],
                    k = i.handle;
                "function" == typeof j ? (k = j.handle, j = j.events) : j || (c.nodeType || (i[O] = i = function() {}), i.events = j = {}), k || (i.handle = k = function() {
                    return "undefined" == typeof y || y.event.triggered ? b : y.event.handle.apply(k.elem, arguments)
                }), k.elem = c, d = d.split(" ");
                for (var l, m, n = 0; l = d[n++];) {
                    h = g ? y.extend({}, g) : {
                        handler: e,
                        data: f
                    }, l.indexOf(".") > -1 ? (m = l.split("."), l = m.shift(), h.namespace = m.slice(0).sort().join(".")) : (m = [], h.namespace = ""), h.type = l, h.guid || (h.guid = e.guid);
                    var o = j[l],
                        p = y.event.special[l] || {};
                    o || (o = j[l] = [], p.setup && p.setup.call(c, f, m, k) !== !1 || (c.addEventListener ? c.addEventListener(l, k, !1) : c.attachEvent && c.attachEvent("on" + l, k))), p.add && (p.add.call(c, h), h.handler.guid || (h.handler.guid = e.guid)), o.push(h), y.event.global[l] = !0
                }
                c = null
            }
        },
        global: {},
        remove: function(a, c, d, e) {
            if (3 !== a.nodeType && 8 !== a.nodeType) {
                d === !1 && (d = v);
                var f, g, h, i, j, k, l, m, n, o, p = 0,
                    q = y.hasData(a) && y._data(a),
                    r = q && q[O];
                if (!q || !r) return;
                if ("function" == typeof r && (q = r, r = r.events), c && c.type && (d = c.handler, c = c.type), !c || "string" == typeof c && "." === c.charAt(0)) {
                    c = c || "";
                    for (g in r) y.event.remove(a, g + c);
                    return
                }
                for (c = c.split(" "); g = c[p++];)
                    if (o = g, n = null, i = g.indexOf(".") < 0, j = [], i || (j = g.split("."), g = j.shift(), k = new RegExp("(^|\\.)" + y.map(j.slice(0).sort(), N).join("\\.(?:.*\\.)?") + "(\\.|$)")), m = r[g], m)
                        if (d) {
                            for (l = y.event.special[g] || {}, h = e || 0; h < m.length && (n = m[h], d.guid !== n.guid || ((i || k.test(n.namespace)) && (null == e && m.splice(h--, 1), l.remove && l.remove.call(a, n)), null == e)); h++);
                            (0 === m.length || null != e && 1 === m.length) && ((!l.teardown || l.teardown.call(a, j) === !1) && y.removeEvent(a, g, q.handle), f = null, delete r[g])
                        } else
                            for (h = 0; h < m.length; h++) n = m[h], (i || k.test(n.namespace)) && (y.event.remove(a, o, n.handler, h), m.splice(h--, 1));
                if (y.isEmptyObject(r)) {
                    var s = q.handle;
                    s && (s.elem = null), delete q.events, delete q.handle, "function" == typeof q ? y.removeData(a, O, !0) : y.isEmptyObject(q) && y.removeData(a, b, !0)
                }
            }
        },
        trigger: function(a, c, d) {
            var e = a.type || a,
                f = arguments[3];
            if (!f) {
                if (a = "object" == typeof a ? a[y.expando] ? a : y.extend(y.Event(e), a) : y.Event(e), e.indexOf("!") >= 0 && (a.type = e = e.slice(0, -1), a.exclusive = !0), d || (a.stopPropagation(), y.event.global[e] && y.each(y.cache, function() {
                        var b = y.expando,
                            d = this[b];
                        d && d.events && d.events[e] && y.event.trigger(a, c, d.handle.elem)
                    })), !d || 3 === d.nodeType || 8 === d.nodeType) return b;
                a.result = b, a.target = d, c = y.makeArray(c), c.unshift(a)
            }
            a.currentTarget = d;
            var g = d.nodeType ? y._data(d, "handle") : (y._data(d, O) || {}).handle;
            g && g.apply(d, c);
            var h = d.parentNode || d.ownerDocument;
            try {
                d && d.nodeName && y.noData[d.nodeName.toLowerCase()] || d["on" + e] && d["on" + e].apply(d, c) === !1 && (a.result = !1, a.preventDefault())
            } catch (a) {}
            if (!a.isPropagationStopped() && h) y.event.trigger(a, c, h, !0);
            else if (!a.isDefaultPrevented()) {
                var i, j = a.target,
                    k = e.replace(I, ""),
                    l = y.nodeName(j, "a") && "click" === k,
                    m = y.event.special[k] || {};
                if (!(m._default && m._default.call(d, a) !== !1 || l || j && j.nodeName && y.noData[j.nodeName.toLowerCase()])) {
                    try {
                        j[k] && (i = j["on" + k], i && (j["on" + k] = null), y.event.triggered = !0, j[k]())
                    } catch (a) {}
                    i && (j["on" + k] = i), y.event.triggered = !1
                }
            }
        },
        handle: function(c) {
            var d, e, f, g, h, i = [],
                j = y.makeArray(arguments);
            if (c = j[0] = y.event.fix(c || a.event), c.currentTarget = this, d = c.type.indexOf(".") < 0 && !c.exclusive, d || (f = c.type.split("."), c.type = f.shift(), i = f.slice(0).sort(), g = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)")), c.namespace = c.namespace || i.join("."), h = y._data(this, O), "function" == typeof h && (h = h.events), e = (h || {})[c.type], h && e) {
                e = e.slice(0);
                for (var k = 0, l = e.length; k < l; k++) {
                    var m = e[k];
                    if (d || g.test(m.namespace)) {
                        c.handler = m.handler, c.data = m.data, c.handleObj = m;
                        var n = m.handler.apply(this, j);
                        if (n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation())), c.isImmediatePropagationStopped()) break
                    }
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[y.expando]) return a;
            var c = a;
            a = y.Event(c);
            for (var d, e = this.props.length; e;) d = this.props[--e], a[d] = c[d];
            if (a.target || (a.target = a.srcElement || x), 3 === a.target.nodeType && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement), null == a.pageX && null != a.clientX) {
                var f = x.documentElement,
                    g = x.body;
                a.pageX = a.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = a.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
            }
            return null == a.which && (null != a.charCode || null != a.keyCode) && (a.which = null != a.charCode ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = 1 & a.button ? 1 : 2 & a.button ? 3 : 4 & a.button ? 2 : 0), a
        },
        guid: 1e8,
        proxy: y.proxy,
        special: {
            ready: {
                setup: y.bindReady,
                teardown: y.noop
            },
            live: {
                add: function(a) {
                    y.event.add(this, r(a.origType, a.selector), y.extend({}, a, {
                        handler: s,
                        guid: a.handler.guid
                    }))
                },
                remove: function(a) {
                    y.event.remove(this, r(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function(a, b, c) {
                    y.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, y.removeEvent = x.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, y.Event = function(a) {
        return this.preventDefault ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? u : v) : this.type = a, this.timeStamp = y.now(), this[y.expando] = !0, void 0) : new y.Event(a)
    }, y.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = u;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = u;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        },
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v
    };
    var P = function(a) {
            var b = a.relatedTarget;
            try {
                for (; b && b !== this;) b = b.parentNode;
                b !== this && (a.type = a.data, y.event.handle.apply(this, arguments))
            } catch (a) {}
        },
        Q = function(a) {
            a.type = a.data, y.event.handle.apply(this, arguments)
        };
    if (y.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            y.event.special[a] = {
                setup: function(c) {
                    y.event.add(this, b, c && c.selector ? Q : P, a)
                },
                teardown: function(a) {
                    y.event.remove(this, b, a && a.selector ? Q : P)
                }
            }
        }), y.support.submitBubbles || (y.event.special.submit = {
            setup: function(a, c) {
                return !(!this.nodeName || "form" === this.nodeName.toLowerCase()) && (y.event.add(this, "click.specialSubmit", function(a) {
                    var c = a.target,
                        d = c.type;
                    if (("submit" === d || "image" === d) && y(c).closest("form").length) return a.liveFired = b, t("submit", this, arguments)
                }), void y.event.add(this, "keypress.specialSubmit", function(a) {
                    var c = a.target,
                        d = c.type;
                    if (("text" === d || "password" === d) && y(c).closest("form").length && 13 === a.keyCode) return a.liveFired = b, t("submit", this, arguments)
                }))
            },
            teardown: function(a) {
                y.event.remove(this, ".specialSubmit")
            }
        }), !y.support.changeBubbles) {
        var R, S = function(a) {
                var b = a.type,
                    c = a.value;
                return "radio" === b || "checkbox" === b ? c = a.checked : "select-multiple" === b ? c = a.selectedIndex > -1 ? y.map(a.options, function(a) {
                    return a.selected
                }).join("-") : "" : "select" === a.nodeName.toLowerCase() && (c = a.selectedIndex), c
            },
            T = function(a) {
                var c, d, e = a.target;
                if (J.test(e.nodeName) && !e.readOnly) {
                    if (c = y._data(e, "_change_data"), d = S(e), ("focusout" !== a.type || "radio" !== e.type) && y._data(e, "_change_data", d), c === b || d === c) return;
                    if (null != c || d) return a.type = "change", a.liveFired = b, y.event.trigger(a, arguments[1], e)
                }
            };
        y.event.special.change = {
            filters: {
                focusout: T,
                beforedeactivate: T,
                click: function(a) {
                    var b = a.target,
                        c = b.type;
                    if ("radio" === c || "checkbox" === c || "select" === b.nodeName.toLowerCase()) return T.call(this, a)
                },
                keydown: function(a) {
                    var b = a.target,
                        c = b.type;
                    if (13 === a.keyCode && "textarea" !== b.nodeName.toLowerCase() || 32 === a.keyCode && ("checkbox" === c || "radio" === c) || "select-multiple" === c) return T.call(this, a)
                },
                beforeactivate: function(a) {
                    var b = a.target;
                    y._data(b, "_change_data", S(b))
                }
            },
            setup: function(a, b) {
                if ("file" === this.type) return !1;
                for (var c in R) y.event.add(this, c + ".specialChange", R[c]);
                return J.test(this.nodeName)
            },
            teardown: function(a) {
                return y.event.remove(this, ".specialChange"), J.test(this.nodeName)
            }
        }, R = y.event.special.change.filters, R.focus = R.beforeactivate
    }
    x.addEventListener && y.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        function c(a) {
            return a = y.event.fix(a), a.type = b, y.event.handle.call(this, a)
        }
        y.event.special[b] = {
            setup: function() {
                this.addEventListener(a, c, !0)
            },
            teardown: function() {
                this.removeEventListener(a, c, !0)
            }
        }
    }), y.each(["bind", "one"], function(a, c) {
        y.fn[c] = function(a, d, e) {
            if ("object" == typeof a) {
                for (var f in a) this[c](f, d, a[f], e);
                return this
            }(y.isFunction(d) || d === !1) && (e = d, d = b);
            var g = "one" === c ? y.proxy(e, function(a) {
                return y(this).unbind(a, g), e.apply(this, arguments)
            }) : e;
            if ("unload" === a && "one" !== c) this.one(a, d, e);
            else
                for (var h = 0, i = this.length; h < i; h++) y.event.add(this[h], a, g, d);
            return this
        }
    }), y.fn.extend({
        unbind: function(a, b) {
            if ("object" != typeof a || a.preventDefault)
                for (var c = 0, d = this.length; c < d; c++) y.event.remove(this[c], a, b);
            else
                for (var e in a) this.unbind(e, a[e]);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.live(b, c, d, a)
        },
        undelegate: function(a, b, c) {
            return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a)
        },
        trigger: function(a, b) {
            return this.each(function() {
                y.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) {
                var c = y.Event(a);
                return c.preventDefault(), c.stopPropagation(), y.event.trigger(c, b, this[0]), c.result
            }
        },
        toggle: function(a) {
            for (var b = arguments, c = 1; c < b.length;) y.proxy(a, b[c++]);
            return this.click(y.proxy(a, function(d) {
                var e = (y._data(this, "lastToggle" + a.guid) || 0) % c;
                return y._data(this, "lastToggle" + a.guid, e + 1), d.preventDefault(), b[e].apply(this, arguments) || !1
            }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var U = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    y.each(["live", "die"], function(a, c) {
            y.fn[c] = function(a, d, e, f) {
                var g, h, i, j, k = 0,
                    l = f || this.selector,
                    m = f ? this : y(this.context);
                if ("object" == typeof a && !a.preventDefault) {
                    for (var n in a) m[c](n, d, a[n], l);
                    return this
                }
                for (y.isFunction(d) && (e = d, d = b), a = (a || "").split(" "); null != (g = a[k++]);)
                    if (h = I.exec(g), i = "", h && (i = h[0], g = g.replace(I, "")), "hover" !== g)
                        if (j = g, "focus" === g || "blur" === g ? (a.push(U[g] + i), g += i) : g = (U[g] || g) + i, "live" === c)
                            for (var o = 0, p = m.length; o < p; o++) y.event.add(m[o], "live." + r(g, l), {
                                data: d,
                                selector: l,
                                handler: e,
                                origType: g,
                                origHandler: e,
                                preType: j
                            });
                        else m.unbind("live." + r(g, l), e);
                else a.push("mouseenter" + i, "mouseleave" + i);
                return this
            }
        }), y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
            y.fn[b] = function(a, c) {
                return null == c && (c = a, a = null), arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
            }, y.attrFn && (y.attrFn[b] = !0)
        }),
        function() {
            function a(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; g < h; g++) {
                    var j = d[g];
                    if (j) {
                        var k = !1;
                        for (j = j[a]; j;) {
                            if (j.sizcache === c) {
                                k = d[j.sizset];
                                break
                            }
                            if (1 === j.nodeType)
                                if (f || (j.sizcache = c, j.sizset = g), "string" != typeof b) {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (i.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        d[g] = k
                    }
                }
            }

            function c(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; g < h; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        for (i = i[a]; i;) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (1 === i.nodeType && !f && (i.sizcache = c, i.sizset = g), i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }
            var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                e = 0,
                f = Object.prototype.toString,
                g = !1,
                h = !0;
            [0, 0].sort(function() {
                return h = !1, 0
            });
            var i = function(a, b, c, e) {
                c = c || [], b = b || x;
                var g = b;
                if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                if (!a || "string" != typeof a) return c;
                var h, l, m, o, p, r, s, t, u = !0,
                    v = i.isXML(b),
                    w = [],
                    y = a;
                do
                    if (d.exec(""), h = d.exec(y), h && (y = h[3], w.push(h[1]), h[2])) {
                        o = h[3];
                        break
                    }
                while (h);
                if (w.length > 1 && k.exec(a))
                    if (2 === w.length && j.relative[w[0]]) l = q(w[0] + w[1], b);
                    else
                        for (l = j.relative[w[0]] ? [b] : i(w.shift(), b); w.length;) a = w.shift(), j.relative[a] && (a += w.shift()), l = q(a, l);
                else if (!e && w.length > 1 && 9 === b.nodeType && !v && j.match.ID.test(w[0]) && !j.match.ID.test(w[w.length - 1]) && (p = i.find(w.shift(), b, v), b = p.expr ? i.filter(p.expr, p.set)[0] : p.set[0]), b)
                    for (p = e ? {
                            expr: w.pop(),
                            set: n(e)
                        } : i.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !b.parentNode ? b : b.parentNode, v), l = p.expr ? i.filter(p.expr, p.set) : p.set, w.length > 0 ? m = n(l) : u = !1; w.length;) r = w.pop(), s = r, j.relative[r] ? s = w.pop() : r = "", null == s && (s = b), j.relative[r](m, s, v);
                else m = w = [];
                if (m || (m = l), m || i.error(r || a), "[object Array]" === f.call(m))
                    if (u)
                        if (b && 1 === b.nodeType)
                            for (t = 0; null != m[t]; t++) m[t] && (m[t] === !0 || 1 === m[t].nodeType && i.contains(b, m[t])) && c.push(l[t]);
                        else
                            for (t = 0; null != m[t]; t++) m[t] && 1 === m[t].nodeType && c.push(l[t]);
                else c.push.apply(c, m);
                else n(m, c);
                return o && (i(o, g, c, e), i.uniqueSort(c)), c
            };
            i.uniqueSort = function(a) {
                if (o && (g = h, a.sort(o), g))
                    for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                return a
            }, i.matches = function(a, b) {
                return i(a, null, null, b)
            }, i.matchesSelector = function(a, b) {
                return i(b, null, null, [a]).length > 0
            }, i.find = function(a, b, c) {
                var d;
                if (!a) return [];
                for (var e = 0, f = j.order.length; e < f; e++) {
                    var g, h = j.order[e];
                    if (g = j.leftMatch[h].exec(a)) {
                        var i = g[1];
                        if (g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(/\\/g, ""), d = j.find[h](g, b, c), null != d)) {
                            a = a.replace(j.match[h], "");
                            break
                        }
                    }
                }
                return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
                    set: d,
                    expr: a
                }
            }, i.filter = function(a, c, d, e) {
                for (var f, g, h = a, k = [], l = c, m = c && c[0] && i.isXML(c[0]); a && c.length;) {
                    for (var n in j.filter)
                        if (null != (f = j.leftMatch[n].exec(a)) && f[2]) {
                            var o, p, q = j.filter[n],
                                r = f[1];
                            if (g = !1, f.splice(1, 1), "\\" === r.substr(r.length - 1)) continue;
                            if (l === k && (k = []), j.preFilter[n])
                                if (f = j.preFilter[n](f, l, d, k, e, m)) {
                                    if (f === !0) continue
                                } else g = o = !0;
                            if (f)
                                for (var s = 0; null != (p = l[s]); s++)
                                    if (p) {
                                        o = q(p, f, s, l);
                                        var t = e ^ !!o;
                                        d && null != o ? t ? g = !0 : l[s] = !1 : t && (k.push(p), g = !0)
                                    }
                            if (o !== b) {
                                if (d || (l = k), a = a.replace(j.match[n], ""), !g) return [];
                                break
                            }
                        }
                    if (a === h) {
                        if (null != g) break;
                        i.error(a)
                    }
                    h = a
                }
                return l
            }, i.error = function(a) {
                throw "Syntax error, unrecognized expression: " + a
            };
            var j = i.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        class: "className",
                        for: "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = "string" == typeof b,
                                d = c && !/\W/.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f, g = 0, h = a.length; g < h; g++)
                                if (f = a[g]) {
                                    for (;
                                        (f = f.previousSibling) && 1 !== f.nodeType;);
                                    a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                                }
                            e && i.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = "string" == typeof b,
                                e = 0,
                                f = a.length;
                            if (d && !/\W/.test(b)) {
                                for (b = b.toLowerCase(); e < f; e++)
                                    if (c = a[e]) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b && g
                                    }
                            } else {
                                for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && i.filter(b, a, !0)
                            }
                        },
                        "": function(b, d, f) {
                            var g, h = e++,
                                i = a;
                            "string" == typeof d && !/\W/.test(d) && (d = d.toLowerCase(), g = d, i = c), i("parentNode", d, h, b, g, f)
                        },
                        "~": function(b, d, f) {
                            var g, h = e++,
                                i = a;
                            "string" == typeof d && !/\W/.test(d) && (d = d.toLowerCase(), g = d, i = c), i("previousSibling", d, h, b, g, f)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if ("undefined" != typeof b.getElementById && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if ("undefined" != typeof b.getElementsByName) {
                                for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return 0 === c.length ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if ("undefined" != typeof b.getElementsByTagName) return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            if (a = " " + a[1].replace(/\\/g, "") + " ", f) return a;
                            for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(/\\/g, "")
                        },
                        TAG: function(a, b) {
                            return a[1].toLowerCase()
                        },
                        CHILD: function(a) {
                            if ("nth" === a[1]) {
                                a[2] || i.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && i.error(a[0]);
                            return a[0] = e++, a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(/\\/g, "");
                            return !f && j.attrMap[g] && (a[1] = j.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(/\\/g, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                        },
                        PSEUDO: function(a, b, c, e, f) {
                            if ("not" === a[1]) {
                                if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                    var g = i.filter(a[3], b, c, !0 ^ f);
                                    return c || e.push.apply(e, g), !1
                                }
                                a[3] = i(a[3], null, null, b)
                            } else if (j.match.POS.test(a[0]) || j.match.CHILD.test(a[0])) return !0;
                            return a
                        },
                        POS: function(a) {
                            return a.unshift(!0), a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && "hidden" !== a.type
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            return a.parentNode.selectedIndex, a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!i(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            return "text" === a.type
                        },
                        radio: function(a) {
                            return "radio" === a.type
                        },
                        checkbox: function(a) {
                            return "checkbox" === a.type
                        },
                        file: function(a) {
                            return "file" === a.type
                        },
                        password: function(a) {
                            return "password" === a.type
                        },
                        submit: function(a) {
                            return "submit" === a.type
                        },
                        image: function(a) {
                            return "image" === a.type
                        },
                        reset: function(a) {
                            return "reset" === a.type
                        },
                        button: function(a) {
                            return "button" === a.type || "button" === a.nodeName.toLowerCase()
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return 0 === b
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = j.filters[e];
                            if (f) return f(a, c, b, d);
                            if ("contains" === e) return (a.textContent || a.innerText || i.getText([a]) || "").indexOf(b[3]) >= 0;
                            if ("not" === e) {
                                for (var g = b[3], h = 0, k = g.length; h < k; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            i.error(e)
                        },
                        CHILD: function(a, b) {
                            var c = b[1],
                                d = a;
                            switch (c) {
                                case "only":
                                case "first":
                                    for (; d = d.previousSibling;)
                                        if (1 === d.nodeType) return !1;
                                    if ("first" === c) return !0;
                                    d = a;
                                case "last":
                                    for (; d = d.nextSibling;)
                                        if (1 === d.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    var e = b[2],
                                        f = b[3];
                                    if (1 === e && 0 === f) return !0;
                                    var g = b[0],
                                        h = a.parentNode;
                                    if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                        var i = 0;
                                        for (d = h.firstChild; d; d = d.nextSibling) 1 === d.nodeType && (d.nodeIndex = ++i);
                                        h.sizcache = g
                                    }
                                    var j = a.nodeIndex - f;
                                    return 0 === e ? 0 === j : j % e === 0 && j / e >= 0
                            }
                        },
                        ID: function(a, b) {
                            return 1 === a.nodeType && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = j.attrHandle[c] ? j.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return null == d ? "!=" === f : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f && (e === g || e.substr(0, g.length + 1) === g + "-") : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = j.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                k = j.match.POS,
                l = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var m in j.match) j.match[m] = new RegExp(j.match[m].source + /(?![^\[]*\])(?![^\(]*\))/.source), j.leftMatch[m] = new RegExp(/(^(?:.|\r|\n)*?)/.source + j.match[m].source.replace(/\\(\d+)/g, l));
            var n = function(a, b) {
                return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
            };
            try {
                Array.prototype.slice.call(x.documentElement.childNodes, 0)[0].nodeType
            } catch (a) {
                n = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if ("[object Array]" === f.call(a)) Array.prototype.push.apply(d, a);
                    else if ("number" == typeof a.length)
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var o, p;
            x.documentElement.compareDocumentPosition ? o = function(a, b) {
                    return a === b ? (g = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : (o = function(a, b) {
                    var c, d, e = [],
                        f = [],
                        h = a.parentNode,
                        i = b.parentNode,
                        j = h;
                    if (a === b) return g = !0, 0;
                    if (h === i) return p(a, b);
                    if (!h) return -1;
                    if (!i) return 1;
                    for (; j;) e.unshift(j), j = j.parentNode;
                    for (j = i; j;) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k]) return p(e[k], f[k]);
                    return k === c ? p(a, f[k], -1) : p(e[k], b, 1)
                }, p = function(a, b, c) {
                    if (a === b) return c;
                    for (var d = a.nextSibling; d;) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }), i.getText = function(a) {
                    for (var b, c = "", d = 0; a[d]; d++) b = a[d], 3 === b.nodeType || 4 === b.nodeType ? c += b.nodeValue : 8 !== b.nodeType && (c += i.getText(b.childNodes));
                    return c
                },
                function() {
                    var a = x.createElement("div"),
                        c = "script" + (new Date).getTime(),
                        d = x.documentElement;
                    a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), x.getElementById(c) && (j.find.ID = function(a, c, d) {
                        if ("undefined" != typeof c.getElementById && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, j.filter.ID = function(a, b) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return 1 === a.nodeType && c && c.nodeValue === b
                    }), d.removeChild(a), d = a = null
                }(),
                function() {
                    var a = x.createElement("div");
                    a.appendChild(x.createComment("")), a.getElementsByTagName("*").length > 0 && (j.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if ("*" === a[1]) {
                            for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (j.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), x.querySelectorAll && function() {
                    var a = i,
                        b = x.createElement("div"),
                        c = "__sizzle__";
                    if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                        i = function(b, d, e, f) {
                            if (d = d || x, !f && !i.isXML(d)) {
                                var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                                    if (g[1]) return n(d.getElementsByTagName(b), e);
                                    if (g[2] && j.find.CLASS && d.getElementsByClassName) return n(d.getElementsByClassName(g[2]), e)
                                }
                                if (9 === d.nodeType) {
                                    if ("body" === b && d.body) return n([d.body], e);
                                    if (g && g[3]) {
                                        var h = d.getElementById(g[3]);
                                        if (!h || !h.parentNode) return n([], e);
                                        if (h.id === g[3]) return n([h], e)
                                    }
                                    try {
                                        return n(d.querySelectorAll(b), e)
                                    } catch (a) {}
                                } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                                    var k = d.getAttribute("id"),
                                        l = k || c,
                                        m = d.parentNode,
                                        o = /^\s*[+~]/.test(b);
                                    k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), o && m && (d = d.parentNode);
                                    try {
                                        if (!o || m) return n(d.querySelectorAll("[id='" + l + "'] " + b), e)
                                    } catch (a) {} finally {
                                        k || d.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, d, e, f)
                        };
                        for (var d in a) i[d] = a[d];
                        b = null
                    }
                }(),
                function() {
                    var a = x.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector,
                        c = !1;
                    try {
                        b.call(x.documentElement, "[test!='']:sizzle")
                    } catch (a) {
                        c = !0
                    }
                    b && (i.matchesSelector = function(a, d) {
                        if (d = d.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !i.isXML(a)) try {
                            if (c || !j.match.PSEUDO.test(d) && !/!=/.test(d)) return b.call(a, d)
                        } catch (a) {}
                        return i(d, null, null, [a]).length > 0
                    })
                }(),
                function() {
                    var a = x.createElement("div");
                    if (a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length) {
                        if (a.lastChild.className = "e", 1 === a.getElementsByClassName("e").length) return;
                        j.order.splice(1, 0, "CLASS"), j.find.CLASS = function(a, b, c) {
                            if ("undefined" != typeof b.getElementsByClassName && !c) return b.getElementsByClassName(a[1])
                        }, a = null
                    }
                }(), x.documentElement.contains ? i.contains = function(a, b) {
                    return a !== b && (!a.contains || a.contains(b))
                } : x.documentElement.compareDocumentPosition ? i.contains = function(a, b) {
                    return !!(16 & a.compareDocumentPosition(b))
                } : i.contains = function() {
                    return !1
                }, i.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return !!b && "HTML" !== b.nodeName
                };
            var q = function(a, b) {
                for (var c, d = [], e = "", f = b.nodeType ? [b] : b; c = j.match.PSEUDO.exec(a);) e += c[0], a = a.replace(j.match.PSEUDO, "");
                a = j.relative[a] ? a + "*" : a;
                for (var g = 0, h = f.length; g < h; g++) i(a, f[g], d);
                return i.filter(e, d)
            };
            y.find = i, y.expr = i.selectors, y.expr[":"] = y.expr.filters, y.unique = i.uniqueSort, y.text = i.getText, y.isXMLDoc = i.isXML, y.contains = i.contains
        }();
    var V = /Until$/,
        W = /^(?:parents|prevUntil|prevAll)/,
        X = /,/,
        Y = /^.[^:#\[\.,]*$/,
        Z = Array.prototype.slice,
        $ = y.expr.match.POS,
        _ = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    y.fn.extend({
        find: function(a) {
            for (var b = this.pushStack("", "find", a), c = 0, d = 0, e = this.length; d < e; d++)
                if (c = b.length, y.find(a, this[d], b), d > 0)
                    for (var f = c; f < b.length; f++)
                        for (var g = 0; g < c; g++)
                            if (b[g] === b[f]) {
                                b.splice(f--, 1);
                                break
                            }
            return b
        },
        has: function(a) {
            var b = y(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++)
                    if (y.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(p(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(p(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && y.filter(a, this).length > 0
        },
        closest: function(a, b) {
            var c, d, e = [],
                f = this[0];
            if (y.isArray(a)) {
                var g, h, i = {},
                    j = 1;
                if (f && a.length) {
                    for (c = 0, d = a.length; c < d; c++) h = a[c], i[h] || (i[h] = y.expr.match.POS.test(h) ? y(h, b || this.context) : h);
                    for (; f && f.ownerDocument && f !== b;) {
                        for (h in i) g = i[h], (g.jquery ? g.index(f) > -1 : y(f).is(g)) && e.push({
                            selector: h,
                            elem: f,
                            level: j
                        });
                        f = f.parentNode, j++
                    }
                }
                return e
            }
            var k = $.test(a) ? y(a, b || this.context) : null;
            for (c = 0, d = this.length; c < d; c++)
                for (f = this[c]; f;) {
                    if (k ? k.index(f) > -1 : y.find.matchesSelector(f, a)) {
                        e.push(f);
                        break
                    }
                    if (f = f.parentNode, !f || !f.ownerDocument || f === b) break
                }
            return e = e.length > 1 ? y.unique(e) : e, this.pushStack(e, "closest", a)
        },
        index: function(a) {
            return a && "string" != typeof a ? y.inArray(a.jquery ? a[0] : a, this) : y.inArray(this[0], a ? y(a) : this.parent().children())
        },
        add: function(a, b) {
            var c = "string" == typeof a ? y(a, b) : y.makeArray(a),
                d = y.merge(this.get(), c);
            return this.pushStack(q(c[0]) || q(d[0]) ? d : y.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), y.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y.dir(a, "parentNode", c)
        },
        next: function(a) {
            return y.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return y.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return y.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return y.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return y.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return y.sibling(a.firstChild)
        },
        contents: function(a) {
            return y.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : y.makeArray(a.childNodes)
        }
    }, function(a, b) {
        y.fn[a] = function(c, d) {
            var e = y.map(this, b, c),
                f = Z.call(arguments);
            return V.test(a) || (d = c), d && "string" == typeof d && (e = y.filter(d, e)), e = this.length > 1 && !_[a] ? y.unique(e) : e, (this.length > 1 || X.test(d)) && W.test(a) && (e = e.reverse()), this.pushStack(e, a, f.join(","))
        }
    }), y.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? y.find.matchesSelector(b[0], a) ? [b[0]] : [] : y.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !y(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var aa = / jQuery\d+="(?:\d+|null)"/g,
        ba = /^\s+/,
        ca = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        da = /<([\w:]+)/,
        ea = /<tbody/i,
        fa = /<|&#?\w+;/,
        ga = /<(?:script|object|embed|option|style)/i,
        ha = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td, y.support.htmlSerialize || (ia._default = [1, "div<div>", "</div>"]), y.fn.extend({
        text: function(a) {
            return y.isFunction(a) ? this.each(function(b) {
                var c = y(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || x).createTextNode(a)) : y.text(this)
        },
        wrapAll: function(a) {
            if (y.isFunction(a)) return this.each(function(b) {
                y(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = y(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return y.isFunction(a) ? this.each(function(b) {
                y(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = y(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                y(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                y.nodeName(this, "body") || y(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = y(arguments[0]);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, y(arguments[0]).toArray()), a
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++) a && !y.filter(a, [c]).length || (!b && 1 === c.nodeType && (y.cleanData(c.getElementsByTagName("*")), y.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                for (1 === a.nodeType && y.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null == a || a, b = null == b ? a : b, this.map(function() {
                return y.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(aa, "") : null;
            if ("string" != typeof a || ga.test(a) || !y.support.leadingWhitespace && ba.test(a) || ia[(da.exec(a) || ["", ""])[1].toLowerCase()]) y.isFunction(a) ? this.each(function(b) {
                var c = y(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(ca, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) 1 === this[c].nodeType && (y.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (b) {
                    this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function(a) {
            return this[0] && this[0].parentNode ? y.isFunction(a) ? this.each(function(b) {
                var c = y(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = y(a).detach()), this.each(function() {
                var b = this.nextSibling,
                    c = this.parentNode;
                y(this).remove(), b ? y(b).before(a) : y(c).append(a)
            })) : this.pushStack(y(y.isFunction(a) ? a() : a), "replaceWith", a)
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, f, g, h, i = a[0],
                j = [];
            if (!y.support.checkClone && 3 === arguments.length && "string" == typeof i && ha.test(i)) return this.each(function() {
                y(this).domManip(a, c, d, !0)
            });
            if (y.isFunction(i)) return this.each(function(e) {
                var f = y(this);
                a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (h = i && i.parentNode, e = y.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                        fragment: h
                    } : y.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild, f) {
                    c = c && y.nodeName(f, "tr");
                    for (var k = 0, m = this.length, n = m - 1; k < m; k++) d.call(c ? o(this[k], f) : this[k], e.cacheable || m > 1 && k < n ? y.clone(g, !0, !0) : g)
                }
                j.length && y.each(j, l)
            }
            return this
        }
    }), y.buildFragment = function(a, b, c) {
        var d, e, f, g = b && b[0] ? b[0].ownerDocument || b[0] : x;
        return 1 === a.length && "string" == typeof a[0] && a[0].length < 512 && g === x && "<" === a[0].charAt(0) && !ga.test(a[0]) && (y.support.checkClone || !ha.test(a[0])) && (e = !0, f = y.fragments[a[0]], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), y.clean(a, g, d, c)), e && (y.fragments[a[0]] = f ? d : 1), {
            fragment: d,
            cacheable: e
        }
    }, y.fragments = {}, y.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        y.fn[a] = function(c) {
            var d = [],
                e = y(c),
                f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var g = 0, h = e.length; g < h; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                y(e[g])[b](i), d = d.concat(i)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), y.extend({
        clone: function(a, b, c) {
            var d, e, f, g = a.cloneNode(!0);
            if (!(y.support.noCloneEvent || 1 !== a.nodeType && 11 !== a.nodeType || y.isXMLDoc(a))) {
                for (d = a.getElementsByTagName("*"), e = g.getElementsByTagName("*"), f = 0; d[f]; ++f) m(d[f], e[f]);
                m(a, g)
            }
            if (b && (n(a, g), c && "getElementsByTagName" in a && (d = a.getElementsByTagName("*"), e = g.getElementsByTagName("*"), d.length)))
                for (f = 0; d[f]; ++f) n(d[f], e[f]);
            return g
        },
        clean: function(a, b, c, d) {
            b = b || x, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || x);
            for (var e, f = [], g = 0; null != (e = a[g]); g++)
                if ("number" == typeof e && (e += ""), e) {
                    if ("string" != typeof e || fa.test(e)) {
                        if ("string" == typeof e) {
                            e = e.replace(ca, "<$1></$2>");
                            var h = (da.exec(e) || ["", ""])[1].toLowerCase(),
                                i = ia[h] || ia._default,
                                j = i[0],
                                k = b.createElement("div");
                            for (k.innerHTML = i[1] + e + i[2]; j--;) k = k.lastChild;
                            if (!y.support.tbody)
                                for (var l = ea.test(e), m = "table" !== h || l ? "<table>" !== i[1] || l ? [] : k.childNodes : k.firstChild && k.firstChild.childNodes, n = m.length - 1; n >= 0; --n) y.nodeName(m[n], "tbody") && !m[n].childNodes.length && m[n].parentNode.removeChild(m[n]);
                            !y.support.leadingWhitespace && ba.test(e) && k.insertBefore(b.createTextNode(ba.exec(e)[0]), k.firstChild), e = k.childNodes
                        }
                    } else e = b.createTextNode(e);
                    e.nodeType ? f.push(e) : f = y.merge(f, e)
                }
            if (c)
                for (g = 0; f[g]; g++) !d || !y.nodeName(f[g], "script") || f[g].type && "text/javascript" !== f[g].type.toLowerCase() ? (1 === f[g].nodeType && f.splice.apply(f, [g + 1, 0].concat(y.makeArray(f[g].getElementsByTagName("script")))), c.appendChild(f[g])) : d.push(f[g].parentNode ? f[g].parentNode.removeChild(f[g]) : f[g]);
            return f
        },
        cleanData: function(a) {
            for (var b, c, d, e = y.cache, f = y.expando, g = y.event.special, h = y.support.deleteExpando, i = 0; null != (d = a[i]); i++)
                if ((!d.nodeName || !y.noData[d.nodeName.toLowerCase()]) && (c = d[y.expando])) {
                    if (b = e[c] && e[c][f], b && b.events) {
                        for (var j in b.events) g[j] ? y.event.remove(d, j) : y.removeEvent(d, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete d[y.expando] : d.removeAttribute && d.removeAttribute(y.expando), delete e[c]
                }
        }
    });
    var ja, ka, la, ma = /alpha\([^)]*\)/i,
        na = /opacity=([^)]*)/,
        oa = /-([a-z])/gi,
        pa = /([A-Z])/g,
        qa = /^-?\d+(?:px)?$/i,
        ra = /^-?\d/,
        sa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ta = ["Left", "Right"],
        ua = ["Top", "Bottom"],
        va = function(a, b) {
            return b.toUpperCase()
        };
    y.fn.css = function(a, c) {
        return 2 === arguments.length && c === b ? this : y.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? y.style(a, c, d) : y.css(a, c)
        })
    }, y.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = ja(a, "opacity", "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0
        },
        cssProps: {
            float: y.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g = y.camelCase(c),
                    h = a.style,
                    i = y.cssHooks[g];
                if (c = y.cssProps[g] || g, d === b) return i && "get" in i && (f = i.get(a, !1, e)) !== b ? f : h[c];
                if ("number" == typeof d && isNaN(d) || null == d) return;
                if ("number" == typeof d && !y.cssNumber[g] && (d += "px"), !(i && "set" in i && (d = i.set(a, d)) === b)) try {
                    h[c] = d
                } catch (a) {}
            }
        },
        css: function(a, c, d) {
            var e, f = y.camelCase(c),
                g = y.cssHooks[f];
            return c = y.cssProps[f] || f, g && "get" in g && (e = g.get(a, !0, d)) !== b ? e : ja ? ja(a, c, f) : void 0
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        },
        camelCase: function(a) {
            return a.replace(oa, va)
        }
    }), y.curCSS = y.css, y.each(["height", "width"], function(a, b) {
        y.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                if (c) return 0 !== a.offsetWidth ? e = k(a, b, d) : y.swap(a, sa, function() {
                    e = k(a, b, d)
                }), e <= 0 && (e = ja(a, b, b), "0px" === e && la && (e = la(a, b, b)), null != e) ? "" === e || "auto" === e ? "0px" : e : e < 0 || null == e ? (e = a.style[b], "" === e || "auto" === e ? "0px" : e) : "string" == typeof e ? e : e + "px"
            },
            set: function(a, b) {
                return qa.test(b) ? (b = parseFloat(b), b >= 0 ? b + "px" : void 0) : b
            }
        }
    }), y.support.opacity || (y.cssHooks.opacity = {
        get: function(a, b) {
            return na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style;
            c.zoom = 1;
            var d = y.isNaN(b) ? "" : "alpha(opacity=" + 100 * b + ")",
                e = c.filter || "";
            c.filter = ma.test(e) ? e.replace(ma, d) : c.filter + " " + d
        }
    }), x.defaultView && x.defaultView.getComputedStyle && (ka = function(a, c, d) {
        var e, f, g;
        return d = d.replace(pa, "-$1").toLowerCase(), (f = a.ownerDocument.defaultView) ? ((g = f.getComputedStyle(a, null)) && (e = g.getPropertyValue(d), "" === e && !y.contains(a.ownerDocument.documentElement, a) && (e = y.style(a, d))), e) : b
    }), x.documentElement.currentStyle && (la = function(a, b) {
        var c, d = a.currentStyle && a.currentStyle[b],
            e = a.runtimeStyle && a.runtimeStyle[b],
            f = a.style;
        return !qa.test(d) && ra.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e)), "" === d ? "auto" : d
    }), ja = ka || la, y.expr && y.expr.filters && (y.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return 0 === b && 0 === c || !y.support.reliableHiddenOffsets && "none" === (a.style.display || y.css(a, "display"))
    }, y.expr.filters.visible = function(a) {
        return !y.expr.filters.hidden(a)
    });
    var wa = /%20/g,
        xa = /\[\]$/,
        ya = /\r?\n/g,
        za = /#.*$/,
        Aa = /^(.*?):\s*(.*?)\r?$/gm,
        Ba = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ca = /^(?:GET|HEAD)$/,
        Da = /^\/\//,
        Ea = /\?/,
        Fa = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ga = /^(?:select|textarea)/i,
        Ha = /\s+/,
        Ia = /([?&])_=[^&]*/,
        Ja = /^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,
        Ka = y.fn.load,
        La = {},
        Ma = {};
    y.fn.extend({
        load: function(a, b, c) {
            if ("string" != typeof a && Ka) return Ka.apply(this, arguments);
            if (!this.length) return this;
            var d = a.indexOf(" ");
            if (d >= 0) {
                var e = a.slice(d, a.length);
                a = a.slice(0, d)
            }
            var f = "GET";
            b && (y.isFunction(b) ? (c = b, b = null) : "object" == typeof b && (b = y.param(b, y.ajaxSettings.traditional), f = "POST"));
            var g = this;
            return y.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b,
                complete: function(a, b, d) {
                    d = a.responseText, a.isResolved() && (a.done(function(a) {
                        d = a
                    }), g.html(e ? y("<div>").append(d.replace(Fa, "")).find(e) : d)), c && g.each(c, [d, b, a])
                }
            }), this
        },
        serialize: function() {
            return y.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? y.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Ga.test(this.nodeName) || Ba.test(this.type))
            }).map(function(a, b) {
                var c = y(this).val();
                return null == c ? null : y.isArray(c) ? y.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(ya, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ya, "\r\n")
                }
            }).get()
        }
    }), y.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        y.fn[b] = function(a) {
            return this.bind(b, a)
        }
    }), y.each(["get", "post"], function(a, b) {
        y[b] = function(a, c, d, e) {
            return y.isFunction(c) && (e = e || d, d = c, c = null), y.ajax({
                type: b,
                url: a,
                data: c,
                success: d,
                dataType: e
            })
        }
    }), y.extend({
        getScript: function(a, b) {
            return y.get(a, null, b, "script")
        },
        getJSON: function(a, b, c) {
            return y.get(a, b, c, "json")
        },
        ajaxSetup: function(a) {
            y.extend(!0, y.ajaxSettings, a), a.context && (y.ajaxSettings.context = a.context)
        },
        ajaxSettings: {
            url: location.href,
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": y.parseJSON,
                "text xml": y.parseXML
            }
        },
        ajaxPrefilter: j(La),
        ajaxTransport: j(Ma),
        ajax: function(a, c) {
            function d(a, c, d, h) {
                if (2 !== w) {
                    w = 2, k && clearTimeout(k), j = b, e = h || "", z.readyState = a ? 4 : 0;
                    var i, l, m, t, u, v = d ? g(n, z, d) : b;
                    if (a >= 200 && a < 300 || 304 === a)
                        if (n.ifModified && ((t = z.getResponseHeader("Last-Modified")) && (y.lastModified[n.url] = t), (u = z.getResponseHeader("Etag")) && (y.etag[n.url] = u)), 304 === a) c = "notmodified", i = !0;
                        else try {
                            l = f(n, v), c = "success", i = !0
                        } catch (a) {
                            c = "parsererror", m = a
                        } else m = c, a && (c = "error", a < 0 && (a = 0));
                    z.status = a, z.statusText = c, i ? q.resolveWith(o, [l, c, z]) : q.rejectWith(o, [z, c, m]), z.statusCode(s), s = b, n.global && p.trigger("ajax" + (i ? "Success" : "Error"), [z, n, i ? l : m]), r.resolveWith(o, [z, c]), n.global && (p.trigger("ajaxComplete", [z, n]), --y.active || y.event.trigger("ajaxStop"))
                }
            }
            "object" != typeof c && (c = a, a = b), c = c || {};
            var e, h, j, k, l, m, n = y.extend(!0, {}, y.ajaxSettings, c),
                o = (n.context = ("context" in c ? c : y.ajaxSettings).context) || n,
                p = o === n ? y.event : y(o),
                q = y.Deferred(),
                r = y._Deferred(),
                s = n.statusCode || {},
                t = {},
                u = x.location,
                v = u.protocol || "http:",
                w = 0,
                z = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        return 0 === w && (t[a.toLowerCase()] = b), this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? e : null
                    },
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === w) {
                            if (!h)
                                for (h = {}; b = Aa.exec(e);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return b || null
                    },
                    abort: function(a) {
                        return a = a || "abort", j && j.abort(a), d(0, a), this
                    }
                };
            if (q.promise(z), z.success = z.done, z.error = z.fail, z.complete = r.done, z.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (w < 2)
                            for (b in a) s[b] = [s[b], a[b]];
                        else b = a[z.status], z.then(b, b)
                    }
                    return this
                }, n.url = ("" + (a || n.url)).replace(za, "").replace(Da, v + "//"), n.dataTypes = y.trim(n.dataType || "*").toLowerCase().split(Ha), n.crossDomain || (l = Ja.exec(n.url.toLowerCase()), n.crossDomain = l && (l[1] != v || l[2] != u.hostname || (l[3] || ("http:" === l[1] ? 80 : 443)) != (u.port || ("http:" === v ? 80 : 443)))), n.data && n.processData && "string" != typeof n.data && (n.data = y.param(n.data, n.traditional)), i(La, n, c, z), n.type = n.type.toUpperCase(), n.hasContent = !Ca.test(n.type), n.global && 0 === y.active++ && y.event.trigger("ajaxStart"), !n.hasContent && (n.data && (n.url += (Ea.test(n.url) ? "&" : "?") + n.data), n.cache === !1)) {
                var A = y.now(),
                    B = n.url.replace(Ia, "$1_=" + A);
                n.url = B + (B === n.url ? (Ea.test(n.url) ? "&" : "?") + "_=" + A : "")
            }(n.data && n.hasContent && n.contentType !== !1 || c.contentType) && (t["content-type"] = n.contentType), n.ifModified && (y.lastModified[n.url] && (t["if-modified-since"] = y.lastModified[n.url]), y.etag[n.url] && (t["if-none-match"] = y.etag[n.url])), t.accept = n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", */*; q=0.01" : "") : n.accepts["*"];
            for (m in n.headers) t[m.toLowerCase()] = n.headers[m];
            if (!n.beforeSend || n.beforeSend.call(o, z, n) !== !1 && 2 !== w) {
                for (m in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) z[m](n[m]);
                if (j = i(Ma, n, c, z)) {
                    w = z.readyState = 1, n.global && p.trigger("ajaxSend", [z, n]), n.async && n.timeout > 0 && (k = setTimeout(function() {
                        z.abort("timeout")
                    }, n.timeout));
                    try {
                        j.send(t, d)
                    } catch (a) {
                        status < 2 ? d(-1, a) : y.error(a)
                    }
                } else d(-1, "No Transport")
            } else d(0, "abort"), z = !1;
            return z
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = y.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = y.ajaxSettings.traditional), y.isArray(a) || a.jquery) y.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var f in a) h(f, a[f], c, e);
            return d.join("&").replace(wa, "+")
        }
    }), y.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Na = y.now(),
        Oa = /(\=)\?(&|$)|()\?\?()/i;
    y.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return y.expando + "_" + Na++
        }
    }), y.ajaxPrefilter("json jsonp", function(b, c, d) {
        if (d = "string" == typeof b.data, "jsonp" === b.dataTypes[0] || c.jsonpCallback || null != c.jsonp || b.jsonp !== !1 && (Oa.test(b.url) || d && Oa.test(b.data))) {
            var e, f = b.jsonpCallback = y.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                g = a[f],
                h = b.url,
                i = b.data,
                j = "$1" + f + "$2";
            return b.jsonp !== !1 && (h = h.replace(Oa, j), b.url === h && (d && (i = i.replace(Oa, j)), b.data === i && (h += (/\?/.test(h) ? "&" : "?") + b.jsonp + "=" + f))), b.url = h, b.data = i, a[f] = function(a) {
                e = [a]
            }, b.complete = [function() {
                if (a[f] = g, g) e && y.isFunction(g) && a[f](e[0]);
                else try {
                    delete a[f]
                } catch (a) {}
            }, b.complete], b.converters["script json"] = function() {
                return e || y.error(f + " was not called"), e[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), y.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript"
        },
        contents: {
            script: /javascript/
        },
        converters: {
            "text script": function(a) {
                return y.globalEval(a), a
            }
        }
    }), y.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), y.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = x.getElementsByTagName("head")[0] || x.documentElement;
            return {
                send: function(e, f) {
                    c = x.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        c.readyState && !/loaded|complete/.test(c.readyState) || (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Pa, Qa, Ra = y.now(),
        Sa = {};
    y.ajaxSettings.xhr = a.ActiveXObject ? function() {
        if ("file:" !== a.location.protocol) try {
            return new a.XMLHttpRequest
        } catch (a) {}
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (a) {}
    } : function() {
        return new a.XMLHttpRequest
    };
    try {
        Qa = y.ajaxSettings.xhr()
    } catch (a) {}
    y.support.ajax = !!Qa, y.support.cors = Qa && "withCredentials" in Qa, Qa = b, y.support.ajax && y.ajaxTransport(function(b) {
        if (!b.crossDomain || y.support.cors) {
            var c;
            return {
                send: function(d, e) {
                    Pa || (Pa = 1, y(a).bind("unload", function() {
                        y.each(Sa, function(a, b) {
                            b.onreadystatechange && b.onreadystatechange(1)
                        })
                    }));
                    var f, g = b.xhr();
                    b.username ? g.open(b.type, b.url, b.async, b.username, b.password) : g.open(b.type, b.url, b.async), (!b.crossDomain || b.hasContent) && !d["x-requested-with"] && (d["x-requested-with"] = "XMLHttpRequest");
                    try {
                        y.each(d, function(a, b) {
                            g.setRequestHeader(a, b)
                        })
                    } catch (a) {}
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        if (c && (d || 4 === g.readyState))
                            if (c = 0, f && (g.onreadystatechange = y.noop, delete Sa[f]), d) 4 !== g.readyState && g.abort();
                            else {
                                var h, i = g.status,
                                    j = g.getAllResponseHeaders(),
                                    k = {},
                                    l = g.responseXML;
                                l && l.documentElement && (k.xml = l), k.text = g.responseText;
                                try {
                                    h = g.statusText
                                } catch (a) {
                                    h = ""
                                }
                                i = 0 === i ? !b.crossDomain || h ? j ? 304 : 0 : 302 : 1223 == i ? 204 : i, e(i, h, k, j)
                            }
                    }, b.async && 4 !== g.readyState ? (f = Ra++, Sa[f] = g, g.onreadystatechange = c) : c()
                },
                abort: function() {
                    c && c(0, 1)
                }
            }
        }
    });
    var Ta, Ua = {},
        Va = /^(?:toggle|show|hide)$/,
        Wa = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        Xa = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    y.fn.extend({
        show: function(a, b, c) {
            var f, g;
            if (a || 0 === a) return this.animate(e("show", 3), a, b, c);
            for (var h = 0, i = this.length; h < i; h++) f = this[h], g = f.style.display, !y._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), "" === g && "none" === y.css(f, "display") && y._data(f, "olddisplay", d(f.nodeName));
            for (h = 0; h < i; h++) f = this[h], g = f.style.display, "" !== g && "none" !== g || (f.style.display = y._data(f, "olddisplay") || "");
            return this
        },
        hide: function(a, b, c) {
            if (a || 0 === a) return this.animate(e("hide", 3), a, b, c);
            for (var d = 0, f = this.length; d < f; d++) {
                var g = y.css(this[d], "display");
                "none" !== g && !y._data(this[d], "olddisplay") && y._data(this[d], "olddisplay", g)
            }
            for (d = 0; d < f; d++) this[d].style.display = "none";
            return this
        },
        _toggle: y.fn.toggle,
        toggle: function(a, b, c) {
            var d = "boolean" == typeof a;
            return y.isFunction(a) && y.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a : y(this).is(":hidden");
                y(this)[b ? "show" : "hide"]()
            }) : this.animate(e("toggle", 3), a, b, c), this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, e) {
            var f = y.speed(b, c, e);
            return y.isEmptyObject(a) ? this.each(f.complete) : this[f.queue === !1 ? "each" : "queue"](function() {
                var b, c = y.extend({}, f),
                    e = 1 === this.nodeType,
                    g = e && y(this).is(":hidden"),
                    h = this;
                for (b in a) {
                    var i = y.camelCase(b);
                    if (b !== i && (a[i] = a[b], delete a[b], b = i), "hide" === a[b] && g || "show" === a[b] && !g) return c.complete.call(this);
                    if (e && ("height" === b || "width" === b) && (c.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === y.css(this, "display") && "none" === y.css(this, "float")))
                        if (y.support.inlineBlockNeedsLayout) {
                            var j = d(this.nodeName);
                            "inline" === j ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)
                        } else this.style.display = "inline-block";
                    y.isArray(a[b]) && ((c.specialEasing = c.specialEasing || {})[b] = a[b][1], a[b] = a[b][0])
                }
                return null != c.overflow && (this.style.overflow = "hidden"), c.curAnim = y.extend({}, a), y.each(a, function(b, d) {
                    var e = new y.fx(h, c, b);
                    if (Va.test(d)) e["toggle" === d ? g ? "show" : "hide" : d](a);
                    else {
                        var f = Wa.exec(d),
                            i = e.cur() || 0;
                        if (f) {
                            var j = parseFloat(f[2]),
                                k = f[3] || "px";
                            "px" !== k && (y.style(h, b, (j || 1) + k), i = (j || 1) / e.cur() * i, y.style(h, b, i + k)), f[1] && (j = ("-=" === f[1] ? -1 : 1) * j + i), e.custom(i, j, k)
                        } else e.custom(i, d, "")
                    }
                }), !0
            })
        },
        stop: function(a, b) {
            var c = y.timers;
            return a && this.queue([]), this.each(function() {
                for (var a = c.length - 1; a >= 0; a--) c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
            }), b || this.dequeue(), this
        }
    }), y.each({
        slideDown: e("show", 1),
        slideUp: e("hide", 1),
        slideToggle: e("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        y.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), y.extend({
        speed: function(a, b, c) {
            var d = a && "object" == typeof a ? y.extend({}, a) : {
                complete: c || !c && b || y.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !y.isFunction(b) && b
            };
            return d.duration = y.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in y.fx.speeds ? y.fx.speeds[d.duration] : y.fx.speeds._default, d.old = d.complete, d.complete = function() {
                d.queue !== !1 && y(this).dequeue(), y.isFunction(d.old) && d.old.call(this)
            }, d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig || (b.orig = {})
        }
    }), y.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (y.fx.step[this.prop] || y.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a = parseFloat(y.css(this.elem, this.prop));
            return a || 0
        },
        custom: function(a, b, c) {
            function d(a) {
                return e.step(a)
            }
            var e = this,
                f = y.fx;
            this.startTime = y.now(), this.start = a, this.end = b, this.unit = c || this.unit || "px", this.now = this.start, this.pos = this.state = 0, d.elem = this.elem, d() && y.timers.push(d) && !Ta && (Ta = setInterval(f.tick, f.interval))
        },
        show: function() {
            this.options.orig[this.prop] = y.style(this.elem, this.prop), this.options.show = !0, this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), y(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = y.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b = y.now(),
                c = !0;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
                for (var d in this.options.curAnim) this.options.curAnim[d] !== !0 && (c = !1);
                if (c) {
                    if (null != this.options.overflow && !y.support.shrinkWrapBlocks) {
                        var e = this.elem,
                            f = this.options;
                        y.each(["", "X", "Y"], function(a, b) {
                            e.style["overflow" + b] = f.overflow[a]
                        })
                    }
                    if (this.options.hide && y(this.elem).hide(), this.options.hide || this.options.show)
                        for (var g in this.options.curAnim) y.style(this.elem, g, this.options.orig[g]);
                    this.options.complete.call(this.elem)
                }
                return !1
            }
            var h = b - this.startTime;
            this.state = h / this.options.duration;
            var i = this.options.specialEasing && this.options.specialEasing[this.prop],
                j = this.options.easing || (y.easing.swing ? "swing" : "linear");
            return this.pos = y.easing[i || j](this.state, h, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
        }
    }, y.extend(y.fx, {
        tick: function() {
            for (var a = y.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || y.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(Ta), Ta = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                y.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), y.expr && y.expr.filters && (y.expr.filters.animated = function(a) {
        return y.grep(y.timers, function(b) {
            return a === b.elem
        }).length
    });
    var Ya = /^t(?:able|d|h)$/i,
        Za = /^(?:body|html)$/i;
    "getBoundingClientRect" in x.documentElement ? y.fn.offset = function(a) {
        var b, d = this[0];
        if (a) return this.each(function(b) {
            y.offset.setOffset(this, a, b)
        });
        if (!d || !d.ownerDocument) return null;
        if (d === d.ownerDocument.body) return y.offset.bodyOffset(d);
        try {
            b = d.getBoundingClientRect()
        } catch (a) {}
        var e = d.ownerDocument,
            f = e.documentElement;
        if (!b || !y.contains(f, d)) return b ? {
            top: b.top,
            left: b.left
        } : {
            top: 0,
            left: 0
        };
        var g = e.body,
            h = c(e),
            i = f.clientTop || g.clientTop || 0,
            j = f.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || y.support.boxModel && f.scrollTop || g.scrollTop,
            l = h.pageXOffset || y.support.boxModel && f.scrollLeft || g.scrollLeft,
            m = b.top + k - i,
            n = b.left + l - j;
        return {
            top: m,
            left: n
        }
    } : y.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            y.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return y.offset.bodyOffset(b);
        y.offset.initialize();
        for (var c, d = b.offsetParent, e = b, f = b.ownerDocument, g = f.documentElement, h = f.body, i = f.defaultView, j = i ? i.getComputedStyle(b, null) : b.currentStyle, k = b.offsetTop, l = b.offsetLeft;
            (b = b.parentNode) && b !== h && b !== g && (!y.offset.supportsFixedPosition || "fixed" !== j.position);) c = i ? i.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === d && (k += b.offsetTop, l += b.offsetLeft, y.offset.doesNotAddBorder && (!y.offset.doesAddBorderForTableAndCells || !Ya.test(b.nodeName)) && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), y.offset.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), j = c;
        return "relative" !== j.position && "static" !== j.position || (k += h.offsetTop, l += h.offsetLeft), y.offset.supportsFixedPosition && "fixed" === j.position && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)), {
            top: k,
            left: l
        }
    }, y.offset = {
        initialize: function() {
            var a, b, c, d, e = x.body,
                f = x.createElement("div"),
                g = parseFloat(y.css(e, "marginTop")) || 0,
                h = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            y.extend(f.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), f.innerHTML = h, e.insertBefore(f, e.firstChild), a = f.firstChild, b = a.firstChild, d = a.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== b.offsetTop, this.doesAddBorderForTableAndCells = 5 === d.offsetTop, b.style.position = "fixed", b.style.top = "20px", this.supportsFixedPosition = 20 === b.offsetTop || 15 === b.offsetTop, b.style.position = b.style.top = "", a.style.overflow = "hidden", a.style.position = "relative", this.subtractsBorderForOverflowNotVisible = b.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = e.offsetTop !== g, e.removeChild(f), e = f = a = b = c = d = null, y.offset.initialize = y.noop
        },
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return y.offset.initialize(), y.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(y.css(a, "marginTop")) || 0, c += parseFloat(y.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = y.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = y(a),
                h = g.offset(),
                i = y.css(a, "top"),
                j = y.css(a, "left"),
                k = "absolute" === d && y.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k && (m = g.position()), e = k ? m.top : parseInt(i, 10) || 0, f = k ? m.left : parseInt(j, 10) || 0, y.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, y.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = Za.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(y.css(a, "marginTop")) || 0, c.left -= parseFloat(y.css(a, "marginLeft")) || 0, d.top += parseFloat(y.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(y.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || x.body; a && !Za.test(a.nodeName) && "static" === y.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }), y.each(["Left", "Top"], function(a, d) {
        var e = "scroll" + d;
        y.fn[e] = function(d) {
            var f, g = this[0];
            return g ? d !== b ? this.each(function() {
                f = c(this), f ? f.scrollTo(a ? y(f).scrollLeft() : d, a ? d : y(f).scrollTop()) : this[e] = d
            }) : (f = c(g), f ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : y.support.boxModel && f.document.documentElement[e] || f.document.body[e] : g[e]) : null
        }
    }), y.each(["Height", "Width"], function(a, c) {
        var d = c.toLowerCase();
        y.fn["inner" + c] = function() {
            return this[0] ? parseFloat(y.css(this[0], d, "padding")) : null
        }, y.fn["outer" + c] = function(a) {
            return this[0] ? parseFloat(y.css(this[0], d, a ? "margin" : "border")) : null
        }, y.fn[d] = function(a) {
            var e = this[0];
            if (!e) return null == a ? null : this;
            if (y.isFunction(a)) return this.each(function(b) {
                var c = y(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (y.isWindow(e)) {
                var f = e.document.documentElement["client" + c];
                return "CSS1Compat" === e.document.compatMode && f || e.document.body["client" + c] || f
            }
            if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var g = y.css(e, d),
                    h = parseFloat(g);
                return y.isNaN(h) ? g : h
            }
            return this.css(d, "string" == typeof a ? a : a + "px")
        }
    })
}(window),
function(a, b) {
    function c(b) {
        return !a(b).parents().andSelf().filter(function() {
            return "hidden" === a.curCSS(this, "visibility") || a.expr.filters.hidden(this)
        }).length
    }
    a.ui = a.ui || {}, a.ui.version || (a.extend(a.ui, {
        version: "1.8.9",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), a.fn.extend({
        _focus: a.fn.focus,
        focus: function(b, c) {
            return "number" == typeof b ? this.each(function() {
                var d = this;
                setTimeout(function() {
                    a(d).focus(), c && c.call(d)
                }, b)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var b;
            return b = a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
        },
        zIndex: function(c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) {
                c = a(this[0]);
                for (var d; c.length && c[0] !== document;) {
                    if (d = c.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (d = parseInt(c.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    c = c.parent()
                }
            }
            return 0
        },
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), a.each(["Width", "Height"], function(c, d) {
        function e(b, c, d, e) {
            return a.each(f, function() {
                c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), e && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
            }), c
        }
        var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
            g = d.toLowerCase(),
            h = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + d] = function(c) {
            return c === b ? h["inner" + d].call(this) : this.each(function() {
                a(this).css(g, e(this, c) + "px")
            })
        }, a.fn["outer" + d] = function(b, c) {
            return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function() {
                a(this).css(g, e(this, b, !0, c) + "px")
            })
        }
    }), a.extend(a.expr[":"], {
        data: function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(b) {
            var d = b.nodeName.toLowerCase(),
                e = a.attr(b, "tabindex");
            return "area" === d ? (d = b.parentNode, e = d.name, !(!b.href || !e || "map" !== d.nodeName.toLowerCase()) && (b = a("img[usemap=#" + e + "]")[0], !!b && c(b))) : (/input|select|textarea|button|object/.test(d) ? !b.disabled : "a" == d ? b.href || !isNaN(e) : !isNaN(e)) && c(b)
        },
        tabbable: function(b) {
            var c = a.attr(b, "tabindex");
            return (isNaN(c) || c >= 0) && a(b).is(":focusable")
        }
    }), a(function() {
        var b = document.body,
            c = b.appendChild(c = document.createElement("div"));
        a.extend(c.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), a.support.minHeight = 100 === c.offsetHeight, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
    }), a.extend(a.ui, {
        plugin: {
            add: function(b, c, d) {
                b = a.ui[b].prototype;
                for (var e in d) b.plugins[e] = b.plugins[e] || [], b.plugins[e].push([c, d[e]])
            },
            call: function(a, b, c) {
                if ((b = a.plugins[b]) && a.element[0].parentNode)
                    for (var d = 0; d < b.length; d++) a.options[b[d][0]] && b[d][1].apply(a.element, c)
            }
        },
        contains: function(a, b) {
            return document.compareDocumentPosition ? 16 & a.compareDocumentPosition(b) : a !== b && a.contains(b)
        },
        hasScroll: function(b, c) {
            if ("hidden" === a(b).css("overflow")) return !1;
            c = c && "left" === c ? "scrollLeft" : "scrollTop";
            var d = !1;
            return b[c] > 0 || (b[c] = 1, d = b[c] > 0, b[c] = 0, d)
        },
        isOverAxis: function(a, b, c) {
            return a > b && a < b + c
        },
        isOver: function(b, c, d, e, f, g) {
            return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
        }
    }))
}(jQuery),
function(a, b) {
    if (a.cleanData) {
        var c = a.cleanData;
        a.cleanData = function(b) {
            for (var d, e = 0; null != (d = b[e]); e++) a(d).triggerHandler("remove");
            c(b)
        }
    } else {
        var d = a.fn.remove;
        a.fn.remove = function(b, c) {
            return this.each(function() {
                return c || b && !a.filter(b, [this]).length || a("*", this).add([this]).each(function() {
                    a(this).triggerHandler("remove")
                }), d.call(a(this), b, c)
            })
        }
    }
    a.widget = function(b, c, d) {
        var e, f = b.split(".")[0];
        b = b.split(".")[1], e = f + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e] = function(c) {
            return !!a.data(c, b)
        }, a[f] = a[f] || {}, a[f][b] = function(a, b) {
            arguments.length && this._createWidget(a, b)
        }, c = new c, c.options = a.extend(!0, {}, c.options), a[f][b].prototype = a.extend(!0, c, {
            namespace: f,
            widgetName: b,
            widgetEventPrefix: a[f][b].prototype.widgetEventPrefix || b,
            widgetBaseClass: e
        }, d), a.widget.bridge(b, a[f][b])
    }, a.widget.bridge = function(c, d) {
        a.fn[c] = function(e) {
            var f = "string" == typeof e,
                g = Array.prototype.slice.call(arguments, 1),
                h = this;
            return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && "_" === e.charAt(0) ? h : (f ? this.each(function() {
                var d = a.data(this, c),
                    f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
                if (f !== d && f !== b) return h = f, !1
            }) : this.each(function() {
                var b = a.data(this, c);
                b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
            }), h)
        }
    }, a.Widget = function(a, b) {
        arguments.length && this._createWidget(a, b)
    }, a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(b, c) {
            a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
            var d = this;
            this.element.bind("remove." + this.widgetName, function() {
                d.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(c, d) {
            var e = c;
            if (0 === arguments.length) return a.extend({}, this.options);
            if ("string" == typeof c) {
                if (d === b) return this.options[c];
                e = {}, e[c] = d
            }
            return this._setOptions(e), this
        },
        _setOptions: function(b) {
            var c = this;
            return a.each(b, function(a, b) {
                c._setOption(a, b)
            }), this
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", b), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(b, c, d) {
            var e = this.options[b];
            if (c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), d = d || {}, c.originalEvent) {
                b = a.event.props.length;
                for (var f; b;) f = a.event.props[--b], c[f] = c.originalEvent[f]
            }
            return this.element.trigger(c, d), !(a.isFunction(e) && e.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
        }
    }
}(jQuery),
function(a) {
    a.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function(b) {
            if (b.originalEvent = b.originalEvent || {}, !b.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                var c = this,
                    d = 1 == b.which,
                    e = "string" == typeof this.options.cancel && a(b.target).parents().add(b.target).filter(this.options.cancel).length;
                return !(d && !e && this._mouseCapture(b)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (this._mouseMoveDelegate = function(a) {
                    return c._mouseMove(a)
                }, this._mouseUpDelegate = function(a) {
                    return c._mouseUp(a)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), b.originalEvent.mouseHandled = !0))
            }
        },
        _mouseMove: function(b) {
            return !a.browser.msie || document.documentMode >= 9 || b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1) ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b)
        },
        _mouseUp: function(b) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery),
function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function(b) {
            var c = this.options;
            return !(this.helper || c.disabled || a(b.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(b), !!this.handle)
        },
        _mouseStart: function(b) {
            var c = this.options;
            return this.helper = this._createHelper(b), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, a.extend(this.offset, {
                click: {
                    left: b.pageX - this.offset.left,
                    top: b.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(b, !0), !0)
        },
        _mouseDrag: function(b, c) {
            if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                if (c = this._uiHash(), this._trigger("drag", b, c) === !1) return this._mouseUp({}), !1;
                this.position = c.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        },
        _mouseStop: function(b) {
            var c = !1;
            if (a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1), !(this.element[0] && this.element[0].parentNode || "original" != this.options.helper)) return !1;
            if ("invalid" == this.options.revert && !c || "valid" == this.options.revert && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) {
                var d = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    d._trigger("stop", b) !== !1 && d._clear()
                })
            } else this._trigger("stop", b) !== !1 && this._clear();
            return !1
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(b) {
            var c = !this.options.handle || !a(this.options.handle, this.element).length;
            return a(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == b.target && (c = !0)
            }), c
        },
        _createHelper: function(b) {
            var c = this.options;
            return b = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" == c.helper ? this.element.clone() : this.element, b.parents("body").length || b.appendTo("parent" == c.appendTo ? this.element[0].parentNode : c.appendTo), b[0] != this.element[0] && !/(fixed|absolute)/.test(b.css("position")) && b.css("position", "absolute"), b
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && a.browser.msie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b = this.options;
            if ("parent" == b.containment && (b.containment = this.helper[0].parentNode), "document" != b.containment && "window" != b.containment || (this.containment = [("document" == b.containment ? 0 : a(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, ("document" == b.containment ? 0 : a(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, ("document" == b.containment ? 0 : a(window).scrollLeft()) + a("document" == b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == b.containment ? 0 : a(window).scrollTop()) + (a("document" == b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(b.containment) || b.containment.constructor == Array) b.containment.constructor == Array && (this.containment = b.containment);
            else {
                var c = a(b.containment)[0];
                if (c) {
                    b = a(b.containment).offset();
                    var d = "hidden" != a(c).css("overflow");
                    this.containment = [b.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, b.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, b.left + (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, b.top + (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                }
            }
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position), b = "absolute" == b ? 1 : -1;
            var d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                e = /(html|body)/i.test(d[0].tagName);
            return {
                top: c.top + this.offset.relative.top * b + this.offset.parent.top * b - (a.browser.safari && a.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()) * b),
                left: c.left + this.offset.relative.left * b + this.offset.parent.left * b - (a.browser.safari && a.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft()) * b)
            }
        },
        _generatePosition: function(b) {
            var c = this.options,
                d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                e = /(html|body)/i.test(d[0].tagName),
                f = b.pageX,
                g = b.pageY;
            return this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), c.grid && (g = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1], g = this.containment && (g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g - this.offset.click.top < this.containment[1] ? g + c.grid[1] : g - c.grid[1] : g, f = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0], f = this.containment && (f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f - this.offset.click.left < this.containment[0] ? f + c.grid[0] : f - c.grid[0] : f)), {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(b, c, d) {
            return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" == b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.extend(a.ui.draggable, {
        version: "1.8.9"
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(b, c) {
            var d = a(this).data("draggable"),
                e = d.options,
                f = a.extend({}, c, {
                    item: d.element
                });
            d.sortables = [], a(e.connectToSortable).each(function() {
                var c = a.data(this, "sortable");
                c && !c.options.disabled && (d.sortables.push({
                    instance: c,
                    shouldRevert: c.options.revert
                }), c._refreshItems(), c._trigger("activate", b, f))
            })
        },
        stop: function(b, c) {
            var d = a(this).data("draggable"),
                e = a.extend({}, c, {
                    item: d.element
                });
            a.each(d.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" == d.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
            })
        },
        drag: function(b, c) {
            var d = a(this).data("draggable"),
                e = this;
            a.each(d.sortables, function() {
                this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return c.helper[0]
                }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var b = a("body"),
                c = a(this).data("draggable").options;
            b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
        },
        stop: function() {
            var b = a(this).data("draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }), a.ui.plugin.add("draggable", "iframeFix", {
        start: function() {
            var b = a(this).data("draggable").options;
            a(b.iframeFix === !0 ? "iframe" : b.iframeFix).each(function() {
                a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(a(this).offset()).appendTo("body")
            })
        },
        stop: function() {
            a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            })
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(b, c) {
            b = a(c.helper), c = a(this).data("draggable").options, b.css("opacity") && (c._opacity = b.css("opacity")), b.css("opacity", c.opacity)
        },
        stop: function(b, c) {
            b = a(this).data("draggable").options, b._opacity && a(c.helper).css("opacity", b._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var b = a(this).data("draggable");
            b.scrollParent[0] != document && "HTML" != b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
        },
        drag: function(b) {
            var c = a(this).data("draggable"),
                d = c.options,
                e = !1;
            c.scrollParent[0] != document && "HTML" != c.scrollParent[0].tagName ? (d.axis && "x" == d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" == d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" == d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" == d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var b = a(this).data("draggable"),
                c = b.options;
            b.snapElements = [], a(c.snap.constructor != String ? c.snap.items || ":data(draggable)" : c.snap).each(function() {
                var c = a(this),
                    d = c.offset();
                this != b.element[0] && b.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: d.top,
                    left: d.left
                })
            })
        },
        drag: function(b, c) {
            for (var d = a(this).data("draggable"), e = d.options, f = e.snapTolerance, g = c.offset.left, h = g + d.helperProportions.width, i = c.offset.top, j = i + d.helperProportions.height, k = d.snapElements.length - 1; k >= 0; k--) {
                var l = d.snapElements[k].left,
                    m = l + d.snapElements[k].width,
                    n = d.snapElements[k].top,
                    o = n + d.snapElements[k].height;
                if (l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f) {
                    if ("inner" != e.snapMode) {
                        var p = Math.abs(n - j) <= f,
                            q = Math.abs(o - i) <= f,
                            r = Math.abs(l - h) <= f,
                            s = Math.abs(m - g) <= f;
                        p && (c.position.top = d._convertPositionTo("relative", {
                            top: n - d.helperProportions.height,
                            left: 0
                        }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                            top: o,
                            left: 0
                        }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: l - d.helperProportions.width
                        }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                            top: 0,
                            left: m
                        }).left - d.margins.left)
                    }
                    var t = p || q || r || s;
                    "outer" != e.snapMode && (p = Math.abs(n - i) <= f, q = Math.abs(o - j) <= f, r = Math.abs(l - g) <= f, s = Math.abs(m - h) <= f, p && (c.position.top = d._convertPositionTo("relative", {
                        top: n,
                        left: 0
                    }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", {
                        top: o - d.helperProportions.height,
                        left: 0
                    }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: l
                    }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", {
                        top: 0,
                        left: m - d.helperProportions.width
                    }).left - d.margins.left)), !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {
                        snapItem: d.snapElements[k].item
                    })), d.snapElements[k].snapping = p || q || r || s || t
                } else d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {
                    snapItem: d.snapElements[k].item
                })), d.snapElements[k].snapping = !1
            }
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var b = a(this).data("draggable").options;
            if (b = a.makeArray(a(b.stack)).sort(function(b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                }), b.length) {
                var c = parseInt(b[0].style.zIndex) || 0;
                a(b).each(function(a) {
                    this.style.zIndex = c + a
                }), this[0].style.zIndex = c + b.length
            }
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(b, c) {
            b = a(c.helper), c = a(this).data("draggable").options, b.css("zIndex") && (c._zIndex = b.css("zIndex")), b.css("zIndex", c.zIndex)
        },
        stop: function(b, c) {
            b = a(this).data("draggable").options, b._zIndex && a(c.helper).css("zIndex", b._zIndex)
        }
    })
}(jQuery),
function(a) {
    a.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var b = this.options,
                c = b.accept;
            this.isover = 0, this.isout = 1, this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var b = a.ui.ddmanager.droppables[this.options.scope], c = 0; c < b.length; c++) b[c] == this && b.splice(c, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function(b, c) {
            "accept" == b && (this.accept = a.isFunction(c) ? c : function(a) {
                return a.is(c)
            }), a.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
        },
        _deactivate: function(b) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
        },
        _over: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
        },
        _out: function(b) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] != this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
        },
        _drop: function(b, c) {
            var d = c || a.ui.ddmanager.current;
            if (!d || (d.currentItem || d.element)[0] == this.element[0]) return !1;
            var e = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var b = a.data(this, "droppable");
                if (b.options.greedy && !b.options.disabled && b.options.scope == d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {
                        offset: b.element.offset()
                    }), b.options.tolerance)) return e = !0, !1
            }), !e && (!!this.accept.call(this.element[0], d.currentItem || d.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element))
        },
        ui: function(a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    }), a.extend(a.ui.droppable, {
        version: "1.8.9"
    }), a.ui.intersect = function(b, c, d) {
        if (!c.offset) return !1;
        var e = (b.positionAbs || b.position.absolute).left,
            f = e + b.helperProportions.width,
            g = (b.positionAbs || b.position.absolute).top,
            h = g + b.helperProportions.height,
            i = c.offset.left,
            j = i + c.proportions.width,
            k = c.offset.top,
            l = k + c.proportions.height;
        switch (d) {
            case "fit":
                return i <= e && f <= j && k <= g && h <= l;
            case "intersect":
                return i < e + b.helperProportions.width / 2 && f - b.helperProportions.width / 2 < j && k < g + b.helperProportions.height / 2 && h - b.helperProportions.height / 2 < l;
            case "pointer":
                return a.ui.isOver((b.positionAbs || b.position.absolute).top + (b.clickOffset || b.offset.click).top, (b.positionAbs || b.position.absolute).left + (b.clickOffset || b.offset.click).left, k, i, c.proportions.height, c.proportions.width);
            case "touch":
                return (g >= k && g <= l || h >= k && h <= l || g < k && h > l) && (e >= i && e <= j || f >= i && f <= j || e < i && f > j);
            default:
                return !1
        }
    }, a.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(b, c) {
            var d = a.ui.ddmanager.droppables[b.options.scope] || [],
                e = c ? c.type : null,
                f = (b.currentItem || b.element).find(":data(droppable)").andSelf(),
                g = 0;
            a: for (; g < d.length; g++)
                if (!(d[g].options.disabled || b && !d[g].accept.call(d[g].element[0], b.currentItem || b.element))) {
                    for (var h = 0; h < f.length; h++)
                        if (f[h] == d[g].element[0]) {
                            d[g].proportions.height = 0;
                            continue a
                        }
                    d[g].visible = "none" != d[g].element.css("display"), d[g].visible && (d[g].offset = d[g].element.offset(), d[g].proportions = {
                        width: d[g].element[0].offsetWidth,
                        height: d[g].element[0].offsetHeight
                    }, "mousedown" == e && d[g]._activate.call(d[g], c))
                }
        },
        drop: function(b, c) {
            var d = !1;
            return a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = d || this._drop.call(this, c)), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, c)))
            }), d
        },
        drag: function(b, c) {
            b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d = a.ui.intersect(b, this, this.options.tolerance);
                    if (d = d || 1 != this.isover ? d && 0 == this.isover ? "isover" : null : "isout") {
                        var e;
                        if (this.options.greedy) {
                            var f = this.element.parents(":data(droppable):eq(0)");
                            f.length && (e = a.data(f[0], "droppable"), e.greedyChild = "isover" == d ? 1 : 0)
                        }
                        e && "isover" == d && (e.isover = 0, e.isout = 1, e._out.call(e, c)), this[d] = 1, this["isout" == d ? "isover" : "isout"] = 0, this["isover" == d ? "_over" : "_out"].call(this, c), e && "isout" == d && (e.isout = 0, e.isover = 1, e._over.call(e, c))
                    }
                }
            })
        }
    }
}(jQuery),
function(a) {
    a.widget("ui.resizable", a.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var b = this,
                c = this.options;
            if (this.element.addClass("ui-resizable"), a.extend(this, {
                    _aspectRatio: !!c.aspectRatio,
                    aspectRatio: c.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (/relative/.test(this.element.css("position")) && a.browser.opera && this.element.css({
                    position: "relative",
                    top: "auto",
                    left: "auto"
                }), this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = c.handles || (a(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var d = this.handles.split(",");
                this.handles = {};
                for (var e = 0; e < d.length; e++) {
                    var f = a.trim(d[e]),
                        g = a('<div class="ui-resizable-handle ui-resizable-' + f + '"></div>');
                    /sw|se|ne|nw/.test(f) && g.css({
                        zIndex: ++c.zIndex
                    }), "se" == f && g.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[f] = ".ui-resizable-" + f, this.element.append(g)
                }
            }
            this._renderAxis = function(b) {
                b = b || this.element;
                for (var c in this.handles) {
                    if (this.handles[c].constructor == String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var d = a(this.handles[c], this.element),
                            e = 0;
                        e = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), d = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(d, e), this._proportionallyResize()
                    }
                    a(this.handles[c])
                }
            }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                if (!b.resizing) {
                    if (this.className) var a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    b.axis = a && a[1] ? a[1] : "se"
                }
            }), c.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").hover(function() {
                a(this).removeClass("ui-resizable-autohide"), b._handles.show()
            }, function() {
                b.resizing || (a(this).addClass("ui-resizable-autohide"), b._handles.hide())
            })), this._mouseInit()
        },
        destroy: function() {
            this._mouseDestroy();
            var b = function(b) {
                a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                b(this.element);
                var c = this.element;
                c.after(this.originalElement.css({
                    position: c.css("position"),
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: c.css("top"),
                    left: c.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement), this
        },
        _mouseCapture: function(b) {
            var c = !1;
            for (var d in this.handles) a(this.handles[d])[0] == b.target && (c = !0);
            return !this.options.disabled && c
        },
        _mouseStart: function(c) {
            var d = this.options,
                e = this.element.position(),
                f = this.element;
            this.resizing = !0, this.documentScroll = {
                top: a(document).scrollTop(),
                left: a(document).scrollLeft()
            }, (f.is(".ui-draggable") || /absolute/.test(f.css("position"))) && f.css({
                position: "absolute",
                top: e.top,
                left: e.left
            }), a.browser.opera && /relative/.test(f.css("position")) && f.css({
                position: "relative",
                top: "auto",
                left: "auto"
            }), this._renderProxy(), e = b(this.helper.css("left"));
            var g = b(this.helper.css("top"));
            return d.containment && (e += a(d.containment).scrollLeft() || 0, g += a(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: e,
                top: g
            }, this.size = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            }, this.originalSize = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            }, this.originalPosition = {
                left: e,
                top: g
            }, this.sizeDiff = {
                width: f.outerWidth() - f.width(),
                height: f.outerHeight() - f.height()
            }, this.originalMousePosition = {
                left: c.pageX,
                top: c.pageY
            }, this.aspectRatio = "number" == typeof d.aspectRatio ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1, d = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" == d ? this.axis + "-resize" : d), f.addClass("ui-resizable-resizing"), this._propagate("start", c), !0
        },
        _mouseDrag: function(a) {
            var b = this.helper,
                c = this.originalMousePosition,
                d = this._change[this.axis];
            return !!d && (c = d.apply(this, [a, a.pageX - c.left || 0, a.pageY - c.top || 0]), (this._aspectRatio || a.shiftKey) && (c = this._updateRatio(c, a)), c = this._respectSize(c, a), this._propagate("resize", a), b.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(c), this._trigger("resize", a, this.ui()), !1)
        },
        _mouseStop: function(b) {
            this.resizing = !1;
            var c = this.options,
                d = this;
            if (this._helper) {
                var e = this._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName);
                e = f && a.ui.hasScroll(e[0], "left") ? 0 : d.sizeDiff.height, f = {
                    width: d.size.width - (f ? 0 : d.sizeDiff.width),
                    height: d.size.height - e
                }, e = parseInt(d.element.css("left"), 10) + (d.position.left - d.originalPosition.left) || null;
                var g = parseInt(d.element.css("top"), 10) + (d.position.top - d.originalPosition.top) || null;
                c.animate || this.element.css(a.extend(f, {
                    top: g,
                    left: e
                })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !c.animate && this._proportionallyResize()
            }
            return a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset(), c(a.left) && (this.position.left = a.left), c(a.top) && (this.position.top = a.top), c(a.height) && (this.size.height = a.height), c(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function(a) {
            var b = this.position,
                c = this.size,
                d = this.axis;
            return a.height ? a.width = c.height * this.aspectRatio : a.width && (a.height = c.width / this.aspectRatio), "sw" == d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" == d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
        },
        _respectSize: function(a) {
            var b = this.options,
                d = this.axis,
                e = c(a.width) && b.maxWidth && b.maxWidth < a.width,
                f = c(a.height) && b.maxHeight && b.maxHeight < a.height,
                g = c(a.width) && b.minWidth && b.minWidth > a.width,
                h = c(a.height) && b.minHeight && b.minHeight > a.height;
            g && (a.width = b.minWidth), h && (a.height = b.minHeight), e && (a.width = b.maxWidth), f && (a.height = b.maxHeight);
            var i = this.originalPosition.left + this.originalSize.width,
                j = this.position.top + this.size.height,
                k = /sw|nw|w/.test(d);
            return d = /nw|ne|n/.test(d), g && k && (a.left = i - b.minWidth), e && k && (a.left = i - b.maxWidth), h && d && (a.top = j - b.minHeight), f && d && (a.top = j - b.maxHeight), (b = !a.width && !a.height) && !a.left && a.top ? a.top = null : b && !a.top && a.left && (a.left = null), a
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var b = this.helper || this.element, c = 0; c < this._proportionallyResizeElements.length; c++) {
                    var d = this._proportionallyResizeElements[c];
                    if (!this.borderDif) {
                        var e = [d.css("borderTopWidth"), d.css("borderRightWidth"), d.css("borderBottomWidth"), d.css("borderLeftWidth")],
                            f = [d.css("paddingTop"), d.css("paddingRight"), d.css("paddingBottom"), d.css("paddingLeft")];
                        this.borderDif = a.map(e, function(a, b) {
                            return a = parseInt(a, 10) || 0, b = parseInt(f[b], 10) || 0, a + b
                        })
                    }
                    a.browser.msie && (a(b).is(":hidden") || a(b).parents(":hidden").length) || d.css({
                        height: b.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: b.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function() {
            var b = this.options;
            if (this.elementOffset = this.element.offset(), this._helper) {
                this.helper = this.helper || a('<div style="overflow:hidden;"></div>');
                var c = a.browser.msie && a.browser.version < 7,
                    d = c ? 1 : 0;
                c = c ? 2 : -1, this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + c,
                    height: this.element.outerHeight() + c,
                    position: "absolute",
                    left: this.elementOffset.left - d + "px",
                    top: this.elementOffset.top - d + "px",
                    zIndex: ++b.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                }
            },
            w: function(a, b) {
                return {
                    left: this.originalPosition.left + b,
                    width: this.originalSize.width - b
                }
            },
            n: function(a, b, c) {
                return {
                    top: this.originalPosition.top + c,
                    height: this.originalSize.height - c
                }
            },
            s: function(a, b, c) {
                return {
                    height: this.originalSize.height + c
                }
            },
            se: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            sw: function(b, c, d) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            },
            ne: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
            },
            nw: function(b, c, d) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
            }
        },
        _propagate: function(b, c) {
            a.ui.plugin.call(this, b, [c, this.ui()]), "resize" != b && this._trigger(b, c, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), a.extend(a.ui.resizable, {
        version: "1.8.9"
    }), a.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var b = a(this).data("resizable").options,
                c = function(b) {
                    a(b).each(function() {
                        var b = a(this);
                        b.data("resizable-alsoresize", {
                            width: parseInt(b.width(), 10),
                            height: parseInt(b.height(), 10),
                            left: parseInt(b.css("left"), 10),
                            top: parseInt(b.css("top"), 10),
                            position: b.css("position")
                        })
                    })
                };
            "object" != typeof b.alsoResize || b.alsoResize.parentNode ? c(b.alsoResize) : b.alsoResize.length ? (b.alsoResize = b.alsoResize[0], c(b.alsoResize)) : a.each(b.alsoResize, function(a) {
                c(a)
            })
        },
        resize: function(b, c) {
            var d = a(this).data("resizable");
            b = d.options;
            var e = d.originalSize,
                f = d.originalPosition,
                g = {
                    height: d.size.height - e.height || 0,
                    width: d.size.width - e.width || 0,
                    top: d.position.top - f.top || 0,
                    left: d.position.left - f.left || 0
                },
                h = function(b, e) {
                    a(b).each(function() {
                        var b = a(this),
                            f = a(this).data("resizable-alsoresize"),
                            h = {},
                            i = e && e.length ? e : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        a.each(i, function(a, b) {
                            (a = (f[b] || 0) + (g[b] || 0)) && a >= 0 && (h[b] = a || null)
                        }), a.browser.opera && /relative/.test(b.css("position")) && (d._revertToRelativePosition = !0, b.css({
                            position: "absolute",
                            top: "auto",
                            left: "auto"
                        })), b.css(h)
                    })
                };
            "object" != typeof b.alsoResize || b.alsoResize.nodeType ? h(b.alsoResize) : a.each(b.alsoResize, function(a, b) {
                h(a, b)
            })
        },
        stop: function() {
            var b = a(this).data("resizable"),
                c = b.options,
                d = function(b) {
                    a(b).each(function() {
                        var b = a(this);
                        b.css({
                            position: b.data("resizable-alsoresize").position
                        })
                    })
                };
            b._revertToRelativePosition && (b._revertToRelativePosition = !1, "object" != typeof c.alsoResize || c.alsoResize.nodeType ? d(c.alsoResize) : a.each(c.alsoResize, function(a) {
                d(a)
            })), a(this).removeData("resizable-alsoresize")
        }
    }), a.ui.plugin.add("resizable", "animate", {
        stop: function(b) {
            var c = a(this).data("resizable"),
                d = c.options,
                e = c._proportionallyResizeElements,
                f = e.length && /textarea/i.test(e[0].nodeName),
                g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height;
            f = {
                width: c.size.width - (f ? 0 : c.sizeDiff.width),
                height: c.size.height - g
            }, g = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null;
            var h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
            c.element.animate(a.extend(f, h && g ? {
                top: h,
                left: g
            } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing,
                step: function() {
                    var d = {
                        width: parseInt(c.element.css("width"), 10),
                        height: parseInt(c.element.css("height"), 10),
                        top: parseInt(c.element.css("top"), 10),
                        left: parseInt(c.element.css("left"), 10)
                    };
                    e && e.length && a(e[0]).css({
                        width: d.width,
                        height: d.height
                    }), c._updateCache(d), c._propagate("resize", b)
                }
            })
        }
    }), a.ui.plugin.add("resizable", "containment", {
        start: function() {
            var c = a(this).data("resizable"),
                d = c.element,
                e = c.options.containment;
            if (d = e instanceof a ? e.get(0) : /parent/.test(e) ? d.parent().get(0) : e)
                if (c.containerElement = a(d), /document/.test(e) || e == document) c.containerOffset = {
                    left: 0,
                    top: 0
                }, c.containerPosition = {
                    left: 0,
                    top: 0
                }, c.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var f = a(d),
                        g = [];
                    a(["Top", "Right", "Left", "Bottom"]).each(function(a, c) {
                        g[a] = b(f.css("padding" + c))
                    }), c.containerOffset = f.offset(), c.containerPosition = f.position(), c.containerSize = {
                        height: f.innerHeight() - g[3],
                        width: f.innerWidth() - g[1]
                    }, e = c.containerOffset;
                    var h = c.containerSize.height,
                        i = c.containerSize.width;
                    i = a.ui.hasScroll(d, "left") ? d.scrollWidth : i, h = a.ui.hasScroll(d) ? d.scrollHeight : h, c.parentData = {
                        element: d,
                        left: e.left,
                        top: e.top,
                        width: i,
                        height: h
                    }
                }
        },
        resize: function(b) {
            var c = a(this).data("resizable"),
                d = c.options,
                e = c.containerOffset,
                f = c.position;
            b = c._aspectRatio || b.shiftKey;
            var g = {
                    top: 0,
                    left: 0
                },
                h = c.containerElement;
            h[0] != document && /static/.test(h.css("position")) && (g = e), f.left < (c._helper ? e.left : 0) && (c.size.width += c._helper ? c.position.left - e.left : c.position.left - g.left, b && (c.size.height = c.size.width / d.aspectRatio), c.position.left = d.helper ? e.left : 0), f.top < (c._helper ? e.top : 0) && (c.size.height += c._helper ? c.position.top - e.top : c.position.top, b && (c.size.width = c.size.height * d.aspectRatio), c.position.top = c._helper ? e.top : 0), c.offset.left = c.parentData.left + c.position.left, c.offset.top = c.parentData.top + c.position.top, d = Math.abs((c._helper ? c.offset.left - g.left : c.offset.left - g.left) + c.sizeDiff.width), e = Math.abs((c._helper ? c.offset.top - g.top : c.offset.top - e.top) + c.sizeDiff.height), f = c.containerElement.get(0) == c.element.parent().get(0), g = /relative|absolute/.test(c.containerElement.css("position")), f && g && (d -= c.parentData.left), d + c.size.width >= c.parentData.width && (c.size.width = c.parentData.width - d, b && (c.size.height = c.size.width / c.aspectRatio)), e + c.size.height >= c.parentData.height && (c.size.height = c.parentData.height - e, b && (c.size.width = c.size.height * c.aspectRatio))
        },
        stop: function() {
            var b = a(this).data("resizable"),
                c = b.options,
                d = b.containerOffset,
                e = b.containerPosition,
                f = b.containerElement,
                g = a(b.helper),
                h = g.offset(),
                i = g.outerWidth() - b.sizeDiff.width;
            g = g.outerHeight() - b.sizeDiff.height, b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: g
            }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                left: h.left - e.left - d.left,
                width: i,
                height: g
            })
        }
    }), a.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var b = a(this).data("resizable"),
                c = b.options,
                d = b.size;
            b.ghost = b.originalElement.clone(), b.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: d.height,
                width: d.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
        },
        resize: function() {
            var b = a(this).data("resizable");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            })
        },
        stop: function() {
            var b = a(this).data("resizable");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    }), a.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var b = a(this).data("resizable"),
                c = b.options,
                d = b.size,
                e = b.originalSize,
                f = b.originalPosition,
                g = b.axis;
            c.grid = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid;
            var h = Math.round((d.width - e.width) / (c.grid[0] || 1)) * (c.grid[0] || 1);
            c = Math.round((d.height - e.height) / (c.grid[1] || 1)) * (c.grid[1] || 1), /^(se|s|e)$/.test(g) ? (b.size.width = e.width + h, b.size.height = e.height + c) : /^(ne)$/.test(g) ? (b.size.width = e.width + h, b.size.height = e.height + c, b.position.top = f.top - c) : (/^(sw)$/.test(g) ? (b.size.width = e.width + h, b.size.height = e.height + c) : (b.size.width = e.width + h, b.size.height = e.height + c, b.position.top = f.top - c), b.position.left = f.left - h)
        }
    });
    var b = function(a) {
            return parseInt(a, 10) || 0
        },
        c = function(a) {
            return !isNaN(parseInt(a, 10))
        }
}(jQuery),
function(a) {
    a.widget("ui.selectable", a.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var b = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var c;
            this.refresh = function() {
                c = a(b.options.filter, b.element[0]), c.each(function() {
                    var b = a(this),
                        c = b.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: b,
                        left: c.left,
                        top: c.top,
                        right: c.left + b.outerWidth(),
                        bottom: c.top + b.outerHeight(),
                        startselected: !1,
                        selected: b.hasClass("ui-selected"),
                        selecting: b.hasClass("ui-selecting"),
                        unselecting: b.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
        },
        destroy: function() {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function(b) {
            var c = this;
            if (this.opos = [b.pageX, b.pageY], !this.options.disabled) {
                var d = this.options;
                this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                    left: b.clientX,
                    top: b.clientY,
                    width: 0,
                    height: 0
                }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var d = a.data(this, "selectable-item");
                    d.startselected = !0, b.metaKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {
                        unselecting: d.element
                    }))
                }), a(b.target).parents().andSelf().each(function() {
                    var d = a.data(this, "selectable-item");
                    if (d) {
                        var e = !b.metaKey || !d.$element.hasClass("ui-selected");
                        return d.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), d.unselecting = !e, d.selecting = e, (d.selected = e) ? c._trigger("selecting", b, {
                            selecting: d.element
                        }) : c._trigger("unselecting", b, {
                            unselecting: d.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function(b) {
            var c = this;
            if (this.dragged = !0, !this.options.disabled) {
                var d = this.options,
                    e = this.opos[0],
                    f = this.opos[1],
                    g = b.pageX,
                    h = b.pageY;
                if (e > g) {
                    var i = g;
                    g = e, e = i
                }
                return f > h && (i = h, h = f, f = i), this.helper.css({
                    left: e,
                    top: f,
                    width: g - e,
                    height: h - f
                }), this.selectees.each(function() {
                    var i = a.data(this, "selectable-item");
                    if (i && i.element != c.element[0]) {
                        var j = !1;
                        "touch" == d.tolerance ? j = !(i.left > g || i.right < e || i.top > h || i.bottom < f) : "fit" == d.tolerance && (j = i.left > e && i.right < g && i.top > f && i.bottom < h), j ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, c._trigger("selecting", b, {
                            selecting: i.element
                        }))) : (i.selecting && (b.metaKey && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), c._trigger("unselecting", b, {
                            unselecting: i.element
                        }))), i.selected && (b.metaKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, c._trigger("unselecting", b, {
                            unselecting: i.element
                        }))))
                    }
                }), !1
            }
        },
        _mouseStop: function(b) {
            var c = this;
            return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {
                    unselected: d.element
                })
            }), a(".ui-selecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {
                    selected: d.element
                })
            }), this._trigger("stop", b), this.helper.remove(), !1
        }
    }), a.extend(a.ui.selectable, {
        version: "1.8.9"
    })
}(jQuery),
function(a) {
    a.widget("ui.sortable", a.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && /left|right/.test(this.items[0].item.css("float")), this.offset = this.element.offset(), this._mouseInit()
        },
        destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"), this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData("sortable-item");
            return this
        },
        _setOption: function(b, c) {
            "disabled" === b ? (this.options[b] = c, this.widget()[c ? "addClass" : "removeClass"]("ui-sortable-disabled")) : a.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(b, c) {
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(b);
            var d = null,
                e = this;
            if (a(b.target).parents().each(function() {
                    if (a.data(this, "sortable-item") == e) return d = a(this), !1
                }), a.data(b.target, "sortable-item") == e && (d = a(b.target)), !d) return !1;
            if (this.options.handle && !c) {
                var f = !1;
                if (a(this.options.handle, d).find("*").andSelf().each(function() {
                        this == b.target && (f = !0)
                    }), !f) return !1
            }
            return this.currentItem = d, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(b, c, d) {
            c = this.options;
            var e = this;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), a.extend(this.offset, {
                    click: {
                        left: b.pageX - this.offset.left,
                        top: b.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), c.containment && this._setContainment(), c.cursor && (a("body").css("cursor") && (this._storedCursor = a("body").css("cursor")), a("body").css("cursor", c.cursor)), c.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", c.opacity)), c.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", c.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)
                for (d = this.containers.length - 1; d >= 0; d--) this.containers[d]._trigger("activate", b, e._uiHash(this));
            return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
        },
        _mouseDrag: function(b) {
            if (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var c = this.options,
                    d = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < c.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + c.scrollSpeed : b.pageY - this.overflowOffset.top < c.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - c.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < c.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + c.scrollSpeed : b.pageX - this.overflowOffset.left < c.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - c.scrollSpeed)) : (b.pageY - a(document).scrollTop() < c.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < c.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed)), b.pageX - a(document).scrollLeft() < c.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed))), d !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)
            }
            for (this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--) {
                d = this.items[c];
                var e = d.item[0],
                    f = this._intersectsWithPointer(d);
                if (f && !(e == this.currentItem[0] || this.placeholder[1 == f ? "next" : "prev"]()[0] == e || a.ui.contains(this.placeholder[0], e) || "semi-dynamic" == this.options.type && a.ui.contains(this.element[0], e))) {
                    if (this.direction = 1 == f ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(d)) break;
                    this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                    break
                }
            }
            return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(b, c) {
            if (b) {
                if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                    var d = this;
                    c = d.placeholder.offset(), d.reverting = !0, a(this.helper).animate({
                        left: c.left - this.offset.parent.left - d.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: c.top - this.offset.parent.top - d.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        d._clear(b)
                    })
                } else this._clear(b, c);
                return !1
            }
        },
        cancel: function() {
            var b = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var c = this.containers.length - 1; c >= 0; c--) this.containers[c]._trigger("deactivate", null, b._uiHash(this)), this.containers[c].containerCache.over && (this.containers[c]._trigger("out", null, b._uiHash(this)), this.containers[c].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, a(c).each(function() {
                var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/);
                c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
            }), !d.length && b.key && d.push(b.key + "="), d.join("&")
        },
        toArray: function(b) {
            var c = this._getItemsAsjQuery(b && b.connected),
                d = [];
            return b = b || {}, c.each(function() {
                d.push(a(b.item || this).attr(b.attribute || "id") || "")
            }), d
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left,
                c = b + this.helperProportions.width,
                d = this.positionAbs.top,
                e = d + this.helperProportions.height,
                f = a.left,
                g = f + a.width,
                h = a.top,
                i = h + a.height,
                j = this.offset.click.top,
                k = this.offset.click.left;
            return j = d + j > h && d + j < i && b + k > f && b + k < g, "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? j : f < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < g && h < d + this.helperProportions.height / 2 && e - this.helperProportions.height / 2 < i
        },
        _intersectsWithPointer: function(b) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height);
            b = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width), c = c && b, b = this._getDragVerticalDirection();
            var d = this._getDragHorizontalDirection();
            return !!c && (this.floating ? d && "right" == d || "down" == b ? 2 : 1 : b && ("down" == b ? 2 : 1))
        },
        _intersectsWithSides: function(b) {
            var c = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height);
            b = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width);
            var d = this._getDragVerticalDirection(),
                e = this._getDragHorizontalDirection();
            return this.floating && e ? "right" == e && b || "left" == e && !b : d && ("down" == d && c || "up" == d && !c)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != a && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != a && (a > 0 ? "right" : "left")
        },
        refresh: function(a) {
            return this._refreshItems(a), this.refreshPositions(), this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(b) {
            var c = [],
                d = [],
                e = this._connectWith();
            if (e && b)
                for (b = e.length - 1; b >= 0; b--)
                    for (var f = a(e[b]), g = f.length - 1; g >= 0; g--) {
                        var h = a.data(f[g], "sortable");
                        h && h != this && !h.options.disabled && d.push([a.isFunction(h.options.items) ? h.options.items.call(h.element) : a(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
                    }
            for (d.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), b = d.length - 1; b >= 0; b--) d[b][0].each(function() {
                c.push(this)
            });
            return a(c)
        },
        _removeCurrentsFromItems: function() {
            for (var a = this.currentItem.find(":data(sortable-item)"), b = 0; b < this.items.length; b++)
                for (var c = 0; c < a.length; c++) a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        },
        _refreshItems: function(b) {
            this.items = [], this.containers = [this];
            var c = this.items,
                d = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ],
                e = this._connectWith();
            if (e)
                for (var f = e.length - 1; f >= 0; f--)
                    for (var g = a(e[f]), h = g.length - 1; h >= 0; h--) {
                        var i = a.data(g[h], "sortable");
                        i && i != this && !i.options.disabled && (d.push([a.isFunction(i.options.items) ? i.options.items.call(i.element[0], b, {
                            item: this.currentItem
                        }) : a(i.options.items, i.element), i]), this.containers.push(i))
                    }
            for (f = d.length - 1; f >= 0; f--)
                for (b = d[f][1], e = d[f][0], h = 0, g = e.length; h < g; h++) i = a(e[h]), i.data("sortable-item", b), c.push({
                    item: i,
                    instance: b,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var c = this.items.length - 1; c >= 0; c--) {
                var d = this.items[c],
                    e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item;
                b || (d.width = e.outerWidth(), d.height = e.outerHeight()), e = e.offset(), d.left = e.left, d.top = e.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (c = this.containers.length - 1; c >= 0; c--) e = this.containers[c].element.offset(), this.containers[c].containerCache.left = e.left, this.containers[c].containerCache.top = e.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
            return this
        },
        _createPlaceholder: function(b) {
            var c = b || this,
                d = c.options;
            if (!d.placeholder || d.placeholder.constructor == String) {
                var e = d.placeholder;
                d.placeholder = {
                    element: function() {
                        var b = a(document.createElement(c.currentItem[0].nodeName)).addClass(e || c.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return e || (b.style.visibility = "hidden"), b
                    },
                    update: function(a, b) {
                        e && !d.forcePlaceholderSize || (b.height() || b.height(c.currentItem.innerHeight() - parseInt(c.currentItem.css("paddingTop") || 0, 10) - parseInt(c.currentItem.css("paddingBottom") || 0, 10)), b.width() || b.width(c.currentItem.innerWidth() - parseInt(c.currentItem.css("paddingLeft") || 0, 10) - parseInt(c.currentItem.css("paddingRight") || 0, 10)));
                    }
                }
            }
            c.placeholder = a(d.placeholder.element.call(c.element, c.currentItem)), c.currentItem.after(c.placeholder), d.placeholder.update(c, c.placeholder)
        },
        _contactContainers: function(b) {
            for (var c = null, d = null, e = this.containers.length - 1; e >= 0; e--) a.ui.contains(this.currentItem[0], this.containers[e].element[0]) || (this._intersectsWith(this.containers[e].containerCache) ? c && a.ui.contains(this.containers[e].element[0], c.element[0]) || (c = this.containers[e], d = e) : this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0));
            if (c)
                if (1 === this.containers.length) this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1;
                else if (this.currentContainer != this.containers[d]) {
                c = 1e4, e = null;
                for (var f = this.positionAbs[this.containers[d].floating ? "left" : "top"], g = this.items.length - 1; g >= 0; g--)
                    if (a.ui.contains(this.containers[d].element[0], this.items[g].item[0])) {
                        var h = this.items[g][this.containers[d].floating ? "left" : "top"];
                        Math.abs(h - f) < c && (c = Math.abs(h - f), e = this.items[g])
                    }(e || this.options.dropOnEmpty) && (this.currentContainer = this.containers[d], e ? this._rearrange(b, e, null, !0) : this._rearrange(b, null, this.containers[d].element, !0), this._trigger("change", b, this._uiHash()), this.containers[d]._trigger("change", b, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", b, this._uiHash(this)), this.containers[d].containerCache.over = 1)
            }
        },
        _createHelper: function(b) {
            var c = this.options;
            return b = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" == c.helper ? this.currentItem.clone() : this.currentItem, b.parents("body").length || a("parent" != c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(b[0]), b[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == b[0].style.width || c.forceHelperSize) && b.width(this.currentItem.width()), ("" == b[0].style.height || c.forceHelperSize) && b.height(this.currentItem.height()), b
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var b = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && a.browser.msie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var b = this.options;
            if ("parent" == b.containment && (b.containment = this.helper[0].parentNode), "document" != b.containment && "window" != b.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" == b.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" == b.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(b.containment)) {
                var c = a(b.containment)[0];
                b = a(b.containment).offset();
                var d = "hidden" != a(c).css("overflow");
                this.containment = [b.left + (parseInt(a(c).css("borderLeftWidth"), 10) || 0) + (parseInt(a(c).css("paddingLeft"), 10) || 0) - this.margins.left, b.top + (parseInt(a(c).css("borderTopWidth"), 10) || 0) + (parseInt(a(c).css("paddingTop"), 10) || 0) - this.margins.top, b.left + (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(a(c).css("borderLeftWidth"), 10) || 0) - (parseInt(a(c).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, b.top + (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(a(c).css("borderTopWidth"), 10) || 0) - (parseInt(a(c).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(b, c) {
            c || (c = this.position), b = "absolute" == b ? 1 : -1;
            var d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                e = /(html|body)/i.test(d[0].tagName);
            return {
                top: c.top + this.offset.relative.top * b + this.offset.parent.top * b - (a.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()) * b),
                left: c.left + this.offset.relative.left * b + this.offset.parent.left * b - (a.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft()) * b)
            }
        },
        _generatePosition: function(b) {
            var c = this.options,
                d = "absolute" != this.cssPosition || this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                e = /(html|body)/i.test(d[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var f = b.pageX,
                g = b.pageY;
            return this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), c.grid && (g = this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1], g = this.containment && (g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g - this.offset.click.top < this.containment[1] ? g + c.grid[1] : g - c.grid[1] : g, f = this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0], f = this.containment && (f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f - this.offset.click.left < this.containment[0] ? f + c.grid[0] : f - c.grid[0] : f)), {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())
            }
        },
        _rearrange: function(a, b, c, d) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var e = this,
                f = this.counter;
            window.setTimeout(function() {
                f == e.counter && e.refreshPositions(!d)
            }, 0)
        },
        _clear: function(b, c) {
            this.reverting = !1;
            var d = [];
            if (!this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var e in this._storedCSS) "auto" != this._storedCSS[e] && "static" != this._storedCSS[e] || (this._storedCSS[e] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            if (this.fromOutside && !c && d.push(function(a) {
                    this._trigger("receive", a, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || c || d.push(function(a) {
                    this._trigger("update", a, this._uiHash())
                }), !a.ui.contains(this.element[0], this.currentItem[0]))
                for (c || d.push(function(a) {
                        this._trigger("remove", a, this._uiHash())
                    }), e = this.containers.length - 1; e >= 0; e--) a.ui.contains(this.containers[e].element[0], this.currentItem[0]) && !c && (d.push(function(a) {
                    return function(b) {
                        a._trigger("receive", b, this._uiHash(this))
                    }
                }.call(this, this.containers[e])), d.push(function(a) {
                    return function(b) {
                        a._trigger("update", b, this._uiHash(this))
                    }
                }.call(this, this.containers[e])));
            for (e = this.containers.length - 1; e >= 0; e--) c || d.push(function(a) {
                return function(b) {
                    a._trigger("deactivate", b, this._uiHash(this))
                }
            }.call(this, this.containers[e])), this.containers[e].containerCache.over && (d.push(function(a) {
                return function(b) {
                    a._trigger("out", b, this._uiHash(this))
                }
            }.call(this, this.containers[e])), this.containers[e].containerCache.over = 0);
            if (this._storedCursor && a("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!c) {
                    for (this._trigger("beforeStop", b, this._uiHash()), e = 0; e < d.length; e++) d[e].call(this, b);
                    this._trigger("stop", b, this._uiHash())
                }
                return !1
            }
            if (c || this._trigger("beforeStop", b, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !c) {
                for (e = 0; e < d.length; e++) d[e].call(this, b);
                this._trigger("stop", b, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(b) {
            var c = b || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: b ? b.element : null
            }
        }
    }), a.extend(a.ui.sortable, {
        version: "1.8.9"
    })
}(jQuery), jQuery.effects || function(a, b) {
        function c(b) {
            var c;
            return b && b.constructor == Array && 3 == b.length ? b : (c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) ? [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)] : (c = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) ? [2.55 * parseFloat(c[1]), 2.55 * parseFloat(c[2]), 2.55 * parseFloat(c[3])] : (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) ? [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)] : (c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) ? [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)] : /rgba\(0, 0, 0, 0\)/.exec(b) ? j.transparent : j[a.trim(b).toLowerCase()]
        }

        function d(b, d) {
            var e;
            do {
                if (e = a.curCSS(b, d), "" != e && "transparent" != e || a.nodeName(b, "body")) break;
                d = "backgroundColor"
            } while (b = b.parentNode);
            return c(e)
        }

        function e() {
            var a, b, c = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
                d = {};
            if (c && c.length && c[0] && c[c[0]])
                for (var e = c.length; e--;) a = c[e], "string" == typeof c[a] && (b = a.replace(/\-(\w)/g, function(a, b) {
                    return b.toUpperCase()
                }), d[b] = c[a]);
            else
                for (a in c) "string" == typeof c[a] && (d[a] = c[a]);
            return d
        }

        function f(b) {
            var c, d;
            for (c in b) d = b[c], (null == d || a.isFunction(d) || c in l || /scrollbar/.test(c) || !/color/i.test(c) && isNaN(parseFloat(d))) && delete b[c];
            return b
        }

        function g(a, b) {
            var c, d = {
                _: 0
            };
            for (c in b) a[c] != b[c] && (d[c] = b[c]);
            return d
        }

        function h(b, c, d, e) {
            return "object" == typeof b && (e = c, d = null, c = b, b = c.effect), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c = c || {}, d = d || c.duration, d = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, e = e || c.complete, [b, c, d, e]
        }

        function i(b) {
            return !(b && "number" != typeof b && !a.fx.speeds[b]) || "string" == typeof b && !a.effects[b]
        }
        a.effects = {}, a.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(b, e) {
            a.fx.step[e] = function(a) {
                a.colorInit || (a.start = d(a.elem, e), a.end = c(a.end), a.colorInit = !0), a.elem.style[e] = "rgb(" + Math.max(Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255), 0) + ")"
            }
        });
        var j = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0],
                transparent: [255, 255, 255]
            },
            k = ["add", "remove", "toggle"],
            l = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        a.effects.animateClass = function(b, c, d, h) {
            return a.isFunction(d) && (h = d, d = null), this.queue("fx", function() {
                var i, j = a(this),
                    l = j.attr("style") || " ",
                    m = f(e.call(this)),
                    n = j.attr("className");
                a.each(k, function(a, c) {
                    b[c] && j[c + "Class"](b[c])
                }), i = f(e.call(this)), j.attr("className", n), j.animate(g(m, i), c, d, function() {
                    a.each(k, function(a, c) {
                        b[c] && j[c + "Class"](b[c])
                    }), "object" == typeof j.attr("style") ? (j.attr("style").cssText = "", j.attr("style").cssText = l) : j.attr("style", l), h && h.apply(this, arguments)
                }), m = a.queue(this), i = m.splice(m.length - 1, 1)[0], m.splice(1, 0, i), a.dequeue(this)
            })
        }, a.fn.extend({
            _addClass: a.fn.addClass,
            addClass: function(b, c, d, e) {
                return c ? a.effects.animateClass.apply(this, [{
                    add: b
                }, c, d, e]) : this._addClass(b)
            },
            _removeClass: a.fn.removeClass,
            removeClass: function(b, c, d, e) {
                return c ? a.effects.animateClass.apply(this, [{
                    remove: b
                }, c, d, e]) : this._removeClass(b)
            },
            _toggleClass: a.fn.toggleClass,
            toggleClass: function(c, d, e, f, g) {
                return "boolean" == typeof d || d === b ? e ? a.effects.animateClass.apply(this, [d ? {
                    add: c
                } : {
                    remove: c
                }, e, f, g]) : this._toggleClass(c, d) : a.effects.animateClass.apply(this, [{
                    toggle: c
                }, d, e, f])
            },
            switchClass: function(b, c, d, e, f) {
                return a.effects.animateClass.apply(this, [{
                    add: c,
                    remove: b
                }, d, e, f])
            }
        }), a.extend(a.effects, {
            version: "1.8.9",
            save: function(a, b) {
                for (var c = 0; c < b.length; c++) null !== b[c] && a.data("ec.storage." + b[c], a[0].style[b[c]])
            },
            restore: function(a, b) {
                for (var c = 0; c < b.length; c++) null !== b[c] && a.css(b[c], a.data("ec.storage." + b[c]))
            },
            setMode: function(a, b) {
                return "toggle" == b && (b = a.is(":hidden") ? "show" : "hide"), b
            },
            getBaseline: function(a, b) {
                var c;
                switch (a[0]) {
                    case "top":
                        c = 0;
                        break;
                    case "middle":
                        c = .5;
                        break;
                    case "bottom":
                        c = 1;
                        break;
                    default:
                        c = a[0] / b.height
                }
                switch (a[1]) {
                    case "left":
                        a = 0;
                        break;
                    case "center":
                        a = .5;
                        break;
                    case "right":
                        a = 1;
                        break;
                    default:
                        a = a[1] / b.width
                }
                return {
                    x: a,
                    y: c
                }
            },
            createWrapper: function(b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {
                        width: b.outerWidth(!0),
                        height: b.outerHeight(!0),
                        float: b.css("float")
                    },
                    d = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    });
                return b.wrap(d), d = b.parent(), "static" == b.css("position") ? (d.css({
                    position: "relative"
                }), b.css({
                    position: "relative"
                })) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                    c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), d.css(c).show()
            },
            removeWrapper: function(a) {
                return a.parent().is(".ui-effects-wrapper") ? a.parent().replaceWith(a) : a
            },
            setTransition: function(b, c, d, e) {
                return e = e || {}, a.each(c, function(a, c) {
                    unit = b.cssUnit(c), unit[0] > 0 && (e[c] = unit[0] * d + unit[1])
                }), e
            }
        }), a.fn.extend({
            effect: function(b) {
                var c = h.apply(this, arguments),
                    d = {
                        options: c[1],
                        duration: c[2],
                        callback: c[3]
                    };
                c = d.options.mode;
                var e = a.effects[b];
                return a.fx.off || !e ? c ? this[c](d.duration, d.callback) : this.each(function() {
                    d.callback && d.callback.call(this)
                }) : e.call(this, d)
            },
            _show: a.fn.show,
            show: function(a) {
                if (i(a)) return this._show.apply(this, arguments);
                var b = h.apply(this, arguments);
                return b[1].mode = "show", this.effect.apply(this, b)
            },
            _hide: a.fn.hide,
            hide: function(a) {
                if (i(a)) return this._hide.apply(this, arguments);
                var b = h.apply(this, arguments);
                return b[1].mode = "hide", this.effect.apply(this, b)
            },
            __toggle: a.fn.toggle,
            toggle: function(b) {
                if (i(b) || "boolean" == typeof b || a.isFunction(b)) return this.__toggle.apply(this, arguments);
                var c = h.apply(this, arguments);
                return c[1].mode = "toggle", this.effect.apply(this, c)
            },
            cssUnit: function(b) {
                var c = this.css(b),
                    d = [];
                return a.each(["em", "px", "%", "pt"], function(a, b) {
                    c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                }), d
            }
        }), a.easing.jswing = a.easing.swing, a.extend(a.easing, {
            def: "easeOutQuad",
            swing: function(b, c, d, e, f) {
                return a.easing[a.easing.def](b, c, d, e, f)
            },
            easeInQuad: function(a, b, c, d, e) {
                return d * (b /= e) * b + c
            },
            easeOutQuad: function(a, b, c, d, e) {
                return -d * (b /= e) * (b - 2) + c
            },
            easeInOutQuad: function(a, b, c, d, e) {
                return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
            },
            easeInCubic: function(a, b, c, d, e) {
                return d * (b /= e) * b * b + c
            },
            easeOutCubic: function(a, b, c, d, e) {
                return d * ((b = b / e - 1) * b * b + 1) + c
            },
            easeInOutCubic: function(a, b, c, d, e) {
                return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
            },
            easeInQuart: function(a, b, c, d, e) {
                return d * (b /= e) * b * b * b + c
            },
            easeOutQuart: function(a, b, c, d, e) {
                return -d * ((b = b / e - 1) * b * b * b - 1) + c
            },
            easeInOutQuart: function(a, b, c, d, e) {
                return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
            },
            easeInQuint: function(a, b, c, d, e) {
                return d * (b /= e) * b * b * b * b + c
            },
            easeOutQuint: function(a, b, c, d, e) {
                return d * ((b = b / e - 1) * b * b * b * b + 1) + c
            },
            easeInOutQuint: function(a, b, c, d, e) {
                return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
            },
            easeInSine: function(a, b, c, d, e) {
                return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
            },
            easeOutSine: function(a, b, c, d, e) {
                return d * Math.sin(b / e * (Math.PI / 2)) + c
            },
            easeInOutSine: function(a, b, c, d, e) {
                return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
            },
            easeInExpo: function(a, b, c, d, e) {
                return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
            },
            easeOutExpo: function(a, b, c, d, e) {
                return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
            },
            easeInOutExpo: function(a, b, c, d, e) {
                return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
            },
            easeInCirc: function(a, b, c, d, e) {
                return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
            },
            easeOutCirc: function(a, b, c, d, e) {
                return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
            },
            easeInOutCirc: function(a, b, c, d, e) {
                return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
            },
            easeInElastic: function(a, b, c, d, e) {
                a = 1.70158;
                var f = 0,
                    g = d;
                return 0 == b ? c : 1 == (b /= e) ? c + d : (f || (f = .3 * e), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), -(g * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - a) * Math.PI / f)) + c)
            },
            easeOutElastic: function(a, b, c, d, e) {
                a = 1.70158;
                var f = 0,
                    g = d;
                return 0 == b ? c : 1 == (b /= e) ? c + d : (f || (f = .3 * e), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), g * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - a) * Math.PI / f) + d + c)
            },
            easeInOutElastic: function(a, b, c, d, e) {
                a = 1.70158;
                var f = 0,
                    g = d;
                return 0 == b ? c : 2 == (b /= e / 2) ? c + d : (f || (f = .3 * e * 1.5), g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g), b < 1 ? -.5 * g * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - a) * Math.PI / f) + c : g * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - a) * Math.PI / f) * .5 + d + c)
            },
            easeInBack: function(a, c, d, e, f, g) {
                return g == b && (g = 1.70158), e * (c /= f) * c * ((g + 1) * c - g) + d
            },
            easeOutBack: function(a, c, d, e, f, g) {
                return g == b && (g = 1.70158), e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
            },
            easeInOutBack: function(a, c, d, e, f, g) {
                return g == b && (g = 1.70158), (c /= f / 2) < 1 ? e / 2 * c * c * (((g *= 1.525) + 1) * c - g) + d : e / 2 * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
            },
            easeInBounce: function(b, c, d, e, f) {
                return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
            },
            easeOutBounce: function(a, b, c, d, e) {
                return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
            },
            easeInOutBounce: function(b, c, d, e, f) {
                return c < f / 2 ? .5 * a.easing.easeInBounce(b, 2 * c, 0, e, f) + d : .5 * a.easing.easeOutBounce(b, 2 * c - f, 0, e, f) + .5 * e + d
            }
        })
    }(jQuery),
    function(a) {
        a.effects.blind = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.direction || "vertical";
                a.effects.save(c, d), c.show();
                var g = a.effects.createWrapper(c).css({
                        overflow: "hidden"
                    }),
                    h = "vertical" == f ? "height" : "width";
                f = "vertical" == f ? g.height() : g.width(), "show" == e && g.css(h, 0);
                var i = {};
                i[h] = "show" == e ? f : 0, g.animate(i, b.duration, b.options.easing, function() {
                    "hide" == e && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.bounce = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "effect"),
                    f = b.options.direction || "up",
                    g = b.options.distance || 20,
                    h = b.options.times || 5,
                    i = b.duration || 250;
                /show|hide/.test(e) && d.push("opacity"), a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
                var j = "up" == f || "down" == f ? "top" : "left";
                if (f = "up" == f || "left" == f ? "pos" : "neg", g = b.options.distance || ("top" == j ? c.outerHeight({
                        margin: !0
                    }) / 3 : c.outerWidth({
                        margin: !0
                    }) / 3), "show" == e && c.css("opacity", 0).css(j, "pos" == f ? -g : g), "hide" == e && (g /= 2 * h), "hide" != e && h--, "show" == e) {
                    var k = {
                        opacity: 1
                    };
                    k[j] = ("pos" == f ? "+=" : "-=") + g, c.animate(k, i / 2, b.options.easing), g /= 2, h--
                }
                for (k = 0; k < h; k++) {
                    var l = {},
                        m = {};
                    l[j] = ("pos" == f ? "-=" : "+=") + g, m[j] = ("pos" == f ? "+=" : "-=") + g, c.animate(l, i / 2, b.options.easing).animate(m, i / 2, b.options.easing), g = "hide" == e ? 2 * g : g / 2
                }
                "hide" == e ? (k = {
                    opacity: 0
                }, k[j] = ("pos" == f ? "-=" : "+=") + g, c.animate(k, i / 2, b.options.easing, function() {
                    c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
                })) : (l = {}, m = {}, l[j] = ("pos" == f ? "-=" : "+=") + g, m[j] = ("pos" == f ? "+=" : "-=") + g, c.animate(l, i / 2, b.options.easing).animate(m, i / 2, b.options.easing, function() {
                    a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
                })), c.queue("fx", function() {
                    c.dequeue()
                }), c.dequeue()
            })
        }
    }(jQuery),
    function(a) {
        a.effects.clip = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right", "height", "width"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.direction || "vertical";
                a.effects.save(c, d), c.show();
                var g = a.effects.createWrapper(c).css({
                    overflow: "hidden"
                });
                g = "IMG" == c[0].tagName ? g : c;
                var h = {
                    size: "vertical" == f ? "height" : "width",
                    position: "vertical" == f ? "top" : "left"
                };
                f = "vertical" == f ? g.height() : g.width(), "show" == e && (g.css(h.size, 0), g.css(h.position, f / 2));
                var i = {};
                i[h.size] = "show" == e ? f : 0, i[h.position] = "show" == e ? 0 : f / 2, g.animate(i, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.options.easing,
                    complete: function() {
                        "hide" == e && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.drop = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right", "opacity"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.direction || "left";
                a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
                var g = "up" == f || "down" == f ? "top" : "left";
                f = "up" == f || "left" == f ? "pos" : "neg";
                var h = b.options.distance || ("top" == g ? c.outerHeight({
                    margin: !0
                }) / 2 : c.outerWidth({
                    margin: !0
                }) / 2);
                "show" == e && c.css("opacity", 0).css(g, "pos" == f ? -h : h);
                var i = {
                    opacity: "show" == e ? 1 : 0
                };
                i[g] = ("show" == e ? "pos" == f ? "+=" : "-=" : "pos" == f ? "-=" : "+=") + h, c.animate(i, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.options.easing,
                    complete: function() {
                        "hide" == e && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.explode = function(b) {
            return this.queue(function() {
                var c = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3,
                    d = b.options.pieces ? Math.round(Math.sqrt(b.options.pieces)) : 3;
                b.options.mode = "toggle" == b.options.mode ? a(this).is(":visible") ? "hide" : "show" : b.options.mode;
                var e = a(this).show().css("visibility", "hidden"),
                    f = e.offset();
                f.top -= parseInt(e.css("marginTop"), 10) || 0, f.left -= parseInt(e.css("marginLeft"), 10) || 0;
                for (var g = e.outerWidth(!0), h = e.outerHeight(!0), i = 0; i < c; i++)
                    for (var j = 0; j < d; j++) e.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -j * (g / d),
                        top: -i * (h / c)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: g / d,
                        height: h / c,
                        left: f.left + j * (g / d) + ("show" == b.options.mode ? (j - Math.floor(d / 2)) * (g / d) : 0),
                        top: f.top + i * (h / c) + ("show" == b.options.mode ? (i - Math.floor(c / 2)) * (h / c) : 0),
                        opacity: "show" == b.options.mode ? 0 : 1
                    }).animate({
                        left: f.left + j * (g / d) + ("show" == b.options.mode ? 0 : (j - Math.floor(d / 2)) * (g / d)),
                        top: f.top + i * (h / c) + ("show" == b.options.mode ? 0 : (i - Math.floor(c / 2)) * (h / c)),
                        opacity: "show" == b.options.mode ? 1 : 0
                    }, b.duration || 500);
                setTimeout(function() {
                    "show" == b.options.mode ? e.css({
                        visibility: "visible"
                    }) : e.css({
                        visibility: "visible"
                    }).hide(), b.callback && b.callback.apply(e[0]), e.dequeue(), a("div.ui-effects-explode").remove()
                }, b.duration || 500)
            })
        }
    }(jQuery),
    function(a) {
        a.effects.fade = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = a.effects.setMode(c, b.options.mode || "hide");
                c.animate({
                    opacity: d
                }, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.options.easing,
                    complete: function() {
                        b.callback && b.callback.apply(this, arguments), c.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.fold = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "hide"),
                    f = b.options.size || 15,
                    g = !!b.options.horizFirst,
                    h = b.duration ? b.duration / 2 : a.fx.speeds._default / 2;
                a.effects.save(c, d), c.show();
                var i = a.effects.createWrapper(c).css({
                        overflow: "hidden"
                    }),
                    j = "show" == e != g,
                    k = j ? ["width", "height"] : ["height", "width"];
                j = j ? [i.width(), i.height()] : [i.height(), i.width()];
                var l = /([0-9]+)%/.exec(f);
                l && (f = parseInt(l[1], 10) / 100 * j["hide" == e ? 0 : 1]), "show" == e && i.css(g ? {
                    height: 0,
                    width: f
                } : {
                    height: f,
                    width: 0
                }), g = {}, l = {}, g[k[0]] = "show" == e ? j[0] : f, l[k[1]] = "show" == e ? j[1] : 0, i.animate(g, h, b.options.easing).animate(l, h, b.options.easing, function() {
                    "hide" == e && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.highlight = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["backgroundImage", "backgroundColor", "opacity"],
                    e = a.effects.setMode(c, b.options.mode || "show"),
                    f = {
                        backgroundColor: c.css("backgroundColor")
                    };
                "hide" == e && (f.opacity = 0), a.effects.save(c, d), c.show().css({
                    backgroundImage: "none",
                    backgroundColor: b.options.color || "#ffff99"
                }).animate(f, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.options.easing,
                    complete: function() {
                        "hide" == e && c.hide(), a.effects.restore(c, d), "show" == e && !a.support.opacity && this.style.removeAttribute("filter"), b.callback && b.callback.apply(this, arguments), c.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.pulsate = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = a.effects.setMode(c, b.options.mode || "show");
                for (times = 2 * (b.options.times || 5) - 1, duration = b.duration ? b.duration / 2 : a.fx.speeds._default / 2, isVisible = c.is(":visible"), animateTo = 0, isVisible || (c.css("opacity", 0).show(), animateTo = 1), ("hide" == d && isVisible || "show" == d && !isVisible) && times--, d = 0; d < times; d++) c.animate({
                    opacity: animateTo
                }, duration, b.options.easing), animateTo = (animateTo + 1) % 2;
                c.animate({
                    opacity: animateTo
                }, duration, b.options.easing, function() {
                    0 == animateTo && c.hide(), b.callback && b.callback.apply(this, arguments)
                }), c.queue("fx", function() {
                    c.dequeue()
                }).dequeue()
            })
        }
    }(jQuery),
    function(a) {
        a.effects.puff = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = a.effects.setMode(c, b.options.mode || "hide"),
                    e = parseInt(b.options.percent, 10) || 150,
                    f = e / 100,
                    g = {
                        height: c.height(),
                        width: c.width()
                    };
                a.extend(b.options, {
                    fade: !0,
                    mode: d,
                    percent: "hide" == d ? e : 100,
                    from: "hide" == d ? g : {
                        height: g.height * f,
                        width: g.width * f
                    }
                }), c.effect("scale", b.options, b.duration, b.callback), c.dequeue()
            })
        }, a.effects.scale = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = a.extend(!0, {}, b.options),
                    e = a.effects.setMode(c, b.options.mode || "effect"),
                    f = parseInt(b.options.percent, 10) || (0 == parseInt(b.options.percent, 10) ? 0 : "hide" == e ? 0 : 100),
                    g = b.options.direction || "both",
                    h = b.options.origin;
                "effect" != e && (d.origin = h || ["middle", "center"], d.restore = !0), h = {
                    height: c.height(),
                    width: c.width()
                }, c.from = b.options.from || ("show" == e ? {
                    height: 0,
                    width: 0
                } : h), f = {
                    y: "horizontal" != g ? f / 100 : 1,
                    x: "vertical" != g ? f / 100 : 1
                }, c.to = {
                    height: h.height * f.y,
                    width: h.width * f.x
                }, b.options.fade && ("show" == e && (c.from.opacity = 0, c.to.opacity = 1), "hide" == e && (c.from.opacity = 1, c.to.opacity = 0)), d.from = c.from, d.to = c.to, d.mode = e, c.effect("size", d, b.duration, b.callback), c.dequeue()
            })
        }, a.effects.size = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    e = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    f = ["width", "height", "overflow"],
                    g = ["fontSize"],
                    h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    i = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    j = a.effects.setMode(c, b.options.mode || "effect"),
                    k = b.options.restore || !1,
                    l = b.options.scale || "both",
                    m = b.options.origin,
                    n = {
                        height: c.height(),
                        width: c.width()
                    };
                c.from = b.options.from || n, c.to = b.options.to || n, m && (m = a.effects.getBaseline(m, n), c.from.top = (n.height - c.from.height) * m.y, c.from.left = (n.width - c.from.width) * m.x, c.to.top = (n.height - c.to.height) * m.y, c.to.left = (n.width - c.to.width) * m.x);
                var o = {
                    from: {
                        y: c.from.height / n.height,
                        x: c.from.width / n.width
                    },
                    to: {
                        y: c.to.height / n.height,
                        x: c.to.width / n.width
                    }
                };
                "box" != l && "both" != l || (o.from.y != o.to.y && (d = d.concat(h), c.from = a.effects.setTransition(c, h, o.from.y, c.from), c.to = a.effects.setTransition(c, h, o.to.y, c.to)), o.from.x != o.to.x && (d = d.concat(i), c.from = a.effects.setTransition(c, i, o.from.x, c.from), c.to = a.effects.setTransition(c, i, o.to.x, c.to))), "content" != l && "both" != l || o.from.y != o.to.y && (d = d.concat(g), c.from = a.effects.setTransition(c, g, o.from.y, c.from), c.to = a.effects.setTransition(c, g, o.to.y, c.to)), a.effects.save(c, k ? d : e), c.show(), a.effects.createWrapper(c), c.css("overflow", "hidden").css(c.from), "content" != l && "both" != l || (h = h.concat(["marginTop", "marginBottom"]).concat(g), i = i.concat(["marginLeft", "marginRight"]), f = d.concat(h).concat(i), c.find("*[width]").each(function() {
                    child = a(this), k && a.effects.save(child, f);
                    var c = {
                        height: child.height(),
                        width: child.width()
                    };
                    child.from = {
                        height: c.height * o.from.y,
                        width: c.width * o.from.x
                    }, child.to = {
                        height: c.height * o.to.y,
                        width: c.width * o.to.x
                    }, o.from.y != o.to.y && (child.from = a.effects.setTransition(child, h, o.from.y, child.from), child.to = a.effects.setTransition(child, h, o.to.y, child.to)), o.from.x != o.to.x && (child.from = a.effects.setTransition(child, i, o.from.x, child.from), child.to = a.effects.setTransition(child, i, o.to.x, child.to)), child.css(child.from), child.animate(child.to, b.duration, b.options.easing, function() {
                        k && a.effects.restore(child, f)
                    })
                })), c.animate(c.to, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.options.easing,
                    complete: function() {
                        0 === c.to.opacity && c.css("opacity", c.from.opacity), "hide" == j && c.hide(), a.effects.restore(c, k ? d : e), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.shake = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"];
                a.effects.setMode(c, b.options.mode || "effect");
                var e = b.options.direction || "left",
                    f = b.options.distance || 20,
                    g = b.options.times || 3,
                    h = b.duration || b.options.duration || 140;
                a.effects.save(c, d), c.show(), a.effects.createWrapper(c);
                var i = "up" == e || "down" == e ? "top" : "left",
                    j = "up" == e || "left" == e ? "pos" : "neg";
                e = {};
                var k = {},
                    l = {};
                for (e[i] = ("pos" == j ? "-=" : "+=") + f, k[i] = ("pos" == j ? "+=" : "-=") + 2 * f, l[i] = ("pos" == j ? "-=" : "+=") + 2 * f, c.animate(e, h, b.options.easing), f = 1; f < g; f++) c.animate(k, h, b.options.easing).animate(l, h, b.options.easing);
                c.animate(k, h, b.options.easing).animate(e, h / 2, b.options.easing, function() {
                    a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments)
                }), c.queue("fx", function() {
                    c.dequeue()
                }), c.dequeue()
            })
        }
    }(jQuery),
    function(a) {
        a.effects.slide = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = ["position", "top", "bottom", "left", "right"],
                    e = a.effects.setMode(c, b.options.mode || "show"),
                    f = b.options.direction || "left";
                a.effects.save(c, d), c.show(), a.effects.createWrapper(c).css({
                    overflow: "hidden"
                });
                var g = "up" == f || "down" == f ? "top" : "left";
                f = "up" == f || "left" == f ? "pos" : "neg";
                var h = b.options.distance || ("top" == g ? c.outerHeight({
                    margin: !0
                }) : c.outerWidth({
                    margin: !0
                }));
                "show" == e && c.css(g, "pos" == f ? isNaN(h) ? "-" + h : -h : h);
                var i = {};
                i[g] = ("show" == e ? "pos" == f ? "+=" : "-=" : "pos" == f ? "-=" : "+=") + h, c.animate(i, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.options.easing,
                    complete: function() {
                        "hide" == e && c.hide(), a.effects.restore(c, d), a.effects.removeWrapper(c), b.callback && b.callback.apply(this, arguments), c.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(a) {
        a.effects.transfer = function(b) {
            return this.queue(function() {
                var c = a(this),
                    d = a(b.options.to),
                    e = d.offset();
                d = {
                    top: e.top,
                    left: e.left,
                    height: d.innerHeight(),
                    width: d.innerWidth()
                }, e = c.offset();
                var f = a('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(b.options.className).css({
                    top: e.top,
                    left: e.left,
                    height: c.innerHeight(),
                    width: c.innerWidth(),
                    position: "absolute"
                }).animate(d, b.duration, b.options.easing, function() {
                    f.remove(), b.callback && b.callback.apply(c[0], arguments), c.dequeue()
                })
            })
        }
    }(jQuery),
    function(a) {
        a.widget("ui.accordion", {
            options: {
                active: 0,
                animated: "slide",
                autoHeight: !0,
                clearStyle: !1,
                collapsible: !1,
                event: "click",
                fillSpace: !1,
                header: "> li > :first-child,> :not(li):even",
                icons: {
                    header: "ui-icon-triangle-1-e",
                    headerSelected: "ui-icon-triangle-1-s"
                },
                navigation: !1,
                navigationFilter: function() {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            },
            _create: function() {
                var b = this,
                    c = b.options;
                if (b.running = 0, b.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), b.headers = b.element.find(c.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                        c.disabled || a(this).addClass("ui-state-hover")
                    }).bind("mouseleave.accordion", function() {
                        c.disabled || a(this).removeClass("ui-state-hover")
                    }).bind("focus.accordion", function() {
                        c.disabled || a(this).addClass("ui-state-focus")
                    }).bind("blur.accordion", function() {
                        c.disabled || a(this).removeClass("ui-state-focus")
                    }), b.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), c.navigation) {
                    var d = b.element.find("a").filter(c.navigationFilter).eq(0);
                    if (d.length) {
                        var e = d.closest(".ui-accordion-header");
                        b.active = e.length ? e : d.closest(".ui-accordion-content").prev()
                    }
                }
                b.active = b._findActive(b.active || c.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), b.active.next().addClass("ui-accordion-content-active"), b._createIcons(), b.resize(), b.element.attr("role", "tablist"), b.headers.attr("role", "tab").bind("keydown.accordion", function(a) {
                    return b._keydown(a)
                }).next().attr("role", "tabpanel"), b.headers.not(b.active || "").attr({
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().hide(), b.active.length ? b.active.attr({
                    "aria-expanded": "true",
                    tabIndex: 0
                }) : b.headers.eq(0).attr("tabIndex", 0), a.browser.safari || b.headers.find("a").attr("tabIndex", -1), c.event && b.headers.bind(c.event.split(" ").join(".accordion ") + ".accordion", function(a) {
                    b._clickHandler.call(b, a, this), a.preventDefault()
                })
            },
            _createIcons: function() {
                var b = this.options;
                b.icons && (a("<span></span>").addClass("ui-icon " + b.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(b.icons.header).toggleClass(b.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
            },
            destroy: function() {
                var b = this.options;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
                var c = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
                return (b.autoHeight || b.fillHeight) && c.css("height", ""), a.Widget.prototype.destroy.call(this)
            },
            _setOption: function(b, c) {
                a.Widget.prototype._setOption.apply(this, arguments), "active" == b && this.activate(c), "icons" == b && (this._destroyIcons(), c && this._createIcons()), "disabled" == b && this.headers.add(this.headers.next())[c ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
            },
            _keydown: function(b) {
                if (!(this.options.disabled || b.altKey || b.ctrlKey)) {
                    var c = a.ui.keyCode,
                        d = this.headers.length,
                        e = this.headers.index(b.target),
                        f = !1;
                    switch (b.keyCode) {
                        case c.RIGHT:
                        case c.DOWN:
                            f = this.headers[(e + 1) % d];
                            break;
                        case c.LEFT:
                        case c.UP:
                            f = this.headers[(e - 1 + d) % d];
                            break;
                        case c.SPACE:
                        case c.ENTER:
                            this._clickHandler({
                                target: b.target
                            }, b.target), b.preventDefault()
                    }
                    return !f || (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), !1)
                }
            },
            resize: function() {
                var b, c = this.options;
                if (c.fillSpace) {
                    if (a.browser.msie) {
                        var d = this.element.parent().css("overflow");
                        this.element.parent().css("overflow", "hidden")
                    }
                    b = this.element.parent().height(), a.browser.msie && this.element.parent().css("overflow", d), this.headers.each(function() {
                        b -= a(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
                    }).css("overflow", "auto")
                } else c.autoHeight && (b = 0, this.headers.next().each(function() {
                    b = Math.max(b, a(this).height("").height())
                }).height(b));
                return this
            },
            activate: function(a) {
                return this.options.active = a, a = this._findActive(a)[0], this._clickHandler({
                    target: a
                }, a), this
            },
            _findActive: function(b) {
                return b ? "number" == typeof b ? this.headers.filter(":eq(" + b + ")") : this.headers.not(this.headers.not(b)) : b === !1 ? a([]) : this.headers.filter(":eq(0)")
            },
            _clickHandler: function(b, c) {
                var d = this.options;
                if (!d.disabled)
                    if (b.target) {
                        if (b = a(b.currentTarget || c), c = b[0] === this.active[0], d.active = (!d.collapsible || !c) && this.headers.index(b), !(this.running || !d.collapsible && c)) {
                            var e = this.active;
                            i = b.next(), g = this.active.next(), h = {
                                options: d,
                                newHeader: c && d.collapsible ? a([]) : b,
                                oldHeader: this.active,
                                newContent: c && d.collapsible ? a([]) : i,
                                oldContent: g
                            };
                            var f = this.headers.index(this.active[0]) > this.headers.index(b[0]);
                            this.active = c ? a([]) : b, this._toggle(i, g, h, c, f), e.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), c || (b.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected), b.next().addClass("ui-accordion-content-active"))
                        }
                    } else if (d.collapsible) {
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header), this.active.next().addClass("ui-accordion-content-active");
                    var g = this.active.next(),
                        h = {
                            options: d,
                            newHeader: a([]),
                            oldHeader: d.active,
                            newContent: a([]),
                            oldContent: g
                        },
                        i = this.active = a([]);
                    this._toggle(i, g, h)
                }
            },
            _toggle: function(b, c, d, e, f) {
                var g = this,
                    h = g.options;
                g.toShow = b, g.toHide = c, g.data = d;
                var i = function() {
                    if (g) return g._completed.apply(g, arguments)
                };
                if (g._trigger("changestart", null, g.data), g.running = 0 === c.size() ? b.size() : c.size(), h.animated) {
                    d = {}, d = h.collapsible && e ? {
                        toShow: a([]),
                        toHide: c,
                        complete: i,
                        down: f,
                        autoHeight: h.autoHeight || h.fillSpace
                    } : {
                        toShow: b,
                        toHide: c,
                        complete: i,
                        down: f,
                        autoHeight: h.autoHeight || h.fillSpace
                    }, h.proxied || (h.proxied = h.animated), h.proxiedDuration || (h.proxiedDuration = h.duration), h.animated = a.isFunction(h.proxied) ? h.proxied(d) : h.proxied, h.duration = a.isFunction(h.proxiedDuration) ? h.proxiedDuration(d) : h.proxiedDuration, e = a.ui.accordion.animations;
                    var j = h.duration,
                        k = h.animated;
                    !k || e[k] || a.easing[k] || (k = "slide"), e[k] || (e[k] = function(a) {
                        this.slide(a, {
                            easing: k,
                            duration: j || 700
                        })
                    }), e[k](d)
                } else h.collapsible && e ? b.toggle() : (c.hide(), b.show()), i(!0);
                c.prev().attr({
                    "aria-expanded": "false",
                    tabIndex: -1
                }).blur(), b.prev().attr({
                    "aria-expanded": "true",
                    tabIndex: 0
                }).focus()
            },
            _completed: function(a) {
                this.running = a ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                    height: "",
                    overflow: ""
                }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
            }
        }), a.extend(a.ui.accordion, {
            version: "1.8.9",
            animations: {
                slide: function(b, c) {
                    if (b = a.extend({
                            easing: "swing",
                            duration: 300
                        }, b, c), b.toHide.size())
                        if (b.toShow.size()) {
                            var d, e = b.toShow.css("overflow"),
                                f = 0,
                                g = {},
                                h = {};
                            c = b.toShow, d = c[0].style.width, c.width(parseInt(c.parent().width(), 10) - parseInt(c.css("paddingLeft"), 10) - parseInt(c.css("paddingRight"), 10) - (parseInt(c.css("borderLeftWidth"), 10) || 0) - (parseInt(c.css("borderRightWidth"), 10) || 0)), a.each(["height", "paddingTop", "paddingBottom"], function(c, d) {
                                h[d] = "hide", c = ("" + a.css(b.toShow[0], d)).match(/^([\d+-.]+)(.*)$/), g[d] = {
                                    value: c[1],
                                    unit: c[2] || "px"
                                }
                            }), b.toShow.css({
                                height: 0,
                                overflow: "hidden"
                            }).show(), b.toHide.filter(":hidden").each(b.complete).end().filter(":visible").animate(h, {
                                step: function(a, c) {
                                    "height" == c.prop && (f = c.end - c.start === 0 ? 0 : (c.now - c.start) / (c.end - c.start)), b.toShow[0].style[c.prop] = f * g[c.prop].value + g[c.prop].unit
                                },
                                duration: b.duration,
                                easing: b.easing,
                                complete: function() {
                                    b.autoHeight || b.toShow.css("height", ""), b.toShow.css({
                                        width: d,
                                        overflow: e
                                    }), b.complete()
                                }
                            })
                        } else b.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, b);
                    else b.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, b)
                },
                bounceslide: function(a) {
                    this.slide(a, {
                        easing: a.down ? "easeOutBounce" : "swing",
                        duration: a.down ? 1e3 : 200
                    })
                }
            }
        })
    }(jQuery),
    function(a) {
        a.widget("ui.autocomplete", {
            options: {
                appendTo: "body",
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null
            },
            pending: 0,
            _create: function() {
                var b, c = this,
                    d = this.element[0].ownerDocument;
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                    role: "textbox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "true"
                }).bind("keydown.autocomplete", function(d) {
                    if (!c.options.disabled && !c.element.attr("readonly")) {
                        b = !1;
                        var e = a.ui.keyCode;
                        switch (d.keyCode) {
                            case e.PAGE_UP:
                                c._move("previousPage", d);
                                break;
                            case e.PAGE_DOWN:
                                c._move("nextPage", d);
                                break;
                            case e.UP:
                                c._move("previous", d), d.preventDefault();
                                break;
                            case e.DOWN:
                                c._move("next", d), d.preventDefault();
                                break;
                            case e.ENTER:
                            case e.NUMPAD_ENTER:
                                c.menu.active && (b = !0, d.preventDefault());
                            case e.TAB:
                                if (!c.menu.active) return;
                                c.menu.select(d);
                                break;
                            case e.ESCAPE:
                                c.element.val(c.term), c.close(d);
                                break;
                            default:
                                clearTimeout(c.searching), c.searching = setTimeout(function() {
                                    c.term != c.element.val() && (c.selectedItem = null, c.search(null, d))
                                }, c.options.delay)
                        }
                    }
                }).bind("keypress.autocomplete", function(a) {
                    b && (b = !1, a.preventDefault())
                }).bind("focus.autocomplete", function() {
                    c.options.disabled || (c.selectedItem = null, c.previous = c.element.val())
                }).bind("blur.autocomplete", function(a) {
                    c.options.disabled || (clearTimeout(c.searching), c.closing = setTimeout(function() {
                        c.close(a), c._change(a)
                    }, 150))
                }), this._initSource(), this.response = function() {
                    return c._response.apply(c, arguments)
                }, this.menu = a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo || "body", d)[0]).mousedown(function(b) {
                    var d = c.menu.element[0];
                    a(b.target).closest(".ui-menu-item").length || setTimeout(function() {
                        a(document).one("mousedown", function(b) {
                            b.target !== c.element[0] && b.target !== d && !a.ui.contains(d, b.target) && c.close()
                        })
                    }, 1), setTimeout(function() {
                        clearTimeout(c.closing)
                    }, 13)
                }).menu({
                    focus: function(a, b) {
                        b = b.item.data("item.autocomplete"), !1 !== c._trigger("focus", a, {
                            item: b
                        }) && /^key/.test(a.originalEvent.type) && c.element.val(b.value)
                    },
                    selected: function(a, b) {
                        var e = b.item.data("item.autocomplete"),
                            f = c.previous;
                        c.element[0] !== d.activeElement && (c.element.focus(), c.previous = f, setTimeout(function() {
                            c.previous = f, c.selectedItem = e
                        }, 1)), !1 !== c._trigger("select", a, {
                            item: e
                        }) && c.element.val(e.value), c.term = c.element.val(), c.close(a), c.selectedItem = e
                    },
                    blur: function() {
                        c.menu.element.is(":visible") && c.element.val() !== c.term && c.element.val(c.term)
                    }
                }).zIndex(this.element.zIndex() + 1).css({
                    top: 0,
                    left: 0
                }).hide().data("menu"), a.fn.bgiframe && this.menu.element.bgiframe()
            },
            destroy: function() {
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), a.Widget.prototype.destroy.call(this)
            },
            _setOption: function(b, c) {
                a.Widget.prototype._setOption.apply(this, arguments), "source" === b && this._initSource(), "appendTo" === b && this.menu.element.appendTo(a(c || "body", this.element[0].ownerDocument)[0]), "disabled" === b && c && this.xhr && this.xhr.abort()
            },
            _initSource: function() {
                var b, c, d = this;
                a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
                    d(a.ui.autocomplete.filter(b, c.term))
                }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
                    d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                        url: c,
                        data: b,
                        dataType: "json",
                        success: function(a, b, c) {
                            c === d.xhr && e(a), d.xhr = null
                        },
                        error: function(a) {
                            a === d.xhr && e([]), d.xhr = null
                        }
                    })
                }) : this.source = this.options.source
            },
            search: function(a, b) {
                return a = null != a ? a : this.element.val(), this.term = this.element.val(), a.length < this.options.minLength ? this.close(b) : (clearTimeout(this.closing), this._trigger("search", b) !== !1 ? this._search(a) : void 0)
            },
            _search: function(a) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                    term: a
                }, this.response)
            },
            _response: function(a) {
                !this.options.disabled && a && a.length ? (a = this._normalize(a), this._suggest(a), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            },
            close: function(a) {
                clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", a))
            },
            _change: function(a) {
                this.previous !== this.element.val() && this._trigger("change", a, {
                    item: this.selectedItem
                })
            },
            _normalize: function(b) {
                return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
                    return "string" == typeof b ? {
                        label: b,
                        value: b
                    } : a.extend({
                        label: b.label || b.value,
                        value: b.value || b.label
                    }, b)
                })
            },
            _suggest: function(b) {
                var c = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(c, b), this.menu.deactivate(), this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({
                    of: this.element
                }, this.options.position))
            },
            _resizeMenu: function() {
                var a = this.menu.element;
                a.outerWidth(Math.max(a.width("").outerWidth(), this.element.outerWidth()))
            },
            _renderMenu: function(b, c) {
                var d = this;
                a.each(c, function(a, c) {
                    d._renderItem(b, c)
                })
            },
            _renderItem: function(b, c) {
                return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>").text(c.label)).appendTo(b)
            },
            _move: function(a, b) {
                this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a) ? (this.element.val(this.term), this.menu.deactivate()) : this.menu[a](b) : this.search(null, b)
            },
            widget: function() {
                return this.menu.element
            }
        }), a.extend(a.ui.autocomplete, {
            escapeRegex: function(a) {
                return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            },
            filter: function(b, c) {
                var d = new RegExp(a.ui.autocomplete.escapeRegex(c), "i");
                return a.grep(b, function(a) {
                    return d.test(a.label || a.value || a)
                })
            }
        })
    }(jQuery),
    function(a) {
        a.widget("ui.menu", {
            _create: function() {
                var b = this;
                this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                    role: "listbox",
                    "aria-activedescendant": "ui-active-menuitem"
                }).click(function(c) {
                    a(c.target).closest(".ui-menu-item a").length && (c.preventDefault(), b.select(c))
                }), this.refresh()
            },
            refresh: function() {
                var b = this;
                this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(c) {
                    b.activate(c, a(this).parent())
                }).mouseleave(function() {
                    b.deactivate()
                })
            },
            activate: function(a, b) {
                if (this.deactivate(), this.hasScroll()) {
                    var c = b.offset().top - this.element.offset().top,
                        d = this.element.attr("scrollTop"),
                        e = this.element.height();
                    c < 0 ? this.element.attr("scrollTop", d + c) : c >= e && this.element.attr("scrollTop", d + c - e + b.height())
                }
                this.active = b.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", a, {
                    item: b
                })
            },
            deactivate: function() {
                this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
            },
            next: function(a) {
                this.move("next", ".ui-menu-item:first", a)
            },
            previous: function(a) {
                this.move("prev", ".ui-menu-item:last", a)
            },
            first: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            last: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            move: function(a, b, c) {
                this.active ? (a = this.active[a + "All"](".ui-menu-item").eq(0), a.length ? this.activate(c, a) : this.activate(c, this.element.children(b))) : this.activate(c, this.element.children(b))
            },
            nextPage: function(b) {
                if (this.hasScroll())
                    if (!this.active || this.last()) this.activate(b, this.element.children(".ui-menu-item:first"));
                    else {
                        var c = this.active.offset().top,
                            d = this.element.height(),
                            e = this.element.children(".ui-menu-item").filter(function() {
                                var b = a(this).offset().top - c - d + a(this).height();
                                return b < 10 && b > -10
                            });
                        e.length || (e = this.element.children(".ui-menu-item:last")), this.activate(b, e)
                    } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
            },
            previousPage: function(b) {
                if (this.hasScroll())
                    if (!this.active || this.first()) this.activate(b, this.element.children(".ui-menu-item:last"));
                    else {
                        var c = this.active.offset().top,
                            d = this.element.height();
                        result = this.element.children(".ui-menu-item").filter(function() {
                            var b = a(this).offset().top - c + d - a(this).height();
                            return b < 10 && b > -10
                        }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(b, result)
                    } else this.activate(b, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
            },
            hasScroll: function() {
                return this.element.height() < this.element.attr("scrollHeight")
            },
            select: function(a) {
                this._trigger("selected", a, {
                    item: this.active
                })
            }
        })
    }(jQuery),
    function(a) {
        var b, c = function(b) {
                a(":ui-button", b.target.form).each(function() {
                    var b = a(this).data("button");
                    setTimeout(function() {
                        b.refresh()
                    }, 1)
                })
            },
            d = function(b) {
                var c = b.name,
                    d = b.form,
                    e = a([]);
                return c && (e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function() {
                    return !this.form
                })), e
            };
        a.widget("ui.button", {
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset.button").bind("reset.button", c), "boolean" != typeof this.options.disabled && (this.options.disabled = this.element.attr("disabled")), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var e = this,
                    f = this.options,
                    g = "checkbox" === this.type || "radio" === this.type,
                    h = "ui-state-hover" + (g ? "" : " ui-state-active");
                null === f.label && (f.label = this.buttonElement.html()), this.element.is(":disabled") && (f.disabled = !0), this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function() {
                    f.disabled || (a(this).addClass("ui-state-hover"), this === b && a(this).addClass("ui-state-active"))
                }).bind("mouseleave.button", function() {
                    f.disabled || a(this).removeClass(h)
                }).bind("focus.button", function() {
                    a(this).addClass("ui-state-focus")
                }).bind("blur.button", function() {
                    a(this).removeClass("ui-state-focus")
                }), g && this.element.bind("change.button", function() {
                    e.refresh()
                }), "checkbox" === this.type ? this.buttonElement.bind("click.button", function() {
                    return !f.disabled && (a(this).toggleClass("ui-state-active"), void e.buttonElement.attr("aria-pressed", e.element[0].checked))
                }) : "radio" === this.type ? this.buttonElement.bind("click.button", function() {
                    if (f.disabled) return !1;
                    a(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", !0);
                    var b = e.element[0];
                    d(b).not(b).map(function() {
                        return a(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", !1)
                }) : (this.buttonElement.bind("mousedown.button", function() {
                    return !f.disabled && (a(this).addClass("ui-state-active"), b = this, void a(document).one("mouseup", function() {
                        b = null
                    }))
                }).bind("mouseup.button", function() {
                    return !f.disabled && void a(this).removeClass("ui-state-active")
                }).bind("keydown.button", function(b) {
                    return !f.disabled && void(b.keyCode != a.ui.keyCode.SPACE && b.keyCode != a.ui.keyCode.ENTER || a(this).addClass("ui-state-active"))
                }).bind("keyup.button", function() {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                })), this._setOption("disabled", f.disabled)
            },
            _determineButtonType: function() {
                if (this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type) {
                    this.buttonElement = this.element.parents().last().find("label[for=" + this.element.attr("id") + "]"), this.element.addClass("ui-helper-hidden-accessible");
                    var a = this.element.is(":checked");
                    a && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", a)
                } else this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), a.Widget.prototype.destroy.call(this)
            },
            _setOption: function(b, c) {
                a.Widget.prototype._setOption.apply(this, arguments), "disabled" === b && (c ? this.element.attr("disabled", !0) : this.element.removeAttr("disabled")), this._resetButton()
            },
            refresh: function() {
                var b = this.element.is(":disabled");
                b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? d(this.element[0]).each(function() {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", !0) : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", !1)
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", !0) : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", !1))
            },
            _resetButton: function() {
                if ("input" === this.type) this.options.label && this.element.val(this.options.label);
                else {
                    var b = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                        c = a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),
                        d = this.options.icons,
                        e = d.primary && d.secondary;
                    d.primary || d.secondary ? (b.addClass("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (b.addClass(e ? "ui-button-icons-only" : "ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary"), this.hasTitle || b.attr("title", c))) : b.addClass("ui-button-text-only")
                }
            }
        }), a.widget("ui.buttonset", {
            options: {
                items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(b, c) {
                "disabled" === b && this.buttons.button("option", b, c), a.Widget.prototype._setOption.apply(this, arguments)
            },
            refresh: function() {
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()
            },
            destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), a.Widget.prototype.destroy.call(this)
            }
        })
    }(jQuery),
    function(b, c) {
        function f() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._inDialog = this._datepickerShowing = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1
            }, b.extend(this._defaults, this.regional[""]), this.dpDiv = b('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
        }

        function g(a, d) {
            b.extend(a, d);
            for (var e in d) null != d[e] && d[e] != c || (a[e] = d[e]);
            return a
        }
        b.extend(b.ui, {
            datepicker: {
                version: "1.8.9"
            }
        });
        var e = (new Date).getTime();
        b.extend(f.prototype, {
            markerClassName: "hasDatepicker",
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(a) {
                return g(this._defaults, a || {}), this
            },
            _attachDatepicker: function(a, d) {
                var h = null;
                for (var i in this._defaults) {
                    var j = a.getAttribute("date:" + i);
                    if (j) {
                        h = h || {};
                        try {
                            h[i] = eval(j)
                        } catch (a) {
                            h[i] = j
                        }
                    }
                }
                i = a.nodeName.toLowerCase(), j = "div" == i || "span" == i, a.id || (this.uuid += 1, a.id = "dp" + this.uuid);
                var q = this._newInst(b(a), j);
                q.settings = b.extend({}, d || {}, h || {}), "input" == i ? this._connectDatepicker(a, q) : j && this._inlineDatepicker(a, q)
            },
            _newInst: function(a, c) {
                return {
                    id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                    input: a,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: c,
                    dpDiv: c ? b('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>') : this.dpDiv
                }
            },
            _connectDatepicker: function(a, c) {
                var d = b(a);
                c.append = b([]), c.trigger = b([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(a, b, d) {
                    c.settings[b] = d
                }).bind("getData.datepicker", function(a, b) {
                    return this._get(c, b)
                }), this._autoSize(c), b.data(a, "datepicker", c))
            },
            _attachments: function(a, c) {
                var d = this._get(c, "appendText"),
                    e = this._get(c, "isRTL");
                if (c.append && c.append.remove(), d && (c.append = b('<span class="' + this._appendClass + '">' + d + "</span>"), a[e ? "before" : "after"](c.append)), a.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), "focus" != d && "both" != d || a.focus(this._showDatepicker), "button" == d || "both" == d) {
                    d = this._get(c, "buttonText");
                    var f = this._get(c, "buttonImage");
                    c.trigger = b(this._get(c, "buttonImageOnly") ? b("<img/>").addClass(this._triggerClass).attr({
                        src: f,
                        alt: d,
                        title: d
                    }) : b('<button type="button"></button>').addClass(this._triggerClass).html("" == f ? d : b("<img/>").attr({
                        src: f,
                        alt: d,
                        title: d
                    }))), a[e ? "before" : "after"](c.trigger), c.trigger.click(function() {
                        return b.datepicker._datepickerShowing && b.datepicker._lastInput == a[0] ? b.datepicker._hideDatepicker() : b.datepicker._showDatepicker(a[0]), !1
                    })
                }
            },
            _autoSize: function(a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b = new Date(2009, 11, 20),
                        c = this._get(a, "dateFormat");
                    if (c.match(/[DM]/)) {
                        var d = function(a) {
                            for (var b = 0, c = 0, d = 0; d < a.length; d++) a[d].length > b && (b = a[d].length, c = d);
                            return c
                        };
                        b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                    }
                    a.input.attr("size", this._formatDate(a, b).length)
                }
            },
            _inlineDatepicker: function(a, c) {
                var d = b(a);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv).bind("setData.datepicker", function(a, b, d) {
                    c.settings[b] = d
                }).bind("getData.datepicker", function(a, b) {
                    return this._get(c, b)
                }), b.data(a, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.dpDiv.show())
            },
            _dialogDatepicker: function(a, c, d, e, f) {
                return a = this._dialogInst, a || (this.uuid += 1, this._dialogInput = b('<input type="text" id="dp' + this.uuid + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), b("body").append(this._dialogInput), a = this._dialogInst = this._newInst(this._dialogInput, !1), a.settings = {}, b.data(this._dialogInput[0], "datepicker", a)), g(a.settings, e || {}), c = c && c.constructor == Date ? this._formatDate(a, c) : c, this._dialogInput.val(c), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), b.blockUI && b.blockUI(this.dpDiv), b.data(this._dialogInput[0], "datepicker", a), this
            },
            _destroyDatepicker: function(a) {
                var c = b(a),
                    d = b.data(a, "datepicker");
                if (c.hasClass(this.markerClassName)) {
                    var e = a.nodeName.toLowerCase();
                    b.removeData(a, "datepicker"), "input" == e ? (d.append.remove(), d.trigger.remove(), c.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" != e && "span" != e || c.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function(a) {
                var c = b(a),
                    d = b.data(a, "datepicker");
                if (c.hasClass(this.markerClassName)) {
                    var e = a.nodeName.toLowerCase();
                    "input" == e ? (a.disabled = !1, d.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })) : "div" != e && "span" != e || c.children("." + this._inlineClass).children().removeClass("ui-state-disabled"), this._disabledInputs = b.map(this._disabledInputs, function(b) {
                        return b == a ? null : b
                    })
                }
            },
            _disableDatepicker: function(a) {
                var c = b(a),
                    d = b.data(a, "datepicker");
                if (c.hasClass(this.markerClassName)) {
                    var e = a.nodeName.toLowerCase();
                    "input" == e ? (a.disabled = !0, d.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })) : "div" != e && "span" != e || c.children("." + this._inlineClass).children().addClass("ui-state-disabled"), this._disabledInputs = b.map(this._disabledInputs, function(b) {
                        return b == a ? null : b
                    }), this._disabledInputs[this._disabledInputs.length] = a
                }
            },
            _isDisabledDatepicker: function(a) {
                if (!a) return !1;
                for (var b = 0; b < this._disabledInputs.length; b++)
                    if (this._disabledInputs[b] == a) return !0;
                return !1
            },
            _getInst: function(a) {
                try {
                    return b.data(a, "datepicker")
                } catch (a) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(a, c, d) {
                var e = this._getInst(a);
                if (2 == arguments.length && "string" == typeof c) return "defaults" == c ? b.extend({}, b.datepicker._defaults) : e ? "all" == c ? b.extend({}, e.settings) : this._get(e, c) : null;
                var f = c || {};
                if ("string" == typeof c && (f = {}, f[c] = d), e) {
                    this._curInst == e && this._hideDatepicker();
                    var h = this._getDateDatepicker(a, !0);
                    g(e.settings, f), this._attachments(b(a), e), this._autoSize(e), this._setDateDatepicker(a, h), this._updateDatepicker(e)
                }
            },
            _changeDatepicker: function(a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function(a) {
                (a = this._getInst(a)) && this._updateDatepicker(a)
            },
            _setDateDatepicker: function(a, b) {
                (a = this._getInst(a)) && (this._setDate(a, b), this._updateDatepicker(a), this._updateAlternate(a))
            },
            _getDateDatepicker: function(a, b) {
                return (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b), a ? this._getDate(a) : null
            },
            _doKeyDown: function(a) {
                var c = b.datepicker._getInst(a.target),
                    d = !0,
                    e = c.dpDiv.is(".ui-datepicker-rtl");
                if (c._keyEvent = !0, b.datepicker._datepickerShowing) switch (a.keyCode) {
                    case 9:
                        b.datepicker._hideDatepicker(), d = !1;
                        break;
                    case 13:
                        return d = b("td." + b.datepicker._dayOverClass + ":not(." + b.datepicker._currentClass + ")", c.dpDiv), d[0] ? b.datepicker._selectDay(a.target, c.selectedMonth, c.selectedYear, d[0]) : b.datepicker._hideDatepicker(), !1;
                    case 27:
                        b.datepicker._hideDatepicker();
                        break;
                    case 33:
                        b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(c, "stepBigMonths") : -b.datepicker._get(c, "stepMonths"), "M");
                        break;
                    case 34:
                        b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(c, "stepBigMonths") : +b.datepicker._get(c, "stepMonths"), "M");
                        break;
                    case 35:
                        (a.ctrlKey || a.metaKey) && b.datepicker._clearDate(a.target), d = a.ctrlKey || a.metaKey;
                        break;
                    case 36:
                        (a.ctrlKey || a.metaKey) && b.datepicker._gotoToday(a.target), d = a.ctrlKey || a.metaKey;
                        break;
                    case 37:
                        (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, e ? 1 : -1, "D"), d = a.ctrlKey || a.metaKey, a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? -b.datepicker._get(c, "stepBigMonths") : -b.datepicker._get(c, "stepMonths"), "M");
                        break;
                    case 38:
                        (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, -7, "D"), d = a.ctrlKey || a.metaKey;
                        break;
                    case 39:
                        (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, e ? -1 : 1, "D"), d = a.ctrlKey || a.metaKey, a.originalEvent.altKey && b.datepicker._adjustDate(a.target, a.ctrlKey ? +b.datepicker._get(c, "stepBigMonths") : +b.datepicker._get(c, "stepMonths"), "M");
                        break;
                    case 40:
                        (a.ctrlKey || a.metaKey) && b.datepicker._adjustDate(a.target, 7, "D"), d = a.ctrlKey || a.metaKey;
                        break;
                    default:
                        d = !1
                } else 36 == a.keyCode && a.ctrlKey ? b.datepicker._showDatepicker(this) : d = !1;
                d && (a.preventDefault(), a.stopPropagation())
            },
            _doKeyPress: function(a) {
                var d = b.datepicker._getInst(a.target);
                if (b.datepicker._get(d, "constrainInput")) {
                    d = b.datepicker._possibleChars(b.datepicker._get(d, "dateFormat"));
                    var e = String.fromCharCode(a.charCode == c ? a.keyCode : a.charCode);
                    return a.ctrlKey || a.metaKey || e < " " || !d || d.indexOf(e) > -1
                }
            },
            _doKeyUp: function(a) {
                if (a = b.datepicker._getInst(a.target), a.input.val() != a.lastVal) try {
                    b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, b.datepicker._getFormatConfig(a)) && (b.datepicker._setDateFromField(a), b.datepicker._updateAlternate(a), b.datepicker._updateDatepicker(a))
                } catch (a) {
                    b.datepicker.log(a)
                }
                return !0
            },
            _showDatepicker: function(a) {
                if (a = a.target || a, "input" != a.nodeName.toLowerCase() && (a = b("input", a.parentNode)[0]), !b.datepicker._isDisabledDatepicker(a) && b.datepicker._lastInput != a) {
                    var c = b.datepicker._getInst(a);
                    b.datepicker._curInst && b.datepicker._curInst != c && b.datepicker._curInst.dpDiv.stop(!0, !0);
                    var d = b.datepicker._get(c, "beforeShow");
                    g(c.settings, d ? d.apply(a, [a, c]) : {}), c.lastVal = null, b.datepicker._lastInput = a, b.datepicker._setDateFromField(c), b.datepicker._inDialog && (a.value = ""), b.datepicker._pos || (b.datepicker._pos = b.datepicker._findPos(a), b.datepicker._pos[1] += a.offsetHeight);
                    var e = !1;
                    if (b(a).parents().each(function() {
                            return e |= "fixed" == b(this).css("position"), !e
                        }), e && b.browser.opera && (b.datepicker._pos[0] -= document.documentElement.scrollLeft, b.datepicker._pos[1] -= document.documentElement.scrollTop), d = {
                            left: b.datepicker._pos[0],
                            top: b.datepicker._pos[1]
                        }, b.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                            position: "absolute",
                            display: "block",
                            top: "-1000px"
                        }), b.datepicker._updateDatepicker(c), d = b.datepicker._checkOffset(c, d, e), c.dpDiv.css({
                            position: b.datepicker._inDialog && b.blockUI ? "static" : e ? "fixed" : "absolute",
                            display: "none",
                            left: d.left + "px",
                            top: d.top + "px"
                        }), !c.inline) {
                        d = b.datepicker._get(c, "showAnim");
                        var f = b.datepicker._get(c, "duration"),
                            h = function() {
                                b.datepicker._datepickerShowing = !0;
                                var a = c.dpDiv.find("iframe.ui-datepicker-cover");
                                if (a.length) {
                                    var d = b.datepicker._getBorders(c.dpDiv);
                                    a.css({
                                        left: -d[0],
                                        top: -d[1],
                                        width: c.dpDiv.outerWidth(),
                                        height: c.dpDiv.outerHeight()
                                    })
                                }
                            };
                        c.dpDiv.zIndex(b(a).zIndex() + 1), b.effects && b.effects[d] ? c.dpDiv.show(d, b.datepicker._get(c, "showOptions"), f, h) : c.dpDiv[d || "show"](d ? f : null, h), d && f || h(), c.input.is(":visible") && !c.input.is(":disabled") && c.input.focus(), b.datepicker._curInst = c
                    }
                }
            },
            _updateDatepicker: function(a) {
                var c = this,
                    d = b.datepicker._getBorders(a.dpDiv);
                a.dpDiv.empty().append(this._generateHTML(a));
                var e = a.dpDiv.find("iframe.ui-datepicker-cover");
                if (e.length && e.css({
                        left: -d[0],
                        top: -d[1],
                        width: a.dpDiv.outerWidth(),
                        height: a.dpDiv.outerHeight()
                    }), a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout", function() {
                        b(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && b(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && b(this).removeClass("ui-datepicker-next-hover")
                    }).bind("mouseover", function() {
                        c._isDisabledDatepicker(a.inline ? a.dpDiv.parent()[0] : a.input[0]) || (b(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), b(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") != -1 && b(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") != -1 && b(this).addClass("ui-datepicker-next-hover"))
                    }).end().find("." + this._dayOverClass + " a").trigger("mouseover").end(), d = this._getNumberOfMonths(a), e = d[1], e > 1 ? a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em") : a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a.dpDiv[(1 != d[0] || 1 != d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == b.datepicker._curInst && b.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input.focus(), a.yearshtml) {
                    var f = a.yearshtml;
                    setTimeout(function() {
                        f === a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), f = a.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function(a) {
                var b = function(a) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[a] || a
                };
                return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
            },
            _checkOffset: function(a, c, d) {
                var e = a.dpDiv.outerWidth(),
                    f = a.dpDiv.outerHeight(),
                    g = a.input ? a.input.outerWidth() : 0,
                    h = a.input ? a.input.outerHeight() : 0,
                    i = document.documentElement.clientWidth + b(document).scrollLeft(),
                    j = document.documentElement.clientHeight + b(document).scrollTop();
                return c.left -= this._get(a, "isRTL") ? e - g : 0, c.left -= d && c.left == a.input.offset().left ? b(document).scrollLeft() : 0, c.top -= d && c.top == a.input.offset().top + h ? b(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
            },
            _findPos: function(a) {
                for (var c = this._get(this._getInst(a), "isRTL"); a && ("hidden" == a.type || 1 != a.nodeType);) a = a[c ? "previousSibling" : "nextSibling"];
                return a = b(a).offset(), [a.left, a.top]
            },
            _hideDatepicker: function(a) {
                var c = this._curInst;
                if (c && (!a || c == b.data(a, "datepicker")) && this._datepickerShowing) {
                    a = this._get(c, "showAnim");
                    var d = this._get(c, "duration"),
                        e = function() {
                            b.datepicker._tidyDialog(c), this._curInst = null
                        };
                    b.effects && b.effects[a] ? c.dpDiv.hide(a, b.datepicker._get(c, "showOptions"), d, e) : c.dpDiv["slideDown" == a ? "slideUp" : "fadeIn" == a ? "fadeOut" : "hide"](a ? d : null, e), a || e(), (a = this._get(c, "onClose")) && a.apply(c.input ? c.input[0] : null, [c.input ? c.input.val() : "", c]), this._datepickerShowing = !1, this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function(a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(a) {
                b.datepicker._curInst && (a = b(a.target), a[0].id != b.datepicker._mainDivId && 0 == a.parents("#" + b.datepicker._mainDivId).length && !a.hasClass(b.datepicker.markerClassName) && !a.hasClass(b.datepicker._triggerClass) && b.datepicker._datepickerShowing && !(b.datepicker._inDialog && b.blockUI) && b.datepicker._hideDatepicker())
            },
            _adjustDate: function(a, c, d) {
                a = b(a);
                var e = this._getInst(a[0]);
                this._isDisabledDatepicker(a[0]) || (this._adjustInstDate(e, c + ("M" == d ? this._get(e, "showCurrentAtPos") : 0), d), this._updateDatepicker(e))
            },
            _gotoToday: function(a) {
                a = b(a);
                var c = this._getInst(a[0]);
                if (this._get(c, "gotoCurrent") && c.currentDay) c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear;
                else {
                    var d = new Date;
                    c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear()
                }
                this._notifyChange(c), this._adjustDate(a)
            },
            _selectMonthYear: function(a, c, d) {
                a = b(a);
                var e = this._getInst(a[0]);
                e._selectingMonthYear = !1, e["selected" + ("M" == d ? "Month" : "Year")] = e["draw" + ("M" == d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(a)
            },
            _clickMonthYear: function(a) {
                var c = this._getInst(b(a)[0]);
                c.input && c._selectingMonthYear && setTimeout(function() {
                    c.input.focus()
                }, 0), c._selectingMonthYear = !c._selectingMonthYear
            },
            _selectDay: function(a, c, d, e) {
                var f = b(a);
                b(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]) || (f = this._getInst(f[0]), f.selectedDay = f.currentDay = b("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(a) {
                a = b(a), this._getInst(a[0]), this._selectDate(a, "")
            },
            _selectDate: function(a, c) {
                a = this._getInst(b(a)[0]), c = null != c ? c : this._formatDate(a), a.input && a.input.val(c), this._updateAlternate(a);
                var d = this._get(a, "onSelect");
                d ? d.apply(a.input ? a.input[0] : null, [c, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(a) {
                var c = this._get(a, "altField");
                if (c) {
                    var d = this._get(a, "altFormat") || this._get(a, "dateFormat"),
                        e = this._getDate(a),
                        f = this.formatDate(d, e, this._getFormatConfig(a));
                    b(c).each(function() {
                        b(this).val(f)
                    })
                }
            },
            noWeekends: function(a) {
                return a = a.getDay(), [a > 0 && a < 6, ""]
            },
            iso8601Week: function(a) {
                a = new Date(a.getTime()), a.setDate(a.getDate() + 4 - (a.getDay() || 7));
                var b = a.getTime();
                return a.setMonth(0), a.setDate(1), Math.floor(Math.round((b - a) / 864e5) / 7) + 1
            },
            parseDate: function(a, b, c) {
                if (null == a || null == b) throw "Invalid arguments";
                if (b = "object" == typeof b ? b.toString() : b + "", "" == b) return null;
                var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                d = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10);
                for (var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = c = -1, j = -1, k = -1, l = !1, m = function(b) {
                        return (b = r + 1 < a.length && a.charAt(r + 1) == b) && r++, b
                    }, n = function(a) {
                        var c = m(a);
                        if (a = new RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a && c ? 4 : "o" == a ? 3 : 2) + "}"), a = b.substring(q).match(a), !a) throw "Missing number at position " + q;
                        return q += a[0].length, parseInt(a[0], 10)
                    }, o = function(a, c, d) {
                        for (a = m(a) ? d : c, c = 0; c < a.length; c++)
                            if (b.substr(q, a[c].length).toLowerCase() == a[c].toLowerCase()) return q += a[c].length, c + 1;
                        throw "Unknown name at position " + q
                    }, p = function() {
                        if (b.charAt(q) != a.charAt(r)) throw "Unexpected literal at position " + q;
                        q++
                    }, q = 0, r = 0; r < a.length; r++)
                    if (l) "'" != a.charAt(r) || m("'") ? p() : l = !1;
                    else switch (a.charAt(r)) {
                        case "d":
                            j = n("d");
                            break;
                        case "D":
                            o("D", e, f);
                            break;
                        case "o":
                            k = n("o");
                            break;
                        case "m":
                            i = n("m");
                            break;
                        case "M":
                            i = o("M", g, h);
                            break;
                        case "y":
                            c = n("y");
                            break;
                        case "@":
                            var s = new Date(n("@"));
                            c = s.getFullYear(), i = s.getMonth() + 1, j = s.getDate();
                            break;
                        case "!":
                            s = new Date((n("!") - this._ticksTo1970) / 1e4), c = s.getFullYear(), i = s.getMonth() + 1, j = s.getDate();
                            break;
                        case "'":
                            m("'") ? p() : l = !0;
                            break;
                        default:
                            p()
                    }
                    if (c == -1 ? c = (new Date).getFullYear() : c < 100 && (c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= d ? 0 : -100)), k > -1)
                        for (i = 1, j = k;;) {
                            if (d = this._getDaysInMonth(c, i - 1), j <= d) break;
                            i++, j -= d
                        }
                    if (s = this._daylightSavingAdjust(new Date(c, i - 1, j)), s.getFullYear() != c || s.getMonth() + 1 != i || s.getDate() != j) throw "Invalid date";
                return s
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(a, b, c) {
                if (!b) return "";
                var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
                    e = (c ? c.dayNames : null) || this._defaults.dayNames,
                    f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
                c = (c ? c.monthNames : null) || this._defaults.monthNames;
                var g = function(b) {
                        return (b = l + 1 < a.length && a.charAt(l + 1) == b) && l++, b
                    },
                    h = function(a, b, c) {
                        if (b = "" + b, g(a))
                            for (; b.length < c;) b = "0" + b;
                        return b
                    },
                    i = function(a, b, c, d) {
                        return g(a) ? d[b] : c[b]
                    },
                    j = "",
                    k = !1;
                if (b)
                    for (var l = 0; l < a.length; l++)
                        if (k) "'" != a.charAt(l) || g("'") ? j += a.charAt(l) : k = !1;
                        else switch (a.charAt(l)) {
                            case "d":
                                j += h("d", b.getDate(), 2);
                                break;
                            case "D":
                                j += i("D", b.getDay(), d, e);
                                break;
                            case "o":
                                j += h("o", (b.getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5, 3);
                                break;
                            case "m":
                                j += h("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                j += i("M", b.getMonth(), f, c);
                                break;
                            case "y":
                                j += g("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                j += b.getTime();
                                break;
                            case "!":
                                j += 1e4 * b.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                g("'") ? j += "'" : k = !0;
                                break;
                            default:
                                j += a.charAt(l)
                        }
                        return j
            },
            _possibleChars: function(a) {
                for (var b = "", c = !1, d = function(b) {
                        return (b = e + 1 < a.length && a.charAt(e + 1) == b) && e++, b
                    }, e = 0; e < a.length; e++)
                    if (c) "'" != a.charAt(e) || d("'") ? b += a.charAt(e) : c = !1;
                    else switch (a.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            b += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            d("'") ? b += "'" : c = !0;
                            break;
                        default:
                            b += a.charAt(e)
                    }
                    return b
            },
            _get: function(a, b) {
                return a.settings[b] !== c ? a.settings[b] : this._defaults[b]
            },
            _setDateFromField: function(a, b) {
                if (a.input.val() != a.lastVal) {
                    var c, d, e = this._get(a, "dateFormat"),
                        f = a.lastVal = a.input ? a.input.val() : null;
                    c = d = this._getDefaultDate(a);
                    var g = this._getFormatConfig(a);
                    try {
                        c = this.parseDate(e, f, g) || d
                    } catch (a) {
                        this.log(a), f = b ? "" : f
                    }
                    a.selectedDay = c.getDate(), a.drawMonth = a.selectedMonth = c.getMonth(), a.drawYear = a.selectedYear = c.getFullYear(), a.currentDay = f ? c.getDate() : 0, a.currentMonth = f ? c.getMonth() : 0, a.currentYear = f ? c.getFullYear() : 0, this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function(a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function(a, c, d) {
                var e = function(a) {
                        var b = new Date;
                        return b.setDate(b.getDate() + a), b
                    },
                    f = function(c) {
                        try {
                            return b.datepicker.parseDate(b.datepicker._get(a, "dateFormat"), c, b.datepicker._getFormatConfig(a))
                        } catch (a) {}
                        var d = (c.toLowerCase().match(/^c/) ? b.datepicker._getDate(a) : null) || new Date,
                            e = d.getFullYear(),
                            f = d.getMonth();
                        d = d.getDate();
                        for (var g = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = g.exec(c); h;) {
                            switch (h[2] || "d") {
                                case "d":
                                case "D":
                                    d += parseInt(h[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    d += 7 * parseInt(h[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    f += parseInt(h[1], 10), d = Math.min(d, b.datepicker._getDaysInMonth(e, f));
                                    break;
                                case "y":
                                case "Y":
                                    e += parseInt(h[1], 10), d = Math.min(d, b.datepicker._getDaysInMonth(e, f))
                            }
                            h = g.exec(c)
                        }
                        return new Date(e, f, d)
                    };
                return (c = (c = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime())) && "Invalid Date" == c.toString() ? d : c) && (c.setHours(0), c.setMinutes(0), c.setSeconds(0), c.setMilliseconds(0)), this._daylightSavingAdjust(c)
            },
            _daylightSavingAdjust: function(a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
            },
            _setDate: function(a, b, c) {
                var d = !b,
                    e = a.selectedMonth,
                    f = a.selectedYear;
                b = this._restrictMinMax(a, this._determineDate(a, b, new Date)), a.selectedDay = a.currentDay = b.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth(), a.drawYear = a.selectedYear = a.currentYear = b.getFullYear(), e == a.selectedMonth && f == a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function(a) {
                return !a.currentYear || a.input && "" == a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
            },
            _generateHTML: function(a) {
                var c = new Date;
                c = this._daylightSavingAdjust(new Date(c.getFullYear(), c.getMonth(), c.getDate()));
                var d = this._get(a, "isRTL"),
                    f = this._get(a, "showButtonPanel"),
                    g = this._get(a, "hideIfNoPrevNext"),
                    h = this._get(a, "navigationAsDateFormat"),
                    i = this._getNumberOfMonths(a),
                    j = this._get(a, "showCurrentAtPos"),
                    k = this._get(a, "stepMonths"),
                    l = 1 != i[0] || 1 != i[1],
                    m = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
                    n = this._getMinMaxDate(a, "min"),
                    o = this._getMinMaxDate(a, "max");
                j = a.drawMonth - j;
                var p = a.drawYear;
                if (j < 0 && (j += 12, p--), o) {
                    var q = this._daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth() - i[0] * i[1] + 1, o.getDate()));
                    for (q = n && q < n ? n : q; this._daylightSavingAdjust(new Date(p, j, 1)) > q;) j--, j < 0 && (j = 11, p--)
                }
                a.drawMonth = j, a.drawYear = p, q = this._get(a, "prevText"), q = h ? this.formatDate(q, this._daylightSavingAdjust(new Date(p, j - k, 1)), this._getFormatConfig(a)) : q, q = this._canAdjustMonth(a, -1, p, j) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + e + ".datepicker._adjustDate('#" + a.id + "', -" + k + ", 'M');\" title=\"" + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "e" : "w") + '">' + q + "</span></a>" : g ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "e" : "w") + '">' + q + "</span></a>";
                var r = this._get(a, "nextText");
                r = h ? this.formatDate(r, this._daylightSavingAdjust(new Date(p, j + k, 1)), this._getFormatConfig(a)) : r, g = this._canAdjustMonth(a, 1, p, j) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + e + ".datepicker._adjustDate('#" + a.id + "', +" + k + ", 'M');\" title=\"" + r + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "w" : "e") + '">' + r + "</span></a>" : g ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + r + '"><span class="ui-icon ui-icon-circle-triangle-' + (d ? "w" : "e") + '">' + r + "</span></a>", k = this._get(a, "currentText"), r = this._get(a, "gotoCurrent") && a.currentDay ? m : c, k = h ? this.formatDate(k, r, this._getFormatConfig(a)) : k, h = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + e + '.datepicker._hideDatepicker();">' + this._get(a, "closeText") + "</button>", f = f ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (d ? h : "") + (this._isInRange(a, r) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + e + ".datepicker._gotoToday('#" + a.id + "');\">" + k + "</button>" : "") + (d ? "" : h) + "</div>" : "", h = parseInt(this._get(a, "firstDay"), 10), h = isNaN(h) ? 0 : h, k = this._get(a, "showWeek"), r = this._get(a, "dayNames"), this._get(a, "dayNamesShort");
                var s = this._get(a, "dayNamesMin"),
                    t = this._get(a, "monthNames"),
                    u = this._get(a, "monthNamesShort"),
                    v = this._get(a, "beforeShowDay"),
                    w = this._get(a, "showOtherMonths"),
                    x = this._get(a, "selectOtherMonths");
                this._get(a, "calculateWeek");
                for (var y = this._getDefaultDate(a), z = "", A = 0; A < i[0]; A++) {
                    for (var B = "", C = 0; C < i[1]; C++) {
                        var D = this._daylightSavingAdjust(new Date(p, j, a.selectedDay)),
                            E = " ui-corner-all",
                            F = "";
                        if (l) {
                            if (F += '<div class="ui-datepicker-group', i[1] > 1) switch (C) {
                                case 0:
                                    F += " ui-datepicker-group-first", E = " ui-corner-" + (d ? "right" : "left");
                                    break;
                                case i[1] - 1:
                                    F += " ui-datepicker-group-last", E = " ui-corner-" + (d ? "left" : "right");
                                    break;
                                default:
                                    F += " ui-datepicker-group-middle", E = ""
                            }
                            F += '">'
                        }
                        F += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + E + '">' + (/all|left/.test(E) && 0 == A ? d ? g : q : "") + (/all|right/.test(E) && 0 == A ? d ? q : g : "") + this._generateMonthYearHeader(a, j, p, n, o, A > 0 || C > 0, t, u) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                        var G = k ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";
                        for (E = 0; E < 7; E++) {
                            var H = (E + h) % 7;
                            G += "<th" + ((E + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + r[H] + '">' + s[H] + "</span></th>"
                        }
                        F += G + "</tr></thead><tbody>", G = this._getDaysInMonth(p, j), p == a.selectedYear && j == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, G)), E = (this._getFirstDayOfMonth(p, j) - h + 7) % 7, G = l ? 6 : Math.ceil((E + G) / 7), H = this._daylightSavingAdjust(new Date(p, j, 1 - E));
                        for (var I = 0; I < G; I++) {
                            F += "<tr>";
                            var J = k ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(H) + "</td>" : "";
                            for (E = 0; E < 7; E++) {
                                var K = v ? v.apply(a.input ? a.input[0] : null, [H]) : [!0, ""],
                                    L = H.getMonth() != j,
                                    M = L && !x || !K[0] || n && H < n || o && H > o;
                                J += '<td class="' + ((E + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (H.getTime() == D.getTime() && j == a.selectedMonth && a._keyEvent || y.getTime() == H.getTime() && y.getTime() == D.getTime() ? " " + this._dayOverClass : "") + (M ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !w ? "" : " " + K[1] + (H.getTime() == m.getTime() ? " " + this._currentClass : "") + (H.getTime() == c.getTime() ? " ui-datepicker-today" : "")) + '"' + (L && !w || !K[2] ? "" : ' title="' + K[2] + '"') + (M ? "" : ' onclick="DP_jQuery_' + e + ".datepicker._selectDay('#" + a.id + "'," + H.getMonth() + "," + H.getFullYear() + ', this);return false;"') + ">" + (L && !w ? "&#xa0;" : M ? '<span class="ui-state-default">' + H.getDate() + "</span>" : '<a class="ui-state-default' + (H.getTime() == c.getTime() ? " ui-state-highlight" : "") + (H.getTime() == m.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + '" href="#">' + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H)
                            }
                            F += J + "</tr>"
                        }
                        j++, j > 11 && (j = 0, p++), F += "</tbody></table>" + (l ? "</div>" + (i[0] > 0 && C == i[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), B += F
                    }
                    z += B
                }
                return z += f + (b.browser.msie && parseInt(b.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, z
            },
            _generateMonthYearHeader: function(a, c, d, f, g, h, i, j) {
                var k = this._get(a, "changeMonth"),
                    l = this._get(a, "changeYear"),
                    m = this._get(a, "showMonthAfterYear"),
                    n = '<div class="ui-datepicker-title">',
                    o = "";
                if (h || !k) o += '<span class="ui-datepicker-month">' + i[c] + "</span>";
                else {
                    i = f && f.getFullYear() == d;
                    var p = g && g.getFullYear() == d;
                    o += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + e + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" onclick=\"DP_jQuery_" + e + ".datepicker._clickMonthYear('#" + a.id + "');\">";
                    for (var q = 0; q < 12; q++)(!i || q >= f.getMonth()) && (!p || q <= g.getMonth()) && (o += '<option value="' + q + '"' + (q == c ? ' selected="selected"' : "") + ">" + j[q] + "</option>");
                    o += "</select>"
                }
                if (m || (n += o + (!h && k && l ? "" : "&#xa0;")), a.yearshtml = "", h || !l) n += '<span class="ui-datepicker-year">' + d + "</span>";
                else {
                    j = this._get(a, "yearRange").split(":");
                    var r = (new Date).getFullYear();
                    for (i = function(a) {
                            return a = a.match(/c[+-].*/) ? d + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10), isNaN(a) ? r : a
                        }, c = i(j[0]), j = Math.max(c, i(j[1] || "")), c = f ? Math.max(c, f.getFullYear()) : c, j = g ? Math.min(j, g.getFullYear()) : j, a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + e + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + e + ".datepicker._clickMonthYear('#" + a.id + "');\">"; c <= j; c++) a.yearshtml += '<option value="' + c + '"' + (c == d ? ' selected="selected"' : "") + ">" + c + "</option>";
                    a.yearshtml += "</select>", b.browser.mozilla ? n += '<select class="ui-datepicker-year"><option value="' + d + '" selected="selected">' + d + "</option></select>" : (n += a.yearshtml, a.yearshtml = null)
                }
                return n += this._get(a, "yearSuffix"), m && (n += (!h && k && l ? "" : "&#xa0;") + o), n += "</div>"
            },
            _adjustInstDate: function(a, b, c) {
                var d = a.drawYear + ("Y" == c ? b : 0),
                    e = a.drawMonth + ("M" == c ? b : 0);
                b = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" == c ? b : 0), d = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, b))), a.selectedDay = d.getDate(), a.drawMonth = a.selectedMonth = d.getMonth(), a.drawYear = a.selectedYear = d.getFullYear(), "M" != c && "Y" != c || this._notifyChange(a)
            },
            _restrictMinMax: function(a, b) {
                var c = this._getMinMaxDate(a, "min");
                return a = this._getMinMaxDate(a, "max"), b = c && b < c ? c : b, b = a && b > a ? a : b
            },
            _notifyChange: function(a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function(a) {
                return a = this._get(a, "numberOfMonths"), null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
            },
            _getMinMaxDate: function(a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function(a, b) {
                return 32 - new Date(a, b, 32).getDate()
            },
            _getFirstDayOfMonth: function(a, b) {
                return new Date(a, b, 1).getDay()
            },
            _canAdjustMonth: function(a, b, c, d) {
                var e = this._getNumberOfMonths(a);
                return c = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1)), b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth())), this._isInRange(a, c)
            },
            _isInRange: function(a, b) {
                var c = this._getMinMaxDate(a, "min");
                return a = this._getMinMaxDate(a, "max"), (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime())
            },
            _getFormatConfig: function(a) {
                var b = this._get(a, "shortYearCutoff");
                return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function(a, b, c, d) {
                return b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear), b = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)), this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
            }
        }), b.fn.datepicker = function(a) {
            b.datepicker.initialized || (b(document).mousedown(b.datepicker._checkExternalClick).find("body").append(b.datepicker.dpDiv), b.datepicker.initialized = !0);
            var c = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof a || "isDisabled" != a && "getDate" != a && "widget" != a ? "option" == a && 2 == arguments.length && "string" == typeof arguments[1] ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c)) : this.each(function() {
                "string" == typeof a ? b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this].concat(c)) : b.datepicker._attachDatepicker(this, a)
            }) : b.datepicker["_" + a + "Datepicker"].apply(b.datepicker, [this[0]].concat(c))
        }, b.datepicker = new f, b.datepicker.initialized = !1, b.datepicker.uuid = (new Date).getTime(), b.datepicker.version = "1.8.9", window["DP_jQuery_" + e] = b
    }(jQuery),
    function(a, b) {
        var c = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            d = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            };
        a.widget("ui.dialog", {
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    collision: "fit",
                    using: function(b) {
                        var c = a(this).css(b).offset().top;
                        c < 0 && a(this).css("top", b.top - c)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function() {
                this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
                var b = this,
                    c = b.options,
                    d = c.title || "&#160;",
                    e = a.ui.dialog.getTitleId(b.element),
                    f = (b.uiDialog = a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + c.dialogClass).css({
                        zIndex: c.zIndex
                    }).attr("tabIndex", -1).css("outline", 0).keydown(function(d) {
                        c.closeOnEscape && d.keyCode && d.keyCode === a.ui.keyCode.ESCAPE && (b.close(d), d.preventDefault())
                    }).attr({
                        role: "dialog",
                        "aria-labelledby": e
                    }).mousedown(function(a) {
                        b.moveToTop(!1, a)
                    });
                b.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(f);
                var g = (b.uiDialogTitlebar = a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(f),
                    h = a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                        h.addClass("ui-state-hover")
                    }, function() {
                        h.removeClass("ui-state-hover")
                    }).focus(function() {
                        h.addClass("ui-state-focus")
                    }).blur(function() {
                        h.removeClass("ui-state-focus")
                    }).click(function(a) {
                        return b.close(a), !1
                    }).appendTo(g);
                (b.uiDialogTitlebarCloseText = a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(c.closeText).appendTo(h), a("<span></span>").addClass("ui-dialog-title").attr("id", e).html(d).prependTo(g), a.isFunction(c.beforeclose) && !a.isFunction(c.beforeClose) && (c.beforeClose = c.beforeclose), g.find("*").add(g).disableSelection(), c.draggable && a.fn.draggable && b._makeDraggable(), c.resizable && a.fn.resizable && b._makeResizable(), b._createButtons(c.buttons), b._isOpen = !1, a.fn.bgiframe && f.bgiframe()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            destroy: function() {
                var a = this;
                return a.overlay && a.overlay.destroy(), a.uiDialog.hide(), a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), a.uiDialog.remove(), a.originalTitle && a.element.attr("title", a.originalTitle), a
            },
            widget: function() {
                return this.uiDialog
            },
            close: function(b) {
                var c, d, e = this;
                if (!1 !== e._trigger("beforeClose", b)) return e.overlay && e.overlay.destroy(), e.uiDialog.unbind("keypress.ui-dialog"), e._isOpen = !1, e.options.hide ? e.uiDialog.hide(e.options.hide, function() {
                    e._trigger("close", b)
                }) : (e.uiDialog.hide(), e._trigger("close", b)), a.ui.dialog.overlay.resize(), e.options.modal && (c = 0, a(".ui-dialog").each(function() {
                    this !== e.uiDialog[0] && (d = a(this).css("z-index"), isNaN(d) || (c = Math.max(c, d)))
                }), a.ui.dialog.maxZ = c), e
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function(b, c) {
                var d = this,
                    e = d.options;
                return e.modal && !b || !e.stack && !e.modal ? d._trigger("focus", c) : (e.zIndex > a.ui.dialog.maxZ && (a.ui.dialog.maxZ = e.zIndex), d.overlay && (a.ui.dialog.maxZ += 1, d.overlay.$el.css("z-index", a.ui.dialog.overlay.maxZ = a.ui.dialog.maxZ)), b = {
                    scrollTop: d.element.attr("scrollTop"),
                    scrollLeft: d.element.attr("scrollLeft")
                }, a.ui.dialog.maxZ += 1, d.uiDialog.css("z-index", a.ui.dialog.maxZ), d.element.attr(b), d._trigger("focus", c), d)
            },
            open: function() {
                if (!this._isOpen) {
                    var b = this,
                        c = b.options,
                        d = b.uiDialog;
                    return b.overlay = c.modal ? new a.ui.dialog.overlay(b) : null, b._size(),
                        b._position(c.position), d.show(c.show), b.moveToTop(!0), c.modal && d.bind("keypress.ui-dialog", function(b) {
                            if (b.keyCode === a.ui.keyCode.TAB) {
                                var c = a(":tabbable", this),
                                    d = c.filter(":first");
                                if (c = c.filter(":last"), b.target === c[0] && !b.shiftKey) return d.focus(1), !1;
                                if (b.target === d[0] && b.shiftKey) return c.focus(1), !1
                            }
                        }), a(b.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(), b._isOpen = !0, b._trigger("open"), b
                }
            },
            _createButtons: function(b) {
                var c = this,
                    d = !1,
                    e = a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                    f = a("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
                c.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof b && null !== b && a.each(b, function() {
                    return !(d = !0)
                }), d && (a.each(b, function(b, d) {
                    d = a.isFunction(d) ? {
                        click: d,
                        text: b
                    } : d, b = a('<button type="button"></button>').attr(d, !0).unbind("click").click(function() {
                        d.click.apply(c.element[0], arguments)
                    }).appendTo(f), a.fn.button && b.button()
                }), e.appendTo(c.uiDialog))
            },
            _makeDraggable: function() {
                function b(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                }
                var c, d = this,
                    e = d.options,
                    f = a(document);
                d.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(f, g) {
                        c = "auto" === e.height ? "auto" : a(this).height(), a(this).height(a(this).height()).addClass("ui-dialog-dragging"), d._trigger("dragStart", f, b(g))
                    },
                    drag: function(a, c) {
                        d._trigger("drag", a, b(c))
                    },
                    stop: function(g, h) {
                        e.position = [h.position.left - f.scrollLeft(), h.position.top - f.scrollTop()], a(this).removeClass("ui-dialog-dragging").height(c), d._trigger("dragStop", g, b(h)), a.ui.dialog.overlay.resize()
                    }
                })
            },
            _makeResizable: function(c) {
                function d(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }
                c = c === b ? this.options.resizable : c;
                var e = this,
                    f = e.options,
                    g = e.uiDialog.css("position");
                c = "string" == typeof c ? c : "n,e,s,w,se,sw,ne,nw", e.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: e.element,
                    maxWidth: f.maxWidth,
                    maxHeight: f.maxHeight,
                    minWidth: f.minWidth,
                    minHeight: e._minHeight(),
                    handles: c,
                    start: function(b, c) {
                        a(this).addClass("ui-dialog-resizing"), e._trigger("resizeStart", b, d(c))
                    },
                    resize: function(a, b) {
                        e._trigger("resize", a, d(b))
                    },
                    stop: function(b, c) {
                        a(this).removeClass("ui-dialog-resizing"), f.height = a(this).height(), f.width = a(this).width(), e._trigger("resizeStop", b, d(c)), a.ui.dialog.overlay.resize()
                    }
                }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function() {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function(b) {
                var c, d = [],
                    e = [0, 0];
                b ? (("string" == typeof b || "object" == typeof b && "0" in b) && (d = b.split ? b.split(" ") : [b[0], b[1]], 1 === d.length && (d[1] = d[0]), a.each(["left", "top"], function(a, b) {
                    +d[a] === d[a] && (e[a] = d[a], d[a] = b)
                }), b = {
                    my: d.join(" "),
                    at: d.join(" "),
                    offset: e.join(" ")
                }), b = a.extend({}, a.ui.dialog.prototype.options.position, b)) : b = a.ui.dialog.prototype.options.position, (c = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                    top: 0,
                    left: 0
                }).position(a.extend({
                    of: window
                }, b)), c || this.uiDialog.hide()
            },
            _setOptions: function(b) {
                var e = this,
                    f = {},
                    g = !1;
                a.each(b, function(a, b) {
                    e._setOption(a, b), a in c && (g = !0), a in d && (f[a] = b)
                }), g && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", f)
            },
            _setOption: function(b, c) {
                var d = this,
                    e = d.uiDialog;
                switch (b) {
                    case "beforeclose":
                        b = "beforeClose";
                        break;
                    case "buttons":
                        d._createButtons(c);
                        break;
                    case "closeText":
                        d.uiDialogTitlebarCloseText.text("" + c);
                        break;
                    case "dialogClass":
                        e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + c);
                        break;
                    case "disabled":
                        c ? e.addClass("ui-dialog-disabled") : e.removeClass("ui-dialog-disabled");
                        break;
                    case "draggable":
                        var f = e.is(":data(draggable)");
                        f && !c && e.draggable("destroy"), !f && c && d._makeDraggable();
                        break;
                    case "position":
                        d._position(c);
                        break;
                    case "resizable":
                        (f = e.is(":data(resizable)")) && !c && e.resizable("destroy"), f && "string" == typeof c && e.resizable("option", "handles", c), !f && c !== !1 && d._makeResizable(c);
                        break;
                    case "title":
                        a(".ui-dialog-title", d.uiDialogTitlebar).html("" + (c || "&#160;"))
                }
                a.Widget.prototype._setOption.apply(d, arguments)
            },
            _size: function() {
                var b, c, d = this.options,
                    e = this.uiDialog.is(":visible");
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }), d.minWidth > d.width && (d.width = d.minWidth), b = this.uiDialog.css({
                    height: "auto",
                    width: d.width
                }).height(), c = Math.max(0, d.minHeight - b), "auto" === d.height ? a.support.minHeight ? this.element.css({
                    minHeight: c,
                    height: "auto"
                }) : (this.uiDialog.show(), d = this.element.css("height", "auto").height(), e || this.uiDialog.hide(), this.element.height(Math.max(d, c))) : this.element.height(Math.max(d.height - b, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }), a.extend(a.ui.dialog, {
            version: "1.8.9",
            uuid: 0,
            maxZ: 0,
            getTitleId: function(a) {
                return a = a.attr("id"), a || (this.uuid += 1, a = this.uuid), "ui-dialog-title-" + a
            },
            overlay: function(b) {
                this.$el = a.ui.dialog.overlay.create(b)
            }
        }), a.extend(a.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(a) {
                return a + ".dialog-overlay"
            }).join(" "),
            create: function(b) {
                0 === this.instances.length && (setTimeout(function() {
                    a.ui.dialog.overlay.instances.length && a(document).bind(a.ui.dialog.overlay.events, function(b) {
                        if (a(b.target).zIndex() < a.ui.dialog.overlay.maxZ) return !1
                    })
                }, 1), a(document).bind("keydown.dialog-overlay", function(c) {
                    b.options.closeOnEscape && c.keyCode && c.keyCode === a.ui.keyCode.ESCAPE && (b.close(c), c.preventDefault())
                }), a(window).bind("resize.dialog-overlay", a.ui.dialog.overlay.resize));
                var c = (this.oldInstances.pop() || a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                });
                return a.fn.bgiframe && c.bgiframe(), this.instances.push(c), c
            },
            destroy: function(b) {
                var c = a.inArray(b, this.instances);
                c != -1 && this.oldInstances.push(this.instances.splice(c, 1)[0]), 0 === this.instances.length && a([document, window]).unbind(".dialog-overlay"), b.remove();
                var d = 0;
                a.each(this.instances, function() {
                    d = Math.max(d, this.css("z-index"))
                }), this.maxZ = d
            },
            height: function() {
                var b, c;
                return a.browser.msie && a.browser.version < 7 ? (b = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), c = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), b < c ? a(window).height() + "px" : b + "px") : a(document).height() + "px"
            },
            width: function() {
                var b, c;
                return a.browser.msie && a.browser.version < 7 ? (b = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), c = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), b < c ? a(window).width() + "px" : b + "px") : a(document).width() + "px"
            },
            resize: function() {
                var b = a([]);
                a.each(a.ui.dialog.overlay.instances, function() {
                    b = b.add(this)
                }), b.css({
                    width: 0,
                    height: 0
                }).css({
                    width: a.ui.dialog.overlay.width(),
                    height: a.ui.dialog.overlay.height()
                })
            }
        }), a.extend(a.ui.dialog.overlay.prototype, {
            destroy: function() {
                a.ui.dialog.overlay.destroy(this.$el)
            }
        })
    }(jQuery),
    function(a) {
        a.ui = a.ui || {};
        var b = /left|center|right/,
            c = /top|center|bottom/,
            d = a.fn.position,
            e = a.fn.offset;
        a.fn.position = function(e) {
            if (!e || !e.of) return d.apply(this, arguments);
            e = a.extend({}, e);
            var f, g, h, i = a(e.of),
                j = i[0],
                k = (e.collision || "flip").split(" "),
                l = e.offset ? e.offset.split(" ") : [0, 0];
            return 9 === j.nodeType ? (f = i.width(), g = i.height(), h = {
                top: 0,
                left: 0
            }) : j.setTimeout ? (f = i.width(), g = i.height(), h = {
                top: i.scrollTop(),
                left: i.scrollLeft()
            }) : j.preventDefault ? (e.at = "left top", f = g = 0, h = {
                top: e.of.pageY,
                left: e.of.pageX
            }) : (f = i.outerWidth(), g = i.outerHeight(), h = i.offset()), a.each(["my", "at"], function() {
                var a = (e[this] || "").split(" ");
                1 === a.length && (a = b.test(a[0]) ? a.concat(["center"]) : c.test(a[0]) ? ["center"].concat(a) : ["center", "center"]), a[0] = b.test(a[0]) ? a[0] : "center", a[1] = c.test(a[1]) ? a[1] : "center", e[this] = a
            }), 1 === k.length && (k[1] = k[0]), l[0] = parseInt(l[0], 10) || 0, 1 === l.length && (l[1] = l[0]), l[1] = parseInt(l[1], 10) || 0, "right" === e.at[0] ? h.left += f : "center" === e.at[0] && (h.left += f / 2), "bottom" === e.at[1] ? h.top += g : "center" === e.at[1] && (h.top += g / 2), h.left += l[0], h.top += l[1], this.each(function() {
                var b, c = a(this),
                    d = c.outerWidth(),
                    i = c.outerHeight(),
                    j = parseInt(a.curCSS(this, "marginLeft", !0)) || 0,
                    m = parseInt(a.curCSS(this, "marginTop", !0)) || 0,
                    n = d + j + (parseInt(a.curCSS(this, "marginRight", !0)) || 0),
                    o = i + m + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0),
                    p = a.extend({}, h);
                "right" === e.my[0] ? p.left -= d : "center" === e.my[0] && (p.left -= d / 2), "bottom" === e.my[1] ? p.top -= i : "center" === e.my[1] && (p.top -= i / 2), p.left = Math.round(p.left), p.top = Math.round(p.top), b = {
                    left: p.left - j,
                    top: p.top - m
                }, a.each(["left", "top"], function(c, h) {
                    a.ui.position[k[c]] && a.ui.position[k[c]][h](p, {
                        targetWidth: f,
                        targetHeight: g,
                        elemWidth: d,
                        elemHeight: i,
                        collisionPosition: b,
                        collisionWidth: n,
                        collisionHeight: o,
                        offset: l,
                        my: e.my,
                        at: e.at
                    })
                }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(p, {
                    using: e.using
                }))
            })
        }, a.ui.position = {
            fit: {
                left: function(b, c) {
                    var d = a(window);
                    d = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(), b.left = d > 0 ? b.left - d : Math.max(b.left - c.collisionPosition.left, b.left)
                },
                top: function(b, c) {
                    var d = a(window);
                    d = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(), b.top = d > 0 ? b.top - d : Math.max(b.top - c.collisionPosition.top, b.top)
                }
            },
            flip: {
                left: function(b, c) {
                    if ("center" !== c.at[0]) {
                        var d = a(window);
                        d = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft();
                        var e = "left" === c.my[0] ? -c.elemWidth : "right" === c.my[0] ? c.elemWidth : 0,
                            f = "left" === c.at[0] ? c.targetWidth : -c.targetWidth,
                            g = -2 * c.offset[0];
                        b.left += c.collisionPosition.left < 0 ? e + f + g : d > 0 ? e + f + g : 0
                    }
                },
                top: function(b, c) {
                    if ("center" !== c.at[1]) {
                        var d = a(window);
                        d = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop();
                        var e = "top" === c.my[1] ? -c.elemHeight : "bottom" === c.my[1] ? c.elemHeight : 0,
                            f = "top" === c.at[1] ? c.targetHeight : -c.targetHeight,
                            g = -2 * c.offset[1];
                        b.top += c.collisionPosition.top < 0 ? e + f + g : d > 0 ? e + f + g : 0
                    }
                }
            }
        }, a.offset.setOffset || (a.offset.setOffset = function(b, c) {
            /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative");
            var d = a(b),
                e = d.offset(),
                f = parseInt(a.curCSS(b, "top", !0), 10) || 0,
                g = parseInt(a.curCSS(b, "left", !0), 10) || 0;
            e = {
                top: c.top - e.top + f,
                left: c.left - e.left + g
            }, "using" in c ? c.using.call(b, e) : d.css(e)
        }, a.fn.offset = function(b) {
            var c = this[0];
            return c && c.ownerDocument ? b ? this.each(function() {
                a.offset.setOffset(this, b)
            }) : e.call(this) : null
        })
    }(jQuery),
    function(a, b) {
        a.widget("ui.progressbar", {
            options: {
                value: 0,
                max: 100
            },
            min: 0,
            _create: function() {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._value()
                }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
            },
            destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), a.Widget.prototype.destroy.apply(this, arguments)
            },
            value: function(a) {
                return a === b ? this._value() : (this._setOption("value", a), this)
            },
            _setOption: function(b, c) {
                "value" === b && (this.options.value = c, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), a.Widget.prototype._setOption.apply(this, arguments)
            },
            _value: function() {
                var a = this.options.value;
                return "number" != typeof a && (a = 0), Math.min(this.options.max, Math.max(this.min, a))
            },
            _percentage: function() {
                return 100 * this._value() / this.options.max
            },
            _refreshValue: function() {
                var a = this.value(),
                    b = this._percentage();
                this.oldValue !== a && (this.oldValue = a, this._trigger("change")), this.valueDiv.toggleClass("ui-corner-right", a === this.options.max).width(b.toFixed(0) + "%"), this.element.attr("aria-valuenow", a)
            }
        }), a.extend(a.ui.progressbar, {
            version: "1.8.9"
        })
    }(jQuery),
    function(a) {
        a.widget("ui.slider", a.ui.mouse, {
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var b = this,
                    c = this.options;
                if (this._mouseSliding = this._keySliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), c.disabled && this.element.addClass("ui-slider-disabled ui-disabled"), this.range = a([]), c.range && (c.range === !0 ? (this.range = a("<div></div>"), c.values || (c.values = [this._valueMin(), this._valueMin()]), c.values.length && 2 !== c.values.length && (c.values = [c.values[0], c.values[0]])) : this.range = a("<div></div>"), this.range.appendTo(this.element).addClass("ui-slider-range"), "min" !== c.range && "max" !== c.range || this.range.addClass("ui-slider-range-" + c.range), this.range.addClass("ui-widget-header")), 0 === a(".ui-slider-handle", this.element).length && a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle"), c.values && c.values.length)
                    for (; a(".ui-slider-handle", this.element).length < c.values.length;) a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
                this.handles = a(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all"), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(a) {
                    a.preventDefault()
                }).hover(function() {
                    c.disabled || a(this).addClass("ui-state-hover")
                }, function() {
                    a(this).removeClass("ui-state-hover")
                }).focus(function() {
                    c.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus"))
                }).blur(function() {
                    a(this).removeClass("ui-state-focus")
                }), this.handles.each(function(b) {
                    a(this).data("index.ui-slider-handle", b)
                }), this.handles.keydown(function(c) {
                    var d, e, f, g = !0,
                        h = a(this).data("index.ui-slider-handle");
                    if (!b.options.disabled) {
                        switch (c.keyCode) {
                            case a.ui.keyCode.HOME:
                            case a.ui.keyCode.END:
                            case a.ui.keyCode.PAGE_UP:
                            case a.ui.keyCode.PAGE_DOWN:
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                if (g = !1, !b._keySliding && (b._keySliding = !0, a(this).addClass("ui-state-active"), d = b._start(c, h), d === !1)) return
                        }
                        switch (f = b.options.step, d = e = b.options.values && b.options.values.length ? b.values(h) : b.value(), c.keyCode) {
                            case a.ui.keyCode.HOME:
                                e = b._valueMin();
                                break;
                            case a.ui.keyCode.END:
                                e = b._valueMax();
                                break;
                            case a.ui.keyCode.PAGE_UP:
                                e = b._trimAlignValue(d + (b._valueMax() - b._valueMin()) / 5);
                                break;
                            case a.ui.keyCode.PAGE_DOWN:
                                e = b._trimAlignValue(d - (b._valueMax() - b._valueMin()) / 5);
                                break;
                            case a.ui.keyCode.UP:
                            case a.ui.keyCode.RIGHT:
                                if (d === b._valueMax()) return;
                                e = b._trimAlignValue(d + f);
                                break;
                            case a.ui.keyCode.DOWN:
                            case a.ui.keyCode.LEFT:
                                if (d === b._valueMin()) return;
                                e = b._trimAlignValue(d - f)
                        }
                        return b._slide(c, h, e), g
                    }
                }).keyup(function(c) {
                    var d = a(this).data("index.ui-slider-handle");
                    b._keySliding && (b._keySliding = !1, b._stop(c, d), b._change(c, d), a(this).removeClass("ui-state-active"))
                }), this._refreshValue(), this._animateOff = !1
            },
            destroy: function() {
                return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
            },
            _mouseCapture: function(b) {
                var c, d, e, f, g, h = this.options;
                return !h.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), c = this._normValueFromMouse({
                    x: b.pageX,
                    y: b.pageY
                }), d = this._valueMax() - this._valueMin() + 1, f = this, this.handles.each(function(b) {
                    var h = Math.abs(c - f.values(b));
                    d > h && (d = h, e = a(this), g = b)
                }), h.range === !0 && this.values(1) === h.min && (g += 1, e = a(this.handles[g])), this._start(b, g) !== !1 && (this._mouseSliding = !0, f._handleIndex = g, e.addClass("ui-state-active").focus(), h = e.offset(), this._clickOffset = a(b.target).parents().andSelf().is(".ui-slider-handle") ? {
                    left: b.pageX - h.left - e.width() / 2,
                    top: b.pageY - h.top - e.height() / 2 - (parseInt(e.css("borderTopWidth"), 10) || 0) - (parseInt(e.css("borderBottomWidth"), 10) || 0) + (parseInt(e.css("marginTop"), 10) || 0)
                } : {
                    left: 0,
                    top: 0
                }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, c), this._animateOff = !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(a) {
                var b = this._normValueFromMouse({
                    x: a.pageX,
                    y: a.pageY
                });
                return this._slide(a, this._handleIndex, b), !1
            },
            _mouseStop: function(a) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._clickOffset = this._handleIndex = null, this._animateOff = !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(a) {
                var b;
                return "horizontal" === this.orientation ? (b = this.elementSize.width, a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), b = a / b, b > 1 && (b = 1), b < 0 && (b = 0), "vertical" === this.orientation && (b = 1 - b), a = this._valueMax() - this._valueMin(), this._trimAlignValue(this._valueMin() + b * a)
            },
            _start: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
            },
            _slide: function(a, b, c) {
                var d;
                this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && c < d) && (c = d), c !== this.values(b) && (d = this.values(), d[b] = c, a = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c,
                    values: d
                }), this.values(b ? 0 : 1), a !== !1 && this.values(b, c, !0))) : c !== this.value() && (a = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                }), a !== !1 && this.value(c))
            },
            _stop: function(a, b) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
            },
            _change: function(a, b) {
                if (!this._keySliding && !this._mouseSliding) {
                    var c = {
                        handle: this.handles[b],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c)
                }
            },
            value: function(a) {
                return arguments.length && (this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0)), this._value()
            },
            values: function(b, c) {
                var d, e, f;
                if (arguments.length > 1 && (this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b)), !arguments.length) return this._values();
                if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value();
                for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                this._refreshValue()
            },
            _setOption: function(b, c) {
                var d, e = 0;
                switch (a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), b) {
                    case "disabled":
                        c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.attr("disabled", "disabled"), this.element.addClass("ui-disabled")) : (this.handles.removeAttr("disabled"), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), d = 0; d < e; d += 1) this._change(null, d);
                        this._animateOff = !1
                }
            },
            _value: function() {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function(a) {
                var b, c;
                if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b);
                for (b = this.options.values.slice(), c = 0; c < b.length; c += 1) b[c] = this._trimAlignValue(b[c]);
                return b
            },
            _trimAlignValue: function(a) {
                if (a <= this._valueMin()) return this._valueMin();
                if (a >= this._valueMax()) return this._valueMax();
                var b = this.options.step > 0 ? this.options.step : 1,
                    c = (a - this._valueMin()) % b;
                return alignValue = a - c, 2 * Math.abs(c) >= b && (alignValue += c > 0 ? b : -b), parseFloat(alignValue.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var b, c, d, e, f, g = this.options.range,
                    h = this.options,
                    i = this,
                    j = !this._animateOff && h.animate,
                    k = {};
                this.options.values && this.options.values.length ? this.handles.each(function(d) {
                    b = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = b + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                        left: b + "%"
                    }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                        width: b - c + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({
                        bottom: b + "%"
                    }, h.animate), 1 === d && i.range[j ? "animate" : "css"]({
                        height: b - c + "%"
                    }, {
                        queue: !1,
                        duration: h.animate
                    }))), c = b
                }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), b = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === i.orientation ? "left" : "bottom"] = b + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                    width: b + "%"
                }, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({
                    width: 100 - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({
                    height: b + "%"
                }, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({
                    height: 100 - b + "%"
                }, {
                    queue: !1,
                    duration: h.animate
                }))
            }
        }), a.extend(a.ui.slider, {
            version: "1.8.9"
        })
    }(jQuery),
    function(a, b) {
        function c() {
            return ++e
        }

        function d() {
            return ++f
        }
        var e = 0,
            f = 0;
        a.widget("ui.tabs", {
            options: {
                add: null,
                ajaxOptions: null,
                cache: !1,
                cookie: null,
                collapsible: !1,
                disable: null,
                disabled: [],
                enable: null,
                event: "click",
                fx: null,
                idPrefix: "ui-tabs-",
                load: null,
                panelTemplate: "<div></div>",
                remove: null,
                select: null,
                show: null,
                spinner: "<em>Loading&#8230;</em>",
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            },
            _create: function() {
                this._tabify(!0)
            },
            _setOption: function(a, b) {
                "selected" == a ? this.options.collapsible && b == this.options.selected || this.select(b) : (this.options[a] = b, this._tabify())
            },
            _tabId: function(a) {
                return a.title && a.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + c()
            },
            _sanitizeSelector: function(a) {
                return a.replace(/:/g, "\\:")
            },
            _cookie: function() {
                var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + d());
                return a.cookie.apply(null, [b].concat(a.makeArray(arguments)))
            },
            _ui: function(a, b) {
                return {
                    tab: a,
                    panel: b,
                    index: this.anchors.index(a)
                }
            },
            _cleanup: function() {
                this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                    var b = a(this);
                    b.html(b.data("label.tabs")).removeData("label.tabs")
                })
            },
            _tabify: function(c) {
                function d(b, c) {
                    b.css("display", ""), !a.support.opacity && c.opacity && b[0].style.removeAttribute("filter")
                }
                var e = this,
                    f = this.options,
                    g = /^#.+/;
                this.list = this.element.find("ol,ul").eq(0), this.lis = a(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
                    return a("a", this)[0]
                }), this.panels = a([]), this.anchors.each(function(b, c) {
                    var d, h = a(c).attr("href"),
                        i = h.split("#")[0];
                    i && (i === location.toString().split("#")[0] || (d = a("base")[0]) && i === d.href) && (h = c.hash, c.href = h), g.test(h) ? e.panels = e.panels.add(e.element.find(e._sanitizeSelector(h))) : h && "#" !== h ? (a.data(c, "href.tabs", h), a.data(c, "load.tabs", h.replace(/#.*$/, "")), h = e._tabId(c), c.href = "#" + h, c = e.element.find("#" + h), c.length || (c = a(f.panelTemplate).attr("id", h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(e.panels[b - 1] || e.list), c.data("destroy.tabs", !0)), e.panels = e.panels.add(c)) : f.disabled.push(b)
                }), c ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), f.selected === b ? (location.hash && this.anchors.each(function(a, b) {
                    if (b.hash == location.hash) return f.selected = a, !1
                }), "number" != typeof f.selected && f.cookie && (f.selected = parseInt(e._cookie(), 10)), "number" != typeof f.selected && this.lis.filter(".ui-tabs-selected").length && (f.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), f.selected = f.selected || (this.lis.length ? 0 : -1)) : null === f.selected && (f.selected = -1), f.selected = f.selected >= 0 && this.anchors[f.selected] || f.selected < 0 ? f.selected : 0, f.disabled = a.unique(f.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"), function(a) {
                    return e.lis.index(a)
                }))).sort(), a.inArray(f.selected, f.disabled) != -1 && f.disabled.splice(a.inArray(f.selected, f.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), f.selected >= 0 && this.anchors.length && (e.element.find(e._sanitizeSelector(e.anchors[f.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(f.selected).addClass("ui-tabs-selected ui-state-active"), e.element.queue("tabs", function() {
                    e._trigger("show", null, e._ui(e.anchors[f.selected], e.element.find(e._sanitizeSelector(e.anchors[f.selected].hash))[0]))
                }), this.load(f.selected)), a(window).bind("unload", function() {
                    e.lis.add(e.anchors).unbind(".tabs"), e.lis = e.anchors = e.panels = null
                })) : f.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[f.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), f.cookie && this._cookie(f.selected, f.cookie), c = 0;
                for (var h; h = this.lis[c]; c++) a(h)[a.inArray(c, f.disabled) == -1 || a(h).hasClass("ui-tabs-selected") ? "removeClass" : "addClass"]("ui-state-disabled");
                if (f.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs"), "mouseover" !== f.event) {
                    var i = function(a, b) {
                            b.is(":not(.ui-state-disabled)") && b.addClass("ui-state-" + a)
                        },
                        j = function(a, b) {
                            b.removeClass("ui-state-" + a)
                        };
                    this.lis.bind("mouseover.tabs", function() {
                        i("hover", a(this))
                    }), this.lis.bind("mouseout.tabs", function() {
                        j("hover", a(this))
                    }), this.anchors.bind("focus.tabs", function() {
                        i("focus", a(this).closest("li"))
                    }), this.anchors.bind("blur.tabs", function() {
                        j("focus", a(this).closest("li"))
                    })
                }
                var k, l;
                f.fx && (a.isArray(f.fx) ? (k = f.fx[0], l = f.fx[1]) : k = l = f.fx);
                var m = l ? function(b, c) {
                        a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.hide().removeClass("ui-tabs-hide").animate(l, l.duration || "normal", function() {
                            d(c, l), e._trigger("show", null, e._ui(b, c[0]))
                        })
                    } : function(b, c) {
                        a(b).closest("li").addClass("ui-tabs-selected ui-state-active"), c.removeClass("ui-tabs-hide"), e._trigger("show", null, e._ui(b, c[0]))
                    },
                    n = k ? function(a, b) {
                        b.animate(k, k.duration || "normal", function() {
                            e.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), d(b, k), e.element.dequeue("tabs")
                        })
                    } : function(a, b) {
                        e.lis.removeClass("ui-tabs-selected ui-state-active"), b.addClass("ui-tabs-hide"), e.element.dequeue("tabs")
                    };
                this.anchors.bind(f.event + ".tabs", function() {
                    var b = this,
                        c = a(b).closest("li"),
                        d = e.panels.filter(":not(.ui-tabs-hide)"),
                        g = e.element.find(e._sanitizeSelector(b.hash));
                    if (c.hasClass("ui-tabs-selected") && !f.collapsible || c.hasClass("ui-state-disabled") || c.hasClass("ui-state-processing") || e.panels.filter(":animated").length || e._trigger("select", null, e._ui(this, g[0])) === !1) return this.blur(), !1;
                    if (f.selected = e.anchors.index(this), e.abort(), f.collapsible) {
                        if (c.hasClass("ui-tabs-selected")) return f.selected = -1, f.cookie && e._cookie(f.selected, f.cookie), e.element.queue("tabs", function() {
                            n(b, d)
                        }).dequeue("tabs"), this.blur(), !1;
                        if (!d.length) return f.cookie && e._cookie(f.selected, f.cookie), e.element.queue("tabs", function() {
                            m(b, g)
                        }), e.load(e.anchors.index(this)), this.blur(), !1
                    }
                    if (f.cookie && e._cookie(f.selected, f.cookie), !g.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                    d.length && e.element.queue("tabs", function() {
                        n(b, d)
                    }), e.element.queue("tabs", function() {
                        m(b, g)
                    }), e.load(e.anchors.index(this)), a.browser.msie && this.blur()
                }), this.anchors.bind("click.tabs", function() {
                    return !1
                })
            },
            _getIndex: function(a) {
                return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$=" + a + "]"))), a
            },
            destroy: function() {
                var b = this.options;
                return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
                    var b = a.data(this, "href.tabs");
                    b && (this.href = b);
                    var c = a(this).unbind(".tabs");
                    a.each(["href", "load", "cache"], function(a, b) {
                        c.removeData(b + ".tabs")
                    })
                }), this.lis.unbind(".tabs").add(this.panels).each(function() {
                    a.data(this, "destroy.tabs") ? a(this).remove() : a(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
                }), b.cookie && this._cookie(null, b.cookie), this
            },
            add: function(c, d, e) {
                e === b && (e = this.anchors.length);
                var f = this,
                    g = this.options;
                d = a(g.tabTemplate.replace(/#\{href\}/g, c).replace(/#\{label\}/g, d)), c = c.indexOf("#") ? this._tabId(a("a", d)[0]) : c.replace("#", ""), d.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
                var h = f.element.find("#" + c);
                return h.length || (h = a(g.panelTemplate).attr("id", c).data("destroy.tabs", !0)), h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), e >= this.lis.length ? (d.appendTo(this.list), h.appendTo(this.list[0].parentNode)) : (d.insertBefore(this.lis[e]), h.insertBefore(this.panels[e])), g.disabled = a.map(g.disabled, function(a) {
                    return a >= e ? ++a : a
                }), this._tabify(), 1 == this.anchors.length && (g.selected = 0, d.addClass("ui-tabs-selected ui-state-active"), h.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
                    f._trigger("show", null, f._ui(f.anchors[0], f.panels[0]))
                }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[e], this.panels[e])), this
            },
            remove: function(b) {
                b = this._getIndex(b);
                var c = this.options,
                    d = this.lis.eq(b).remove(),
                    e = this.panels.eq(b).remove();
                return d.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(b + (b + 1 < this.anchors.length ? 1 : -1)), c.disabled = a.map(a.grep(c.disabled, function(a) {
                    return a != b
                }), function(a) {
                    return a >= b ? --a : a
                }), this._tabify(), this._trigger("remove", null, this._ui(d.find("a")[0], e[0])), this
            },
            enable: function(b) {
                b = this._getIndex(b);
                var c = this.options;
                if (a.inArray(b, c.disabled) != -1) return this.lis.eq(b).removeClass("ui-state-disabled"), c.disabled = a.grep(c.disabled, function(a) {
                    return a != b
                }), this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b])), this
            },
            disable: function(a) {
                a = this._getIndex(a);
                var b = this.options;
                return a != b.selected && (this.lis.eq(a).addClass("ui-state-disabled"), b.disabled.push(a), b.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[a], this.panels[a]))), this
            },
            select: function(a) {
                if (a = this._getIndex(a), a == -1) {
                    if (!this.options.collapsible || this.options.selected == -1) return this;
                    a = this.options.selected
                }
                return this.anchors.eq(a).trigger(this.options.event + ".tabs"), this
            },
            load: function(b) {
                b = this._getIndex(b);
                var c = this,
                    d = this.options,
                    e = this.anchors.eq(b)[0],
                    f = a.data(e, "load.tabs");
                if (this.abort(), f && (0 === this.element.queue("tabs").length || !a.data(e, "cache.tabs"))) {
                    if (this.lis.eq(b).addClass("ui-state-processing"), d.spinner) {
                        var g = a("span", e);
                        g.data("label.tabs", g.html()).html(d.spinner)
                    }
                    return this.xhr = a.ajax(a.extend({}, d.ajaxOptions, {
                        url: f,
                        success: function(f, g) {
                            c.element.find(c._sanitizeSelector(e.hash)).html(f), c._cleanup(), d.cache && a.data(e, "cache.tabs", !0), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                            try {
                                d.ajaxOptions.success(f, g)
                            } catch (a) {}
                        },
                        error: function(a, f) {
                            c._cleanup(), c._trigger("load", null, c._ui(c.anchors[b], c.panels[b]));
                            try {
                                d.ajaxOptions.error(a, f, b, e)
                            } catch (a) {}
                        }
                    })), c.element.dequeue("tabs"), this
                }
                this.element.dequeue("tabs")
            },
            abort: function() {
                return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)),
                    this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
            },
            url: function(a, b) {
                return this.anchors.eq(a).removeData("cache.tabs").data("load.tabs", b), this
            },
            length: function() {
                return this.anchors.length
            }
        }), a.extend(a.ui.tabs, {
            version: "1.8.9"
        }), a.extend(a.ui.tabs.prototype, {
            rotation: null,
            rotate: function(a, b) {
                var c = this,
                    d = this.options,
                    e = c._rotate || (c._rotate = function(b) {
                        clearTimeout(c.rotation), c.rotation = setTimeout(function() {
                            var a = d.selected;
                            c.select(++a < c.anchors.length ? a : 0)
                        }, a), b && b.stopPropagation()
                    });
                return b = c._unrotate || (c._unrotate = b ? function() {
                    t = d.selected, e()
                } : function(a) {
                    a.clientX && c.rotate(null)
                }), a ? (this.element.bind("tabsshow", e), this.anchors.bind(d.event + ".tabs", b), e()) : (clearTimeout(c.rotation), this.element.unbind("tabsshow", e), this.anchors.unbind(d.event + ".tabs", b), delete this._rotate, delete this._unrotate), this
            }
        })
    }(jQuery),
    function(a) {
        function b(a, b) {
            if (!(!c && a.originalEvent.touches.length > 1 || c && !a.isPrimary)) {
                a.preventDefault();
                var d = c ? a.originalEvent : a.originalEvent.changedTouches[0],
                    e = document.createEvent("MouseEvents");
                e.initMouseEvent(b, !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(e)
            }
        }
        var c = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
        if (a.support.touch = "ontouchend" in document || c, a.support.touch) {
            var d, e = a.ui.mouse.prototype,
                f = e._mouseInit,
                g = e._mouseDestroy;
            e._touchStart = function(a) {
                var e = this;
                d || !c && !e._mouseCapture(a.originalEvent.changedTouches[0]) || (d = !0, e._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
            }, e._touchMove = function(a) {
                d && (this._touchMoved = !0, b(a, "mousemove"))
            }, e._touchEnd = function(a) {
                d && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), d = !1)
            }, e._mouseInit = function() {
                var b = this;
                c ? b.element.bind({
                    pointerDown: a.proxy(b, "_touchStart"),
                    pointerMove: a.proxy(b, "_touchMove"),
                    pointerUp: a.proxy(b, "_touchEnd"),
                    MSPointerDown: a.proxy(b, "_touchStart"),
                    MSPointerMove: a.proxy(b, "_touchMove"),
                    MSPointerUp: a.proxy(b, "_touchEnd")
                }) : b.element.bind({
                    touchstart: a.proxy(b, "_touchStart"),
                    touchmove: a.proxy(b, "_touchMove"),
                    touchend: a.proxy(b, "_touchEnd")
                }), f.call(b)
            }, e._mouseDestroy = function() {
                var b = this;
                b.element.unbind({
                    touchstart: a.proxy(b, "_touchStart"),
                    touchmove: a.proxy(b, "_touchMove"),
                    touchend: a.proxy(b, "_touchEnd")
                }), g.call(b)
            }
        }
    }(jQuery);
var test_bunch = {
        create: function(a) {
            for (var b = $(window).width(), c = [], d = 0; d < a.length; d++) {
                for (var e = 1; e < a[d].variants.length; e++) {
                    var f = a[d].variants[0],
                        g = a[d].variants[e],
                        h = $("<div></div>").addClass("draggable");
                    h.attr("id", "block" + d + "bunchdraggable" + e), h.data("i", d), h.data("j", e), g.renewable ? h.data("renewable", g.renewable) : f.renewable ? h.data("renewable", f.renewable) : h.data("renewable", "false");
                    var i = $("<div></div>");
                    if (g.value && i.html(g.value), f.style && h.css(f.style), f.innerStyle && i.css(f.innerStyle), g.style && h.css(g.style), g.innerStyle && i.css(g.innerStyle), b < 800 ? (f["style-sm"] && h.css(f["style-sm"]), f["innerStyle-sm"] && i.css(f["innerStyle-sm"]), g["style-sm"] && h.css(g["style-sm"]), g["innerStyle-sm"] && i.css(g["innerStyle-sm"])) : b < 1200 ? (f["style-md"] && h.css(f["style-md"]), f["innerStyle-md"] && i.css(f["innerStyle-md"]), g["style-md"] && h.css(g["style-md"]), g["innerStyle-md"] && i.css(g["innerStyle-md"])) : (f["style-lg"] && h.css(f["style-lg"]), f["innerStyle-lg"] && i.css(f["innerStyle-lg"]), g["style-lg"] && h.css(g["style-lg"]), g["innerStyle-lg"] && i.css(g["innerStyle-lg"])), i.css("width") && "0px" != i.css("width") || !h.css("width") || i.css({
                            width: h.css("width")
                        }), i.css("height") && "0px" != i.css("height") || !h.css("height") || i.css({
                            height: h.css("height")
                        }), g.renewable ? h.data("renewable", "true") : h.data("renewable", "false"), g.hint && h.data("hint", g.hint), g.onStopDragging ? h.data("stopdragging", g.onStopDragging) : f.onStopDragging ? h.data("stopdragging", f.onStopDragging) : h.data("stopdragging", "defaultplace"), h.append(i), g.renewable) {
                        var j = h.clone().addClass("defaultPlace1"),
                            k = h.clone().addClass("defaultPlace2"),
                            l = h.clone().addClass("defaultPlace3");
                        c.push(j), c.push(k), c.push(l)
                    }
                    h.draggable({
                        stop: test_bunch.stopdragging
                    }), c.push(h)
                }
                for (var e = 1; e < a[d].bunches.length; e++) {
                    var m = a[d].bunches[0],
                        n = a[d].bunches[e],
                        o = $("<div></div>").addClass("droppable");
                    o.attr("id", "block" + d + "bunch" + e), o.data("i", d), o.data("j", e), m.style && o.css(m.style), n.style && o.css(n.style), b < 800 ? (m["style-sm"] && o.css(m["style-sm"]), n["style-sm"] && o.css(n["style-sm"])) : b < 1200 ? (m["style-md"] && o.css(m["style-md"]), n["style-md"] && o.css(n["style-md"])) : (m["style-lg"] && o.css(m["style-lg"]), n["style-lg"] && o.css(n["style-lg"]));
                    var p = n.size ? n : m.size ? m.size : n.values.length;
                    o.data("size", p), m.horizontal && o.data("horizontal", "true"), n.horizontal ? o.data("horizontal", "true") : 0 == n.horizontal && o.data("horizontal", "false"), o.droppable({
                        drop: test_bunch.drop,
                        out: test_bunch.out
                    }), c.push(o)
                }
            }
            return $(c)
        },
        resize: function() {
            for (var a = 0; a < task[data.currentTask].test_bunch.length; a++)
                for (var b = 1; b < task[data.currentTask].test_bunch[a].bunches.length; b++) test_bunch.setElementsPositions($("#block" + a + "bunch" + b))
        },
        check: function() {
            var a = !0,
                b = {},
                c = {};
            for (var d in data.data[data.currentTask].test_bunch) {
                var e = [];
                c[d] = {};
                for (var f = 0; f < data.data[data.currentTask].test_bunch[d].length; f++) {
                    var g = data.data[data.currentTask].test_bunch[d][f],
                        h = task[data.currentTask].test_bunch[g.i].variants[g.j].value;
                    c[d][h] = g, c[d][h].pos = f, e.push(h)
                }
                b[d] = e
            }
            for (var f = 0; f < task[data.currentTask].test_bunch.length; f++)
                for (var i = 1; i < task[data.currentTask].test_bunch[f].bunches.length; i++) {
                    var j = task[data.currentTask].test_bunch[f].bunches[i],
                        k = j.values.slice(0);
                    b["block" + f + "bunch" + i] || (b["block" + f + "bunch" + i] = [], a = !1);
                    for (var l = 0; l < b["block" + f + "bunch" + i].length; l++)
                        for (var m = 0; m < k.length; m++)
                            if (b["block" + f + "bunch" + i][l] == k[m]) {
                                var n = c["block" + f + "bunch" + i][b["block" + f + "bunch" + i][l]];
                                if (b["block" + f + "bunch" + i].splice(l, 1), k.splice(m, 1), n) {
                                    var o = $("#block" + n.i + "bunchdraggable" + n.j + n.postfix);
                                    o.addClass("draggable-right"), setTimeout(function(a) {
                                        a.removeClass("draggable-right")
                                    }, 1e3, o)
                                }
                                l--, m--
                            }
                    k.length > 0 && (a = !1);
                    for (var l = 0; b["block" + f + "bunch" + i].length; l++) {
                        a = !1;
                        var n = !!c["block" + f + "bunch" + i] && c["block" + f + "bunch" + i][b["block" + f + "bunch" + i][l]];
                        if (!n) break;
                        var o = $("#block" + n.i + "bunchdraggable" + n.j + n.postfix);
                        o.addClass("draggable-wrong"), setTimeout(function(a) {
                            test_bunch.toDefaultPlace(a)
                        }, 500, o), dataset.splice(n.pos, 1), test_bunch.setElementsPositions($("#block" + f + "bunch" + i))
                    }
                }
            return {
                result: a,
                score: 0
            }
        },
        toDefaultPlace: function(a) {
            var b = {},
                c = task[data.currentTask].test_bunch[a.data("i")].variants[0],
                d = task[data.currentTask].test_bunch[a.data("i")].variants[a.data("j")];
            c.style && c.style.top && (b.top = c.style.top), c.style && c.style.left && (b.left = c.style.left), d.style && d.style.top && (b.top = d.style.top), d.style && d.style.left && (b.left = d.style.left), a.animate(b), a.removeClass("draggable-wrong"), a.removeClass("in-the-droppable")
        },
        stopdragging: function(a, b) {
            var c = $(a.target);
            c.hasClass("in-the-droppable") || "true" == c.data("renewable") ? "true" == c.data("renewable") && (test_bunch.addDuplicate(c), c.hasClass("in-the-droppable") || c.remove()) : "defaultplace" == c.data("stopdragging") && test_bunch.toDefaultPlace(c)
        },
        addDuplicate: function(a) {
            var b = a.clone(!1);
            b.data("i", a.data("i")), b.data("j", a.data("j")), b.data("hint", a.data("hint")), b.data("renewable", "true"), newid = a.attr("id").split("_")[0] + "_" + Math.floor(Date.now() / 1e3), b.attr("id", newid), getContainer().find(".field:eq(0)").append(b), b.draggable({
                stop: test_bunch.stopdragging
            }), b.removeClass("draggable-right"), b.removeClass("draggable-wrong"), b.removeClass("in-the-droppable"), b.css("display", "none"), test_bunch.toDefaultPlace(b), setTimeout(function(a) {
                a.show()
            }, 500, b)
        },
        drop: function(a, b) {
            activate(), test_bunch.out(a, b);
            var c = $(a.target),
                d = b.draggable;
            data.data[data.currentTask].test_bunch || (data.data[data.currentTask].test_bunch = {}), data.data[data.currentTask].test_bunch[c.attr("id")] || (data.data[data.currentTask].test_bunch[c.attr("id")] = []), dataset = data.data[data.currentTask].test_bunch[c.attr("id")];
            var e = d.attr("id").split("_")[1] ? "_" + d.attr("id").split("_")[1] : "";
            dataset.push({
                i: d.data("i"),
                j: d.data("j"),
                postfix: e
            }), test_bunch.setElementsPositions(c), task[data.currentTask].settings && task[data.currentTask].settings.autoCheck && check()
        },
        out: function(a, b) {
            activate();
            var c = $(a.target),
                d = b.draggable;
            if (data.data[data.currentTask].test_bunch && data.data[data.currentTask].test_bunch[c.attr("id")])
                for (var e = data.data[data.currentTask].test_bunch[c.attr("id")], f = 0; f < e.length; f++) e[f].i == d.data("i") && e[f].j == d.data("j") && ($("#block" + e[f].i + "bunchdraggable" + e[f].j + e[f].postfix).removeClass("in-the-droppable"), e.splice(f, 1), f--);
            test_bunch.setElementsPositions(c), task[data.currentTask].settings && task[data.currentTask].settings.autoCheck && check()
        },
        setElementsPositions: function(a) {
            if (data.data[data.currentTask].test_bunch && data.data[data.currentTask].test_bunch[a.attr("id")])
                for (var b = data.data[data.currentTask].test_bunch[a.attr("id")], c = a.position().top, d = a.position().left, e = 0; e < b.length; e++) {
                    var f = $("#block" + b[e].i + "bunchdraggable" + b[e].j + b[e].postfix);
                    f.addClass("in-the-droppable"), "true" == a.data("horizontal") ? (f.css("left", d + "px"), f.css({
                        top: a.css("top")
                    }), d += f.width()) : (f.css("top", c + "px"), f.css({
                        left: a.css("left")
                    }), c += f.height())
                }
        }
    },
    test_checkbox = {
        create: function(a) {
            var b = $("#mcStyles");
            b[0] || (b = $('<style type="text/css" id="mcStyles"></style>')), getContainer().append(b), b.html(".magic-checkbox + label{padding-left:" + getSize(38) + "px} .magic-checkbox + label:before{width:" + getSize(25) + "px;height:" + getSize(25) + "px;border-radius:" + getSize(4) + "px} .magic-checkbox + label::after{top:" + getSize(1) + "px;left:" + getSize(9) + "px;width:" + getSize(9) + "px;height:" + getSize(18) + "px;border-width:" + getSize(2) + "px;}");
            for (var c = [], d = 0; d < a.length; d++) {
                var e = "";
                if (a[d].text) var f = $('<div class="checkbox"><input type="checkbox" class="magic-checkbox" id="checkbox' + d + '" /><label for="checkbox' + d + '"><div>' + a[d].text + "</div></label></div>"),
                    g = f.children("input");
                else var f = $('<div class="checkbox"><input type="checkbox" class="magic-checkbox" id="checkbox' + d + '" /></div>'),
                    g = f;
                var h = 1;
                a[d].area && (f.data("widgetarea", a[d].area), task[data.currentTask].areas && task[data.currentTask].areas[a[d].area] && task[data.currentTask].areas[a[d].area].scale && (h = task[data.currentTask].areas[a[d].area].scale)), data.data[data.currentTask] && data.data[data.currentTask]["checkbox" + d] && g.attr("checked", "true"), a[d].hint && g.data("hint", a[d].hint), a[d].style && g.css(a[d].style), a[d].group ? g.data("checkboxgroup", a[d].group) : g.data("checkboxgroup", "default"), a[d].style && f.css(a[d].style), g.change(function() {
                    enableButton(), activate();
                    var a = $(this).data("checkboxgroup");
                    $(".checkbox").each(function() {
                        var b = $(this).children("input:eq(0)");
                        b.data("checkboxgroup") == a && ($(this).find("label").removeClass("error"), $(this).find("label").removeClass("correct"))
                    }), data.data[data.currentTask] || (data.data[data.currentTask] = {}), data.data[data.currentTask][this.id] = this.checked, task[data.currentTask].settings && task[data.currentTask].settings.autoCheck && check()
                }), c.push(f), setTimeout(function(a) {
                    a.find("label").find("div").css("height", a.height() + "px")
                }, 100, f), c.push($("<style>" + e + "</style>"))
            }
            return $(c)
        },
        check: function() {
            var a = !0,
                b = {};
            if (task[data.currentTask].test_checkbox) {
                for (var c = 0; c < task[data.currentTask].test_checkbox.length; c++)
                    if ($("#checkbox" + c)[0].checked && !task[data.currentTask].test_checkbox[c].right || !$("#checkbox" + c)[0].checked && task[data.currentTask].test_checkbox[c].right) {
                        var d = $("#checkbox" + c).data("checkboxgroup");
                        b[d] = !0
                    }
                for (var c = 0; c < task[data.currentTask].test_checkbox.length; c++) {
                    var d = $("#checkbox" + c).data("checkboxgroup");
                    !b[d] || task[data.currentTask].test_checkbox[c].checkShow && "all" != task[data.currentTask].test_checkbox[c].checkShow && "onlyWrong" != task[data.currentTask].test_checkbox[c].checkShow ? b[d] || task[data.currentTask].test_checkbox[c].checkShow && "all" != task[data.currentTask].test_checkbox[c].checkShow && "onlyRight" != task[data.currentTask].test_checkbox[c].checkShow || $("#checkbox" + c).parent().find("label").addClass("correct") : ($("#checkbox" + c).parent().find("label").addClass("error"), a = !1)
                }
            }
            return {
                result: a,
                score: 0
            }
        }
    },
    test_checkmessage = {
        create: function(a) {
            a.wrong = a.wrong || "dialog", a.right = a.right || "dialog";
            var b = $("<div></div>").addClass("check-message-overlay");
            b.css("display", "none");
            var c = $("<div></div>").addClass("check-message");
            c.data("wrong", a.wrong), c.data("right", a.right);
            var d = generateButton({
                    type: "dark",
                    text: "Продолжить",
                    size: "large"
                }).addClass("check-message-button"),
                e = $("<div> </div>").addClass("check-message-content");
            return c.css("display", "none"), c.append(e), d.click(function() {
                $(".check-message-overlay").hide(), $(".check-message").hide(), $(this).hide(), task[data.currentTask + 1] && (getContainer().hasClass("final-overlay") || task[0].hardMode) && nexStep()
            }), c.append(d), a.style && c.css(a.style), windowWidth = $(window).width(), windowWidth < 800 && a["style-sm"] ? c.css(a["style-sm"]) : windowWidth > 799 && windowWidth < 1200 && a["style-md"] ? c.css(a["style-md"]) : windowWidth > 1199 && a["style-lg"] && c.css(a["style-lg"]), getContainer().find(".footer").hide(), $([b, c])
        },
        resize: function() {
            var a = $(window).width(),
                b = task[data.currentTask].test_checkmessage,
                c = getContainer().find(".check-message:eq(0)");
            b.style && c.css(b.style), a < 800 && b["style-sm"] ? c.css(b["style-sm"]) : a > 799 && a < 1200 && b["style-md"] ? c.css(b["style-md"]) : a > 1199 && b["style-lg"] && c.css(b["style-lg"])
        },
        check: function() {
            return setTimeout(function() {
                var a = getContainer().find(".check-message:eq(0)"),
                    b = getContainer().find(".check-message-content:eq(0)");
                getContainer().hasClass("final-overlay") ? "message" == a.data("right") ? (a.find(".check-message-button:eq(0)").hide(), a.show()) : "dialog" == a.data("right") ? (a.find(".check-message-button:eq(0)").show(), getContainer().find(".check-message-overlay:eq(0)").show(), a.show()) : "auto" == a.data("right") && (a.find(".check-message-button:eq(0)").hide(), a.css("display", "none"), setTimeout(nexStep, 1e3)) : "message" == a.data("wrong") ? (a.find(".check-message-button:eq(0)").hide(), a.show()) : "dialog" == a.data("wrong") ? (a.find(".check-message-button:eq(0)").show(), getContainer().find(".check-message-overlay:eq(0)").show(), a.show()) : "auto" == a.data("wrong") && (a.find(".check-message-button:eq(0)").hide(), a.css("display", "none"));
                var c = getContainer().find(".right-wrong-message:eq(0) div:eq(0)").html().split("|");
                if (b.html(""), b.append("<div>" + c[0] + "</div>"), c[1]) {
                    var d = $("<a>Подсказка</a>").addClass("local-link").addClass("hint-link");
                    d.click(function() {
                        var a = $(this).parent().find(".check-message-hint");
                        "none" == a.css("display") ? a.show() : a.hide()
                    }), b.append(d);
                    var e = $("<div>" + c[1] + "</div>").addClass("check-message-hint");
                    e.css("display", "none"), b.append(e)
                }
            }, 50), {
                result: !0,
                score: 0
            }
        }
    },
    test_conveyor = {
        step: {},
        create: function(a) {
            for (var b = [], c = $(window).width(), d = 0; d < a.length; d++) {
                test_conveyor.step[d] = 0;
                for (var e = a[d].droppables[0], f = 1; f < a[d].droppables.length; f++) {
                    var g = $("<div></div>").addClass("droppable");
                    e.style && g.css(e.style), c < 800 && e["style-sm"] ? g.css(e["style-sm"]) : c > 799 && c < 1200 && e["style-md"] ? g.css(e["style-md"]) : c > 1199 && e["style-lg"] && g.css(e["style-lg"]);
                    var h = a[d].droppables[f];
                    h.style && g.css(h.style), c < 800 && h["style-sm"] ? g.css(h["style-sm"]) : c > 799 && c < 1200 && h["style-md"] ? g.css(h["style-md"]) : c > 1199 && h["style-lg"] && g.css(h["style-lg"]), g.data("i", d), g.data("j", f), g.droppable({
                        scope: "droppables" + d,
                        drop: test_conveyor.onDrop,
                        out: test_conveyor.onOut
                    }), b.push(g)
                }
                for (var i = a[d].draggables[0], f = 1; f < a[d].draggables.length; f++) {
                    var j = $("<div></div>").addClass("draggable").addClass("conveyor");
                    j.attr("id", "conveyordraggable" + d + "_" + f), i.style && j.css(i.style), c < 800 && i["style-sm"] ? j.css(i["style-sm"]) : c > 799 && c < 1200 && i["style-md"] ? j.css(i["style-md"]) : c > 1199 && i["style-lg"] && j.css(i["style-lg"]);
                    var k = a[d].draggables[f];
                    k.style && j.css(k.style), c < 800 && k["style-sm"] ? j.css(k["style-sm"]) : c > 799 && c < 1200 && k["style-md"] ? j.css(k["style-md"]) : c > 1199 && k["style-lg"] && j.css(k["style-lg"]), k.animation && k.animation.type ? (j.data("animation", k.animation.type), k.animation.params && j.data("animationParams", JSON.stringify(k.animation.params))) : i.animation && i.animation.type ? (j.data("animation", i.animation.type), i.animation.params && j.data("animationParams", JSON.stringify(i.animation.params))) : j.data("animation", "slide"), k.afterRight ? j.data("afterRight", k.afterRight) : "disable" == i.afterRight ? j.data("afterRight", i.afterRight) : j.data("afterRight", "hide"), j.data("i", d), j.data("j", f), j.css("display", "none"), j.draggable({
                        scope: "droppables" + d,
                        containment: "parent",
                        start: test_conveyor.onStartDragging
                    }), 1 == f && ("slide" == j.data("animation") ? setTimeout(function(a) {
                        var b = a.css("height");
                        a.draggable("disable"), a.css("height", "500px"), a.show("slide", {
                            direction: "down"
                        }, 1e3, function() {
                            b && a.css({
                                height: b
                            }), a.draggable("enable")
                        })
                    }, 1e3, j) : "animate" == j.data("animation") && setTimeout(function(a) {
                        var b = !!j.data("animationParams") && JSON.parse(j.data("animationParams"));
                        if (b) {
                            var c = {};
                            b.fromX && (c.left = a.css("left"), a.css({
                                left: b.fromX
                            })), b.fromY && (c.top = a.css("top"), a.css({
                                top: b.fromY
                            })), a.show(), a.animate(c, 2e3)
                        }
                    }, 1e3, j)), b.push(j)
                }
            }
            return $(b)
        },
        onDrop: function(a, b) {
            var c = $(a.target),
                d = b.draggable;
            d.css({
                top: c.css("top")
            }), d.css({
                left: c.css("left")
            });
            var e = parseInt(d.data("j")) - 1,
                f = parseInt(c.data("j")) - 1,
                g = c.data("i");
            task[data.currentTask].test_conveyor[g].matrix && task[data.currentTask].test_conveyor[g].matrix[e] && task[data.currentTask].test_conveyor[g].matrix[e][f] && (task[data.currentTask].test_conveyor[g].matrix[e][f].right && (test_conveyor.step[g]++, d.draggable("disable"), setTimeout(function(a) {
                var b = a.data("j");
                "hide" == a.data("afterRight") ? a.hide("scale", {
                    origin: ["top", "center"]
                }, "1000") : "disable" == a.data("afterRight") && a.draggable("disable");
                var c = getContainer().find(".conveyor:eq(" + b + ")");
                if ("slide" == c.data("animation")) {
                    var e = c.css("height");
                    c.css("height", "500px"), c.draggable("disable"), c.show("slide", {
                        direction: "down"
                    }, 1e3, function() {
                        e && c.css({
                            height: e
                        }), c.draggable("enable")
                    })
                } else if ("animate" == c.data("animation")) {
                    var f = !!d.data("animationParams") && JSON.parse(d.data("animationParams"));
                    if (f) {
                        var g = {};
                        f.fromX && (g.left = c.css("left"), c.css({
                            left: f.fromX
                        })), f.fromY && (g.top = c.css("top"), c.css({
                            top: f.fromY
                        })), c.show(), c.animate(g, 2e3)
                    }
                }
            }, 1e3, d)), task[data.currentTask].test_conveyor[g].matrix[e][f].onDrop && task[data.currentTask].test_conveyor[g].matrix[e][f].onDrop())
        },
        onOut: function(a, b) {},
        onStartDragging: function(a, b) {
            $(a.target).stop()
        },
        check: function() {
            for (var a = !0, b = 0; b < task[data.currentTask].test_conveyor.length; b++) test_conveyor.step[b] < task[data.currentTask].test_conveyor[b].draggables.length - 1 && (a = !1);
            return {
                result: a,
                score: 0
            }
        }
    },
    test_drag_n_drop = {
        create: function(a) {
            $.isArray(a) || (a = [a]);
            for (var b = [], c = $(window).width(), d = 0; d < a.length; d++) {
                if (a[d].answers)
                    for (var e = 0; e < a[d].answers.length; e++) {
                        this.defaultplaces["block" + d + "defaultPlace" + e] = "block" + d + "draggable" + e;
                        var f = $("<div></div>").attr("id", "block" + d + "draggable" + e).addClass("draggable"),
                            g = $("<div></div>").attr("id", "block" + d + "defaultPlace" + e).addClass("defaultPlace"),
                            h = $("<div></div>").addClass("defaultPlace").addClass("defaultPlace1"),
                            i = $("<div></div>").addClass("defaultPlace").addClass("defaultPlace2");
                        if (a[d].answers[e].area ? (f.data("widgetarea", a[d].answers[e].area), g.data("widgetarea", a[d].answers[e].area)) : a[d].answerParams.area && (f.data("widgetarea", a[d].answerParams.area), g.data("widgetarea", a[d].answerParams.area)), a[d].answerParams.style)
                            if (f.css(a[d].answerParams.style), a[d].answers[e].renewable) g.css(a[d].answerParams.style), h.css(a[d].answerParams.style), i.css(a[d].answerParams.style);
                            else {
                                var j = {};
                                for (var k in a[d].answerParams.style) "top" != k && "left" != k || (j[k] = a[d].answerParams.style[k]);
                                g.css(j)
                            }
                        if (c < 800 && a[d].answerParams["style-sm"])
                            if (f.css(a[d].answerParams["style-sm"]), a[d].answers[e].renewable) g.css(a[d].answerParams["style-sm"]), h.css(a[d].answerParams["style-sm"]), i.css(a[d].answerParams["style-sm"]);
                            else {
                                var j = {};
                                for (var k in a[d].answerParams["style-sm"]) "top" != k && "left" != k || (j[k] = a[d].answerParams["style-sm"][k]);
                                g.css(j)
                            } else if (c > 799 && c < 1200 && a[d].answerParams["style-md"])
                            if (f.css(a[d].answerParams["style-md"]), a[d].answers[e].renewable) g.css(a[d].answerParams["style-md"]), h.css(a[d].answerParams["style-md"]), i.css(a[d].answerParams["style-md"]);
                            else {
                                var j = {};
                                for (var k in a[d].answerParams["style-md"]) "top" != k && "left" != k || (j[k] = a[d].answerParams["style-md"][k]);
                                g.css(j)
                            } else if (c > 1199 && a[d].answerParams["style-lg"])
                            if (f.css(a[d].answerParams["style-lg"]), a[d].answers[e].renewable) g.css(a[d].answerParams["style-lg"]), h.css(a[d].answerParams["style-lg"]), i.css(a[d].answerParams["style-lg"]);
                            else {
                                var j = {};
                                for (var k in a[d].answerParams["style-lg"]) "top" != k && "left" != k || (j[k] = a[d].answerParams["style-lg"][k]);
                                g.css(j)
                            }
                        if (a[d].answers[e].style)
                            if (f.css(a[d].answers[e].style), a[d].answers[e].renewable) g.css(a[d].answers[e].style), h.css(a[d].answers[e].style), i.css(a[d].answers[e].style);
                            else {
                                var j = {};
                                for (var k in a[d].answers[e].style) "top" != k && "left" != k || (j[k] = a[d].answers[e].style[k]);
                                g.css(j)
                            }
                        if (c < 800 && a[d].answers[e]["style-sm"])
                            if (f.css(a[d].answers[e]["style-sm"]), a[d].answers[e].renewable) g.css(a[d].answers[e]["style-sm"]), h.css(a[d].answers[e]["style-sm"]), i.css(a[d].answers[e]["style-sm"]);
                            else {
                                var j = {};
                                for (var k in a[d].answers[e]["style-sm"]) "top" != k && "left" != k || (j[k] = a[d].answers[e]["style-sm"][k]);
                                g.css(j)
                            } else if (c > 799 && c < 1200 && a[d].answers[e]["style-md"])
                            if (f.css(a[d].answers[e]["style-md"]), a[d].answers[e].renewable) g.css(a[d].answers[e]["style-md"]), h.css(a[d].answers[e]["style-md"]), i.css(a[d].answers[e]["style-md"]);
                            else {
                                var j = {};
                                for (var k in a[d].answers[e]["style-md"]) "top" != k && "left" != k || (j[k] = a[d].answers[e]["style-md"][k]);
                                g.css(j)
                            } else if (c > 1199 && a[d].answers[e]["style-lg"])
                            if (f.css(a[d].answers[e]["style-lg"]), a[d].answers[e].renewable) g.css(a[d].answers[e]["style-lg"]), h.css(a[d].answers[e]["style-lg"]), i.css(a[d].answers[e]["style-lg"]);
                            else {
                                var j = {};
                                for (var k in a[d].answers[e]["style-lg"]) "top" != k && "left" != k || (j[k] = a[d].answers[e]["style-lg"][k]);
                                g.css(j)
                            }
                        a[d].answers[e].hint && f.data("hint", a[d].answers[e].hint), a[d].answers[e].onStopDragging ? f.data("stopdragging", a[d].answers[e].onStopDragging) : a[d].answerParams.onStopDragging ? f.data("stopdragging", a[d].answerParams.onStopDragging) : f.data("stopdragging", "leave");
                        var l = $("<div></div>");
                        if (l.html(a[d].answers[e].value), "0px" != f.css("width") && l.css("width", f.css("width")), "0px" != f.css("height") && l.css("height", f.css("height")), a[d].answerParams.textOffset && l.css("top", a[d].answerParams.textOffset + "px"), a[d].answers[e].textShow && "removeOnTarget" == a[d].answers[e].textShow ? l.addClass("answerText1") : a[d].answerParams.textShow && "removeOnTarget" == a[d].answerParams.textShow && l.addClass("answerText1"), a[d].answerParams.innerStyle && l.css(a[d].answerParams.innerStyle), c < 800 && a[d].answerParams["innerStyle-sm"] ? l.css(a[d].answerParams["innerStyle-sm"]) : c > 799 && c < 1200 && a[d].answerParams["innerStyle-md"] ? l.css(a[d].answerParams["innerStyle-md"]) : c > 1199 && a[d].answerParams["innerStyle-lg"] && l.css(a[d].answerParams["innerStyle-lg"]), a[d].answers[e].innerStyle && l.css(a[d].answers[e].innerStyle), c < 800 && a[d].answers[e]["innerStyle-sm"] ? l.css(a[d].answers[e]["innerStyle-sm"]) : c > 799 && c < 1200 && a[d].answers[e]["innerStyle-md"] ? l.css(a[d].answers[e]["innerStyle-md"]) : c > 1199 && a[d].answers[e]["innerStyle-lg"] && l.css(a[d].answers[e]["innerStyle-lg"]), f.append(l), a[d].answers[e].renewable && g.append(l.clone()), a[d].answers[e].renewable && f.data("renewable", "true"), f.mousedown(function() {
                                $(this).addClass("active")
                            }), a[d].answers[e].renewable ? f.mouseup(function() {
                                $(this).removeClass("active")
                            }) : f.mouseup(function() {
                                $(this).removeClass("active"), test_drag_n_drop.checkInDroppable()
                            }), b.push(i), b.push(h), b.push(g), b.push(f), a[d].answers[e].cursorAt) {
                            var m = {};
                            a[d].answers[e].cursorAt.top && (m.top = getSize(a[d].answers[e].cursorAt.top)), a[d].answers[e].cursorAt.left && (m.left = getSize(a[d].answers[e].cursorAt.left))
                        } else if (a[d].answerParams.cursorAt && 0 != a[d].answers[e].cursorAt) {
                            var m = {};
                            a[d].answerParams.cursorAt.top && (m.top = getSize(a[d].answerParams.cursorAt.top)), a[d].answerParams.cursorAt.left && (m.left = getSize(a[d].answerParams.cursorAt.left))
                        } else var m = !1;
                        if (a[d].answers[e].scope) var n = a[d].answers[e].scope;
                        else var n = "default";
                        g.droppable({
                            out: test_drag_n_drop.defaultPlaceHandleOutEvent,
                            drop: test_drag_n_drop.defaultPlaceHandleDropEvent,
                            scope: n
                        }), setTimeout(function(a, b, c) {
                            a.draggable({
                                start: test_drag_n_drop.handleStartDraggingEvent,
                                stop: test_drag_n_drop.handleStopDraggingEvent,
                                cursorAt: b,
                                scope: c
                            })
                        }, 100, f, m, n)
                    }
                if (a[d].correctAnswers)
                    for (var e = 0; e < a[d].correctAnswers.length; e++) {
                        var o = $("<div></div>").attr("id", "block" + d + "droppable" + e).addClass("droppable");
                        if (a[d].correctAnswers[e].area ? o.data("widgetarea", a[d].correctAnswers[e].area) : a[d].answerParams.area && o.data("widgetarea", a[d].correctAnswerParams.area), a[d].correctAnswers[e].hint && o.data("hint", a[d].correctAnswers[e].hint), "number" == typeof a[d].correctAnswers[e].values && o.data("matrixset", a[d].correctAnswers[e].values), a[d].correctAnswers[e].supergroup ? (o.addClass("supergroup-" + a[d].correctAnswers[e].supergroup), o.data("supergroup", a[d].correctAnswers[e].supergroup)) : "string" == typeof a[d].correctAnswers[e].values ? o.data("group", a[d].correctAnswers[e].values) : "number" == typeof a[d].correctAnswers[e].values && o.addClass("matrixset-" + a[d].correctAnswers[e].values), a[d].correctAnswerParams && a[d].correctAnswerParams.style && o.css(a[d].correctAnswerParams.style), c < 800 && a[d].correctAnswerParams["style-sm"] ? o.css(a[d].correctAnswerParams["style-sm"]) : c > 799 && c < 1200 && a[d].correctAnswerParams["style-md"] ? o.css(a[d].correctAnswerParams["style-md"]) : c > 1199 && a[d].correctAnswerParams["style-lg"] && o.css(a[d].correctAnswerParams["style-lg"]), a[d].correctAnswers[e].style && o.css(a[d].correctAnswers[e].style), c < 800 && a[d].correctAnswers[e]["style-sm"] ? o.css(a[d].correctAnswers[e]["style-sm"]) : c > 799 && c < 1200 && a[d].correctAnswers[e]["style-md"] ? o.css(a[d].correctAnswers[e]["style-md"]) : c > 1199 && a[d].correctAnswers[e]["style-lg"] && o.css(a[d].correctAnswers[e]["style-lg"]), a[d].correctAnswers[e].textfield) {
                            var p = $("<input />").css("width", o.css("width")).css("height", o.css("height"));
                            a[d].correctAnswers[e].style && a[d].correctAnswers[e].style["text-align"] && p.css("text-align", a[d].correctAnswers[e].style["text-align"]), p[0].addEventListener("input", function() {
                                $("#checkButton" + data.currentTask).removeClass("button-disabled"), $(this).parent().removeClass("draggable-right"), $(this).parent().removeClass("draggable-wrong"), $(this).parent().data("supergroup") ? test_drag_n_drop.removeRWBorder($(this).parent().data("supergroup")) : $(this).parent().data("group") ? test_drag_n_drop.removeRWBorder($(this).parent().data("group"), "group") : ($(this).parent().data("matrixset") || 0 == $(this).parent().data("matrixset")) && test_drag_n_drop.removeRWBorder($(this).parent().data("matrixset"), "matrix"), test_drag_n_drop.textfields[$(this).parent().attr("id")] = $(this).val(), task[data.currentTask].settings && task[data.currentTask].settings.autoCheck && check()
                            }), test_drag_n_drop.textfields["block" + d + "droppable" + e] && p.val(test_drag_n_drop.textfields["block" + d + "droppable" + e]), o.append(p)
                        } else {
                            var q = "intersect";
                            if (a[d].correctAnswers[e].tolerance ? q = a[d].correctAnswers[e].tolerance : a[d].correctAnswerParams && a[d].correctAnswerParams.tolerance && (q = a[d].correctAnswerParams.tolerance), a[d].correctAnswers[e].scope) var n = a[d].correctAnswers[e].scope;
                            else var n = "default";
                            o.droppable({
                                tolerance: q,
                                drop: test_drag_n_drop.handleDropEvent,
                                over: test_drag_n_drop.handleOverEvent,
                                out: test_drag_n_drop.handleOutEvent,
                                scope: n
                            })
                        }
                        b.push(o)
                    }
                setTimeout(function(a, b) {
                    for (var c = 0; c < a.length; c++)
                        if (data.data[data.currentTask] && data.data[data.currentTask]["block" + b + "droppable" + c])
                            if ($("#" + data.data[data.currentTask]["block" + b + "droppable" + c])[0]) {
                                if ($("#" + data.data[data.currentTask]["block" + b + "droppable" + c]).css("top", $("#block" + b + "droppable" + c).css("top")), $("#" + data.data[data.currentTask]["block" + b + "droppable" + c]).css("left", $("#block" + b + "droppable" + c).css("left")), $("#" + data.data[data.currentTask]["block" + b + "droppable" + c]).addClass("in-the-droppable"), $("#" + data.data[data.currentTask]["block" + b + "droppable" + c]).attr("data-droppable", "block" + b + "droppable" + c), $("#block" + b + "droppable" + c).addClass("withDraggable"), $("#block" + b + "droppable" + c).attr("data-draggable", data.data[data.currentTask]["block" + b + "droppable" + c]), task[data.currentTask].test_drag_n_drop[b] && task[data.currentTask].test_drag_n_drop[b].answers[test_drag_n_drop.numberFromId(data.data[data.currentTask]["block" + b + "droppable" + c])].renewable) var d = test_drag_n_drop.addDraggableDuplicate(test_drag_n_drop.numberFromId(data.data[data.currentTask]["block" + b + "droppable" + c]), b, !0)
                            } else {
                                var d = test_drag_n_drop.addDraggableDuplicate(test_drag_n_drop.numberFromId(data.data[data.currentTask]["block" + b + "droppable" + c]), test_drag_n_drop.numberFromId(data.data[data.currentTask]["block" + b + "droppable" + c], !0), !0);
                                d && (data.data[data.currentTask]["block" + b + "droppable" + c] = d.attr("id"), setTimeout(function(a, b, c) {
                                    a.css("top", $("#block" + b + "droppable" + c).css("top")), a.css("left", $("#block" + b + "droppable" + c).css("left")), a.addClass("in-the-droppable"), a.attr("data-droppable", "block" + b + "droppable" + c), $("#block" + b + "droppable" + c).addClass("withDraggable"), test_drag_n_drop.addDraggableDuplicate(test_drag_n_drop.numberFromId(a.attr("id")), b, !0)
                                }, 50, d, b, c))
                            }
                }, 100, a[d].correctAnswers, d)
            }
            return $(b)
        },
        resize: function() {
            var a = $(window).width();
            $(".draggable").each(function() {
                var b = test_drag_n_drop.numberFromId(this.id, !0),
                    c = test_drag_n_drop.numberFromId(this.id, !1),
                    d = task[data.currentTask].test_drag_n_drop[b].answerParams,
                    e = task[data.currentTask].test_drag_n_drop[b].answers[c];
                d.style && $(this).css(d.style), a < 800 && d["style-sm"] ? $(this).css(d["style-sm"]) : a > 799 && a < 1200 && d["style-md"] ? $(this).css(d["style-md"]) : a > 1199 && d["style-lg"] && $(this).css(d["style-lg"]), e.style && $(this).css(e.style), a < 800 && e["style-sm"] ? $(this).css(e["style-sm"]) : a > 799 && a < 1200 && e["style-md"] ? $(this).css(e["style-md"]) : a > 1199 && e["style-lg"] && $(this).css(e["style-lg"])
            });
            for (var b = 0; b < task[data.currentTask].test_drag_n_drop.length; b++)
                for (var c = task[data.currentTask].test_drag_n_drop[b], d = 0; d < c.correctAnswers.length; d++) {
                    var e = c.correctAnswers[d],
                        f = $("#block" + b + "droppable" + d);
                    if (f.attr("style", ""), c.correctAnswerParams && c.correctAnswerParams.style && f.css(c.correctAnswerParams.style), a < 800 && c.correctAnswerParams["style-sm"] ? f.css(c.correctAnswerParams["style-sm"]) : a > 799 && a < 1200 && c.correctAnswerParams["style-md"] ? f.css(c.correctAnswerParams["style-md"]) : a > 1199 && c.correctAnswerParams["style-lg"] && f.css(c.correctAnswerParams["style-lg"]), e.style && f.css(e.style), a < 800 && e["style-sm"] ? f.css(e["style-sm"]) : a > 799 && a < 1200 && e["style-md"] ? f.css(e["style-md"]) : a > 1199 && e["style-lg"] && f.css(e["style-lg"]), data.data[data.currentTask] && data.data[data.currentTask]["block" + b + "droppable" + d]) {
                        var g = $("#" + data.data[data.currentTask]["block" + b + "droppable" + d]);
                        g.css({
                            left: f.css("left")
                        }), g.css({
                            top: f.css("top")
                        })
                    }
                }
        },
        check: function() {
            var a = !0,
                b = "empty",
                c = task[data.currentTask].test_drag_n_drop;
            $.isArray(c) || (c = [c]);
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e && e.correctAnswers)
                    for (var f = e.correctAnswers, g = [], h = [], i = {}, j = {}, k = {}, l = 0; l < e.correctAnswers.length; l++) {
                        var m = !1,
                            n = !0;
                        if (f[l].textfield) var o = test_drag_n_drop.textfields["block" + d + "droppable" + l] ? test_drag_n_drop.textfields["block" + d + "droppable" + l] : "";
                        else if (data.data[data.currentTask] && data.data[data.currentTask]["block" + d + "droppable" + l]) {
                            var o = e.answers[test_drag_n_drop.numberFromId(data.data[data.currentTask]["block" + d + "droppable" + l])].value;
                            "somewrong" != b && (b = "allwrong")
                        } else var o = !1;
                        if (f[l].supergroup)
                            if (j[f[l].supergroup]) j[f[l].supergroup].counter++;
                            else {
                                j[f[l].supergroup] = {}, j[f[l].supergroup].array = [], j[f[l].supergroup].counter = 0, j[f[l].supergroup].values = [], j[f[l].supergroup].valgroups = [], j[f[l].supergroup].groupLength = 0;
                                for (var p = e.correctAnswersSupergroups[f[l].supergroup].groups, q = 0; q < p.length; q++) {
                                    j[f[l].supergroup].values[q] = [], j[f[l].supergroup].array[q] = [], j[f[l].supergroup].valgroups[q] = [];
                                    var r = e.correctAnswersGroups[p[q]];
                                    0 == j[f[l].supergroup].groupLength && (j[f[l].supergroup].groupLength = r.length);
                                    for (var s = 0; s < r.length; s++) j[f[l].supergroup].valgroups[q][s] = [], j[f[l].supergroup].array[q].push(r[s])
                                }
                            }
                        if (e.correctAnswers[l].supergroup) {
                            for (var t = [], u = j[f[l].supergroup].array, q = 0; q < u.length; q++)
                                for (var s = 0; s < u[q].length; s++) t[q] || (t[q] = {}), t[q][u[q][s]] ? t[q][u[q][s]]++ : t[q][u[q][s]] = 1;
                            var v = j[f[l].supergroup].counter % j[f[l].supergroup].groupLength,
                                w = parseInt(j[f[l].supergroup].counter / j[f[l].supergroup].groupLength);
                            j[f[l].supergroup].values[w][v] = o;
                            for (var q = 0; q < j[f[l].supergroup].array.length; q++)
                                for (var s = 0; s < j[f[l].supergroup].array[q].length; s++) o == j[f[l].supergroup].array[q][s] && j[f[l].supergroup].valgroups[w][v].push(q);
                            for (var x = j[f[l].supergroup].valgroups, y = j[f[l].supergroup].values, z = [], q = 0; q < y.length; q++) {
                                z[q] = {};
                                for (var s = 0; s < y[q].length; s++) z[q][y[q][s]] ? z[q][y[q][s]]++ : z[q][y[q][s]] = 1
                            }
                            for (var q = 0; q < x.length; q++)
                                for (var s = 0; s < x[q].length; s++)
                                    for (var A = 0; A < x[q][s].length; A++) {
                                        for (var B = 0; B < x[q][s].length; B++) x[q][s][A] == x[q][s][B] && A != B && (x[q][s].splice(A, 1), A--, B--);
                                        for (var C in z[q]) z[q][C] && (x[q][s][A] || 0 == x[q][s][A]) && t[x[q][s][A]][C] ? z[q][C] > t[x[q][s][A]][C] && (x[q][s].splice(A, 1), A--) : A >= 0 && (x[q][s].splice(A, 1), A--)
                                    }
                            for (var D = [], q = 0; q < x.length; q++)
                                for (var E = [], s = 0; s < x[q].length; s++)
                                    if (0 != x[q][s].length)
                                        if (1 == x[q][s].length) !D[q] && 0 != D[q] || D[q] == x[q][s][0] ? D[q] = x[q][s][0] : (n = !1, j[f[l].supergroup].wrong = !0);
                                        else if (0 == E.length) E = x[q][s].slice();
                            else {
                                for (var F = [], A = 0; A < E.length; A++) {
                                    for (var G = !1, B = 0; B < x[q][s].length; B++) E[A] == x[q][s][B] && (G = !0, F.push(E[A]));
                                    G || (E.splice(A, 1), A--)
                                }
                                0 == F.length ? (n = !1, j[f[l].supergroup].wrong = !0) : 1 == F.length && (!D[q] && 0 != D[q] || D[q] == F[0] ? D[q] = F[0] : (n = !1, j[f[l].supergroup].wrong = !0))
                            }
                            if ("column" == e.correctAnswersSupergroups[f[l].supergroup].order)
                                for (var H = [], I = j[f[l].supergroup].array, J = j[f[l].supergroup].values, K = 0, q = 0; q < x.length; q++)
                                    if (D[q] || 0 == D[q]) {
                                        for (var s = 0; s < I[D[q]].length; s++)
                                            for (var A = s; A < I[D[q]].length; A++) I[D[q]][s] == I[D[q]][A] && s != A && K++;
                                        for (var s = 0; s < I[D[q]].length; s++)
                                            for (var A = s; A < x[q].length; A++) J[q][A] === I[D[q]][s] && 0 != J[q][A] && (H[A] || 0 == H[A] ? H[A] != s && K-- : H[A] = s);
                                        K < 0 && (n = !1, j[f[l].supergroup].wrong = !0)
                                    }
                            for (var q = 0; q < D.length; q++)
                                for (var s = q; s < D.length; s++) !D[q] && 0 != D[q] || D[q] != D[s] || q == s || (n = !1, j[f[l].supergroup].wrong = !0);
                            for (var q = 0; q < j[f[l].supergroup].values.length; q++) {
                                var L = j[f[l].supergroup].values[q];
                                if (D[q] || 0 == D[q]) {
                                    for (var M = j[f[l].supergroup].array[D[q]], K = 0, s = 0; s < M.length; s++)
                                        for (A = s; A < M.length; A++) M[s] == M[A] && s != A && K++;
                                    for (var s = 0; s < L.length; s++)
                                        for (var A = s; A < L.length; A++) !L[s] && 0 != L[s] || L[s] != L[A] || s == A || K--;
                                    K < 0 && (j[f[l].supergroup].wrong = !0, n = !1)
                                }
                            }
                            j[f[l].supergroup].valgroups[w][v].length < 1 && (n = !1, j[f[l].supergroup].wrong = !0)
                        }
                        if ("string" == typeof f[l].values) {
                            for (var p = f[l].values.split("|"), s = 0; s < p.length; s++) {
                                var N = e.correctAnswersGroups[p[s]] || [];
                                if (!k[p[s]]) {
                                    k[p[s]] = {};
                                    for (var q = 0; q < N.length; q++) k[p[s]][N[q]] ? k[p[s]][N[q]]++ : k[p[s]][N[q]] = 1
                                }
                                for (var q = 0; q < N.length; q++) N[q] == o && (!test_drag_n_drop.groups[e.correctAnswers[l].values] || k[p[s]][N[q]] > 0 || !test_drag_n_drop.groups[e.correctAnswers[l].values][N[q]] && 0 != test_drag_n_drop.groups[e.correctAnswers[l].values][N[q]] || test_drag_n_drop.groups[e.correctAnswers[l].values][N[q]] == l) && n && (m = !0)
                            }
                            if (m) {
                                for (noVariant = !0, s = 0; s < p.length; s++) k[p[s]][o] && k[p[s]][o] > 0 && noVariant && (noVariant = !1, k[p[s]][o]--);
                                noVariant && (m = !1)
                            }
                            var O = f[l].supergroup && e.checkParams && e.checkParams.supergroups && e.checkParams.supergroups[f[l].supergroup] && e.checkParams[f[l].supergroup].individual ? e.checkParams.supergroups[f[l].supergroup].individual : !!(e.checkParams && e.checkParams.groups && e.checkParams.groups[f[l].values] && e.checkParams.groups[f[l].values].individual) && e.checkParams.groups[f[l].values].individual,
                                P = f[l].supergroup && e.checkParams && e.checkParams.supergroups && e.checkParams.supergroups[f[l].supergroup] && e.checkParams[f[l].supergroup].show ? e.checkParams.supergroups[f[l].supergroup].show : e.checkParams && e.checkParams.groups && e.checkParams.groups[f[l].values] && e.checkParams.groups[f[l].values].show ? e.checkParams.groups[f[l].values].show : "all";
                            m || "all" != P && "onlyWrong" != P ? !m || "all" != P && "onlyRight" != P || (data.data[data.currentTask]["block" + d + "droppable" + l] ? $("#" + data.data[data.currentTask]["block" + d + "droppable" + l]).addClass("draggable-right") : $("#block" + d + "droppable" + l).addClass("draggable-right")) : O ? data.data[data.currentTask]["block" + d + "droppable" + l] ? $("#" + data.data[data.currentTask]["block" + d + "droppable" + l]).addClass("draggable-wrong") : $("#block" + d + "droppable" + l).addClass("draggable-wrong") : $("#block" + d + "droppable" + l).data("supergroup") ? setTimeout(function(a) {
                                $(".droppable").each(function() {
                                    $(this).data("supergroup") == a && (data.data[data.currentTask] && data.data[data.currentTask][this.id] ? ($("#" + data.data[data.currentTask][this.id]).addClass("draggable-wrong"), $("#" + data.data[data.currentTask][this.id]).removeClass("draggable-right")) : ($(this).addClass("draggable-wrong"), $(this).removeClass("draggable-right")))
                                })
                            }, 200, $("#block" + d + "droppable" + l).data("supergroup")) : $("#block" + d + "droppable" + l).data("group") && setTimeout(function(a) {
                                $(".droppable").each(function() {
                                    $(this).data("group") == a && (data.data[data.currentTask] && data.data[data.currentTask][this.id] ? ($("#" + data.data[data.currentTask][this.id]).addClass("draggable-wrong"), $("#" + data.data[data.currentTask][this.id]).removeClass("draggable-right")) : ($(this).addClass("draggable-wrong"), $(this).removeClass("draggable-right")))
                                })
                            }, 200, $("#block" + d + "droppable" + l).data("group"))
                        } else if ("number" == typeof f[l].values) {
                            if (i[e.correctAnswers[l].values]) {
                                for (var q = 0; q < e.matrixSets[e.correctAnswers[l].values].length; q++) e.matrixSets[e.correctAnswers[l].values][q][g[e.correctAnswers[l].values]] == o && h[e.correctAnswers[l].values] && h[e.correctAnswers[l].values][q] ? m = !0 : (h[e.correctAnswers[l].values] || (h[e.correctAnswers[l].values] = {}), h[e.correctAnswers[l].values][q] = !1);
                                g[e.correctAnswers[l].values]++
                            } else {
                                g[e.correctAnswers[l].values] || (g[e.correctAnswers[l].values] = 0);
                                for (var q = 0; q < e.matrixSets[e.correctAnswers[l].values].length; q++) e.matrixSets[e.correctAnswers[l].values][q][g[e.correctAnswers[l].values]] == o && (h[e.correctAnswers[l].values] || (h[e.correctAnswers[l].values] = {}), 0 != h[e.correctAnswers[l].values][q] && (h[e.correctAnswers[l].values][q] = !0), m = !0, i[e.correctAnswers[l].values] = !0);
                                g[e.correctAnswers[l].values]++
                            }
                            var O = !!(e.checkParams && e.checkParams.matrix && e.checkParams.matrix[f[l].values] && e.checkParams.matrix[f[l].values].individual) && e.checkParams.matrix[f[l].values].individual,
                                P = e.checkParams && e.checkParams.matrix && e.checkParams.matrix[f[l].values] && e.checkParams.matrix[f[l].values].show ? e.checkParams.matrix[f[l].values].show : "all";
                            m || "all" != P && "onlyWrong" != P ? !m || "all" != P && "onlyRight" != P || (data.data[data.currentTask]["block" + d + "droppable" + l] ? $("#" + data.data[data.currentTask]["block" + d + "droppable" + l]).addClass("draggable-right") : $("#block" + d + "droppable" + l).addClass("draggable-right")) : O ? data.data[data.currentTask]["block" + d + "droppable" + l] ? $("#" + data.data[data.currentTask]["block" + d + "droppable" + l]).addClass("draggable-wrong") : $("#block" + d + "droppable" + l).addClass("draggable-wrong") : ($("#block" + d + "droppable" + l).data("matrixset") || 0 == $("#block" + d + "droppable" + l).data("matrixset")) && setTimeout(function(a) {
                                $(".droppable").each(function() {
                                    $(this).data("matrixset") == a && (data.data[data.currentTask] && data.data[data.currentTask][this.id] ? ($("#" + data.data[data.currentTask][this.id]).addClass("draggable-wrong"), $("#" + data.data[data.currentTask][this.id]).removeClass("draggable-right")) : ($(this).addClass("draggable-wrong"), $(this).removeClass("draggable-right")))
                                })
                            }, 200, $("#block" + d + "droppable" + l).data("matrixset"))
                        } else {
                            for (var q = 0; q < f[l].values.length; q++) f[l].values[q] === o && (m = !0, b = "somewrong");
                            var P = f[l].checkShow || "all";
                            m || "all" != P && "onlyWrong" != P ? !m || "all" != P && "onlyWrong" != P || (data.data[data.currentTask]["block" + d + "droppable" + l] ? $("#" + data.data[data.currentTask]["block" + d + "droppable" + l]).addClass("draggable-right") : $("#block" + d + "droppable" + l).addClass("draggable-right")) : data.data[data.currentTask]["block" + d + "droppable" + l] ? $("#" + data.data[data.currentTask]["block" + d + "droppable" + l]).addClass("draggable-wrong") : $("#block" + d + "droppable" + l).addClass("draggable-wrong")
                        }
                        var Q = !(!data.data[data.currentTask] || !data.data[data.currentTask]["block" + d + "droppable" + l]) && $("#" + data.data[data.currentTask]["block" + d + "droppable" + l]);
                        if (Q) {
                            var R = {};
                            if (Q[0].style.backgroundColor ? R["background-color"] = Q[0].style.backgroundColor : R["background-color"] = "", Q[0].style.backgroundImage ? R["background-image"] = Q[0].style.backgroundImage : R["background-image"] = "", setTimeout(function(a, b, c) {
                                    a.css(b), test_drag_n_drop.isCustomAnimation = !1
                                }, 500, Q, R), m)
                                if (e.answers[test_drag_n_drop.numberFromId(Q[0].id)].onCorrectAnimation) var S = e.answers[test_drag_n_drop.numberFromId(Q[0].id)].onCorrectAnimation;
                                else if (e.onCorrectAnimation) var S = e.onCorrectAnimation;
                            else var S = !1;
                            else if (e.answers[test_drag_n_drop.numberFromId(Q[0].id)].onWrongAnimation) var S = e.answers[test_drag_n_drop.numberFromId(Q[0].id)].onWrongAnimation;
                            else if (e.onWrongAnimation) var S = e.onWrongAnimation;
                            else var S = !1;
                            if (S && S.type) {
                                var T = {};
                                if ("color" == S.type && S.value) T["background-color"] = S.value;
                                else if ("image" == S.type && S.value) Q[0].style.backgroundImage = "url(" + S.value + ")";
                                else if ("rocking" == S.type) Q.addClass("rocked"), setTimeout(function(a) {
                                    a.addClass("rocked2"), a.removeClass("rocked")
                                }, 200, Q), setTimeout(function(a) {
                                    a.removeClass("rocked2"), a.removeClass("rocked")
                                }, 400, Q);
                                else if ("showhide" == S.type) {
                                    if (S.value.show)
                                        for (var s = 0; s < S.value.show.length; s++) $("#" + S.value.show[s]).show();
                                    if (S.value.hide)
                                        for (var s = 0; s < S.value.hide.length; s++) $("#" + S.value.hide[s]).hide()
                                } else if ("returnToDefaultPlace" == S.type) {
                                    var U = e.answerParams.style ? e.answerParams.style : {},
                                        V = {};
                                    for (var C in U) "left" != C && "top" != C || (V[C] = U[C]);
                                    var U = e.answers[test_drag_n_drop.numberFromId(Q[0].id)].style ? e.answers[test_drag_n_drop.numberFromId(Q[0].id)].style : {};
                                    for (var C in U) "left" != C && "top" != C || (V[C] = U[C]);
                                    Q.animate(V), data.data[data.currentTask]["block" + d + "droppable" + l] = !1, $("#block" + d + "droppable" + l).removeClass("withDraggable"), setTimeout(function(a) {
                                        a.removeClass("in-the-droppable"), a.removeAttr("data-droppable"), a.removeClass("draggable-right"), a.removeClass("draggable-wrong")
                                    }, 500, Q)
                                }
                            }
                        }
                        if (m)
                            if (f[l].onCorrectAnimation) var S = f[l].onCorrectAnimation;
                            else var S = !1;
                        else if (a = !1, f[l].onWrongAnimation) var S = f[l].onWrongAnimation;
                        else var S = !1;
                        if (S)
                            if ("customElement" == S.type) {
                                $("#custom_block" + d + "droppable" + l).remove();
                                var W = $("<div></div>");
                                W.css({
                                    position: "absolute"
                                }), W.attr("id", "custom_block" + d + "droppable" + l), S.value && (S.value.style && W.css(S.value.style), S.value.value && (inner = $("<div>" + S.value.value + "</div>"), inner.css({
                                    display: "table-cell",
                                    "vertical-align": "middle",
                                    "text-align": "center"
                                }), inner.css("width", W.css("width")), inner.css("height", W.css("height")), S.value.innerStyle && inner.css(S.value.innerStyle), W.append(inner))), getContainer().append(W)
                            } else "removeCustomElement" == S.type && $("#custom_block" + d + "droppable" + l).remove()
                    }
            }
            for (var C in j) j[C].wrong && $(".supergroup-" + C).each(function() {
                data.data[data.currentTask] && data.data[data.currentTask][this.id] ? ($("#" + data.data[data.currentTask][this.id]).addClass("draggable-wrong"), $("#" + data.data[data.currentTask][this.id]).removeClass("draggable-right")) : ($(this).addClass("draggable-wrong"), $(this).removeClass("draggable-right"))
            });
            if (!a) {
                var e = task[data.currentTask].test_drag_n_drop[0];
                e.correctAnswerParams && e.correctAnswerParams.replaceMessage && e.correctAnswerParams.replaceMessage[b] && (task[data.currentTask].settings.wrongText = e.correctAnswerParams.replaceMessage[b])
            }
            return {
                result: a,
                score: 0
            }
        },
        isCustomAnimation: !1,
        defaultplaces: {},
        defaultPlaceHandleOutEvent: function(a, b) {
            var c = b.draggable,
                d = task[data.currentTask].test_drag_n_drop;
            $.isArray(d) || (d = [d]);
            d[test_drag_n_drop.numberFromId(a.target.id, !0)];
            test_drag_n_drop.defaultplaces[a.target.id] == c.attr("id") && (test_drag_n_drop.defaultplaces[a.target.id] = !1)
        },
        textfields: {},
        defaultPlaceHandleDropEvent: function(a, b) {
            if (!test_drag_n_drop.defaultplaces[a.target.id]) {
                var c = b.draggable;
                c.css("left", $(a.target).css("left")), c.css("top", $(a.target).css("top")), test_drag_n_drop.defaultplaces[a.target.id] = c.attr("id")
            }
        },
        checkInDroppable: function() {},
        numberFromId: function(a, b) {
            var c = a.split("defaultPlace");
            if (1 == c.length) var c = a.split("draggable");
            if (1 == c.length) var c = a.split("droppable");
            if (b) var d = c[0].replace("block", "");
            else var d = c[1].split("duplicate")[0];
            return parseInt(d)
        },
        groups: {},
        removeFromGroup: function(a, b) {
            input = task[data.currentTask].test_drag_n_drop, $.isArray(input) || (input = [input]);
            var c = input[test_drag_n_drop.numberFromId(b.attr("id"), !0)];
            if ("string" == typeof c.correctAnswers[test_drag_n_drop.numberFromId(b.attr("id"))].values) {
                var d = c.correctAnswers[test_drag_n_drop.numberFromId(b.attr("id"))].values;
                d = d.split("|");
                for (var e = 0; e < d.length; e++) {
                    values = c.correctAnswersGroups[d[e]];
                    for (key in values) values[key] == c.answers[test_drag_n_drop.numberFromId(a.attr("id"))].value && (test_drag_n_drop.groups[d[e]] || (test_drag_n_drop.groups[d[e]] = {}), test_drag_n_drop.groups[d[e]][values[key]] = !1)
                }
            }
        },
        addToGroup: function(a, b) {
            input = task[data.currentTask].test_drag_n_drop, $.isArray(input) || (input = [input]);
            var c = input[test_drag_n_drop.numberFromId(b.attr("id"), !0)];
            if (c && "string" == typeof c.correctAnswers[test_drag_n_drop.numberFromId(b.attr("id"))].values) {
                var d = c.correctAnswers[test_drag_n_drop.numberFromId(b.attr("id"))].values;
                d = d.split("|");
                for (var e = 0; e < d.length; e++) {
                    values = c.correctAnswersGroups[d[e]];
                    for (key in values) values[key] == c.answers[test_drag_n_drop.numberFromId(a.attr("id"))].value && (test_drag_n_drop.groups[d[e]] || (test_drag_n_drop.groups[d[e]] = {}), test_drag_n_drop.groups[d[e]][values[key]] = test_drag_n_drop.numberFromId(b.attr("id")))
                }
            }
        },
        handleDropEvent: function(a, b) {
            var c = b.draggable;
            if (enableButton(), activate(), $(".droppable").removeClass("droppable-over"), $(a.target).removeClass("draggable-right"), $(a.target).removeClass("draggable-wrong"), data.data[data.currentTask] && data.data[data.currentTask][a.target.id] || test_drag_n_drop.numberFromId(a.target.id, !0) != test_drag_n_drop.numberFromId(c[0].id, !0)) {
                if (test_drag_n_drop.numberFromId(a.target.id, !0) == test_drag_n_drop.numberFromId(c[0].id, !0)) {
                    c.addClass("in-the-droppable"), c.attr("data-droppable", a.target.id), $(a.target).attr("data-draggable", c[0].id), test_drag_n_drop.addToGroup(c, $(a.target));
                    var d = $("#" + data.data[data.currentTask][a.target.id]);
                    d.removeClass("in-the-droppable"), d.removeAttr("data-droppable"), d.removeClass("draggable-right"), d.removeClass("draggable-wrong"), $(a.target).data("supergroup") ? test_drag_n_drop.removeRWBorder($(a.target).data("supergroup")) : $(a.target).data("group") && test_drag_n_drop.removeRWBorder($(a.target).data("group"), "group"), ($(a.target).data("matrixset") || 0 == $(a.target).data("matrixset")) && test_drag_n_drop.removeRWBorder($("#" + target).data("matrixset"), "matrix"), "defaultplace" == d.data("stopdragging") ? d.animate({
                        top: $("#block" + test_drag_n_drop.numberFromId(data.data[data.currentTask][a.target.id], !0) + "defaultPlace" + test_drag_n_drop.numberFromId(data.data[data.currentTask][a.target.id])).css("top"),
                        left: $("#block" + test_drag_n_drop.numberFromId(data.data[data.currentTask][a.target.id], !0) + "defaultPlace" + test_drag_n_drop.numberFromId(data.data[data.currentTask][a.target.id])).css("left")
                    }) : d.css({
                        left: c.css("left"),
                        top: c.css("top")
                    }), test_drag_n_drop.removeFromGroup(d, $(a.target)), data.data[data.currentTask][a.target.id] = c.attr("id"), c.css("left", $(a.target).css("left")), c.css("top", $(a.target).css("top")), task[data.currentTask].settings.autoCheck && check()
                }
            } else c.css("left", $(a.target).css("left")), c.css("top", $(a.target).css("top")), c.removeClass("shadow"), $(a.target).data("supergroup") ? test_drag_n_drop.removeRWBorder($(a.target).data("supergroup")) : $(a.target).data("group") && test_drag_n_drop.removeRWBorder($(a.target).data("group"), "group"), ($(a.target).data("matrixset") || 0 == $(a.target).data("matrixset")) && test_drag_n_drop.removeRWBorder($(a.target).data("matrixset"), "matrix"), c.addClass("in-the-droppable"), c.attr("data-droppable", a.target.id), $(a.target).attr("data-draggable", c[0].id), $(a.target).addClass("withDraggable"), $(a.target).removeClass("emptyWrong"), data.data[data.currentTask] || (data.data[data.currentTask] = {}), data.data[data.currentTask][a.target.id] = c.attr("id"), test_drag_n_drop.addToGroup(c, $(a.target)), task[data.currentTask].settings.autoCheck && check()
        },
        handleOverEvent: function(a, b) {
            var c = $(a.target);
            c.addClass("droppable-over")
        },
        handleOutEvent: function(a, b) {
            activate();
            b.draggable;
            $(a.target).removeClass("droppable-over")
        },
        resetStatus: function() {
            $(".draggable").removeClass("draggable-right"), $(".draggable").removeClass("draggable-wrong"), $(".droppable").removeClass("withDraggableWrong")
        },
        checkSupergroupByAnswerId: function(a, b) {
            var c = task[data.currentTask].test_drag_n_drop;
            $.isArray(c) || (c = [c]);
            var d = c[b];
            if (d.correctAnswers[a] && d.correctAnswers[a].supergroup) {
                for (var e = [], f = {}, g = [], h = 0; h < d.correctAnswers.length; h++)
                    if (d.correctAnswers[h] && d.correctAnswers[h].supergroup) {
                        if (f[d.correctAnswers[h].values] ? f[d.correctAnswers[h].values]++ : f[d.correctAnswers[h].values] = 1, "column" == d.correctAnswersSupergroups[d.correctAnswers[h].supergroup].order)
                            for (var i = 0; i < d.correctAnswersSupergroups[d.correctAnswers[h].supergroup].groups.length; i++)
                                for (var j = d.correctAnswersGroups[d.correctAnswersSupergroups[d.correctAnswers[h].supergroup].groups[i]], k = 0; k < j.length; k++)
                                    if (data.data[data.currentTask]["block" + b + "droppable" + h] && d.answers[test_drag_n_drop.numberFromId(data.data[data.currentTask]["block" + b + "droppable" + h])] && d.answers[test_drag_n_drop.numberFromId(data.data[data.currentTask]["block" + b + "droppable" + h])].value == j[k]) {
                                        if (!e[f[d.correctAnswers[h].values] - 1]) {
                                            for (var l = !1, m = 0; m < e.length; m++) e[m] == k && (l = !0);
                                            l || (e[f[d.correctAnswers[h].values] - 1] = k)
                                        }
                                        if (a == h && e[f[d.correctAnswers[h].values] - 1] == k) return !0
                                    }
                        if ("none" == d.correctAnswersSupergroups[d.correctAnswers[h].supergroup].order) {
                            g[h] = [];
                            for (var n = d.correctAnswersSupergroups[d.correctAnswers[h].supergroup].groups, i = (d.correctAnswersGroups[n[0]].length, 0); i < n.length; i++)
                                for (var k = 0; k < d.correctAnswersGroups[n[i]].length; k++)
                                    for (var m = 0; m < d.correctAnswersGroups[n[i]][k].length; m++);
                            return !0
                        }
                    }
                return !1
            }
            return !0
        },
        handleStopDraggingEvent: function(a, b) {
            var c = $(a.target),
                d = $('[id^="block' + test_drag_n_drop.numberFromId(a.target.id, !0) + "draggable" + test_drag_n_drop.numberFromId(a.target.id) + '"]'),
                e = !0,
                f = $("#block" + test_drag_n_drop.numberFromId(a.target.id, !0) + "defaultPlace" + test_drag_n_drop.numberFromId(a.target.id));
            d.each(function() {
                $(this).css("top") == f.css("top") && $(this).css("left") == f.css("left") && $(this)[0].id != c[0].id && (e = !1)
            }), "true" == c.data("renewable") && e && test_drag_n_drop.addDraggableDuplicate(test_drag_n_drop.numberFromId(a.target.id), test_drag_n_drop.numberFromId(a.target.id, !0), !0), c.hasClass("in-the-droppable") || ("defaultplace" == c.data("stopdragging") && c.animate({
                top: $("#block" + test_drag_n_drop.numberFromId(a.target.id, !0) + "defaultPlace" + test_drag_n_drop.numberFromId(a.target.id)).css("top"),
                left: $("#block" + test_drag_n_drop.numberFromId(a.target.id, !0) + "defaultPlace" + test_drag_n_drop.numberFromId(a.target.id)).css("left")
            }), setTimeout(function(a) {
                test_drag_n_drop.getDroppableIdByDraggableId(a[0].id);
                a.hasClass("in-the-droppable") || "true" != a.data("renewable") || a.remove()
            }, 10, c))
        },
        handleStartDraggingEvent: function(a, b) {
            var c = $(a.target),
                d = ("block" + test_drag_n_drop.numberFromId(a.target.id, !0) + "defaultPlace" + test_drag_n_drop.numberFromId(a.target.id), test_drag_n_drop.getDroppableIdByDraggableId(a.target.id));
            d && (c.removeClass("in-the-droppable"), c.removeAttr("data-droppable"), data.data[data.currentTask][d] = !1, c.removeClass("draggable-right"), c.removeClass("draggable-wrong"), $("#" + d).data("supergroup") ? test_drag_n_drop.removeRWBorder($("#" + d).data("supergroup")) : $("#" + d).data("group") && test_drag_n_drop.removeRWBorder($("#" + d).data("group"), "group"), ($("#" + d).data("matrixset") || 0 == $("#" + d).data("matrixset")) && test_drag_n_drop.removeRWBorder($("#" + d).data("matrixset"), "matrix"), $("#" + d).removeClass("withDraggable"), $("#" + d).removeClass("withDraggableWrong"), test_drag_n_drop.removeFromGroup(c, $("#" + d)), task[data.currentTask].settings.autoCheck && check());
            var e = task[data.currentTask].test_drag_n_drop;
            $.isArray(e) || (e = [e]);
            e[test_drag_n_drop.numberFromId(a.target.id, !0)]
        },
        removeRWBorder: function(a, b) {
            b = b || "supergroup", $(".droppable").each(function() {
                ("supergroup" == b && $(this).data("supergroup") == a || "matrix" == b && $(this).data("matrixset") == a || "group" == b && $(this).data("group") == a) && (data.data[data.currentTask] && data.data[data.currentTask][this.id] ? ($("#" + data.data[data.currentTask][this.id]).removeClass("draggable-right"), $("#" + data.data[data.currentTask][this.id]).removeClass("draggable-wrong")) : ($(this).removeClass("draggable-right"), $(this).removeClass("draggable-wrong")))
            })
        },
        getDroppableIdByDraggableId: function(a) {
            for (var b in data.data[data.currentTask])
                if (data.data[data.currentTask][b] == a) return b;
            return !1
        },
        addDraggableDuplicate: function(a, b, c) {
            var d = task[data.currentTask].test_drag_n_drop;
            $.isArray(d) || (d = [d]);
            var e = d[b];
            if (!test_drag_n_drop.defaultplaces || !test_drag_n_drop.defaultplaces["block" + b + "defaultPlace" + a] || c) {
                test_drag_n_drop.defaultplaces || (test_drag_n_drop.defaultplaces = {}), draggableDiv = $("<div></div>").attr("id", "block" + b + "draggable" + a + "duplicate" + (new Date).getTime() / 1), e.answers[a].area ? draggableDiv.data("widgetarea", e.answers[a].area) : e.answerParams.area && draggableDiv.data("widgetarea", e.answerParams.area), test_drag_n_drop.defaultplaces["block" + b + "defaultPlace" + a] = draggableDiv.attr("id"), e.answerParams && e.answerParams.style && draggableDiv.css(e.answerParams.style), e.answers[a].style && draggableDiv.css(e.answers[a].style), draggableDiv.addClass("draggable"), draggableDiv.data("renewable", "true"), e.answers[a].onStopDragging ? draggableDiv.data("stopdragging", e.answers[a].onStopDragging) : e.answerParams.onStopDragging ? draggableDiv.data("stopdragging", e.answerParams.onStopDragging) : draggableDiv.data("stopdragging", "leave");
                var f = $("<div></div>");
                f.html(e.answers[a].value), "0px" != draggableDiv.css("width") && f.css("width", draggableDiv.css("width")), "0px" != draggableDiv.css("height") && f.css("height", draggableDiv.css("height")), e.answerParams.innerStyle && f.css(e.answerParams.innerStyle), e.answers[a].innerStyle && f.css(e.answers[a].innerStyle), e.answerParams && e.answerParams.textOffset && f.css("top", e.answerParams.textOffset + "px"), e.answers[a].textShow && "removeOnTarget" == e.answers[a].textShow ? f.addClass("answerText1") : e.answerParams.textShow && "removeOnTarget" == e.answerParams.textShow && f.addClass("answerText1");
                var g = $(window).width();
                if (e.answerParams.innerStyle && f.css(e.answerParams.innerStyle), g < 800 && e.answerParams["innerStyle-sm"] ? f.css(e.answerParams["innerStyle-sm"]) : g > 799 && g < 1200 && e.answerParams["innerStyle-md"] ? f.css(e.answerParams["innerStyle-md"]) : g > 1199 && e.answerParams["innerStyle-lg"] && f.css(e.answerParams["innerStyle-lg"]), e.answers[a].innerStyle && f.css(e.answers[a].innerStyle), g < 800 && e.answers[a]["innerStyle-sm"] ? f.css(e.answers[a]["innerStyle-sm"]) : g > 799 && g < 1200 && e.answers[a]["innerStyle-md"] ? f.css(e.answers[a]["innerStyle-md"]) : g > 1199 && e.answers[a]["innerStyle-lg"] && f.css(e.answers[a]["innerStyle-lg"]), draggableDiv.append(f), e.answers[a].cursorAt) {
                    var h = {};
                    e.answers[a].cursorAt.top && (h.top = getSize(e.answers[a].cursorAt.top)), e.answers[a].cursorAt.left && (h.left = getSize(e.answers[a].cursorAt.left))
                } else if (e.answerParams.cursorAt && 0 != e.answers[a].cursorAt) {
                    var h = {};
                    e.answerParams.cursorAt.top && (h.top = getSize(e.answerParams.cursorAt.top)), e.answerParams.cursorAt.left && (h.left = getSize(e.answerParams.cursorAt.left))
                } else var h = !1;
                if (e.answers[a].scope) var i = e.answers[a].scope;
                else var i = "default";
                return getContainer().find(".field:eq(0)").append(draggableDiv), f.css("width") || (draggableDiv.css("width") ? f.css({
                    width: draggableDiv.css("width")
                }) : f.css("width", draggableDiv.width() + "px")), f.css("height") || (draggableDiv.css("height") ? f.css({
                    height: draggableDiv.css("height")
                }) : f.css("height", draggableDiv.height() + "px")), draggableDiv.draggable({
                    start: test_drag_n_drop.handleStartDraggingEvent,
                    stop: test_drag_n_drop.handleStopDraggingEvent,
                    cursorAt: h,
                    scope: i
                }), draggableDiv.mousedown(function() {
                    $(this).addClass("active")
                }), draggableDiv.mouseup(function() {
                    $(this).removeClass("active")
                }), draggableDiv
            }
        }
    },
    test_dropdown = {
        create: function(a) {
            data.data[data.currentTask] || (data.data[data.currentTask] = {});
            for (var b = $(window).width(), c = [], d = 0; d < a.length; d++) {
                var e = $("<div></div>").addClass("select-wrap"),
                    f = $("<select></select>").addClass("dropdown");
                if (f.attr("id", "dropdown" + d), a[d].area && (e.data("widgetarea", a[d].area), f.data("widgetarea", a[d].area)), a[d].hint && e.data("hint", a[d].hint), a[d].style && e.css(a[d].style), a[d].selectStyle && f.css(a[d].selectStyle), b < 800 ? (a[d]["style-sm"] && e.css(a[d]["style-sm"]), a[d]["selectStyle-sm"] && f.css(a[d]["selectStyle-sm"])) : b < 1200 ? (a[d]["style-md"] && e.css(a[d]["style-md"]), a[d]["selectStyle-md"] && f.css(a[d]["selectStyle-md"])) : (a[d]["style-lg"] && e.css(a[d]["style-lg"]), a[d]["selectStyle-lg"] && f.css(a[d]["selectStyle-lg"])), a[d].positions)
                    for (key in a[d].positions) setSize(e, key, a[d].positions[key]), "height" == key && setSize(f, key, a[d].positions[key]);
                f[0].onchange = function() {
                    enableButton(), $(this).parent().removeClass("dropdown-wrong"), $(this).parent().removeClass("dropdown-right"), data.data[data.currentTask]["test_" + this.id] = $(this).val(), task[data.currentTask].settings && task[data.currentTask].settings.autoCheck && check()
                };
                for (var g = 0; g < a[d].items.length; g++) {
                    var h = $("<option>" + a[d].items[g] + "</option>");
                    h.attr("value", g), data.data[data.currentTask] && data.data[data.currentTask]["test_dropdown" + d] && data.data[data.currentTask]["test_dropdown" + d] == g && h.attr("selected", "selected"), f.append(h)
                }
                e.append(f), c.push(e)
            }
            return $(c)
        },
        resize: function() {
            for (var a = $(window).width(), b = 0; b < task[data.currentTask].test_dropdown.length; b++) {
                var c = task[data.currentTask].test_dropdown[b],
                    d = $("#dropdown" + b),
                    e = d.parent();
                c.style && e.css(c.style), c.selectStyle && d.css(c.selectStyle), a < 800 ? (c["style-sm"] && e.css(c["style-sm"]), c["selectStyle-sm"] && d.css(c["selectStyle-sm"])) : a < 1200 ? (c["style-md"] && e.css(c["style-md"]), c["selectStyle-md"] && d.css(c["selectStyle-md"])) : (c["style-lg"] && e.css(c["style-lg"]), c["selectStyle-lg"] && d.css(c["selectStyle-lg"]))
            }
        },
        check: function() {
            var a = !0;
            if (task[data.currentTask].test_dropdown)
                for (var b = 0; b < task[data.currentTask].test_dropdown.length; b++) task[data.currentTask].test_dropdown[b].right != parseInt(data.data[data.currentTask]["test_dropdown" + b]) ? (a = !1, task[data.currentTask].test_dropdown[b].checkShow && "all" != task[data.currentTask].test_dropdown[b].checkShow && "onlyWrong" != task[data.currentTask].test_dropdown[b].checkShow || $("#dropdown" + b).parent().addClass("dropdown-wrong")) : task[data.currentTask].test_dropdown[b].checkShow && "all" != task[data.currentTask].test_dropdown[b].checkShow && "onlyRight" != task[data.currentTask].test_dropdown[b].checkShow || $("#dropdown" + b).parent().addClass("dropdown-right");
            return {
                result: a,
                score: 0
            }
        }
    },
    test_hint = {
        create: function(a) {
            for (var b = $(window).width(), c = [], d = 0; d < a.length; d++) {
                var e = $("<div></div>").addClass("hint-container");
                if (a[d].style && e.css(a[d].style), b < 800 && a[d]["style-sm"] ? e.css(a[d]["style-sm"]) : b > 799 && b < 1200 && a[d]["style-md"] ? e.css(a[d]["style-md"]) : b > 1199 && a[d]["style-lg"] && e.css(a[d]["style-lg"]), a[d].link) {
                    var f = $("<a>" + a[d].link + "</a>").addClass("local-link");
                    f.click(test_hint.click), e.append(f)
                }
                if (a[d].content) {
                    var g = $("<div>" + a[d].content + "</div>").addClass("hint-content");
                    g.css("display", "none"), e.append(g)
                }
                c.push(e)
            }
            return $(c)
        },
        click: function() {
            var a = $(this).parent().find(".hint-content:eq(0)");
            a[0] && "none" == a.css("display") ? a.show() : a.hide()
        }
    },
    test_images = {
        create: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = $("<div></div>").addClass("image");
                d.attr("id", "image" + c), a[c].area && d.data("widgetarea", a[c].area), a[c].style && d.css(a[c].style);
                var e = $(window).width();
                if (e < 800 && a[c]["style-sm"] ? d.css(a[c]["style-sm"]) : e > 799 && e < 1200 && a[c]["style-md"] ? d.css(a[c]["style-md"]) : e > 1199 && a[c]["style-lg"] && d.css(a[c]["style-lg"]), a[c].hint && d.data("hint", a[c].hint), a[c].value) {
                    var f = $("<div>" + a[c].value + "</div>");
                    a[c].valuestyle && f.css(a[c].valuestyle), d.append(f)
                }
                b.push(d)
            }
            return $(b)
        },
        resize: function() {
            for (var a = $(window).width(), b = 0; b < task[data.currentTask].test_images.length; b++) {
                var c = task[data.currentTask].test_images[b];
                currentItemEl = $("#image" + b), currentItemEl.attr("style", ""), c.style && currentItemEl.css(c.style), a < 800 && c["style-sm"] ? currentItemEl.css(c["style-sm"]) : a > 799 && a < 1200 && c["style-md"] ? currentItemEl.css(c["style-md"]) : a > 1199 && c["style-lg"] && currentItemEl.css(c["style-lg"]), currentItemContentEl = currentItemEl.children(":eq(0)"), c.valuestyle && currentItemContentEl.css(c.valuestyle)
            }
        }
    },
    test_modal = {
        create: function(a) {
            var b = [],
                c = $("<div></div>").addClass("modal-window-overlay");
            c.css("display", "none"), c.click(function() {
                $(".modal-window").find("iframe").remove(), $(".modal-window").hide(), $(this).hide()
            }), a[0] && a[0].overlayStyle && c.css(a[0].overlayStyle), b.push(c);
            for (var d = 0; d < a.length; d++) {
                var e = $("<div></div>").addClass("modal-window");
                e.attr("id", "modalwindow" + d), a[d].style && e.css(a[d].style);
                var f = $("<div></div>").addClass("close");
                if (f.click(function() {
                        $(".modal-window").find("iframe").remove(), $(".modal-window").hide(), $(".modal-window-overlay").hide()
                    }), e.append(f), "video" == a[d].type) a[d].content && e.data("youtube", a[d].content);
                else {
                    var g = $("<div></div>");
                    a[d].content && g.html(a[d].content)
                }
                e.css("display", "none"), e.append(g), b.push(e)
            }
            return $(b)
        },
        show: function(a) {
            var b = $("#modalwindow" + a);
            if ($(".modal-window-overlay").show(), b.show(), b.data("youtube")) {
                var c = $("<iframe></iframe>").addClass("youtube-video");
                c.attr("frameborder", "0"), c.attr("src", b.data("youtube")), b.append(c)
            }
        }
    },
    test_radiobutton = {
        create: function(a) {
            var b = $("#mcStyles");
            b[0] || (b = $('<style type="text/css" id="mcStyles"></style>')), getContainer().append(b), b.html(".magic-radio + label{padding-left:" + getSize(38) + "px} .magic-radio + label:before{width:" + getSize(25) + "px;height:" + getSize(25) + "px;} .magic-radio + label::after{top:" + getSize(6) + "px;left:" + getSize(6) + "px;width:" + getSize(15) + "px;height:" + getSize(15) + "px;border-width:" + getSize(2) + "px;}");
            for (var c = [], d = "", e = 0; e < a.length; e++) {
                if (a[e].text) var f = $('<div class="radiobutton"><input type="radio" class="magic-radio" id="radiobutton' + e + '" /><label for="radiobutton' + e + '"><div>' + a[e].text + "</div></label></div>"),
                    g = f.children("input");
                else var f = $('<div class="radiobutton"><input type="radio" class="magic-radio" id="radiobutton' + e + '" /></div>'),
                    g = f.children("input");
                var h = 1;
                a[e].area && (f.data("widgetarea", a[e].area), task[data.currentTask].areas && task[data.currentTask].areas[a[e].area] && task[data.currentTask].areas[a[e].area].scale && (h = task[data.currentTask].areas[a[e].area].scale)), data.data[data.currentTask] && data.data[data.currentTask]["radiobutton" + e] && g.attr("checked", "checked"), a[e].hint && g.data("hint", a[e].hint), a[e].style && g.css(a[e].style), a[e].group ? (g.attr("name", a[e].group), g.data("radiogroup", a[e].group)) : (g.attr("name", "default"), g.data("radiogroup", "default")), a[e].style && f.css(a[e].style), g.change(function() {
                    enableButton(), $("input[name=" + this.name + "]").parent().find("label").removeClass("correct"), $("input[name=" + this.name + "]").parent().find("label").removeClass("error"), data.data[data.currentTask] || (data.data[data.currentTask] = {}), data.data[data.currentTask][this.id] = this.checked, task[data.currentTask].settings && task[data.currentTask].settings.autoCheck && check()
                }), setTimeout(function(a) {
                    a.find("label").find("div").css("height", a.height() + "px")
                }, 100, f), c.push(f), c.push($("<style>" + d + "</style>"))
            }
            return $(c)
        },
        check: function() {
            var a = !0,
                b = {};
            if (task[data.currentTask].test_radiobutton) {
                for (var c = 0; c < task[data.currentTask].test_radiobutton.length; c++)
                    if ($("#radiobutton" + c)[0].checked && !task[data.currentTask].test_radiobutton[c].right || !$("#radiobutton" + c)[0].checked && task[data.currentTask].test_radiobutton[c].right) {
                        var d = $("#radiobutton" + c)[0].name;
                        b[d] = !0
                    }
                for (var c = 0; c < task[data.currentTask].test_radiobutton.length; c++) {
                    var d = $("#radiobutton" + c)[0].name;
                    !b[d] || task[data.currentTask].test_radiobutton[c].checkShow && "all" != task[data.currentTask].test_radiobutton[c].checkShow && "onlyWrong" != task[data.currentTask].test_radiobutton[c].checkShow ? b[d] || task[data.currentTask].test_radiobutton[c].checkShow && "all" != task[data.currentTask].test_radiobutton[c].checkShow && "onlyRight" != task[data.currentTask].test_radiobutton[c].checkShow || $("#radiobutton" + c).parent().find("label").addClass("correct") : ($("#radiobutton" + c).parent().find("label").addClass("error"), a = !1)
                }
            }
            return {
                result: a,
                score: 0
            }
        }
    },
    test_select = {
        create: function(a) {
            for (var b = [], c = $(window).width(), d = 0; d < a.length; d++) {
                var e = $("<div></div>").addClass("absoluteBlock");
                if (e.attr("id", a[d].type + "" + d), e.data("blockNum", d), e.data("blockType", a[d].type), a[d].hint && e.data("hint", a[d].hint), a[d].hintVariant && e.data("hintVariant", a[d].hintVariant), a[d].style && e.css(a[d].style), c < 800 && a[d]["style-sm"] ? e.css(a[d]["style-sm"]) : c > 799 && c < 1200 && a[d]["style-md"] ? e.css(a[d]["style-md"]) : c > 1199 && a[d]["style-lg"] && e.css(a[d]["style-lg"]), a[d].positions)
                    for (var f in a[d].positions) setSize(e, f, a[d].positions[f]);
                if (a[d].title && e.append($("<div>" + a[d].title + "</div>").addClass("blockTitle")), a[d].type) var g = "manyOf" == a[d].type ? "many" : "one";
                else var g = "one";
                if (a[d].variants)
                    for (var h = a[d].variants, i = 1; i < h.length; i++) {
                        var j = $("<div></div>").addClass("clickable");
                        j.addClass("typeClass"), j.addClass("variant"), h[i].hintVariant && j.data("hintVariant", h[i].hintVariant), data.data[data.currentTask] && data.data[data.currentTask][d] && (data.data[data.currentTask][d] == i || data.data[data.currentTask][d][i]) && ("one" == g ? j.addClass("clickable-selected") : j.addClass("selected")), j.data("answer", i), j.click(test_select.variantClick);
                        var k;
                        if (k = h[i].right ? h[i].forRight ? h[i].forRight : h[0].forRight : h[i].forWrong ? h[i].forWrong * -1 : h[0].forWrong * -1, k || (k = 0), j.data("weight", k), h[0].style && j.css(h[0].style), c < 800 && h[0]["style-sm"] ? j.css(h[0]["style-sm"]) : c > 799 && c < 1200 && h[0]["style-md"] ? j.css(h[0]["style-md"]) : c > 1199 && h[0]["style-lg"] && j.css(h[0]["style-lg"]), h[0].positions)
                            for (f in h[0].positions) setSize(j, f, h[0].positions[f]);
                        if (h[i].hintPosition && (h[i].hintPosition.top && j.data("hint-top", h[i].hintPosition.top), h[i].hintPosition.left && j.data("hint-left", h[i].hintPosition.left)), h[i].style && j.css(h[i].style), c < 800 && h[i]["style-sm"] ? j.css(h[i]["style-sm"]) : c > 799 && c < 1200 && h[i]["style-md"] ? j.css(h[i]["style-md"]) : c > 1199 && h[i]["style-lg"] && j.css(h[i]["style-lg"]), h[i].positions)
                            for (f in h[i].positions) setSize(j, f, h[i].positions[f]);
                        var l = $("<div>" + h[i].value + "</div>").addClass("inner");
                        if (l.css("width", j.css("width")), l.css("height", j.css("height")), h[0].textStyle && l.css(h[0].textStyle), c < 800 && h[0]["textStyle-sm"] ? l.css(h[0]["textStyle-sm"]) : c > 799 && c < 1200 && h[0]["textStyle-md"] ? l.css(h[0]["textStyle-md"]) : c > 1199 && h[0]["textStyle-lg"] && l.css(h[0]["textStyle-lg"]), h[i].textStyle && l.css(h[i].textStyle), c < 800 && h[i]["textStyle-sm"] ? l.css(h[i]["textStyle-sm"]) : c > 799 && c < 1200 && h[i]["textStyle-md"] ? l.css(h[i]["textStyle-md"]) : c > 1199 && h[i]["textStyle-lg"] && l.css(h[i]["textStyle-lg"]), j.append(l), e.attr("id").indexOf("manyOf") != -1) {
                            var m = $("<div></div>");
                            m.addClass("icon"), j.append(m)
                        }
                        e.append(j), b.push(e)
                    }
            }
            return setTimeout(function() {
                test_select.updateVariantsPositions()
            }, 100), $(b)
        },
        resize: function() {
            for (var a = $(window).width(), b = 0; b < task[data.currentTask].test_select.length; b++) {
                var c = task[data.currentTask].test_select[b],
                    d = $("#" + c.type + b);
                d.attr("style", ""), c.style && d.css(c.style), a < 800 && c["style-sm"] ? d.css(c["style-sm"]) : a > 799 && a < 1200 && c["style-md"] ? d.css(c["style-md"]) : a > 1199 && c["style-lg"] && d.css(c["style-lg"]);
                for (var e = 1; e < c.variants.length; e++) {
                    var f = c.variants[e],
                        g = d.find(".variant:eq(" + (e - 1) + ")");
                    g.attr("style", ""), c.variants[0].style && g.css(c.variants[0].style), a < 800 && c.variants[0]["style-sm"] ? g.css(c.variants[0]["style-sm"]) : a > 799 && a < 1200 && c.variants[0]["style-md"] ? g.css(c.variants[0]["style-md"]) : a > 1199 && c.variants[0]["style-lg"] && g.css(c.variants[0]["style-lg"]), f.style && g.css(f.style), a < 800 && f["style-sm"] ? g.css(f["style-sm"]) : a > 799 && a < 1200 && f["style-md"] ? g.css(f["style-md"]) : a > 1199 && f["style-lg"] && g.css(f["style-lg"]);
                    var h = g.find(".inner:eq(0)");
                    c.variants[0].textStyle && h.css(c.variants[0].textStyle), a < 800 && c.variants[0]["textStyle-sm"] ? h.css(c.variants[0]["textStyle-sm"]) : a > 799 && a < 1200 && c.variants[0]["textStyle-md"] ? h.css(c.variants[0]["textStyle-md"]) : a > 1199 && c.variants[0]["textStyle-lg"] && h.css(c.variants[0]["textStyle-lg"]), f.textStyle && h.css(f.textStyle), a < 800 && f["textStyle-sm"] ? h.css(f["textStyle-sm"]) : a > 799 && a < 1200 && f["textStyle-md"] ? h.css(f["textStyle-md"]) : a > 1199 && f["textStyle-lg"] && h.css(f["textStyle-lg"])
                }
            }
            test_select.updateVariantsPositions()
        },
        resetStatus: function() {
            $(".clickable").removeClass("clickable-right"), $(".clickable").removeClass("clickable-wrong")
        },
        variantClick: function(a) {
            enableButton(), activate(), $(this).hasClass("clickable-selected") ? ($(this).removeData("hint"), $(this).removeClass("clickable-selected"), $(this).removeClass("clickable-right"), $(this).removeClass("clickable-wrong"), $(this).removeClass("wrong_unchecked"), "oneOf" == $(this).parent().data("blockType") ? data.data[data.currentTask][$(this).parent().data("blockNum")] = !1 : data.data[data.currentTask][$(this).parent().data("blockNum")][$(this).data("answer")] = !1) : ("oneOf" == $(this).parent().data("blockType") ? ($(this).siblings().removeData("hint"), $(this).siblings().removeClass("clickable-selected"), $(this).siblings().removeClass("selected"), $(this).siblings().removeClass("clickable-right"), $(this).siblings().removeClass("clickable-wrong"), $(this).siblings().removeClass("wrong_unchecked"), data.data[data.currentTask] || (data.data[data.currentTask] = {}), data.data[data.currentTask][$(this).parent().data("blockNum")] = $(this).data("answer")) : data.data[data.currentTask] && data.data[data.currentTask][$(this).parent().data("blockNum")] ? data.data[data.currentTask][$(this).parent().data("blockNum")][$(this).data("answer")] = !0 : (data.data[data.currentTask] || (data.data[data.currentTask] = {}), data.data[data.currentTask][$(this).parent().data("blockNum")] = {}, data.data[data.currentTask][$(this).parent().data("blockNum")][$(this).data("answer")] = !0), $(this).hasClass("one") ? $(this).addClass("clickable-selected") : ($(this).removeClass("clickable-right"), $(this).removeClass("clickable-wrong"), $(this).removeClass("wrong_unchecked"), $(this).hasClass("selected") ? ($(this).removeClass("selected"), data.data[data.currentTask][$(this).parent().data("blockNum")][$(this).data("answer")] = !1, $(this).removeData("hint")) : ($(this).addClass("selected"), task[data.currentTask].test_select[$(this).parent().data("blockNum")].variants[$(this).data("answer")].hint && $(this).data("hint", task[data.currentTask].test_select[$(this).parent().data("blockNum")].variants[$(this).data("answer")].hint)))), task[data.currentTask].settings.autoCheck && check()
        },
        check: function() {
            var a = !0,
                b = !1,
                c = 0,
                d = !1;
            if (task[data.currentTask].test_select)
                for (var e = 0; e < task[data.currentTask].test_select.length; e++) {
                    if ("oneOf" == task[data.currentTask].test_select[e].type || "manyOf" == task[data.currentTask].test_select[e].type) {
                        var f = task[data.currentTask].test_select[e].variants;
                        noSelect = !0, b = "oneOf" != task[data.currentTask].test_select[e].type;
                        for (var g = 1; g < f.length; g++) {
                            if (data.data[data.currentTask][e])
                                if ("number" == typeof data.data[data.currentTask][e]) noSelect = !1;
                                else
                                    for (var h in data.data[data.currentTask][e]) data.data[data.currentTask][e][h] && (noSelect = !1);
                            f[g].right ? "oneOf" == task[data.currentTask].test_select[e].type && data.data[data.currentTask] && data.data[data.currentTask][e] == g ? (b = !0, task[data.currentTask].test_select[e].checkShow && "all" != task[data.currentTask].test_select[e].checkShow && "onlyRight" != task[data.currentTask].test_select[e].checkShow || $("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").addClass("clickable-right"), c += parseInt($("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").data("weight"))) : "manyOf" == task[data.currentTask].test_select[e].type ? data.data[data.currentTask] && data.data[data.currentTask][e] && data.data[data.currentTask][e][g] ? (task[data.currentTask].test_select[e].checkShow && "all" != task[data.currentTask].test_select[e].checkShow && "onlyRight" != task[data.currentTask].test_select[e].checkShow || $("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").addClass("clickable-right"), c += parseInt($("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").data("weight"))) : (1 != d && (d = 2), b = !1) : task[0].hardMode && $("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").addClass("clickable-right") : (data.data[data.currentTask] && data.data[data.currentTask][e] == g && (task[data.currentTask].test_select[e].checkShow && "all" != task[data.currentTask].test_select[e].checkShow && "onlyWrong" != task[data.currentTask].test_select[e].checkShow || $("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").addClass("clickable-wrong"), c += parseInt($("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").data("weight"))), data.data[data.currentTask] && data.data[data.currentTask][e] && data.data[data.currentTask][e][g] && (task[data.currentTask].test_select[e].checkShow && "all" != task[data.currentTask].test_select[e].checkShow && "onlyWrong" != task[data.currentTask].test_select[e].checkShow || $("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").addClass("clickable-wrong"), c += parseInt($("#" + task[data.currentTask].test_select[e].type + e).children(".variant:eq(" + (g - 1) + ")").data("weight")), b = !1, d = 1))
                        }
                        b || (a = !1)
                    }
                    1 == d && task[data.currentTask].test_select[e].replaceMessage && task[data.currentTask].test_select[e].replaceMessage.extra ? task[data.currentTask].settings.wrongText = task[data.currentTask].test_select[e].replaceMessage.extra : (2 == d || 0 == d) && task[data.currentTask].test_select[e].replaceMessage && task[data.currentTask].test_select[e].replaceMessage.missing && (task[data.currentTask].settings.wrongText = task[data.currentTask].test_select[e].replaceMessage.missing)
                }
            return {
                result: a,
                score: c
            }
        },
        updateVariantsPositions: function() {
            $(".absoluteBlock").each(function() {
                var a = 0,
                    b = 0,
                    c = 0;
                $(this).children().each(function() {
                    b + $(this).outerWidth(!0) < $(this).parent().width() ? ($(this).css("left", b + "px"), $(this).css("top", a + "px"), b += $(this).outerWidth(!0), c < $(this).outerHeight(!0) && (c = $(this).outerHeight(!0))) : (a += c, b = 0, c = $(this).outerHeight(!0), $(this).css("left", b + "px"), $(this).css("top", a + "px"), b += $(this).outerWidth(!0))
                })
            })
        },
        stageSuccess: function() {
            for (var a = 0; a < task[data.currentTask].test_select.length; a++) task[data.currentTask].test_select[a].stageSuccessAnimation && "rightToPosition" == task[data.currentTask].test_select[a].stageSuccessAnimation.type && $("#" + task[data.currentTask].test_select[a].type + a + " .clickable-right").animate({
                top: getSize(task[data.currentTask].test_select[a].stageSuccessAnimation.top) + "px",
                left: getSize(task[data.currentTask].test_select[a].stageSuccessAnimation.left) + "px"
            })
        }
    },
    test_sortable = {
        create: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = $("<div></div>").addClass("sortableblock");
                a[c].style && d.css(a[c].style), d.attr("id", "sortableblock" + c), d.data("num", c), defaultSortable = a[c].items && a[c].items[0] ? a[c].items[0] : {};
                for (var e = [], f = 1; f < a[c].items.length; f++) {
                    var g = a[c].items[f],
                        h = $("<div></div>").addClass("sortable");
                    if (g.value) {
                        var i = $("<div></div>");
                        defaultSortable.style && defaultSortable.style.width && i.css({
                            width: defaultSortable.style.width
                        }), defaultSortable.style && defaultSortable.style.height && i.css({
                            height: defaultSortable.style.height
                        }), g.style && g.style.width && i.css({
                            width: g.style.width
                        }), g.style && g.style.height && i.css({
                            height: g.style.height
                        }), defaultSortable.textStyle && i.css(g.textStyle), defaultSortable.textStyle && i.css(g.textStyle), i.html(g.value), h.append(i)
                    }
                    h.data("num", f), defaultSortable.style && h.css(defaultSortable.style), g.style && h.css(g.style), e.push(h)
                }
                e.sort(compareRandom), $(e).each(function() {
                    d.append($(this))
                }), d.sortable({
                    start: function(a, b) {
                        activate(), b.placeholder.height(b.item.height()), b.placeholder.width(b.item.width()), b.item.parent().children().each(function() {
                            $(this).removeClass("draggable-right"), $(this).removeClass("draggable-wrong")
                        })
                    }
                }), b.push(d)
            }
            return $(b)
        },
        check: function() {
            var a = !0,
                b = [];
            $("#sortableblock0").children().each(function() {
                b.push($(this).data("num")), task[data.currentTask].test_sortable[0].strict && b[b.length - 2] && b[b.length - 1] < b[b.length - 2] && (a = !1, $("#sortableblock0").children().addClass("draggable-wrong"))
            });
            for (var c = 0; c < b.length; c++)
                for (j = 1; j < task[data.currentTask].test_sortable.length; j++)($("#sortableblock" + j).find("div:eq(" + c + ")").data("num") != b[c] || task[data.currentTask].test_sortable[0].strict && b[b.length - 2] && b[b.length - 1] < b[b.length - 2]) && (alert($("#sortableblock" + j).find("div:eq(" + c + ")").data("num") + "!=" + b[c]), a = !1, $("#sortableblock" + j).children().addClass("draggable-wrong"));
            return {
                result: a,
                score: 0
            }
        }
    },
    test_testblock = {
        create: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = $("<div></div>").addClass("testblock");
                a[c].style && d.css(a[c].style);
                var e = $("<div></div>").addClass("testblock-header");
                if (a.length > 1 && e.append($("<div>" + (c + 1) + "</div>").addClass("testblock-number")), a[c].question && e.append($("<div>" + a[c].question + "</div>").addClass("testblock-question")), d.append(e), a[c].items) {
                    for (var f = $("<div></div>").addClass("testblock-body"), g = 0; g < a[c].items.length; g++) {
                        var h = $("<input>");
                        a[c].type && "radio" == a[c].type ? (h.attr("type", "radio"), h.addClass("magic-radio"), h.attr("name", "testblock" + c)) : (h.attr("type", "checkbox"), h.addClass("magic-checkbox")), h.attr("id", "testblock" + c + "_" + g), h.change(function() {
                            activate(), $(this).parent().parent().find(".testblock-header").removeClass("testblock-right"), $(this).parent().parent().find(".testblock-header").removeClass("testblock-wrong")
                        }), f.append(h);
                        var i = $("<label>" + a[c].items[g].value + "</label>");
                        i.attr("for", "testblock" + c + "_" + g), f.append(i)
                    }
                    d.append(f)
                }
                b.push(d)
            }
            return $(b)
        },
        check: function() {
            for (var a = !0, b = 0; b < task[data.currentTask].test_testblock.length; b++) {
                for (var c = !0, d = 0; d < task[data.currentTask].test_testblock[b].items.length; d++) {
                    var e = task[data.currentTask].test_testblock[b].items[d];
                    (e.right && !$("#testblock" + b + "_" + d).attr("checked") || !e.right && $("#testblock" + b + "_" + d).attr("checked")) && (c = !1)
                }
                c ? $(".testblock:eq(" + b + ")").find(".testblock-header:eq(0)").addClass("testblock-right") : (a = !1, $(".testblock:eq(" + b + ")").find(".testblock-header:eq(0)").addClass("testblock-wrong"))
            }
            return {
                result: a,
                score: 0
            }
        }
    },
    test_text = {
        create: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = $("<div>" + a[c].value + "</div>").addClass("text");
                d.data("text", a[c].value), a[c].errorText && d.data("errortext", a[c].errorText), d.attr("id", "text" + c), a[c].area && d.data("widgetarea", a[c].area), a[c].style && d.css(a[c].style);
                var e = $(window).width();
                e < 800 && a[c]["style-sm"] ? d.css(a[c]["style-sm"]) : e > 799 && e < 1200 && a[c]["style-md"] ? d.css(a[c]["style-md"]) : e > 1199 && a[c]["style-lg"] && d.css(a[c]["style-lg"]), a[c].hint && d.data("hint", a[c].hint), b.push(d)
            }
            return $(b)
        },
        resize: function() {
            for (var a = $(window).width(), b = 0; b < task[data.currentTask].test_text.length; b++) {
                var c = task[data.currentTask].test_text[b];
                currentItemEl = $("#text" + b), currentItemEl.attr("style", ""), c.style && currentItemEl.css(c.style), a < 800 && c["style-sm"] ? currentItemEl.css(c["style-sm"]) : a > 799 && a < 1200 && c["style-md"] ? currentItemEl.css(c["style-md"]) : a > 1199 && c["style-lg"] && currentItemEl.css(c["style-lg"])
            }
        },
        check: function() {
            return setTimeout(function() {
                getContainer().find(".text").each(function() {
                    $(this).data("errortext") && (getContainer().hasClass("final-overlay") ? $(this).html($(this).data("text")) : $(this).html($(this).data("errortext")))
                })
            }, 100), {
                result: !0,
                score: 0
            }
        }
    },
    test_textarea = {
        create: function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = $("<input>");
                if (d.attr("id", "test_textarea" + c), d.attr("type", "text"), d.addClass("textEditBox"), d.attr("value", ""), a[c].area && d.data("widgetarea", a[c].area), data.data[data.currentTask] && data.data[data.currentTask]["test_textarea" + c] && d.val(data.data[data.currentTask]["test_textarea" + c]), a[c].hint && d.data("hint", a[c].hint), a[c].style && d.css(a[c].style), a[c].positions)
                    for (key in a[c].positions) setSize(d, key, a[c].positions[key]);
                a[c].maxlength && d.attr("maxlength", a[c].maxlength), d.bind("input", function() {
                    activate(), $(this).removeClass("textarea-right"), $(this).removeClass("textarea-wrong"), task[data.currentTask].settings && task[data.currentTask].settings.autoCheck && check(), data.data[data.currentTask] || (data.data[data.currentTask] = {}), data.data[data.currentTask][this.id] = this.value, enableButton(), this.maxLength && this.value.length == this.maxLength && $(this).next().focus()
                }), b.push(d)
            }
            return $(b)
        },
        resetStatus: function() {
            $(".textEditBox").removeClass("textarea-right"), $(".textEditBox").removeClass("textarea-wrong")
        },
        check: function() {
            var a = !0;
            if (task[data.currentTask].test_textarea)
                for (var b = 0; b < task[data.currentTask].test_textarea.length; b++) test_textarea.checkTextEdit(b) || (a = !1);
            return {
                result: a,
                score: 0
            }
        },
        checkTextEdit: function(a) {
            dataObj = task[data.currentTask].test_textarea[a];
            var b = !1,
                c = $("#test_textarea" + a).val();
            dataObj.isCaseSensitive || (c = c.toLowerCase()), c = c.replace(/ /g, "");
            if (dataObj.correctValues)
                for (var d = 0; d < dataObj.correctValues.length; d++) {
                    var e = dataObj.correctValues[d];
                    if (dataObj.isCaseSensitive || (e = e.toLowerCase()), e = e.replace(/ /g, ""), e == c) {
                        b = !0;
                        break
                    }
                }
            if (!b && dataObj.correctRange) {
                c = c.replace(",", "."), c = parseFloat(c);
                var f = new Array;
                Array.isArray(dataObj.correctRange) ? f = dataObj.correctRange : f.push(dataObj.correctRange);
                for (var d = 0; d < f.length && !b; d++) b = c >= f[d].start && c <= f[d].stop
            }
            var g = $("#test_textarea" + a);
            return b ? dataObj.checkShow && "all" != dataObj.checkShow && "onlyRight" != dataObj.checkShow || g.addClass("textarea-right") : dataObj.checkShow && "all" != dataObj.checkShow && "onlyWrong" != dataObj.checkShow || g.addClass("textarea-wrong"), b
        }
    },
    data = {
        data: [],
        currentTask: 1,
        steps: [],
        scores: []
    };
$(document).ready(function() {
    window.debug && _debug(), draw(), $(window).resize(resize)
});
var help = {
    enabled: !1,
    squareBubbles: function(a) {
        a || (a = $("*")), a.each(function() {
            if ($(this).data("hint")) {
                var a = $("<div></div>").addClass("square-bubble");
                a.click(function() {
                    $(".help").remove(), help.enabled = !1
                }), a.addClass("help"), a.append("<span>" + $(this).data("hint") + "</span>"), $(this).data("hint-top") ? a.css("top", $(this).data("hint-top")) : a.css("top", $(this).css("top")), $(this).data("hint-left") ? a.css("left", $(this).data("hint-left")) : a.css("left", $(this).css("left"));
                var b;
                $(this).data("hintVariant") && "bottom" != $(this).data("hintVariant") ? "top" == $(this).data("hintVariant") && (b = $("<div></div>").addClass("innerFigureTop")) : b = $("<div></div>").addClass("innerFigure"), a.append(b), getContainer().find(".field:eq(0)").append(a)
            }
        })
    },
    roundBubbles: function(a) {
        a || (a = $("*")), a.each(function() {
            if ($(this).data("hint")) {
                var a = $("<div></div>").addClass("round-bubble");
                a.click(function() {
                    $(".help").remove(), help.enabled = !1
                }), a.addClass("help"), a.append($("<div></div>").addClass("bubble-left")), a.append($("<div></div>").addClass("bubble-right")), a.append($("<div></div>").addClass("bubble-top")), a.append($("<div></div>").addClass("bubble-bottom")), a.append($("<div></div>").addClass("bubble-top-left")), a.append($("<div></div>").addClass("bubble-top-right")), a.append($("<div></div>").addClass("bubble-bottom-left")), a.append($("<div></div>").addClass("bubble-bottom-right")), a.append($("<div></div>").addClass("bubble-bottom-tail")), a.append("<span>" + $(this).data("hint") + "</span>"), $(this).data("hint-top") ? a.css("top", $(this).data("hint-top")) : a.css("top", $(this).css("top")), $(this).data("hint-left") ? a.css("left", $(this).data("hint-left")) : a.css("left", $(this).css("left")), getContainer().find(".field:eq(0)").append(a), $(this).data("hint-corner") && "bottom-right" != $(this).data("hint-corner") || (a.css("margin-top", "-" + a.height() + "px"), a.css("margin-left", "-" + a.width() + "px"))
            }
        })
    }
};