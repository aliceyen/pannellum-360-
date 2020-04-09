// Pannellum 2.4.1, https://github.com/mpetroff/pannellum
window.libpannellum = function(J, f, m) {
    function Ba(P) {
        function bb(a, e) {
            return 1 == a.level && 1 != e.level ? -1 : 1 == e.level && 1 != a.level ? 1 : e.timestamp - a.timestamp
        }
        function W(a, e) {
            return a.level != e.level ? a.level - e.level : a.diff - e.diff
        }
        function X(a, e, d, f, p, c) {
            this.vertices = a;
            this.side = e;
            this.level = d;
            this.x = f;
            this.y = p;
            this.path = c.replace("%s", e).replace("%l", d).replace("%x", f).replace("%y", p)
        }
        function Y(a, e, f, m, p) {
            var c;
            var g = e.vertices;
            c = ea(a, g.slice(0, 3));
            var t = ea(a, g.slice(3, 6))
              , z = ea(a, g.slice(6, 9))
              , g = ea(a, g.slice(9, 12))
              , y = c[0] + t[0] + z[0] + g[0];
            -4 == y || 4 == y ? c = !1 : (y = c[1] + t[1] + z[1] + g[1],
            c = -4 == y || 4 == y ? !1 : 4 != c[2] + t[2] + z[2] + g[2]);
            if (c) {
                c = e.vertices;
                t = c[0] + c[3] + c[6] + c[9];
                z = c[1] + c[4] + c[7] + c[10];
                g = c[2] + c[5] + c[8] + c[11];
                y = Math.sqrt(t * t + z * z + g * g);
                g = Math.asin(g / y);
                t = Math.atan2(z, t) - m;
                t += t > Math.PI ? -2 * Math.PI : t < -Math.PI ? 2 * Math.PI : 0;
                t = Math.abs(t);
                e.diff = Math.acos(Math.sin(f) * Math.sin(g) + Math.cos(f) * Math.cos(g) * Math.cos(t));
                t = !1;
                for (z = 0; z < d.nodeCache.length; z++)
                    if (d.nodeCache[z].path == e.path) {
                        t = !0;
                        d.nodeCache[z].timestamp = d.nodeCacheTimestamp++;
                        d.nodeCache[z].diff = e.diff;
                        d.currentNodes.push(d.nodeCache[z]);
                        break
                    }
                t || (e.timestamp = d.nodeCacheTimestamp++,
                d.currentNodes.push(e),
                d.nodeCache.push(e));
                if (e.level < d.level) {
                    var g = s.cubeResolution * Math.pow(2, e.level - s.maxLevel)
                      , t = Math.ceil(g * s.invTileResolution) - 1
                      , z = g % s.tileResolution * 2
                      , E = 2 * g % s.tileResolution;
                    0 === E && (E = s.tileResolution);
                    0 === z && (z = 2 * s.tileResolution);
                    y = 0.5;
                    if (e.x == t || e.y == t)
                        y = 1 - s.tileResolution / (s.tileResolution + E);
                    var r = 1 - y
                      , g = []
                      , v = y
                      , Q = y
                      , I = y
                      , l = r
                      , A = r
                      , D = r;
                    if (E < s.tileResolution)
                        if (e.x == t && e.y != t) {
                            if (A = Q = 0.5,
                            "d" == e.side || "u" == e.side)
                                D = I = 0.5
                        } else
                            e.x != t && e.y == t && (l = v = 0.5,
                            "l" == e.side || "r" == e.side) && (D = I = 0.5);
                    z <= s.tileResolution && (e.x == t && (v = 0,
                    l = 1,
                    "l" == e.side || "r" == e.side) && (I = 0,
                    D = 1),
                    e.y == t && (Q = 0,
                    A = 1,
                    "d" == e.side || "u" == e.side) && (I = 0,
                    D = 1));
                    E = [c[0], c[1], c[2], c[0] * v + c[3] * l, c[1] * y + c[4] * r, c[2] * I + c[5] * D, c[0] * v + c[6] * l, c[1] * Q + c[7] * A, c[2] * I + c[8] * D, c[0] * y + c[9] * r, c[1] * Q + c[10] * A, c[2] * I + c[11] * D];
                    E = new X(E,e.side,e.level + 1,2 * e.x,2 * e.y,s.fullpath);
                    g.push(E);
                    e.x == t && z <= s.tileResolution || (E = [c[0] * v + c[3] * l, c[1] * y + c[4] * r, c[2] * I + c[5] * D, c[3], c[4], c[5], c[3] * y + c[6] * r, c[4] * Q + c[7] * A, c[5] * I + c[8] * D, c[0] * v + c[6] * l, c[1] * Q + c[7] * A, c[2] * I + c[8] * D],
                    E = new X(E,e.side,e.level + 1,2 * e.x + 1,2 * e.y,s.fullpath),
                    g.push(E));
                    e.x == t && z <= s.tileResolution || e.y == t && z <= s.tileResolution || (E = [c[0] * v + c[6] * l, c[1] * Q + c[7] * A, c[2] * I + c[8] * D, c[3] * y + c[6] * r, c[4] * Q + c[7] * A, c[5] * I + c[8] * D, c[6], c[7], c[8], c[9] * v + c[6] * l, c[10] * y + c[7] * r, c[11] * I + c[8] * D],
                    E = new X(E,e.side,e.level + 1,2 * e.x + 1,2 * e.y + 1,s.fullpath),
                    g.push(E));
                    e.y == t && z <= s.tileResolution || (E = [c[0] * y + c[9] * r, c[1] * Q + c[10] * A, c[2] * I + c[11] * D, c[0] * v + c[6] * l, c[1] * Q + c[7] * A, c[2] * I + c[8] * D, c[9] * v + c[6] * l, c[10] * y + c[7] * r, c[11] * I + c[8] * D, c[9], c[10], c[11]],
                    E = new X(E,e.side,e.level + 1,2 * e.x,2 * e.y + 1,s.fullpath),
                    g.push(E));
                    for (e = 0; e < g.length; e++)
                        Y(a, g[e], f, m, p)
                }
            }
        }
        function Ca() {
            return [-1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1]
        }
        function ra(a, e, d) {
            var f = Math.sin(e);
            e = Math.cos(e);
            if ("x" == d)
                return [a[0], e * a[1] + f * a[2], e * a[2] - f * a[1], a[3], e * a[4] + f * a[5], e * a[5] - f * a[4], a[6], e * a[7] + f * a[8], e * a[8] - f * a[7]];
            if ("y" == d)
                return [e * a[0] - f * a[2], a[1], e * a[2] + f * a[0], e * a[3] - f * a[5], a[4], e * a[5] + f * a[3], e * a[6] - f * a[8], a[7], e * a[8] + f * a[6]];
            if ("z" == d)
                return [e * a[0] + f * a[1], e * a[1] - f * a[0], a[2], e * a[3] + f * a[4], e * a[4] - f * a[3], a[5], e * a[6] + f * a[7], e * a[7] - f * a[6], a[8]]
        }
        function sa(a) {
            return [a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]]
        }
        function La(a) {
            a.textureLoad || (a.textureLoad = !0,
            Ma(encodeURI(a.path + "." + s.extension), function(e) {
                a.texture = e;
                a.textureLoaded = !0
            }, Z.crossOrigin))
        }
        function ea(a, e) {
            var d = [a[0] * e[0] + a[1] * e[1] + a[2] * e[2], a[4] * e[0] + a[5] * e[1] + a[6] * e[2], a[11] + a[8] * e[0] + a[9] * e[1] + a[10] * e[2], 1 / (a[12] * e[0] + a[13] * e[1] + a[14] * e[2])]
              , f = d[0] * d[3]
              , p = d[1] * d[3]
              , d = d[2] * d[3]
              , c = [0, 0, 0];
            -1 > f && (c[0] = -1);
            1 < f && (c[0] = 1);
            -1 > p && (c[1] = -1);
            1 < p && (c[1] = 1);
            if (-1 > d || 1 < d)
                c[2] = 1;
            return c
        }
        function ta() {
            console.log("Reducing canvas size due to error 1286!");
            A.width = Math.round(A.width / 2);
            A.height = Math.round(A.height / 2)
        }
        var A = f.createElement("canvas");
        A.style.width = A.style.height = "100%";
        P.appendChild(A);
        var d, a, V, N, na, R, ua, fa, s, G, va, ka, F, ba, Da, Z;
        this.init = function(h, e, Ia, ja, p, c, g, t) {
            e === m && (e = "equirectangular");
            if ("equirectangular" != e && "cubemap" != e && "multires" != e)
                throw console.log("Error: invalid image type specified!"),
                {
                    type: "config error"
                };
            G = e;
            s = h;
            va = Ia;
            Z = t || {};
            if (d) {
                V && (a.detachShader(d, V),
                a.deleteShader(V));
                N && (a.detachShader(d, N),
                a.deleteShader(N));
                a.bindBuffer(a.ARRAY_BUFFER, null);
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null);
                d.texture && a.deleteTexture(d.texture);
                if (d.nodeCache)
                    for (h = 0; h < d.nodeCache.length; h++)
                        a.deleteTexture(d.nodeCache[h].texture);
                a.deleteProgram(d);
                d = m
            }
            fa = m;
            "cubemap" == G && 0 !== (s[0].width & s[0].width - 1) && (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/) || navigator.userAgent.match(/Trident.*rv[ :]*11\./)) || (a || (a = A.getContext("experimental-webgl", {
                alpha: !1,
                depth: !1
            })),
            a && 1286 == a.getError() && ta());
            if (!a && ("multires" == G && s.hasOwnProperty("fallbackPath") || "cubemap" == G) && ("WebkitAppearance"in f.documentElement.style || navigator.userAgent.match(/Trident.*rv[ :]*11\./) || -1 !== navigator.appVersion.indexOf("MSIE 10"))) {
                R && P.removeChild(R);
                R = f.createElement("div");
                R.className = "pnlm-world";
                ja = s.basePath ? s.basePath + s.fallbackPath : s.fallbackPath;
                var z = "frblud".split("")
                  , y = 0;
                p = function() {
                    var a = f.createElement("canvas");
                    a.className = "pnlm-face pnlm-" + z[this.side] + "face";
                    R.appendChild(a);
                    var c = a.getContext("2d");
                    a.style.width = this.width + 4 + "px";
                    a.style.height = this.height + 4 + "px";
                    a.width = this.width + 4;
                    a.height = this.height + 4;
                    c.drawImage(this, 2, 2);
                    var e = c.getImageData(0, 0, a.width, a.height), d = e.data, h, l;
                    for (h = 2; h < a.width - 2; h++)
                        for (l = 0; 4 > l; l++)
                            d[4 * (h + a.width) + l] = d[4 * (h + 2 * a.width) + l],
                            d[4 * (h + a.width * (a.height - 2)) + l] = d[4 * (h + a.width * (a.height - 3)) + l];
                    for (h = 2; h < a.height - 2; h++)
                        for (l = 0; 4 > l; l++)
                            d[4 * (h * a.width + 1) + l] = d[4 * (h * a.width + 2) + l],
                            d[4 * ((h + 1) * a.width - 2) + l] = d[4 * ((h + 1) * a.width - 3) + l];
                    for (l = 0; 4 > l; l++)
                        d[4 * (a.width + 1) + l] = d[4 * (2 * a.width + 2) + l],
                        d[4 * (2 * a.width - 2) + l] = d[4 * (3 * a.width - 3) + l],
                        d[4 * (a.width * (a.height - 2) + 1) + l] = d[4 * (a.width * (a.height - 3) + 2) + l],
                        d[4 * (a.width * (a.height - 1) - 2) + l] = d[4 * (a.width * (a.height - 2) - 3) + l];
                    for (h = 1; h < a.width - 1; h++)
                        for (l = 0; 4 > l; l++)
                            d[4 * h + l] = d[4 * (h + a.width) + l],
                            d[4 * (h + a.width * (a.height - 1)) + l] = d[4 * (h + a.width * (a.height - 2)) + l];
                    for (h = 1; h < a.height - 1; h++)
                        for (l = 0; 4 > l; l++)
                            d[h * a.width * 4 + l] = d[4 * (h * a.width + 1) + l],
                            d[4 * ((h + 1) * a.width - 1) + l] = d[4 * ((h + 1) * a.width - 2) + l];
                    for (l = 0; 4 > l; l++)
                        d[l] = d[4 * (a.width + 1) + l],
                        d[4 * (a.width - 1) + l] = d[4 * (2 * a.width - 2) + l],
                        d[a.width * (a.height - 1) * 4 + l] = d[4 * (a.width * (a.height - 2) + 1) + l],
                        d[4 * (a.width * a.height - 1) + l] = d[4 * (a.width * (a.height - 1) - 2) + l];
                    c.putImageData(e, 0, 0);
                    y++;
                    6 == y && (na = this.width,
                    P.appendChild(R),
                    g())
                }
                ;
                for (h = 0; 6 > h; h++)
                    c = new Image,
                    c.crossOrigin = Z.crossOrigin ? Z.crossOrigin : "anonymous",
                    c.side = h,
                    c.onload = p,
                    c.src = "multires" == G ? encodeURI(ja.replace("%s", z[h]) + "." + s.extension) : encodeURI(s[h].src)
            } else {
                if (!a)
                    throw console.log("Error: no WebGL support detected!"),
                    {
                        type: "no webgl"
                    };
                s.fullpath = s.basePath ? s.basePath + s.path : s.path;
                s.invTileResolution = 1 / s.tileResolution;
                e = Ca();
                ua = [];
                for (h = 0; 6 > h; h++)
                    ua[h] = e.slice(12 * h, 12 * h + 12),
                    e = Ca();
                if ("equirectangular" == G) {
                    if (h = Math.max(s.width, s.height),
                    e = a.getParameter(a.MAX_TEXTURE_SIZE),
                    h > e)
                        throw console.log("Error: The image is too big; it's " + h + "px wide, but this device's maximum supported width is " + e + "px."),
                        {
                            type: "webgl size error",
                            width: h,
                            maxWidth: e
                        };
                } else if ("cubemap" == G && (h = s[0].width,
                e = a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),
                h > e))
                    throw console.log("Error: The cube face image is too big; it's " + h + "px wide, but this device's maximum supported width is " + e + "px."),
                    {
                        type: "webgl size error",
                        width: h,
                        maxWidth: e
                    };
                t === m || t.horizonPitch === m && t.horizonRoll === m || (fa = [t.horizonPitch == m ? 0 : t.horizonPitch, t.horizonRoll == m ? 0 : t.horizonRoll]);
                h = a.TEXTURE_2D;
                a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight);
                V = a.createShader(a.VERTEX_SHADER);
                e = r;
                "multires" == G && (e = v);
                a.shaderSource(V, e);
                a.compileShader(V);
                N = a.createShader(a.FRAGMENT_SHADER);
                e = Na;
                "cubemap" == G ? (h = a.TEXTURE_CUBE_MAP,
                e = Oa) : "multires" == G && (e = oa);
                a.shaderSource(N, e);
                a.compileShader(N);
                d = a.createProgram();
                a.attachShader(d, V);
                a.attachShader(d, N);
                a.linkProgram(d);
                a.getShaderParameter(V, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(V));
                a.getShaderParameter(N, a.COMPILE_STATUS) || console.log(a.getShaderInfoLog(N));
                a.getProgramParameter(d, a.LINK_STATUS) || console.log(a.getProgramInfoLog(d));
                a.useProgram(d);
                d.drawInProgress = !1;
                d.texCoordLocation = a.getAttribLocation(d, "a_texCoord");
                a.enableVertexAttribArray(d.texCoordLocation);
                "multires" != G ? (ka || (ka = a.createBuffer()),
                a.bindBuffer(a.ARRAY_BUFFER, ka),
                a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]), a.STATIC_DRAW),
                a.vertexAttribPointer(d.texCoordLocation, 2, a.FLOAT, !1, 0, 0),
                d.aspectRatio = a.getUniformLocation(d, "u_aspectRatio"),
                a.uniform1f(d.aspectRatio, a.drawingBufferWidth / a.drawingBufferHeight),
                d.psi = a.getUniformLocation(d, "u_psi"),
                d.theta = a.getUniformLocation(d, "u_theta"),
                d.f = a.getUniformLocation(d, "u_f"),
                d.h = a.getUniformLocation(d, "u_h"),
                d.v = a.getUniformLocation(d, "u_v"),
                d.vo = a.getUniformLocation(d, "u_vo"),
                d.rot = a.getUniformLocation(d, "u_rot"),
                a.uniform1f(d.h, ja / (2 * Math.PI)),
                a.uniform1f(d.v, p / Math.PI),
                a.uniform1f(d.vo, c / Math.PI * 2),
                "equirectangular" == G && (d.backgroundColor = a.getUniformLocation(d, "u_backgroundColor"),
                a.uniform4fv(d.backgroundColor, (t.backgroundColor ? t.backgroundColor : [0, 0, 0]).concat([1]))),
                d.texture = a.createTexture(),
                a.bindTexture(h, d.texture),
                "cubemap" == G ? (a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s[1]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s[3]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s[4]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s[5]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s[0]),
                a.texImage2D(a.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s[2])) : a.texImage2D(h, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s),
                a.texParameteri(h, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                a.texParameteri(h, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                a.texParameteri(h, a.TEXTURE_MIN_FILTER, a.LINEAR),
                a.texParameteri(h, a.TEXTURE_MAG_FILTER, a.LINEAR)) : (d.vertPosLocation = a.getAttribLocation(d, "a_vertCoord"),
                a.enableVertexAttribArray(d.vertPosLocation),
                F || (F = a.createBuffer()),
                ba || (ba = a.createBuffer()),
                Da || (Da = a.createBuffer()),
                a.bindBuffer(a.ARRAY_BUFFER, ba),
                a.bufferData(a.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), a.STATIC_DRAW),
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, Da),
                a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), a.STATIC_DRAW),
                d.perspUniform = a.getUniformLocation(d, "u_perspMatrix"),
                d.cubeUniform = a.getUniformLocation(d, "u_cubeMatrix"),
                d.level = -1,
                d.currentNodes = [],
                d.nodeCache = [],
                d.nodeCacheTimestamp = 0);
                ja = a.getError();
                if (0 !== ja)
                    throw console.log("Error: Something went wrong with WebGL!", ja),
                    {
                        type: "webgl error"
                    };
                g()
            }
        }
        ;
        this.destroy = function() {
            P !== m && (A !== m && P.contains(A) && P.removeChild(A),
            R !== m && P.contains(R) && P.removeChild(R));
            if (a) {
                var d = a.getExtension("WEBGL_lose_context");
                d && d.loseContext()
            }
        }
        ;
        this.resize = function() {
            var h = J.devicePixelRatio || 1;
            A.width = A.clientWidth * h;
            A.height = A.clientHeight * h;
            a && (1286 == a.getError() && ta(),
            a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight),
            "multires" != G && a.uniform1f(d.aspectRatio, A.clientWidth / A.clientHeight))
        }
        ;
        this.resize();
        this.setPose = function(a, d) {
            fa = [a, d]
        }
        ;
        this.render = function(h, e, f, r) {
            var p;
            p = 0;
            r === m && (r = {});
            r.roll && (p = r.roll);
            if (fa !== m) {
                var c = fa[0]
                  , g = fa[1]
                  , t = h
                  , z = e
                  , y = Math.cos(g) * Math.sin(h) * Math.sin(c) + Math.cos(h) * (Math.cos(c) * Math.cos(e) + Math.sin(g) * Math.sin(c) * Math.sin(e))
                  , v = -Math.sin(h) * Math.sin(g) + Math.cos(h) * Math.cos(g) * Math.sin(e);
                h = Math.cos(g) * Math.cos(c) * Math.sin(h) + Math.cos(h) * (-Math.cos(e) * Math.sin(c) + Math.cos(c) * Math.sin(g) * Math.sin(e));
                h = Math.asin(Math.max(Math.min(h, 1), -1));
                e = Math.atan2(v, y);
                c = [Math.cos(t) * (Math.sin(g) * Math.sin(c) * Math.cos(z) - Math.cos(c) * Math.sin(z)), Math.cos(t) * Math.cos(g) * Math.cos(z), Math.cos(t) * (Math.cos(c) * Math.sin(g) * Math.cos(z) + Math.sin(z) * Math.sin(c))];
                g = [-Math.cos(h) * Math.sin(e), Math.cos(h) * Math.cos(e)];
                g = Math.acos(Math.max(Math.min((c[0] * g[0] + c[1] * g[1]) / (Math.sqrt(c[0] * c[0] + c[1] * c[1] + c[2] * c[2]) * Math.sqrt(g[0] * g[0] + g[1] * g[1])), 1), -1));
                0 > c[2] && (g = 2 * Math.PI - g);
                p += g
            }
            if (a || "multires" != G && "cubemap" != G) {
                if ("multires" != G)
                    f = 2 * Math.atan(Math.tan(0.5 * f) / (a.drawingBufferWidth / a.drawingBufferHeight)),
                    f = 1 / Math.tan(0.5 * f),
                    a.uniform1f(d.psi, e),
                    a.uniform1f(d.theta, h),
                    a.uniform1f(d.rot, p),
                    a.uniform1f(d.f, f),
                    !0 === va && "equirectangular" == G && (a.bindTexture(a.TEXTURE_2D, d.texture),
                    a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, s)),
                    a.drawArrays(a.TRIANGLES, 0, 6);
                else {
                    c = a.drawingBufferWidth / a.drawingBufferHeight;
                    g = 2 * Math.atan(Math.tan(f / 2) * a.drawingBufferHeight / a.drawingBufferWidth);
                    g = 1 / Math.tan(g / 2);
                    c = [g / c, 0, 0, 0, 0, g, 0, 0, 0, 0, 100.1 / -99.9, 20 / -99.9, 0, 0, -1, 0];
                    for (g = 1; g < s.maxLevel && a.drawingBufferWidth > s.tileResolution * Math.pow(2, g - 1) * Math.tan(f / 2) * 0.707; )
                        g++;
                    d.level = g;
                    g = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                    g = ra(g, -p, "z");
                    g = ra(g, -h, "x");
                    g = ra(g, e, "y");
                    g = [g[0], g[1], g[2], 0, g[3], g[4], g[5], 0, g[6], g[7], g[8], 0, 0, 0, 0, 1];
                    a.uniformMatrix4fv(d.perspUniform, !1, new Float32Array(sa(c)));
                    a.uniformMatrix4fv(d.cubeUniform, !1, new Float32Array(sa(g)));
                    c = [c[0] * g[0], c[0] * g[1], c[0] * g[2], 0, c[5] * g[4], c[5] * g[5], c[5] * g[6], 0, c[10] * g[8], c[10] * g[9], c[10] * g[10], c[11], -g[8], -g[9], -g[10], 0];
                    d.nodeCache.sort(bb);
                    if (200 < d.nodeCache.length && d.nodeCache.length > d.currentNodes.length + 50)
                        for (g = d.nodeCache.splice(200, d.nodeCache.length - 200),
                        p = 0; p < g.length; p++)
                            a.deleteTexture(g[p].texture);
                    d.currentNodes = [];
                    g = "fbudlr".split("");
                    for (p = 0; 6 > p; p++)
                        t = new X(ua[p],g[p],1,0,0,s.fullpath),
                        Y(c, t, h, e, f);
                    d.currentNodes.sort(W);
                    for (p = 0; p < d.currentNodes.length; p++)
                        if (!d.currentNodes[p].texture) {
                            setTimeout(La, 0, d.currentNodes[p]);
                            break
                        }
                    if (!d.drawInProgress) {
                        d.drawInProgress = !0;
                        for (h = 0; h < d.currentNodes.length; h++)
                            d.currentNodes[h].textureLoaded && (a.bindBuffer(a.ARRAY_BUFFER, F),
                            a.bufferData(a.ARRAY_BUFFER, new Float32Array(d.currentNodes[h].vertices), a.STATIC_DRAW),
                            a.vertexAttribPointer(d.vertPosLocation, 3, a.FLOAT, !1, 0, 0),
                            a.bindBuffer(a.ARRAY_BUFFER, ba),
                            a.vertexAttribPointer(d.texCoordLocation, 2, a.FLOAT, !1, 0, 0),
                            a.bindTexture(a.TEXTURE_2D, d.currentNodes[h].texture),
                            a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0));
                        d.drawInProgress = !1
                    }
                }
                if (r.returnImage !== m)
                    return A.toDataURL("image/png")
            } else
                for (p = na / 2,
                r = {
                    f: "translate3d(-" + (p + 2) + "px, -" + (p + 2) + "px, -" + p + "px)",
                    b: "translate3d(" + (p + 2) + "px, -" + (p + 2) + "px, " + p + "px) rotateX(180deg) rotateZ(180deg)",
                    u: "translate3d(-" + (p + 2) + "px, -" + p + "px, " + (p + 2) + "px) rotateX(270deg)",
                    d: "translate3d(-" + (p + 2) + "px, " + p + "px, -" + (p + 2) + "px) rotateX(90deg)",
                    l: "translate3d(-" + p + "px, -" + (p + 2) + "px, " + (p + 2) + "px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",
                    r: "translate3d(" + p + "px, -" + (p + 2) + "px, -" + (p + 2) + "px) rotateY(270deg)"
                },
                f = 1 / Math.tan(f / 2),
                f = f * a.drawingBufferWidth / 2 + "px",
                h = "perspective(" + f + ") translateZ(" + f + ") rotateX(" + h + "rad) rotateY(" + e + "rad) ",
                e = Object.keys(r),
                p = 0; 6 > p; p++)
                    f = R.querySelector(".pnlm-" + e[p] + "face").style,
                    f.webkitTransform = h + r[e[p]],
                    f.transform = h + r[e[p]]
        }
        ;
        this.isLoading = function() {
            if (a && "multires" == G)
                for (var f = 0; f < d.currentNodes.length; f++)
                    if (!d.currentNodes[f].textureLoaded)
                        return !0;
            return !1
        }
        ;
        this.getCanvas = function() {
            return A
        }
        ;
        var Ma = function() {
            function d() {
                var e = this;
                this.texture = this.callback = null;
                this.image = new Image;
                this.image.crossOrigin = c ? c : "anonymous";
                this.image.addEventListener("load", function() {
                    var c = e.image;
                    a.bindTexture(a.TEXTURE_2D, e.texture);
                    a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, c);
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
                    a.bindTexture(a.TEXTURE_2D, null);
                    e.callback(e.texture);
                    p.length ? (c = p.shift(),
                    e.loadTexture(c.src, c.texture, c.callback)) : m[f++] = e
                })
            }
            function e(a, c, d) {
                this.src = a;
                this.texture = c;
                this.callback = d
            }
            var f = 4, m = {}, p = [], c;
            d.prototype.loadTexture = function(a, c, d) {
                this.texture = c;
                this.callback = d;
                this.image.src = a
            }
            ;
            for (var g = 0; g < f; g++)
                m[g] = new d;
            return function(d, g, h) {
                c = h;
                h = a.createTexture();
                f ? m[--f].loadTexture(d, h, g) : p.push(new e(d,h,g));
                return h
            }
        }()
    }
    var r = "attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}"
      , v = "attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}"
      , Oa = "precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);float cosphi = cos(phi);\ngl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));\n}"
      , Na = "precision mediump float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);lambda = mod(lambda + PI, PI * 2.0) - PI;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = u_backgroundColor;\nelse\ngl_FragColor = texture2D(u_image, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}"
      , oa = "varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}";
    return {
        renderer: function(f, m, r, v) {
            return new Ba(f,m,r,v)
        }
    }
}(window, document);
window.requestAnimationFrame || (window.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(J, f) {
        window.setTimeout(J, 1E3 / 60)
    }
}());
window.pannellum = function(J, f, m) {
    function Ba(r, v) {
        function Oa(u) {
            J.removeEventListener("deviceorientation", Oa);
            u && null !== u.alpha && null !== u.beta && null !== u.gamma ? (w.container.appendChild(w.orientation),
            pa = !0,
            Ya && Ka()) : pa = !1
        }
        function Na() {
            var u = f.createElement("div");
            u.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e";
            if (1 == u.getElementsByTagName("i").length)
                W();
            else {
                wa = b.hfov;
                Ea = b.pitch;
                var a;
                if ("cubemap" == b.type) {
                    O = [];
                    for (u = 0; 6 > u; u++)
                        O.push(new Image),
                        O[u].crossOrigin = b.crossOrigin;
                    n.load.lbox.style.display = "block";
                    n.load.lbar.style.display = "none"
                } else if ("multires" == b.type)
                    u = JSON.parse(JSON.stringify(b.multiRes)),
                    b.basePath && b.multiRes.basePath && !/^(?:[a-z]+:)?\/\//i.test(b.multiRes.basePath) ? u.basePath = b.basePath + b.multiRes.basePath : b.multiRes.basePath ? u.basePath = b.multiRes.basePath : b.basePath && (u.basePath = b.basePath),
                    O = u;
                else if (!0 === b.dynamic)
                    O = b.panorama;
                else {
                    if (b.panorama === m) {
                        W(b.strings.noPanoramaError);
                        return
                    }
                    O = new Image
                }
                if ("cubemap" == b.type)
                    for (var ca = 6, c = function() {
                        ca--;
                        0 === ca && P()
                    }, d = function(a) {
                        var u = f.createElement("a");
                        u.href = a.target.src;
                        u.innerHTML = u.href;
                        W(b.strings.fileAccessError.replace("%s", u.outerHTML))
                    }, u = 0; u < O.length; u++)
                        O[u].onload = c,
                        O[u].onerror = d,
                        a = b.cubeMap[u],
                        b.basePath && !oa(a) && (a = b.basePath + a),
                        O[u].src = encodeURI(a);
                else if ("multires" == b.type)
                    P();
                else if (a = "",
                b.basePath && (a = b.basePath),
                !0 !== b.dynamic) {
                    a = oa(b.panorama) ? b.panorama : a + b.panorama;
                    O.onload = function() {
                        J.URL.revokeObjectURL(this.src);
                        P()
                    }
                    ;
                    var e = new XMLHttpRequest;
                    e.onloadend = function() {
                        if (200 != e.status) {
                            var u = f.createElement("a");
                            u.href = encodeURI(a);
                            u.innerHTML = u.href;
                            W(b.strings.fileAccessError.replace("%s", u.outerHTML))
                        }
                        Ba(this.response);
                        n.load.msg.innerHTML = ""
                    }
                    ;
                    e.onprogress = function(a) {
                        if (a.lengthComputable) {
                            n.load.lbarFill.style.width = a.loaded / a.total * 100 + "%";
                            var u, b;
                            1E6 < a.total ? (u = "MB",
                            b = (a.loaded / 1E6).toFixed(2),
                            a = (a.total / 1E6).toFixed(2)) : 1E3 < a.total ? (u = "kB",
                            b = (a.loaded / 1E3).toFixed(1),
                            a = (a.total / 1E3).toFixed(1)) : (u = "B",
                            b = a.loaded,
                            a = a.total);
                            n.load.msg.innerHTML = b + " / " + a + " " + u
                        } else
                            n.load.lbox.style.display = "block",
                            n.load.lbar.style.display = "none"
                    }
                    ;
                    try {
                        e.open("GET", a, !0)
                    } catch (g) {
                        W(b.strings.malformedURLError)
                    }
                    e.responseType = "blob";
                    e.setRequestHeader("Accept", "image/*,*/*;q=0.9");
                    e.withCredentials = "use-credentials" === b.crossOrigin;
                    e.send()
                }
                b.draggable && C.classList.add("pnlm-grab");
                C.classList.remove("pnlm-grabbing")
            }
        }
        function oa(a) {
            return /^(?:[a-z]+:)?\/\//i.test(a) || "/" == a[0] || "blob:" == a.slice(0, 5)
        }
        function P() {
            B || (B = new libpannellum.renderer(M));
            Sa || (Sa = !0,
            H.addEventListener("mousedown", Ca, !1),
            f.addEventListener("mousemove", La, !1),
            f.addEventListener("mouseup", ea, !1),
            b.mouseZoom && (C.addEventListener("mousewheel", na, !1),
            C.addEventListener("DOMMouseScroll", na, !1)),
            b.doubleClickZoom && H.addEventListener("dblclick", ra, !1),
            C.addEventListener("mozfullscreenchange", y, !1),
            C.addEventListener("webkitfullscreenchange", y, !1),
            C.addEventListener("msfullscreenchange", y, !1),
            C.addEventListener("fullscreenchange", y, !1),
            J.addEventListener("resize", ka, !1),
            J.addEventListener("orientationchange", ka, !1),
            b.disableKeyboardCtrl || (r.addEventListener("keydown", R, !1),
            r.addEventListener("keyup", fa, !1),
            r.addEventListener("blur", ua, !1)),
            f.addEventListener("mouseleave", ea, !1),
            "" === f.documentElement.style.pointerAction && "" === f.documentElement.style.touchAction ? (H.addEventListener("pointerdown", a, !1),
            H.addEventListener("pointermove", V, !1),
            H.addEventListener("pointerup", N, !1),
            H.addEventListener("pointerleave", N, !1)) : (H.addEventListener("touchstart", ta, !1),
            H.addEventListener("touchmove", A, !1),
            H.addEventListener("touchend", d, !1)),
            J.navigator.pointerEnabled && (r.style.touchAction = "none"));
            h();
            setTimeout(function() {}, 500)
        }
        function Ba(a) {
            var k = new FileReader;
            k.addEventListener("loadend", function() {
                var ca = k.result;
                if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)) {
                    var c = ca.indexOf("\u00ff\u00c2");
                    (0 > c || 65536 < c) && W(b.strings.iOS8WebGLError)
                }
                c = ca.indexOf("<x:xmpmeta");
                if (-1 < c && !0 !== b.ignoreGPanoXMP) {
                    var d = ca.substring(c, ca.indexOf("</x:xmpmeta>") + 12)
                      , e = function(a) {
                        var u;
                        0 <= d.indexOf(a + '="') ? (u = d.substring(d.indexOf(a + '="') + a.length + 2),
                        u = u.substring(0, u.indexOf('"'))) : 0 <= d.indexOf(a + ">") && (u = d.substring(d.indexOf(a + ">") + a.length + 1),
                        u = u.substring(0, u.indexOf("<")));
                        return u !== m ? Number(u) : null
                    }
                      , ca = e("GPano:FullPanoWidthPixels")
                      , c = e("GPano:CroppedAreaImageWidthPixels")
                      , f = e("GPano:FullPanoHeightPixels")
                      , g = e("GPano:CroppedAreaImageHeightPixels")
                      , h = e("GPano:CroppedAreaTopPixels")
                      , l = e("GPano:PoseHeadingDegrees")
                      , p = e("GPano:PosePitchDegrees")
                      , e = e("GPano:PoseRollDegrees");
                    null !== ca && null !== c && null !== f && null !== g && null !== h && (0 > da.indexOf("haov") && (b.haov = c / ca * 360),
                    0 > da.indexOf("vaov") && (b.vaov = g / f * 180),
                    0 > da.indexOf("vOffset") && (b.vOffset = -180 * ((h + g / 2) / f - 0.5)),
                    null !== l && 0 > da.indexOf("northOffset") && (b.northOffset = l,
                    !1 !== b.compass && (b.compass = !0)),
                    null !== p && null !== e && (0 > da.indexOf("horizonPitch") && (b.horizonPitch = p),
                    0 > da.indexOf("horizonRoll") && (b.horizonRoll = e)))
                }
                O.src = J.URL.createObjectURL(a)
            });
            k.readAsBinaryString !== m ? k.readAsBinaryString(a) : k.readAsText(a)
        }
        function W(a) {
            a === m && (a = b.strings.genericWebGLError);
            n.errorMsg.innerHTML = "<p>" + a + "</p>";
            w.load.style.display = "none";
            n.load.box.style.display = "none";
            n.errorMsg.style.display = "table";
            Pa = !0;
            M.style.display = "none";
            ga("error", a)
        }
        function X(a) {
            var b = Y(a);
            ha.style.left = b.x + "px";
            ha.style.top = b.y + "px";
            clearTimeout(X.t1);
            clearTimeout(X.t2);
            ha.style.display = "block";
            ha.style.opacity = 1;
            X.t1 = setTimeout(function() {
                ha.style.opacity = 0
            }, 2E3);
            X.t2 = setTimeout(function() {
                ha.style.display = "none"
            }, 2500);
            a.preventDefault()
        }
        function Y(a) {
            var b = r.getBoundingClientRect()
              , c = {};
            c.x = a.clientX - b.left;
            c.y = a.clientY - b.top;
            return c
        }
        function Ca(a) {
            a.preventDefault();
            r.focus();
            if (K && b.draggable) {
                var k = Y(a);
                if (b.hotSpotDebug) {
                    var c = sa(a);
                    console.log("Pitch: " + c[0] + ", Yaw: " + c[1] + ", Center Pitch: " + b.pitch + ", Center Yaw: " + b.yaw + ", HFOV: " + b.hfov)
                }
                Ja();
                l();
                b.roll = 0;
                x.hfov = 0;
                la = !0;
                S = Date.now();
                xa = k.x;
                ya = k.y;
                Qa = b.yaw;
                Ra = b.pitch;
                C.classList.add("pnlm-grabbing");
                C.classList.remove("pnlm-grab");
                ga("mousedown", a);
                F()
            }
        }
        function ra(a) {
            b.minHfov === b.hfov ? za.setHfov(wa, 1E3) : (a = sa(a),
            za.lookAt(a[0], a[1], b.minHfov, 1E3))
        }
        function sa(a) {
            var k = Y(a);
            a = B.getCanvas();
            var c = a.clientWidth
              , d = a.clientHeight;
            a = k.x / c * 2 - 1;
            var d = (1 - k.y / d * 2) * d / c
              , e = 1 / Math.tan(b.hfov * Math.PI / 360)
              , f = Math.sin(b.pitch * Math.PI / 180)
              , g = Math.cos(b.pitch * Math.PI / 180)
              , k = e * g - d * f
              , c = Math.sqrt(a * a + k * k)
              , d = 180 * Math.atan((d * g + e * f) / c) / Math.PI;
            a = 180 * Math.atan2(a / c, k / c) / Math.PI + b.yaw;
            -180 > a && (a += 360);
            180 < a && (a -= 360);
            return [d, a]
        }
        function La(a) {
            if (la && K) {
                S = Date.now();
                var k = B.getCanvas()
                  , c = k.clientWidth
                  , k = k.clientHeight;
                a = Y(a);
                var d = 180 * (Math.atan(xa / c * 2 - 1) - Math.atan(a.x / c * 2 - 1)) / Math.PI * b.hfov / 90 + Qa;
                x.yaw = (d - b.yaw) % 360 * 0.2;
                b.yaw = d;
                c = 360 * Math.atan(Math.tan(b.hfov / 360 * Math.PI) * k / c) / Math.PI;
                c = 180 * (Math.atan(a.y / k * 2 - 1) - Math.atan(ya / k * 2 - 1)) / Math.PI * c / 90 + Ra;
                x.pitch = 0.2 * (c - b.pitch);
                b.pitch = c
            }
        }
        function ea(a) {
            la && (la = !1,
            15 < Date.now() - S && (x.pitch = x.yaw = 0),
            C.classList.add("pnlm-grab"),
            C.classList.remove("pnlm-grabbing"),
            S = Date.now(),
            ga("mouseup", a))
        }
        function ta(a) {
            if (K && b.draggable) {
                Ja();
                l();
                b.roll = 0;
                x.hfov = 0;
                var k = Y(a.targetTouches[0]);
                xa = k.x;
                ya = k.y;
                if (2 == a.targetTouches.length) {
                    var c = Y(a.targetTouches[1]);
                    xa += 0.5 * (c.x - k.x);
                    ya += 0.5 * (c.y - k.y);
                    Fa = Math.sqrt((k.x - c.x) * (k.x - c.x) + (k.y - c.y) * (k.y - c.y))
                }
                la = !0;
                S = Date.now();
                Qa = b.yaw;
                Ra = b.pitch;
                ga("touchstart", a);
                F()
            }
        }
        function A(a) {
            if (b.draggable && (a.preventDefault(),
            K && (S = Date.now()),
            la && K)) {
                var k = Y(a.targetTouches[0])
                  , c = k.x
                  , d = k.y;
                2 == a.targetTouches.length && -1 != Fa && (a = Y(a.targetTouches[1]),
                c += 0.5 * (a.x - k.x),
                d += 0.5 * (a.y - k.y),
                k = Math.sqrt((k.x - a.x) * (k.x - a.x) + (k.y - a.y) * (k.y - a.y)),
                U(b.hfov + 0.1 * (Fa - k)),
                Fa = k);
                k = b.hfov / 360;
                c = (xa - c) * k + Qa;
                x.yaw = (c - b.yaw) % 360 * 0.2;
                b.yaw = c;
                d = (d - ya) * k + Ra;
                x.pitch = 0.2 * (d - b.pitch);
                b.pitch = d
            }
        }
        function d() {
            la = !1;
            150 < Date.now() - S && (x.pitch = x.yaw = 0);
            Fa = -1;
            S = Date.now();
            ga("touchend", event)
        }
        function a(a) {
            "touch" == a.pointerType && (ma.push(a.pointerId),
            Aa.push({
                clientX: a.clientX,
                clientY: a.clientY
            }),
            a.targetTouches = Aa,
            ta(a),
            a.preventDefault())
        }
        function V(a) {
            if ("touch" == a.pointerType)
                for (var b = 0; b < ma.length; b++)
                    if (a.pointerId == ma[b]) {
                        Aa[b].clientX = a.clientX;
                        Aa[b].clientY = a.clientY;
                        a.targetTouches = Aa;
                        A(a);
                        a.preventDefault();
                        break
                    }
        }
        function N(a) {
            if ("touch" == a.pointerType) {
                for (var b = !1, c = 0; c < ma.length; c++)
                    a.pointerId == ma[c] && (ma[c] = m),
                    ma[c] && (b = !0);
                b || (ma = [],
                Aa = [],
                d());
                a.preventDefault()
            }
        }
        function na(a) {
            K && ("fullscreenonly" != b.mouseZoom || Ga) && (a.preventDefault(),
            Ja(),
            S = Date.now(),
            a.wheelDeltaY ? (U(b.hfov - 0.05 * a.wheelDeltaY),
            x.hfov = 0 > a.wheelDelta ? 1 : -1) : a.wheelDelta ? (U(b.hfov - 0.05 * a.wheelDelta),
            x.hfov = 0 > a.wheelDelta ? 1 : -1) : a.detail && (U(b.hfov + 1.5 * a.detail),
            x.hfov = 0 < a.detail ? 1 : -1),
            F())
        }
        function R(a) {
            Ja();
            S = Date.now();
            l();
            b.roll = 0;
            var k = a.which || a.keycode;
            0 > Za.indexOf(k) || (a.preventDefault(),
            27 == k ? Ga && z() : s(k, !0))
        }
        function ua() {
            for (var a = 0; 10 > a; a++)
                q[a] = !1
        }
        function fa(a) {
            var b = a.which || a.keycode;
            0 > Za.indexOf(b) || (a.preventDefault(),
            s(b, !1))
        }
        function s(a, b) {
            var c = !1;
            switch (a) {
            case 109:
            case 189:
            case 17:
            case 173:
                q[0] != b && (c = !0);
                q[0] = b;
                break;
            case 107:
            case 187:
            case 16:
            case 61:
                q[1] != b && (c = !0);
                q[1] = b;
                break;
            case 38:
                q[2] != b && (c = !0);
                q[2] = b;
                break;
            case 87:
                q[6] != b && (c = !0);
                q[6] = b;
                break;
            case 40:
                q[3] != b && (c = !0);
                q[3] = b;
                break;
            case 83:
                q[7] != b && (c = !0);
                q[7] = b;
                break;
            case 37:
                q[4] != b && (c = !0);
                q[4] = b;
                break;
            case 65:
                q[8] != b && (c = !0);
                q[8] = b;
                break;
            case 39:
                q[5] != b && (c = !0);
                q[5] = b;
                break;
            case 68:
                q[9] != b && (c = !0),
                q[9] = b
            }
            c && b && (ia = "undefined" !== typeof performance && performance.now() ? performance.now() : Date.now(),
            F())
        }
        function G() {
            if (K) {
                var a = !1, k = b.pitch, c = b.yaw, d = b.hfov, e;
                e = "undefined" !== typeof performance && performance.now() ? performance.now() : Date.now();
                ia === m && (ia = e);
                var f = (e - ia) * b.hfov / 1700
                  , f = Math.min(f, 1);
                q[0] && !0 === b.keyboardZoom && (U(b.hfov + (0.8 * x.hfov + 0.5) * f),
                a = !0);
                q[1] && !0 === b.keyboardZoom && (U(b.hfov + (0.8 * x.hfov - 0.2) * f),
                a = !0);
                if (q[2] || q[6])
                    b.pitch += (0.8 * x.pitch + 0.2) * f,
                    a = !0;
                if (q[3] || q[7])
                    b.pitch += (0.8 * x.pitch - 0.2) * f,
                    a = !0;
                if (q[4] || q[8])
                    b.yaw += (0.8 * x.yaw - 0.2) * f,
                    a = !0;
                if (q[5] || q[9])
                    b.yaw += (0.8 * x.yaw + 0.2) * f,
                    a = !0;
                a && (S = Date.now());
                Date.now();
                if (b.autoRotate) {
                    if (0.001 < e - ia) {
                        var a = (e - ia) / 1E3
                          , g = (x.yaw / a * f - 0.2 * b.autoRotate) * a
                          , g = (0 < -b.autoRotate ? 1 : -1) * Math.min(Math.abs(b.autoRotate * a), Math.abs(g));
                        b.yaw += g
                    }
                    b.autoRotateStopDelay && (b.autoRotateStopDelay -= e - ia,
                    0 >= b.autoRotateStopDelay && (b.autoRotateStopDelay = !1,
                    $ = b.autoRotate,
                    b.autoRotate = 0))
                }
                L.pitch && (va("pitch"),
                k = b.pitch);
                L.yaw && (va("yaw"),
                c = b.yaw);
                L.hfov && (va("hfov"),
                d = b.hfov);
                0 < f && !b.autoRotate && (q[4] || q[5] || q[8] || q[9] || L.yaw || (b.yaw += x.yaw * f * 0.85),
                q[2] || q[3] || q[6] || q[7] || L.pitch || (b.pitch += x.pitch * f * 0.85),
                q[0] || q[1] || L.hfov || U(b.hfov + x.hfov * f * 0.85));
                ia = e;
                0 < f && (x.yaw = 0.8 * x.yaw + (b.yaw - c) / f * 0.2,
                x.pitch = 0.8 * x.pitch + (b.pitch - k) / f * 0.2,
                x.hfov = 0.8 * x.hfov + (b.hfov - d) / f * 0.2,
                k = b.autoRotate ? Math.abs(b.autoRotate) : 5,
                x.yaw = Math.min(k, Math.max(x.yaw, -k)),
                x.pitch = Math.min(k, Math.max(x.pitch, -k)),
                x.hfov = Math.min(k, Math.max(x.hfov, -k)));
                q[0] && q[0] && (x.hfov = 0);
                (q[2] || q[6]) && (q[3] || q[7]) && (x.pitch = 0);
                (q[4] || q[8]) && (q[5] || q[9]) && (x.yaw = 0)
            }
        }
        function va(a) {
            var k = L[a]
              , c = Math.min(1, Math.max((Date.now() - k.startTime) / 1E3 / (k.duration / 1E3), 0))
              , c = k.startPosition + b.animationTimingFunction(c) * (k.endPosition - k.startPosition);
            if (k.endPosition > k.startPosition && c >= k.endPosition || k.endPosition < k.startPosition && c <= k.endPosition || k.endPosition === k.startPosition) {
                c = k.endPosition;
                x[a] = 0;
                var k = L[a].callback
                  , d = L[a].callbackArgs;
                delete L[a];
                "function" == typeof k && k(d)
            }
            b[a] = c
        }
        function ka() {
            y()
        }
        function F() {
            Ta || (Ta = !0,
            ba())
        }
        function ba() {
            Da();
            Ua && clearTimeout(Ua);
            if (la || !0 === aa)
                requestAnimationFrame(ba);
            else if (q[0] || q[1] || q[2] || q[3] || q[4] || q[5] || q[6] || q[7] || q[8] || q[9] || b.autoRotate || L.pitch || L.yaw || L.hfov || 0.01 < Math.abs(x.yaw) || 0.01 < Math.abs(x.pitch) || 0.01 < Math.abs(x.hfov))
                G(),
                0 <= b.autoRotateInactivityDelay && $ && Date.now() - S > b.autoRotateInactivityDelay && !b.autoRotate && (b.autoRotate = $,
                za.lookAt(Ea, m, wa, 3E3)),
                requestAnimationFrame(ba);
            else if (B && (B.isLoading() || !0 === b.dynamic && $a))
                requestAnimationFrame(ba);
            else {
                Ta = !1;
                ia = m;
                var a = b.autoRotateInactivityDelay - (Date.now() - S);
                0 < a ? Ua = setTimeout(function() {
                    b.autoRotate = $;
                    za.lookAt(Ea, m, wa, 3E3);
                    F()
                }, a) : 0 <= b.autoRotateInactivityDelay && $ && (b.autoRotate = $,
                za.lookAt(Ea, m, wa, 3E3),
                F())
            }
        }
        function Da() {
            var a;
            if (K) {
                180 < b.yaw ? b.yaw -= 360 : -180 > b.yaw && (b.yaw += 360);
                a = b.yaw;
                var k = b.maxYaw - b.minYaw
                  , d = -180
                  , e = 180;
                360 > k && (d = b.minYaw + b.hfov / 2,
                e = b.maxYaw - b.hfov / 2,
                k < b.hfov && (d = e = (d + e) / 2));
                b.yaw = Math.max(d, Math.min(e, b.yaw));
                !1 !== b.autoRotate && a != b.yaw && (b.autoRotate *= -1);
                a = B.getCanvas();
                a = 2 * Math.atan(Math.tan(b.hfov / 180 * Math.PI * 0.5) / (a.width / a.height)) / Math.PI * 180;
                k = b.minPitch + a / 2;
                d = b.maxPitch - a / 2;
                b.maxPitch - b.minPitch < a && (k = d = (k + d) / 2);
                isNaN(k) && (k = -90);
                isNaN(d) && (d = 90);
                b.pitch = Math.max(k, Math.min(d, b.pitch));
                B.render(b.pitch * Math.PI / 180, b.yaw * Math.PI / 180, b.hfov * Math.PI / 180, {
                    roll: b.roll * Math.PI / 180
                });
                b.hotSpots.forEach(c);
                b.compass && (Ha.style.transform = "rotate(" + (-b.yaw - b.northOffset) + "deg)",
                Ha.style.webkitTransform = "rotate(" + (-b.yaw - b.northOffset) + "deg)")
            }
        }
        function Z(a, b, c, d) {
            this.w = a;
            this.x = b;
            this.y = c;
            this.z = d
        }
        function Ma(a) {
            var c;
            c = a.alpha;
            var d = a.beta;
            a = a.gamma;
            d = [d ? d * Math.PI / 180 / 2 : 0, a ? a * Math.PI / 180 / 2 : 0, c ? c * Math.PI / 180 / 2 : 0];
            c = [Math.cos(d[0]), Math.cos(d[1]), Math.cos(d[2])];
            d = [Math.sin(d[0]), Math.sin(d[1]), Math.sin(d[2])];
            c = new Z(c[0] * c[1] * c[2] - d[0] * d[1] * d[2],d[0] * c[1] * c[2] - c[0] * d[1] * d[2],c[0] * d[1] * c[2] + d[0] * c[1] * d[2],c[0] * c[1] * d[2] + d[0] * d[1] * c[2]);
            c = c.multiply(new Z(Math.sqrt(0.5),-Math.sqrt(0.5),0,0));
            d = J.orientation ? -J.orientation * Math.PI / 180 / 2 : 0;
            c = c.multiply(new Z(Math.cos(d),0,-Math.sin(d),0)).toEulerAngles();
            "number" == typeof aa && 10 > aa ? aa += 1 : 10 === aa ? (ab = c[2] / Math.PI * 180 + b.yaw,
            aa = !0,
            requestAnimationFrame(ba)) : (b.pitch = c[0] / Math.PI * 180,
            b.roll = -c[1] / Math.PI * 180,
            b.yaw = -c[2] / Math.PI * 180 + ab)
        }
        function h() {
            try {
                var a = {};
                b.horizonPitch !== m && (a.horizonPitch = b.horizonPitch * Math.PI / 180);
                b.horizonRoll !== m && (a.horizonRoll = b.horizonRoll * Math.PI / 180);
                b.backgroundColor !== m && (a.backgroundColor = b.backgroundColor);
                B.init(O, b.type, b.dynamic, b.haov * Math.PI / 180, b.vaov * Math.PI / 180, b.vOffset * Math.PI / 180, e, a);
                !0 !== b.dynamic && (O = m)
            } catch (c) {
                if ("webgl error" == c.type || "no webgl" == c.type)
                    W();
                else if ("webgl size error" == c.type)
                    W(b.strings.textureSizeError.replace("%s", c.width).replace("%s", c.maxWidth));
                else
                    throw W(b.strings.unknownError),
                    c;
            }
        }
        function e() {
            if (b.sceneFadeDuration && B.fadeImg !== m) {
                B.fadeImg.style.opacity = 0;
                var a = B.fadeImg;
                delete B.fadeImg;
                setTimeout(function() {
                    M.removeChild(a);
                    ga("scenechangefadedone")
                }, b.sceneFadeDuration)
            }
            Ha.style.display = b.compass ? "inline" : "none";
            ja();
            n.load.box.style.display = "none";
            qa !== m && (M.removeChild(qa),
            qa = m);
            K = !0;
            ga("load");
            F()
        }
        function Ia(a) {
            a.pitch = Number(a.pitch) || 0;
            a.yaw = Number(a.yaw) || 0;
            var c = f.createElement("div");
            c.className = "pnlm-hotspot-base";
            c.className = a.cssClass ? c.className + (" " + a.cssClass) : c.className + (" pnlm-hotspot pnlm-sprite pnlm-" + D(a.type));
            var d = f.createElement("span");
            a.text && (d.innerHTML = D(a.text));
            var e;
            if (a.video) {
                e = f.createElement("video");
                var g = a.video;
                b.basePath && !oa(g) && (g = b.basePath + g);
                e.src = encodeURI(g);
                e.controls = !0;
                e.style.width = a.width + "px";
                M.appendChild(c);
                d.appendChild(e)
            } else if (a.image) {
                g = a.image;
                b.basePath && !oa(g) && (g = b.basePath + g);
                e = f.createElement("a");
                e.href = encodeURI(a.URL ? a.URL : g);
                e.target = "_blank";
                d.appendChild(e);
                var h = f.createElement("img");
                h.src = encodeURI(g);
                h.style.width = a.width + "px";
                h.style.paddingTop = "5px";
                M.appendChild(c);
                e.appendChild(h);
                d.style.maxWidth = "initial"
            } else
                a.URL ? (e = f.createElement("a"),
                e.href = encodeURI(a.URL),
                e.target = "_blank",
                M.appendChild(e),
                c.style.cursor = "pointer",
                d.style.cursor = "pointer",
                e.appendChild(c)) : (a.sceneId && (c.onclick = c.ontouchend = function() {
                    c.clicked || (c.clicked = !0,
                    I(a.sceneId, a.targetPitch, a.targetYaw, a.targetHfov));
                    return !1
                }
                ,
                c.style.cursor = "pointer",
                d.style.cursor = "pointer"),
                M.appendChild(c));
            if (a.createTooltipFunc)
                a.createTooltipFunc(c, a.createTooltipArgs);
            else if (a.text || a.video || a.image)
                c.classList.add("pnlm-tooltip"),
                c.appendChild(d),
                d.style.width = d.scrollWidth - 20 + "px",
                d.style.marginLeft = -(d.scrollWidth - c.offsetWidth) / 2 + "px",
                d.style.marginTop = -d.scrollHeight - 12 + "px";
            a.clickHandlerFunc && (c.addEventListener("click", function(b) {
                a.clickHandlerFunc(b, a.clickHandlerArgs)
            }, "false"),
            c.style.cursor = "pointer",
            d.style.cursor = "pointer");
            a.div = c
        }
        function ja() {
            Va || (b.hotSpots ? (b.hotSpots = b.hotSpots.sort(function(a, b) {
                return a.pitch < b.pitch
            }),
            b.hotSpots.forEach(Ia)) : b.hotSpots = [],
            Va = !0,
            b.hotSpots.forEach(c))
        }
        function p() {
            var a = b.hotSpots;
            Va = !1;
            delete b.hotSpots;
            if (a)
                for (var c = 0; c < a.length; c++) {
                    for (var d = a[c].div; d.parentNode != M; )
                        d = d.parentNode;
                    M.removeChild(d);
                    delete a[c].div
                }
        }
        function c(a) {
            var c = Math.sin(a.pitch * Math.PI / 180)
              , d = Math.cos(a.pitch * Math.PI / 180)
              , e = Math.sin(b.pitch * Math.PI / 180)
              , f = Math.cos(b.pitch * Math.PI / 180)
              , g = Math.cos((-a.yaw + b.yaw) * Math.PI / 180)
              , h = c * e + d * g * f;
            if (90 >= a.yaw && -90 < a.yaw && 0 >= h || (90 < a.yaw || -90 >= a.yaw) && 0 >= h)
                a.div.style.visibility = "hidden";
            else {
                var l = Math.sin((-a.yaw + b.yaw) * Math.PI / 180)
                  , p = Math.tan(b.hfov * Math.PI / 360);
                a.div.style.visibility = "visible";
                var m = B.getCanvas()
                  , n = m.clientWidth
                  , m = m.clientHeight
                  , c = [-n / p * l * d / h / 2, -n / p * (c * f - d * g * e) / h / 2]
                  , d = Math.sin(b.roll * Math.PI / 180)
                  , e = Math.cos(b.roll * Math.PI / 180)
                  , c = [c[0] * e - c[1] * d, c[0] * d + c[1] * e];
                c[0] += (n - a.div.offsetWidth) / 2;
                c[1] += (m - a.div.offsetHeight) / 2;
                n = "translate(" + c[0] + "px, " + c[1] + "px) translateZ(9999px) rotate(" + b.roll + "deg)";
                a.div.style.webkitTransform = n;
                a.div.style.MozTransform = n;
                a.div.style.transform = n
            }
        }
        function g(a) {
            b = {};
            var c, d, e = "haov vaov vOffset northOffset horizonPitch horizonRoll".split(" ");
            da = [];
            for (c in Wa)
                Wa.hasOwnProperty(c) && (b[c] = Wa[c]);
            for (c in v.default)
                if (v.default.hasOwnProperty(c))
                    if ("strings" == c)
                        for (d in v.default.strings)
                            v.default.strings.hasOwnProperty(d) && (b.strings[d] = D(v.default.strings[d]));
                    else
                        b[c] = v.default[c],
                        0 <= e.indexOf(c) && da.push(c);
            if (null !== a && "" !== a && v.scenes && v.scenes[a]) {
                var f = v.scenes[a];
                for (c in f)
                    if (f.hasOwnProperty(c))
                        if ("strings" == c)
                            for (d in f.strings)
                                f.strings.hasOwnProperty(d) && (b.strings[d] = D(f.strings[d]));
                        else
                            b[c] = f[c],
                            0 <= e.indexOf(c) && da.push(c);
                b.scene = a
            }
            for (c in v)
                if (v.hasOwnProperty(c))
                    if ("strings" == c)
                        for (d in v.strings)
                            v.strings.hasOwnProperty(d) && (b.strings[d] = D(v.strings[d]));
                    else
                        b[c] = v[c],
                        0 <= e.indexOf(c) && da.push(c)
        }
        function t(a) {
            if ((a = a ? a : !1) && "preview"in b) {
                var c = b.preview;
                b.basePath && !oa(c) && (c = b.basePath + c);
                qa = f.createElement("div");
                qa.className = "pnlm-preview-img";
                qa.style.backgroundImage = "url('" + encodeURI(c) + "')";
                M.appendChild(qa)
            }
            var c = b.title
              , d = b.author;
            a && ("previewTitle"in b && (b.title = b.previewTitle),
            "previewAuthor"in b && (b.author = b.previewAuthor));
            b.hasOwnProperty("title") || (n.title.innerHTML = "");
            b.hasOwnProperty("author") || (n.author.innerHTML = "");
            b.hasOwnProperty("title") || b.hasOwnProperty("author") || (n.container.style.display = "none");
            w.load.innerHTML = "<p>" + b.strings.loadButtonLabel + "</p>";
            n.load.boxp.innerHTML = b.strings.loadingLabel;
            for (var e in b)
                if (b.hasOwnProperty(e))
                    switch (e) {
                    case "title":
                        n.title.innerHTML = D(b[e]);
                        n.container.style.display = "inline";
                        break;
                    case "author":
                        n.author.innerHTML = b.strings.bylineLabel.replace("%s", D(b[e]));
                        n.container.style.display = "inline";
                        break;
                    case "fallback":
                        n.errorMsg.innerHTML = '<p>Your browser does not support WebGL.<br><a href="' + encodeURI(b[e]) + '" target="_blank">Click here to view this panorama in an alternative viewer.</a></p>';
                        break;
                    case "hfov":
                        U(Number(b[e]));
                        break;
                    case "autoLoad":
                        !0 === b[e] && B === m && (n.load.box.style.display = "inline",
                        w.load.style.display = "none",
                        Na());
                        break;
                    case "showZoomCtrl":
                        w.zoom.style.display = b[e] && !1 != b.showControls ? "block" : "none";
                        break;
                    case "showFullscreenCtrl":
                        w.fullscreen.style.display = b[e] && !1 != b.showControls && ("fullscreen"in f || "mozFullScreen"in f || "webkitIsFullScreen"in f || "msFullscreenElement"in f) ? "block" : "none";
                        break;
                    case "hotSpotDebug":
                        Xa.style.display = b[e] ? "block" : "none";
                        break;
                    case "showControls":
                        b[e] || (w.orientation.style.display = "none",
                        w.zoom.style.display = "none",
                        w.fullscreen.style.display = "none");
                        break;
                    case "orientationOnByDefault":
                        b[e] && (pa === m ? Ya = !0 : !0 === pa && Ka())
                    }
            a && (c ? b.title = c : delete b.title,
            d ? b.author = d : delete b.author)
        }
        function z() {
            if (K && !Pa)
                if (Ga)
                    f.exitFullscreen ? f.exitFullscreen() : f.mozCancelFullScreen ? f.mozCancelFullScreen() : f.webkitCancelFullScreen ? f.webkitCancelFullScreen() : f.msExitFullscreen && f.msExitFullscreen();
                else
                    try {
                        r.requestFullscreen ? r.requestFullscreen() : r.mozRequestFullScreen ? r.mozRequestFullScreen() : r.msRequestFullscreen ? r.msRequestFullscreen() : r.webkitRequestFullScreen()
                    } catch (a) {}
        }
        function y() {
            f.fullscreen || f.mozFullScreen || f.webkitIsFullScreen || f.msFullscreenElement ? (w.fullscreen.classList.add("pnlm-fullscreen-toggle-button-active"),
            Ga = !0) : (w.fullscreen.classList.remove("pnlm-fullscreen-toggle-button-active"),
            Ga = !1);
            B.resize();
            U(b.hfov);
            F()
        }
        function E(a) {
            var c = b.minHfov;
            "multires" == b.type && B && (c = Math.min(c, B.getCanvas().width / (b.multiRes.cubeResolution / 90 * 0.9)));
            return c > b.maxHfov ? (console.log("HFOV bounds do not make sense (minHfov > maxHfov)."),
            b.hfov) : a < c ? c : a > b.maxHfov ? b.maxHfov : a
        }
        function U(a) {
            b.hfov = E(a)
        }
        function Ja() {
            L = {};
            $ = b.autoRotate ? b.autoRotate : $;
            b.autoRotate = !1
        }
        function Q() {
            Pa && (n.load.box.style.display = "none",
            n.errorMsg.style.display = "none",
            Pa = !1,
            ga("errorcleared"));
            K = !1;
            w.load.style.display = "none";
            n.load.box.style.display = "inline";
            Na()
        }
        function I(a, c, d, e, f) {
            K = !1;
            L = {};
            var h, l;
            if (b.sceneFadeDuration && !f && (h = B.render(b.pitch * Math.PI / 180, b.yaw * Math.PI / 180, b.hfov * Math.PI / 180, {
                returnImage: !0
            }),
            h !== m)) {
                f = new Image;
                f.className = "pnlm-fade-img";
                f.style.transition = "opacity " + b.sceneFadeDuration / 1E3 + "s";
                f.style.width = "100%";
                f.style.height = "100%";
                f.onload = function() {
                    I(a, c, d, e, !0)
                }
                ;
                f.src = h;
                M.appendChild(f);
                B.fadeImg = f;
                return
            }
            f = "same" === c ? b.pitch : c;
            h = "same" === d ? b.yaw : "sameAzimuth" === d ? b.yaw + (b.northOffset || 0) - (v.scenes[a].northOffset || 0) : d;
            l = "same" === e ? b.hfov : e;
            p();
            g(a);
            x.yaw = x.pitch = x.hfov = 0;
            t();
            f !== m && (b.pitch = f);
            h !== m && (b.yaw = h);
            l !== m && (b.hfov = l);
            ga("scenechange", a);
            Q()
        }
        function l() {
            J.removeEventListener("deviceorientation", Ma);
            w.orientation.classList.remove("pnlm-orientation-button-active");
            aa = !1
        }
        function Ka() {
            aa = 1;
            J.addEventListener("deviceorientation", Ma);
            w.orientation.classList.add("pnlm-orientation-button-active")
        }
        function D(a) {
            return v.escapeHTML ? String(a).split(/&/g).join("&amp;").split('"').join("&quot;").split("'").join("&#39;").split("<").join("&lt;").split(">").join("&gt;").split("/").join("&#x2f;").split("\n").join("<br>") : String(a).split("\n").join("<br>")
        }
        function ga(a) {
            if (a in T)
                for (var b = T[a].length; 0 < b; b--)
                    T[a][T[a].length - b].apply(null, [].slice.call(arguments, 1))
        }
        var za = this, b, B, qa, la = !1, S = Date.now(), xa = 0, ya = 0, Fa = -1, Qa = 0, Ra = 0, q = Array(10), Ga = !1, K, Pa = !1, Sa = !1, O, ia, x = {
            yaw: 0,
            pitch: 0,
            hfov: 0
        }, Ta = !1, aa = !1, ab = 0, Ua, $ = 0, wa, Ea, L = {}, T = {}, da = [], $a = !1, Va = !1, Wa = {
            hfov: 100,
            minHfov: 50,
            maxHfov: 120,
            pitch: 0,
            minPitch: m,
            maxPitch: m,
            yaw: 0,
            minYaw: -180,
            maxYaw: 180,
            roll: 0,
            haov: 360,
            vaov: 180,
            vOffset: 0,
            autoRotate: !1,
            autoRotateInactivityDelay: -1,
            autoRotateStopDelay: m,
            type: "equirectangular",
            northOffset: 0,
            showFullscreenCtrl: !0,
            dynamic: !1,
            doubleClickZoom: !0,
            keyboardZoom: !0,
            mouseZoom: !0,
            showZoomCtrl: !0,
            autoLoad: !1,
            showControls: !0,
            orientationOnByDefault: !1,
            hotSpotDebug: !1,
            backgroundColor: [0, 0, 0],
            animationTimingFunction: function(a) {
                return 0.5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a
            },
            draggable: !0,
            disableKeyboardCtrl: !1,
            crossOrigin: "anonymous",
            strings: {
                loadButtonLabel: "Click to<br>Load<br>Panorama",
                loadingLabel: "Loading...",
                bylineLabel: "by %s",
                noPanoramaError: "No panorama image was specified.",
                fileAccessError: "The file %s could not be accessed.",
                malformedURLError: "There is something wrong with the panorama URL.",
                iOS8WebGLError: "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
                genericWebGLError: "Your browser does not have the necessary WebGL support to display this panorama.",
                textureSizeError: "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
                unknownError: "Unknown error. Check developer console."
            }
        }, Za = [16, 17, 27, 37, 38, 39, 40, 61, 65, 68, 83, 87, 107, 109, 173, 187, 189];
        r = "string" === typeof r ? f.getElementById(r) : r;
        r.classList.add("pnlm-container");
        r.tabIndex = 0;
        var C = f.createElement("div");
        C.className = "pnlm-ui";
        r.appendChild(C);
        var M = f.createElement("div");
        M.className = "pnlm-render-container";
        r.appendChild(M);
        var H = f.createElement("div");
        H.className = "pnlm-dragfix";
        C.appendChild(H);
        var ha = f.createElement("span");
        ha.className = "pnlm-about-msg";
        ha.innerHTML = '<a href="https://pannellum.org/" target="_blank">Pannellum</a> 2.4.1';
        C.appendChild(ha);
        H.addEventListener("contextmenu", X);
        var n = {}
          , Xa = f.createElement("div");
        Xa.className = "pnlm-sprite pnlm-hot-spot-debug-indicator";
        C.appendChild(Xa);
        n.container = f.createElement("div");
        n.container.className = "pnlm-panorama-info";
        n.title = f.createElement("div");
        n.title.className = "pnlm-title-box";
        n.container.appendChild(n.title);
        n.author = f.createElement("div");
        n.author.className = "pnlm-author-box";
        n.container.appendChild(n.author);
        C.appendChild(n.container);
        n.load = {};
        n.load.box = f.createElement("div");
        n.load.box.className = "pnlm-load-box";
        n.load.boxp = f.createElement("p");
        n.load.box.appendChild(n.load.boxp);
        n.load.lbox = f.createElement("div");
        n.load.lbox.className = "pnlm-lbox";
        n.load.lbox.innerHTML = '<div class="pnlm-loading"></div>';
        n.load.box.appendChild(n.load.lbox);
        n.load.lbar = f.createElement("div");
        n.load.lbar.className = "pnlm-lbar";
        n.load.lbarFill = f.createElement("div");
        n.load.lbarFill.className = "pnlm-lbar-fill";
        n.load.lbar.appendChild(n.load.lbarFill);
        n.load.box.appendChild(n.load.lbar);
        n.load.msg = f.createElement("p");
        n.load.msg.className = "pnlm-lmsg";
        n.load.box.appendChild(n.load.msg);
        C.appendChild(n.load.box);
        n.errorMsg = f.createElement("div");
        n.errorMsg.className = "pnlm-error-msg pnlm-info-box";
        C.appendChild(n.errorMsg);
        var w = {};
        w.container = f.createElement("div");
        w.container.className = "pnlm-controls-container";
        C.appendChild(w.container);
        w.load = f.createElement("div");
        w.load.className = "pnlm-load-button";
        w.load.addEventListener("click", function() {
            t();
            Q()
        });
        C.appendChild(w.load);
        w.zoom = f.createElement("div");
        w.zoom.className = "pnlm-zoom-controls pnlm-controls";
        w.zoomIn = f.createElement("div");
        w.zoomIn.className = "pnlm-zoom-in pnlm-sprite pnlm-control";
        w.zoomIn.addEventListener("click", function() {
            K && (U(b.hfov - 5),
            F())
        });
        w.zoom.appendChild(w.zoomIn);
        w.zoomOut = f.createElement("div");
        w.zoomOut.className = "pnlm-zoom-out pnlm-sprite pnlm-control";
        w.zoomOut.addEventListener("click", function() {
            K && (U(b.hfov + 5),
            F())
        });
        w.zoom.appendChild(w.zoomOut);
        w.container.appendChild(w.zoom);
        w.fullscreen = f.createElement("div");
        w.fullscreen.addEventListener("click", z);
        w.fullscreen.className = "pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control";
        (f.fullscreenEnabled || f.mozFullScreenEnabled || f.webkitFullscreenEnabled || f.msFullscreenEnabled) && w.container.appendChild(w.fullscreen);
        w.orientation = f.createElement("div");
        w.orientation.addEventListener("click", function(a) {
            aa ? l() : Ka()
        });
        w.orientation.addEventListener("mousedown", function(a) {
            a.stopPropagation()
        });
        w.orientation.addEventListener("touchstart", function(a) {
            a.stopPropagation()
        });
        w.orientation.addEventListener("pointerdown", function(a) {
            a.stopPropagation()
        });
        w.orientation.className = "pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control";
        var pa, Ya = !1;
        J.DeviceOrientationEvent ? J.addEventListener("deviceorientation", Oa) : pa = !1;
        var Ha = f.createElement("div");
        Ha.className = "pnlm-compass pnlm-controls pnlm-control";
        C.appendChild(Ha);
        v.firstScene ? g(v.firstScene) : v.default && v.default.firstScene ? g(v.default.firstScene) : g(null);
        t(!0);
        var ma = []
          , Aa = [];
        Z.prototype.multiply = function(a) {
            return new Z(this.w * a.w - this.x * a.x - this.y * a.y - this.z * a.z,this.x * a.w + this.w * a.x + this.y * a.z - this.z * a.y,this.y * a.w + this.w * a.y + this.z * a.x - this.x * a.z,this.z * a.w + this.w * a.z + this.x * a.y - this.y * a.x)
        }
        ;
        Z.prototype.toEulerAngles = function() {
            var a = Math.atan2(2 * (this.w * this.x + this.y * this.z), 1 - 2 * (this.x * this.x + this.y * this.y))
              , b = Math.asin(2 * (this.w * this.y - this.z * this.x))
              , c = Math.atan2(2 * (this.w * this.z + this.x * this.y), 1 - 2 * (this.y * this.y + this.z * this.z));
            return [a, b, c]
        }
        ;
        this.isLoaded = function() {
            return Boolean(K)
        }
        ;
        this.getPitch = function() {
            return b.pitch
        }
        ;
        this.setPitch = function(a, c, d, e) {
            (c = c == m ? 1E3 : Number(c)) ? L.pitch = {
                startTime: Date.now(),
                startPosition: b.pitch,
                endPosition: a,
                duration: c,
                callback: d,
                callbackArgs: e
            } : b.pitch = a;
            F();
            return this
        }
        ;
        this.getPitchBounds = function() {
            return [b.minPitch, b.maxPitch]
        }
        ;
        this.setPitchBounds = function(a) {
            b.minPitch = Math.max(-90, Math.min(a[0], 90));
            b.maxPitch = Math.max(-90, Math.min(a[1], 90));
            return this
        }
        ;
        this.getYaw = function() {
            return b.yaw
        }
        ;
        this.setYaw = function(a, c, d, e) {
            c = c == m ? 1E3 : Number(c);
            a = (a + 180) % 360 - 180;
            c ? (180 < b.yaw - a ? a += 360 : 180 < a - b.yaw && (a -= 360),
            L.yaw = {
                startTime: Date.now(),
                startPosition: b.yaw,
                endPosition: a,
                duration: c,
                callback: d,
                callbackArgs: e
            }) : b.yaw = a;
            F();
            return this
        }
        ;
        this.getYawBounds = function() {
            return [b.minYaw, b.maxYaw]
        }
        ;
        this.setYawBounds = function(a) {
            b.minYaw = Math.max(-180, Math.min(a[0], 180));
            b.maxYaw = Math.max(-180, Math.min(a[1], 180));
            return this
        }
        ;
        this.getHfov = function() {
            return b.hfov
        }
        ;
        this.setHfov = function(a, c, d, e) {
            (c = c == m ? 1E3 : Number(c)) ? L.hfov = {
                startTime: Date.now(),
                startPosition: b.hfov,
                endPosition: E(a),
                duration: c,
                callback: d,
                callbackArgs: e
            } : U(a);
            F();
            return this
        }
        ;
        this.getHfovBounds = function() {
            return [b.minHfov, b.maxHfov]
        }
        ;
        this.setHfovBounds = function(a) {
            b.minHfov = Math.max(0, a[0]);
            b.maxHfov = Math.max(0, a[1]);
            return this
        }
        ;
        this.lookAt = function(a, b, c, d, e, f) {
            d = d == m ? 1E3 : Number(d);
            a !== m && (this.setPitch(a, d, e, f),
            e = m);
            b !== m && (this.setYaw(b, d, e, f),
            e = m);
            c !== m && this.setHfov(c, d, e, f);
            return this
        }
        ;
        this.getNorthOffset = function() {
            return b.northOffset
        }
        ;
        this.setNorthOffset = function(a) {
            b.northOffset = Math.min(360, Math.max(0, a));
            F();
            return this
        }
        ;
        this.getHorizonRoll = function() {
            return b.horizonRoll
        }
        ;
        this.setHorizonRoll = function(a) {
            b.horizonRoll = Math.min(90, Math.max(-90, a));
            B.setPose(b.horizonPitch * Math.PI / 180, b.horizonRoll * Math.PI / 180);
            F();
            return this
        }
        ;
        this.getHorizonPitch = function() {
            return b.horizonPitch
        }
        ;
        this.setHorizonPitch = function(a) {
            b.horizonPitch = Math.min(90, Math.max(-90, a));
            B.setPose(b.horizonPitch * Math.PI / 180, b.horizonRoll * Math.PI / 180);
            F();
            return this
        }
        ;
        this.startAutoRotate = function(a) {
            a = a || $ || 1;
            b.autoRotate = a;
            za.lookAt(Ea, m, wa, 3E3);
            F();
            return this
        }
        ;
        this.stopAutoRotate = function() {
            $ = b.autoRotate ? b.autoRotate : $;
            b.autoRotate = !1;
            b.autoRotateInactivityDelay = -1;
            return this
        }
        ;
        this.getRenderer = function() {
            return B
        }
        ;
        this.setUpdate = function(a) {
            $a = !0 === a;
            B === m ? P() : F();
            return this
        }
        ;
        this.mouseEventToCoords = function(a) {
            return sa(a)
        }
        ;
        this.loadScene = function(a, b, c, d) {
            !1 !== K && I(a, b, c, d);
            return this
        }
        ;
        this.getScene = function() {
            return b.scene
        }
        ;
        this.addScene = function(a, b) {
            v.scenes[a] = b;
            return this
        }
        ;
        this.removeScene = function(a) {
            if (b.scene === a || !v.scenes.hasOwnProperty(a))
                return !1;
            delete v.scenes[a];
            return !0
        }
        ;
        this.toggleFullscreen = function() {
            z();
            return this
        }
        ;
        this.getConfig = function() {
            return b
        }
        ;
        this.getContainer = function() {
            return r
        }
        ;
        this.addHotSpot = function(a, d) {
            if (d === m && b.scene === m)
                b.hotSpots.push(a);
            else {
                var e = d !== m ? d : b.scene;
                if (v.scenes.hasOwnProperty(e))
                    v.scenes[e].hasOwnProperty("hotSpots") || (v.scenes[e].hotSpots = [],
                    e == b.scene && (b.hotSpots = v.scenes[e].hotSpots)),
                    v.scenes[e].hotSpots.push(a);
                else
                    throw "Invalid scene ID!";
            }
            if (d === m || b.scene == d)
                Ia(a),
                K && c(a);
            return this
        }
        ;
        this.removeHotSpot = function(a) {
            if (!b.hotSpots)
                return !1;
            for (var c = 0; c < b.hotSpots.length; c++)
                if (b.hotSpots[c].hasOwnProperty("id") && b.hotSpots[c].id === a) {
                    for (a = b.hotSpots[c].div; a.parentNode != M; )
                        a = a.parentNode;
                    M.removeChild(a);
                    delete b.hotSpots[c].div;
                    b.hotSpots.splice(c, 1);
                    return !0
                }
            return !1
        }
        ;
        this.resize = function() {
            y()
        }
        ;
        this.isLoaded = function() {
            return K
        }
        ;
        this.isOrientationSupported = function() {
            return pa || !1
        }
        ;
        this.stopOrientation = function() {
            l()
        }
        ;
        this.startOrientation = function() {
            pa && Ka()
        }
        ;
        this.isOrientationActive = function() {
            return Boolean(aa)
        }
        ;
        this.on = function(a, b) {
            T[a] = T[a] || [];
            T[a].push(b);
            return this
        }
        ;
        this.off = function(a, b) {
            if (!a)
                return T = {},
                this;
            if (b) {
                var c = T[a].indexOf(b);
                0 <= c && T[a].splice(c, 1);
                0 == T[a].length && delete T[a]
            } else
                delete T[a];
            return this
        }
        ;
        this.destroy = function() {
            B && B.destroy();
            Sa && (H.removeEventListener("mousedown", Ca, !1),
            H.removeEventListener("dblclick", ra, !1),
            f.removeEventListener("mousemove", La, !1),
            f.removeEventListener("mouseup", ea, !1),
            r.removeEventListener("mousewheel", na, !1),
            r.removeEventListener("DOMMouseScroll", na, !1),
            r.removeEventListener("mozfullscreenchange", y, !1),
            r.removeEventListener("webkitfullscreenchange", y, !1),
            r.removeEventListener("msfullscreenchange", y, !1),
            r.removeEventListener("fullscreenchange", y, !1),
            J.removeEventListener("resize", ka, !1),
            J.removeEventListener("orientationchange", ka, !1),
            r.removeEventListener("keydown", R, !1),
            r.removeEventListener("keyup", fa, !1),
            r.removeEventListener("blur", ua, !1),
            f.removeEventListener("mouseleave", ea, !1),
            H.removeEventListener("touchstart", ta, !1),
            H.removeEventListener("touchmove", A, !1),
            H.removeEventListener("touchend", d, !1),
            H.removeEventListener("pointerdown", a, !1),
            H.removeEventListener("pointermove", V, !1),
            H.removeEventListener("pointerup", N, !1),
            H.removeEventListener("pointerleave", N, !1));
            r.innerHTML = "";
            r.classList.remove("pnlm-container");
            C.classList.remove("pnlm-grab");
            C.classList.remove("pnlm-grabbing")
        }
    }
    return {
        viewer: function(f, m) {
            return new Ba(f,m)
        }
    }
}(window, document);
