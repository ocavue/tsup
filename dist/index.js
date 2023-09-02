"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } var _class;

var _chunkUWWD4V4Jjs = require('./chunk-UWWD4V4J.js');










var _chunkBWKNFVFOjs = require('./chunk-BWKNFVFO.js');



var _chunk4SM4HQB2js = require('./chunk-4SM4HQB2.js');

















var _chunkDJPFSYOUjs = require('./chunk-DJPFSYOU.js');

// node_modules/.pnpm/consola@2.15.3/node_modules/consola/dist/consola.js
var require_consola = _chunkDJPFSYOUjs.__commonJS.call(void 0, {
  "node_modules/.pnpm/consola@2.15.3/node_modules/consola/dist/consola.js"(exports, module) {
    "use strict";
    function u(u2) {
      return u2 && "object" == typeof u2 && "default" in u2 ? u2.default : u2;
    }
    var D = u(_chunkDJPFSYOUjs.__require.call(void 0, "util"));
    var e = _chunkDJPFSYOUjs.__require.call(void 0, "path");
    var t = _chunkDJPFSYOUjs.__require.call(void 0, "fs");
    var r = u(_chunkDJPFSYOUjs.__require.call(void 0, "os"));
    var n = u(_chunkDJPFSYOUjs.__require.call(void 0, "tty"));
    function s(u2, D2) {
      return u2(D2 = { exports: {} }, D2.exports), D2.exports;
    }
    var o;
    var i = (o = Object.freeze({ __proto__: null, default: [{ name: "AppVeyor", constant: "APPVEYOR", env: "APPVEYOR", pr: "APPVEYOR_PULL_REQUEST_NUMBER" }, { name: "Bamboo", constant: "BAMBOO", env: "bamboo_planKey" }, { name: "Bitbucket Pipelines", constant: "BITBUCKET", env: "BITBUCKET_COMMIT" }, { name: "Bitrise", constant: "BITRISE", env: "BITRISE_IO", pr: "BITRISE_PULL_REQUEST" }, { name: "Buddy", constant: "BUDDY", env: "BUDDY_WORKSPACE_ID", pr: "BUDDY_EXECUTION_PULL_REQUEST_ID" }, { name: "Buildkite", constant: "BUILDKITE", env: "BUILDKITE", pr: { env: "BUILDKITE_PULL_REQUEST", ne: "false" } }, { name: "CircleCI", constant: "CIRCLE", env: "CIRCLECI", pr: "CIRCLE_PULL_REQUEST" }, { name: "Cirrus CI", constant: "CIRRUS", env: "CIRRUS_CI", pr: "CIRRUS_PR" }, { name: "AWS CodeBuild", constant: "CODEBUILD", env: "CODEBUILD_BUILD_ARN" }, { name: "Codeship", constant: "CODESHIP", env: { CI_NAME: "codeship" } }, { name: "Drone", constant: "DRONE", env: "DRONE", pr: { DRONE_BUILD_EVENT: "pull_request" } }, { name: "dsari", constant: "DSARI", env: "DSARI" }, { name: "GitLab CI", constant: "GITLAB", env: "GITLAB_CI" }, { name: "GoCD", constant: "GOCD", env: "GO_PIPELINE_LABEL" }, { name: "Hudson", constant: "HUDSON", env: "HUDSON_URL" }, { name: "Jenkins", constant: "JENKINS", env: ["JENKINS_URL", "BUILD_ID"], pr: { any: ["ghprbPullId", "CHANGE_ID"] } }, { name: "Magnum CI", constant: "MAGNUM", env: "MAGNUM" }, { name: "Sail CI", constant: "SAIL", env: "SAILCI", pr: "SAIL_PULL_REQUEST_NUMBER" }, { name: "Semaphore", constant: "SEMAPHORE", env: "SEMAPHORE", pr: "PULL_REQUEST_NUMBER" }, { name: "Shippable", constant: "SHIPPABLE", env: "SHIPPABLE", pr: { IS_PULL_REQUEST: "true" } }, { name: "Solano CI", constant: "SOLANO", env: "TDDIUM", pr: "TDDIUM_PR_ID" }, { name: "Strider CD", constant: "STRIDER", env: "STRIDER" }, { name: "TaskCluster", constant: "TASKCLUSTER", env: ["TASK_ID", "RUN_ID"] }, { name: "Solano CI", constant: "TDDIUM", env: "TDDIUM", pr: "TDDIUM_PR_ID", deprecated: true }, { name: "TeamCity", constant: "TEAMCITY", env: "TEAMCITY_VERSION" }, { name: "Team Foundation Server", constant: "TFS", env: "TF_BUILD" }, { name: "Travis CI", constant: "TRAVIS", env: "TRAVIS", pr: { env: "TRAVIS_PULL_REQUEST", ne: "false" } }] })) && o.default || o;
    var a = s(function(u2, D2) {
      var e2 = process.env;
      function t2(u3) {
        return "string" == typeof u3 ? !!e2[u3] : Object.keys(u3).every(function(D3) {
          return e2[D3] === u3[D3];
        });
      }
      Object.defineProperty(D2, "_vendors", { value: i.map(function(u3) {
        return u3.constant;
      }) }), D2.name = null, D2.isPR = null, i.forEach(function(u3) {
        var r2 = (Array.isArray(u3.env) ? u3.env : [u3.env]).every(function(u4) {
          return t2(u4);
        });
        if (D2[u3.constant] = r2, r2)
          switch (D2.name = u3.name, typeof u3.pr) {
            case "string":
              D2.isPR = !!e2[u3.pr];
              break;
            case "object":
              "env" in u3.pr ? D2.isPR = u3.pr.env in e2 && e2[u3.pr.env] !== u3.pr.ne : "any" in u3.pr ? D2.isPR = u3.pr.any.some(function(u4) {
                return !!e2[u4];
              }) : D2.isPR = t2(u3.pr);
              break;
            default:
              D2.isPR = null;
          }
      }), D2.isCI = !!(e2.CI || e2.CONTINUOUS_INTEGRATION || e2.BUILD_NUMBER || e2.RUN_ID || D2.name);
    });
    var l = (a.name, a.isPR, a.isCI, false);
    var c = false;
    var h = false;
    var F = "development";
    var C = "undefined" != typeof window;
    var f = "";
    var E = false;
    function g(u2) {
      return !(!u2 || "false" === u2);
    }
    "undefined" != typeof process && (process.platform && (f = String(process.platform)), process.stdout && (h = g(process.stdout.isTTY)), l = Boolean(a.isCI), process.env && (process.env.NODE_ENV && (F = process.env.NODE_ENV), c = g(process.env.DEBUG), E = g(process.env.MINIMAL)));
    var d = { browser: C, test: "test" === F, dev: "development" === F || "dev" === F, production: "production" === F, debug: c, ci: l, tty: h, minimal: void 0, minimalCLI: void 0, windows: /^win/i.test(f), darwin: /^darwin/i.test(f), linux: /^linux/i.test(f) };
    d.minimal = E || d.ci || d.test || !d.tty, d.minimalCLI = d.minimal;
    var p = Object.freeze(d);
    var m = {};
    m[m.Fatal = 0] = "Fatal", m[m.Error = 0] = "Error", m[m.Warn = 1] = "Warn", m[m.Log = 2] = "Log", m[m.Info = 3] = "Info", m[m.Success = 3] = "Success", m[m.Debug = 4] = "Debug", m[m.Trace = 5] = "Trace", m[m.Silent = -1 / 0] = "Silent", m[m.Verbose = 1 / 0] = "Verbose";
    var b = { silent: { level: -1 }, fatal: { level: m.Fatal }, error: { level: m.Error }, warn: { level: m.Warn }, log: { level: m.Log }, info: { level: m.Info }, success: { level: m.Success }, debug: { level: m.Debug }, trace: { level: m.Trace }, verbose: { level: m.Trace }, ready: { level: m.Info }, start: { level: m.Info } };
    function y(u2) {
      return D2 = u2, "[object Object]" === Object.prototype.toString.call(D2) && (!(!u2.message && !u2.args) && !u2.stack);
      var D2;
    }
    var B = false;
    var v = [];
    var _ = class {
      constructor(u2 = {}) {
        this._reporters = u2.reporters || [], this._types = u2.types || b, this.level = void 0 !== u2.level ? u2.level : 3, this._defaults = u2.defaults || {}, this._async = void 0 !== u2.async ? u2.async : void 0, this._stdout = u2.stdout, this._stderr = u2.stderr, this._mockFn = u2.mockFn, this._throttle = u2.throttle || 1e3, this._throttleMin = u2.throttleMin || 5;
        for (const u3 in this._types) {
          const D2 = { type: u3, ...this._types[u3], ...this._defaults };
          this[u3] = this._wrapLogFn(D2), this[u3].raw = this._wrapLogFn(D2, true);
        }
        this._mockFn && this.mockTypes(), this._lastLogSerialized = void 0, this._lastLog = void 0, this._lastLogTime = void 0, this._lastLogCount = 0, this._throttleTimeout = void 0;
      }
      get stdout() {
        return this._stdout || console._stdout;
      }
      get stderr() {
        return this._stderr || console._stderr;
      }
      create(u2) {
        return new _(Object.assign({ reporters: this._reporters, level: this.level, types: this._types, defaults: this._defaults, stdout: this._stdout, stderr: this._stderr, mockFn: this._mockFn }, u2));
      }
      withDefaults(u2) {
        return this.create({ defaults: Object.assign({}, this._defaults, u2) });
      }
      withTag(u2) {
        return this.withDefaults({ tag: this._defaults.tag ? this._defaults.tag + ":" + u2 : u2 });
      }
      addReporter(u2) {
        return this._reporters.push(u2), this;
      }
      removeReporter(u2) {
        if (u2) {
          const D2 = this._reporters.indexOf(u2);
          if (D2 >= 0)
            return this._reporters.splice(D2, 1);
        } else
          this._reporters.splice(0);
        return this;
      }
      setReporters(u2) {
        return this._reporters = Array.isArray(u2) ? u2 : [u2], this;
      }
      wrapAll() {
        this.wrapConsole(), this.wrapStd();
      }
      restoreAll() {
        this.restoreConsole(), this.restoreStd();
      }
      wrapConsole() {
        for (const u2 in this._types)
          console["__" + u2] || (console["__" + u2] = console[u2]), console[u2] = this[u2].raw;
      }
      restoreConsole() {
        for (const u2 in this._types)
          console["__" + u2] && (console[u2] = console["__" + u2], delete console["__" + u2]);
      }
      wrapStd() {
        this._wrapStream(this.stdout, "log"), this._wrapStream(this.stderr, "log");
      }
      _wrapStream(u2, D2) {
        u2 && (u2.__write || (u2.__write = u2.write), u2.write = (u3) => {
          this[D2].raw(String(u3).trim());
        });
      }
      restoreStd() {
        this._restoreStream(this.stdout), this._restoreStream(this.stderr);
      }
      _restoreStream(u2) {
        u2 && u2.__write && (u2.write = u2.__write, delete u2.__write);
      }
      pauseLogs() {
        B = true;
      }
      resumeLogs() {
        B = false;
        const u2 = v.splice(0);
        for (const D2 of u2)
          D2[0]._logFn(D2[1], D2[2]);
      }
      mockTypes(u2) {
        if (this._mockFn = u2 || this._mockFn, "function" == typeof this._mockFn)
          for (const u3 in this._types)
            this[u3] = this._mockFn(u3, this._types[u3]) || this[u3], this[u3].raw = this[u3];
      }
      _wrapLogFn(u2, D2) {
        return (...e2) => {
          if (!B)
            return this._logFn(u2, e2, D2);
          v.push([this, u2, e2, D2]);
        };
      }
      _logFn(u2, D2, e2) {
        if (u2.level > this.level)
          return !!this._async && Promise.resolve(false);
        const t2 = Object.assign({ date: /* @__PURE__ */ new Date(), args: [] }, u2);
        !e2 && 1 === D2.length && y(D2[0]) ? Object.assign(t2, D2[0]) : t2.args = Array.from(D2), t2.message && (t2.args.unshift(t2.message), delete t2.message), t2.additional && (Array.isArray(t2.additional) || (t2.additional = t2.additional.split("\n")), t2.args.push("\n" + t2.additional.join("\n")), delete t2.additional), t2.type = "string" == typeof t2.type ? t2.type.toLowerCase() : "", t2.tag = "string" == typeof t2.tag ? t2.tag.toLowerCase() : "";
        const r2 = (u3 = false) => {
          const D3 = this._lastLogCount - this._throttleMin;
          if (this._lastLog && D3 > 0) {
            const u4 = [...this._lastLog.args];
            D3 > 1 && u4.push(`(repeated ${D3} times)`), this._log({ ...this._lastLog, args: u4 }), this._lastLogCount = 1;
          }
          if (u3) {
            if (this._lastLog = t2, this._async)
              return this._logAsync(t2);
            this._log(t2);
          }
        };
        clearTimeout(this._throttleTimeout);
        const n2 = this._lastLogTime ? t2.date - this._lastLogTime : 0;
        if (this._lastLogTime = t2.date, n2 < this._throttle)
          try {
            const u3 = JSON.stringify([t2.type, t2.tag, t2.args]), D3 = this._lastLogSerialized === u3;
            if (this._lastLogSerialized = u3, D3 && (this._lastLogCount++, this._lastLogCount > this._throttleMin))
              return void (this._throttleTimeout = setTimeout(r2, this._throttle));
          } catch (u3) {
          }
        r2(true);
      }
      _log(u2) {
        for (const D2 of this._reporters)
          D2.log(u2, { async: false, stdout: this.stdout, stderr: this.stderr });
      }
      _logAsync(u2) {
        return Promise.all(this._reporters.map((D2) => D2.log(u2, { async: true, stdout: this.stdout, stderr: this.stderr })));
      }
    };
    function A(u2) {
      const D2 = process.cwd() + e.sep;
      return u2.split("\n").splice(1).map((u3) => u3.trim().replace("file://", "").replace(D2, ""));
    }
    _.prototype.add = _.prototype.addReporter, _.prototype.remove = _.prototype.removeReporter, _.prototype.clear = _.prototype.removeReporter, _.prototype.withScope = _.prototype.withTag, _.prototype.mock = _.prototype.mockTypes, _.prototype.pause = _.prototype.pauseLogs, _.prototype.resume = _.prototype.resumeLogs;
    var w = s(function(u2, D2) {
      u2.exports = function() {
        var u3 = "millisecond", D3 = "second", e2 = "minute", t2 = "hour", r2 = "day", n2 = "week", s2 = "month", o2 = "quarter", i2 = "year", a2 = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/, l2 = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c2 = function(u4, D4, e3) {
          var t3 = String(u4);
          return !t3 || t3.length >= D4 ? u4 : "" + Array(D4 + 1 - t3.length).join(e3) + u4;
        }, h2 = { s: c2, z: function(u4) {
          var D4 = -u4.utcOffset(), e3 = Math.abs(D4), t3 = Math.floor(e3 / 60), r3 = e3 % 60;
          return (D4 <= 0 ? "+" : "-") + c2(t3, 2, "0") + ":" + c2(r3, 2, "0");
        }, m: function(u4, D4) {
          var e3 = 12 * (D4.year() - u4.year()) + (D4.month() - u4.month()), t3 = u4.clone().add(e3, s2), r3 = D4 - t3 < 0, n3 = u4.clone().add(e3 + (r3 ? -1 : 1), s2);
          return Number(-(e3 + (D4 - t3) / (r3 ? t3 - n3 : n3 - t3)) || 0);
        }, a: function(u4) {
          return u4 < 0 ? Math.ceil(u4) || 0 : Math.floor(u4);
        }, p: function(a3) {
          return { M: s2, y: i2, w: n2, d: r2, D: "date", h: t2, m: e2, s: D3, ms: u3, Q: o2 }[a3] || String(a3 || "").toLowerCase().replace(/s$/, "");
        }, u: function(u4) {
          return void 0 === u4;
        } }, F2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, C2 = "en", f2 = {};
        f2[C2] = F2;
        var E2 = function(u4) {
          return u4 instanceof m2;
        }, g2 = function(u4, D4, e3) {
          var t3;
          if (!u4)
            return C2;
          if ("string" == typeof u4)
            f2[u4] && (t3 = u4), D4 && (f2[u4] = D4, t3 = u4);
          else {
            var r3 = u4.name;
            f2[r3] = u4, t3 = r3;
          }
          return !e3 && t3 && (C2 = t3), t3 || !e3 && C2;
        }, d2 = function(u4, D4) {
          if (E2(u4))
            return u4.clone();
          var e3 = "object" == typeof D4 ? D4 : {};
          return e3.date = u4, e3.args = arguments, new m2(e3);
        }, p2 = h2;
        p2.l = g2, p2.i = E2, p2.w = function(u4, D4) {
          return d2(u4, { locale: D4.$L, utc: D4.$u, $offset: D4.$offset });
        };
        var m2 = function() {
          function c3(u4) {
            this.$L = this.$L || g2(u4.locale, null, true), this.parse(u4);
          }
          var h3 = c3.prototype;
          return h3.parse = function(u4) {
            this.$d = function(u5) {
              var D4 = u5.date, e3 = u5.utc;
              if (null === D4)
                return /* @__PURE__ */ new Date(NaN);
              if (p2.u(D4))
                return /* @__PURE__ */ new Date();
              if (D4 instanceof Date)
                return new Date(D4);
              if ("string" == typeof D4 && !/Z$/i.test(D4)) {
                var t3 = D4.match(a2);
                if (t3)
                  return e3 ? new Date(Date.UTC(t3[1], t3[2] - 1, t3[3] || 1, t3[4] || 0, t3[5] || 0, t3[6] || 0, t3[7] || 0)) : new Date(t3[1], t3[2] - 1, t3[3] || 1, t3[4] || 0, t3[5] || 0, t3[6] || 0, t3[7] || 0);
              }
              return new Date(D4);
            }(u4), this.init();
          }, h3.init = function() {
            var u4 = this.$d;
            this.$y = u4.getFullYear(), this.$M = u4.getMonth(), this.$D = u4.getDate(), this.$W = u4.getDay(), this.$H = u4.getHours(), this.$m = u4.getMinutes(), this.$s = u4.getSeconds(), this.$ms = u4.getMilliseconds();
          }, h3.$utils = function() {
            return p2;
          }, h3.isValid = function() {
            return !("Invalid Date" === this.$d.toString());
          }, h3.isSame = function(u4, D4) {
            var e3 = d2(u4);
            return this.startOf(D4) <= e3 && e3 <= this.endOf(D4);
          }, h3.isAfter = function(u4, D4) {
            return d2(u4) < this.startOf(D4);
          }, h3.isBefore = function(u4, D4) {
            return this.endOf(D4) < d2(u4);
          }, h3.$g = function(u4, D4, e3) {
            return p2.u(u4) ? this[D4] : this.set(e3, u4);
          }, h3.year = function(u4) {
            return this.$g(u4, "$y", i2);
          }, h3.month = function(u4) {
            return this.$g(u4, "$M", s2);
          }, h3.day = function(u4) {
            return this.$g(u4, "$W", r2);
          }, h3.date = function(u4) {
            return this.$g(u4, "$D", "date");
          }, h3.hour = function(u4) {
            return this.$g(u4, "$H", t2);
          }, h3.minute = function(u4) {
            return this.$g(u4, "$m", e2);
          }, h3.second = function(u4) {
            return this.$g(u4, "$s", D3);
          }, h3.millisecond = function(D4) {
            return this.$g(D4, "$ms", u3);
          }, h3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, h3.valueOf = function() {
            return this.$d.getTime();
          }, h3.startOf = function(u4, o3) {
            var a3 = this, l3 = !!p2.u(o3) || o3, c4 = p2.p(u4), h4 = function(u5, D4) {
              var e3 = p2.w(a3.$u ? Date.UTC(a3.$y, D4, u5) : new Date(a3.$y, D4, u5), a3);
              return l3 ? e3 : e3.endOf(r2);
            }, F3 = function(u5, D4) {
              return p2.w(a3.toDate()[u5].apply(a3.toDate("s"), (l3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D4)), a3);
            }, C3 = this.$W, f3 = this.$M, E3 = this.$D, g3 = "set" + (this.$u ? "UTC" : "");
            switch (c4) {
              case i2:
                return l3 ? h4(1, 0) : h4(31, 11);
              case s2:
                return l3 ? h4(1, f3) : h4(0, f3 + 1);
              case n2:
                var d3 = this.$locale().weekStart || 0, m3 = (C3 < d3 ? C3 + 7 : C3) - d3;
                return h4(l3 ? E3 - m3 : E3 + (6 - m3), f3);
              case r2:
              case "date":
                return F3(g3 + "Hours", 0);
              case t2:
                return F3(g3 + "Minutes", 1);
              case e2:
                return F3(g3 + "Seconds", 2);
              case D3:
                return F3(g3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, h3.endOf = function(u4) {
            return this.startOf(u4, false);
          }, h3.$set = function(n3, o3) {
            var a3, l3 = p2.p(n3), c4 = "set" + (this.$u ? "UTC" : ""), h4 = (a3 = {}, a3.day = c4 + "Date", a3.date = c4 + "Date", a3[s2] = c4 + "Month", a3[i2] = c4 + "FullYear", a3[t2] = c4 + "Hours", a3[e2] = c4 + "Minutes", a3[D3] = c4 + "Seconds", a3[u3] = c4 + "Milliseconds", a3)[l3], F3 = l3 === r2 ? this.$D + (o3 - this.$W) : o3;
            if (l3 === s2 || l3 === i2) {
              var C3 = this.clone().set("date", 1);
              C3.$d[h4](F3), C3.init(), this.$d = C3.set("date", Math.min(this.$D, C3.daysInMonth())).toDate();
            } else
              h4 && this.$d[h4](F3);
            return this.init(), this;
          }, h3.set = function(u4, D4) {
            return this.clone().$set(u4, D4);
          }, h3.get = function(u4) {
            return this[p2.p(u4)]();
          }, h3.add = function(u4, o3) {
            var a3, l3 = this;
            u4 = Number(u4);
            var c4 = p2.p(o3), h4 = function(D4) {
              var e3 = d2(l3);
              return p2.w(e3.date(e3.date() + Math.round(D4 * u4)), l3);
            };
            if (c4 === s2)
              return this.set(s2, this.$M + u4);
            if (c4 === i2)
              return this.set(i2, this.$y + u4);
            if (c4 === r2)
              return h4(1);
            if (c4 === n2)
              return h4(7);
            var F3 = (a3 = {}, a3[e2] = 6e4, a3[t2] = 36e5, a3[D3] = 1e3, a3)[c4] || 1, C3 = this.$d.getTime() + u4 * F3;
            return p2.w(C3, this);
          }, h3.subtract = function(u4, D4) {
            return this.add(-1 * u4, D4);
          }, h3.format = function(u4) {
            var D4 = this;
            if (!this.isValid())
              return "Invalid Date";
            var e3 = u4 || "YYYY-MM-DDTHH:mm:ssZ", t3 = p2.z(this), r3 = this.$locale(), n3 = this.$H, s3 = this.$m, o3 = this.$M, i3 = r3.weekdays, a3 = r3.months, c4 = function(u5, t4, r4, n4) {
              return u5 && (u5[t4] || u5(D4, e3)) || r4[t4].substr(0, n4);
            }, h4 = function(u5) {
              return p2.s(n3 % 12 || 12, u5, "0");
            }, F3 = r3.meridiem || function(u5, D5, e4) {
              var t4 = u5 < 12 ? "AM" : "PM";
              return e4 ? t4.toLowerCase() : t4;
            }, C3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: o3 + 1, MM: p2.s(o3 + 1, 2, "0"), MMM: c4(r3.monthsShort, o3, a3, 3), MMMM: c4(a3, o3), D: this.$D, DD: p2.s(this.$D, 2, "0"), d: String(this.$W), dd: c4(r3.weekdaysMin, this.$W, i3, 2), ddd: c4(r3.weekdaysShort, this.$W, i3, 3), dddd: i3[this.$W], H: String(n3), HH: p2.s(n3, 2, "0"), h: h4(1), hh: h4(2), a: F3(n3, s3, true), A: F3(n3, s3, false), m: String(s3), mm: p2.s(s3, 2, "0"), s: String(this.$s), ss: p2.s(this.$s, 2, "0"), SSS: p2.s(this.$ms, 3, "0"), Z: t3 };
            return e3.replace(l2, function(u5, D5) {
              return D5 || C3[u5] || t3.replace(":", "");
            });
          }, h3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, h3.diff = function(u4, r3, a3) {
            var l3, c4 = p2.p(r3), h4 = d2(u4), F3 = 6e4 * (h4.utcOffset() - this.utcOffset()), C3 = this - h4, f3 = p2.m(this, h4);
            return f3 = (l3 = {}, l3[i2] = f3 / 12, l3[s2] = f3, l3[o2] = f3 / 3, l3[n2] = (C3 - F3) / 6048e5, l3.day = (C3 - F3) / 864e5, l3[t2] = C3 / 36e5, l3[e2] = C3 / 6e4, l3[D3] = C3 / 1e3, l3)[c4] || C3, a3 ? f3 : p2.a(f3);
          }, h3.daysInMonth = function() {
            return this.endOf(s2).$D;
          }, h3.$locale = function() {
            return f2[this.$L];
          }, h3.locale = function(u4, D4) {
            if (!u4)
              return this.$L;
            var e3 = this.clone(), t3 = g2(u4, D4, true);
            return t3 && (e3.$L = t3), e3;
          }, h3.clone = function() {
            return p2.w(this.$d, this);
          }, h3.toDate = function() {
            return new Date(this.valueOf());
          }, h3.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, h3.toISOString = function() {
            return this.$d.toISOString();
          }, h3.toString = function() {
            return this.$d.toUTCString();
          }, c3;
        }();
        return d2.prototype = m2.prototype, d2.extend = function(u4, D4) {
          return u4(D4, m2, d2), d2;
        }, d2.locale = g2, d2.isDayjs = E2, d2.unix = function(u4) {
          return d2(1e3 * u4);
        }, d2.en = f2[C2], d2.Ls = f2, d2;
      }();
    });
    var O = { dateFormat: "HH:mm:ss", formatOptions: { date: true, colors: false, compact: true } };
    var M = (u2) => u2 ? `[${u2}]` : "";
    var S = class {
      constructor(u2) {
        this.options = Object.assign({}, O, u2);
      }
      formatStack(u2) {
        return "  " + A(u2).join("\n  ");
      }
      formatArgs(u2) {
        const e2 = u2.map((u3) => u3 && "string" == typeof u3.stack ? u3.message + "\n" + this.formatStack(u3.stack) : u3);
        return "function" == typeof D.formatWithOptions ? D.formatWithOptions(this.options.formatOptions, ...e2) : D.format(...e2);
      }
      formatDate(u2) {
        return this.options.formatOptions.date ? function(u3, D2) {
          return w(D2).format(u3);
        }(this.options.dateFormat, u2) : "";
      }
      filterAndJoin(u2) {
        return u2.filter((u3) => u3).join(" ");
      }
      formatLogObj(u2) {
        const D2 = this.formatArgs(u2.args);
        return this.filterAndJoin([M(u2.type), M(u2.tag), D2]);
      }
      log(u2, { async: D2, stdout: e2, stderr: r2 } = {}) {
        return function(u3, D3, e3 = "default") {
          const r3 = D3.__write || D3.write;
          switch (e3) {
            case "async":
              return new Promise((e4) => {
                true === r3.call(D3, u3) ? e4() : D3.once("drain", () => {
                  e4();
                });
              });
            case "sync":
              return t.writeSync(D3.fd, u3);
            default:
              return r3.call(D3, u3);
          }
        }(this.formatLogObj(u2, { width: e2.columns || 0 }) + "\n", u2.level < 2 ? r2 : e2, D2 ? "async" : "default");
      }
    };
    var I = (u2) => "string" == typeof u2 ? u2.replace((({ onlyFirst: u3 = false } = {}) => {
      const D2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(D2, u3 ? void 0 : "g");
    })(), "") : u2;
    var k = (u2) => !Number.isNaN(u2) && (u2 >= 4352 && (u2 <= 4447 || 9001 === u2 || 9002 === u2 || 11904 <= u2 && u2 <= 12871 && 12351 !== u2 || 12880 <= u2 && u2 <= 19903 || 19968 <= u2 && u2 <= 42182 || 43360 <= u2 && u2 <= 43388 || 44032 <= u2 && u2 <= 55203 || 63744 <= u2 && u2 <= 64255 || 65040 <= u2 && u2 <= 65049 || 65072 <= u2 && u2 <= 65131 || 65281 <= u2 && u2 <= 65376 || 65504 <= u2 && u2 <= 65510 || 110592 <= u2 && u2 <= 110593 || 127488 <= u2 && u2 <= 127569 || 131072 <= u2 && u2 <= 262141));
    var R = k;
    var T = k;
    R.default = T;
    var L = (u2) => {
      if ("string" != typeof (u2 = u2.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) || 0 === u2.length)
        return 0;
      u2 = I(u2);
      let D2 = 0;
      for (let e2 = 0; e2 < u2.length; e2++) {
        const t2 = u2.codePointAt(e2);
        t2 <= 31 || t2 >= 127 && t2 <= 159 || (t2 >= 768 && t2 <= 879 || (t2 > 65535 && e2++, D2 += R(t2) ? 2 : 1));
      }
      return D2;
    };
    var $ = L;
    var x = L;
    $.default = x;
    var U = /[|\\{}()[\]^$+*?.]/g;
    var j = function(u2) {
      if ("string" != typeof u2)
        throw new TypeError("Expected a string");
      return u2.replace(U, "\\$&");
    };
    var { platform: P } = process;
    var N = { tick: "\u2714", cross: "\u2716", star: "\u2605", square: "\u2587", squareSmall: "\u25FB", squareSmallFilled: "\u25FC", play: "\u25B6", circle: "\u25EF", circleFilled: "\u25C9", circleDotted: "\u25CC", circleDouble: "\u25CE", circleCircle: "\u24DE", circleCross: "\u24E7", circlePipe: "\u24BE", circleQuestionMark: "?\u20DD", bullet: "\u25CF", dot: "\u2024", line: "\u2500", ellipsis: "\u2026", pointer: "\u276F", pointerSmall: "\u203A", info: "\u2139", warning: "\u26A0", hamburger: "\u2630", smiley: "\u32E1", mustache: "\u0DF4", heart: "\u2665", nodejs: "\u2B22", arrowUp: "\u2191", arrowDown: "\u2193", arrowLeft: "\u2190", arrowRight: "\u2192", radioOn: "\u25C9", radioOff: "\u25EF", checkboxOn: "\u2612", checkboxOff: "\u2610", checkboxCircleOn: "\u24E7", checkboxCircleOff: "\u24BE", questionMarkPrefix: "?\u20DD", oneHalf: "\xBD", oneThird: "\u2153", oneQuarter: "\xBC", oneFifth: "\u2155", oneSixth: "\u2159", oneSeventh: "\u2150", oneEighth: "\u215B", oneNinth: "\u2151", oneTenth: "\u2152", twoThirds: "\u2154", twoFifths: "\u2156", threeQuarters: "\xBE", threeFifths: "\u2157", threeEighths: "\u215C", fourFifths: "\u2158", fiveSixths: "\u215A", fiveEighths: "\u215D", sevenEighths: "\u215E" };
    var q = { tick: "\u221A", cross: "\xD7", star: "*", square: "\u2588", squareSmall: "[ ]", squareSmallFilled: "[\u2588]", play: "\u25BA", circle: "( )", circleFilled: "(*)", circleDotted: "( )", circleDouble: "( )", circleCircle: "(\u25CB)", circleCross: "(\xD7)", circlePipe: "(\u2502)", circleQuestionMark: "(?)", bullet: "*", dot: ".", line: "\u2500", ellipsis: "...", pointer: ">", pointerSmall: "\xBB", info: "i", warning: "\u203C", hamburger: "\u2261", smiley: "\u263A", mustache: "\u250C\u2500\u2510", heart: N.heart, nodejs: "\u2666", arrowUp: N.arrowUp, arrowDown: N.arrowDown, arrowLeft: N.arrowLeft, arrowRight: N.arrowRight, radioOn: "(*)", radioOff: "( )", checkboxOn: "[\xD7]", checkboxOff: "[ ]", checkboxCircleOn: "(\xD7)", checkboxCircleOff: "( )", questionMarkPrefix: "\uFF1F", oneHalf: "1/2", oneThird: "1/3", oneQuarter: "1/4", oneFifth: "1/5", oneSixth: "1/6", oneSeventh: "1/7", oneEighth: "1/8", oneNinth: "1/9", oneTenth: "1/10", twoThirds: "2/3", twoFifths: "2/5", threeQuarters: "3/4", threeFifths: "3/5", threeEighths: "3/8", fourFifths: "4/5", fiveSixths: "5/6", fiveEighths: "5/8", sevenEighths: "7/8" };
    "linux" === P && (N.questionMarkPrefix = "?");
    var Y = "win32" === P ? q : N;
    var H = Object.assign((u2) => {
      if (Y === N)
        return u2;
      for (const [D2, e2] of Object.entries(N))
        e2 !== Y[D2] && (u2 = u2.replace(new RegExp(j(e2), "g"), Y[D2]));
      return u2;
    }, Y);
    var V = N;
    var W = q;
    H.main = V, H.windows = W;
    var G = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    var z = {};
    for (const u2 of Object.keys(G))
      z[G[u2]] = u2;
    var Q = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
    var J = Q;
    for (const u2 of Object.keys(Q)) {
      if (!("channels" in Q[u2]))
        throw new Error("missing channels property: " + u2);
      if (!("labels" in Q[u2]))
        throw new Error("missing channel labels property: " + u2);
      if (Q[u2].labels.length !== Q[u2].channels)
        throw new Error("channel and label counts mismatch: " + u2);
      const { channels: D2, labels: e2 } = Q[u2];
      delete Q[u2].channels, delete Q[u2].labels, Object.defineProperty(Q[u2], "channels", { value: D2 }), Object.defineProperty(Q[u2], "labels", { value: e2 });
    }
    function K(u2) {
      const D2 = function() {
        const u3 = {}, D3 = Object.keys(J);
        for (let e3 = D3.length, t2 = 0; t2 < e3; t2++)
          u3[D3[t2]] = { distance: -1, parent: null };
        return u3;
      }(), e2 = [u2];
      for (D2[u2].distance = 0; e2.length; ) {
        const u3 = e2.pop(), t2 = Object.keys(J[u3]);
        for (let r2 = t2.length, n2 = 0; n2 < r2; n2++) {
          const r3 = t2[n2], s2 = D2[r3];
          -1 === s2.distance && (s2.distance = D2[u3].distance + 1, s2.parent = u3, e2.unshift(r3));
        }
      }
      return D2;
    }
    function Z(u2, D2) {
      return function(e2) {
        return D2(u2(e2));
      };
    }
    function X(u2, D2) {
      const e2 = [D2[u2].parent, u2];
      let t2 = J[D2[u2].parent][u2], r2 = D2[u2].parent;
      for (; D2[r2].parent; )
        e2.unshift(D2[r2].parent), t2 = Z(J[D2[r2].parent][r2], t2), r2 = D2[r2].parent;
      return t2.conversion = e2, t2;
    }
    Q.rgb.hsl = function(u2) {
      const D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255, r2 = Math.min(D2, e2, t2), n2 = Math.max(D2, e2, t2), s2 = n2 - r2;
      let o2, i2;
      n2 === r2 ? o2 = 0 : D2 === n2 ? o2 = (e2 - t2) / s2 : e2 === n2 ? o2 = 2 + (t2 - D2) / s2 : t2 === n2 && (o2 = 4 + (D2 - e2) / s2), o2 = Math.min(60 * o2, 360), o2 < 0 && (o2 += 360);
      const a2 = (r2 + n2) / 2;
      return i2 = n2 === r2 ? 0 : a2 <= 0.5 ? s2 / (n2 + r2) : s2 / (2 - n2 - r2), [o2, 100 * i2, 100 * a2];
    }, Q.rgb.hsv = function(u2) {
      let D2, e2, t2, r2, n2;
      const s2 = u2[0] / 255, o2 = u2[1] / 255, i2 = u2[2] / 255, a2 = Math.max(s2, o2, i2), l2 = a2 - Math.min(s2, o2, i2), c2 = function(u3) {
        return (a2 - u3) / 6 / l2 + 0.5;
      };
      return 0 === l2 ? (r2 = 0, n2 = 0) : (n2 = l2 / a2, D2 = c2(s2), e2 = c2(o2), t2 = c2(i2), s2 === a2 ? r2 = t2 - e2 : o2 === a2 ? r2 = 1 / 3 + D2 - t2 : i2 === a2 && (r2 = 2 / 3 + e2 - D2), r2 < 0 ? r2 += 1 : r2 > 1 && (r2 -= 1)), [360 * r2, 100 * n2, 100 * a2];
    }, Q.rgb.hwb = function(u2) {
      const D2 = u2[0], e2 = u2[1];
      let t2 = u2[2];
      const r2 = Q.rgb.hsl(u2)[0], n2 = 1 / 255 * Math.min(D2, Math.min(e2, t2));
      return t2 = 1 - 1 / 255 * Math.max(D2, Math.max(e2, t2)), [r2, 100 * n2, 100 * t2];
    }, Q.rgb.cmyk = function(u2) {
      const D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255, r2 = Math.min(1 - D2, 1 - e2, 1 - t2);
      return [100 * ((1 - D2 - r2) / (1 - r2) || 0), 100 * ((1 - e2 - r2) / (1 - r2) || 0), 100 * ((1 - t2 - r2) / (1 - r2) || 0), 100 * r2];
    }, Q.rgb.keyword = function(u2) {
      const D2 = z[u2];
      if (D2)
        return D2;
      let e2, t2 = 1 / 0;
      for (const D3 of Object.keys(G)) {
        const s2 = (n2 = G[D3], ((r2 = u2)[0] - n2[0]) ** 2 + (r2[1] - n2[1]) ** 2 + (r2[2] - n2[2]) ** 2);
        s2 < t2 && (t2 = s2, e2 = D3);
      }
      var r2, n2;
      return e2;
    }, Q.keyword.rgb = function(u2) {
      return G[u2];
    }, Q.rgb.xyz = function(u2) {
      let D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255;
      D2 = D2 > 0.04045 ? ((D2 + 0.055) / 1.055) ** 2.4 : D2 / 12.92, e2 = e2 > 0.04045 ? ((e2 + 0.055) / 1.055) ** 2.4 : e2 / 12.92, t2 = t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92;
      return [100 * (0.4124 * D2 + 0.3576 * e2 + 0.1805 * t2), 100 * (0.2126 * D2 + 0.7152 * e2 + 0.0722 * t2), 100 * (0.0193 * D2 + 0.1192 * e2 + 0.9505 * t2)];
    }, Q.rgb.lab = function(u2) {
      const D2 = Q.rgb.xyz(u2);
      let e2 = D2[0], t2 = D2[1], r2 = D2[2];
      e2 /= 95.047, t2 /= 100, r2 /= 108.883, e2 = e2 > 8856e-6 ? e2 ** (1 / 3) : 7.787 * e2 + 16 / 116, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116;
      return [116 * t2 - 16, 500 * (e2 - t2), 200 * (t2 - r2)];
    }, Q.hsl.rgb = function(u2) {
      const D2 = u2[0] / 360, e2 = u2[1] / 100, t2 = u2[2] / 100;
      let r2, n2, s2;
      if (0 === e2)
        return s2 = 255 * t2, [s2, s2, s2];
      r2 = t2 < 0.5 ? t2 * (1 + e2) : t2 + e2 - t2 * e2;
      const o2 = 2 * t2 - r2, i2 = [0, 0, 0];
      for (let u3 = 0; u3 < 3; u3++)
        n2 = D2 + 1 / 3 * -(u3 - 1), n2 < 0 && n2++, n2 > 1 && n2--, s2 = 6 * n2 < 1 ? o2 + 6 * (r2 - o2) * n2 : 2 * n2 < 1 ? r2 : 3 * n2 < 2 ? o2 + (r2 - o2) * (2 / 3 - n2) * 6 : o2, i2[u3] = 255 * s2;
      return i2;
    }, Q.hsl.hsv = function(u2) {
      const D2 = u2[0];
      let e2 = u2[1] / 100, t2 = u2[2] / 100, r2 = e2;
      const n2 = Math.max(t2, 0.01);
      t2 *= 2, e2 *= t2 <= 1 ? t2 : 2 - t2, r2 *= n2 <= 1 ? n2 : 2 - n2;
      return [D2, 100 * (0 === t2 ? 2 * r2 / (n2 + r2) : 2 * e2 / (t2 + e2)), 100 * ((t2 + e2) / 2)];
    }, Q.hsv.rgb = function(u2) {
      const D2 = u2[0] / 60, e2 = u2[1] / 100;
      let t2 = u2[2] / 100;
      const r2 = Math.floor(D2) % 6, n2 = D2 - Math.floor(D2), s2 = 255 * t2 * (1 - e2), o2 = 255 * t2 * (1 - e2 * n2), i2 = 255 * t2 * (1 - e2 * (1 - n2));
      switch (t2 *= 255, r2) {
        case 0:
          return [t2, i2, s2];
        case 1:
          return [o2, t2, s2];
        case 2:
          return [s2, t2, i2];
        case 3:
          return [s2, o2, t2];
        case 4:
          return [i2, s2, t2];
        case 5:
          return [t2, s2, o2];
      }
    }, Q.hsv.hsl = function(u2) {
      const D2 = u2[0], e2 = u2[1] / 100, t2 = u2[2] / 100, r2 = Math.max(t2, 0.01);
      let n2, s2;
      s2 = (2 - e2) * t2;
      const o2 = (2 - e2) * r2;
      return n2 = e2 * r2, n2 /= o2 <= 1 ? o2 : 2 - o2, n2 = n2 || 0, s2 /= 2, [D2, 100 * n2, 100 * s2];
    }, Q.hwb.rgb = function(u2) {
      const D2 = u2[0] / 360;
      let e2 = u2[1] / 100, t2 = u2[2] / 100;
      const r2 = e2 + t2;
      let n2;
      r2 > 1 && (e2 /= r2, t2 /= r2);
      const s2 = Math.floor(6 * D2), o2 = 1 - t2;
      n2 = 6 * D2 - s2, 0 != (1 & s2) && (n2 = 1 - n2);
      const i2 = e2 + n2 * (o2 - e2);
      let a2, l2, c2;
      switch (s2) {
        default:
        case 6:
        case 0:
          a2 = o2, l2 = i2, c2 = e2;
          break;
        case 1:
          a2 = i2, l2 = o2, c2 = e2;
          break;
        case 2:
          a2 = e2, l2 = o2, c2 = i2;
          break;
        case 3:
          a2 = e2, l2 = i2, c2 = o2;
          break;
        case 4:
          a2 = i2, l2 = e2, c2 = o2;
          break;
        case 5:
          a2 = o2, l2 = e2, c2 = i2;
      }
      return [255 * a2, 255 * l2, 255 * c2];
    }, Q.cmyk.rgb = function(u2) {
      const D2 = u2[0] / 100, e2 = u2[1] / 100, t2 = u2[2] / 100, r2 = u2[3] / 100;
      return [255 * (1 - Math.min(1, D2 * (1 - r2) + r2)), 255 * (1 - Math.min(1, e2 * (1 - r2) + r2)), 255 * (1 - Math.min(1, t2 * (1 - r2) + r2))];
    }, Q.xyz.rgb = function(u2) {
      const D2 = u2[0] / 100, e2 = u2[1] / 100, t2 = u2[2] / 100;
      let r2, n2, s2;
      return r2 = 3.2406 * D2 + -1.5372 * e2 + -0.4986 * t2, n2 = -0.9689 * D2 + 1.8758 * e2 + 0.0415 * t2, s2 = 0.0557 * D2 + -0.204 * e2 + 1.057 * t2, r2 = r2 > 31308e-7 ? 1.055 * r2 ** (1 / 2.4) - 0.055 : 12.92 * r2, n2 = n2 > 31308e-7 ? 1.055 * n2 ** (1 / 2.4) - 0.055 : 12.92 * n2, s2 = s2 > 31308e-7 ? 1.055 * s2 ** (1 / 2.4) - 0.055 : 12.92 * s2, r2 = Math.min(Math.max(0, r2), 1), n2 = Math.min(Math.max(0, n2), 1), s2 = Math.min(Math.max(0, s2), 1), [255 * r2, 255 * n2, 255 * s2];
    }, Q.xyz.lab = function(u2) {
      let D2 = u2[0], e2 = u2[1], t2 = u2[2];
      D2 /= 95.047, e2 /= 100, t2 /= 108.883, D2 = D2 > 8856e-6 ? D2 ** (1 / 3) : 7.787 * D2 + 16 / 116, e2 = e2 > 8856e-6 ? e2 ** (1 / 3) : 7.787 * e2 + 16 / 116, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116;
      return [116 * e2 - 16, 500 * (D2 - e2), 200 * (e2 - t2)];
    }, Q.lab.xyz = function(u2) {
      let D2, e2, t2;
      e2 = (u2[0] + 16) / 116, D2 = u2[1] / 500 + e2, t2 = e2 - u2[2] / 200;
      const r2 = e2 ** 3, n2 = D2 ** 3, s2 = t2 ** 3;
      return e2 = r2 > 8856e-6 ? r2 : (e2 - 16 / 116) / 7.787, D2 = n2 > 8856e-6 ? n2 : (D2 - 16 / 116) / 7.787, t2 = s2 > 8856e-6 ? s2 : (t2 - 16 / 116) / 7.787, D2 *= 95.047, e2 *= 100, t2 *= 108.883, [D2, e2, t2];
    }, Q.lab.lch = function(u2) {
      const D2 = u2[0], e2 = u2[1], t2 = u2[2];
      let r2;
      r2 = 360 * Math.atan2(t2, e2) / 2 / Math.PI, r2 < 0 && (r2 += 360);
      return [D2, Math.sqrt(e2 * e2 + t2 * t2), r2];
    }, Q.lch.lab = function(u2) {
      const D2 = u2[0], e2 = u2[1], t2 = u2[2] / 360 * 2 * Math.PI;
      return [D2, e2 * Math.cos(t2), e2 * Math.sin(t2)];
    }, Q.rgb.ansi16 = function(u2, D2 = null) {
      const [e2, t2, r2] = u2;
      let n2 = null === D2 ? Q.rgb.hsv(u2)[2] : D2;
      if (n2 = Math.round(n2 / 50), 0 === n2)
        return 30;
      let s2 = 30 + (Math.round(r2 / 255) << 2 | Math.round(t2 / 255) << 1 | Math.round(e2 / 255));
      return 2 === n2 && (s2 += 60), s2;
    }, Q.hsv.ansi16 = function(u2) {
      return Q.rgb.ansi16(Q.hsv.rgb(u2), u2[2]);
    }, Q.rgb.ansi256 = function(u2) {
      const D2 = u2[0], e2 = u2[1], t2 = u2[2];
      if (D2 === e2 && e2 === t2)
        return D2 < 8 ? 16 : D2 > 248 ? 231 : Math.round((D2 - 8) / 247 * 24) + 232;
      return 16 + 36 * Math.round(D2 / 255 * 5) + 6 * Math.round(e2 / 255 * 5) + Math.round(t2 / 255 * 5);
    }, Q.ansi16.rgb = function(u2) {
      let D2 = u2 % 10;
      if (0 === D2 || 7 === D2)
        return u2 > 50 && (D2 += 3.5), D2 = D2 / 10.5 * 255, [D2, D2, D2];
      const e2 = 0.5 * (1 + ~~(u2 > 50));
      return [(1 & D2) * e2 * 255, (D2 >> 1 & 1) * e2 * 255, (D2 >> 2 & 1) * e2 * 255];
    }, Q.ansi256.rgb = function(u2) {
      if (u2 >= 232) {
        const D3 = 10 * (u2 - 232) + 8;
        return [D3, D3, D3];
      }
      let D2;
      u2 -= 16;
      return [Math.floor(u2 / 36) / 5 * 255, Math.floor((D2 = u2 % 36) / 6) / 5 * 255, D2 % 6 / 5 * 255];
    }, Q.rgb.hex = function(u2) {
      const D2 = (((255 & Math.round(u2[0])) << 16) + ((255 & Math.round(u2[1])) << 8) + (255 & Math.round(u2[2]))).toString(16).toUpperCase();
      return "000000".substring(D2.length) + D2;
    }, Q.hex.rgb = function(u2) {
      const D2 = u2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!D2)
        return [0, 0, 0];
      let e2 = D2[0];
      3 === D2[0].length && (e2 = e2.split("").map((u3) => u3 + u3).join(""));
      const t2 = parseInt(e2, 16);
      return [t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2];
    }, Q.rgb.hcg = function(u2) {
      const D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255, r2 = Math.max(Math.max(D2, e2), t2), n2 = Math.min(Math.min(D2, e2), t2), s2 = r2 - n2;
      let o2, i2;
      return o2 = s2 < 1 ? n2 / (1 - s2) : 0, i2 = s2 <= 0 ? 0 : r2 === D2 ? (e2 - t2) / s2 % 6 : r2 === e2 ? 2 + (t2 - D2) / s2 : 4 + (D2 - e2) / s2, i2 /= 6, i2 %= 1, [360 * i2, 100 * s2, 100 * o2];
    }, Q.hsl.hcg = function(u2) {
      const D2 = u2[1] / 100, e2 = u2[2] / 100, t2 = e2 < 0.5 ? 2 * D2 * e2 : 2 * D2 * (1 - e2);
      let r2 = 0;
      return t2 < 1 && (r2 = (e2 - 0.5 * t2) / (1 - t2)), [u2[0], 100 * t2, 100 * r2];
    }, Q.hsv.hcg = function(u2) {
      const D2 = u2[1] / 100, e2 = u2[2] / 100, t2 = D2 * e2;
      let r2 = 0;
      return t2 < 1 && (r2 = (e2 - t2) / (1 - t2)), [u2[0], 100 * t2, 100 * r2];
    }, Q.hcg.rgb = function(u2) {
      const D2 = u2[0] / 360, e2 = u2[1] / 100, t2 = u2[2] / 100;
      if (0 === e2)
        return [255 * t2, 255 * t2, 255 * t2];
      const r2 = [0, 0, 0], n2 = D2 % 1 * 6, s2 = n2 % 1, o2 = 1 - s2;
      let i2 = 0;
      switch (Math.floor(n2)) {
        case 0:
          r2[0] = 1, r2[1] = s2, r2[2] = 0;
          break;
        case 1:
          r2[0] = o2, r2[1] = 1, r2[2] = 0;
          break;
        case 2:
          r2[0] = 0, r2[1] = 1, r2[2] = s2;
          break;
        case 3:
          r2[0] = 0, r2[1] = o2, r2[2] = 1;
          break;
        case 4:
          r2[0] = s2, r2[1] = 0, r2[2] = 1;
          break;
        default:
          r2[0] = 1, r2[1] = 0, r2[2] = o2;
      }
      return i2 = (1 - e2) * t2, [255 * (e2 * r2[0] + i2), 255 * (e2 * r2[1] + i2), 255 * (e2 * r2[2] + i2)];
    }, Q.hcg.hsv = function(u2) {
      const D2 = u2[1] / 100, e2 = D2 + u2[2] / 100 * (1 - D2);
      let t2 = 0;
      return e2 > 0 && (t2 = D2 / e2), [u2[0], 100 * t2, 100 * e2];
    }, Q.hcg.hsl = function(u2) {
      const D2 = u2[1] / 100, e2 = u2[2] / 100 * (1 - D2) + 0.5 * D2;
      let t2 = 0;
      return e2 > 0 && e2 < 0.5 ? t2 = D2 / (2 * e2) : e2 >= 0.5 && e2 < 1 && (t2 = D2 / (2 * (1 - e2))), [u2[0], 100 * t2, 100 * e2];
    }, Q.hcg.hwb = function(u2) {
      const D2 = u2[1] / 100, e2 = D2 + u2[2] / 100 * (1 - D2);
      return [u2[0], 100 * (e2 - D2), 100 * (1 - e2)];
    }, Q.hwb.hcg = function(u2) {
      const D2 = u2[1] / 100, e2 = 1 - u2[2] / 100, t2 = e2 - D2;
      let r2 = 0;
      return t2 < 1 && (r2 = (e2 - t2) / (1 - t2)), [u2[0], 100 * t2, 100 * r2];
    }, Q.apple.rgb = function(u2) {
      return [u2[0] / 65535 * 255, u2[1] / 65535 * 255, u2[2] / 65535 * 255];
    }, Q.rgb.apple = function(u2) {
      return [u2[0] / 255 * 65535, u2[1] / 255 * 65535, u2[2] / 255 * 65535];
    }, Q.gray.rgb = function(u2) {
      return [u2[0] / 100 * 255, u2[0] / 100 * 255, u2[0] / 100 * 255];
    }, Q.gray.hsl = function(u2) {
      return [0, 0, u2[0]];
    }, Q.gray.hsv = Q.gray.hsl, Q.gray.hwb = function(u2) {
      return [0, 100, u2[0]];
    }, Q.gray.cmyk = function(u2) {
      return [0, 0, 0, u2[0]];
    }, Q.gray.lab = function(u2) {
      return [u2[0], 0, 0];
    }, Q.gray.hex = function(u2) {
      const D2 = 255 & Math.round(u2[0] / 100 * 255), e2 = ((D2 << 16) + (D2 << 8) + D2).toString(16).toUpperCase();
      return "000000".substring(e2.length) + e2;
    }, Q.rgb.gray = function(u2) {
      return [(u2[0] + u2[1] + u2[2]) / 3 / 255 * 100];
    };
    var uu = {};
    Object.keys(J).forEach((u2) => {
      uu[u2] = {}, Object.defineProperty(uu[u2], "channels", { value: J[u2].channels }), Object.defineProperty(uu[u2], "labels", { value: J[u2].labels });
      const D2 = function(u3) {
        const D3 = K(u3), e2 = {}, t2 = Object.keys(D3);
        for (let u4 = t2.length, r2 = 0; r2 < u4; r2++) {
          const u5 = t2[r2];
          null !== D3[u5].parent && (e2[u5] = X(u5, D3));
        }
        return e2;
      }(u2);
      Object.keys(D2).forEach((e2) => {
        const t2 = D2[e2];
        uu[u2][e2] = function(u3) {
          const D3 = function(...D4) {
            const e3 = D4[0];
            if (null == e3)
              return e3;
            e3.length > 1 && (D4 = e3);
            const t3 = u3(D4);
            if ("object" == typeof t3)
              for (let u4 = t3.length, D5 = 0; D5 < u4; D5++)
                t3[D5] = Math.round(t3[D5]);
            return t3;
          };
          return "conversion" in u3 && (D3.conversion = u3.conversion), D3;
        }(t2), uu[u2][e2].raw = function(u3) {
          const D3 = function(...D4) {
            const e3 = D4[0];
            return null == e3 ? e3 : (e3.length > 1 && (D4 = e3), u3(D4));
          };
          return "conversion" in u3 && (D3.conversion = u3.conversion), D3;
        }(t2);
      });
    });
    var Du = uu;
    var eu = s(function(u2) {
      const D2 = (u3, D3) => (...e3) => `\x1B[${u3(...e3) + D3}m`, e2 = (u3, D3) => (...e3) => {
        const t3 = u3(...e3);
        return `\x1B[${38 + D3};5;${t3}m`;
      }, t2 = (u3, D3) => (...e3) => {
        const t3 = u3(...e3);
        return `\x1B[${38 + D3};2;${t3[0]};${t3[1]};${t3[2]}m`;
      }, r2 = (u3) => u3, n2 = (u3, D3, e3) => [u3, D3, e3], s2 = (u3, D3, e3) => {
        Object.defineProperty(u3, D3, { get: () => {
          const t3 = e3();
          return Object.defineProperty(u3, D3, { value: t3, enumerable: true, configurable: true }), t3;
        }, enumerable: true, configurable: true });
      };
      let o2;
      const i2 = (u3, D3, e3, t3) => {
        void 0 === o2 && (o2 = Du);
        const r3 = t3 ? 10 : 0, n3 = {};
        for (const [t4, s3] of Object.entries(o2)) {
          const o3 = "ansi16" === t4 ? "ansi" : t4;
          t4 === D3 ? n3[o3] = u3(e3, r3) : "object" == typeof s3 && (n3[o3] = u3(s3[D3], r3));
        }
        return n3;
      };
      Object.defineProperty(u2, "exports", { enumerable: true, get: function() {
        const u3 = /* @__PURE__ */ new Map(), o3 = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
        o3.color.gray = o3.color.blackBright, o3.bgColor.bgGray = o3.bgColor.bgBlackBright, o3.color.grey = o3.color.blackBright, o3.bgColor.bgGrey = o3.bgColor.bgBlackBright;
        for (const [D3, e3] of Object.entries(o3)) {
          for (const [D4, t3] of Object.entries(e3))
            o3[D4] = { open: `\x1B[${t3[0]}m`, close: `\x1B[${t3[1]}m` }, e3[D4] = o3[D4], u3.set(t3[0], t3[1]);
          Object.defineProperty(o3, D3, { value: e3, enumerable: false });
        }
        return Object.defineProperty(o3, "codes", { value: u3, enumerable: false }), o3.color.close = "\x1B[39m", o3.bgColor.close = "\x1B[49m", s2(o3.color, "ansi", () => i2(D2, "ansi16", r2, false)), s2(o3.color, "ansi256", () => i2(e2, "ansi256", r2, false)), s2(o3.color, "ansi16m", () => i2(t2, "rgb", n2, false)), s2(o3.bgColor, "ansi", () => i2(D2, "ansi16", r2, true)), s2(o3.bgColor, "ansi256", () => i2(e2, "ansi256", r2, true)), s2(o3.bgColor, "ansi16m", () => i2(t2, "rgb", n2, true)), o3;
      } });
    });
    var tu = (u2, D2 = process.argv) => {
      const e2 = u2.startsWith("-") ? "" : 1 === u2.length ? "-" : "--", t2 = D2.indexOf(e2 + u2), r2 = D2.indexOf("--");
      return -1 !== t2 && (-1 === r2 || t2 < r2);
    };
    var { env: ru } = process;
    var nu;
    function su(u2) {
      return 0 !== u2 && { level: u2, hasBasic: true, has256: u2 >= 2, has16m: u2 >= 3 };
    }
    function ou(u2, D2) {
      if (0 === nu)
        return 0;
      if (tu("color=16m") || tu("color=full") || tu("color=truecolor"))
        return 3;
      if (tu("color=256"))
        return 2;
      if (u2 && !D2 && void 0 === nu)
        return 0;
      const e2 = nu || 0;
      if ("dumb" === ru.TERM)
        return e2;
      if ("win32" === process.platform) {
        const u3 = r.release().split(".");
        return Number(u3[0]) >= 10 && Number(u3[2]) >= 10586 ? Number(u3[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in ru)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((u3) => u3 in ru) || "codeship" === ru.CI_NAME ? 1 : e2;
      if ("TEAMCITY_VERSION" in ru)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ru.TEAMCITY_VERSION) ? 1 : 0;
      if ("GITHUB_ACTIONS" in ru)
        return 1;
      if ("truecolor" === ru.COLORTERM)
        return 3;
      if ("TERM_PROGRAM" in ru) {
        const u3 = parseInt((ru.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (ru.TERM_PROGRAM) {
          case "iTerm.app":
            return u3 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(ru.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(ru.TERM) || "COLORTERM" in ru ? 1 : e2;
    }
    tu("no-color") || tu("no-colors") || tu("color=false") || tu("color=never") ? nu = 0 : (tu("color") || tu("colors") || tu("color=true") || tu("color=always")) && (nu = 1), "FORCE_COLOR" in ru && (nu = "true" === ru.FORCE_COLOR ? 1 : "false" === ru.FORCE_COLOR ? 0 : 0 === ru.FORCE_COLOR.length ? 1 : Math.min(parseInt(ru.FORCE_COLOR, 10), 3));
    var iu = { supportsColor: function(u2) {
      return su(ou(u2, u2 && u2.isTTY));
    }, stdout: su(ou(true, n.isatty(1))), stderr: su(ou(true, n.isatty(2))) };
    var au = { stringReplaceAll: (u2, D2, e2) => {
      let t2 = u2.indexOf(D2);
      if (-1 === t2)
        return u2;
      const r2 = D2.length;
      let n2 = 0, s2 = "";
      do {
        s2 += u2.substr(n2, t2 - n2) + D2 + e2, n2 = t2 + r2, t2 = u2.indexOf(D2, n2);
      } while (-1 !== t2);
      return s2 += u2.substr(n2), s2;
    }, stringEncaseCRLFWithFirstIndex: (u2, D2, e2, t2) => {
      let r2 = 0, n2 = "";
      do {
        const s2 = "\r" === u2[t2 - 1];
        n2 += u2.substr(r2, (s2 ? t2 - 1 : t2) - r2) + D2 + (s2 ? "\r\n" : "\n") + e2, r2 = t2 + 1, t2 = u2.indexOf("\n", r2);
      } while (-1 !== t2);
      return n2 += u2.substr(r2), n2;
    } };
    var lu = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var cu = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var hu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var Fu = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var Cu = /* @__PURE__ */ new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
    function fu(u2) {
      const D2 = "u" === u2[0], e2 = "{" === u2[1];
      return D2 && !e2 && 5 === u2.length || "x" === u2[0] && 3 === u2.length ? String.fromCharCode(parseInt(u2.slice(1), 16)) : D2 && e2 ? String.fromCodePoint(parseInt(u2.slice(2, -1), 16)) : Cu.get(u2) || u2;
    }
    function Eu(u2, D2) {
      const e2 = [], t2 = D2.trim().split(/\s*,\s*/g);
      let r2;
      for (const D3 of t2) {
        const t3 = Number(D3);
        if (Number.isNaN(t3)) {
          if (!(r2 = D3.match(hu)))
            throw new Error(`Invalid Chalk template style argument: ${D3} (in style '${u2}')`);
          e2.push(r2[2].replace(Fu, (u3, D4, e3) => D4 ? fu(D4) : e3));
        } else
          e2.push(t3);
      }
      return e2;
    }
    function gu(u2) {
      cu.lastIndex = 0;
      const D2 = [];
      let e2;
      for (; null !== (e2 = cu.exec(u2)); ) {
        const u3 = e2[1];
        if (e2[2]) {
          const t2 = Eu(u3, e2[2]);
          D2.push([u3].concat(t2));
        } else
          D2.push([u3]);
      }
      return D2;
    }
    function du(u2, D2) {
      const e2 = {};
      for (const u3 of D2)
        for (const D3 of u3.styles)
          e2[D3[0]] = u3.inverse ? null : D3.slice(1);
      let t2 = u2;
      for (const [u3, D3] of Object.entries(e2))
        if (Array.isArray(D3)) {
          if (!(u3 in t2))
            throw new Error("Unknown Chalk style: " + u3);
          t2 = D3.length > 0 ? t2[u3](...D3) : t2[u3];
        }
      return t2;
    }
    var pu = (u2, D2) => {
      const e2 = [], t2 = [];
      let r2 = [];
      if (D2.replace(lu, (D3, n2, s2, o2, i2, a2) => {
        if (n2)
          r2.push(fu(n2));
        else if (o2) {
          const D4 = r2.join("");
          r2 = [], t2.push(0 === e2.length ? D4 : du(u2, e2)(D4)), e2.push({ inverse: s2, styles: gu(o2) });
        } else if (i2) {
          if (0 === e2.length)
            throw new Error("Found extraneous } in Chalk template literal");
          t2.push(du(u2, e2)(r2.join(""))), r2 = [], e2.pop();
        } else
          r2.push(a2);
      }), t2.push(r2.join("")), e2.length > 0) {
        const u3 = `Chalk template literal is missing ${e2.length} closing bracket${1 === e2.length ? "" : "s"} (\`}\`)`;
        throw new Error(u3);
      }
      return t2.join("");
    };
    var { stdout: mu, stderr: bu } = iu;
    var { stringReplaceAll: yu, stringEncaseCRLFWithFirstIndex: Bu } = au;
    var vu = ["ansi", "ansi", "ansi256", "ansi16m"];
    var _u = /* @__PURE__ */ Object.create(null);
    var Au = class {
      constructor(u2) {
        return wu(u2);
      }
    };
    var wu = (u2) => {
      const D2 = {};
      return ((u3, D3 = {}) => {
        if (D3.level && !(Number.isInteger(D3.level) && D3.level >= 0 && D3.level <= 3))
          throw new Error("The `level` option should be an integer from 0 to 3");
        const e2 = mu ? mu.level : 0;
        u3.level = void 0 === D3.level ? e2 : D3.level;
      })(D2, u2), D2.template = (...u3) => Lu(D2.template, ...u3), Object.setPrototypeOf(D2, Ou.prototype), Object.setPrototypeOf(D2.template, D2), D2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      }, D2.template.Instance = Au, D2.template;
    };
    function Ou(u2) {
      return wu(u2);
    }
    for (const [u2, D2] of Object.entries(eu))
      _u[u2] = { get() {
        const e2 = ku(this, Iu(D2.open, D2.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, u2, { value: e2 }), e2;
      } };
    _u.visible = { get() {
      const u2 = ku(this, this._styler, true);
      return Object.defineProperty(this, "visible", { value: u2 }), u2;
    } };
    var Mu = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const u2 of Mu)
      _u[u2] = { get() {
        const { level: D2 } = this;
        return function(...e2) {
          const t2 = Iu(eu.color[vu[D2]][u2](...e2), eu.color.close, this._styler);
          return ku(this, t2, this._isEmpty);
        };
      } };
    for (const u2 of Mu) {
      _u["bg" + u2[0].toUpperCase() + u2.slice(1)] = { get() {
        const { level: D2 } = this;
        return function(...e2) {
          const t2 = Iu(eu.bgColor[vu[D2]][u2](...e2), eu.bgColor.close, this._styler);
          return ku(this, t2, this._isEmpty);
        };
      } };
    }
    var Su = Object.defineProperties(() => {
    }, { ..._u, level: { enumerable: true, get() {
      return this._generator.level;
    }, set(u2) {
      this._generator.level = u2;
    } } });
    var Iu = (u2, D2, e2) => {
      let t2, r2;
      return void 0 === e2 ? (t2 = u2, r2 = D2) : (t2 = e2.openAll + u2, r2 = D2 + e2.closeAll), { open: u2, close: D2, openAll: t2, closeAll: r2, parent: e2 };
    };
    var ku = (u2, D2, e2) => {
      const t2 = (...u3) => Ru(t2, 1 === u3.length ? "" + u3[0] : u3.join(" "));
      return Object.setPrototypeOf(t2, Su), t2._generator = u2, t2._styler = D2, t2._isEmpty = e2, t2;
    };
    var Ru = (u2, D2) => {
      if (u2.level <= 0 || !D2)
        return u2._isEmpty ? "" : D2;
      let e2 = u2._styler;
      if (void 0 === e2)
        return D2;
      const { openAll: t2, closeAll: r2 } = e2;
      if (-1 !== D2.indexOf("\x1B"))
        for (; void 0 !== e2; )
          D2 = yu(D2, e2.close, e2.open), e2 = e2.parent;
      const n2 = D2.indexOf("\n");
      return -1 !== n2 && (D2 = Bu(D2, r2, t2, n2)), t2 + D2 + r2;
    };
    var Tu;
    var Lu = (u2, ...D2) => {
      const [e2] = D2;
      if (!Array.isArray(e2))
        return D2.join(" ");
      const t2 = D2.slice(1), r2 = [e2.raw[0]];
      for (let u3 = 1; u3 < e2.length; u3++)
        r2.push(String(t2[u3 - 1]).replace(/[{}\\]/g, "\\$&"), String(e2.raw[u3]));
      return void 0 === Tu && (Tu = pu), Tu(u2, r2.join(""));
    };
    Object.defineProperties(Ou.prototype, _u);
    var $u = Ou();
    $u.supportsColor = mu, $u.stderr = Ou({ level: bu ? bu.level : 0 }), $u.stderr.supportsColor = bu;
    var xu = $u;
    var Uu = {};
    function ju(u2) {
      let D2 = Uu[u2];
      return D2 || (D2 = "#" === u2[0] ? xu.hex(u2) : xu[u2] || xu.keyword(u2), Uu[u2] = D2, D2);
    }
    var Pu = {};
    var Nu = { info: "cyan" };
    var qu = { 0: "red", 1: "yellow", 2: "white", 3: "green" };
    var Yu = { secondaryColor: "grey", formatOptions: { date: true, colors: true, compact: false } };
    var Hu = { info: H("\u2139"), success: H("\u2714"), debug: H("\u203A"), trace: H("\u203A"), log: "" };
    var Vu = class extends S {
      constructor(u2) {
        super(Object.assign({}, Yu, u2));
      }
      formatStack(u2) {
        const D2 = ju("grey"), e2 = ju("cyan");
        return "\n" + A(u2).map((u3) => "  " + u3.replace(/^at +/, (u4) => D2(u4)).replace(/\((.+)\)/, (u4, D3) => `(${e2(D3)})`)).join("\n");
      }
      formatType(u2, D2) {
        const e2 = Nu[u2.type] || qu[u2.level] || this.options.secondaryColor;
        if (D2)
          return function(u3) {
            let D3 = Pu[u3];
            return D3 || (D3 = "#" === u3[0] ? xu.bgHex(u3) : xu["bg" + u3[0].toUpperCase() + u3.slice(1)] || xu.bgKeyword(u3), Pu[u3] = D3, D3);
          }(e2).black(` ${u2.type.toUpperCase()} `);
        const t2 = "string" == typeof Hu[u2.type] ? Hu[u2.type] : u2.icon || u2.type;
        return t2 ? ju(e2)(t2) : "";
      }
      formatLogObj(u2, { width: D2 }) {
        const [e2, ...t2] = this.formatArgs(u2.args).split("\n"), r2 = void 0 !== u2.badge ? Boolean(u2.badge) : u2.level < 2, n2 = ju(this.options.secondaryColor), s2 = this.formatDate(u2.date), o2 = s2 && n2(s2), i2 = this.formatType(u2, r2), a2 = u2.tag ? n2(u2.tag) : "", l2 = e2.replace(/`([^`]+)`/g, (u3, D3) => xu.cyan(D3));
        let c2;
        const h2 = this.filterAndJoin([i2, l2]), F2 = this.filterAndJoin([a2, o2]), C2 = D2 - $(h2) - $(F2) - 2;
        return c2 = C2 > 0 && D2 >= 80 ? h2 + " ".repeat(C2) + F2 : h2, c2 += t2.length ? "\n" + t2.join("\n") : "", r2 ? "\n" + c2 + "\n" : c2;
      }
    };
    var Wu = class {
      constructor({ stream: u2 } = {}) {
        this.stream = u2 || process.stdout;
      }
      log(u2) {
        this.stream.write(JSON.stringify(u2) + "\n");
      }
    };
    var Gu = "undefined" != typeof __non_webpack_require__ ? __non_webpack_require__ : _chunkDJPFSYOUjs.__require;
    var zu = class {
      constructor(u2) {
        if (u2 && u2.log)
          this.logger = u2;
        else {
          const D2 = Gu("winston");
          this.logger = D2.createLogger(Object.assign({ level: "info", format: D2.format.simple(), transports: [new D2.transports.Console()] }, u2));
        }
      }
      log(u2) {
        const D2 = [].concat(u2.args), e2 = D2.shift();
        this.logger.log({ level: Qu[u2.level] || "info", label: u2.tag, message: e2, args: D2, timestamp: u2.date.getTime() / 1e3 });
      }
    };
    var Qu = { 0: "error", 1: "warn", 2: "info", 3: "verbose", 4: "debug", 5: "silly" };
    global.consola || (global.consola = function() {
      let u2 = p.debug ? 4 : 3;
      process.env.CONSOLA_LEVEL && (u2 = parseInt(process.env.CONSOLA_LEVEL) || u2);
      const D2 = new _({ level: u2, reporters: [p.ci || p.test ? new S() : new Vu()] });
      return D2.Consola = _, D2.BasicReporter = S, D2.FancyReporter = Vu, D2.JSONReporter = Wu, D2.WinstonReporter = zu, D2.LogLevel = m, D2;
    }());
    var Ju = global.consola;
    module.exports = Ju;
  }
});

// src/index.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _worker_threads = require('worker_threads');
var _globby = require('globby'); var _globby2 = _interopRequireDefault(_globby);
var _bundlerequire = require('bundle-require');
var _execa = require('execa'); var _execa2 = _interopRequireDefault(_execa);
var _treekill = require('tree-kill'); var _treekill2 = _interopRequireDefault(_treekill);

// src/esbuild/index.ts





var _esbuild = require('esbuild');

// src/esbuild/node-protocol.ts
var nodeProtocolPlugin = () => {
  const nodeProtocol = "node:";
  return {
    name: "node-protocol-plugin",
    setup({ onResolve }) {
      onResolve({
        filter: /^node:/
      }, ({ path: path11 }) => ({
        path: path11.slice(nodeProtocol.length),
        external: true
      }));
    }
  };
};

// src/esbuild/external.ts

var NON_NODE_MODULE_RE = /^[A-Z]:[\\\/]|^\.{0,2}[\/]|^\.{1,2}$/;
var externalPlugin = ({
  external,
  noExternal,
  skipNodeModulesBundle,
  tsconfigResolvePaths
}) => {
  return {
    name: `external`,
    setup(build2) {
      if (skipNodeModulesBundle) {
        const resolvePatterns = _bundlerequire.tsconfigPathsToRegExp.call(void 0, 
          tsconfigResolvePaths || {}
        );
        build2.onResolve({ filter: /.*/ }, (args) => {
          if (_bundlerequire.match.call(void 0, args.path, resolvePatterns)) {
            return;
          }
          if (_bundlerequire.match.call(void 0, args.path, noExternal)) {
            return;
          }
          if (_bundlerequire.match.call(void 0, args.path, external)) {
            return { external: true };
          }
          if (!NON_NODE_MODULE_RE.test(args.path)) {
            return {
              path: args.path,
              external: true
            };
          }
        });
      } else {
        build2.onResolve({ filter: /.*/ }, (args) => {
          if (_bundlerequire.match.call(void 0, args.path, noExternal)) {
            return;
          }
          if (_bundlerequire.match.call(void 0, args.path, external)) {
            return { external: true };
          }
        });
      }
    }
  };
};

// src/esbuild/postcss.ts


var postcssPlugin = ({
  css,
  inject,
  cssLoader
}) => {
  return {
    name: "postcss",
    setup(build2) {
      let configCache;
      const getPostcssConfig = async () => {
        const loadConfig = _chunkDJPFSYOUjs.__require.call(void 0, "postcss-load-config");
        if (configCache) {
          return configCache;
        }
        try {
          const result = await loadConfig({}, process.cwd());
          configCache = result;
          return result;
        } catch (error) {
          if (error.message.includes("No PostCSS Config found in")) {
            const result = { plugins: [], options: {} };
            return result;
          }
          throw error;
        }
      };
      build2.onResolve({ filter: /^#style-inject$/ }, () => {
        return { path: "#style-inject", namespace: "#style-inject" };
      });
      build2.onLoad(
        { filter: /^#style-inject$/, namespace: "#style-inject" },
        () => {
          return {
            // Taken from https://github.com/egoist/style-inject/blob/master/src/index.js (MIT)
            contents: `
          export default function styleInject(css, { insertAt } = {}) {
            if (!css || typeof document === 'undefined') return
          
            const head = document.head || document.getElementsByTagName('head')[0]
            const style = document.createElement('style')
            style.type = 'text/css'
          
            if (insertAt === 'top') {
              if (head.firstChild) {
                head.insertBefore(style, head.firstChild)
              } else {
                head.appendChild(style)
              }
            } else {
              head.appendChild(style)
            }
          
            if (style.styleSheet) {
              style.styleSheet.cssText = css
            } else {
              style.appendChild(document.createTextNode(css))
            }
          }
          `,
            loader: "js"
          };
        }
      );
      build2.onLoad({ filter: /\.css$/ }, async (args) => {
        let contents;
        if (css && args.path.endsWith(".svelte.css")) {
          contents = css.get(args.path);
        } else {
          contents = await _fs2.default.promises.readFile(args.path, "utf8");
        }
        const { plugins, options } = await getPostcssConfig();
        if (plugins && plugins.length > 0) {
          const postcss = _chunkDJPFSYOUjs.getPostcss.call(void 0, );
          if (!postcss) {
            return {
              errors: [
                {
                  text: `postcss is not installed`
                }
              ]
            };
          }
          const result = await _optionalChain([postcss, 'optionalAccess', _2 => _2.default, 'call', _3 => _3(plugins), 'access', _4 => _4.process, 'call', _5 => _5(contents, { ...options, from: args.path })]);
          contents = result.css;
        }
        if (inject) {
          contents = (await _esbuild.transform.call(void 0, contents, {
            minify: build2.initialOptions.minify,
            minifyIdentifiers: build2.initialOptions.minifyIdentifiers,
            minifySyntax: build2.initialOptions.minifySyntax,
            minifyWhitespace: build2.initialOptions.minifyWhitespace,
            logLevel: build2.initialOptions.logLevel,
            loader: "css"
          })).code;
          contents = typeof inject === "function" ? inject(JSON.stringify(contents), args.path) : `import styleInject from '#style-inject';styleInject(${JSON.stringify(
            contents
          )})`;
          return {
            contents,
            loader: "js"
          };
        }
        return {
          contents,
          loader: _nullishCoalesce(cssLoader, () => ( "css"))
        };
      });
    }
  };
};

// src/esbuild/svelte.ts



var useSvelteCssExtension = (p) => p.replace(/\.svelte$/, ".svelte.css");
var sveltePlugin = ({
  css
}) => {
  return {
    name: "svelte",
    setup(build2) {
      let svelte;
      let sveltePreprocessor;
      build2.onResolve({ filter: /\.svelte\.css$/ }, (args) => {
        return {
          path: _path2.default.relative(
            process.cwd(),
            _path2.default.join(args.resolveDir, args.path)
          ),
          namespace: "svelte-css"
        };
      });
      build2.onLoad({ filter: /\.svelte$/ }, async (args) => {
        svelte = svelte || _chunkDJPFSYOUjs.localRequire.call(void 0, "svelte/compiler");
        sveltePreprocessor = sveltePreprocessor || _chunkDJPFSYOUjs.localRequire.call(void 0, "svelte-preprocess");
        if (!svelte) {
          return {
            errors: [{ text: `You need to install "svelte" in your project` }]
          };
        }
        const convertMessage = ({ message, start, end }) => {
          let location;
          if (start && end) {
            const lineText = source.split(/\r\n|\r|\n/g)[start.line - 1];
            const lineEnd = start.line === end.line ? end.column : lineText.length;
            location = {
              file: filename,
              line: start.line,
              column: start.column,
              length: lineEnd - start.column,
              lineText
            };
          }
          return { text: message, location };
        };
        const source = await _fs2.default.promises.readFile(args.path, "utf8");
        const filename = _path2.default.relative(process.cwd(), args.path);
        try {
          const preprocess = await svelte.preprocess(
            source,
            sveltePreprocessor ? sveltePreprocessor({
              sourceMap: true,
              typescript: {
                compilerOptions: {
                  preserveValueImports: true
                }
              }
            }) : {
              async script({ content, attributes }) {
                if (attributes.lang !== "ts")
                  return { code: content };
                const { code, map } = await _esbuild.transform.call(void 0, content, {
                  sourcefile: args.path,
                  loader: "ts",
                  sourcemap: true,
                  tsconfigRaw: {
                    compilerOptions: {
                      preserveValueImports: true
                    }
                  },
                  logLevel: build2.initialOptions.logLevel
                });
                return {
                  code,
                  map
                };
              }
            },
            {
              filename: args.path
            }
          );
          const result = svelte.compile(preprocess.code, {
            filename,
            css: false
          });
          let contents = result.js.code;
          if (css && result.css.code) {
            const cssPath = useSvelteCssExtension(filename);
            css.set(cssPath, result.css.code);
            contents = `import '${useSvelteCssExtension(_path2.default.basename(args.path))}';` + contents;
          }
          return { contents, warnings: result.warnings.map(convertMessage) };
        } catch (e) {
          return { errors: [convertMessage(e)] };
        }
      });
    }
  };
};

// src/esbuild/index.ts
var import_consola = _chunkDJPFSYOUjs.__toESM.call(void 0, require_consola());

// src/esbuild/swc.ts

var swcPlugin = ({ logger: logger3 }) => {
  return {
    name: "swc",
    setup(build2) {
      const swc = _chunkDJPFSYOUjs.localRequire.call(void 0, "@swc/core");
      if (!swc) {
        logger3.warn(
          build2.initialOptions.format,
          `You have emitDecoratorMetadata enabled but @swc/core was not installed, skipping swc plugin`
        );
        return;
      }
      build2.initialOptions.keepNames = true;
      build2.onLoad({ filter: /\.[jt]sx?$/ }, async (args) => {
        const isTs = /\.tsx?$/.test(args.path);
        const jsc = {
          parser: {
            syntax: isTs ? "typescript" : "ecmascript",
            decorators: true
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true
          },
          keepClassNames: true,
          target: "es2022"
        };
        const result = await swc.transformFile(args.path, {
          jsc,
          sourceMaps: true,
          configFile: false,
          swcrc: false
        });
        let code = result.code;
        if (result.map) {
          const map = JSON.parse(result.map);
          map.sources = map.sources.map((source) => {
            return _path2.default.isAbsolute(source) ? _path2.default.relative(_path2.default.dirname(args.path), source) : source;
          });
          code += `//# sourceMappingURL=data:application/json;base64,${Buffer.from(
            JSON.stringify(map)
          ).toString("base64")}`;
        }
        return {
          contents: code
        };
      });
    }
  };
};

// src/esbuild/native-node-module.ts

var nativeNodeModulesPlugin = () => {
  return {
    name: "native-node-modules",
    setup(build2) {
      build2.onResolve({ filter: /\.node$/, namespace: "file" }, (args) => {
        const resolvedId = _chunkDJPFSYOUjs.__require.resolve(args.path, {
          paths: [args.resolveDir]
        });
        if (resolvedId.endsWith(".node")) {
          return {
            path: resolvedId,
            namespace: "node-file"
          };
        }
        return {
          path: resolvedId
        };
      });
      build2.onLoad({ filter: /.*/, namespace: "node-file" }, (args) => {
        return {
          contents: `
            import path from ${JSON.stringify(args.path)}
            try { module.exports = require(path) }
            catch {}
          `,
          resolveDir: _path2.default.dirname(args.path)
        };
      });
      build2.onResolve(
        { filter: /\.node$/, namespace: "node-file" },
        (args) => ({
          path: args.path,
          namespace: "file"
        })
      );
      const opts = build2.initialOptions;
      opts.loader = opts.loader || {};
      opts.loader[".node"] = "file";
    }
  };
};

// src/esbuild/index.ts
var getOutputExtensionMap = (options, format, pkgType) => {
  const outExtension = options.outExtension || _chunkDJPFSYOUjs.defaultOutExtension;
  const defaultExtension = _chunkDJPFSYOUjs.defaultOutExtension.call(void 0, { format, pkgType });
  const extension = outExtension({ options, format, pkgType });
  return {
    ".js": extension.js || defaultExtension.js
  };
};
var generateExternal = async (external) => {
  const result = [];
  for (const item of external) {
    if (typeof item !== "string" || !item.endsWith("package.json")) {
      result.push(item);
      continue;
    }
    let pkgPath = _path2.default.isAbsolute(item) ? _path2.default.dirname(item) : _path2.default.dirname(_path2.default.resolve(process.cwd(), item));
    const deps = await _chunkBWKNFVFOjs.getProductionDeps.call(void 0, pkgPath);
    result.push(...deps);
  }
  return result;
};
async function runEsbuild(options, {
  format,
  css,
  logger: logger3,
  buildDependencies,
  pluginContainer
}) {
  const pkg = await _chunkBWKNFVFOjs.loadPkg.call(void 0, process.cwd());
  const deps = await _chunkBWKNFVFOjs.getProductionDeps.call(void 0, process.cwd());
  const external = [
    // Exclude dependencies, e.g. `lodash`, `lodash/get`
    ...deps.map((dep) => new RegExp(`^${dep}($|\\/|\\\\)`)),
    ...await generateExternal(options.external || [])
  ];
  const outDir = options.outDir;
  const outExtension = getOutputExtensionMap(options, format, pkg.type);
  const env = {
    ...options.env
  };
  if (options.replaceNodeEnv) {
    env.NODE_ENV = options.minify || options.minifyWhitespace ? "production" : "development";
  }
  logger3.info(format, "Build start");
  const startTime = Date.now();
  let result;
  const splitting = format === "iife" ? false : typeof options.splitting === "boolean" ? options.splitting : format === "esm";
  const platform = options.platform || "node";
  const loader = options.loader || {};
  const injectShims = options.shims;
  pluginContainer.setContext({
    format,
    splitting,
    options,
    logger: logger3
  });
  await pluginContainer.buildStarted();
  const esbuildPlugins = [
    format === "cjs" && nodeProtocolPlugin(),
    {
      name: "modify-options",
      setup(build2) {
        pluginContainer.modifyEsbuildOptions(build2.initialOptions);
        if (options.esbuildOptions) {
          options.esbuildOptions(build2.initialOptions, { format });
        }
      }
    },
    // esbuild's `external` option doesn't support RegExp
    // So here we use a custom plugin to implement it
    format !== "iife" && externalPlugin({
      external,
      noExternal: options.noExternal,
      skipNodeModulesBundle: options.skipNodeModulesBundle,
      tsconfigResolvePaths: options.tsconfigResolvePaths
    }),
    options.tsconfigDecoratorMetadata && swcPlugin({ logger: logger3 }),
    nativeNodeModulesPlugin(),
    postcssPlugin({
      css,
      inject: options.injectStyle,
      cssLoader: loader[".css"]
    }),
    sveltePlugin({ css }),
    ...options.esbuildPlugins || []
  ];
  const banner = typeof options.banner === "function" ? options.banner({ format }) : options.banner;
  const footer = typeof options.footer === "function" ? options.footer({ format }) : options.footer;
  try {
    result = await _esbuild.build.call(void 0, {
      entryPoints: options.entry,
      format: format === "cjs" && splitting || options.treeshake ? "esm" : format,
      bundle: typeof options.bundle === "undefined" ? true : options.bundle,
      platform,
      globalName: options.globalName,
      jsxFactory: options.jsxFactory,
      jsxFragment: options.jsxFragment,
      sourcemap: options.sourcemap ? "external" : false,
      target: options.target,
      banner,
      footer,
      tsconfig: options.tsconfig,
      loader: {
        ".aac": "file",
        ".css": "file",
        ".eot": "file",
        ".flac": "file",
        ".gif": "file",
        ".jpeg": "file",
        ".jpg": "file",
        ".mp3": "file",
        ".mp4": "file",
        ".ogg": "file",
        ".otf": "file",
        ".png": "file",
        ".svg": "file",
        ".ttf": "file",
        ".wav": "file",
        ".webm": "file",
        ".webp": "file",
        ".woff": "file",
        ".woff2": "file",
        ...loader
      },
      mainFields: platform === "node" ? ["module", "main"] : ["browser", "module", "main"],
      plugins: esbuildPlugins.filter(_chunkDJPFSYOUjs.truthy),
      define: {
        TSUP_FORMAT: JSON.stringify(format),
        ...format === "cjs" && injectShims ? {
          "import.meta.url": "importMetaUrl"
        } : {},
        ...options.define,
        ...Object.keys(env).reduce((res, key) => {
          const value = JSON.stringify(env[key]);
          return {
            ...res,
            [`process.env.${key}`]: value,
            [`import.meta.env.${key}`]: value
          };
        }, {})
      },
      inject: [
        format === "cjs" && injectShims ? _path2.default.join(__dirname, "../assets/cjs_shims.js") : "",
        format === "esm" && injectShims && platform === "node" ? _path2.default.join(__dirname, "../assets/esm_shims.js") : "",
        ...options.inject || []
      ].filter(Boolean),
      outdir: options.legacyOutput && format !== "cjs" ? _path2.default.join(outDir, format) : outDir,
      outExtension: options.legacyOutput ? void 0 : outExtension,
      write: false,
      splitting,
      logLevel: "error",
      minify: options.minify === "terser" ? false : options.minify,
      minifyWhitespace: options.minifyWhitespace,
      minifyIdentifiers: options.minifyIdentifiers,
      minifySyntax: options.minifySyntax,
      keepNames: options.keepNames,
      pure: typeof options.pure === "string" ? [options.pure] : options.pure,
      metafile: true
    });
  } catch (error) {
    logger3.error(format, "Build failed");
    throw error;
  }
  if (result && result.warnings && !_chunkBWKNFVFOjs.getSilent.call(void 0, )) {
    const messages = result.warnings.filter((warning) => {
      if (warning.text.includes(
        `This call to "require" will not be bundled because`
      ) || warning.text.includes(`Indirect calls to "require" will not be bundled`))
        return false;
      return true;
    });
    const formatted = await _esbuild.formatMessages.call(void 0, messages, {
      kind: "warning",
      color: true
    });
    formatted.forEach((message) => {
      import_consola.default.warn(message);
    });
  }
  if (result && result.outputFiles) {
    await pluginContainer.buildFinished({
      outputFiles: result.outputFiles,
      metafile: result.metafile
    });
    const timeInMs = Date.now() - startTime;
    logger3.success(format, `\u26A1\uFE0F Build success in ${Math.floor(timeInMs)}ms`);
  }
  if (result.metafile) {
    for (const file of Object.keys(result.metafile.inputs)) {
      buildDependencies.add(file);
    }
    if (options.metafile) {
      const outPath = _path2.default.resolve(outDir, `metafile-${format}.json`);
      await _fs2.default.promises.mkdir(_path2.default.dirname(outPath), { recursive: true });
      await _fs2.default.promises.writeFile(
        outPath,
        JSON.stringify(result.metafile),
        "utf8"
      );
    }
  }
}

// src/plugins/shebang.ts
var shebang = () => {
  return {
    name: "shebang",
    renderChunk(_, info) {
      if (info.type === "chunk" && /\.(cjs|js|mjs)$/.test(info.path)) {
        if (info.code.startsWith("#!")) {
          info.mode = 493;
        }
      }
    }
  };
};

// src/plugins/cjs-splitting.ts
var cjsSplitting = () => {
  return {
    name: "cjs-splitting",
    async renderChunk(code, info) {
      if (!this.splitting || this.options.treeshake || // <-- handled by rollup
      this.format !== "cjs" || info.type !== "chunk" || !/\.(js|cjs)$/.test(info.path)) {
        return;
      }
      const { transform: transform3 } = await Promise.resolve().then(() => require("sucrase"));
      const result = transform3(code, {
        filePath: info.path,
        transforms: ["imports"],
        sourceMapOptions: this.options.sourcemap ? {
          compiledFilename: info.path
        } : void 0
      });
      return {
        code: result.code,
        map: result.sourceMap
      };
    }
  };
};

// src/plugin.ts

var _sourcemap = require('source-map');

// src/fs.ts


var outputFile = async (filepath, data, options) => {
  await _fs2.default.promises.mkdir(_path2.default.dirname(filepath), { recursive: true });
  await _fs2.default.promises.writeFile(filepath, data, options);
};
function copyDirSync(srcDir, destDir) {
  if (!_fs2.default.existsSync(srcDir))
    return;
  _fs2.default.mkdirSync(destDir, { recursive: true });
  for (const file of _fs2.default.readdirSync(srcDir)) {
    const srcFile = _path2.default.resolve(srcDir, file);
    if (srcFile === destDir) {
      continue;
    }
    const destFile = _path2.default.resolve(destDir, file);
    const stat = _fs2.default.statSync(srcFile);
    if (stat.isDirectory()) {
      copyDirSync(srcFile, destFile);
    } else {
      _fs2.default.copyFileSync(srcFile, destFile);
    }
  }
}

// src/plugin.ts
var parseSourceMap = (map) => {
  return typeof map === "string" ? JSON.parse(map) : map;
};
var isJS = (path11) => /\.(js|mjs|cjs)$/.test(path11);
var isCSS = (path11) => /\.css$/.test(path11);
var PluginContainer = class {
  
  
  constructor(plugins) {
    this.plugins = plugins;
  }
  setContext(context) {
    this.context = context;
  }
  getContext() {
    if (!this.context)
      throw new Error(`Plugin context is not set`);
    return this.context;
  }
  modifyEsbuildOptions(options) {
    for (const plugin of this.plugins) {
      if (plugin.esbuildOptions) {
        plugin.esbuildOptions.call(this.getContext(), options);
      }
    }
  }
  async buildStarted() {
    for (const plugin of this.plugins) {
      if (plugin.buildStart) {
        await plugin.buildStart.call(this.getContext());
      }
    }
  }
  async buildFinished({
    outputFiles,
    metafile
  }) {
    const files = outputFiles.filter((file) => !file.path.endsWith(".map")).map((file) => {
      if (isJS(file.path) || isCSS(file.path)) {
        const relativePath = _path2.default.relative(process.cwd(), file.path);
        const meta = _optionalChain([metafile, 'optionalAccess', _6 => _6.outputs, 'access', _7 => _7[relativePath]]);
        return {
          type: "chunk",
          path: file.path,
          code: file.text,
          map: _optionalChain([outputFiles, 'access', _8 => _8.find, 'call', _9 => _9((f) => f.path === `${file.path}.map`), 'optionalAccess', _10 => _10.text]),
          entryPoint: _optionalChain([meta, 'optionalAccess', _11 => _11.entryPoint]),
          exports: _optionalChain([meta, 'optionalAccess', _12 => _12.exports]),
          imports: _optionalChain([meta, 'optionalAccess', _13 => _13.imports])
        };
      } else {
        return { type: "asset", path: file.path, contents: file.contents };
      }
    });
    const writtenFiles = [];
    await Promise.all(
      files.map(async (info) => {
        for (const plugin of this.plugins) {
          if (info.type === "chunk" && plugin.renderChunk) {
            const result = await plugin.renderChunk.call(
              this.getContext(),
              info.code,
              info
            );
            if (result) {
              info.code = result.code;
              if (result.map) {
                const originalConsumer = await new (0, _sourcemap.SourceMapConsumer)(
                  parseSourceMap(info.map)
                );
                const newConsumer = await new (0, _sourcemap.SourceMapConsumer)(
                  parseSourceMap(result.map)
                );
                const generator = _sourcemap.SourceMapGenerator.fromSourceMap(originalConsumer);
                generator.applySourceMap(newConsumer, info.path);
                info.map = generator.toJSON();
                originalConsumer.destroy();
                newConsumer.destroy();
              }
            }
          }
        }
        const inlineSourceMap = this.context.options.sourcemap === "inline";
        const contents = info.type === "chunk" ? info.code + getSourcemapComment(
          inlineSourceMap,
          info.map,
          info.path,
          isCSS(info.path)
        ) : info.contents;
        await outputFile(info.path, contents, {
          mode: info.type === "chunk" ? info.mode : void 0
        });
        writtenFiles.push({
          get name() {
            return _path2.default.relative(process.cwd(), info.path);
          },
          get size() {
            return contents.length;
          }
        });
        if (info.type === "chunk" && info.map && !inlineSourceMap) {
          const map = typeof info.map === "string" ? JSON.parse(info.map) : info.map;
          const outPath = `${info.path}.map`;
          const contents2 = JSON.stringify(map);
          await outputFile(outPath, contents2);
          writtenFiles.push({
            get name() {
              return _path2.default.relative(process.cwd(), outPath);
            },
            get size() {
              return contents2.length;
            }
          });
        }
      })
    );
    for (const plugin of this.plugins) {
      if (plugin.buildEnd) {
        await plugin.buildEnd.call(this.getContext(), { writtenFiles });
      }
    }
  }
};
var getSourcemapComment = (inline, map, filepath, isCssFile) => {
  if (!map)
    return "";
  const prefix = isCssFile ? "/*" : "//";
  const suffix = isCssFile ? " */" : "";
  const url = inline ? `data:application/json;base64,${Buffer.from(
    typeof map === "string" ? map : JSON.stringify(map)
  ).toString("base64")}` : `${_path2.default.basename(filepath)}.map`;
  return `${prefix}# sourceMappingURL=${url}${suffix}`;
};

// src/plugins/es5.ts
var es5 = () => {
  let enabled = false;
  return {
    name: "es5-target",
    esbuildOptions(options) {
      if (options.target === "es5") {
        options.target = "es2020";
        enabled = true;
      }
    },
    async renderChunk(code, info) {
      if (!enabled || !/\.(cjs|js)$/.test(info.path)) {
        return;
      }
      const swc = _chunkDJPFSYOUjs.localRequire.call(void 0, "@swc/core");
      if (!swc) {
        throw new (0, _chunk4SM4HQB2js.PrettyError)(
          "@swc/core is required for es5 target. Please install it with `npm install @swc/core -D`"
        );
      }
      const result = await swc.transform(code, {
        filename: info.path,
        sourceMaps: this.options.sourcemap,
        minify: Boolean(this.options.minify),
        jsc: {
          target: "es5",
          parser: {
            syntax: "ecmascript"
          },
          minify: this.options.minify === true ? {
            compress: false,
            mangle: {
              reserved: this.options.globalName ? [this.options.globalName] : []
            }
          } : void 0
        }
      });
      return {
        code: result.code,
        map: result.map
      };
    }
  };
};

// src/plugins/size-reporter.ts
var sizeReporter = () => {
  return {
    name: "size-reporter",
    buildEnd({ writtenFiles }) {
      _chunkBWKNFVFOjs.reportSize.call(void 0, 
        this.logger,
        this.format,
        writtenFiles.reduce((res, file) => {
          return {
            ...res,
            [file.name]: file.size
          };
        }, {})
      );
    }
  };
};

// src/plugins/tree-shaking.ts
var import_rollup_plugin_hashbang = _chunkDJPFSYOUjs.__toESM.call(void 0, _chunkBWKNFVFOjs.require_dist.call(void 0, ));
var _rollup = require('rollup');
var treeShakingPlugin = ({
  treeshake,
  name,
  silent
}) => {
  return {
    name: "tree-shaking",
    async renderChunk(code, info) {
      if (!treeshake || !/\.(cjs|js|mjs)$/.test(info.path))
        return;
      const bundle = await _rollup.rollup.call(void 0, {
        input: [info.path],
        plugins: [
          (0, import_rollup_plugin_hashbang.default)(),
          {
            name: "tsup",
            resolveId(source) {
              if (source === info.path)
                return source;
              return false;
            },
            load(id) {
              if (id === info.path)
                return code;
            }
          }
        ],
        treeshake,
        makeAbsoluteExternalsRelative: false,
        preserveEntrySignatures: "exports-only",
        onwarn: silent ? () => {
        } : void 0
      });
      const result = await bundle.generate({
        interop: "auto",
        format: this.format,
        file: "out.js",
        sourcemap: !!this.options.sourcemap,
        name
      });
      for (const file of result.output) {
        if (file.type === "chunk") {
          if (file.fileName.endsWith("out.js")) {
            return {
              code: file.code,
              map: file.map
            };
          }
        }
      }
    }
  };
};

// src/lib/public-dir.ts

var copyPublicDir = (publicDir, outDir) => {
  if (!publicDir)
    return;
  copyDirSync(_path2.default.resolve(publicDir === true ? "public" : publicDir), outDir);
};
var isInPublicDir = (publicDir, filePath) => {
  if (!publicDir)
    return false;
  const publicPath = _chunkDJPFSYOUjs.slash.call(void 0, 
    _path2.default.resolve(publicDir === true ? "public" : publicDir)
  );
  return _chunkDJPFSYOUjs.slash.call(void 0, _path2.default.resolve(filePath)).startsWith(`${publicPath}/`);
};

// src/plugins/terser.ts
var terserPlugin = ({
  minifyOptions,
  format,
  terserOptions = {},
  globalName,
  logger: logger3
}) => {
  return {
    name: "terser",
    async renderChunk(code, info) {
      if (minifyOptions !== "terser" || !/\.(cjs|js|mjs)$/.test(info.path))
        return;
      const terser = _chunkDJPFSYOUjs.localRequire.call(void 0, "terser");
      if (!terser) {
        throw new (0, _chunk4SM4HQB2js.PrettyError)(
          "terser is required for terser minification. Please install it with `npm install terser -D`"
        );
      }
      const { minify } = terser;
      const defaultOptions = {};
      if (format === "esm") {
        defaultOptions.module = true;
      } else if (!(format === "iife" && globalName !== void 0)) {
        defaultOptions.toplevel = true;
      }
      try {
        const minifiedOutput = await minify(
          { [info.path]: code },
          { ...defaultOptions, ...terserOptions }
        );
        logger3.info("TERSER", "Minifying with Terser");
        if (!minifiedOutput.code) {
          logger3.error("TERSER", "Failed to minify with terser");
        }
        logger3.success("TERSER", "Terser Minification success");
        return { code: minifiedOutput.code, map: minifiedOutput.map };
      } catch (e) {
        logger3.error("TERSER", "Failed to minify with terser");
        logger3.error("TERSER", e);
      }
      return { code, map: info.map };
    }
  };
};

// src/tsc.ts
var _typescript = require('typescript'); var _typescript2 = _interopRequireDefault(_typescript);
var logger = _chunkBWKNFVFOjs.createLogger.call(void 0, );
var AliasPool = (_class = class {constructor() { _class.prototype.__init.call(this); }
  __init() {this.seen = /* @__PURE__ */ new Set()}
  assign(name) {
    let suffix = 0;
    let alias = name === "default" ? "default_alias" : name;
    while (this.seen.has(alias)) {
      alias = `${name}_alias_${++suffix}`;
      if (suffix >= 1e3) {
        throw new Error(
          "Alias generation exceeded limit. Possible infinite loop detected."
        );
      }
    }
    this.seen.add(alias);
    return alias;
  }
}, _class);
function getExports(program, fileMapping) {
  let checker = program.getTypeChecker();
  let aliasPool = new AliasPool();
  let assignAlias = aliasPool.assign.bind(aliasPool);
  function extractExports(sourceFileName) {
    const cwd = program.getCurrentDirectory();
    sourceFileName = _chunkDJPFSYOUjs.toAbsolutePath.call(void 0, sourceFileName, cwd);
    const sourceFile = program.getSourceFile(sourceFileName);
    if (!sourceFile) {
      return [];
    }
    const destFileName = fileMapping.get(sourceFileName);
    if (!destFileName) {
      return [];
    }
    const moduleSymbol = checker.getSymbolAtLocation(sourceFile);
    if (!moduleSymbol) {
      return [];
    }
    const exports = [];
    const exportSymbols = checker.getExportsOfModule(moduleSymbol);
    exportSymbols.forEach((symbol) => {
      const name = symbol.getName();
      exports.push({
        kind: "named",
        sourceFileName,
        destFileName,
        name,
        alias: assignAlias(name),
        isTypeOnly: false
      });
    });
    return exports;
  }
  return program.getRootFileNames().flatMap(extractExports);
}
function emitDtsFiles(program, host) {
  let fileMapping = /* @__PURE__ */ new Map();
  let writeFile = (fileName, text, writeByteOrderMark, onError, sourceFiles, data) => {
    const sourceFile = _optionalChain([sourceFiles, 'optionalAccess', _14 => _14[0]]);
    let sourceFileName = _optionalChain([sourceFile, 'optionalAccess', _15 => _15.fileName]);
    if (sourceFileName && !fileName.endsWith(".map")) {
      const cwd = program.getCurrentDirectory();
      fileMapping.set(
        _chunkDJPFSYOUjs.toAbsolutePath.call(void 0, sourceFileName, cwd),
        _chunkDJPFSYOUjs.toAbsolutePath.call(void 0, fileName, cwd)
      );
    }
    return host.writeFile(
      fileName,
      text,
      writeByteOrderMark,
      onError,
      sourceFiles,
      data
    );
  };
  let emitResult = program.emit(void 0, writeFile, void 0, true);
  let diagnostics = _typescript2.default.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
  let diagnosticMessages = [];
  diagnostics.forEach((diagnostic) => {
    if (diagnostic.file) {
      let { line, character } = _typescript2.default.getLineAndCharacterOfPosition(
        diagnostic.file,
        diagnostic.start
      );
      let message = _typescript2.default.flattenDiagnosticMessageText(
        diagnostic.messageText,
        "\n"
      );
      diagnosticMessages.push(
        `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`
      );
    } else {
      let message = _typescript2.default.flattenDiagnosticMessageText(
        diagnostic.messageText,
        "\n"
      );
      diagnosticMessages.push(message);
    }
  });
  let diagnosticMessage = diagnosticMessages.join("\n");
  if (diagnosticMessage) {
    logger.error(
      "TSC",
      "Failed to emit declaration files.\n\n" + diagnosticMessage
    );
    throw new Error("TypeScript compilation failed");
  }
  return fileMapping;
}
var parseCompilerOptions = (compilerOptions) => {
  const parsed = _typescript2.default.parseJsonConfigFileContent(
    { compilerOptions },
    _typescript2.default.sys,
    "./"
  );
  return parsed.options;
};
function emit(entry, compilerOptions) {
  let declarationDir = _chunkDJPFSYOUjs.ensureTempDeclarationDir.call(void 0, );
  let fileNames = Object.values(entry);
  let options = parseCompilerOptions({
    ...compilerOptions,
    // Enable declaration emit and disable javascript emit
    noEmit: false,
    declaration: true,
    declarationMap: true,
    declarationDir,
    emitDeclarationOnly: true
  });
  let host = _typescript2.default.createCompilerHost(options);
  let program = _typescript2.default.createProgram(fileNames, options, host);
  let fileMapping = emitDtsFiles(program, host);
  return getExports(program, fileMapping);
}
function runTypeScriptCompiler(options) {
  try {
    const start = Date.now();
    const getDuration = () => {
      return `${Math.floor(Date.now() - start)}ms`;
    };
    logger.info("tsc", "Build start");
    const dtsOptions = options.experimentalDts;
    const exports = emit(
      _chunkDJPFSYOUjs.normalizeExperimentalDtsEntry.call(void 0, options),
      dtsOptions.compilerOptions
    );
    logger.success("tsc", `\u26A1\uFE0F Build success in ${getDuration()}`);
    return exports;
  } catch (error) {
    _chunk4SM4HQB2js.handleError.call(void 0, error);
    logger.error("tsc", "Build error");
  }
}

// src/api-extractor.ts



var _apiextractor = require('@microsoft/api-extractor');


// src/exports.ts

function formatAggregationExports(exports, declarationDirPath) {
  const lines = exports.map(
    (declaration) => formatAggregationExport(declaration, declarationDirPath)
  ).filter(_chunkDJPFSYOUjs.truthy);
  if (lines.length === 0) {
    lines.push("export {};");
  }
  return lines.join("\n") + "\n";
}
function formatAggregationExport(declaration, declarationDirPath) {
  let dest = _chunkDJPFSYOUjs.trimDtsExtension.call(void 0, 
    "./" + _path2.default.posix.normalize(
      _chunkDJPFSYOUjs.slash.call(void 0, _path2.default.relative(declarationDirPath, declaration.destFileName))
    )
  );
  if (declaration.kind === "module") {
    return "";
  } else if (declaration.kind === "named") {
    return [
      "export",
      declaration.isTypeOnly ? "type" : "",
      "{",
      declaration.name,
      declaration.name === declaration.alias ? "" : `as ${declaration.alias}`,
      "} from",
      `'${dest}';`
    ].filter(_chunkDJPFSYOUjs.truthy).join(" ");
  } else {
    throw new Error("Unknown declaration");
  }
}
function formatDistributionExports(exports, fromFilePath, toFilePath) {
  let importPath = _chunkDJPFSYOUjs.trimDtsExtension.call(void 0, 
    _path2.default.posix.relative(
      _path2.default.posix.dirname(_path2.default.posix.normalize(_chunkDJPFSYOUjs.slash.call(void 0, fromFilePath))),
      _path2.default.posix.normalize(_chunkDJPFSYOUjs.slash.call(void 0, toFilePath))
    )
  );
  if (!importPath.match(/^\.+\//)) {
    importPath = "./" + importPath;
  }
  const lines = exports.map((declaration) => formatDistributionExport(declaration, importPath)).filter(_chunkDJPFSYOUjs.truthy);
  if (lines.length === 0) {
    lines.push("export {};");
  }
  return lines.join("\n") + "\n";
}
function formatDistributionExport(declaration, dest) {
  if (declaration.kind === "named") {
    return [
      "export",
      declaration.isTypeOnly ? "type" : "",
      "{",
      declaration.alias,
      declaration.name === declaration.alias ? "" : `as ${declaration.name}`,
      "} from",
      `'${dest}';`
    ].filter(_chunkDJPFSYOUjs.truthy).join(" ");
  }
  if (declaration.kind === "module") {
    return `export * from '${declaration.moduleName}';`;
  }
  return "";
}

// src/api-extractor.ts
var logger2 = _chunkBWKNFVFOjs.createLogger.call(void 0, );
function rollupDtsFile(inputFilePath, outputFilePath, tsconfigFilePath) {
  let cwd = process.cwd();
  let packageJsonFullPath = _path2.default.join(cwd, "package.json");
  let configObject = {
    mainEntryPointFilePath: inputFilePath,
    apiReport: {
      enabled: false,
      // `reportFileName` is not been used. It's just to fit the requirement of API Extractor.
      reportFileName: "tsup-report.api.md"
    },
    docModel: { enabled: false },
    dtsRollup: {
      enabled: true,
      untrimmedFilePath: outputFilePath
    },
    tsdocMetadata: { enabled: false },
    compiler: {
      tsconfigFilePath
    },
    projectFolder: cwd
  };
  const prepareOptions = {
    configObject,
    configObjectFullPath: void 0,
    packageJsonFullPath
  };
  const extractorConfig = _apiextractor.ExtractorConfig.prepare(prepareOptions);
  const extractorResult = _apiextractor.Extractor.invoke(extractorConfig, {
    // Equivalent to the "--local" command-line parameter
    localBuild: true,
    // Equivalent to the "--verbose" command-line parameter
    showVerboseMessages: true
  });
  if (!extractorResult.succeeded) {
    throw new Error(
      `API Extractor completed with ${extractorResult.errorCount} errors and ${extractorResult.warningCount} warnings when processing ${inputFilePath}`
    );
  }
}
async function rollupDtsFiles(options, exports, format) {
  let declarationDir = _chunkDJPFSYOUjs.ensureTempDeclarationDir.call(void 0, );
  let outDir = options.outDir || "dist";
  let pkg = await _chunkBWKNFVFOjs.loadPkg.call(void 0, process.cwd());
  let dtsExtension = _chunkDJPFSYOUjs.defaultOutExtension.call(void 0, { format, pkgType: pkg.type }).dts;
  let dtsInputFilePath = _path2.default.join(
    declarationDir,
    "_tsup-dts-aggregation" + dtsExtension
  );
  let dtsOutputFilePath = _path2.default.join(outDir, "_tsup-dts-rollup" + dtsExtension);
  _chunkDJPFSYOUjs.writeFileSync.call(void 0, 
    dtsInputFilePath,
    formatAggregationExports(exports, declarationDir)
  );
  rollupDtsFile(
    dtsInputFilePath,
    dtsOutputFilePath,
    options.tsconfig || "tsconfig.json"
  );
  const entry = _chunkDJPFSYOUjs.normalizeExperimentalDtsEntry.call(void 0, options);
  for (let [out, sourceFileName] of Object.entries(entry)) {
    sourceFileName = _chunkDJPFSYOUjs.toAbsolutePath.call(void 0, sourceFileName);
    const outFileName = _path2.default.join(outDir, out + dtsExtension);
    const declarations = exports.filter(
      (declaration) => declaration.sourceFileName === sourceFileName
    );
    _chunkDJPFSYOUjs.writeFileSync.call(void 0, 
      outFileName,
      formatDistributionExports(declarations, outFileName, dtsOutputFilePath)
    );
  }
}
async function runDtsRollup(options, exports) {
  try {
    const start = Date.now();
    const getDuration = () => {
      return `${Math.floor(Date.now() - start)}ms`;
    };
    logger2.info("dts", "Build start");
    if (!exports) {
      throw new Error("Unexpected internal error: dts exports is not define");
    }
    for (const format of options.format) {
      await rollupDtsFiles(options, exports, format);
    }
    logger2.success("dts", `\u26A1\uFE0F Build success in ${getDuration()}`);
  } catch (error) {
    _chunk4SM4HQB2js.handleError.call(void 0, error);
    logger2.error("dts", "Build error");
  }
}

// src/plugins/cjs-interop.ts
var cjsInterop = () => {
  return {
    name: "cjs-interop",
    async renderChunk(code, info) {
      if (!this.options.cjsInterop || this.format !== "cjs" || info.type !== "chunk" || !/\.(js|cjs)$/.test(info.path) || !info.entryPoint || _optionalChain([info, 'access', _16 => _16.exports, 'optionalAccess', _17 => _17.length]) !== 1 || info.exports[0] !== "default") {
        return;
      }
      return {
        code: code + "\nmodule.exports = exports.default",
        map: info.map
      };
    }
  };
};

// src/index.ts
var defineConfig = (options) => options;
var killProcess = ({ pid, signal }) => new Promise((resolve, reject) => {
  _treekill2.default.call(void 0, pid, signal, (err) => {
    if (err)
      return reject(err);
    resolve();
  });
});
var normalizeOptions = async (logger3, optionsFromConfigFile, optionsOverride) => {
  const _options = {
    ...optionsFromConfigFile,
    ...optionsOverride
  };
  const options = {
    outDir: "dist",
    ..._options,
    format: typeof _options.format === "string" ? [_options.format] : _options.format || ["cjs"],
    dts: typeof _options.dts === "boolean" ? _options.dts ? {} : void 0 : typeof _options.dts === "string" ? { entry: _options.dts } : _options.dts,
    experimentalDts: typeof _options.experimentalDts === "boolean" ? _options.experimentalDts ? {} : void 0 : typeof _options.experimentalDts === "string" ? { entry: _options.experimentalDts } : _options.experimentalDts
  };
  _chunkBWKNFVFOjs.setSilent.call(void 0, options.silent);
  const entry = options.entry || options.entryPoints;
  if (!entry || Object.keys(entry).length === 0) {
    throw new (0, _chunk4SM4HQB2js.PrettyError)(`No input files, try "tsup <your-file>" instead`);
  }
  if (Array.isArray(entry)) {
    options.entry = await _globby2.default.call(void 0, entry);
    if (!options.entry || options.entry.length === 0) {
      throw new (0, _chunk4SM4HQB2js.PrettyError)(`Cannot find ${entry}`);
    } else {
      logger3.info("CLI", `Building entry: ${options.entry.join(", ")}`);
    }
  } else {
    Object.keys(entry).forEach((alias) => {
      const filename = entry[alias];
      if (!_fs2.default.existsSync(filename)) {
        throw new (0, _chunk4SM4HQB2js.PrettyError)(`Cannot find ${alias}: ${filename}`);
      }
    });
    options.entry = entry;
    logger3.info("CLI", `Building entry: ${JSON.stringify(entry)}`);
  }
  const tsconfig = _bundlerequire.loadTsConfig.call(void 0, process.cwd(), options.tsconfig);
  if (tsconfig) {
    logger3.info(
      "CLI",
      `Using tsconfig: ${_path2.default.relative(process.cwd(), tsconfig.path)}`
    );
    options.tsconfig = tsconfig.path;
    options.tsconfigResolvePaths = _optionalChain([tsconfig, 'access', _18 => _18.data, 'optionalAccess', _19 => _19.compilerOptions, 'optionalAccess', _20 => _20.paths]) || {};
    options.tsconfigDecoratorMetadata = _optionalChain([tsconfig, 'access', _21 => _21.data, 'optionalAccess', _22 => _22.compilerOptions, 'optionalAccess', _23 => _23.emitDecoratorMetadata]);
    if (options.dts) {
      options.dts.compilerOptions = {
        ...tsconfig.data.compilerOptions || {},
        ...options.dts.compilerOptions || {}
      };
    }
    if (options.experimentalDts) {
      options.experimentalDts.compilerOptions = {
        ...tsconfig.data.compilerOptions || {},
        ...options.experimentalDts.compilerOptions || {}
      };
      let entry2 = options.experimentalDts.entry || options.entry;
      if (typeof entry2 === "string") {
        entry2 = [entry2];
      }
      if (Array.isArray(entry2)) {
        entry2 = _chunkDJPFSYOUjs.toObjectEntry.call(void 0, entry2);
      }
      options.experimentalDts.entry = entry2;
    }
    if (!options.target) {
      options.target = _optionalChain([tsconfig, 'access', _24 => _24.data, 'optionalAccess', _25 => _25.compilerOptions, 'optionalAccess', _26 => _26.target, 'optionalAccess', _27 => _27.toLowerCase, 'call', _28 => _28()]);
    }
  } else if (options.tsconfig) {
    throw new (0, _chunk4SM4HQB2js.PrettyError)(`Cannot find tsconfig: ${options.tsconfig}`);
  }
  if (!options.target) {
    options.target = "node16";
  }
  return options;
};
async function build(_options) {
  const config = _options.config === false ? {} : await _chunkBWKNFVFOjs.loadTsupConfig.call(void 0, 
    process.cwd(),
    _options.config === true ? void 0 : _options.config
  );
  const configData = typeof config.data === "function" ? await config.data(_options) : config.data;
  await Promise.all(
    [...Array.isArray(configData) ? configData : [configData]].map(
      async (item) => {
        const logger3 = _chunkBWKNFVFOjs.createLogger.call(void 0, _optionalChain([item, 'optionalAccess', _29 => _29.name]));
        const options = await normalizeOptions(logger3, item, _options);
        logger3.info("CLI", `tsup v${_chunkUWWD4V4Jjs.version}`);
        if (config.path) {
          logger3.info("CLI", `Using tsup config: ${config.path}`);
        }
        if (options.watch) {
          logger3.info("CLI", "Running in watch mode");
        }
        const dtsTask = async () => {
          if (options.dts && options.experimentalDts) {
            throw new Error(
              "You can't use both `dts` and `experimentalDts` at the same time"
            );
          }
          if (options.experimentalDts) {
            const exports = runTypeScriptCompiler(options);
            await runDtsRollup(options, exports);
          }
          if (options.dts) {
            await new Promise((resolve, reject) => {
              const worker = new (0, _worker_threads.Worker)(_path2.default.join(__dirname, "./rollup.js"));
              worker.postMessage({
                configName: _optionalChain([item, 'optionalAccess', _30 => _30.name]),
                options: {
                  ...options,
                  // functions cannot be cloned
                  banner: void 0,
                  footer: void 0,
                  esbuildPlugins: void 0,
                  esbuildOptions: void 0,
                  plugins: void 0,
                  treeshake: void 0,
                  onSuccess: void 0,
                  outExtension: void 0
                }
              });
              worker.on("message", (data) => {
                if (data === "error") {
                  reject(new Error("error occured in dts build"));
                } else if (data === "success") {
                  resolve();
                } else {
                  const { type, text } = data;
                  if (type === "log") {
                    console.log(text);
                  } else if (type === "error") {
                    console.error(text);
                  }
                }
              });
            });
          }
        };
        const mainTasks = async () => {
          if (!_optionalChain([options, 'access', _31 => _31.dts, 'optionalAccess', _32 => _32.only])) {
            let onSuccessProcess;
            let onSuccessCleanup;
            const buildDependencies = /* @__PURE__ */ new Set();
            let depsHash = await _chunkBWKNFVFOjs.getAllDepsHash.call(void 0, process.cwd());
            const doOnSuccessCleanup = async () => {
              if (onSuccessProcess) {
                await killProcess({
                  pid: onSuccessProcess.pid,
                  signal: options.killSignal || "SIGTERM"
                });
              } else if (onSuccessCleanup) {
                await onSuccessCleanup();
              }
              onSuccessProcess = void 0;
              onSuccessCleanup = void 0;
            };
            const debouncedBuildAll = _chunkDJPFSYOUjs.debouncePromise.call(void 0, 
              () => {
                return buildAll();
              },
              100,
              _chunk4SM4HQB2js.handleError
            );
            const buildAll = async () => {
              await doOnSuccessCleanup();
              const previousBuildDependencies = new Set(buildDependencies);
              buildDependencies.clear();
              if (options.clean) {
                const extraPatterns = Array.isArray(options.clean) ? options.clean : [];
                if (options.dts) {
                  extraPatterns.unshift("!**/*.d.{ts,cts,mts}");
                }
                await _chunkDJPFSYOUjs.removeFiles.call(void 0, ["**/*", ...extraPatterns], options.outDir);
                logger3.info("CLI", "Cleaning output folder");
              }
              const css = /* @__PURE__ */ new Map();
              await Promise.all([
                ...options.format.map(async (format, index) => {
                  const pluginContainer = new PluginContainer([
                    shebang(),
                    ...options.plugins || [],
                    treeShakingPlugin({
                      treeshake: options.treeshake,
                      name: options.globalName,
                      silent: options.silent
                    }),
                    cjsSplitting(),
                    cjsInterop(),
                    es5(),
                    sizeReporter(),
                    terserPlugin({
                      minifyOptions: options.minify,
                      format,
                      terserOptions: options.terserOptions,
                      globalName: options.globalName,
                      logger: logger3
                    })
                  ]);
                  await runEsbuild(options, {
                    pluginContainer,
                    format,
                    css: index === 0 || options.injectStyle ? css : void 0,
                    logger: logger3,
                    buildDependencies
                  }).catch((error) => {
                    previousBuildDependencies.forEach(
                      (v) => buildDependencies.add(v)
                    );
                    throw error;
                  });
                })
              ]);
              if (options.onSuccess) {
                if (typeof options.onSuccess === "function") {
                  onSuccessCleanup = await options.onSuccess();
                } else {
                  onSuccessProcess = _execa2.default.call(void 0, options.onSuccess, {
                    shell: true,
                    stdio: "inherit"
                  });
                  onSuccessProcess.on("exit", (code) => {
                    if (code && code !== 0) {
                      process.exitCode = code;
                    }
                  });
                }
              }
            };
            const startWatcher = async () => {
              if (!options.watch)
                return;
              const { watch } = await Promise.resolve().then(() => require("chokidar"));
              const customIgnores = options.ignoreWatch ? Array.isArray(options.ignoreWatch) ? options.ignoreWatch : [options.ignoreWatch] : [];
              const ignored = [
                "**/{.git,node_modules}/**",
                options.outDir,
                ...customIgnores
              ];
              const watchPaths = typeof options.watch === "boolean" ? "." : Array.isArray(options.watch) ? options.watch.filter(
                (path11) => typeof path11 === "string"
              ) : options.watch;
              logger3.info(
                "CLI",
                `Watching for changes in ${Array.isArray(watchPaths) ? watchPaths.map((v) => '"' + v + '"').join(" | ") : '"' + watchPaths + '"'}`
              );
              logger3.info(
                "CLI",
                `Ignoring changes in ${ignored.map((v) => '"' + v + '"').join(" | ")}`
              );
              const watcher = watch(watchPaths, {
                ignoreInitial: true,
                ignorePermissionErrors: true,
                ignored
              });
              watcher.on("all", async (type, file) => {
                file = _chunkDJPFSYOUjs.slash.call(void 0, file);
                if (options.publicDir && isInPublicDir(options.publicDir, file)) {
                  logger3.info("CLI", `Change in public dir: ${file}`);
                  copyPublicDir(options.publicDir, options.outDir);
                  return;
                }
                let shouldSkipChange = false;
                if (options.watch === true) {
                  if (file === "package.json" && !buildDependencies.has(file)) {
                    const currentHash = await _chunkBWKNFVFOjs.getAllDepsHash.call(void 0, process.cwd());
                    shouldSkipChange = currentHash === depsHash;
                    depsHash = currentHash;
                  } else if (!buildDependencies.has(file)) {
                    shouldSkipChange = true;
                  }
                }
                if (shouldSkipChange) {
                  return;
                }
                logger3.info("CLI", `Change detected: ${type} ${file}`);
                debouncedBuildAll();
              });
            };
            logger3.info("CLI", `Target: ${options.target}`);
            await buildAll();
            copyPublicDir(options.publicDir, options.outDir);
            startWatcher();
          }
        };
        await Promise.all([dtsTask(), mainTasks()]);
      }
    )
  );
}



exports.build = build; exports.defineConfig = defineConfig;
