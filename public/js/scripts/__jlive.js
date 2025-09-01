/*!
 * jLive JavaScript Library v0.0.5
 * http://jLive-lib.com/
 *
 * Copyright 2015 JASON.
 * Released under the MIT license
 * http://jLive-lib/license
 *
 * objectif fixé pour le moment:
- rendre presque toutes les fonctions frequement utilisé en PHP disponible en JS.

 */

(function (window) {
	"use strict";
	var

		htmEntitie,
		constList = {},
		classType = {},
		__core_toString = classType.toString,
		// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		jLive = function (selector, context) {
			context = context || document;
			return new jLive.fn.init(selector, context);
		};
	constList.Core = {};
	constList.user = {};
	htmEntitie = {
		nbsp: ' ',
		quot: '"',
		// Caractères généraux
		laquo: '«',
		raquo: '»',
		lsaquo: '‹',
		rsaquo: '›',
		ldquo: '“',
		// Caractères alphabétiques accentués et spéciaux
		aacute: 'á',
		Aacute: 'Á',
		Acirc: 'Â',
		agrave: 'à',
		Agrave: 'À',
		aring: 'å',
		Aring: 'Å',
		atilde: 'ã',
		Atilde: 'Ã',
		auml: 'ä',
		Auml: 'Ä',
		aelig: 'æ',
		Aelig: 'Æ',
		ccedil: 'ç',
		Ccedil: 'Ç',
		eacute: 'é',
		Eacute: 'É',
		ecirc: 'ê',
		Ecirc: 'Ê',
		egrave: 'è',
		Egrave: 'È',
		apos: "'",
		// Sciences
		lt: '<',
		gt: '>'
	};
	jLive.fn = jLive.prototype = {

		init: function (selectors, context) {

			if (typeof selectors == 'undefined')
				jLive.error('something wrong with your selector :' + selectors);
			else if (jLive.checkType(selectors) == 'function') {
				(function (jLive) {
					selectors.call();
					return this;
				})(this);
				return;
			}

			var selObj = jLive.getElement(selectors, context);

			this[0] = selObj;
			this.length = 1;
			this.prevObject;
			this.selector = selectors;
			this.type = 'JLIVE';
			this.el = selObj;
			if (!this.el) {
				this.el = selectors;
			}

			return this;
		}
	};

	jLive.fn.init.prototype = jLive.fn;

	// Return first selector
	jLive.raw = function (obj) {
		if (typeof obj == 'undefined')
			jLive.error('Warning: raw is work only with DOM');
		obj.el = obj[0];
		return obj;
	}

	// -------------------------------------utils------------------------------
	// */

	jLive.overwrite = function (obj, obj2) {

		if (jLive.checkType(obj) == 'object' && jLive.checkType(obj2) == 'object') {
			// console.log(obj);
			for (var obj2p in obj2) {
				if (typeof obj[obj2p] != 'undefined')
					obj[obj2p] = obj2[obj2p];
			}

			return obj;
		}
	};

	// -------------------------------------end
	// utils------------------------------ */


	// -------------------------------------variable------------------------------
	// */

	jLive.isFunction = function (obj) {
		return jLive.checkType(obj) === "function";
	};

	jLive.is_object = function (obj) {
		return jLive.checkType(obj) === "object";
	};

	jLive.isJliveObject = function (obj) {
		return obj.type === 'JLIVE' && jLive.checkType(obj) == 'object';
	};

	jLive.isWindow = function (obj) {
		return obj != null && obj == obj.window;
	};

	jLive.is_array = Array.isArray || function (obj) {
		return jLive.checkType(obj) === "array";
	};

	jLive.is_numeric = function (obj) {
		return !isNaN(parseFloat(obj)) && isFinite(obj);
	};

	jLive.is_boolean = function (obj) {
		return jLive.checkType(obj) === "boolean";
	};

	jLive.empty = function ($var) {
		if (typeof ($var) == 'undefined')
			return true;
		var tvar = jLive.checkType($var),
			varLen;
		if ('string' == tvar && tvar == 'number') {
			varLen = jLive.strlen(jLive.trimAll($var));
		} else if ('object' == tvar || tvar == 'array') {
			varLen = jLive.count($var);
		}
		return (isDigitChar($var) && $var == 0) || $var == "" || varLen == 0 || $var == null || $var == false || $var == undefined || typeof $var == 'undefined';
	};

	jLive.isEmptyObject = function (obj) {
		var name;
		for (name in obj) {
			return false;
		}
		return true;
	};

	jLive.error = function (msg) {
		throw new Error(msg);
	};

	jLive.settype = function ($var, type) {

		switch (type) {
			case 'string':
				return '' + $var + '';
				break;
			case 'integer':
			case 'int':
				if ($var == "")
					$var = 0;
				return parseInt($var);
				break;
			case 'float':
			case 'double':
				if ($var == "")
					$var = 0;
				return parseFloat($var);
				break;
			case 'boolean':
				if ($var == "")
					$var = 0;
				return stringToBoolean($var);
				break;

			default:
				jLive.error(type + ' is not a type');
				break;
		}
	};

	jLive.gettype = function ($var) {
		return jLive.checkType($var);
	};

	/*
	 * ! arg is internal use ne support pas case_insensitive;
	 */
	jLive.define = function (name, value, arg) {
		if (arg == undefined)
			arg = 'user';
		if (value == undefined)
			jLive.error('Warning: define() expects at least 1 parameter');
		if (window['JLIVE' + name])
			jLive.error('Notice: Constant ' + name + ' already defined');
		if (typeof window[name] !== 'undefined')
			jLive.error('Notice: redeclaration of var ' + name);
		if (window[name] = value) {
			if (arg == 'user')
				constList.user[name] = value;
			else
				constList.Core[name] = value;
			return window['JLIVE' + name] = value;
		} else
			return window['JLIVE' + name] = false;
	};

	// name correspond au nom du constante et non la variable ex:
	// defined('nomconst') au lieu de defined(nomconst)
	jLive.defined = function (name) {
		if (typeof (window['JLIVE' + name]) !== 'undefined')
			return true;
		if (jLive.array_key_exists('JLIVE' + name, window))
			return true;
		else
			return false;
	};

	jLive.define('STR_PAD_RIGHT', 'STR_PAD_RIGHT', 'CORE');
	jLive.define('STR_PAD_LEFT', 'STR_PAD_LEFT', 'CORE');
	jLive.define('STR_PAD_BOTH', 'STR_PAD_BOTH', 'CORE');
	jLive.define('COUNT_RECURSIVE', 'COUNT_RECURSIVE', 'CORE');
	jLive.define('COUNT_NORMAL', 'COUNT_NORMAL', 'CORE');
	jLive.define('CASE_UPPER', 1, 'CORE');
	jLive.define('CASE_LOWER', 0, 'CORE');

	jLive.get_defined_constants = function (categorize) {
		var listTrue = {};
		if (categorize == undefined) {
			categorize = false;
			jLive.foreach(constList, function (i, v) {
				jLive.foreach(v, function (i2, v2) {
					listTrue[i2] = v2;
				});
			});
		}
		return (categorize) ? constList : listTrue;
	}
	// -------------------------------------fonction
	// math------------------------------ */

	jLive.abs = function (num) {

		if (jLive.is_numeric(num) || isNumberInString(num)) {
			// var numReg = /^(-)([0-9.]+)$/.test(num);
			// return (numReg) ? RegExp.$2 : num;
			return (num < 0) ? - (num) : num;
		} else {
			jLive.error(num + ' is not a number');
		}

	};

	// integer n'existe pas en PHP, c'est un bonus, il sert à définir si l'on
	// souhaite obtenir un nombre entier ou non
	jLive.rand = function (min, max, integer) {
		if (min && undefined == max)
			return jLive.error('Warning: rand() expects exactly 2 parameters, 1 given');
		if (undefined == max)
			max = 32767; // Sur quelques plates-formes (par exemple,
		// Windows), mt_getrandmax() est limité à 32767
		if (undefined == min)
			min = 0;
		if (undefined == integer)
			integer = true;
		if (jLive.checkType(min) !== 'number')
			return jLive.error('Warning: rand() expects parameter 1 to be long, ' + jLive.checkType(min) + ' given');
		if (jLive.checkType(max) !== 'number')
			return jLive.error('Warning: rand() expects parameter 2 to be long, ' + jLive.checkType(max) + ' given');
		var ret;
		if (!integer)
			return Math.random() * (max - min) + min;
		else
			return Math.floor(Math.random() * (max - min + 1) + min);
	};

	// -------------------------------------fonction
	// string----------------------------- */

	jLive.addslashes = function (str) {
		var strFind = '',
			strCopie,
			strReg;
		for (var i = 0; i < str.length; i++) {
			strCopie = str.charAt(i),
				strReg = /["\']+/.test(strCopie);
			strFind += (strReg) ? strCopie.replace(/["\']+/, "\\" + strCopie) : strCopie;
		}
		return strFind;
	};

	jLive.strlen = function (string) {
		var tString = jLive.checkType(string);
		if (tString !== 'string' && tString != 'number')
			return jLive.error(' Warning: strlen() expects parameter 1 to be string, ' + tString + ' given');
		return jLive.settype(string, 'string').length;
	};

	/*
	 * ! natcompare.js -- Perform 'natural order' comparisons of strings in
	 * JavaScript. Copyright (C) 2005 by SCK-CEN (Belgian Nucleair Research
	 * Centre) Written by Kristof Coomans <kristof[dot]coomans[at]sckcen[dot]be>
	 *
	 * Based on the Java version by Pierre-Luc Paour, of which this is more or
	 * less a straight conversion. Copyright (C) 2003 by Pierre-Luc Paour
	 * <natorder@paour.com>
	 */

	jLive.strnatcmp = function (a, b) {
		a = jLive.settype(a, 'string');
		b = jLive.settype(b, 'string');
		var ia = 0,
			ib = 0;
		var nza = 0,
			nzb = 0;
		var ca,
			cb;
		var result;
		while (true) {
			// only count the number of zeroes leading the last number compared
			nza = nzb = 0;

			ca = a.charAt(ia);
			cb = b.charAt(ib);

			// skip over leading spaces or zeros
			while (isWhitespaceChar(ca) || ca == '0') {
				if (ca == '0') {
					nza++;
				} else {
					// only count consecutive zeroes
					nza = 0;
				}
				ca = a.charAt(++ia);
			}
			while (isWhitespaceChar(cb) || cb == '0') {
				if (cb == '0') {
					nzb++;
				} else {
					// only count consecutive zeroes
					nzb = 0;
				}

				cb = b.charAt(++ib);
			}

			// process run of digits
			if (isDigitChar(ca) && isDigitChar(cb)) {
				if ((result = compareRight(a.substring(ia), b.substring(ib))) != 0) {
					return result;
				}
			}

			if (ca == 0 && cb == 0) {
				// The strings compare the same. Perhaps the caller
				// will want to call strcmp to break the tie.
				return nza - nzb;
			}
			if (ca < cb) {
				return -1;
			} else if (ca > cb) {
				return +1;
			}
			++ia;
			++ib;
		}
	}

	jLive.strnatcasecmp = function (a, b) {
		a = jLive.str(a, 'string');
		b = jLive.settype(b, 'string');
		a = a.toUpperCase();
		b = b.toUpperCase();
		return jLive.strnatcmp(a, b);
	}

	jLive.ucfirst = function (str) {
		if (undefined == str)
			return jLive.error('Warning: ucfirst() expects exactly 1 parameter, 0 given');
		var fletter = str.charAt(0);
		return fletter.toUpperCase() + jLive.substr(str, 1);
	}

	jLive.ucwords = function (str) {
		if (undefined == str)
			return jLive.error('Warning: ucwords() expects exactly 1 parameter, 0 given');
		var words = str.split(/\s+/),
			ret;
		ret = jLive.array_map(function (sw) {
			return jLive.ucfirst(sw);
		}, words);
		return jLive.implode(' ', ret);
	};

	jLive.stripslashes = function (str) {
		return jLive.str_replace(["\\'", '\\"'], ["'", '"'], str);
	};

	jLive.explode = function (delimiter, str, limit) {
		if (jLive.checkType(delimiter) !== 'string')
			jLive.error('Warning: explode() expects parameter 1 to be string, ' + jLive.checkType(delimiter) + ' given');
		if (jLive.checkType(str) !== 'string')
			jLive.error('Warning: explode() expects parameter 2 to be string, ' + jLive.checkType(str) + ' given');
		if (delimiter == '')
			jLive.error('Warning: explode(): Empty delimiter');
		str = str.split(delimiter);
		if (limit && limit > 0 && limit < str.length) {
			var i = 0,
				j = limit - 1,
				str2 = [],
				str3 = '';
			for (; i < limit - 1; i++) {
				str2[i] = str[i];
			}
			for (; j < str.length; j++) {
				str3 += delimiter + str[j];
			}
			str3 = str3.replace('|', '');
			str2[limit - 1] = str3;
			str = str2;
		}
		if (limit < 0 && limit > -str.length) {
			var i = 0,
				str2 = [],
				lim2 = str.length - jLive.abs(limit);
			for (; i < lim2; i++) {
				str2[i] = str[i];
			}
			str = str2;
		}
		return str;
	};

	jLive.implode = function (glue, pieces) {
		var t,
			tGlue = jLive.checkType(glue);
		if (tGlue == 'array' && undefined == pieces) {
			pieces = glue;
			glue = '';
		} else {
			t = jLive.checkType(pieces);
		}
		if (jLive.checkType(pieces) !== 'array')
			jLive.error('Warning: implode(): Invalid arguments passed');
		pieces = pieces.join(glue);
		return pieces;
	};

	jLive.chr = function (n) {
		return (jLive.is_numeric(n)) ? String.fromCharCode(n) : jLive.error(n + ' is not a nombre');
	};

	jLive.trim = function (str) {
		str = jLive.settype(str, 'string');
		if ('undefined' !== typeof String.trim) {
			return str == null ? "" : str.trim(str);
		} else {
			return str == null ? "" : str.replace(rtrim, "");
		}
	};

	jLive.ord = function (str) {
		return 'undefined' !== typeof String.prototype.charCodeAt ? str.charCodeAt(0) : String.charCodeAt(str.charAt(0));
	};

	jLive.chunk_split = function (str, n, sep) {
		if (undefined == str)
			return jLive.error('Warning: chunk_split() expects at least 1 parameter, 0 given');
		if (undefined == n)
			return str;
		if (undefined == sep)
			sep = '\r\n';
		var strFind = '',
			strLength = str.length,
			strdiv = strLength / n,
			strboucleMin = Math.floor(strdiv);
		for (var i = 0; i < strboucleMin; i++) {
			strFind += str.substr(i * n, n) + sep;
		}
		strFind += str.substr(strboucleMin * n);
		if ((strFind.length - sep.length) == strFind.lastIndexOf(sep))
			strFind = strFind.substring(0, strFind.lastIndexOf(sep));
		return strFind;
	};

	jLive.count_chars = function (string, mode) { // reste a tourner la boucle
		// avec tous le code ASCII
		if (undefined == mode)
			mode = 0;
		if (mode > 4 || mode < 0)
			return jLive.error('Warning: count_chars(): Unknown mode');
		var tab = {},
			nbre;
		switch (mode) {
			case 0:
			case 2:
			case 4:
				for (var i = 0; i <= 127; i++) {
					nbre = 0;
					for (var j = 0; j < string.length; j++) {
						if (i == jLive.ord(string.charAt(j)))
							nbre++;
						tab[i] = nbre;
					}
				}
				if (mode == 2) {
					var tab2 = {};
					jLive.foreach(tab, function (i, n) {
						if (n == 0)
							tab2[i] = n;
					});
					var tab = tab2;
				}
				if (mode == 4) {
					var tabStr = '';
					jLive.foreach(tab, function (i, n) {
						if (n == 0)
							tabStr += jLive.chr(i);
					});
					tab = tabStr;
				}
				break;
			case 1:
			case 3:
				for (var i = 0; i < string.length; i++) {
					nbre = 0;
					for (var j = 0; j < string.length; j++) {
						if (string.charAt(i) == string.charAt(j))
							nbre++;
						tab[jLive.ord(string.charAt(i))] = nbre;
					}
				}
				if (mode == 3) {
					var tabStr = '';
					jLive.foreach(tab, function (i, n) {
						tabStr += jLive.chr(i);
					});
					tab = tabStr;
				}
				break;
		}
		return tab;
	};

	jLive.get_meta_tags = function (filename) { // en cours
		alert(filename);
	};

	jLive.strip_tags = function (str, allowable_tag) {
		if (str == undefined)
			return '';

		var pattern = /<[a-z]+\s*.*?>|<\/[a-z]+>/gi,
			regTst;
		if (allowable_tag) {
			allowable_tag = allowable_tag.replace(/\s*/g, '');
			var allow = allowable_tag.match(/<[a-z]+\s*.*?>/g);

			return str.replace(pattern, function (f) {
				for (var i = 0; i < allow.length; i++) {

					regTst = /<([a-z]+)>/.exec(allow[i]);
					var pattern2 = new RegExp('<([a-z]+)\s*.*?>|<\/([a-z]+)\s*>', 'gi'),
						ret;

					if (pattern2.test(f)) {
						var regCap = RegExp.$1 || RegExp.$2;
						if ($j.in_array('<' + regCap + '>', allow))
							ret = f;
						else
							ret = '';
					}
				}
				return ret;
			});

		} else
			return str.replace(pattern, '');

	};

	jLive.strcasecmp = function (str1, str2) {
		return jLive.strcmp(str1.toLowerCase(), str2.toLowerCase());
	};

	jLive.strcmp = function (str1, str2) {
		return ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1));
	};

	jLive.htmlentities = function (string) { // en cours NB: reste a finir
		// les $flags et les entite dans
		// le tableau htmEntitie
		var regex;
		jLive.foreach(htmEntitie, function (i, v) {
			regex = new RegExp(v, 'g');
			string = string.replace(regex, '&' + i + ';');
		});
		return string;
	};

	jLive.htmlspecialchars = function (string) { // en cours NB: reste a
		// finir les $flags et les
		// entite dans le tableau
		// htmEntitie
		var regex;
		jLive.foreach(htmEntitie, function (i, v) {
			if ($j.in_array(v, ['&', '"', "'", '<', '>'])) {
				regex = new RegExp(v, 'g');
				string = string.replace(regex, '&' + i + ';');
			}
		});
		return string;
	};

	/*
	 * ! arg is internal use NB:strLength ne prend pas pour le moment la valeur
	 * negative du a ma mal comprehension dans la documentation PHP
	 */
	jLive.strcspn = function (str1, str2, start, strLength, arg) { // doit
		// subir
		// encore d
		// test
		if (arg == undefined)
			arg = {
				func: 'strcspn'
			};
		if (str2 == undefined)
			return jLive.error('Warning: ' + arg.func + '() expects at least 2 parameters');
		if (start && start > 0)
			str1 = str1.substring(jLive.abs(start));
		else if (start && start < 0)
			str1 = str1.substr(str1.length - jLive.abs(start), jLive.abs(start));
		var start = (start == undefined) ? 0 : jLive.abs(start),
			strLength = (strLength == undefined) ? str1.length : jLive.abs(strLength),
			i = 0;
		for (; i < strLength; i++) {
			if (arg.func == 'strspn') {
				if (str2.indexOf(str1.charAt(i)) === -1) {
					return i;
				}
			} else {
				if (str2.indexOf(str1.charAt(i)) > -1) {
					return i;
				}
			}
		}
		return (strLength == undefined) ? str1.length : strLength;
	}

	jLive.strspn = function (str1, str2, start, strLength) { // doit subir
		// encore bocoup
		// d test
		return jLive.strcspn(str1, str2, start, strLength, {
			func: 'strspn'
		});
	}

	jLive.str_pad = function (str, pad_length, pad_string, pad_type) {
		if (isNumberInString(str))
			str = jLive.settype(str, 'string');
		var strLen = str.length;
		if (pad_string == undefined)
			pad_string = " ";
		if (pad_type == undefined)
			pad_type = "STR_PAD_RIGHT";
		if (pad_length < 0 || strLen == pad_length || strLen > pad_length)
			return str;
		if (!jLive.defined(pad_type))
			return jLive.error('Notice: Use of undefined constant ' + pad_type);
		pad_string = jLive.str_repeat(pad_string, pad_length - strLen);
		if (pad_type == 'STR_PAD_LEFT')
			return pad_string.substr(0, pad_length - strLen) + str;
		else if (pad_type == 'STR_PAD_RIGHT')
			return str + pad_string.substr(0, pad_length - strLen);
		else {
			var pad_stringR = Math.ceil((pad_length - strLen) / 2),
				pad_stringL = (pad_length - strLen) - pad_stringR;
			return pad_string.substr(0, pad_stringL) + str + pad_string.substr(0, pad_stringR);
		}
	}

	jLive.str_repeat = function (input, multiplier) {
		if (multiplier == undefined)
			return jLive.error('Warning: str_repeat() expects exactly 2 parameters');
		if (multiplier < 0)
			return jLive.error('Warning: str_repeat(): Second argument has to be greater than or equal to 0');
		var i = 0,
			str = "";
		for (; i < multiplier; i++)
			str += input;
		return str;
	}

	jLive.strpbrk = function (haystack, char_list) {
		if (haystack == undefined || char_list == undefined)
			return jLive.error('Warning: strpbrk() expects exactly 2 parameters');
		var i = 0,
			reg;
		for (; i < haystack.length; i++) {
			reg = new RegExp(haystack.charAt(i));
			if (reg.test(char_list)) {
				return haystack.substr(i);
			}
		}
	};

	jLive.strrpos = function (haystack, needle, offset) {
		return jLive.strpos(haystack, needle, offset, {
			func: 'strrpos'
		});
	};

	jLive.strrchr = function (haystack, needle) {
		// Seul le premier caractère de needle sera utilisé;
		return jLive.strstr(haystack, needle.charAt(0), false, {
			func: 'strrchr'
		});
	};

	// arg is internal use
	jLive.strstr = function (haystack, needle, before_needle, arg) {
		if (arg == undefined)
			arg = {
				func: 'strstr'
			};
		if (before_needle == undefined)
			before_needle = false;
		if (needle == undefined)
			return jLive.error('Warning: ' + arg.func + '() expects at least 2 parameters');
		if (typeof needle !== 'string')
			needle = jLive.chr(jLive.settype(needle, 'integer'));
		var unhaystack = haystack; // on stock la valeur d'origine
		if (arg.func == 'stristr') {
			if (typeof haystack == 'string')
				haystack = haystack.toLowerCase();
			if (typeof needle == 'string')
				needle = needle.toLowerCase();
		}
		var pos = (arg.func == 'strrchr') ? jLive.strrpos(haystack, needle) : jLive.strpos(haystack, needle);
		if (before_needle)
			return (pos !== false) ? unhaystack.substring(0, pos) : false;
		else
			return (pos !== false) ? unhaystack.substr(pos) : false;
	};

	jLive.stristr = function (haystack, needle, before_needle) {
		return jLive.strstr(haystack, needle, before_needle, {
			func: 'stristr'
		});
	};

	jLive.strripos = function (haystack, needle, offset) {
		if (typeof haystack == 'string')
			haystack = haystack.toLowerCase();
		if (typeof needle == 'string')
			needle = needle.toLowerCase();
		return jLive.strpos(haystack, needle, offset, {
			func: 'strripos'
		});
	};

	jLive.stripos = function (haystack, needle, offset) {
		if (typeof haystack == 'string')
			haystack = haystack.toLowerCase();
		if (typeof needle == 'string')
			needle = needle.toLowerCase();
		return jLive.strpos(haystack, needle, offset, {
			func: 'stripos'
		});
	};

	// arg is internal use
	jLive.strpos = function (haystack, needle, offset, arg) {
		if (arg == undefined)
			arg = {
				func: 'strpos'
			};
		if (needle == undefined || haystack == undefined)
			return jLive.error('Warning: ' + arg.func + '() expects at least 2 parameters');
		if (offset > haystack.length)
			return jLive.error('Warning: ' + arg.func + '() Offset is greater than the length of haystack string');
		if (offset == undefined && (arg.func == 'strrpos' || arg.func == 'strripos'))
			offset = haystack.length;
		if (offset == undefined && (arg.func !== 'strrpos' || arg.func !== 'strripos'))
			offset = offset = 0;
		if (typeof needle == 'number' || typeof needle == 'string') {
			if (typeof needle == 'number')
				needle = jLive.chr(needle);
			if (arg.func == 'stripos')
				needle = needle.toLowerCase();
		} else
			return jLive.error('Warning: ' + arg.func + '(): needle is not a string or an integer');
		if ((arg.func == 'strrpos' || arg.func == 'strripos') && offset < 0) {
			var haystack2Len = haystack.length - jLive.abs(offset);
			haystack = haystack.substring(0, haystack2Len + 1);
			offset = haystack.length;
		} else if ((arg.func == 'strrpos' || arg.func == 'strripos') && offset >= 0) {
			if (offset !== haystack.length) {
				needleTest = haystack.substring(offset);
				if (needleTest.indexOf(needle) > -1)
					offset = haystack.length;
				else
					haystack = needleTest;
			}
		}
		if (arg.func == 'strpos')
			if (offset < 0)
				return jLive.error('Warning: ' + arg.func + '(): Offset not contained in string');
		var pos = (arg.func == 'stripos' || arg.func == 'strpos') ? haystack.indexOf(needle, offset) : haystack.lastIndexOf(needle, offset);
		return (pos > -1) ? pos : false;
	};

	/*
	 * ! arg is internal use
	 */
	jLive.str_replace = function (search, replace, subject, counter, arg) {
		if (arg == undefined)
			arg = {
				func: 'str_replace'
			};
		if (subject == undefined)
			return jLive.error('Warning: ' + arg.func + '() expects at least 3 parameters');
		var isArrayReplace = jLive.is_array(replace),
			isArraySubject = jLive.is_array(subject),
			result = [];
		if (counter != undefined)
			window[counter] = 0;
		if (!isArraySubject)
			subject = [subject];
		jLive.foreach(subject, function () {
			var i = 0,
				subject_ = this;
			if (jLive.is_array(search)) {
				for (; i < search.length; i++) {
					search[i] = $j.quotemeta(search[i]);
					var reg = (arg.func == 'str_replace') ? new RegExp(search[i], 'g') : new RegExp(search[i], 'gi');
					if (isArrayReplace && replace[i] == undefined)
						replace[i] = "";
					subject_ = (isArrayReplace) ? subject_.replace(reg, function (f) {
						if (counter != undefined)
							window[counter]++;
						return replace[i];
					})
						: subject_.replace(reg, function (f) {
							if (counter != undefined)
								window[counter]++;
							return replace;
						});
				}
				/*
				 * !Si le paramètre search est une chaîne de caractères et que
				 * le paramètre replace est un tableau, alors n'a pas de sens et
				 * on renvoie l'erreur que php genere dans ses genres de cas.
				 */
			} else if (('string' == typeof search) && isArrayReplace) {
				return jLive.error('Notice: Array to string conversion');
			} else {
				search = $j.quotemeta(search);
				subject_ = subject_.replace(new RegExp(search, 'g'), function (f) {
					if (counter != undefined)
						window[counter]++;
					return replace;
				});
			}
			result.push(subject_);
		});
		return (isArraySubject) ? result : result[0];
	}

	jLive.str_ireplace = function (search, replace, subject, g) {
		return jLive.str_replace(search, replace, subject, g, {
			func: 'ireplace'
		});
	}

	jLive.strrev = function (str) {
		var string = "",
			i = str.length - 1;
		for (; i >= 0; i--) {
			string += str.charAt(i);
		}
		return jLive.trim(string);
	};

	jLive.parse_str = function (string, output) {
		string = decodeURIComponent(string);
		var firstStr = jLive.explode("&", string),
			secndStr,
			ret = {},
			name,
			value,
			isArray = false;

		jLive.foreach(firstStr, function (i, v) {
			secndStr = jLive.explode("=", v);
			name = secndStr[0];

			value = secndStr[1] ? secndStr[1] : '';

			value = value.indexOf('#') != -1 ? jLive.substr(value, 0, jLive.strrpos(value, '#')) : value;

			isArray = /[A-Z0-9]+\[\]/i.test(name);

			// console.log(name);

			if (output) {
				if (isArray) {
					name = name.replace(/\[\]/, '');
					if (!ret[name])
						ret[name] = [];
					ret[name].push(value);
				} else {
					ret[secndStr[0]] = value;
				}
			} else {
				if (isArray) {
					name = name.replace(/\[\]/, '');
					if (!window[name])
						window[name] = [];
					window[name].push(secndStr[1]);
				}
				window[secndStr[0]] = value;
			}
		});

		return ret;
	};

	jLive.substr = function (string, start, length) {
		if ('undefined' == typeof start)
			return jLive.error('substr() expects at least 2 parameters, 1 given');
		if (undefined == string)
			return 0;
		if (undefined == length)
			length = string.length;
		if (length == false || length == null || length == 0)
			return "";
		if (length > 0)
			string = string.substr(start, length);
		else {
			var str = string.substr(start, string.length);
			string = str.substr(0, str.length - jLive.abs(length));
		}
		return (string == "") ? 0 : string;
	}

	jLive.str_split = function (string, split_length) {
		if (undefined == string)
			return jLive.error('Warning: str_split() expects at least 1 parameter, 0 given');
		if (undefined == split_length)
			split_length = 1;
		if (split_length < 1)
			return false;
		var stringFind = [],
			stringLength = string.length,
			stringdiv = stringLength / split_length,
			stringboucleMin = Math.floor(stringdiv);
		for (var i = 0; i < stringboucleMin; i++) {
			stringFind.push(string.substr(i * split_length, split_length));
		}
		stringFind.push(string.substr(stringboucleMin * split_length));
		return stringFind;
	}

	jLive.substr_replace = function (string, replacement, start, length) {
		var i = 0,
			stringArray = [];
		if (undefined == start)
			return jLive.error('Warning: substr_replace() expects at least 3 parameters, 2 given');
		if (jLive.checkType(string) == 'object' || jLive.checkType(replacement) == 'object' || jLive.checkType(start) == 'object'
			|| jLive.checkType(length) == 'object')
			return jLive.error('Object not Supported in substr_replace() Parameters');
		if (!jLive.is_array(string))
			string = [string];
		for (; i < string.length; i++) {
			var startCopy,
				lengthCopy,
				replacement,
				replacementCopy,
				thisStringValue = string[i],
				thisStringValueArray = [];
			startCopy = (jLive.is_array(start)) ? start[i] : start;
			lengthCopy = (jLive.is_array(length)) ? length[i] : length;
			replacementCopy = (jLive.is_array(replacement)) ? replacement[i] : replacement;
			if (undefined == startCopy)
				startCopy = 0;
			if (undefined == lengthCopy)
				lengthCopy = thisStringValue.length;
			if (undefined == replacementCopy)
				replacementCopy = "";
			for (var j = 0; j < thisStringValue.length; j++) {
				thisStringValueArray.push(thisStringValue[j]);
			}
			jLive.array_splice(thisStringValueArray, startCopy, lengthCopy, replacementCopy);
			stringArray.push(jLive.implode("", thisStringValueArray));
		}
		return stringArray;
	};

	jLive.substr_count = function (haystack, needle, offset, length) {
		if (undefined == offset)
			offset = 0;
		if (((offset + length) > haystack.length) && undefined !== length)
			return jLive.error('Warning: substr_count(): Length and offset value exceeds string length');
		if (undefined == length)
			length = haystack.length;
		if (undefined == needle)
			return jLive.error('Warning: substr_count() expects at least 2 parameters, 1 given');
		haystack = jLive.substr(haystack, offset, length);
		haystack = haystack.match(new RegExp(needle, 'g'));

		return (haystack) ? haystack.length : 0;
	}

	jLive.substr_compare = function (main_str, str, offset, length, case_insensitivity) {
		if (undefined == case_insensitivity)
			case_insensitivity = false;
		if (undefined == offset)
			jLive.error('Warning: substr_compare() expects at least 3 parameters, 2 given');
		if (jLive.abs(offset) > str.length)
			jLive.error('Warning: substr_compare(): The start position cannot exceed initial string length');
		main_str = jLive.substr(main_str, offset, length);
		return (case_insensitivity) ? jLive.strcasecmp(main_str, jLive.substr(str, 0, length)) : jLive.strcmp(main_str, jLive.substr(str, 0, length));
	}

	jLive.quotemeta = function (str) {
		var typStr = jLive.checkType(str);
		if (typStr != 'string' && typStr != 'number')
			jLive.error('Warning: quotemeta() expects parameter 1 to be string, ' + typStr + ' given');
		str = jLive.settype(str, 'string');
		return str.replace(/(.?)/g, function (str, index) {
			return (jLive.in_array(str, ['.', '\\', '+', '*', '?', '[', '^', ']', '(', '$', ')'])) ? '\\' + str : str;
		});
	}

	jLive.preg_quote = function (str) {
		var typStr = jLive.checkType(str);
		if (typStr != 'string' && typStr != 'number')
			jLive.error('Warning: preg_quote() expects parameter 1 to be string, ' + typStr + ' given');
		str = jLive.settype(str, 'string');
		return str.replace(/(.?)/g, function (str, index) {
			return (jLive.in_array(str, ['.', '\\', '+', '*', '?', '[', '^', ']', '(', '$', ')', '=', '{', '}', '!', '<', '>', '|', ':', '-'])) ? '\\' + str : str;
		});
	}

	jLive.strtolower = function (str) {
		var typStr = jLive.checkType(str);
		if (typStr != 'string' && typStr != 'number')
			jLive.error('Warning: quotemeta() expects parameter 1 to be string, ' + typStr + ' given');
		return str.toLowerCase();
	}

	jLive.strtoupper = function (str) {
		var typStr = jLive.checkType(str);
		if (typStr != 'string' && typStr != 'number')
			jLive.error('Warning: quotemeta() expects parameter 1 to be string, ' + typStr + ' given');
		return str.toUpperCase();
	}

	jLive.wordwrap = function (str, width, sbreak, cut) { // en cours( rest
		// gestion cut )

		var i = 0,
			j = 0,
			ret = [],
			strProcess = [];
		for (; i < str.length; i += width) {
			strProcess.push(jLive.substr(str, i, width));
		}

		for (; j < strProcess.length; j++) {
			if (!cut) {
				if (strProcess[j][width - 1] !== ' ') {
					var nxtStr = '';
					if (strProcess[j + 1]) {
						nxtStr = jLive.substr(strProcess[j + 1], 0, jLive.strpos(strProcess[j + 1], ' '));
						strProcess[j + 1] = jLive.str_replace(nxtStr, '', strProcess[j + 1]);
					}
					ret.push(strProcess[j] + nxtStr);
				} else
					ret.push(strProcess[j]);

			} else {
				ret.push(strProcess[j]);
			}

		}
		// console.log(ls);
		return jLive.implode(sbreak || '\n', ret);
	};

	/* NOT A PHP STRING Function */

	jLive.acronym = function (str, caseMatch) {
		var typStr = jLive.checkType(str),
			ret = "";
		caseMatch = caseMatch || 'none';
		if (typStr != 'string')
			jLive.error('Warning: acronym() expects parameter 1 to be string, ' + typStr + ' given');

		$j(str.split(' ')).foreach(function () {

			if (caseMatch == 'upper') {
				var strASCII = $j.ord(this[0]);
				if (strASCII >= 65 && strASCII <= 90)
					ret += this[0];

			} else if (caseMatch == 'lower') {
				var strASCII = $j.ord(this[0]);
				if (strASCII >= 97 && strASCII <= 122)
					ret += this[0];
			} else
				ret += this[0];

		});

		return ret;
	};

	jLive.trimAll = function (str) {
		str = jLive.settype(str, 'string');
		str = str.replace(/[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+/g, " ");
		return jLive.trim(str);
	};

	/* END NOT A PHP Function */

	/* !----------------cookies---------------------------------- */

	function cookies() {

		this.getCookies = function () {

			var $_COOKIE = {};

			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}

				c = c.split("=");

				$_COOKIE[c[0]] = c[1];

			}

			window.$_COOKIE = $_COOKIE;

		}

		this.setcookie = function (name, value, expire, path, domain, secure, httponly) {
			var d = new Date();
			d.setTime(d.getTime() + (expire * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = name + "=" + value + ";" + expires + ";path=" + path;
			//document.cookie = name + "=" + value + ";" + expires + ";path=" + path + ";domain=" + domain + ";secure=" + secure;

			this.getCookies(); //update cookies

		}

		this.deletecookie = function (name, path) {
			document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=" + path;
		}
	}

	var cookies = new cookies();
	cookies.getCookies();

	jLive.setcookie = function (name, value, expire, path, domain, secure, httponly) {

		value = value || "";
		path = path || "/";
		domain = domain || "";
		secure = secure || "";
		httponly = httponly || "";

		cookies.setcookie(name, value, expire, path, domain, secure, httponly);
	}

	jLive.deletecookie = function (name, path) {

		path = path || "/";
		cookies.deletecookie(name, path);
	}

	/* END cookies */

	/* !----------------function array---------------------------------- */

	jLive.array_combine = function (keys, values) {
		if ('object' !== jLive.checkType(values) && jLive.checkType(values) !== 'array')
			jLive.error('Warning: array_combine() expects parameter 2 to be array');
		if (jLive.count(keys) !== jLive.count(values))
			jLive.error('Warning: array_combine(): Both parameters should have an equal number of elements');
		var ret = {};
		values = jLive.array_values(values);
		jLive.foreach(keys, function (ki, kv) {
			ret[kv] = values[ki];
		});
		return ret;
	}

	jLive.array_count_values = function (input) {
		if ('object' !== jLive.checkType(input) && jLive.checkType(input) !== 'array')
			jLive.error('Warning: array_count_values() expects parameter 1 to be array');
		var ret = {};
		jLive.foreach(input, function (i, v) {
			var n = 0;
			jLive.foreach(input, function (ii, vv) {
				if ('number' !== jLive.checkType(v) && jLive.checkType(v) !== 'string')
					jLive.error('Warning: array_count_values(): Can only count STRING and NUMBER values!');
				if (v === vv)
					n++;
			});
			ret[v] = n;
		});
		return ret;
	};

	jLive.array_diff = function (array1, array2) {
		var typArr1 = jLive.checkType(array1),
			typArr2 = jLive.checkType(array2);
		if ('object' !== typArr1 && typArr1 !== 'array')
			jLive.error('Warning: array_diff(): Argument #1 is not an array');
		if ('object' !== typArr2 && typArr2 !== 'array')
			jLive.error('Warning: array_diff(): Argument #2 is not an array');
		var ret = {};
		jLive.foreach(array1, function (i, v) {
			if (!jLive.in_array(v, array2, true))
				ret[i] = v;
		});
		return (typArr1 == 'object' || 'object' == typArr2) ? ret : jLive.objectToArray(ret);
	};

	jLive.array_fill_keys = function (keys, value) {
		if ('object' !== jLive.checkType(keys) && jLive.checkType(keys) !== 'array')
			jLive.error('Warning: array_fill_keys() expects parameter 1 to be array, ' + jLive.checkType(keys) + ' given');
		if (undefined == value)
			jLive.error('Warning: array_fill_keys() expects exactly 2 parameters, 1 given');
		var ret = {};
		jLive.foreach(keys, function (i, v) {
			ret[v] = value;
		});
		return ret;
	};

	jLive.array_filter = function (input, callback) {
		var t = jLive.checkType(input);
		if ('object' !== t && t !== 'array')
			jLive.error('Warning: array_filter() expects parameter 1 to be array, ' + t + ' given');
		if (callback && jLive.checkType(callback) !== 'function')
			jLive.error('Warning: array_filter() expects parameter 2 to be a valid callback, function not found or invalid function name');
		var ret = t == 'array' ? [] : {};
		jLive.foreach(input, function (i, v) {

			if (callback) {
				if (callback.call(v, v, i, input))
					t == 'array' ? ret.push(v) : ret[i] = v;
			} else if (jLive.settype(v, 'boolean')) {
				t == 'array' ? ret.push(v) : ret[i] = v;
			}
		});
		return ret;
	};

	jLive.array_flip = function (trans) {
		if ('object' !== jLive.checkType(trans) && jLive.checkType(trans) !== 'array')
			jLive.error('Warning: array_flip() expects parameter 1 to be array, ' + jLive.checkType(trans) + ' given');
		var ret = {};
		jLive.foreach(trans, function (i, v) {
			if ('number' == jLive.checkType(v) || jLive.checkType(v) == 'string')
				ret[v] = i;
			else
				jLive.error('Warning: array_flip(): Can only flip STRING and NUMBER values!');
		});
		return ret;
	};

	jLive.array_intersect = function (array1, array2) {
		if ('object' !== jLive.checkType(array1) && jLive.checkType(array1) !== 'array')
			jLive.error('Warning: array_intersect(): Argument #1 is not an array');
		if ('object' !== jLive.checkType(array2) && jLive.checkType(array2) !== 'array')
			jLive.error('Warning: array_intersect(): Argument #2 is not an array');
		var ret = {};
		jLive.foreach(array1, function (i, v) {
			if (jLive.in_array(v, array2))
				ret[i] = v;
		});
		return ret;
	};

	jLive.array_keys = function (input, search_value, strict) {
		if ('object' !== jLive.checkType(input) && jLive.checkType(input) !== 'array')
			jLive.error('Warning: array_keys(): expects parameter 1 to be array');
		if (undefined == search_value)
			search_value = false;
		if (undefined == strict)
			strict = false;
		var ret = [];
		if (search_value) {
			jLive.array_filter(input, function (val, i) {
				if (strict) {
					if (val === search_value) {
						ret.push(i);
						return true
					}
				} else {
					if (val == search_value) {
						ret.push(i);
						return true
					}
				}
			});
		} else {
			jLive.foreach(input, function (i, v) {
				ret.push(i);
			});
		}
		return ret;
	}

	// option g isn't include in_array within PHP, i just added
	jLive.in_array = function (needle, haystack, strict, g) {
		var i;
		if (undefined == haystack)
			jLive.error('Warning: in_array() expects at least 2 parameters, 1 given');
		if (undefined == g)
			g = false;
		if (undefined == strict)
			strict = false;
		if (haystack) {
			for (i in haystack) {
				if (g && (jLive.checkType(haystack[i]) == 'object' || jLive.checkType(haystack[i]) == 'array')) {
					if (jLive.in_array(needle, haystack[i], strict, g))
						return true;
				} else {

					if (strict) {
						if (haystack[i] === needle)
							return true;
					} else {
						if (haystack[i] == needle)
							return true;
					}

				}
			}
		}

		return false;
	};

	/*
	 * ! return un objet;
	 */
	jLive.array_merge = function () {
		var first = {},
			index = 0;
		jLive.foreach(Array.prototype.slice.call(arguments), function (iarg, varg) {
			var t = jLive.checkType(varg);
			if ('object' !== t && t !== 'array')
				jLive.error('Warning: array_merge(): Argument #' + parseInt(iarg + 1) + ' is not an array');
			jLive.foreach(varg, function (i, v) {
				if (t == 'array') {
					first[index] = v;
					index++;
				} else
					first[i] = v;
			});
		});
		return first;
	};

	// option g ne fait pas partie de array_key_exists dans PHP, c'est un plus
	// que j'ai ajouter
	jLive.array_key_exists = function (key, search, g) {
		if ('number' !== jLive.checkType(key) && jLive.checkType(key) !== 'string')
			jLive.error('Warning: array_key_exists(): The first argument should be either a string or an integer');
		if ('object' !== jLive.checkType(search) && jLive.checkType(search) !== 'array')
			jLive.error('Warning: array_key_exists() expects parameter 2 to be array, ' + jLive.checkType(search) + ' given');
		if (undefined == g)
			g = false;
		var ret = false;
		jLive.foreach(search, function (i, val) {
			if (g && (jLive.checkType(val) == 'object' || jLive.checkType(val) == 'array')) {
				if (jLive.array_key_exists(key, val, g))
					return ret = true;
			} else {
				if (i === key)
					return ret = true;
			}
		});
		return ret;
	};

	jLive.array_map = function (callback, array) {
		var t = jLive.checkType(array);
		if ('object' !== t && t !== 'array')
			jLive.error('Warning: array_map() expects parameter 1 to be array, ' + t + ' given');
		if (jLive.checkType(callback) !== 'function')
			jLive.error('Warning: array_map() expects parameter 2 to be a valid callback, function not found or invalid function name');
		var value,
			ret = [];
		jLive.foreach(array, function (i, val) {
			value = callback(val);
			if (value != null) {
				ret[i] = value;
			}
		});
		return ret;
	}

	jLive.array_pad = function (input, pad_size, pad_value) {
		if (undefined == input || undefined == pad_size || undefined == pad_value)
			jLive.error('Warning: array_pad() expects exactly 3 parameters');
		if (jLive.checkType(pad_size) !== 'number')
			jLive.error('Warning: array_pad() expects parameter 2 to be long, ' + jLive.checkType(pad_size) + ' given');
		if (jLive.checkType(input) !== 'array')
			jLive.error('Warning: array_pad() expects parameter 1 to be array, ' + jLive.checkType(input) + ' given');
		var i = input.length;
		for (; i < jLive.abs(pad_size); i++) {
			if (pad_size < 0)
				input.unshift(pad_value);
			else
				input.push(pad_value);
		}
		return input;
	};

	// ne supportera pas "preserve_keys";
	jLive.array_reverse = function (array) {
		if (undefined == array)
			jLive.error('Warning: array_reverse() expects at least 1 parameter, 0 given');
		var t = jLive.checkType(array);
		if (t !== 'array')
			jLive.error('Warning: array_reverse() expects parameter 1 to be array, ' + t + ' given');
		return array.reverse();
	};

	jLive.array_reduce = function (input, func, initial) {
		if (undefined == func || undefined == input)
			jLive.error('Warning: array_reduce() expects at least 2 parameters');
		var t = jLive.checkType(input);
		if ('object' !== t && t !== 'array')
			jLive.error('Warning: array_reduce() expects parameter 1 to be array, ' + t + ' given');
		if (jLive.checkType(func) !== 'function')
			jLive.error('Warning: array_reduce() expects parameter 2 to be a valid callback, function not found or invalid function name');
		if (undefined == initial)
			initial = null;
		var ret = initial;
		jLive.foreach(input, function (i, val) {
			ret = func(ret, val);
		});
		return ret;
	};

	jLive.array_sum = function (array) {
		if (undefined == array)
			jLive.error('Warning: array_sum() expects exactly 1 parameter, 0 given');
		var t = jLive.checkType(array);
		if ('object' !== t && t !== 'array')
			jLive.error('Warning: array_sum() expects parameter 1 to be array, ' + t + ' given');
		return jLive.array_reduce(array, function (a, b) {
			b = parseFloat(b);
			if (isNaN(b))
				b = 0;
			return a += b;
		}, 0);
	};

	jLive.array_change_key_case = function (array, _case) {
		if (undefined == array)
			jLive.error('Warning: array_sum() expects exactly 1 parameter, 0 given');
		var t = jLive.checkType(array),
			array2 = array;
		if ('object' !== t && t !== 'array')
			jLive.error('Warning: array_sum() expects parameter 1 to be array, ' + t + ' given');
		_case = _case || 0;
		jLive.array_walk(array = jLive.array_keys(array), function (val) {
			return (_case == 0) ? val.toLowerCase() : val.toUpperCase();
		});

		return jLive.array_combine(array, array2);
	};

	jLive.array_product = function (array) {
		if (undefined == array)
			jLive.error('Warning: array_product() expects exactly 1 parameter, 0 given');
		var t = jLive.checkType(array);
		if ('object' !== t && t !== 'array')
			jLive.error('Warning: array_product() expects parameter 1 to be array, ' + t + ' given');
		return jLive.array_reduce(array, function (a, b) {
			b = parseFloat(b);
			if (isNaN(b))
				b = 0;
			return a *= b;
		}, 1);
	};

	// ne supportera pas "preserve_keys";
	jLive.array_slice = function (array, offset, length) {
		if (undefined == offset)
			jLive.error('Warning: array_slice() expects at least 2 parameters, 1 given');
		var t = jLive.checkType(array);
		if ('object' !== t && t !== 'array')
			jLive.error('Warning: array_slice() expects parameter 1 to be array, ' + t + ' given');
		return array.slice(offset, length);
	};

	jLive.array_push = function () {
		var args = Array.prototype.slice.call(arguments),
			t = jLive.checkType(args[0]);
		if (t !== 'array')
			jLive.error('Warning: array_push() expects parameter 1 to be array, ' + t + ' given');
		if (args.length < 2)
			jLive.error('Warning: array_push() expects at least 2 parameters, 1 given');
		jLive.foreach(args, function (i, val) {
			if (i > 0)
				args[0].push(val);
		});
		return args[0].length;
	};

	jLive.array_unshift = function () {
		var args = Array.prototype.slice.call(arguments),
			t = jLive.checkType(args[0]);
		if (t !== 'array')
			jLive.error('Warning: array_unshift() expects parameter 1 to be array, ' + t + ' given');
		if (args.length < 2)
			jLive.error('Warning: array_unshift() expects at least 2 parameters, 1 given');
		jLive.foreach(jLive.array_reverse(args), function (i, val) {
			if (i < args.length - 1)
				args[args.length - 1].unshift(val);
		});
		return args[args.length - 1].length;
	};

	jLive.array_shift = function (array) {
		var t = jLive.checkType(array),
			ret = array[0];
		if (t !== 'array')
			jLive.error('Warning: array_shift() expects parameter 1 to be array, ' + t + ' given');
		array.shift();
		return ret;
	};

	jLive.array_pop = function (array) {
		var t = jLive.checkType(array),
			ret = array[array.length - 1];
		if (t !== 'array')
			jLive.error('Warning: array_pop() expects parameter 1 to be array, ' + t + ' given');
		array.pop();
		return ret;
	};

	jLive.array_splice = function (array, offset, length, replacement) {
		if (undefined == offset)
			jLive.error('Warning: array_splice() expects at least 2 parameters, 1 given');
		if (jLive.checkType(offset) !== 'number')
			jLive.error('Warning: array_splice() expects parameter 2 to be long, ' + jLive.checkType(offset) + ' given');
		if (undefined == length)
			length = array.length;
		if (jLive.checkType(length) !== 'number')
			jLive.error('Warning: array_splice() expects parameter 3 to be long, ' + jLive.checkType(length) + ' given');
		var t = jLive.checkType(array),
			ret = [],
			ret2 = [],
			suppElem = [],
			arrayCop = jLive.arrayClone(array),
			i;
		jLive.array_clear(array);
		offset = (jLive.abs(offset) > arrayCop.length) ? arrayCop.length : offset;
		if (offset < 0) {
			for (i = 0; i < arrayCop.length - jLive.abs(offset); i++) {
				array.push(arrayCop[i]);
			}
		} else {
			for (i = 0; i < offset; i++) {
				array.push(arrayCop[i]);
			}
		}
		if (length < 0) {
			if (offset < 0) {
				for (i = array.length; i < arrayCop.length; i++) {
					ret.push(arrayCop[i]);
				}
			} else {
				for (i = offset; i < arrayCop.length; i++) {
					ret.push(arrayCop[i]);
				}
			}
			var lengthRet = (jLive.abs(length) > ret.length) ? 0 : ret.length - jLive.abs(length);
		} else {
			for (i = array.length; i < arrayCop.length; i++) {
				ret.push(arrayCop[i]);
			}
			var lengthRet = (jLive.abs(length) > ret.length) ? ret.length : jLive.abs(length);
		}

		for (i = lengthRet; i < ret.length; i++) {
			ret2.push(ret[i]);
		}

		// moment ideal pour recuperer les elements supprimes
		for (i = offset; i < arrayCop.length - ret2.length; i++) {
			suppElem.push(arrayCop[i]);
		}

		if (undefined !== replacement) {
			if (jLive.checkType(replacement) !== 'array')
				array.push(replacement);
			else {
				jLive.foreach(replacement, function (i, val) {
					array.push(val);
				});
			}
		}
		for (i = 0; i < ret2.length; i++) {
			array.push(ret2[i]);
		}
		return suppElem;
	};

	// ne supporte pas sort_flags, mal compris dans PHP.
	jLive.array_unique = function (array, sort_flags) {
		var t = jLive.checkType(array),
			ret = {};
		if (t !== 'array' && t !== 'object')
			jLive.error('Warning: array_unique() expects parameter 1 to be array, ' + t + ' given');

		var array2 = (t == 'array') ? jLive.arrayToObject(array) : array;

		jLive.foreach(array2, function (i, v) {
			if (!jLive.in_array(v, ret))
				ret[i] = v;
		});
		return (t == 'array') ? jLive.objectToArray(ret) : ret;
	};

	jLive.array_values = function (input) {
		var t = jLive.checkType(input),
			ret = [];
		if (t !== 'array' && t !== 'object')
			jLive.error('Warning: array_values() expects parameter 1 to be array, ' + t + ' given');
		jLive.foreach(input, function (i, v) {
			ret.push(v);
		});
		return ret;
	};

	jLive.array_rand = function (input, num_req) {
		if (undefined == num_req)
			num_req = 1;
		var t = jLive.checkType(input),
			t2 = jLive.checkType(num_req);
		if (t !== 'array')
			jLive.error('Warning: array_rand() expects parameter 1 to be array, ' + t + ' given');
		if (t2 !== 'number')
			jLive.error('Warning: array_rand() expects parameter 2 to be long, ' + t2 + ' given');
		if (input.length < num_req)
			jLive.error('Warning: array_rand(): Second argument has to be between 1 and the number of elements in the array');
		var t = jLive.checkType(input),
			ret = [],
			i = 0,
			res;
		for (; i < num_req; i++) {
			do {
				res = jLive.substr(jLive.settype(Math.random(), 'string'), 3, 1);
			} while ((res > input.length - 1) || jLive.in_array(res, ret));
			ret.push(res);
		}
		return ret;
	};

	jLive.count = function ($var, mode) {

		if (undefined === $var)
			return jLive.error('Warning: count() expects at least 1 parameter, 0 given');
		var typVar = jLive.checkType($var);
		if (typVar !== 'array' && typVar !== 'object' && typVar !== 'nodelist')
			return 1;
		if (undefined == mode)
			mode = COUNT_NORMAL;
		if (!jLive.defined(mode))
			return jLive.error('Notice: Use of undefined constant ' + mode);
		var cpt_count = 0;

		if ((typVar == 'array' || typVar == 'nodelist') && mode == COUNT_NORMAL) {
			return $var.length;
		}

		jLive.foreach($var, function (i, val) {
			if (mode !== COUNT_NORMAL && ((jLive.checkType(val) == 'array') || (jLive.checkType(val) == 'object'))) {
				cpt_count++;
				cpt_count += jLive.count(val, COUNT_RECURSIVE);
			} else
				cpt_count++;
		});
		return cpt_count;
	};

	jLive.fn.count = function () {

		// console.log(this.el);
		// console.log(this.el.length);

		return jLive.count(this.el);
	};

	// Pour directement modifiés dans le tableau, funcname doit se terminer par
	// un return
	jLive.array_walk = function (array, funcname, userdata) { // en test
		var value,
			t = jLive.checkType(array);
		if (t !== 'array' && t !== 'object')
			jLive.error('Warning: array_walk() expects parameter 1 to be array, ' + t + ' given');
		if (jLive.checkType(funcname) !== 'function')
			jLive.error('Warning: array_walk() expects parameter 2 to be a valid callback, function not found or invalid function name');
		jLive.foreach(array, function (i, val) {
			value = (undefined == userdata) ? funcname(val, i) : funcname(val, i, userdata);
			if (value != null) {
				array[i] = value;
			};
		});
	};

	jLive.sort = function (array, sort_flags) { // encoursb

		if (undefined == sort_flags)
			sort_flags = 'SORT_REGULAR';
		var value = jLive.array_values(array),
			sorter_flags = sorter(sort_flags);
		// alert(sorter_flags);
		value.sort(sorter_flags);

		return value;
	};

	function sorter(sort_flags) {
		// alert(sort_flags);
		switch (sort_flags) {
			case 'SORT_STRING':
				// compare items as strings
				return sorter = function (a, b) {
					return jLive.strnatcmp(a, b);
				};
				break;
			case 'SORT_LOCALE_STRING':
				// compare items as strings, based on the current locale
				return function (a, b) {
					a = jLive.settype(a, 'string');
					return a.localeCompare(b);
				};
				break;
			case 'SORT_NUMERIC':
				// compare items numerically
				return function (a, b) {
					return (a - b);
				};
				break;
			case 'SORT_REGULAR':
			// compare items normally (don't change types)
			default:
				return sorter = function (a, b) {
					return jLive.strcmp(a, b);
				};
				break;
		}
		n
	}

	jLive.asort = function (array, sort_flags) { // en cours
		var key = [],
			value = [],
			i = 0,
			ret = {},
			arrayCopie = jLive.arrayClone(array);
		jLive.foreach(array, function (ii, val) {
			key[i] = ii;
			value[i] = val;
			i++;
		});

		value = value.sort(sort_flags);
		return value;
	};

	jLive.array_merge_recursive = function (array1, array2) {
		var t1 = jLive.checkType(array1),
			t2 = jLive.checkType(array2);
		if ('object' !== t1 && t1 !== 'array')
			jLive.error('Warning: array_merge_recursive(): Argument #1 is not an array');
		if ('object' !== t2 && t2 !== 'array')
			jLive.error('Warning: array_merge_recursive(): Argument #2 is not an array');
		var key = '',
			array1Len = jLive.count(array1) - 1;
		for (key in array2) {
			if (key in array1) {
				if (typeof array1[key] === 'object' && typeof array2[key] === 'object') {
					array1[key] = arrayMergeLike(array1[key], array2[key]);
				} else
					array1[array1Len] = array2[key];
			} else
				array1[key] = array2[key];
		}
		return array1;
	};

	jLive.array_search = function (needle, haystack, strict) {
		if ('object' !== jLive.checkType(haystack) && jLive.checkType(haystack) !== 'array')
			jLive.error('Warning: array_search(): expects parameter 2 to be array');
		if (undefined == needle)
			needle = false;
		if (undefined == strict)
			strict = false;
		return jLive.array_keys(haystack, needle, strict)[0];
	}

	jLive.array_fill = function (start_index, num, value) {
		var ret = {},
			i = 0;
		if (arguments.length < 3)
			jLive.error('Warning: array_fill() expects exactly 3 parameters, ' + arguments.length + ' given');
		if (num < 1)
			jLive.error('Warning: array_fill(): Number of elements must be positive');
		if (jLive.checkType(start_index) !== 'number')
			return jLive.error('Warning: array_fill() expects parameter 1 to be long, ' + jLive.checkType(start_index) + ' given');
		if (jLive.checkType(num) !== 'number')
			return jLive.error('Warning: array_fill() expects parameter 2 to be long, ' + jLive.checkType(num) + ' given');
		if (start_index < 0) {
			ret[start_index] = value;
			num--;
			start_index = 0;
		}
		for (; i < num; i++) {
			var index = start_index + i;
			ret[index] = value;
		}
		return ret;
	}

	jLive.range = function (start, limit, step) {
		if (undefined == limit)
			jLive.error('Warning: range() expects at least 2 parameters, 1 given');
		if (undefined == step)
			step = 1;
		var startTyp = jLive.checkType(start),
			limitTyp = jLive.checkType(limit),
			sl_isString = ('string' == startTyp && !isNumberInString(start)) && ('string' == limitTyp && !isNumberInString(limit));

		if ((startTyp == 'string' && !isNumberInString(start)) && isNumberInString(limit)) {
			start = 0;
		} else if (isNumberInString(start) && ('string' == limitTyp && !isNumberInString(limit))) {
			limit = 0;
		}

		if (sl_isString) {
			start = jLive.ord(start);
			limit = jLive.ord(limit);
		} else {
			start = parseFloat(start);
			limit = parseFloat(limit);
		}
		var ret = [],
			i = start;
		if (start > limit) {
			for (; i >= limit; i -= step) {
				if (sl_isString)
					ret.push(jLive.chr(i));
				else
					ret.push(i);
			}
		} else {
			for (; i <= limit; i += step) {
				if (sl_isString)
					ret.push(jLive.chr(i));
				else
					ret.push(i);
			}
		}
		return ret;
	}

	jLive.shuffle = function (array) {
		if (jLive.checkType(array) !== 'array')
			jLive.error('Warning: shuffle() expects parameter 1 to be array, ' + jLive.checkType(array) + ' given');
		var arr = [],
			arrtest = [],
			j = 0,
			index,
			keyList = [];
		jLive.foreach(jLive.array_values(array), function (i, val) {
			do {
				index = jLive.rand(0, array.length * 2);
			} while (jLive.in_array(index, keyList));
			keyList.push(index);
			arr[index] = val;
		});
		jLive.foreach(arr, function (i, val) {
			if (undefined !== val) {
				array[j] = val;
				arrtest[j] = j;
				j++;
			}
		});
		return arrtest.length == array.length;
	}

	jLive.foreach = function (obj, callback, args) {
		if (!obj)
			return;
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike(obj);
		if (args) {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.apply(obj[i], args);
					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					value = callback.apply(obj[i], args);
					if (value === false) {
						break;
					}
				}
			}

		} else {
			if (isArray) {
				for (; i < length; i++) {
					value = callback.call(obj[i], i, obj[i]);
					if (value === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					value = callback.call(obj[i], i, obj[i]);
					if (value === false) {
						break;
					}
				}
			}
		}
		return obj;
	};

	// Les paramètres ne peuvent être que de variables sauf si c un tableau de
	// chaînes
	jLive.compact = function () {
		var ret = {};
		if (arguments.length == 0)
			jLive.error('Warning: compact() expects at least 1 parameter, 0 given');
		jLive.foreach(arguments, function (i, val) {

			if (jLive.checkType(val) == 'array' || jLive.checkType(val) == 'object') {
				jLive.foreach(val, function (ii, val2) {
					ret = jLive.array_merge(jLive.compact(val2), ret);
				});
			} else if (typeof window[val] !== 'undefined')
				ret[val] = window[val];

		});
		return ret;
	};

	/* !----------------JSON---------------------------------- */
	jLive.json_encode = function (value) { // array to json
		if ('object' !== jLive.checkType(value) && jLive.checkType(value) !== 'array')
			jLive.error('Warning: json_encode() expects parameter 1 to be array');
		return JSON.stringify(value);
	}

	jLive.json_decode = function (json, assoc) { // json to array
		assoc = assoc || false;

		if (!isJson(json))
			return null;

		var ret = JSON.parse(json);
		if (!assoc)
			return jLive.objectToArray(ret);
		else
			return ret;
	}

	/*
	 * !----------------fonctions de date et
	 * d'heures----------------------------------
	 */

	function stdTimezoneOffset() {
		var d = new Date();
		var jan = new Date(d.getFullYear(), 0, 1);
		var jul = new Date(d.getFullYear(), 6, 1);
		return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
	}

	function isDST() {
		return new Date().getTimezoneOffset() < stdTimezoneOffset();
	}

	function calcTime(utc, offset, is_dst) {

		is_dst = is_dst || isDST();
		offset = offset || stdTimezoneOffset();

		return utc + (- (60 * offset));
	}

	jLive.checkdate = function (month, day, year) {
		if (arguments.length < 3)
			return jLive.error('Warning: checkdate() expects exactly 3 parameters, ' + arguments.length + ' given');
		if (!isNumberInString(month) || !isNumberInString(day) || !isNumberInString(year))
			return jLive.error('Warning: checkdate() expects parameter 3 to be long');
		return month > 0 && month < 13 && year > 0 && year < 32768 && day > 0 && day <= (new Date(year, month, 0)).getDate();
	}

	jLive.date = function (format, timestamp) {

		if (timestamp && !isNumberInString(timestamp))
			jLive.error('Warning: date() expects parameter 2 to be number, ' + jLive.checkType(timestamp) + ' given');
		timestamp = (timestamp) ? new Date(timestamp * 1000) : new Date();
		return format.replace(/\\?(.?)/gi, function (f) {
			return dateFormat(f, timestamp);
		});
	}

	jLive.time = function () {
		return calcTime(Math.floor(new Date().getTime() / 1000));
	}

	jLive.mktime = function (hour, minute, second, month, day, year, is_dst) {
		is_dst = is_dst || isDST();
		if (undefined == hour)
			hour = jLive.date("H");
		if (undefined == minute)
			minute = jLive.date("i");
		if (undefined == second)
			second = jLive.date("s");
		if (undefined == month)
			month = jLive.date("n");
		if (undefined == day)
			day = jLive.date("j");
		if (undefined == year)
			year = jLive.date("Y");
		if (arguments.length == 0)
			console.log('Strict standards: mktime(): You should be using the time() function instead');
		return calcTime(new Date(parseInt(year), parseInt(month - 1), parseInt(day), parseInt(hour), parseInt(minute), parseInt(second)).getTime() / 1000, false, is_dst);
	}

	jLive.getdate = function (timestamp) {
		var d = (timestamp) ? new Date(timestamp * 1000) : new Date(),
			w = d.getDay(),
			m = d.getMonth(),
			y = d.getFullYear(),
			ret = {};
		ret.seconds = d.getSeconds();
		ret.minutes = d.getMinutes();
		ret.hours = d.getHours();
		ret.mday = d.getDate();
		ret.wday = w;
		ret.mon = m + 1;
		ret.year = y;
		ret.yday = Math.floor((d - (new Date(y, 0, 1))) / 86400000);
		ret.weekday = dateFormat('txt_day', 0)[w] + 'day';
		ret.month = dateFormat('txt_month', 0)[m];
		ret['0'] = parseInt(d.getTime() / 1000, 10);
		return ret;
	}

	jLive.microtime = function (get_as_float) {
		var now = (Date.now ? Date.now() : new Date().getTime()) / 1e3;
		if (get_as_float)
			return now;
		var s = now | 0;
		return (Math.round((now - s) * 1e3) / 1e3) + ' ' + s;
	}

	/*
	 * !----------------la gestion des
	 * fonctions----------------------------------
	 */
	jLive.func_get_args = function () { // bad
		return Array.prototype.slice.call(arguments);
	}

	/* !----------------function file---------------------------------- */

	jLive.file_get_contents = function (fileInput) { // en cours

		var reader = new FileReader();
		reader.onload = function () {
			alert('Contenu du fichier "' + fileInput.files[0].name + '":\n\n' + reader.result);
		};
		reader.readAsText(fileInput.files[0]);
		// return filename;

	};

	/* !----------------DOM---------------------------------- */
	jLive.getScript = function (src, callback, arg) {
		if ('undefined' == typeof src)
			return jLive.error('getScript() expects at least 1 parameters, 0 given');
		if (callback) {
			var newScriptTag = document.createElement('script'),
				firstScriptTag = document.getElementsByTagName('script')[0];
			newScriptTag.src = src;
			newScriptTag.async = false;
			// console.log(newScriptTag);
			newScriptTag.onload = newScriptTag.onreadystatechange = function () {
				if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
					callback.call(this, arg);
				};
			};
			firstScriptTag.parentNode.insertBefore(newScriptTag, firstScriptTag);
		}
	};

	jLive.getElement = function (selector, context) {

		if (selector == window)
			return 'window';

		var parserHTMLObj1 = new parserHTML(selector);

		if (parserHTMLObj1.isHTMLTag()) {
			return toNodeList(createElement(parserHTMLObj1, true));
		} else
			return getQuery(jLive.isJliveObject(selector) ? selector.el : selector, context);

	};

	jLive.attrib = function (obj, attrib, value, callback, prefix) {

		prefix = prefix || '';
		var
			el = obj.el,
			r = attrib,
			rTyp = jLive.checkType(attrib),
			vTyp = jLive.checkType(value);

		//console.log(el);
		//console.log(el);
		//console.log(attrib);

		callback = callback || function () { };

		// if (jLive.checkType(el) != 'nodelist')
		// el = toNodeList(el);

		if ((rTyp == 'array' || rTyp == 'string') && (undefined == value || vTyp == 'function')) { // set
			// to
			// getter
			var get = {},
				lastNodeName;
			if (rTyp == 'string') {
				r = [attrib];
			}

			jLive.foreach(el, function () {
				var hiEl = this,
					nodeName = indentifierElem(hiEl),
					hiElAttrList = {};
				lastNodeName = nodeName;

				//console.log(hiEl);

				jLive.foreach(r, function (i, prop) {
					hiElAttrList[prefix + prop] = hiEl.getAttribute(prefix + prop) || undefined;
				});
				get[nodeName] = hiElAttrList;
			});

			callback.call(this, get);
			return (rTyp == 'string') ? jLive.objectToArray(get[lastNodeName])[0] : get[lastNodeName];

		} else { // set to setter
			if (rTyp == 'string') {
				var r = {};
				r[attrib] = value;
			}


			jLive.foreach(r, function (prop, val) {
				jLive.foreach(el, function () {
					this.setAttribute(prefix + prop, val);
					callback.call(this, this);
				});
			});
		}
		return obj;
	};

	jLive.attrData = function (obj, attrib, value, callback) {

		return jLive.attrib(obj, attrib, value, callback, 'data-');

	};

	jLive.removeAttrib = function (obj, attrib, callback) {
		var el = obj.el || toNodeList(obj).el,
			r = attrib,
			rTyp = jLive.checkType(attrib);
		callback = callback || function () { };
		callback.call(this, el);
		if (rTyp == 'string') {
			r = [attrib];
		}
		jLive.foreach(r, function (i, prop) {
			jLive.foreach(el, function () {
				this.removeAttribute(prop);
			});
		});
		return obj;
	};

	jLive.style = function (obj, regle, value, callback) {
		// console.log(obj);
		// var el = obj.el ? toNodeList(obj.el) : toNodeList(obj),
		// var el = typeof obj.el == 'undefined' ? obj.el : toNodeList(obj).el,
		var
			el = obj.el,
			r = regle,
			rTyp = jLive.checkType(regle),
			vTyp = jLive.checkType(value);
		callback = callback || function () { };
		//console.log(obj);
		if ((rTyp == 'array' || rTyp == 'string') && (undefined == value || vTyp == 'function')) { // getter
			var get = {},
				lastNodeName;
			if (rTyp == 'string') {
				r = [regle];
			}

			// console.log(el);

			jLive.foreach(el, function () {
				var hiEl = this,
					nodeName = indentifierElem(hiEl),
					hiElAttrList = {};
				lastNodeName = nodeName;
				jLive.foreach(r, function (i, prop) {
					prop = stylePropRender(prop);
					hiElAttrList[prop] = (typeof hiEl.style[prop] == 'string') ? hiEl.style[prop] : 'none';
					if (jLive.empty(hiElAttrList[prop] + ''))
						hiElAttrList[prop] = (undefined !== hiEl.currentStyle) ? hiEl.currentStyle[prop] || 'none'
							: getComputedStyle(hiEl, null)[prop];
				});
				get[nodeName] = hiElAttrList;
			});
			callback.call(this, get);
			return (jLive.count(get) == 1) ? jLive.objectToArray(get[lastNodeName])[0] : get;

		} else { // setter

			if (rTyp == 'string') {
				var r = {};
				r[regle] = value;
			}
			jLive.foreach(r, function (prop, val) {

				jLive.foreach(el, function () {
					// var hiEl = this.el || this;
					prop = stylePropRender(prop);
					this.style[prop] = val;
				});
			});
		}
		return obj;
	};

	jLive.manipClass = function (obj, names, callback, typ) {

		if (jLive.checkType(names) != 'array')
			names = [names];
		// var el = typeof obj.el == 'undefined' ? obj.el : toNodeList(obj).el,
		var
			el = obj.el,
			namesCopy = names,
			elClass,
			elNewClass = "";
		names = jLive.implode(' ', names);
		callback = callback || function () { };

		//console.log(el);
		//console.log(typ);

		switch (typ) {
			case 'addClass':

				jLive.foreach(el, function (prop, val) {

					elClass = jLive(this).attr('class');
					if (elClass == undefined) {
						this.setAttribute('class', ' ');
						elClass = '';
					}
					callback.call(this, this); // can do something before modified


					if (this.classList) { //Modern HTML5 Techniques for changing classes
						//console.log(namesCopy);
						//this.className = 'ddddd';
						//console.log(namesCopy);
						namesCopy.forEach((v) => {
							$(this).addClass(v);
						});
					} else {
						// to be deprecated
						elNewClass = elClass + ' ' + names;
						this.className = jLive.trim(jLive.implode(' ', jLive.array_unique(elNewClass.split(/\s+/))));
					}
				});

				break;
			case 'removeClass':

				jLive.foreach(el, function (prop, val) {
					callback.call(this, this); // can do something before modified

					if (this.classList) { //Modern HTML5 Techniques for changing classes
						namesCopy.forEach((v) => {
							this.classList.remove(v);
						});

					} else {

						elClass = jLive(this).attr('class');
						if (elClass == undefined)
							elClass = ''
						//console.log(elClass);
						elClass = jLive.explode(' ', elClass);

						// class
						elNewClass = jLive.implode(',', jLive.array_map(function (elClassName) {
							if (!jLive.in_array(elClassName, namesCopy))
								return elClassName;
						}, elClass));
						this.className = elNewClass.length == 0 ? '' : jLive.trim(jLive.str_replace(',', ' ', elNewClass));
					}
				});

				break;
			case 'toggleClass':
				jLive.foreach(el, function (prop, val) {

					if (this.classList) { //Modern HTML5 Techniques for changing classes
						namesCopy.forEach((v) => {
							this.classList.toggle(v);
						});
					} else {
						elClass = jLive.trim(jLive(this).attr('class'));
						if (elClass == 'undefined')
							elClass = '';
						elClass = jLive.explode(' ', elClass);
						callback.call(this, this); // can do something before modified
						// class
						elNewClass = jLive.implode(',', jLive.array_map(function (elClassName) {
							if (!jLive.in_array(elClassName, namesCopy))
								return elClassName;
						}, elClass)) + ',' + jLive.array_map(function (elClassName) {
							if (!jLive.in_array(elClassName, elClass))
								return elClassName;
						}, namesCopy);

						this.className = jLive.trim(jLive.str_replace(',', ' ', elNewClass));
					}

				});
				break;
			case 'hasClass':

				if (el[0].classList) { //Modern HTML5 Techniques for changing classes
					return el[0].classList.contains(names);
				} else return new RegExp('(\\s|^)' + names + '(\\s|$)').test(el[0].className);
				break;
		}

		return obj;
	};

	// event
	jLive.trigger = function (obj, name, callback) {

		var el = 'nodelist' == jLive.checkType(obj.el) ? obj.el : toNodeList(obj.el),

			s = obj.selector.selector || obj.selector;

		if (name == 'ready') {
			jLive.foreach(el, function () {
				if (this && this.addEventListener) {
					_eventHolder(this, name, callback);
					document.addEventListener('DOMContentLoaded', callback, false);
				}
			});

			return;
		}

		if (s == window) {
			el = window;
			if (el.addEventListener) {
				el.addEventListener(name, callback, false);
			} else {
				var _this = this;
				if (name == 'scroll')
					el.onscroll = function () {
						callback.call(_this, window.event)
					};
				else
					el.attachEvent('on' + name, function () {
						callback.call(_this, window.event)
					});
			}
		} else {
			jLive.foreach(el, function () {
				if (this.addEventListener) {
					_eventHolder(this, name, callback);
					this.addEventListener(name, callback, false);
				} else {
					var _this = this;
					_eventHolder(this, name, function () {
						callback.call(_this, window.event)
					}); // not tested on IE.
					this.attachEvent('on' + name, function () {
						callback.call(_this, window.event)
					});
				}

			});
		}
		return this;
	}

	function isJson(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

	jLive.hasEvent_ = function (evt, fct, obj) {
		var el = obj.el[0];
		fct = fct || false;
		evt = evt || false;
		if (!el.eventHolder) {
			return false;
		} else {
			for (var i = 0; i < el.eventHolder.length; i++) {
				if (fct) {
					if (el.eventHolder[i][0] == evt && String(el.eventHolder[i][1]) == String(fct)) {
						return true;
					}
				} else if (evt) {

					if (el.eventHolder[i][0] == evt) {
						return true;
					}
				}
			}
		}
		return false;
	}

	jLive.removeEvent_ = function (evt, fct, obj) {

		var el = obj.el;

		fct = fct || false;
		evt = evt || false;

		if (fct) {
			jLive.foreach(el, function () {
				if (document.detachEvent) {
					this.detachEvent("on" + evt, fct);
				} else {
					this.removeEventListener(evt, fct, false);
				}
			});
		} else if (evt) {
			jLive.foreach(el, function () {

				if (this.eventHolder) {
					for (var i = 0; i < this.eventHolder.length; i++) {
						if (this.eventHolder[i][0] == evt) {
							removeEvent(this, evt, this.eventHolder[i][1]);
							this.eventHolder.splice(i, 1);
							i--;
						}
					}

				}
			});
		} else {

			jLive.foreach(el, function () {

				if (this.eventHolder) {
					for (var i = 0; i < this.eventHolder.length; i++) {
						if (jLive.in_array(this.eventHolder[i][0], ("blur focus contextmenu load resize scroll unload click dblclick " +
							"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
							"change select submit keydown keypress keyup error").split(" "))) {
							removeEvent(this, this.eventHolder[i][0], this.eventHolder[i][1]);
							this.eventHolder.splice(i, 1);
							i--;
						}
					}

				}
			});

		}
		return obj;
	}

	function _eventHolder(el, name, fn) {
		if (!el.eventHolder)
			el.eventHolder = [];
		el.eventHolder[el.eventHolder.length] = new Array(name, fn);
	}

	function removeEvent(obj, type, fn) {
		if (obj.detachEvent) {
			obj.detachEvent('on' + type, obj[type + fn]);
			obj[type + fn] = null;
		} else {
			obj.removeEventListener(type, fn, false);
		}
	}

	function createElement(html, parserHTMLObj) {

		parserHTMLObj = parserHTMLObj || false;
		var htmlTag = parserHTMLObj ? html : new parserHTML(html),
			tagInfo = htmlTag.htmlTagInfo(),
			newEl = document.createElement(tagInfo.tagName),
			newElTxt = document.createTextNode(tagInfo.content),
			attr;

		if (tagInfo.attrList) {
			jLive.foreach(tagInfo.attrList, function () {
				attr = this.split('=');
				// console.log(attr);
				newEl.setAttribute(jLive.trim(attr[0]), jLive.str_replace('"', "", attr[1]));
			});
		}

		if (htmlTag.tagType == 'evenTag') {
			newEl.appendChild(newElTxt);
		}

		//console.log(newEl);

		return newEl;
	}



	jLive.elementInserting = function (html, obj, name) { // en test.......

		jLive.foreach(obj.el, function () {
			if ('append' == name) {
				this.innerHTML += html;
			} else if ('prepend' == name) {
				this.innerHTML = html + this.innerHTML;
			}
		});

		return obj;
	};

	jLive.domManipIns = function (html, obj, name) { // en cours

		var elem = obj.elTmp ? obj.elTmp[0] : obj.el[0], isHTag = true;

		if (jLive.checkType(html) == 'string') {
			var parserHTMLObj2 = new parserHTML(html),
				isHTag = parserHTMLObj2.isHTMLTag();
		}

		if (isHTag) { // tag has been created

			var newNode = jLive.checkType(html) == 'string' ? jLive.getElement(html) : html;
			// console.log(newNode);

			//console.log(obj.el);

			if (newNode.el) newNode = newNode.el[0] || newNode.el;

			if ('appendTo' == name) {

				newNode.appendChild(elem);

			} else if ('prependTo' == name) {
				newNode.insertBefore(elem, newNode.firstChild);
			}

			obj.elTmp = newNode;
			obj.el = toNodeList(elem);

		} else { // its a css selector

			var elClon,
				el;

			jLive.foreach(getQuery(html, null), function (k, v) {

				elClon = elem;
				el = this[0] || this;

				if ('insertBefore' == name) {

					var parent_ = el.parentNode;
					parent_.insertBefore(elClon, el);

				} else if ('appendTo' == name) {

					el.appendChild(elClon);

				} else if ('prependTo' == name)
					el.insertBefore(elClon, el.firstChild);
				else if ('insertAfter' == name) {

					var parent_ = el.parentNode;
					parent_.insertBefore(elClon, el.nextSibling);

				}

			});

		}

		return obj;
	};

	jLive.manipElementUtulitaire = function (obj, name, arg) {
		// var el = typeof obj.el == 'undefined' ? obj.el : toNodeList(obj).el;
		var el = obj.el;

		switch (name) {

			case 'clone':
				arg = arg || true;
				var elcl;
				jLive.foreach(el, function () {
					elcl = this.cloneNode(arg);
				});
				obj.el = toNodeList(elcl);
				return obj;

				break;
			case 'wrap':

				var temp = document.createElement('div'),
					parent = el[0].parentNode,
					insertWhere = el[0].previousSibling,
					target;

				temp.innerHTML = arg;
				target = temp.firstChild;

				// recherche la position du dernier enfant
				while (target.firstChild) {
					target = target.firstChild;
				}

				jLive.foreach(el, function (i, v) {
					target.appendChild(v);
				});

				// inserting the created-nodes either before the previousSibling of
				// the first
				// Node (if there is one), or before the firstChild of the parent:
				parent.insertBefore(temp.firstChild, (insertWhere ? insertWhere.nextSibling : parent.firstChild));

				obj.el = el;
				return obj;

				break;
			case 'hasParent':

				var p = el[0] && el[0].parentNode ? getParent(el[0], arg) : false;
				if (p) {
					obj.el = toNodeList(getParent(el[0], arg));
					return obj;
				} else
					return false;

				break;
			case 'parent':

				// console.log(el);
				if (el[0] && el[0].parentNode) {
					obj.el = toNodeList(el[0].parentNode);
					return obj;
				} else
					return false;

				break;
			case 'next':
				// console.log(el);
				if (el[0] && el[0].nextSibling) {
					obj.el = toNodeList(el[0].nextSibling);
					return obj;
				} else
					return false;

				break;
			case 'child':
				//	console.log(obj);

				if (el.length != 0) {
					var c = el[0].childNodes;
					if ('string' == jLive.checkType(arg) && !isNumberInString(arg)) {
						var listEl = [];
						jLive.foreach(c, function () {
							var fc = arg.substring(0, 1),
								lc = arg.substring(1);
							if (this.className && fc == '.' && new RegExp(lc).test(this.className))
								listEl.push(this);
							else if (this.className && fc == '#' && this.id == lc)
								listEl.push(this);
							else
								if (this.localName && this.localName.toLowerCase() == arg.toLowerCase())
									listEl.push(this);
						});

						obj.el = toNodeList(listEl);

					} else if (isNumberInString(arg)) {
						obj.el = toNodeList(c[parseInt(arg) - 1]);
					} else
						obj.el = toNodeList(c);

					return obj.el.length == 0 ? false : obj;
				} else
					return false;

				break;
			case 'nextElement':

				// console.log(obj);
				// console.log(el[0]);
				// console.log(el[0].nextSibling);

				var ne = el[0] && el[0].nextSibling ? getNextElementSibling(el[0], arg) : false;

				if (ne) {
					obj.el = toNodeList(getNextElementSibling(el[0], arg));
					return obj;
				} else
					return false;

				break;
			case 'previousElement':

				// console.log(obj);
				// console.log(el[0]);
				// console.log(el[0].nextSibling);

				var ne = el[0] && el[0].previousSibling ? getPreviousElementSibling(el[0], arg) : false;

				if (ne) {
					obj.el = toNodeList(getPreviousElementSibling(el[0], arg));
					return obj;
				} else
					return false;

				break;

			case 'find': // non fait
				// var child, df = document.createDocumentFragment();
				// df.appendChild(obj.el);
				// obj = obj.parent(arg);
				// child = obj.el.querySelectorAll(arg);

				// return obj.el.childNodes;

				break;

			case 'remove':
				console.log(obj);
				jLive.foreach(el, function () {
					this.parentNode.removeChild(this);
				});
				return obj;

				break;
			case 'width':
				return obj.style('width');

				break;
			case 'height':

				return obj.style('height');

				break;
		}

	}

	jLive.client = function (obj, name) {
		var el = obj.el,
			s = obj.selector.selector || obj.selector;
		if (s === window || s === 'body' || s === 'html') {
			var e = window,
				a = 'inner';
			name = jLive.substr(name, 6);
			if (!('innerWidth' in window)) {
				a = 'client';
				var B = document.body; // IE en mode 'quirks'
				var D = document.documentElement; // IE avec doctype
				e = (D.clientHeight) ? D : B;
			}
			return e[a + name];
		} else {
			var client = 0;
			jLive.foreach(el, function () {
				client = (name == 'clientHeight') ? this.clientHeight : this.clientWidth;
			});

			return client;
		}
	};

	jLive.offset = function (obj, toParent) {

		// toParent pour determiner en fonction du parent ou la page
		var top = 0,
			left = 0,
			el = obj.el[0] || obj.el;
		// console.log(obj.el);

		if (toParent) {

			do {
				top += el.offsetTop - el.scrollTop;
				left += el.offsetLeft - el.scrollLeft;
			} while (el = el.offsetParent);
		} else {
			top = el.offsetTop;
			left = el.offsetLeft;
		}

		return {
			Top: top,
			Left: left,
			Width: el.offsetWidth,
			Height: el.offsetHeight
		};
	};

	jLive.scrol = function (obj, name, pixel) {
		var el = obj.el,
			s = obj.selector.selector || obj.selector;
		// console.log(el);
		if (name == 'scrollHeight') {
			if (s === window || s === 'body' || s === 'html') {
				var D = document;
				return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight,
					D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
			} else {
				var scrol = 0;
				jLive.foreach(el, function () {
					scrol = this.scrollHeight;
				});

				return scrol;
			}

		} else if (name == 'scrollTop' || name == 'scrollLeft') {

			if (s === window || s === 'body' || s === 'html') {
				var B = document.body; // IE en mode 'quirks'
				var D = document.documentElement; // IE avec doctype
				D = (name == 'scrollTop') ? (D.clientHeight) ? D : B : (D && D.scrollLeft) ? D : B;

				if ('undefined' == typeof (pixel)) {
					if (name == 'scrollTop') {

						if ('pageYOffset' in window)
							return window.pageYOffset; // tous browsers sauf IE
						// inferieur #9
						else
							return D.scrollTop;

					} else {

						if ('pageXOffset' in window)
							return window.pageXOffset;
						else {
							var zoomFactor = GetZoomFactor();
							return Math.round(D.scrollLeft / zoomFactor);
						}

					}

				} else {
					if (name == 'scrollTop')
						D.scrollTop = pixel;
					else
						D.scrollLeft = pixel;
				}

			} else {
				if ('undefined' == typeof pixel) {
					var scrol = 0;
					jLive.foreach(el, function () {
						scrol = (name == 'scrollTop') ? this.scrollTop : this.scrollLeft;
					});

					return scrol;

				} else {
					jLive.foreach(el, function () {
						(name == 'scrollTop') ? this.scrollTop = pixel : this.scrollLeft = pixel;
					});
				}
			}

		}

		return obj;
	};

	// animation

	jLive.animation = function (obj, props, opts) {

		var optsTyp = jLive.checkType(opts);
		if ('object' !== optsTyp && optsTyp !== 'number')
			opts = 1000;
		var start = new Date,

			id = setInterval(function () {

				var timePassed = new Date - start,
					delta = (defaultDelta[opts.delta]) ? opts.delta : 'linear',
					easing = opts.easing || 'easeIn',
					done = opts.done || function () { },

					duration = opts.duration || opts,

					progress = timePassed / duration;
				if (progress > 1)
					progress = 1;

				delta = ('easeIn' != easing) ? defaultDelta[easing](progress, delta) : defaultDelta[delta](progress);
				// console.log(easing);

				jLive.foreach(props, function (prop, val) {
					var unit = "px";
					if ($j.in_array(prop, ['opacity']))
						unit = "";

					obj.style(prop, val * delta + unit);
				});
				if (opts.step)
					opts.step(obj, delta);

				if (progress == 1) {
					clearInterval(id);
					done.call(obj, obj);
				}

			}, opts.delay || 10);

		return obj;

	};

	jLive.showHidden = function (obj, name, disMode, effect) {
		// var el = 'nodelist' == jLive.checkType(obj.el) ? obj.el :
		// toNodeList(obj.el);
		var
			el = obj.el,
			disMode = disMode || 'block';

		// console.log(el);

		switch (name) {

			case 'show':

				jLive.foreach(el, function () {
					var dis = jLive.attrib(this, "data-jlive_lib_old_display") || disMode || 'block';
					// console.log(jLive.attrib(this,
					// "data-jlive_lib_old_display"));

					jLive.style(this, {
						"display": dis,
						'opacity': 0
					});
					jLive.removeAttrib(this, "data-jlive_lib_old_display");
					if (!effect) {
						jLive.style(this, {
							'opacity': 1
						});
					}
				});

				break;
			case 'hide':

				jLive.foreach(el, function () {

					if (jLive.attrib(this, "data-jlive_lib_old_display"))
						jLive.attrib(this, "data-jlive_lib_old_display", jLive.style(this, "display"));

					jLive.style(this, {
						'opacity': 1
					});
					if (!effect) {
						jLive.style(this, {
							'display': 'none',
							'opacity': 0
						});
					}
				});

				break;

			case 'toggle':

				var is_hidden;
				jLive.foreach(el, function () {
					// is_hidden = isHidden();
					if (isHidden(this)) {
						name = 'show';
						jLive.showHidden(obj, 'show', disMode, effect);
					} else {
						name = 'hide';
						jLive.showHidden(obj, 'hide', disMode, effect);
					}

				});

				break;

		}
		if (!effect) {
			return obj;
		} else
			return effectFx[effect](obj, name);
	}

	var effectFx = {
		fade: function (obj, mode) {
			jLive.animation(obj, {}, {

				delta: 'swing',
				duration: 1500,
				step: function (elem, delta) {
					elem.style('opacity', mode == 'show' ? 1 * delta : 1 - delta);
				},
				done: function (elem) {
					if (mode == 'hide') {
						elem.style('display', 'none');
					} else {
						// elem.style('display',
						// (elem.style('display').toLowerCase() != 'none') ?
						// elem.style('display').toLowerCase() :
						// 'inline-Block');
						elem.style('display', elem.attr('data-jlive_lib_old_display'));
					}
				}
			});
			return obj;
		}

	};

	/*
	 * ! formulaire
	 */

	jLive.formHandler = function (txt, obj, name) {

		/*if (!obj.el[0])
			obj.el = [obj.el];*/

		if (obj.el.length == 0) return;

		var els = obj.el,
			el = obj.el[0],
			elNodNam = el.nodeName.toLowerCase(),
			output = {};



		switch (name) {

			case 'value':


				if ('input' == elNodNam || 'textarea' == elNodNam) {

					if (txt || txt == '') {
						jLive.foreach(els, function () {
							if (!jLive.in_array(this.type.toLowerCase(), ['file', 'submit', 'reset']))
								this.value = txt;
						})
					} else {

						jLive.foreach(els, function () {
							if (!jLive.in_array(this.type.toLowerCase(), ['submit', 'reset'])) {

								if (this.type.toLowerCase() == 'file') {
									output[(el.id || el.name) || 0] = this.files.length == 1 ? this.files[0] : this.files;
								} else
									output[(this.name || this.id) || 0] = this.value;

							}
						});
					}

				} else if ('select' == elNodNam) {

					if (txt) {
						jLive.foreach(els, function () {
							this.options[this.selectedIndex].value = txt;
						})
					} else {

						let el = els[0] || els;
						//if (el.selectedIndex == undefined || !el.options[el.selectedIndex]) return;
						if (el.type == 'select-multiple') output[(el.id || el.name) || 0] = Array.from(el.querySelectorAll("option:checked"), e => e.value);
						else {
							if (el.selectedIndex < 0) return ' ';
							output[(el.id || el.name) || 0] = el.options[el.selectedIndex].value || el.options[el.selectedIndex].innerText;
						}
					}

				}

				break;
			case 'formValue':

				var elem = el.elements;
				for (const key in elem) {

					if (!isNumberInString(key) || jLive.array_key_exists(elem[key].name || elem[key].id || 0, output)) continue;

					const v = elem[key];
					if (jLive.checkType(elem[v.name]) == 'radionodelist') {
						output[v.name] = '';
						jLive.foreach(elem[v.name], function (ni, nv) {
							if (nv.checked)
								output[nv.name] = nv.value;
						});
					} else {

						if (v.type == 'select-multiple') {
							output[v.id || v.name] = Array.from(v.querySelectorAll("option:checked"), e => e.value);
						} else if (v.type == 'radio' || v.type == 'checkbox') {
							if (v.checked)
								output[(v.id || v.name) || 0] = v.value;
						} else if (v.type == 'file') {
							output[(v.id || v.name)] = v.files[0];
						} else {
							if (v.id.length != 0 || v.name.length != 0) output[v.id || v.name] = v.value;
						}

					}
				}

				break;
			case 'selected': // only for select HTML element

				if ('select' == elNodNam) {
					obj.el = getQuery(el.options[el.selectedIndex], null);
				} else
					jLive.error('Warning: selected function is only for select HTML element, ' + elNodNam.toUpperCase() + ' given');

				break;
			case 'checked':

				if (typeof txt != 'undefined' && txt != 'element') {
					jLive.foreach(els, function () {
						this.checked = txt;
					});
				} else {

					if (els.length == 1) {

						if (txt == 'element') {
							obj.el = toNodeList(els);

							return obj;
						} else
							return (el.checked) ? true : false;

					}

					for (var i = 0; i < els.length; i++) {
						if (els[i].checked) {
							if (txt == 'element') {
								obj.el = toNodeList(els[i]);

								return obj;
							} else
								return true;
						}
					}
					return false;
				}

				break;

			case 'disabled':

				if (typeof txt != 'undefined' && txt != 'element') {
					jLive.foreach(els, function () {
						this.disabled = txt;
					});
				} else {
					// return (el.disabled) ? true : false;
					if (els.length == 1)
						return (el.disabled) ? true : false;
					for (var i = 0; i < els.length; i++) {
						if (els[i].disabled) {
							if (txt == 'element') {
								obj.el = toNodeList(els[i]);
								return obj;
							} else
								return true;
						}
					}
					return false;
				}

				break;
			case 'readonly':

				if (typeof txt != 'undefined') {
					jLive.foreach(els, function () {
						this.readOnly = txt;
					});
				} else {
					return (el.readOnly) ? true : false;
				}
				break;
		}

		return (jLive.empty(output)) ? obj : (jLive.count(output) == 1 && name != 'formValue') ? output[(el.id || el.name) || 0] : output;
	};

	jLive.formCtrl = function (obj_, options_) {

		if (!obj_.el[0])
			return obj_;
		// console.log(obj_.el[0]);

		function formCtrl_(obj, options) {

			this.submitBtn = null;
			this.els = obj.el;
			this.el = obj.el[0];
			this.formElem;
			this.idForm = this.el.id;
			this.check = {};
			this.formElemCpt = 0;
			this.ajxCtrl = {};
			this.ajxCtrlOpt = {};
			var hi_ = this;

			options.preventDefault = ('undefined' == typeof options.preventDefault) ? true : options.preventDefault;
			options.onSuccess = options.onSuccess || function () { };
			options.onSubmit = options.onSubmit || function () { };
			options.onError = options.onError || function () { };
			options.onProccess = options.onProccess || function () { };
			options.beforeProccess = options.beforeProccess || function () { };
			options.beforeSubmit = options.beforeSubmit || function () { };
			options.event = options.event || ['input', 'blur'];
			options.rules = options.rules || {};
			options.style = options.style || {};

			//transforming rules defined on form
			if (jLive.count(options.rules) == 0) {

				options.rules = {};

				jLive.foreach(this.el.elements, function () {

					//setting id for elems when missing
					if (!this.id) {
						hi_.formElemCpt++;
						if (!jLive.in_array(this.type.toLowerCase(), ['submit', 'reset', 'fieldset', 'button']))
							this.id = this.name || (hi_.el.id + hi_.formElemCpt);
					}

					options.rules[this.id] = {};

					if ($j(this).attr('data-required')) options.rules[this.id].required = $j(this).attr('data-required');
					if ($j(this).attr('data-min-length')) options.rules[this.id].minLength = parseInt($j(this).attr('data-min-length'));
					if ($j(this).attr('data-max-length')) options.rules[this.id].maxLength = $j(this).attr('data-max-length');
					if ($j(this).attr('data-role')) options.rules[this.id].role = $j(this).attr('data-role');
					if ($j(this).attr('data-date-format')) options.rules[this.id].dateFormat = $j(this).attr('data-date-format');
					if ($j(this).attr('data-ajax')) options.rules[this.id].ajax = $j(this).attr('data-ajax');
					if ($j(this).attr('data-sync')) options.rules[this.id].sync = $j(this).attr('data-sync');
					if ($j(this).attr('data-type')) options.rules[this.id].type = $j(this).attr('data-type');
					if ($j(this).attr('data-range-set')) options.rules[this.id].rangeSet = $j(this).attr('data-range-set');
					if ($j(this).attr('data-pattern')) options.rules[this.id].pattern = $j(this).attr('data-pattern');
					if ($j(this).attr('data-value-equal')) options.rules[this.id].valueEqual = $j(this).attr('data-value-equal');
					if ($j(this).attr('data-allowed-file-type')) options.rules[this.id].allowedFileType = $j(this).attr('data-allowed-file-type');
					if ($j(this).attr('data-allowed-file-size')) options.rules[this.id].allowedFileSize = $j(this).attr('data-allowed-file-size');

				});
			}

			// handle form rules before
			jLive.foreach(options.rules, function (id, rules) {

				options.rules[id] = jLive.overwrite({
					required: "no",
					minLength: 2,
					maxLength: 255,
					role: null,
					dateFormat: 'dd-mm-yyyy,',
					ajax: false,
					sync: 0,
					type: 'alphanumeric',
					rangeSet: null,
					pattern: '.',
					valueEqual: null,
					allowedFileType: '*',
					allowedFileSize: 1,

				}, rules);
			});

			this.formTest = function () {
				jLive.foreach(this.els, function (i, elem) {

					if ('FORM' == elem.nodeName.toUpperCase()) {
						hi_.formElem = hi_.el.elements;

						jLive.foreach(hi_.formElem, function () {

							var hiElemForm = this;
							//let elemAttrId = elem.id;
							if (options.rules[this.id] != undefined && options.rules[this.id].sync) options.rules[this.id].sync = false;

							//getting the submit button
							if (this.type.toLowerCase() == 'submit') hi_.submitBtn = this;

							options.idForm = hi_.idForm;

							if (!jLive.in_array(this.type.toLowerCase(), ['submit', 'reset', 'fieldset', 'button'])) {

								hi_.check[this.id] = function (obj, options) {

									var ft = new formCtrl__(obj, options);
									return ft.test();

								};

								// setting up event
								if (jLive.in_array(this.type.toLowerCase(), ['password', 'text', 'file', 'textarea', 'number', 'email'])) {

									if (jLive.checkType(options.event) == 'array') {

										var hi = this;
										jLive.foreach(options.event, function () {

											if ((this == 'blur' || this == 'focus') && options.rules[hiElemForm.id].ajax)
												return; // avoid to execute ajax
											// on blur or focus

											hi['on' + this] = function () {
												// console.log();
												// console.log(hi_.idForm);
												var inputID = hi.id;

												// set
												// form
												// element
												// to
												// jLive
												// object
												var thisInpInObj = new jLive.fn.init('#' + hi_.idForm + ' #' + inputID);

												options.beforeProccess.call(obj, thisInpInObj, obj);
												var sCheck = hi_.check[hi.id](thisInpInObj, options);

												if (!sCheck.err) {
													options.onProccess.call(obj, false, thisInpInObj, obj, 'none', options.rules);
												} else
													options.onProccess.call(obj, true, thisInpInObj, obj, sCheck.errType, options.rules);

											}

										});

									} else {
										this['on' + options.event] = function () {
											var inputID = this.id;
											var thisInpInObj = new jLive.fn.init('#' + hi_.idForm + ' #' + inputID); // set
											// form
											// element
											// to
											// jLive
											// object
											// var thisInpInObj = new
											// jLive.fn.init(this); //set form
											// element to jLive object
											options.beforeProccess.call(obj, thisInpInObj, obj);
											var sCheck = hi_.check[hi.id](thisInpInObj, options);
											if (!sCheck) {
												options.onProccess.call(obj, false, thisInpInObj, obj, 'none', options.rules);
											} else
												options.onProccess.call(obj, true, thisInpInObj, obj, sCheck.errType, options.rules);
										}
									}
								}
							}

							if ('SELECT' == this.nodeName.toUpperCase()) {
								this['onchange'] = function () {
									// var thisInpInObj = new
									// jLive.fn.init(this); //set form element
									// to jLive object
									var inputID = this.id;
									var thisInpInObj = new jLive.fn.init('#' + hi_.idForm + ' #' + inputID); // set
									// form
									// element
									// to
									// jLive
									// object
									options.beforeProccess.call(obj, thisInpInObj, obj);
									var sCheck = hi_.check[inputID](thisInpInObj, options);
									if (!sCheck) {
										options.onProccess.call(obj, false, thisInpInObj, obj, 'none', options.rules);
									} else
										options.onProccess.call(obj, true, thisInpInObj, obj, sCheck.errType, options.rules);
								}
							}

						});

						this.onsubmit = function (e) {

							if (hi_.submitBtn) hi_.submitBtn.disabled = true;

							// options.beforeSubmit.call(hi_,this, options.rules);
							options.onSubmit.call(hi_, this);

							var result = true,
								sCheck,
								errorList = {};
							for (var i in hi_.check) {

								var thisInpInObj = new jLive.fn.init('#' + hi_.idForm + ' #' + i);

								if (thisInpInObj.el.length == 0) continue;

								// force
								// input
								// with
								// ajax
								// to
								// sync
								if (options.rules[i].ajax)
									options.rules[i].sync = true;

								options.beforeProccess.call(obj, thisInpInObj, obj);
								sCheck = hi_.check[i](thisInpInObj, options);
								result = !sCheck.err && result;
								if (sCheck.err)
									errorList[thisInpInObj.attr('id')] = sCheck.errType;
								if (typeof thisInpInObj.el[0] != 'undefined' && jLive.in_array(thisInpInObj.el[0].type.toLowerCase(), ['password', 'text', 'file', 'textarea', 'number', 'email']))
									options.onProccess.call(obj, !sCheck, thisInpInObj, obj, sCheck.errType || '', hi_.submitBtn);

								//console.log(errorList);
							}

							if (result) {
								if (hi_.submitBtn) hi_.submitBtn.disabled = false;
								options.onSuccess.call(this, this, hi_.submitBtn);
								if (!options.preventDefault)
									return true;
							} else {

								options.onError.call(this, this, errorList, hi_.submitBtn);
								if (hi_.submitBtn) hi_.submitBtn.disabled = false;
							}
							jLive.preventDefault(e);
						}

					} else {

						hi_.check[this.id] = function (obj, options) {
							var ft = new formCtrl__(obj, options);
							return ft.test();
						};

						// Mise en place des événements
						var hi = this;
						if (jLive.checkType(options.event) != 'array')
							options.event = [options.event];
						jLive.foreach(options.event, function () {

							hi['on' + this] = function () {
								var thisInpInObj = new jLive.fn.init('#' + hi_.idForm + ' #' + hi.id);
								options.beforeProccess.call(hi, thisInpInObj, obj);
								if (hi_.check[hi.id](thisInpInObj, options)) {
									options.onProccess.call(obj, false, thisInpInObj, obj, thisInpInObj.attr('data-error-type'));
									options.onSuccess.call(this, hi);
								} else {
									options.onProccess.call(hi, true, thisInpInObj, obj, thisInpInObj.attr('data-error-type'));
									options.onError.call(this, thisInpInObj);
								}
							}
						});
					}

				});
			};
		}

		var f = new formCtrl_(obj_, options_ || {});
		f.formTest();

	};

	function formCtrl__(obj, options) {

		this.PID = options.idForm + obj.attr('id');
		this.id = obj.attr('id');
		this.v = obj.attr('type') == 'file' ? obj.value() : jLive.trimAll(obj.value());
		this.vLength = this.v.length;
		this.res = null;

		this.allowedFileType = options.rules[this.id].allowedFileType;
		this.allowedFileSize = options.rules[this.id].allowedFileSize;
		this.pattern = options.rules[this.id].pattern;
		this.valueEqual = options.rules[this.id].valueEqual;
		this.dataRole = options.rules[this.id].role;
		this.dateFormat = options.rules[this.id].dateFormat;
		this.minLength = options.rules[this.id].minLength;
		this.maxLength = options.rules[this.id].maxLength;
		this.dataReq = options.rules[this.id].required;
		this.dataTyp = options.rules[this.id].type;
		this.dataAjxCtrl = options.rules[this.id].ajax;
		this.sync = options.rules[this.id].sync == 1 ? true : false;

		this.styleError = options.style.error || '#ff7270';
		this.styleSuccess = options.style.success || '#ccc';
		this.styleErrorIsClass = !/#\w/.test(this.styleError);
		this.styleSuccessIsClass = !/#\w/.test(this.styleSuccess);

		this.ajaCtrl = function () {
			if (this.dataAjxCtrl == 'true') {

				if (typeof this.PID == 'object') {
					if (this.PID.readyState < 4)
						this.PID.abort();
				}

				if (undefined == options.ajaxProccess)
					jLive.error('ajax control require "ajaxProccess" option');
				options.ajaxProccess.success = options.ajaxProccess.success || function () { };
				options.ajaxProccess.beforeSend = options.ajaxProccess.beforeSend || function () { };
				options.ajaxProccess.error = options.ajaxProccess.error || function () { };

				var init = options.ajaxProccess.init.call(options.ajaxProccess, obj),
					controlFormat = init.dataType ? init.dataType : 'text';

				if (this.sync) {
					// console.log('syn');
					this.PID = new XMLHttpRequest();
					this.PID.open('GET', init.url + '&controlFormat=' + controlFormat, false);
					this.PID.send(null);

					this.PID.res = this.PID.responseText;
					this.PID.is_valid = this.PID.res == 0;

					if (controlFormat == 'xml')
						res = this.PID.responseXML;
					else if (controlFormat == 'json') {
						this.PID.res = JSON.parse(this.PID.responseText);
						// console.log(this.PID.res.cptJlive);
						this.PID.is_valid = this.PID.res.cptJlive == 0;
					}

					// console.log(controlFormat);

					if (this.PID.is_valid) {
						this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
						options.ajaxProccess.success.call(options.ajaxProccess, obj, this.PID.res);
						return { err: false };
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						options.ajaxProccess.error.call(options.ajaxProccess, obj, this.PID.res);
						return { err: true, errType: "dataExist" };
					}

				} else {
					// console.log('asyn');

					this.PID = jLive.ajax({

						dataType: init.dataType,
						url: init.url + '&controlFormat=' + controlFormat,
						beforeSend: function () {
							options.ajaxProccess.beforeSend.call(options.ajaxProccess, obj);
						},
						onSuccess: function (data) {
							// console.log(data);
							var is_valid = data == 0;
							if (controlFormat == 'xml')
								is_valid = data.responseXML;
							else if (controlFormat == 'json')
								is_valid = data.cptJlive == 0; // for
							// validate
							// data
							// returned
							// in ajax

							if (is_valid) {
								this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
								options.ajaxProccess.success.call(options.ajaxProccess, obj, data);
							} else {
								this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
								options.ajaxProccess.error.call(options.ajaxProccess, obj, data);
							}
						},
						onError: function (err) {
							alert(err.text);
						}

					});

				}
			}
		}

		this.isFileAllowedType = function (v, type) {
			type = Array.from(type.split(','), e => jLive.trimAll(e));
			if (v.length) {
				for (let index = 0; index < v.length; index++) {
					if (jLive.in_array(jLive.strrchr(v[index].name, '.'), type)) return true;
				}
			} else
				if (jLive.in_array(jLive.strrchr(v.name, '.'), type)) return true;

			return false;
		}


		this.isFileAllowedSize = function (v, s) {
			s = 1048576 * parseFloat(s);

			if (v.length) {
				for (let index = 0; index < v.length; index++) {
					if (v[index].size > s) return false
				}
			} else
				if (v.size > s) return false
			return true;
		}

		this.test = function () {

			//console.log(this.v.length);

			if (this.dataTyp == 'file' && this.dataRole !== 'email' && this.dataRole !== 'url' && this.dataRole !== 'date' && this.dataRole !== 'tel') {

				if (this.dataReq == 'yes') {
					if (this.v.length != 0 && jLive.checkType(this.v) == 'object') {
						if (this.allowedFileType) {
							if (!this.isFileAllowedType(this.v, this.allowedFileType)) {
								this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
								return { err: true, errType: "AllowedType" };
							}
						}
						if (this.allowedFileSize) {
							if (!this.isFileAllowedSize(this.v, this.allowedFileSize)) {
								this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
								return { err: true, errType: "AllowedSize" };
							}
						}
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "EmptyFile" };
					}
				}

				this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
				return { err: false, errType: "" };


			} else if (this.dataTyp == 'alphanumeric' && this.dataRole !== 'email' && this.dataRole !== 'url' && this.dataRole !== 'date' && this.dataRole !== 'tel') {

				if (this.dataReq == 'yes') {
					var pattern = new RegExp(this.pattern, 'i');

					if (this.vLength >= this.minLength && this.vLength <= this.maxLength) {
						if (pattern.test(this.v)) {
							this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
							if (this.dataAjxCtrl == 'true' && this.sync)
								return this.ajaCtrl();
							else
								this.ajaCtrl();
							return { err: false };
						} else {
							return { err: true, errType: "dataType" };
						}
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "dataLength" };
					}
				} else {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					return { err: false, errType: "" };
				}

			} else if (this.dataTyp == 'letternumeric' && (this.dataRole !== 'email' && this.dataRole !== 'url' && this.dataRole !== 'date' && this.dataRole !== 'tel')) {

				if (this.dataReq == 'yes') {
					if (this.vLength >= this.minLength && this.vLength <= this.maxLength) {
						if (/^[a-z0-9]+$/i.test(this.v)) {
							if (this.dataAjxCtrl == 'true' && this.sync)
								return this.ajaCtrl();
							else
								this.ajaCtrl();
							this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
							return { err: false, errType: "" };
						} else {
							this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
							return { err: true, errType: "dataType" };
						}
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "dataLength" };
					}
				} else {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					return { err: false, errType: "" };
				}

			} else if (this.dataTyp == 'range' && (this.dataRole !== 'email' && this.dataRole !== 'url' && this.dataRole !== 'date' && this.dataRole !== 'tel')) {

				if (!obj.attr('data-range-set'))
					jLive.error('Warning: range-set is required for field id: ' + obj.attr('id'));

				if (this.dataReq == 'yes') {

					var range = jLive.explode('-', obj.attr('data-range-set')),
						range1 = range[0],
						range2 = range[1],
						is_valid = false;
					if (2 != jLive.count(range))
						jLive.error('Warning: range-set "' + obj.attr('data-range-set') + '" is not a good format for field id: ' + obj.attr('id'));

					if (!isNumberInString(range1) || !isNumberInString(range2)) {

						range1 = jLive.ord(range1);
						range2 = jLive.ord(range2);
						if (range1 > range2)
							jLive.error('Warning: range-set "' + obj.attr('data-range') + '" min value is big than max value for field id: ' + obj.attr('id'));

						for (var i = 0; i < this.vLength; i++) {
							var valueNum = jLive.ord(this.v[i]);
							if (valueNum >= range1 && valueNum <= range2)
								is_valid = true;
							else {
								is_valid = false;
								break;
							}

						};

					} else {
						range1 = jLive.strstr(range1, '.') ? parseFloat(range1) : parseInt(range1);
						range2 = jLive.strstr(range2, '.') ? parseFloat(range2) : parseInt(range2);
						if (range1 > range2)
							jLive.error('Warning: data-range "' + obj.attr('data-range-set') + '" min value is big than max value for field id: ' + obj.attr('id'));

						if (this.v >= range1 && this.v <= range2)
							is_valid = true;
						else
							is_valid = false;
					}

					if (is_valid) {
						this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
						if (this.dataAjxCtrl == 'true' && this.sync)
							return this.ajaCtrl();
						else
							this.ajaCtrl();
						return { err: false };
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "dataRange" };
					}
				} else {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					return { err: false, errType: "" };
				}

			} else if ((this.dataTyp == 'int' || this.dataTyp == 'number') && (this.dataRole !== 'email' && this.dataRole !== 'url' && this.dataRole !== 'date' && this.dataRole !== 'tel')) {

				if (this.dataReq == 'yes') {
					if (this.vLength >= this.minLength && this.vLength <= this.maxLength) {

						if (/^[0-9]+\.?[0-9]?$/.test(this.v)) {
							this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
							if (this.dataAjxCtrl == 'true' && this.sync)
								return this.ajaCtrl();
							else
								this.ajaCtrl();
							return { err: false };
						} else {
							this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
							return { err: true, errType: "dataType" };
						}
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "dataLength" };
					}
				} else {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					return { err: false };
				}

			} else if (this.dataTyp == 'letters' && this.dataRole !== 'email' && this.dataRole !== 'url' && this.dataRole !== 'date' && this.dataRole !== 'tel') {

				if (this.dataReq == 'yes') {
					if (this.vLength >= this.minLength && this.vLength <= this.maxLength) {
						if (/^[^0-9]+$/.test(this.v)) {
							this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
							if (this.dataAjxCtrl == 'true' && this.sync)
								return this.ajaCtrl();
							else
								this.ajaCtrl();
							return { err: false };
						} else {
							this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
							return { err: true, errType: "dataType" };
						}
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "dataLength" };
					}
				} else {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					return { err: false, errType: "dataType" };
				}

			} else if (this.dataRole == 'email') {

				if (this.vLength == 0 && this.dataReq != 'yes') {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					return { err: false };
				} else {
					if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/i.test(this.v)) {
						this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
						if (this.dataAjxCtrl == 'true' && this.sync)
							return this.ajaCtrl();
						else
							this.ajaCtrl();
						return { err: false };
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "incorrectFormat" };
					}
				}

			} else if (this.dataRole == 'tel') {

				if (this.vLength == 0 && this.dataReq != 'yes') {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					if (this.dataAjxCtrl == 'true' && this.sync)
						return this.ajaCtrl();
					else
						this.ajaCtrl();
					return { err: false };
				} else {

					if (/^\+?[0-9]+$/.test(this.v) && this.vLength > 5) {
						this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
						if (this.dataAjxCtrl == 'true' && this.sync)
							return this.ajaCtrl();
						else
							this.ajaCtrl();
						return { err: false };
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "incorrectFormat" };
					}
				}

			} else if (this.dataRole == 'url') {

				if (this.vLength == 0 && this.dataReq != 'yes') {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					if (this.dataAjxCtrl == 'true' && this.sync)
						return this.ajaCtrl();
					else
						this.ajaCtrl();
					return { err: false };
				} else {

					var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
						'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
						'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
						'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
						'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
						'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

					if (pattern.test(this.v)) {
						this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
						if (this.dataAjxCtrl == 'true' && this.sync)
							return this.ajaCtrl();
						else
							this.ajaCtrl();
						return { err: false };
					} else {
						this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
						return { err: true, errType: "incorrectFormat" };
					}
				}
			} else if (this.valueEqual) {

				let eqToObj = $j(this.valueEqual);
				//console.log(eqToObj);
				if (this.v == eqToObj.value()) {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					return { err: false };
				} else {
					this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
					return { err: true, errType: "valueNotEqual", equalTo: this.valueEqual, equalToObj: equalTo };
				}

			} else if (this.dataRole == 'date') {

				if (this.vLength == 0 && this.dataReq != 'yes') {
					this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
					if (this.dataAjxCtrl == 'true' && this.sync)
						return this.ajaCtrl();
					else
						this.ajaCtrl();
					return { err: false };
				} else {

					var date,
						dd,
						mm,
						yy,
						h,
						i,
						s,
						patternDate,
						sep = jLive.strstr(this.dateFormat, '-') ? '-' : '/';

					switch (this.dateFormat) {

						case 'yyyy-mm-dd':
						case 'yyyy/mm/dd':

							patternDate = new RegExp('^[0-9]{4}' + sep + '[0-9]{1,2}' + sep + '[0-9]{1,2}$');
							date = jLive.explode(sep, this.v);
							dd = date[2];
							mm = date[1];
							yy = date[0];

							break;
						case 'mm-dd-yyyy':
						case 'mm/dd/yyyy':

							patternDate = new RegExp('^[0-9]{1,2}' + sep + '[0-9]{1,2}' + sep + '[0-9]{4}$');
							date = jLive.explode(sep, this.v);
							dd = date[1];
							mm = date[0];
							yy = date[2];

							break;
						case 'h:i:s':

							patternDate = new RegExp('^[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}$');
							date = jLive.explode(':', this.v);
							h = date[0];
							i = date[1];
							s = date[2];

							break;
						case 'h:i':

							patternDate = new RegExp('^[0-9]{1,2}:[0-9]{1,2}$');
							date = jLive.explode(':', this.v);
							h = date[0];
							i = date[1];
							s = 0;

							break;
						default: // dd-mm-yyyy OR dd/mm/yyyy

							patternDate = new RegExp('^[0-9]{1,2}' + sep + '[0-9]{1,2}' + sep + '[0-9]{4}$');
							date = jLive.explode(sep, this.v);
							dd = date[0];
							mm = date[1];
							yy = date[2];

							break;
					}

					if (this.dateFormat == 'h:i' || this.dateFormat == 'h:i:s') {
						if (patternDate.test(this.v) && (h >= 0 && h <= 24) && (i >= 0 && i < 60) && (s >= 0 && s < 60)) {
							this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
							if (this.dataAjxCtrl == 'true' && this.sync)
								return this.ajaCtrl();
							else
								this.ajaCtrl();
							return { err: false };

						} else {
							this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
							return { err: true, errType: "incorrectFormat" };
						}
					} else {

						if (patternDate.test(this.v) && jLive.checkdate(mm, dd, yy)) {

							this.styleSuccessIsClass ? obj.removeClass(this.styleError).addClass(this.styleSuccess) : obj.style('border-color', this.styleSuccess);
							if (this.dataAjxCtrl == 'true' && this.sync)
								return this.ajaCtrl();
							else
								this.ajaCtrl();

							return true;
						} else {
							this.styleErrorIsClass ? obj.removeClass(this.styleSuccess).addClass(this.styleError) : obj.style('border-color', this.styleError);
							return { err: true, errType: "incorrectFormat" };
						}

					}
				}
			} else {
				alert('type or role not exist');
			}

		}

	}

	/*
	 * ! ajax
	 */

	jLive.ajax = function (opts_) {

		function ajaInit(opts) {
			opts.method = opts.method || 'GET';
			opts.sync = (opts.sync != undefined) ? opts.sync : true;
			opts.urlEncode = (opts.urlEncode !== undefined) ? opts.urlEncode : true;
			opts.data = (opts.data && opts.method == 'POST') ? opts.data : null;
			opts.withCredentials = opts.withCredentials || false;
			opts.dataType = opts.dataType || 'text';
			opts.mimeType = opts.mimeType || false;
			opts.timeout = opts.timeout || false;
			opts.cache = (opts.cache != undefined) ? opts.cache : true;
			opts.onSuccess = opts.onSuccess || function () { };
			opts.beforeSend = opts.beforeSend || function () { };
			opts.onError = opts.onError || function () { };
			this.xhr = new XMLHttpRequest();
			var data = '',
				hi = this;

			var dataFormat = function () {
				if (opts.dataType.toLowerCase() == 'json') {
					try {
						return JSON.parse(hi.xhr.responseText);
					} catch (e) {
						opts.onError.call(hi.xhr, {
							'code': 'jL' + 1,
							'text': 'JSON.parse: unexpected character of the JSON data at URL: ' + opts.url
						});
					}
				} else if (opts.dataType == 'xml')
					return jLive.trim(hi.xhr.responseXML);
				else
					return jLive.trim(hi.xhr.responseText);
			};

			this.xhr.open(opts.method, opts.url, opts.sync);
			if (opts.method == 'POST' && window.FormData == undefined)
				this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			if (!opts.cache)
				this.xhr.setRequestHeader("Cache-Control", "no-cache");
			if (opts.mimeType)
				this.xhr.overrideMimeType(opts.mimeType);

			if (opts.data) {
				if ('object' == jLive.checkType(opts.data)) {

					if (window.FormData != undefined) {

						var formData = new FormData();
						console.log('FormData is supported');

						for (let i in opts.data) {
							formData.append(i, opts.data[i]);
						}
						opts.data = formData;
						formData = null;

					} else {

						jLive.foreach(opts.data, function (i, v) {
							v = (opts.urlEncode) ? encodeURIComponent(v) : v;
							data += '&' + i + '=' + v;
						});
						opts.data = jLive.substr(data, 1);

					}
				}
			}

			if (opts.headers) {
				if ('object' == jLive.checkType(opts.headers)) {
					jLive.foreach(opts.headers, function (headName, headValue) {
						hi.xhr.setRequestHeader(headName, headValue);
					});
				} else
					jLive.error('$.ajax expects headers value to be object');
			}

			if (opts.sync)
				hi.xhr.withCredentials = opts.withCredentials;

			opts.beforeSend.call(this.xhr, hi.xhr);

			if (!opts.sync) {
				this.xhr.send(opts.data);
				opts.onSuccess.call(this.xhr, dataFormat(), this.xhr);
				if (opts.timeout)
					clearTimeout(hi.myTimer);
				return this.xhr;
			}

			this.xhr.onreadystatechange = function () {
				if (hi.xhr.readyState == 4 && hi.xhr.status == 200) {

					if (opts.timeout)
						clearTimeout(hi.myTimer);
					opts.onSuccess.call(hi.xhr, dataFormat(), hi.xhr);

				} else if (hi.xhr.readyState == 4 && hi.xhr.status != 200) {
					var statusText = hi.xhr.statusText;
					if (hi.xhr.status == 0)
						statusText = 'XHR aborted';
					opts.onError.call(hi.xhr, {
						'code': hi.xhr.status,
						'text': statusText
					});
				}
			}

			// console.log(opts.data);
			this.xhr.send(opts.data);

			if (opts.timeout) {

				this.myTimer = setTimeout(function () {

					hi.xhr.abort();
					opts.onError.call(hi.xhr, {
						'code': 'jL' + 2,
						'text': 'XHR time out'
					});

				}, opts.timeout);

			}

			return this.xhr;
		}

		return new ajaInit(opts_);

	};

	jLive.relatedTarget = function (e) {
		if (e.type == 'mouseout')
			e.relatedTarget || e.toElement;
		return e.relatedTarget || e.fromElement;
	};

	jLive.preventDefault = function (e) {
		e.returnValue = false;
		if (e.preventDefault) {
			e.preventDefault();
		}
	};

	// -------------------------------------------------------------------
	function indentifierElem(elemQuerie) {
		var nodeName;
		if (!jLive.empty(elemQuerie['id']))
			nodeName = '#' + elemQuerie['id'];
		else if (!jLive.empty(elemQuerie['className']))
			nodeName = '.' + elemQuerie['className'];
		else
			nodeName = elemQuerie['localName'];
		return nodeName;
	}

	function isHidden(el) {
		return (el.style.display == 'none' || el.style.visibility == 'hidden') || ((el.style.display == ' ' && el.style.visibility == ' ') && el.style.opacity == 0);
	}

	function getQuery(selector, context) {
		var query,
			selTyp = jLive.checkType(selector);
		context = context || document;
		if (selTyp === 'string') {

			// console.log(jLive.checkType(context));
			if (jLive.checkType(context) == 'string')
				context = document.querySelector(context);

			if (context.querySelectorAll) {
				query = context.querySelectorAll(selector);
				if (query.length == 0)
					query = query;
			} else {
				if ('undefined' === typeof Sizzle) {
					jLive.error('JLIVE require Sizzle for olds browsers');
				} else {
					query = Sizzle(selector, context);
				}
			}
		} else {
			/*
			 * if (selector.nodeType) query = toNodeList(selector); else query =
			 * selector;
			 */
			query = selector;
		}

		// console.log(query);
		return toNodeList(query);
	}

	function mergeNodeLists(a, b) {
		var slice = Array.prototype.slice;
		return slice.call(a).concat(slice.call(b));
	}

	function toNodeList(elm, context) {

		// IE < #9 don't return nodelist with checkType(), we need to verifie
		// nodetype
		if (jLive.checkType(elm) == 'nodelist' || elm.nodeType != 1)
			return elm;

		var list,
			df;
		context = context // context provided
			|| elm.parentNode; // element's parent

		if (!context && elm.ownerDocument) { // is part of a document
			if (elm === elm.ownerDocument.documentElement || (elm.ownerDocument.constructor && elm.ownerDocument.constructor.name === 'DocumentFragment')) { // is
				// <html>
				// or
				// in a
				// fragment
				context = elm.ownerDocument;
			}
		}

		if (!context) { // still no context?
			df = document.createDocumentFragment();
			df.appendChild(elm);
			list = df.childNodes;
			// df.removeChild(elm); // NodeList is live, removeChild empties it
			return list;
		}
		// selector method
		elm.setAttribute('wrapNodeList', '');
		list = getQuery('[wrapNodeList]', context); //
		elm.removeAttribute('wrapNodeList');
		return list;
	}

	jLive.arrayClone = function (array) {
		var res = [];
		return res.concat(array);
	};

	jLive.getVendorPrefix = function () {
		var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
			someScript = document.getElementsByTagName('script')[0];

		for (var prop in someScript.style) {
			if (regex.test(prop))
				return prop.match(regex)[0];
		}

		// Rien trouvé jusqu'ici? Webkit n'énumère pas sur les propriétés CSS de
		// l'objet de style .
		// Cependant (prop dans le style ) renvoie la valeur correcte , nous
		// aurons donc pour tester
		// la provenence d'une propriété spécifique
		if ('WebkitOpacity' in someScript.style)
			return 'Webkit';
		if ('KhtmlOpacity' in someScript.style)
			return 'Khtml';

		return '';
	}

	jLive.onEvent = function (callback, obj, name) {
		var el = obj.el[0];
		var prefix = jLive.getVendorPrefix().toLowerCase();
		name = jLive.substr(name, 3);
		var nameNoEND = jLive.substr(name, 0, (name.length - 3)).toLowerCase();

		var runOnce = function (e) {
			callback.call(obj, obj);
			e.target.removeEventListener(e.type, runOnce);
		};
		el.addEventListener(prefix + name, runOnce);
		el.addEventListener(name.toLowerCase(), runOnce);
		if ((prefix == '' && !(nameNoEND in s)) || getComputedStyle(el)['-' + prefix + '-' + nameNoEND + '-duration'] == '0s')
			callback.call(obj, obj);

		return obj;
	};

	jLive.array_clear = function (array) {
		while (array.length > 0) {
			array.pop();
		}
	};

	jLive.fn.animate = function (props, options) {
		return jLive.animation(this, props, options);
	};

	jLive.fn.echo = jLive.fn.html = jLive.fn.print = function (txt, s) {

		return jLive.echo(this, txt, s);

	};

	jLive.fn.var_dump = function (expression) {
		// alert(expression);
		// console.log(expression);
		return jLive.echo(this, jLive.var_dump(expression), true);

	};

	jLive.fn.text = function () {

		return jLive.textContent(this.el);

	};

	jLive.fn.raw = function () {
		return jLive.raw(this);
	}

	jLive.fn.style = function (regle, value, callback) {
		if (jLive.checkType(value) == 'function') {
			callback = value;
			value = callback;
		}
		return jLive.style(this, regle, value, callback);
	};

	jLive.fn.attr = function (attrib, value, callback) {
		if (jLive.checkType(value) == 'function') {
			callback = value;
			value = callback;
		}
		return jLive.attrib(this, attrib, value, callback);
	};
	jLive.fn.data = function (attrib, value, callback) {
		if (jLive.checkType(value) == 'function') {
			callback = value;
			value = callback;
		}
		return jLive.attrData(this, attrib, value, callback);
	};

	jLive.fn.removeAttr = function (attrib, callback) {
		return jLive.removeAttrib(this, attrib, callback);
	};

	jLive.fn.getOffset = function (toParent) {
		if (undefined == toParent)
			toParent = false;
		return jLive.offset(this, toParent);
	};

	jLive.echo = function (obj, txt, s) {

		var el = obj.el;

		// console.log();

		if (undefined == txt) {

			return (el[0]) ? el[0].innerHTML : '';

		} else {

			if (s) {

				if (el[0]) {
					jLive.foreach(el, function () {
						this.innerHTML += txt;
					});
				} else
					el.innerHTML += txt;
			} else {
				if (el[0]) {
					jLive.foreach(el, function () {

						this.innerHTML = txt;
					});
				} else
					el.innerHTML = txt;
			}

			return obj;
		}
	};

	jLive.textContent = function (el) {
		if (!el[0])
			return '';
		return el[0].textContent || el[0].innerText || '';
	};

	/* ! variable utilisé par var_dump() et print_r() */
	var nbrBocl_var_dump = 0;
	var nbrBocl2_var_dump = 0;
	/* !--------------- */
	jLive.var_dump = function (expression) {

		if (nbrBocl_var_dump == 0 && expression == undefined) // test
			// expression
			// only for
			// first call
			return jLive.error('Warning: var_dump() expects exactly 1 parameters');

		var text = '<pre>';
		text += jLive.str_pad('', nbrBocl_var_dump, '\t');
		var t = jLive.checkType(expression),
			expressionLen = ('object' == t || t == 'array') ? '<i>(size=' + jLive.count(expression) + ')</i>' : '( )';
		text += '<strong>' + t + '</strong> ' + expressionLen + ' {\n';
		if ('object' == t || t == 'array') {
			nbrBocl_var_dump++;
			jLive.foreach(expression, function (i, val) {
				var fi = (isNumberInString(i)) ? jLive.str_pad('', nbrBocl_var_dump, '\t') + i + " <font color=\"#888a85\">=></font> "
					: jLive.str_pad('', nbrBocl_var_dump, '\t') + "'" + i + "' <font color=\"#888a85\">=></font> ";
				text += fi + jLive.var_dump(val) + '\n';
				nbrBocl2_var_dump = nbrBocl_var_dump - 1;
			});
			nbrBocl_var_dump = nbrBocl2_var_dump;
			text += jLive.str_pad('', jLive.abs(nbrBocl2_var_dump), '\t') + '}';
			return text + '</pre>';
		} else {
			var fexpression = (typeof expression !== 'string') ? ' <font color="#4e9a06">' + expression + "</font> "
				: " <font color=\"#cc0000\">'" + expression + "'</font> <i>(length=" + expression.length + ")</i>";
			return '<small>' + t + '</small>' + fexpression;
		}
	};

	/*
	 * ! ne supportera pas ret, pour avoir l'effet de ret a true, il faut utiler
	 * $(el).print_r() au lieu de $.print_r;
	 */
	jLive.print_r = function (expression) {
		if (expression == undefined)
			return jLive.error('Warning: print_r() expects exactly 1 parameters');
		var t = jLive.checkType(expression),
			text = '' + jLive.ucfirst(t) + ' (\n';
		if ('object' == t || t == 'array') {
			nbrBocl_var_dump++;
			jLive.foreach(expression, function (i, val) {
				var fi;
				text += jLive.str_pad('', nbrBocl_var_dump, '\t') + '[' + i + "] => " + jLive.print_r(val) + '\n';
				nbrBocl2_var_dump = nbrBocl_var_dump - 1;
			});
			nbrBocl_var_dump = nbrBocl2_var_dump;
			text += jLive.str_pad('', jLive.abs(nbrBocl2_var_dump), '\t') + ')';
			return text;
		} else {
			return expression;
		}
	};

	jLive.fn.foreach = function (callback, args) {

		return jLive.foreach(this.el, callback, args);
	};

	jLive.checkType = function (obj) {
		if (obj == null) {
			return String(obj);
		}

		return (typeof obj === "object" || typeof obj === "function") ? classType[__core_toString.call(obj)] || "object" : typeof obj;
	};

	jLive.foreach(("scrollTop scrollLeft scrollHeight").split(" "), function (i, name) {

		jLive.fn[name] = function (pixel) {
			return jLive.scrol(this, name, pixel);
		};
	});

	jLive.foreach(("show hide toggle").split(" "), function (i, name) {

		jLive.fn[name] = function (disMode, effect) {
			effect = effect || false;
			return jLive.showHidden(this, name, disMode, effect);
		};
	});

	jLive.foreach(("clientHeight clientWidth").split(" "), function (i, name) {

		jLive.fn[name] = function (pixel) {
			return jLive.client(this, name);
		};
	});

	jLive.foreach(("clone wrap parent child hasParent remove find next nextElement previousElement width height").split(" "), function (i, name) {

		jLive.fn[name] = function (arg) {
			return jLive.manipElementUtulitaire(this, name, arg);
		};
	});

	jLive.foreach(("addClass removeClass toggleClass hasClass").split(" "), function (i, name) {

		jLive.fn[name] = function (classnames, callback) {
			if (jLive.checkType(classnames) != 'string' && jLive.checkType(classnames) != 'array')
				jLive.error('class names must to be only string or array');
			return jLive.manipClass(this, classnames, callback, name);
		};
	});

	jLive.foreach("RadioNodeList Boolean Number String Function Array Date RegExp Object Error NodeList Window".split(" "), function (i, name) {
		classType["[object " + name + "]"] = name.toLowerCase();
	});




	/*
	.append() inserts the content specified by the parameter, to the end of each element in the set of matched elements, as in
	$(Append_To_This).append(The_Content_Given_Here);

	while .appendTo() works the other way around: it insert every element in the set of matched elements to the end of the target given in the parameter, as in
	$(The_Content_Given_Here).appendTo(Append_To_This);
	*/


	jLive.foreach(("append prepend after before").split(" "), function (i, name) {

		jLive.fn[name] = function (html) {
			return jLive.elementInserting(html, this, name);
		};
	});
	jLive.foreach(("appendTo prependTo insertBefore insertAfter").split(" "), function (i, name) {

		jLive.fn[name] = function (html) {
			return jLive.domManipIns(html, this, name);
		};
	});

	//Deprecated: replaced by animationend animationiteration animationstart
	jLive.foreach(("CssAnimationEnd CssTransitionEnd").split(" "), function (i, name) {

		jLive.fn[name] = function (callback) {
			callback = callback || function () { };
			return jLive.onEvent(callback, this, name);
		};
	});

	jLive.fn.formControl = function (options) {
		return jLive.formCtrl(this, options);
	};

	/* form will be depreacated */
	jLive.foreach(("value form formValue checked disabled readonly selected").split(" "), function (i, name) {

		jLive.fn[name] = function (text) {
			return jLive.formHandler(text, this, name);
		};
	});

	jLive.foreach(("animationend animationiteration animationstart blur focus contextmenu ready load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error").split(" "), function (i, name) {

			// Handle event binding
			jLive.fn[name] = function (callback) {
				// alert(callback);
				callback = callback || false;

				if (!callback) {
					if (!this.el[0]) {
						this[name]();
					} else {
						jLive.foreach(this.el, function () {
							this[name]();
						});
					}
					return;
				}
				return jLive.trigger(this, name, callback);
			};
		});

	jLive.fn.removeEvent = function (evt, fct) {

		return jLive.removeEvent_(evt, fct, this);
	};
	jLive.fn.hasEvent = function (evt, fct) {

		return jLive.hasEvent_(evt, fct, this);
	};

	jLive.foreach('objectToArray arrayToObject'.split(' '), function () {
		// alert(this);
		jLive[this] = function (data) {
			var tdata = jLive.checkType(data);
			if (tdata == 'object') {
				var ret = [];
				jLive.foreach(data, function () {
					ret.push(this);
				});
			} else {
				var ret = {};
				jLive.foreach(data, function (i, v) {
					ret[i] = v;
				});
			}

			return ret;
		}
	});

	function stylePropRender(prop) {
		var cProp = prop;
		return prop.replace(/-[a-z]/ig, function (str, index) {
			var ret;
			if (index == 0 && cProp.substr(0, 3) == '-ms')
				ret = cProp[1];
			else
				ret = prop.charAt(index + 1).toUpperCase();

			return ret;
		});
	}

	var defaultDelta = {

		linear: function (progress) {
			return progress;
		},

		back: function (progress, x) {
			x = x || 1.5;
			return Math.pow(progress, 2) * ((x + 1) * progress - x);
		},

		quad: function (progress) {
			return Math.pow(progress, 2);
		},

		quint: function (progress) {
			return Math.pow(progress, 5);
		},

		sine: function (p) {
			return 1 - Math.cos(p * Math.PI / 2);
		},

		elastic: function (progress, x) {
			x = x || 1.5;
			return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
		},

		bounce: function (progress) {
			for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
				if (progress >= (7 - 4 * a) / 11) {
					return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
				}
			}
		},

		swing: function (progress) {
			return 0.5 - Math.cos(progress * Math.PI) / 2;
		},

		circ: function (progress) {
			return 1 - Math.sin(Math.acos(progress));
		},

		easeOut: function (progress, delta) {
			return function (progress) {
				return 1 - defaultDelta[delta](1 - progress);
			}
				(progress);
		},

		easeInOut: function (progress, delta) {
			return function (progress) {
				if (progress < .5)
					return defaultDelta[delta](2 * progress) / 2;
				else
					return (2 - defaultDelta[delta](2 * (1 - progress))) / 2;
			}
				(progress);
		}

	};

	// fusionne la valeur de deux tableaux ayant les meme clef a la difference
	// de array_merge();
	function arrayMergeLike(arr1, arr2) {
		var ret = arr1,
			key = "";
		for (key in arr2) {
			if (typeof arr1[key] === 'object' && typeof arr2[key] === 'object') {
				arrayMergeLike(arr1[key], arr2[key]);
			} else {
				if (jLive.array_key_exists(key, arr1)) {
					var cv = arr1[key];
					arr1[key] = [];
					arr1[key].push(cv);
					arr1[key].push(arr2[key]);
				} else {
					arr1[key] = arr2[key];
				}
			}
		}
		return ret;
	}

	function parserHTML(html) {
		if (jLive.isJliveObject(html)) {
			html = html.el;
		}
		this.html = html;
		this.elem = {};
		var
			evenTag = /<([a-z0-9]+)\s*(.*?)\s*>(.*)<\/\s*[a-z0-9]+\s*>/i,
			oddTag = /<([a-z0-9]+)\s*(.*?)\s*\/?>/i,
			tagAttr = /[\s\S]+?\s*?=\s*?"[\s\S]+?"/g;
		this.tagType = evenTag.exec(this.html) ? 'evenTag' : 'oddTag';
		this.elemArr = evenTag.exec(this.html) || oddTag.exec(this.html);

		this.htmlTagInfo = function () {
			this.elem.tagName = RegExp.$1;
			this.elem.content = RegExp.$3;
			this.elem.attrList = RegExp.$2;
			this.elem.attrList = this.elem.attrList.match(tagAttr);
			return this.elem;
		};

		this.isHTMLTag = function () {
			return this.elemArr !== null;
		}
	}

	function isArraylike(obj) {
		var length = obj.length,
			checkType = jLive.checkType(obj);
		if (jLive.isWindow(obj)) {
			return false;
		}
		if (obj.nodeType === 1 && length) {
			return true;
		}

		return checkType === "array" || checkType === "nodelist" || checkType !== "function" && (length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj);
	}

	function GetZoomFactor() {
		// always return 1, except at non-default zoom levels in IE before
		// version 8
		// http://help.dottoro.com/ljcjgrml.php
		var factor = 1;
		if (document.body.getBoundingClientRect) {
			// rect is only in physical pixel size in IE before version 8
			var rect = document.body.getBoundingClientRect();
			var physicalW = rect.right - rect.left;
			var logicalW = document.body.offsetWidth;

			// the zoom level is always an integer percent value
			factor = Math.round((physicalW / logicalW) * 100) / 100;
		}
		return factor;
	}


	function getParent(el, arg) {
		arg = arg || false;
		var elId = arg ? jLive.substr(arg, 1) : '';
		while (el = el.parentNode) {
			if (arg) {

				if (/\..+/.test(arg) && el.nodeType === 1 && new RegExp('(\\s|^)' + elId + '(\\s|$)').test(el.className))
					return el;
				else if (/#.+/.test(arg) && el.nodeType === 1 && el.id == elId)
					return el;
				else if (el.nodeType === 1 && el[arg])
					return el;

			} else {
				if (el.nodeType === 1) {
					return el;
				}
			}
		}
		return false;
	}

	function getNextElementSibling(el, arg) {
		arg = arg || false;
		var elId = arg ? jLive.substr(arg, 1) : '';
		while (el = el.nextSibling) {
			if (arg) {

				if (/\..+/.test(arg) && el.nodeType === 1 && el.className == elId)
					return el;
				else if (/#.+/.test(arg) && el.nodeType === 1 && el.id == elId)
					return el;
				else if (el.nodeType === 1 && el[arg])
					return el;

			} else {
				if (el.nodeType === 1) {
					return el;
				}
			}
		}
		return false;
	}

	function getPreviousElementSibling(el, arg) {
		arg = arg || false;
		var elId = arg ? jLive.substr(arg, 1) : '';
		while (el = el.previousSibling) {
			if (arg) {

				if (/\..+/.test(arg) && el.nodeType === 1 && el.className == elId)
					return el;
				else if (/#.+/.test(arg) && el.nodeType === 1 && el.id == elId)
					return el;
				else if (el.nodeType === 1 && el[arg])
					return el;

			} else {
				if (el.nodeType === 1) {
					return el;
				}
			}
		}
		return false;
	}

	function dateFormat(f, t) {

		switch (f) {
			/*
			 * ! jour et mois en text
			 */
			case 'txt_month':
				return ['January', 'February', 'March', 'April', 'May', 'June',
					'July', 'August', 'September', 'October', 'November',
					'December']
				break;
			case 'txt_day':
				return ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur']
				break;
			/*
			 * ! Jour --- ---
			 */
			// jour du mois sur 2 chiffre(01 à 31)
			case 'd':
				return jLive.str_pad(t.getDate(), 2, 0, STR_PAD_LEFT);
				break;
			case 'D':
				// Jour de la semaine, en trois lettres (et en anglais): Mon à Sun
				return dateFormat('txt_day', 0)[t.getDay()].substr(0, 3);
				break;
			case 'j':
				// Jour du mois sans les zéros initiaux; 1..31
				return t.getDate();
				break;
			case 'l':
				// Jour de la semaine, textuel, version longue, en anglais:
				// Monday...Sunday
				return dateFormat('txt_day', 0)[t.getDay()] + 'day';
				break;
			case 'N':
				// Représentation numérique ISO-8601 du jour de la semaine:
				// 1[Mon]..7[Sun]
				return jLive.array_flip(dateFormat('txt_day', 0))[dateFormat('D', t)];
				break;
			case 'S':
				// Suffixe ordinal d'un nombre pour le jour du mois, en anglais, sur
				// deux lettres: st, nd, rd ou th.
				var j = dateFormat('j', t),
					i = j % 10;
				if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
					i = 0;
				}
				return ['st', 'nd', 'rd'][i - 1] || 'th';
				break;
			case 'w':
				// Jour de la semaine au format numérique: 0[Sun]..6[Sat]
				return t.getDay();
				break;
			case 'z':
				// Jour de l'année: 0..365
				var a = new Date(dateFormat('Y', t), dateFormat('n', t) - 1,
					dateFormat('j', t));
				var b = new Date(dateFormat('Y', t), 0, 1);
				return Math.round((a - b) / 864e5);
				break;

			/*
			 * ! Semaine --- ---
			 */
			case 'W': // a tester
				// Numéro de semaine dans l'année ISO-8601, les semaines commencent
				// le lundi: ex. 42 (la 42ème semaine de l'année)
				var a = new Date(dateFormat('Y', t), dateFormat('n', t) - 1,
					dateFormat('j', t) - dateFormat('N', t) + 4);
				var b = new Date(a.getFullYear(), 0, 4);
				return jLive.str_pad(1 + Math.round((a - b) / 864e5 / 7), 2, 0,
					STR_PAD_LEFT);
				break;

			/*
			 * ! Mois --- ---
			 */
			case 'F':
				// Mois, textuel, version longue; en anglais, comme January ou
				// December
				return dateFormat('txt_month', 0)[dateFormat('n', t) - 1];
				break;
			case 'm':
				// Mois au format numérique, avec zéros initiaux: 01...12
				return jLive.str_pad(dateFormat('n', t), 2, 0, STR_PAD_LEFT);
				break;
			case 'M':
				// Mois, en trois lettres, en anglais Jan à Dec
				return dateFormat('F', t).substr(0, 3);
				break;
			case 'n':
				// Mois sans les zéros initiaux: 1...12
				return t.getMonth() + 1;
				break;
			case 't':
				// Nombre de jours dans le mois: 28...31
				return (new Date(dateFormat('Y', t), dateFormat('n', t), 0))
					.getDate();
				break;

			/*
			 * ! Année --- ---
			 */
			case 'L':
				// Est ce que l'année est bissextile?: 1 si bissextile, 0 sinon.
				var j = dateFormat('Y', t);
				return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
				break;
			case 'o':
				/*
				 * L'année ISO-8601. C'est la même valeur que Y, excepté que si le
				 * numéro de la semaine ISO (W) appartient à l'année précédente ou
				 * suivante, cette année sera utilisé à la place.
				 */
				var n = dateFormat('n', t);
				var W = dateFormat('W', t);
				var Y = dateFormat('Y', t);
				return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
				break;
			case 'Y':
				// Année sur 4 chiffres e.g. 1980...2010
				return t.getFullYear();
				break;
			case 'y':
				// Année sur 2 chiffres: 00...99
				return dateFormat('Y', t).toString().substr(-2);
				break;

			/*
			 * ! Heure --- ---
			 */
			case 'a':
				// Ante meridiem et Post meridiem en minuscules: am ou pm
				return t.getHours() > 11 ? 'pm' : 'am';
				break;
			case 'A':
				// Ante meridiem et Post meridiem en minuscules: AM or PM
				return dateFormat('a', t).toUpperCase();
			case 'B':
				// Heure Internet Swatch : 000..999
				return jLive.str_pad(Math
					.floor(((t.getUTCHours() * 36e2) + (t.getUTCMinutes() * 60)
						+ t.getUTCSeconds() + 36e2) / 86.4) % 1e3, 3, 0,
					STR_PAD_LEFT);
				break;
			case 'g':
				// Heure, au format 12h, sans les zéros initiaux: 1..12
				return dateFormat('G', t) % 12 || 12;
				break;
			case 'G':
				// Heure, au format 24h, sans les zéros initiaux 0..23
				return t.getHours();
				break;
			case 'h':
				// Heure, au format 12h, avec les zéros initiaux: 01..12
				return jLive.str_pad(dateFormat('g', t), 2, 0, STR_PAD_LEFT);
				break;
			case 'H':
				// Heure, au format 24h, avec les zéros initiaux : 00..23
				return jLive.str_pad(dateFormat('G', t), 2, 0, STR_PAD_LEFT);
				break;
			case 'i':
				// Minutes avec les zéros initiaux: 00..59
				return jLive.str_pad(t.getMinutes(), 2, 0, STR_PAD_LEFT);
				break;
			case 's':
				// Secondes, avec zéros initiaux: 00..59
				return jLive.str_pad(t.getSeconds(), 2, 0, STR_PAD_LEFT);
				break;
			case 'u':
				// Microsecondes: 000000-999000
				return jLive
					.str_pad(t.getMilliseconds() * 1000, 6, 0, STR_PAD_LEFT);
				break;

			/*
			 * ! Fuseau horaire --- ---
			 */

			case 'e': // en cours(L'identifiant du fuseau horaire est trop vaste)
				// L'identifiant du fuseau horaire : Exemples : UTC, GMT,
				// Atlantic/Azores
				throw 'Not supported';
				break;
			case 'I': // a tester
				// L'heure d'été est activée ou pas : 1 si oui, 0 sinon.
				// Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
				// If they are not equal, then DST is observed.

				var a = new Date(dateFormat('Y', t), 0);
				// Jan 1
				var c = Date.UTC(dateFormat('Y', t), 0);
				// Jan 1 UTC
				var b = new Date(dateFormat('Y', t), 6);
				// Jul 1
				// Jul 1 UTC
				var d = Date.UTC(dateFormat('Y', t), 6);
				return ((a - c) !== (b - d)) ? 1 : 0;
				break;
			case 'O':
				// // Différence d'heures avec l'heure de Greenwich (GMT), exprimée
				// en heures: +0200
				var ecart = t.getTimezoneOffset();
				var a = Math.abs(ecart);
				return (ecart > 0 ? '-' : '+')
					+ jLive.str_pad(Math.floor(a / 60) * 100 + a % 60, 4, 0,
						STR_PAD_LEFT);
				break;
			case 'P':
				// Différence avec l'heure Greenwich (GMT) avec un deux-points entre
				// les heures et les minutes: +02:00
				var O = dateFormat('O', t);
				return (O.substr(0, 3) + ':' + O.substr(3, 2));
				break;
			case 'T': // en cours(L'identifiant du fuseau horaire est trop vaste)
				// Abréviation du fuseau horaire: EST, MDT, ...
				return 'UTC';

			case 'Z':
				// Décalage horaire en secondes. Le décalage des zones à l'ouest de
				// la zone UTC est négative, et à l'est, il est positif:
				// (-43200...50400)
				return -t.getTimezoneOffset() * 60;

			/*
			 * ! Date et Heure complète --- ---
			 */
			case 'c':
				// Date au format ISO 8601: 2004-02-12T15:19:21+00:00
				return dateFormat('Y', t) + '-' + dateFormat('m', t) + '-'
					+ dateFormat('d', t) + 'T' + dateFormat('H', t) + ':'
					+ dateFormat('i', t) + ':' + dateFormat('s', t) + ':'
					+ dateFormat('P', t);
				break;
			case 'r':
				// Format de date » RFC 2822 Thu, 21 Dec 2000 16:01:07 +0200 D, d M
				// Y H:i:s O
				return dateFormat('D', t) + ', ' + dateFormat('d', t) + ' '
					+ dateFormat('M', t) + ' ' + ' ' + dateFormat('Y', t) + ' '
					+ dateFormat('H', t) + ':' + dateFormat('i', t) + ':'
					+ dateFormat('s', t) + ':' + dateFormat('O', t);
				break;
			case 'U':
				// Secondes depuis l'époque Unix (1er Janvier 1970, 0h00 00s GMT)
				return t / 1000 | 0;
				break;
			default:
				return f;
				break;
		}
	}

	function isNumberInString(str) {
		str = jLive.settype(str, 'string');
		var charCode,
			i = 0,
			isnumber;

		for (; i < str.length; i++) {
			charCode = str.charCodeAt(i);
			isnumber = (charCode >= 48 && charCode <= 57) || (str[i] == '.' && /[0-9]+\.[0-9]/.test(str));
			if (!isnumber) {
				return false;
			}
		}

		return true;
	}

	/* ! pour strnatcmp */
	function isWhitespaceChar(a) {
		var charCode;
		charCode = a.charCodeAt(0);

		if (charCode <= 32) {
			return true;
		} else {
			return false;
		}
	}

	function isDigitChar(a) {
		a = jLive.settype(a, 'string');
		var charCode;
		charCode = a.charCodeAt(0);

		if (charCode >= 48 && charCode <= 57) {
			return true;
		} else {
			return false;
		}
	}

	function stringToBoolean(string) {

		string = jLive.settype(string, 'string');
		switch (string.toLowerCase().trim()) {
			case "true":
			case "yes":
			case "1":
				return true;
			case "false":
			case "no":
			case "0":
			case 'null':
				return false;
			default:
				return Boolean(string);
		}
	}

	function compareRight(a, b) {
		var bias = 0;
		var ia = 0;
		var ib = 0;

		var ca;
		var cb;

		// The longest run of digits wins. That aside, the greatest
		// value wins, but we can't know that it will until we've scanned
		// both numbers to know that they have the same magnitude, so we
		// remember it in BIAS.
		for (; ; ia++, ib++) {
			ca = a.charAt(ia);
			cb = b.charAt(ib);

			if (!isDigitChar(ca) && !isDigitChar(cb)) {
				return bias;
			} else if (!isDigitChar(ca)) {
				return -1;
			} else if (!isDigitChar(cb)) {
				return +1;
			} else if (ca < cb) {
				if (bias == 0) {
					bias = -1;
				}
			} else if (ca > cb) {
				if (bias == 0)
					bias = +1;
			} else if (ca == 0 && cb == 0) {
				return bias;
			}
		}
	}
	/* ! fin pour strnatcmp */

	function getPageName() {
		var
			pathName = window.location.toString(),
			pageName = "";

		if (pathName.indexOf("/") != -1) {
			pageName = pathName.split("/").pop();
		} else {
			pageName = pathName;
		}

		return pageName;
	}

	window.$_GET = jLive.parse_str(jLive.substr(jLive.strstr(getPageName(), '?'), 1) || getPageName(), true);

	window.jLive = window.$j = jLive;

})(window);
