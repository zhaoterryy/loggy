// Generated by Haxe 4.0.0-preview.4+1e3e5e0
(function ($hx_exports) { "use strict";
var $hxEnums = {};
var HxJsLogger = $hx_exports["HxJsLogger"] = function() { };
HxJsLogger.trace = function(v,infos) {
	var msg = v;
	if(infos != null && infos.customParams != null) {
		msg += " " + infos.customParams.toString();
	}
	var args = infos != null ? ["" + infos.fileName + ":" + infos.lineNumber + ":",msg] : [msg];
	if(infos != null) {
		LogStorage.log.push({ level : "log", fileName : infos.fileName, lineNumber : infos.lineNumber, msg : msg.toString()});
	} else {
		LogStorage.log.push({ level : "log", msg : msg.toString()});
	}
	LogOverride.ogLog.apply(window.console,args);
};
HxJsLogger.error = function(v,infos) {
	var msg = v;
	if(infos != null && infos.customParams != null) {
		msg += " " + infos.customParams.toString();
	}
	var args = infos != null ? ["" + infos.fileName + ":" + infos.lineNumber + ":",msg] : [msg];
	if(infos != null) {
		LogStorage.log.push({ level : "error", fileName : infos.fileName, lineNumber : infos.lineNumber, msg : msg.toString()});
	} else {
		LogStorage.log.push({ level : "error", msg : msg.toString()});
	}
	LogOverride.ogError.apply(window.console,args);
};
var LogOverride = function() { };
LogOverride.init = function() {
	window.console.warn = function() {
		var msgs = Array.from(arguments);
		var stack = new Error().stack;
		LogStorage.log.push({ level : "warn", msg : msgs.toString(), stack : stack});
		return LogOverride.ogWarn.apply(window.console,msgs);
	};
	window.console.error = function() {
		var msgs1 = Array.from(arguments);
		var stack1 = new Error().stack;
		LogStorage.log.push({ level : "error", msg : msgs1.toString(), stack : stack1});
		return LogOverride.ogError.apply(window.console,msgs1);
	};
	window.console.log = function() {
		var msgs2 = Array.from(arguments);
		LogStorage.log.push({ level : "log", msg : msgs2.toString()});
		return LogOverride.ogLog.apply(window.console,msgs2);
	};
	window.testerror = function() {
		return window.document.getElementById("nah").style.left = "128312px";
	};
};
var LogStorage = $hx_exports["LogStorage"] = function() { };
LogStorage.getJSONLog = function() {
	return JSON.stringify(LogStorage.log);
};
var Main = function() { };
Main.main = function() {
	LogOverride.init();
};
LogOverride.ogLog = window.console.log;
LogOverride.ogError = window.console.error;
LogOverride.ogWarn = window.console.warn;
LogStorage.log = [];
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
