/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const er = "161"; const np = 4; const fs = "attached", lo = "detached"; const ip = 1006; const Dt = "", ut = "srgb", en = "srgb-linear", jr = "display-p3", tr = "display-p3-linear", Ki = "linear", et = "srgb", Zi = "rec709", $i = "p3"; const ps = "300 es"; class Qn { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e, t) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { if (this._listeners === void 0) return; const i = this._listeners[e]; if (i !== void 0) { const s = i.indexOf(t); s !== -1 && i.splice(s, 1) } } dispatchEvent(e) { if (this._listeners === void 0) return; const n = this._listeners[e.type]; if (n !== void 0) { e.target = this; const i = n.slice(0); for (let s = 0, a = i.length; s < a; s++)i[s].call(this, e); e.target = null } } } const _t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let ms = 1234567; const di = Math.PI / 180, $n = 180 / Math.PI; function Gt() { const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (_t[r & 255] + _t[r >> 8 & 255] + _t[r >> 16 & 255] + _t[r >> 24 & 255] + "-" + _t[e & 255] + _t[e >> 8 & 255] + "-" + _t[e >> 16 & 15 | 64] + _t[e >> 24 & 255] + "-" + _t[t & 63 | 128] + _t[t >> 8 & 255] + "-" + _t[t >> 16 & 255] + _t[t >> 24 & 255] + _t[n & 255] + _t[n >> 8 & 255] + _t[n >> 16 & 255] + _t[n >> 24 & 255]).toLowerCase() } function xt(r, e, t) { return Math.max(e, Math.min(t, r)) } function Kr(r, e) { return (r % e + e) % e } function co(r, e, t, n, i) { return n + (r - e) * (i - n) / (t - e) } function ho(r, e, t) { return r !== e ? (t - r) / (e - r) : 0 } function fi(r, e, t) { return (1 - t) * r + t * e } function uo(r, e, t, n) { return fi(r, e, 1 - Math.exp(-t * n)) } function fo(r, e = 1) { return e - Math.abs(Kr(r, e * 2) - e) } function po(r, e, t) { return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r)) } function mo(r, e, t) { return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10)) } function go(r, e) { return r + Math.floor(Math.random() * (e - r + 1)) } function _o(r, e) { return r + Math.random() * (e - r) } function vo(r) { return r * (.5 - Math.random()) } function xo(r) { r !== void 0 && (ms = r); let e = ms += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function Mo(r) { return r * di } function So(r) { return r * $n } function Vr(r) { return (r & r - 1) === 0 && r !== 0 } function yo(r) { return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2)) } function Ji(r) { return Math.pow(2, Math.floor(Math.log(r) / Math.LN2)) } function Eo(r, e, t, n, i) { const s = Math.cos, a = Math.sin, o = s(t / 2), l = a(t / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), m = s((n - e) / 2), g = a((n - e) / 2); switch (i) { case "XYX": r.set(o * h, l * u, l * d, o * c); break; case "YZY": r.set(l * d, o * h, l * u, o * c); break; case "ZXZ": r.set(l * u, l * d, o * h, o * c); break; case "XZX": r.set(o * h, l * g, l * m, o * c); break; case "YXY": r.set(l * m, o * h, l * g, o * c); break; case "ZYZ": r.set(l * g, l * m, o * h, o * c); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i) } } function Bt(r, e) { switch (e.constructor) { case Float32Array: return r; case Uint32Array: return r / 4294967295; case Uint16Array: return r / 65535; case Uint8Array: return r / 255; case Int32Array: return Math.max(r / 2147483647, -1); case Int16Array: return Math.max(r / 32767, -1); case Int8Array: return Math.max(r / 127, -1); default: throw new Error("Invalid component type.") } } function Xe(r, e) { switch (e.constructor) { case Float32Array: return r; case Uint32Array: return Math.round(r * 4294967295); case Uint16Array: return Math.round(r * 65535); case Uint8Array: return Math.round(r * 255); case Int32Array: return Math.round(r * 2147483647); case Int16Array: return Math.round(r * 32767); case Int8Array: return Math.round(r * 127); default: throw new Error("Invalid component type.") } } const To = { DEG2RAD: di, RAD2DEG: $n, generateUUID: Gt, clamp: xt, euclideanModulo: Kr, mapLinear: co, inverseLerp: ho, lerp: fi, damp: uo, pingpong: fo, smoothstep: po, smootherstep: mo, randInt: go, randFloat: _o, randFloatSpread: vo, seededRandom: xo, degToRad: Mo, radToDeg: So, isPowerOfTwo: Vr, ceilPowerOfTwo: yo, floorPowerOfTwo: Ji, setQuaternionFromProperEuler: Eo, normalize: Xe, denormalize: Bt }; class Oe { constructor(e = 0, t = 0) { Oe.prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const t = this.x, n = this.y, i = e.elements; return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(xt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this } rotateAround(e, t) { const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y; return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class Fe { constructor(e, t, n, i, s, a, o, l, c) { Fe.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c) } set(e, t, n, i, s, a, o, l, c) { const h = this.elements; return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], m = n[5], g = n[8], v = i[0], p = i[3], f = i[6], E = i[1], _ = i[4], b = i[7], L = i[2], w = i[5], R = i[8]; return s[0] = a * v + o * E + l * L, s[3] = a * p + o * _ + l * w, s[6] = a * f + o * b + l * R, s[1] = c * v + h * E + u * L, s[4] = c * p + h * _ + u * w, s[7] = c * f + h * b + u * R, s[2] = d * v + m * E + g * L, s[5] = d * p + m * _ + g * w, s[8] = d * f + m * b + g * R, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8]; return t * a * h - t * o * c - n * s * h + n * o * l + i * s * c - i * a * l } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * s, m = c * s - a * l, g = t * u + n * d + i * m; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const v = 1 / g; return e[0] = u * v, e[1] = (i * c - h * n) * v, e[2] = (o * n - i * a) * v, e[3] = d * v, e[4] = (h * t - i * l) * v, e[5] = (i * s - o * t) * v, e[6] = m * v, e[7] = (n * l - c * t) * v, e[8] = (a * t - n * s) * v, this } transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this } setUvTransform(e, t, n, i, s, a, o) { const l = Math.cos(s), c = Math.sin(s); return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -i * c, i * l, -i * (-c * a + l * o) + o + t, 0, 0, 1), this } scale(e, t) { return this.premultiply(ur.makeScale(e, t)), this } rotate(e) { return this.premultiply(ur.makeRotation(-e)), this } translate(e, t) { return this.premultiply(ur.makeTranslation(e, t)), this } makeTranslation(e, t) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this } makeRotation(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this } makeScale(e, t) { return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 9; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e } clone() { return new this.constructor().fromArray(this.elements) } } const ur = new Fe; function wa(r) { for (let e = r.length - 1; e >= 0; --e)if (r[e] >= 65535) return !0; return !1 } function pi(r) { return document.createElementNS("http://www.w3.org/1999/xhtml", r) } function Ao() { const r = pi("canvas"); return r.style.display = "block", r } const gs = {}; function Rn(r) { r in gs || (gs[r] = !0, console.warn(r)) } const _s = new Fe().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), vs = new Fe().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735), Si = { [en]: { transfer: Ki, primaries: Zi, toReference: r => r, fromReference: r => r }, [ut]: { transfer: et, primaries: Zi, toReference: r => r.convertSRGBToLinear(), fromReference: r => r.convertLinearToSRGB() }, [tr]: { transfer: Ki, primaries: $i, toReference: r => r.applyMatrix3(vs), fromReference: r => r.applyMatrix3(_s) }, [jr]: { transfer: et, primaries: $i, toReference: r => r.convertSRGBToLinear().applyMatrix3(vs), fromReference: r => r.applyMatrix3(_s).convertLinearToSRGB() } }, bo = new Set([en, tr]), je = { enabled: !0, _workingColorSpace: en, get workingColorSpace() { return this._workingColorSpace }, set workingColorSpace(r) { if (!bo.has(r)) throw new Error(`Unsupported working color space, "${r}".`); this._workingColorSpace = r }, convert: function (r, e, t) { if (this.enabled === !1 || e === t || !e || !t) return r; const n = Si[e].toReference, i = Si[t].fromReference; return i(n(r)) }, fromWorkingColorSpace: function (r, e) { return this.convert(r, this._workingColorSpace, e) }, toWorkingColorSpace: function (r, e) { return this.convert(r, e, this._workingColorSpace) }, getPrimaries: function (r) { return Si[r].primaries }, getTransfer: function (r) { return r === Dt ? Ki : Si[r].transfer } }; function Kn(r) { return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4) } function dr(r) { return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055 } let Pn; class Ca { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let t; if (e instanceof HTMLCanvasElement) t = e; else { Pn === void 0 && (Pn = pi("canvas")), Pn.width = e.width, Pn.height = e.height; const n = Pn.getContext("2d"); e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Pn } return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { const t = pi("canvas"); t.width = e.width, t.height = e.height; const n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); const i = n.getImageData(0, 0, e.width, e.height), s = i.data; for (let a = 0; a < s.length; a++)s[a] = Kn(s[a] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Kn(t[n] / 255) * 255) : t[n] = Kn(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } } let Ro = 0; class La { constructor(e = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: Ro++ }), this.uuid = Gt(), this.data = e, this.dataReady = !0, this.version = 0 } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, i = this.data; if (i !== null) { let s; if (Array.isArray(i)) { s = []; for (let a = 0, o = i.length; a < o; a++)i[a].isDataTexture ? s.push(fr(i[a].image)) : s.push(fr(i[a])) } else s = fr(i); n.url = s } return t || (e.images[this.uuid] = n), n } } function fr(r) { return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Ca.getDataURL(r) : r.data ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let wo = 0; class dt extends Qn { constructor(e = dt.DEFAULT_IMAGE, t = dt.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = dt.DEFAULT_ANISOTROPY, h = Dt) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: wo++ }), this.uuid = Gt(), this.name = "", this.source = new La(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Oe(0, 0), this.repeat = new Oe(1, 1), this.center = new Oe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Fe, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Rn("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === 3001 ? ut : Dt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1 } get image() { return this.source.data } set image(e = null) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== 300) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case 1e3: e.x = e.x - Math.floor(e.x); break; case 1001: e.x = e.x < 0 ? 0 : 1; break; case 1002: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case 1e3: e.y = e.y - Math.floor(e.y); break; case 1001: e.y = e.y < 0 ? 0 : 1; break; case 1002: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } get encoding() { return Rn("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === ut ? 3001 : 3e3 } set encoding(e) { Rn("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === 3001 ? ut : Dt } } dt.DEFAULT_IMAGE = null; dt.DEFAULT_MAPPING = 300; dt.DEFAULT_ANISOTROPY = 1; class Ze { constructor(e = 0, t = 0, n = 0, i = 1) { Ze.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; case 3: this.w = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements; return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(e) { let t, n, i, s; const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], m = l[5], g = l[9], v = l[2], p = l[6], f = l[10]; if (Math.abs(h - d) < .01 && Math.abs(u - v) < .01 && Math.abs(g - p) < .01) { if (Math.abs(h + d) < .1 && Math.abs(u + v) < .1 && Math.abs(g + p) < .1 && Math.abs(c + m + f - 3) < .1) return this.set(1, 0, 0, 0), this; t = Math.PI; const _ = (c + 1) / 2, b = (m + 1) / 2, L = (f + 1) / 2, w = (h + d) / 4, R = (u + v) / 4, z = (g + p) / 4; return _ > b && _ > L ? _ < .01 ? (n = 0, i = .707106781, s = .707106781) : (n = Math.sqrt(_), i = w / n, s = R / n) : b > L ? b < .01 ? (n = .707106781, i = 0, s = .707106781) : (i = Math.sqrt(b), n = w / i, s = z / i) : L < .01 ? (n = .707106781, i = .707106781, s = 0) : (s = Math.sqrt(L), n = R / s, i = z / s), this.set(n, i, s, t), this } let E = Math.sqrt((p - g) * (p - g) + (u - v) * (u - v) + (d - h) * (d - h)); return Math.abs(E) < .001 && (E = 1), this.x = (p - g) / E, this.y = (u - v) / E, this.z = (d - h) / E, this.w = Math.acos((c + m + f - 1) / 2), this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class Co extends Qn { constructor(e = 1, t = 1, n = {}) { super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ze(0, 0, e, t), this.scissorTest = !1, this.viewport = new Ze(0, 0, e, t); const i = { width: e, height: t, depth: 1 }; n.encoding !== void 0 && (Rn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === 3001 ? ut : Dt), n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: 1006, depthBuffer: !0, stencilBuffer: !1, depthTexture: null, samples: 0 }, n), this.texture = new dt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples } setSize(e, t, n = 1) { (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0; const t = Object.assign({}, e.texture.image); return this.texture.source = new La(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class Cn extends Co { constructor(e = 1, t = 1, n = {}) { super(e, t, n), this.isWebGLRenderTarget = !0 } } class Pa extends dt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class Lo extends dt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class dn { constructor(e = 0, t = 0, n = 0, i = 1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i } static slerpFlat(e, t, n, i, s, a, o) { let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3]; const d = s[a + 0], m = s[a + 1], g = s[a + 2], v = s[a + 3]; if (o === 0) { e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u; return } if (o === 1) { e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = v; return } if (u !== v || l !== d || c !== m || h !== g) { let p = 1 - o; const f = l * d + c * m + h * g + u * v, E = f >= 0 ? 1 : -1, _ = 1 - f * f; if (_ > Number.EPSILON) { const L = Math.sqrt(_), w = Math.atan2(L, f * E); p = Math.sin(p * w) / L, o = Math.sin(o * w) / L } const b = o * E; if (l = l * p + d * b, c = c * p + m * b, h = h * p + g * b, u = u * p + v * b, p === 1 - o) { const L = 1 / Math.sqrt(l * l + c * c + h * h + u * u); l *= L, c *= L, h *= L, u *= L } } e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u } static multiplyQuaternionsFlat(e, t, n, i, s, a) { const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], m = s[a + 2], g = s[a + 3]; return e[t] = o * g + h * u + l * m - c * d, e[t + 1] = l * g + h * d + c * u - o * m, e[t + 2] = c * g + h * m + o * d - l * u, e[t + 3] = h * g - o * u - l * d - c * m, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t = !0) { const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(s / 2), d = l(n / 2), m = l(i / 2), g = l(s / 2); switch (a) { case "XYZ": this._x = d * h * u + c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u - d * m * g; break; case "YXZ": this._x = d * h * u + c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u + d * m * g; break; case "ZXY": this._x = d * h * u - c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u - d * m * g; break; case "ZYX": this._x = d * h * u - c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u + d * m * g; break; case "YZX": this._x = d * h * u + c * m * g, this._y = c * m * u + d * h * g, this._z = c * h * g - d * m * u, this._w = c * h * u - d * m * g; break; case "XZY": this._x = d * h * u - c * m * g, this._y = c * m * u - d * h * g, this._z = c * h * g + d * m * u, this._w = c * h * u + d * m * g; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a) }return t === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { const n = t / 2, i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u; if (d > 0) { const m = .5 / Math.sqrt(d + 1); this._w = .25 / m, this._x = (h - l) * m, this._y = (s - c) * m, this._z = (a - i) * m } else if (n > o && n > u) { const m = 2 * Math.sqrt(1 + n - o - u); this._w = (h - l) / m, this._x = .25 * m, this._y = (i + a) / m, this._z = (s + c) / m } else if (o > u) { const m = 2 * Math.sqrt(1 + o - n - u); this._w = (s - c) / m, this._x = (i + a) / m, this._y = .25 * m, this._z = (l + h) / m } else { const m = 2 * Math.sqrt(1 + u - n - o); this._w = (a - i) / m, this._x = (s + c) / m, this._y = (l + h) / m, this._z = .25 * m } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(xt(this.dot(e), -1, 1))) } rotateTowards(e, t) { const n = this.angleTo(e); if (n === 0) return this; const i = Math.min(1, t / n); return this.slerp(e, i), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, t) { const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w; return this._x = n * h + a * o + i * c - s * l, this._y = i * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - s * c, this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x, i = this._y, s = this._z, a = this._w; let o = a * e._w + n * e._x + i * e._y + s * e._z; if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = s, this; const l = 1 - o * o; if (l <= Number.EPSILON) { const m = 1 - t; return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * i + t * this._y, this._z = m * s + t * this._z, this.normalize(), this } const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c; return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), i = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random(); return this.set(t * Math.cos(i), n * Math.sin(s), n * Math.cos(s), t * Math.sin(i)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class P { constructor(e = 0, t = 0, n = 0) { P.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this } applyEuler(e) { return this.applyQuaternion(xs.setFromEuler(e)) } applyAxisAngle(e, t) { return this.applyQuaternion(xs.setFromAxisAngle(e, t)) } applyMatrix3(e) { const t = this.x, n = this.y, i = this.z, s = e.elements; return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]); return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this } applyQuaternion(e) { const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - s * i), u = 2 * (s * n - a * t); return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - s * u, this.z = i + l * u + s * h - a * c, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { const t = this.x, n = this.y, i = this.z, s = e.elements; return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, t) { const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, l = t.z; return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this } projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(e) { return pr.copy(this).projectOnVector(e), this.sub(pr) } reflect(e) { return this.sub(pr.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(xt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z; return t * t + n * n + i * i } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t, n) { const i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this } setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = i, this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this.x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const e = (Math.random() - .5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2); return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const pr = new P, xs = new dn; class tn { constructor(e = new P(1 / 0, 1 / 0, 1 / 0), t = new P(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromArray(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t += 3)this.expandByPoint(Ut.fromArray(e, t)); return this } setFromBufferAttribute(e) { this.makeEmpty(); for (let t = 0, n = e.count; t < n; t++)this.expandByPoint(Ut.fromBufferAttribute(e, t)); return this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { const n = Ut.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (n !== void 0) { const s = n.getAttribute("position"); if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0) for (let a = 0, o = s.count; a < o; a++)e.isMesh === !0 ? e.getVertexPosition(a, Ut) : Ut.fromBufferAttribute(s, a), Ut.applyMatrix4(e.matrixWorld), this.expandByPoint(Ut); else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), yi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), yi.copy(n.boundingBox)), yi.applyMatrix4(e.matrixWorld), this.union(yi) } const i = e.children; for (let s = 0, a = i.length; s < a; s++)this.expandByObject(i[s], t); return this } containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) } intersectsSphere(e) { return this.clampPoint(e.center, Ut), Ut.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(ri), Ei.subVectors(this.max, ri), Dn.subVectors(e.a, ri), In.subVectors(e.b, ri), Nn.subVectors(e.c, ri), nn.subVectors(In, Dn), rn.subVectors(Nn, In), _n.subVectors(Dn, Nn); let t = [0, -nn.z, nn.y, 0, -rn.z, rn.y, 0, -_n.z, _n.y, nn.z, 0, -nn.x, rn.z, 0, -rn.x, _n.z, 0, -_n.x, -nn.y, nn.x, 0, -rn.y, rn.x, 0, -_n.y, _n.x, 0]; return !mr(t, Dn, In, Nn, Ei) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !mr(t, Dn, In, Nn, Ei)) ? !1 : (Ti.crossVectors(nn, rn), t = [Ti.x, Ti.y, Ti.z], mr(t, Dn, In, Nn, Ei)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, Ut).distanceTo(e) } getBoundingSphere(e) { return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ut).length() * .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (Yt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Yt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Yt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Yt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Yt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Yt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Yt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Yt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Yt), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } } const Yt = [new P, new P, new P, new P, new P, new P, new P, new P], Ut = new P, yi = new tn, Dn = new P, In = new P, Nn = new P, nn = new P, rn = new P, _n = new P, ri = new P, Ei = new P, Ti = new P, vn = new P; function mr(r, e, t, n, i) { for (let s = 0, a = r.length - 3; s <= a; s += 3) { vn.fromArray(r, s); const o = i.x * Math.abs(vn.x) + i.y * Math.abs(vn.y) + i.z * Math.abs(vn.z), l = e.dot(vn), c = t.dot(vn), h = n.dot(vn); if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1 } return !0 } const Po = new tn, si = new P, gr = new P; class Wt { constructor(e = new P, t = -1) { this.isSphere = !0, this.center = e, this.radius = t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e, t) { const n = this.center; t !== void 0 ? n.copy(t) : Po.setFromPoints(e).getCenter(n); let i = 0; for (let s = 0, a = e.length; s < a; s++)i = Math.max(i, n.distanceToSquared(e[s])); return this.radius = Math.sqrt(i), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this; si.subVectors(e, this.center); const t = si.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t), i = (n - this.radius) * .5; this.center.addScaledVector(si, i / n), this.radius += i } return this } union(e) { return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (gr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(si.copy(e.center).add(gr)), this.expandByPoint(si.copy(e.center).sub(gr))), this) } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } } const jt = new P, _r = new P, Ai = new P, sn = new P, vr = new P, bi = new P, xr = new P; class nr { constructor(e = new P, t = new P(0, 0, -1)) { this.origin = e, this.direction = t } set(e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, jt)), this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { const t = jt.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (jt.copy(this.origin).addScaledVector(this.direction, t), jt.distanceToSquared(e)) } distanceSqToSegment(e, t, n, i) { _r.copy(e).add(t).multiplyScalar(.5), Ai.copy(t).sub(e).normalize(), sn.copy(this.origin).sub(_r); const s = e.distanceTo(t) * .5, a = -this.direction.dot(Ai), o = sn.dot(this.direction), l = -sn.dot(Ai), c = sn.lengthSq(), h = Math.abs(1 - a * a); let u, d, m, g; if (h > 0) if (u = a * l - o, d = a * o - l, g = s * h, u >= 0) if (d >= -g) if (d <= g) { const v = 1 / h; u *= v, d *= v, m = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c } else d = s, u = Math.max(0, -(a * d + o)), m = -u * u + d * (d + 2 * l) + c; else d = -s, u = Math.max(0, -(a * d + o)), m = -u * u + d * (d + 2 * l) + c; else d <= -g ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), m = -u * u + d * (d + 2 * l) + c); else d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), m = -u * u + d * (d + 2 * l) + c; return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(_r).addScaledVector(Ai, d), m } intersectSphere(e, t) { jt.subVectors(e.center, this.origin); const n = jt.dot(this.direction), i = jt.dot(jt) - n * n, s = e.radius * e.radius; if (i > s) return null; const a = Math.sqrt(s - i), o = n - a, l = n + a; return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t) } intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null } intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) } intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, i, s, a, o, l; const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin; return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t) } intersectsBox(e) { return this.intersectBox(e, jt) !== null } intersectTriangle(e, t, n, i, s) { vr.subVectors(t, e), bi.subVectors(n, e), xr.crossVectors(vr, bi); let a = this.direction.dot(xr), o; if (a > 0) { if (i) return null; o = 1 } else if (a < 0) o = -1, a = -a; else return null; sn.subVectors(this.origin, e); const l = o * this.direction.dot(bi.crossVectors(sn, bi)); if (l < 0) return null; const c = o * this.direction.dot(vr.cross(sn)); if (c < 0 || l + c > a) return null; const h = -o * sn.dot(xr); return h < 0 ? null : this.at(h / a, s) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class Be { constructor(e, t, n, i, s, a, o, l, c, h, u, d, m, g, v, p) { Be.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c, h, u, d, m, g, v, p) } set(e, t, n, i, s, a, o, l, c, h, u, d, m, g, v, p) { const f = this.elements; return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = m, f[7] = g, f[11] = v, f[15] = p, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new Be().fromArray(this.elements) } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { const t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(e) { const t = this.elements, n = e.elements, i = 1 / Un.setFromMatrixColumn(e, 0).length(), s = 1 / Un.setFromMatrixColumn(e, 1).length(), a = 1 / Un.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromEuler(e) { const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), u = Math.sin(s); if (e.order === "XYZ") { const d = a * h, m = a * u, g = o * h, v = o * u; t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = m + g * c, t[5] = d - v * c, t[9] = -o * l, t[2] = v - d * c, t[6] = g + m * c, t[10] = a * l } else if (e.order === "YXZ") { const d = l * h, m = l * u, g = c * h, v = c * u; t[0] = d + v * o, t[4] = g * o - m, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = m * o - g, t[6] = v + d * o, t[10] = a * l } else if (e.order === "ZXY") { const d = l * h, m = l * u, g = c * h, v = c * u; t[0] = d - v * o, t[4] = -a * u, t[8] = g + m * o, t[1] = m + g * o, t[5] = a * h, t[9] = v - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l } else if (e.order === "ZYX") { const d = a * h, m = a * u, g = o * h, v = o * u; t[0] = l * h, t[4] = g * c - m, t[8] = d * c + v, t[1] = l * u, t[5] = v * c + d, t[9] = m * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l } else if (e.order === "YZX") { const d = a * l, m = a * c, g = o * l, v = o * c; t[0] = l * h, t[4] = v - d * u, t[8] = g * u + m, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = m * u + g, t[10] = d - v * u } else if (e.order === "XZY") { const d = a * l, m = a * c, g = o * l, v = o * c; t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + v, t[5] = a * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = o * h, t[10] = v * u + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(Do, e, Io) } lookAt(e, t, n) { const i = this.elements; return At.subVectors(e, t), At.lengthSq() === 0 && (At.z = 1), At.normalize(), an.crossVectors(n, At), an.lengthSq() === 0 && (Math.abs(n.z) === 1 ? At.x += 1e-4 : At.z += 1e-4, At.normalize(), an.crossVectors(n, At)), an.normalize(), Ri.crossVectors(At, an), i[0] = an.x, i[4] = Ri.x, i[8] = At.x, i[1] = an.y, i[5] = Ri.y, i[9] = At.y, i[2] = an.z, i[6] = Ri.z, i[10] = At.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], m = n[13], g = n[2], v = n[6], p = n[10], f = n[14], E = n[3], _ = n[7], b = n[11], L = n[15], w = i[0], R = i[4], z = i[8], ne = i[12], M = i[1], A = i[5], W = i[9], q = i[13], C = i[2], O = i[6], G = i[10], X = i[14], k = i[3], V = i[7], Z = i[11], $ = i[15]; return s[0] = a * w + o * M + l * C + c * k, s[4] = a * R + o * A + l * O + c * V, s[8] = a * z + o * W + l * G + c * Z, s[12] = a * ne + o * q + l * X + c * $, s[1] = h * w + u * M + d * C + m * k, s[5] = h * R + u * A + d * O + m * V, s[9] = h * z + u * W + d * G + m * Z, s[13] = h * ne + u * q + d * X + m * $, s[2] = g * w + v * M + p * C + f * k, s[6] = g * R + v * A + p * O + f * V, s[10] = g * z + v * W + p * G + f * Z, s[14] = g * ne + v * q + p * X + f * $, s[3] = E * w + _ * M + b * C + L * k, s[7] = E * R + _ * A + b * O + L * V, s[11] = E * z + _ * W + b * G + L * Z, s[15] = E * ne + _ * q + b * X + L * $, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], m = e[14], g = e[3], v = e[7], p = e[11], f = e[15]; return g * (+s * l * u - i * c * u - s * o * d + n * c * d + i * o * m - n * l * m) + v * (+t * l * m - t * c * d + s * a * d - i * a * m + i * c * h - s * l * h) + p * (+t * c * u - t * o * m - s * a * u + n * a * m + s * o * h - n * c * h) + f * (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h) } transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], m = e[11], g = e[12], v = e[13], p = e[14], f = e[15], E = u * p * c - v * d * c + v * l * m - o * p * m - u * l * f + o * d * f, _ = g * d * c - h * p * c - g * l * m + a * p * m + h * l * f - a * d * f, b = h * v * c - g * u * c + g * o * m - a * v * m - h * o * f + a * u * f, L = g * u * l - h * v * l - g * o * d + a * v * d + h * o * p - a * u * p, w = t * E + n * _ + i * b + s * L; if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const R = 1 / w; return e[0] = E * R, e[1] = (v * d * s - u * p * s - v * i * m + n * p * m + u * i * f - n * d * f) * R, e[2] = (o * p * s - v * l * s + v * i * c - n * p * c - o * i * f + n * l * f) * R, e[3] = (u * l * s - o * d * s - u * i * c + n * d * c + o * i * m - n * l * m) * R, e[4] = _ * R, e[5] = (h * p * s - g * d * s + g * i * m - t * p * m - h * i * f + t * d * f) * R, e[6] = (g * l * s - a * p * s - g * i * c + t * p * c + a * i * f - t * l * f) * R, e[7] = (a * d * s - h * l * s + h * i * c - t * d * c - a * i * m + t * l * m) * R, e[8] = b * R, e[9] = (g * u * s - h * v * s - g * n * m + t * v * m + h * n * f - t * u * f) * R, e[10] = (a * v * s - g * o * s + g * n * c - t * v * c - a * n * f + t * o * f) * R, e[11] = (h * o * s - a * u * s - h * n * c + t * u * c + a * n * m - t * o * m) * R, e[12] = L * R, e[13] = (h * v * i - g * u * i + g * n * d - t * v * d - h * n * p + t * u * p) * R, e[14] = (g * o * i - a * v * i - g * n * l + t * v * l + a * n * p - t * o * p) * R, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * d + t * o * d) * R, this } scale(e) { const t = this.elements, n = e.x, i = e.y, s = e.z; return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this } getMaxScaleOnAxis() { const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, i)) } makeTranslation(e, t, n) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this } makeRotationY(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this } makeRotationZ(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, t) { const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o; return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, s * l * l + n, 0, 0, 0, 0, 1), this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(e, t, n, i, s, a) { return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this } compose(e, t, n) { const i = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, u = o + o, d = s * c, m = s * h, g = s * u, v = a * h, p = a * u, f = o * u, E = l * c, _ = l * h, b = l * u, L = n.x, w = n.y, R = n.z; return i[0] = (1 - (v + f)) * L, i[1] = (m + b) * L, i[2] = (g - _) * L, i[3] = 0, i[4] = (m - b) * w, i[5] = (1 - (d + f)) * w, i[6] = (p + E) * w, i[7] = 0, i[8] = (g + _) * R, i[9] = (p - E) * R, i[10] = (1 - (d + v)) * R, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this } decompose(e, t, n) { const i = this.elements; let s = Un.set(i[0], i[1], i[2]).length(); const a = Un.set(i[4], i[5], i[6]).length(), o = Un.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], Ft.copy(this); const c = 1 / s, h = 1 / a, u = 1 / o; return Ft.elements[0] *= c, Ft.elements[1] *= c, Ft.elements[2] *= c, Ft.elements[4] *= h, Ft.elements[5] *= h, Ft.elements[6] *= h, Ft.elements[8] *= u, Ft.elements[9] *= u, Ft.elements[10] *= u, t.setFromRotationMatrix(Ft), n.x = s, n.y = a, n.z = o, this } makePerspective(e, t, n, i, s, a, o = 2e3) { const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i); let m, g; if (o === 2e3) m = -(a + s) / (a - s), g = -2 * a * s / (a - s); else if (o === 2001) m = -a / (a - s), g = -a * s / (a - s); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o); return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this } makeOrthographic(e, t, n, i, s, a, o = 2e3) { const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), d = (t + e) * c, m = (n + i) * h; let g, v; if (o === 2e3) g = (a + s) * u, v = -2 * u; else if (o === 2001) g = s * u, v = -1 * u; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o); return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = v, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 16; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } } const Un = new P, Ft = new Be, Do = new P(0, 0, 0), Io = new P(1, 1, 1), an = new P, Ri = new P, At = new P, Ms = new Be, Ss = new dn; class ir { constructor(e = 0, t = 0, n = 0, i = ir.DEFAULT_ORDER) { this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, t, n, i = this._order) { return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, t = this._order, n = !0) { const i = e.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], m = i[10]; switch (t) { case "XYZ": this._y = Math.asin(xt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0); break; case "YXZ": this._x = Math.asin(-xt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0); break; case "ZXY": this._x = Math.asin(xt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s)); break; case "ZYX": this._y = Math.asin(-xt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c)); break; case "YZX": this._z = Math.asin(xt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, m)); break; case "XZY": this._z = Math.asin(-xt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) }return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(e, t, n) { return Ms.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ms, t, n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(e) { return Ss.setFromEuler(this), this.setFromQuaternion(Ss, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } } ir.DEFAULT_ORDER = "XYZ"; class Da { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } } let No = 0; const ys = new P, Fn = new dn, Kt = new Be, wi = new P, ai = new P, Uo = new P, Fo = new dn, Es = new P(1, 0, 0), Ts = new P(0, 1, 0), As = new P(0, 0, 1), Oo = { type: "added" }, Bo = { type: "removed" }; class it extends Qn { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: No++ }), this.uuid = Gt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DEFAULT_UP.clone(); const e = new P, t = new ir, n = new dn, i = new P(1, 1, 1); function s() { n.setFromEuler(t, !1) } function a() { t.setFromQuaternion(n, void 0, !1) } t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new Be }, normalMatrix: { value: new Fe } }), this.matrix = new Be, this.matrixWorld = new Be, this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Da, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return Fn.setFromAxisAngle(e, t), this.quaternion.multiply(Fn), this } rotateOnWorldAxis(e, t) { return Fn.setFromAxisAngle(e, t), this.quaternion.premultiply(Fn), this } rotateX(e) { return this.rotateOnAxis(Es, e) } rotateY(e) { return this.rotateOnAxis(Ts, e) } rotateZ(e) { return this.rotateOnAxis(As, e) } translateOnAxis(e, t) { return ys.copy(e).applyQuaternion(this.quaternion), this.position.add(ys.multiplyScalar(t)), this } translateX(e) { return this.translateOnAxis(Es, e) } translateY(e) { return this.translateOnAxis(Ts, e) } translateZ(e) { return this.translateOnAxis(As, e) } localToWorld(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Kt.copy(this.matrixWorld).invert()) } lookAt(e, t, n) { e.isVector3 ? wi.copy(e) : wi.set(e, t, n); const i = this.parent; this.updateWorldMatrix(!0, !1), ai.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Kt.lookAt(ai, wi, this.up) : Kt.lookAt(wi, ai, this.up), this.quaternion.setFromRotationMatrix(Kt), i && (Kt.extractRotation(i.matrixWorld), Fn.setFromRotationMatrix(Kt), this.quaternion.premultiply(Fn.invert())) } add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++)this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Oo)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Bo)), this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this } clear() { return this.remove(...this.children) } attach(e) { return this.updateWorldMatrix(!0, !1), Kt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Kt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Kt), this.add(e), e.updateWorldMatrix(!1, !0), this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const a = this.children[n].getObjectByProperty(e, t); if (a !== void 0) return a } } getObjectsByProperty(e, t, n = []) { this[e] === t && n.push(this); const i = this.children; for (let s = 0, a = i.length; s < a; s++)i[s].getObjectsByProperty(e, t, n); return n } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ai, e, Uo), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ai, Fo, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() { } traverse(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverseVisible(e) } traverseAncestors(e) { const t = this.parent; t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++) { const s = t[n]; (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e) } } updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) { const i = this.children; for (let s = 0, a = i.length; s < a; s++) { const o = i[s]; o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0) } } } toJSON(e) { const t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); const i = {}; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(o => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), i.maxGeometryCount = this._maxGeometryCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })); function s(o, l) { return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid } if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = s(e.geometries, this.geometry); const o = this.geometry.parameters; if (o !== void 0 && o.shapes !== void 0) { const l = o.shapes; if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) { const u = l[c]; s(e.shapes, u) } else s(e.shapes, l) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const o = []; for (let l = 0, c = this.material.length; l < c; l++)o.push(s(e.materials, this.material[l])); i.material = o } else i.material = s(e.materials, this.material); if (this.children.length > 0) { i.children = []; for (let o = 0; o < this.children.length; o++)i.children.push(this.children[o].toJSON(e).object) } if (this.animations.length > 0) { i.animations = []; for (let o = 0; o < this.animations.length; o++) { const l = this.animations[o]; i.animations.push(s(e.animations, l)) } } if (t) { const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), m = a(e.animations), g = a(e.nodes); o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g) } return n.object = i, n; function a(o) { const l = []; for (const c in o) { const h = o[c]; delete h.metadata, l.push(h) } return l } } clone(e) { return new this.constructor().copy(this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) { const i = e.children[n]; this.add(i.clone()) } return this } } it.DEFAULT_UP = new P(0, 1, 0); it.DEFAULT_MATRIX_AUTO_UPDATE = !0; it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const Ot = new P, Zt = new P, Mr = new P, $t = new P, On = new P, Bn = new P, bs = new P, Sr = new P, yr = new P, Er = new P; class Vt { constructor(e = new P, t = new P, n = new P) { this.a = e, this.b = t, this.c = n } static getNormal(e, t, n, i) { i.subVectors(n, t), Ot.subVectors(e, t), i.cross(Ot); const s = i.lengthSq(); return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0) } static getBarycoord(e, t, n, i, s) { Ot.subVectors(i, t), Zt.subVectors(n, t), Mr.subVectors(e, t); const a = Ot.dot(Ot), o = Ot.dot(Zt), l = Ot.dot(Mr), c = Zt.dot(Zt), h = Zt.dot(Mr), u = a * c - o * o; if (u === 0) return s.set(0, 0, 0), null; const d = 1 / u, m = (c * l - o * h) * d, g = (a * h - o * l) * d; return s.set(1 - m - g, g, m) } static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, $t) === null ? !1 : $t.x >= 0 && $t.y >= 0 && $t.x + $t.y <= 1 } static getInterpolation(e, t, n, i, s, a, o, l) { return this.getBarycoord(e, t, n, i, $t) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, $t.x), l.addScaledVector(a, $t.y), l.addScaledVector(o, $t.z), l) } static isFrontFacing(e, t, n, i) { return Ot.subVectors(n, t), Zt.subVectors(e, t), Ot.cross(Zt).dot(i) < 0 } set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this } setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return Ot.subVectors(this.c, this.b), Zt.subVectors(this.a, this.b), Ot.cross(Zt).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return Vt.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, t) { return Vt.getBarycoord(e, this.a, this.b, this.c, t) } getInterpolation(e, t, n, i, s) { return Vt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s) } containsPoint(e) { return Vt.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return Vt.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, t) { const n = this.a, i = this.b, s = this.c; let a, o; On.subVectors(i, n), Bn.subVectors(s, n), Sr.subVectors(e, n); const l = On.dot(Sr), c = Bn.dot(Sr); if (l <= 0 && c <= 0) return t.copy(n); yr.subVectors(e, i); const h = On.dot(yr), u = Bn.dot(yr); if (h >= 0 && u <= h) return t.copy(i); const d = l * u - h * c; if (d <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(n).addScaledVector(On, a); Er.subVectors(e, s); const m = On.dot(Er), g = Bn.dot(Er); if (g >= 0 && m <= g) return t.copy(s); const v = m * c - l * g; if (v <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(n).addScaledVector(Bn, o); const p = h * g - m * u; if (p <= 0 && u - h >= 0 && m - g >= 0) return bs.subVectors(s, i), o = (u - h) / (u - h + (m - g)), t.copy(i).addScaledVector(bs, o); const f = 1 / (p + v + d); return a = v * f, o = d * f, t.copy(n).addScaledVector(On, a).addScaledVector(Bn, o) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } } const Ia = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, on = { h: 0, s: 0, l: 0 }, Ci = { h: 0, s: 0, l: 0 }; function Tr(r, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r } class ye { constructor(e, t, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n) } set(e, t, n) { if (t === void 0 && n === void 0) { const i = e; i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i) } else this.setRGB(e, t, n); return this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = ut) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, je.toWorkingColorSpace(this, t), this } setRGB(e, t, n, i = je.workingColorSpace) { return this.r = e, this.g = t, this.b = n, je.toWorkingColorSpace(this, i), this } setHSL(e, t, n, i = je.workingColorSpace) { if (e = Kr(e, 1), t = xt(t, 0, 1), n = xt(n, 0, 1), t === 0) this.r = this.g = this.b = n; else { const s = n <= .5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s; this.r = Tr(a, s, e + 1 / 3), this.g = Tr(a, s, e), this.b = Tr(a, s, e - 1 / 3) } return je.toWorkingColorSpace(this, i), this } setStyle(e, t = ut) { function n(s) { s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let i; if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) { let s; const a = i[1], o = i[2]; switch (a) { case "rgb": case "rgba": if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t); if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t); break; case "hsl": case "hsla": if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t); break; default: console.warn("THREE.Color: Unknown color model " + e) } } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) { const s = i[1], a = s.length; if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t); if (a === 6) return this.setHex(parseInt(s, 16), t); console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0) return this.setColorName(e, t); return this } setColorName(e, t = ut) { const n = Ia[e.toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = Kn(e.r), this.g = Kn(e.g), this.b = Kn(e.b), this } copyLinearToSRGB(e) { return this.r = dr(e.r), this.g = dr(e.g), this.b = dr(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = ut) { return je.fromWorkingColorSpace(vt.copy(this), e), Math.round(xt(vt.r * 255, 0, 255)) * 65536 + Math.round(xt(vt.g * 255, 0, 255)) * 256 + Math.round(xt(vt.b * 255, 0, 255)) } getHexString(e = ut) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, t = je.workingColorSpace) { je.fromWorkingColorSpace(vt.copy(this), t); const n = vt.r, i = vt.g, s = vt.b, a = Math.max(n, i, s), o = Math.min(n, i, s); let l, c; const h = (o + a) / 2; if (o === a) l = 0, c = 0; else { const u = a - o; switch (c = h <= .5 ? u / (a + o) : u / (2 - a - o), a) { case n: l = (i - s) / u + (i < s ? 6 : 0); break; case i: l = (s - n) / u + 2; break; case s: l = (n - i) / u + 4; break }l /= 6 } return e.h = l, e.s = c, e.l = h, e } getRGB(e, t = je.workingColorSpace) { return je.fromWorkingColorSpace(vt.copy(this), t), e.r = vt.r, e.g = vt.g, e.b = vt.b, e } getStyle(e = ut) { je.fromWorkingColorSpace(vt.copy(this), e); const t = vt.r, n = vt.g, i = vt.b; return e !== ut ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})` } offsetHSL(e, t, n) { return this.getHSL(on), this.setHSL(on.h + e, on.s + t, on.l + n) } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this } lerpHSL(e, t) { this.getHSL(on), e.getHSL(Ci); const n = fi(on.h, Ci.h, t), i = fi(on.s, Ci.s, t), s = fi(on.l, Ci.l, t); return this.setHSL(n, i, s), this } setFromVector3(e) { return this.r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { const t = this.r, n = this.g, i = this.b, s = e.elements; return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } } const vt = new ye; ye.NAMES = Ia; let Go = 0; class Ht extends Qn { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Go++ }), this.uuid = Gt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ye(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBuild() { } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(`THREE.Material: parameter '${t}' has value of undefined.`); continue } const i = this[t]; if (i === void 0) { console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`); continue } i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function i(s) { const a = []; for (const o in s) { const l = s[o]; delete l.metadata, a.push(l) } return a } if (t) { const s = i(e.textures), a = i(e.images); s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const i = t.length; n = new Array(i); for (let s = 0; s !== i; ++s)n[s] = t[s].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } } class An extends Ht { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ye(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } const at = new P, Li = new Oe; class mt { constructor(e, t, n = !1) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = 1015, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return Rn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, s = this.itemSize; i < s; i++)this.array[e + i] = t.array[n + i]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)Li.fromBufferAttribute(this, t), Li.applyMatrix3(e), this.setXY(t, Li.x, Li.y); else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)at.fromBufferAttribute(this, t), at.applyMatrix3(e), this.setXYZ(t, at.x, at.y, at.z); return this } applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++)at.fromBufferAttribute(this, t), at.applyMatrix4(e), this.setXYZ(t, at.x, at.y, at.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)at.fromBufferAttribute(this, t), at.applyNormalMatrix(e), this.setXYZ(t, at.x, at.y, at.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)at.fromBufferAttribute(this, t), at.transformDirection(e), this.setXYZ(t, at.x, at.y, at.z); return this } set(e, t = 0) { return this.array.set(e, t), this } getComponent(e, t) { let n = this.array[e * this.itemSize + t]; return this.normalized && (n = Bt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = Xe(n, this.array)), this.array[e * this.itemSize + t] = n, this } getX(e) { let t = this.array[e * this.itemSize]; return this.normalized && (t = Bt(t, this.array)), t } setX(e, t) { return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize] = t, this } getY(e) { let t = this.array[e * this.itemSize + 1]; return this.normalized && (t = Bt(t, this.array)), t } setY(e, t) { return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 1] = t, this } getZ(e) { let t = this.array[e * this.itemSize + 2]; return this.normalized && (t = Bt(t, this.array)), t } setZ(e, t) { return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 2] = t, this } getW(e) { let t = this.array[e * this.itemSize + 3]; return this.normalized && (t = Bt(t, this.array)), t } setW(e, t) { return this.normalized && (t = Xe(t, this.array)), this.array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), i = Xe(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this } setXYZW(e, t, n, i, s) { return e *= this.itemSize, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), i = Xe(i, this.array), s = Xe(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e } } class Na extends mt { constructor(e, t, n) { super(new Uint16Array(e), t, n) } } class Ua extends mt { constructor(e, t, n) { super(new Uint32Array(e), t, n) } } class It extends mt { constructor(e, t, n) { super(new Float32Array(e), t, n) } } let Ho = 0; const Lt = new Be, Ar = new it, Gn = new P, bt = new tn, oi = new tn, ht = new P; class Nt extends Qn { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ho++ }), this.uuid = Gt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (wa(e) ? Ua : Na)(e, 1) : this.index = e, this } getAttribute(e) { return this.attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t } applyMatrix4(e) { const t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const s = new Fe().getNormalMatrix(e); n.applyNormalMatrix(s), n.needsUpdate = !0 } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return Lt.makeRotationFromQuaternion(e), this.applyMatrix4(Lt), this } rotateX(e) { return Lt.makeRotationX(e), this.applyMatrix4(Lt), this } rotateY(e) { return Lt.makeRotationY(e), this.applyMatrix4(Lt), this } rotateZ(e) { return Lt.makeRotationZ(e), this.applyMatrix4(Lt), this } translate(e, t, n) { return Lt.makeTranslation(e, t, n), this.applyMatrix4(Lt), this } scale(e, t, n) { return Lt.makeScale(e, t, n), this.applyMatrix4(Lt), this } lookAt(e) { return Ar.lookAt(e), Ar.updateMatrix(), this.applyMatrix4(Ar.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Gn).negate(), this.translate(Gn.x, Gn.y, Gn.z), this } setFromPoints(e) { const t = []; for (let n = 0, i = e.length; n < i; n++) { const s = e[n]; t.push(s.x, s.y, s.z || 0) } return this.setAttribute("position", new It(t, 3)), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new tn); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new P(-1 / 0, -1 / 0, -1 / 0), new P(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) { const s = t[n]; bt.setFromBufferAttribute(s), this.morphTargetsRelative ? (ht.addVectors(this.boundingBox.min, bt.min), this.boundingBox.expandByPoint(ht), ht.addVectors(this.boundingBox.max, bt.max), this.boundingBox.expandByPoint(ht)) : (this.boundingBox.expandByPoint(bt.min), this.boundingBox.expandByPoint(bt.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new Wt); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new P, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (bt.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) { const o = t[s]; oi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ht.addVectors(bt.min, oi.min), bt.expandByPoint(ht), ht.addVectors(bt.max, oi.max), bt.expandByPoint(ht)) : (bt.expandByPoint(oi.min), bt.expandByPoint(oi.max)) } bt.getCenter(n); let i = 0; for (let s = 0, a = e.count; s < a; s++)ht.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(ht)); if (t) for (let s = 0, a = t.length; s < a; s++) { const o = t[s], l = this.morphTargetsRelative; for (let c = 0, h = o.count; c < h; c++)ht.fromBufferAttribute(o, c), l && (Gn.fromBufferAttribute(e, c), ht.add(Gn)), i = Math.max(i, n.distanceToSquared(ht)) } this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const e = this.index, t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = e.array, i = t.position.array, s = t.normal.array, a = t.uv.array, o = i.length / 3; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new mt(new Float32Array(4 * o), 4)); const l = this.getAttribute("tangent").array, c = [], h = []; for (let M = 0; M < o; M++)c[M] = new P, h[M] = new P; const u = new P, d = new P, m = new P, g = new Oe, v = new Oe, p = new Oe, f = new P, E = new P; function _(M, A, W) { u.fromArray(i, M * 3), d.fromArray(i, A * 3), m.fromArray(i, W * 3), g.fromArray(a, M * 2), v.fromArray(a, A * 2), p.fromArray(a, W * 2), d.sub(u), m.sub(u), v.sub(g), p.sub(g); const q = 1 / (v.x * p.y - p.x * v.y); isFinite(q) && (f.copy(d).multiplyScalar(p.y).addScaledVector(m, -v.y).multiplyScalar(q), E.copy(m).multiplyScalar(v.x).addScaledVector(d, -p.x).multiplyScalar(q), c[M].add(f), c[A].add(f), c[W].add(f), h[M].add(E), h[A].add(E), h[W].add(E)) } let b = this.groups; b.length === 0 && (b = [{ start: 0, count: n.length }]); for (let M = 0, A = b.length; M < A; ++M) { const W = b[M], q = W.start, C = W.count; for (let O = q, G = q + C; O < G; O += 3)_(n[O + 0], n[O + 1], n[O + 2]) } const L = new P, w = new P, R = new P, z = new P; function ne(M) { R.fromArray(s, M * 3), z.copy(R); const A = c[M]; L.copy(A), L.sub(R.multiplyScalar(R.dot(A))).normalize(), w.crossVectors(z, A); const q = w.dot(h[M]) < 0 ? -1 : 1; l[M * 4] = L.x, l[M * 4 + 1] = L.y, l[M * 4 + 2] = L.z, l[M * 4 + 3] = q } for (let M = 0, A = b.length; M < A; ++M) { const W = b[M], q = W.start, C = W.count; for (let O = q, G = q + C; O < G; O += 3)ne(n[O + 0]), ne(n[O + 1]), ne(n[O + 2]) } } computeVertexNormals() { const e = this.index, t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new mt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n); else for (let d = 0, m = n.count; d < m; d++)n.setXYZ(d, 0, 0, 0); const i = new P, s = new P, a = new P, o = new P, l = new P, c = new P, h = new P, u = new P; if (e) for (let d = 0, m = e.count; d < m; d += 3) { const g = e.getX(d + 0), v = e.getX(d + 1), p = e.getX(d + 2); i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, v), a.fromBufferAttribute(t, p), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, v), c.fromBufferAttribute(n, p), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(v, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z) } else for (let d = 0, m = t.count; d < m; d += 3)i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++)ht.fromBufferAttribute(e, t), ht.normalize(), e.setXYZ(t, ht.x, ht.y, ht.z) } toNonIndexed() { function e(o, l) { const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h); let m = 0, g = 0; for (let v = 0, p = l.length; v < p; v++) { o.isInterleavedBufferAttribute ? m = l[v] * o.data.stride + o.offset : m = l[v] * h; for (let f = 0; f < h; f++)d[g++] = c[m++] } return new mt(d, h, u) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new Nt, n = this.index.array, i = this.attributes; for (const o in i) { const l = i[o], c = e(l, n); t.setAttribute(o, c) } const s = this.morphAttributes; for (const o in s) { const l = [], c = s[o]; for (let h = 0, u = c.length; h < u; h++) { const d = c[h], m = e(d, n); l.push(m) } t.morphAttributes[o] = l } t.morphTargetsRelative = this.morphTargetsRelative; const a = this.groups; for (let o = 0, l = a.length; o < l; o++) { const c = a[o]; t.addGroup(c.start, c.count, c.materialIndex) } return t } toJSON() { const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in l) l[c] !== void 0 && (e[c] = l[c]); return e } e.data = { attributes: {} }; const t = this.index; t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const l in n) { const c = n[l]; e.data.attributes[l] = c.toJSON(e.data) } const i = {}; let s = !1; for (const l in this.morphAttributes) { const c = this.morphAttributes[l], h = []; for (let u = 0, d = c.length; u < d; u++) { const m = c[u]; h.push(m.toJSON(e.data)) } h.length > 0 && (i[l] = h, s = !0) } s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); const a = this.groups; a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a))); const o = this.boundingSphere; return o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {}; this.name = e.name; const n = e.index; n !== null && this.setIndex(n.clone(t)); const i = e.attributes; for (const c in i) { const h = i[c]; this.setAttribute(c, h.clone(t)) } const s = e.morphAttributes; for (const c in s) { const h = [], u = s[c]; for (let d = 0, m = u.length; d < m; d++)h.push(u[d].clone(t)); this.morphAttributes[c] = h } this.morphTargetsRelative = e.morphTargetsRelative; const a = e.groups; for (let c = 0, h = a.length; c < h; c++) { const u = a[c]; this.addGroup(u.start, u.count, u.materialIndex) } const o = e.boundingBox; o !== null && (this.boundingBox = o.clone()); const l = e.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const Rs = new Be, xn = new nr, Pi = new Wt, ws = new P, Hn = new P, zn = new P, kn = new P, br = new P, Di = new P, Ii = new Oe, Ni = new Oe, Ui = new Oe, Cs = new P, Ls = new P, Ps = new P, Fi = new P, Oi = new P; class Rt extends it { constructor(e = new Nt, t = new An) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, a = i.length; s < a; s++) { const o = i[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s } } } } getVertexPosition(e, t) { const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative; t.fromBufferAttribute(i, e); const o = this.morphTargetInfluences; if (s && o) { Di.set(0, 0, 0); for (let l = 0, c = s.length; l < c; l++) { const h = o[l], u = s[l]; h !== 0 && (br.fromBufferAttribute(u, e), a ? Di.addScaledVector(br, h) : Di.addScaledVector(br.sub(t), h)) } t.add(Di) } return t } raycast(e, t) { const n = this.geometry, i = this.material, s = this.matrixWorld; i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Pi.copy(n.boundingSphere), Pi.applyMatrix4(s), xn.copy(e.ray).recast(e.near), !(Pi.containsPoint(xn.origin) === !1 && (xn.intersectSphere(Pi, ws) === null || xn.origin.distanceToSquared(ws) > (e.far - e.near) ** 2)) && (Rs.copy(s).invert(), xn.copy(e.ray).applyMatrix4(Rs), !(n.boundingBox !== null && xn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, xn))) } _computeIntersections(e, t, n) { let i; const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, m = s.drawRange; if (o !== null) if (Array.isArray(a)) for (let g = 0, v = d.length; g < v; g++) { const p = d[g], f = a[p.materialIndex], E = Math.max(p.start, m.start), _ = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count)); for (let b = E, L = _; b < L; b += 3) { const w = o.getX(b), R = o.getX(b + 1), z = o.getX(b + 2); i = Bi(this, f, e, n, c, h, u, w, R, z), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = p.materialIndex, t.push(i)) } } else { const g = Math.max(0, m.start), v = Math.min(o.count, m.start + m.count); for (let p = g, f = v; p < f; p += 3) { const E = o.getX(p), _ = o.getX(p + 1), b = o.getX(p + 2); i = Bi(this, a, e, n, c, h, u, E, _, b), i && (i.faceIndex = Math.floor(p / 3), t.push(i)) } } else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, v = d.length; g < v; g++) { const p = d[g], f = a[p.materialIndex], E = Math.max(p.start, m.start), _ = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count)); for (let b = E, L = _; b < L; b += 3) { const w = b, R = b + 1, z = b + 2; i = Bi(this, f, e, n, c, h, u, w, R, z), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = p.materialIndex, t.push(i)) } } else { const g = Math.max(0, m.start), v = Math.min(l.count, m.start + m.count); for (let p = g, f = v; p < f; p += 3) { const E = p, _ = p + 1, b = p + 2; i = Bi(this, a, e, n, c, h, u, E, _, b), i && (i.faceIndex = Math.floor(p / 3), t.push(i)) } } } } function zo(r, e, t, n, i, s, a, o) { let l; if (e.side === 1 ? l = n.intersectTriangle(a, s, i, !0, o) : l = n.intersectTriangle(i, s, a, e.side === 0, o), l === null) return null; Oi.copy(o), Oi.applyMatrix4(r.matrixWorld); const c = t.ray.origin.distanceTo(Oi); return c < t.near || c > t.far ? null : { distance: c, point: Oi.clone(), object: r } } function Bi(r, e, t, n, i, s, a, o, l, c) { r.getVertexPosition(o, Hn), r.getVertexPosition(l, zn), r.getVertexPosition(c, kn); const h = zo(r, e, t, n, Hn, zn, kn, Fi); if (h) { i && (Ii.fromBufferAttribute(i, o), Ni.fromBufferAttribute(i, l), Ui.fromBufferAttribute(i, c), h.uv = Vt.getInterpolation(Fi, Hn, zn, kn, Ii, Ni, Ui, new Oe)), s && (Ii.fromBufferAttribute(s, o), Ni.fromBufferAttribute(s, l), Ui.fromBufferAttribute(s, c), h.uv1 = Vt.getInterpolation(Fi, Hn, zn, kn, Ii, Ni, Ui, new Oe), h.uv2 = h.uv1), a && (Cs.fromBufferAttribute(a, o), Ls.fromBufferAttribute(a, l), Ps.fromBufferAttribute(a, c), h.normal = Vt.getInterpolation(Fi, Hn, zn, kn, Cs, Ls, Ps, new P), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)); const u = { a: o, b: l, c, normal: new P, materialIndex: 0 }; Vt.getNormal(Hn, zn, kn, u.normal), h.face = u } return h } class _i extends Nt { constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: s, depthSegments: a }; const o = this; i = Math.floor(i), s = Math.floor(s), a = Math.floor(a); const l = [], c = [], h = [], u = []; let d = 0, m = 0; g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new It(c, 3)), this.setAttribute("normal", new It(h, 3)), this.setAttribute("uv", new It(u, 2)); function g(v, p, f, E, _, b, L, w, R, z, ne) { const M = b / R, A = L / z, W = b / 2, q = L / 2, C = w / 2, O = R + 1, G = z + 1; let X = 0, k = 0; const V = new P; for (let Z = 0; Z < G; Z++) { const $ = Z * A - q; for (let ce = 0; ce < O; ce++) { const Te = ce * M - W; V[v] = Te * E, V[p] = $ * _, V[f] = C, c.push(V.x, V.y, V.z), V[v] = 0, V[p] = 0, V[f] = w > 0 ? 1 : -1, h.push(V.x, V.y, V.z), u.push(ce / R), u.push(1 - Z / z), X += 1 } } for (let Z = 0; Z < z; Z++)for (let $ = 0; $ < R; $++) { const ce = d + $ + O * Z, Te = d + $ + O * (Z + 1), H = d + ($ + 1) + O * (Z + 1), K = d + ($ + 1) + O * Z; l.push(ce, Te, K), l.push(Te, H, K), k += 6 } o.addGroup(m, k, ne), m += k, d += X } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new _i(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } } function Jn(r) { const e = {}; for (const t in r) { e[t] = {}; for (const n in r[t]) { const i = r[t][n]; i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e } function yt(r) { const e = {}; for (let t = 0; t < r.length; t++) { const n = Jn(r[t]); for (const i in n) e[i] = n[i] } return e } function ko(r) { const e = []; for (let t = 0; t < r.length; t++)e.push(r[t].clone()); return e } function Fa(r) { return r.getRenderTarget() === null ? r.outputColorSpace : je.workingColorSpace } const Vo = { clone: Jn, merge: yt }; var Wo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Xo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class un extends Ht { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Wo, this.fragmentShader = Xo, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1, clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Jn(e.uniforms), this.uniformsGroups = ko(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { const t = super.toJSON(e); t.glslVersion = this.glslVersion, t.uniforms = {}; for (const i in this.uniforms) { const a = this.uniforms[i].value; a && a.isTexture ? t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[i] = { type: "m4", value: a.toArray() } : t.uniforms[i] = { value: a } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping; const n = {}; for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } } class Oa extends it { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Be, this.projectionMatrix = new Be, this.projectionMatrixInverse = new Be, this.coordinateSystem = 2e3 } copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super.getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } } const ln = new P, Ds = new Oe, Is = new Oe; class Et extends Oa { constructor(e = 50, t = 1, n = .1, i = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { const t = .5 * this.getFilmHeight() / e; this.fov = $n * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { const e = Math.tan(di * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return $n * 2 * Math.atan(Math.tan(di * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(e, t, n) { ln.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(ln.x, ln.y).multiplyScalar(-e / ln.z), ln.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(ln.x, ln.y).multiplyScalar(-e / ln.z) } getViewSize(e, t) { return this.getViewBounds(e, Ds, Is), t.subVectors(Is, Ds) } setViewOffset(e, t, n, i, s, a) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(di * .5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -.5 * i; const a = this.view; if (this.view !== null && this.view.enabled) { const l = a.fullWidth, c = a.fullHeight; s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c } const o = this.filmOffset; o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } } const Vn = -90, Wn = 1; class qo extends it { constructor(e, t, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const i = new Et(Vn, Wn, e, t); i.layers = this.layers, this.add(i); const s = new Et(Vn, Wn, e, t); s.layers = this.layers, this.add(s); const a = new Et(Vn, Wn, e, t); a.layers = this.layers, this.add(a); const o = new Et(Vn, Wn, e, t); o.layers = this.layers, this.add(o); const l = new Et(Vn, Wn, e, t); l.layers = this.layers, this.add(l); const c = new Et(Vn, Wn, e, t); c.layers = this.layers, this.add(c) } updateCoordinateSystem() { const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, l] = t; for (const c of t) this.remove(c); if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1); else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (const c of t) this.add(c), c.updateMatrixWorld() } update(e, t) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: i } = this; this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem()); const [s, a, o, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), g = e.xr.enabled; e.xr.enabled = !1; const v = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = v, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, m), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0 } } class Zr extends dt { constructor(e, t, n, i, s, a, o, l, c, h) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, a, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } } class Yo extends Cn {
	constructor(e = 1, t = {}) { super(e, e, t), this.isWebGLCubeRenderTarget = !0; const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n]; t.encoding !== void 0 && (Rn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === 3001 ? ut : Dt), this.texture = new Zr(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006 } fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, i = new _i(5, 5, 5), s = new un({ name: "CubemapFromEquirect", uniforms: Jn(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: 1, blending: 0 }); s.uniforms.tEquirect.value = t; const a = new Rt(i, s), o = t.minFilter; return t.minFilter === 1008 && (t.minFilter = 1006), new qo(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this
	} clear(e, t, n, i) { const s = e.getRenderTarget(); for (let a = 0; a < 6; a++)e.setRenderTarget(this, a), e.clear(t, n, i); e.setRenderTarget(s) }
} const Rr = new P, jo = new P, Ko = new Fe; class yn { constructor(e = new P(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this.constant = t } set(e, t) { return this.normal.copy(e), this.constant = t, this } setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this } setFromCoplanarPoints(e, t, n) { const i = Rr.subVectors(n, t).cross(jo.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, t) { const n = e.delta(Rr), i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const s = -(e.start.dot(this.normal) + this.constant) / i; return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s) } intersectsLine(e) { const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, t) { const n = t || Ko.getNormalMatrix(e), i = this.coplanarPoint(Rr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(s), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } } const Mn = new Wt, Gi = new P; class $r { constructor(e = new yn, t = new yn, n = new yn, i = new yn, s = new yn, a = new yn) { this.planes = [e, t, n, i, s, a] } set(e, t, n, i, s, a) { const o = this.planes; return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this } copy(e) { const t = this.planes; for (let n = 0; n < 6; n++)t[n].copy(e.planes[n]); return this } setFromProjectionMatrix(e, t = 2e3) { const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], m = i[8], g = i[9], v = i[10], p = i[11], f = i[12], E = i[13], _ = i[14], b = i[15]; if (n[0].setComponents(l - s, d - c, p - m, b - f).normalize(), n[1].setComponents(l + s, d + c, p + m, b + f).normalize(), n[2].setComponents(l + a, d + h, p + g, b + E).normalize(), n[3].setComponents(l - a, d - h, p - g, b - E).normalize(), n[4].setComponents(l - o, d - u, p - v, b - _).normalize(), t === 2e3) n[5].setComponents(l + o, d + u, p + v, b + _).normalize(); else if (t === 2001) n[5].setComponents(o, u, v, _).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld); else { const t = e.geometry; t.boundingSphere === null && t.computeBoundingSphere(), Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld) } return this.intersectsSphere(Mn) } intersectsSprite(e) { return Mn.center.set(0, 0, 0), Mn.radius = .7071067811865476, Mn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Mn) } intersectsSphere(e) { const t = this.planes, n = e.center, i = -e.radius; for (let s = 0; s < 6; s++)if (t[s].distanceToPoint(n) < i) return !1; return !0 } intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (Gi.x = i.normal.x > 0 ? e.max.x : e.min.x, Gi.y = i.normal.y > 0 ? e.max.y : e.min.y, Gi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Gi) < 0) return !1 } return !0 } containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } function Ba() { let r = null, e = !1, t = null, n = null; function i(s, a) { t(s, a), n = r.requestAnimationFrame(i) } return { start: function () { e !== !0 && t !== null && (n = r.requestAnimationFrame(i), e = !0) }, stop: function () { r.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (s) { t = s }, setContext: function (s) { r = s } } } function Zo(r, e) { const t = e.isWebGL2, n = new WeakMap; function i(c, h) { const u = c.array, d = c.usage, m = u.byteLength, g = r.createBuffer(); r.bindBuffer(h, g), r.bufferData(h, u, d), c.onUploadCallback(); let v; if (u instanceof Float32Array) v = r.FLOAT; else if (u instanceof Uint16Array) if (c.isFloat16BufferAttribute) if (t) v = r.HALF_FLOAT; else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."); else v = r.UNSIGNED_SHORT; else if (u instanceof Int16Array) v = r.SHORT; else if (u instanceof Uint32Array) v = r.UNSIGNED_INT; else if (u instanceof Int32Array) v = r.INT; else if (u instanceof Int8Array) v = r.BYTE; else if (u instanceof Uint8Array) v = r.UNSIGNED_BYTE; else if (u instanceof Uint8ClampedArray) v = r.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u); return { buffer: g, type: v, bytesPerElement: u.BYTES_PER_ELEMENT, version: c.version, size: m } } function s(c, h, u) { const d = h.array, m = h._updateRange, g = h.updateRanges; if (r.bindBuffer(u, c), m.count === -1 && g.length === 0 && r.bufferSubData(u, 0, d), g.length !== 0) { for (let v = 0, p = g.length; v < p; v++) { const f = g[v]; t ? r.bufferSubData(u, f.start * d.BYTES_PER_ELEMENT, d, f.start, f.count) : r.bufferSubData(u, f.start * d.BYTES_PER_ELEMENT, d.subarray(f.start, f.start + f.count)) } h.clearUpdateRanges() } m.count !== -1 && (t ? r.bufferSubData(u, m.offset * d.BYTES_PER_ELEMENT, d, m.offset, m.count) : r.bufferSubData(u, m.offset * d.BYTES_PER_ELEMENT, d.subarray(m.offset, m.offset + m.count)), m.count = -1), h.onUploadCallback() } function a(c) { return c.isInterleavedBufferAttribute && (c = c.data), n.get(c) } function o(c) { c.isInterleavedBufferAttribute && (c = c.data); const h = n.get(c); h && (r.deleteBuffer(h.buffer), n.delete(c)) } function l(c, h) { if (c.isGLBufferAttribute) { const d = n.get(c); (!d || d.version < c.version) && n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c.elementSize, version: c.version }); return } c.isInterleavedBufferAttribute && (c = c.data); const u = n.get(c); if (u === void 0) n.set(c, i(c, h)); else if (u.version < c.version) { if (u.size !== c.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); s(u.buffer, c, h), u.version = c.version } } return { get: a, remove: o, update: l } } class rr extends Nt { constructor(e = 1, t = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, m = [], g = [], v = [], p = []; for (let f = 0; f < h; f++) { const E = f * d - a; for (let _ = 0; _ < c; _++) { const b = _ * u - s; g.push(b, -E, 0), v.push(0, 0, 1), p.push(_ / o), p.push(1 - f / l) } } for (let f = 0; f < l; f++)for (let E = 0; E < o; E++) { const _ = E + c * f, b = E + c * (f + 1), L = E + 1 + c * (f + 1), w = E + 1 + c * f; m.push(_, b, w), m.push(b, L, w) } this.setIndex(m), this.setAttribute("position", new It(g, 3)), this.setAttribute("normal", new It(v, 3)), this.setAttribute("uv", new It(p, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new rr(e.width, e.height, e.widthSegments, e.heightSegments) } } var $o = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Jo = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Qo = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, el = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, tl = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, nl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, il = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, rl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, sl = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, al = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, ol = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, ll = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, cl = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, hl = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, ul = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, dl = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, fl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, pl = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, ml = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, gl = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, _l = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, vl = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, xl = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Ml = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Sl = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, yl = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, El = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Tl = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Al = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, bl = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Rl = "gl_FragColor = linearToOutputTexel( gl_FragColor );", wl = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Cl = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Ll = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Pl = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Dl = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Il = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Nl = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ul = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Fl = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ol = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Bl = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Gl = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Hl = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, zl = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, kl = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Vl = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Wl = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Xl = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, ql = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Yl = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, jl = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Kl = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Zl = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, $l = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Jl = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Ql = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, ec = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, tc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, nc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, ic = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, rc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, sc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, ac = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, oc = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, lc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, cc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, hc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, uc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, dc = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, fc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, pc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, mc = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, gc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, _c = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, vc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, xc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Mc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Sc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, yc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Ec = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Tc = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Ac = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, bc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Rc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, wc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Cc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Lc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Pc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Dc = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, Ic = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Nc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Uc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Fc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Oc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Bc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Gc = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Hc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, zc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, kc = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Vc = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Wc = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Xc = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, qc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Yc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, jc = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Kc = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const Zc = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, $c = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Jc = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Qc = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, eh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, th = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, nh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, ih = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, rh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, sh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, ah = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, oh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, lh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ch = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, hh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, uh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, fh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, ph = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, mh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, _h = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, vh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, xh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Mh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Sh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, yh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Eh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Th = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Ah = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, bh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Rh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, wh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Ch = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, De = { alphahash_fragment: $o, alphahash_pars_fragment: Jo, alphamap_fragment: Qo, alphamap_pars_fragment: el, alphatest_fragment: tl, alphatest_pars_fragment: nl, aomap_fragment: il, aomap_pars_fragment: rl, batching_pars_vertex: sl, batching_vertex: al, begin_vertex: ol, beginnormal_vertex: ll, bsdfs: cl, iridescence_fragment: hl, bumpmap_pars_fragment: ul, clipping_planes_fragment: dl, clipping_planes_pars_fragment: fl, clipping_planes_pars_vertex: pl, clipping_planes_vertex: ml, color_fragment: gl, color_pars_fragment: _l, color_pars_vertex: vl, color_vertex: xl, common: Ml, cube_uv_reflection_fragment: Sl, defaultnormal_vertex: yl, displacementmap_pars_vertex: El, displacementmap_vertex: Tl, emissivemap_fragment: Al, emissivemap_pars_fragment: bl, colorspace_fragment: Rl, colorspace_pars_fragment: wl, envmap_fragment: Cl, envmap_common_pars_fragment: Ll, envmap_pars_fragment: Pl, envmap_pars_vertex: Dl, envmap_physical_pars_fragment: Wl, envmap_vertex: Il, fog_vertex: Nl, fog_pars_vertex: Ul, fog_fragment: Fl, fog_pars_fragment: Ol, gradientmap_pars_fragment: Bl, lightmap_fragment: Gl, lightmap_pars_fragment: Hl, lights_lambert_fragment: zl, lights_lambert_pars_fragment: kl, lights_pars_begin: Vl, lights_toon_fragment: Xl, lights_toon_pars_fragment: ql, lights_phong_fragment: Yl, lights_phong_pars_fragment: jl, lights_physical_fragment: Kl, lights_physical_pars_fragment: Zl, lights_fragment_begin: $l, lights_fragment_maps: Jl, lights_fragment_end: Ql, logdepthbuf_fragment: ec, logdepthbuf_pars_fragment: tc, logdepthbuf_pars_vertex: nc, logdepthbuf_vertex: ic, map_fragment: rc, map_pars_fragment: sc, map_particle_fragment: ac, map_particle_pars_fragment: oc, metalnessmap_fragment: lc, metalnessmap_pars_fragment: cc, morphcolor_vertex: hc, morphnormal_vertex: uc, morphtarget_pars_vertex: dc, morphtarget_vertex: fc, normal_fragment_begin: pc, normal_fragment_maps: mc, normal_pars_fragment: gc, normal_pars_vertex: _c, normal_vertex: vc, normalmap_pars_fragment: xc, clearcoat_normal_fragment_begin: Mc, clearcoat_normal_fragment_maps: Sc, clearcoat_pars_fragment: yc, iridescence_pars_fragment: Ec, opaque_fragment: Tc, packing: Ac, premultiplied_alpha_fragment: bc, project_vertex: Rc, dithering_fragment: wc, dithering_pars_fragment: Cc, roughnessmap_fragment: Lc, roughnessmap_pars_fragment: Pc, shadowmap_pars_fragment: Dc, shadowmap_pars_vertex: Ic, shadowmap_vertex: Nc, shadowmask_pars_fragment: Uc, skinbase_vertex: Fc, skinning_pars_vertex: Oc, skinning_vertex: Bc, skinnormal_vertex: Gc, specularmap_fragment: Hc, specularmap_pars_fragment: zc, tonemapping_fragment: kc, tonemapping_pars_fragment: Vc, transmission_fragment: Wc, transmission_pars_fragment: Xc, uv_pars_fragment: qc, uv_pars_vertex: Yc, uv_vertex: jc, worldpos_vertex: Kc, background_vert: Zc, background_frag: $c, backgroundCube_vert: Jc, backgroundCube_frag: Qc, cube_vert: eh, cube_frag: th, depth_vert: nh, depth_frag: ih, distanceRGBA_vert: rh, distanceRGBA_frag: sh, equirect_vert: ah, equirect_frag: oh, linedashed_vert: lh, linedashed_frag: ch, meshbasic_vert: hh, meshbasic_frag: uh, meshlambert_vert: dh, meshlambert_frag: fh, meshmatcap_vert: ph, meshmatcap_frag: mh, meshnormal_vert: gh, meshnormal_frag: _h, meshphong_vert: vh, meshphong_frag: xh, meshphysical_vert: Mh, meshphysical_frag: Sh, meshtoon_vert: yh, meshtoon_frag: Eh, points_vert: Th, points_frag: Ah, shadow_vert: bh, shadow_frag: Rh, sprite_vert: wh, sprite_frag: Ch }, ie = { common: { diffuse: { value: new ye(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Fe }, alphaMap: { value: null }, alphaMapTransform: { value: new Fe }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Fe } }, envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Fe } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Fe } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Fe }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Fe }, normalScale: { value: new Oe(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Fe }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Fe } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Fe } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Fe } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ye(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ye(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Fe }, alphaTest: { value: 0 }, uvTransform: { value: new Fe } }, sprite: { diffuse: { value: new ye(16777215) }, opacity: { value: 1 }, center: { value: new Oe(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Fe }, alphaMap: { value: null }, alphaMapTransform: { value: new Fe }, alphaTest: { value: 0 } } }, kt = { basic: { uniforms: yt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]), vertexShader: De.meshbasic_vert, fragmentShader: De.meshbasic_frag }, lambert: { uniforms: yt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new ye(0) } }]), vertexShader: De.meshlambert_vert, fragmentShader: De.meshlambert_frag }, phong: { uniforms: yt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, ie.lights, { emissive: { value: new ye(0) }, specular: { value: new ye(1118481) }, shininess: { value: 30 } }]), vertexShader: De.meshphong_vert, fragmentShader: De.meshphong_frag }, standard: { uniforms: yt([ie.common, ie.envmap, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.roughnessmap, ie.metalnessmap, ie.fog, ie.lights, { emissive: { value: new ye(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: De.meshphysical_vert, fragmentShader: De.meshphysical_frag }, toon: { uniforms: yt([ie.common, ie.aomap, ie.lightmap, ie.emissivemap, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.gradientmap, ie.fog, ie.lights, { emissive: { value: new ye(0) } }]), vertexShader: De.meshtoon_vert, fragmentShader: De.meshtoon_frag }, matcap: { uniforms: yt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, { matcap: { value: null } }]), vertexShader: De.meshmatcap_vert, fragmentShader: De.meshmatcap_frag }, points: { uniforms: yt([ie.points, ie.fog]), vertexShader: De.points_vert, fragmentShader: De.points_frag }, dashed: { uniforms: yt([ie.common, ie.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: De.linedashed_vert, fragmentShader: De.linedashed_frag }, depth: { uniforms: yt([ie.common, ie.displacementmap]), vertexShader: De.depth_vert, fragmentShader: De.depth_frag }, normal: { uniforms: yt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, { opacity: { value: 1 } }]), vertexShader: De.meshnormal_vert, fragmentShader: De.meshnormal_frag }, sprite: { uniforms: yt([ie.sprite, ie.fog]), vertexShader: De.sprite_vert, fragmentShader: De.sprite_frag }, background: { uniforms: { uvTransform: { value: new Fe }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: De.background_vert, fragmentShader: De.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 } }, vertexShader: De.backgroundCube_vert, fragmentShader: De.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: De.cube_vert, fragmentShader: De.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: De.equirect_vert, fragmentShader: De.equirect_frag }, distanceRGBA: { uniforms: yt([ie.common, ie.displacementmap, { referencePosition: { value: new P }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: De.distanceRGBA_vert, fragmentShader: De.distanceRGBA_frag }, shadow: { uniforms: yt([ie.lights, ie.fog, { color: { value: new ye(0) }, opacity: { value: 1 } }]), vertexShader: De.shadow_vert, fragmentShader: De.shadow_frag } }; kt.physical = { uniforms: yt([kt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Fe }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Fe }, clearcoatNormalScale: { value: new Oe(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Fe }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Fe }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Fe }, sheen: { value: 0 }, sheenColor: { value: new ye(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Fe }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Fe }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Fe }, transmissionSamplerSize: { value: new Oe }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Fe }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ye(0) }, specularColor: { value: new ye(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Fe }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Fe }, anisotropyVector: { value: new Oe }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Fe } }]), vertexShader: De.meshphysical_vert, fragmentShader: De.meshphysical_frag }; const Hi = { r: 0, b: 0, g: 0 }; function Lh(r, e, t, n, i, s, a) { const o = new ye(0); let l = s === !0 ? 0 : 1, c, h, u = null, d = 0, m = null; function g(p, f) { let E = !1, _ = f.isScene === !0 ? f.background : null; _ && _.isTexture && (_ = (f.backgroundBlurriness > 0 ? t : e).get(_)), _ === null ? v(o, l) : _ && _.isColor && (v(_, 1), E = !0); const b = r.xr.getEnvironmentBlendMode(); b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || E) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil), _ && (_.isCubeTexture || _.mapping === 306) ? (h === void 0 && (h = new Rt(new _i(1, 1, 1), new un({ name: "BackgroundCubeMaterial", uniforms: Jn(kt.backgroundCube.uniforms), vertexShader: kt.backgroundCube.vertexShader, fragmentShader: kt.backgroundCube.fragmentShader, side: 1, depthTest: !1, depthWrite: !1, fog: !1 })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (L, w, R) { this.matrixWorld.copyPosition(R.matrixWorld) }, Object.defineProperty(h.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), i.update(h)), h.material.uniforms.envMap.value = _, h.material.uniforms.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = f.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, h.material.toneMapped = je.getTransfer(_.colorSpace) !== et, (u !== _ || d !== _.version || m !== r.toneMapping) && (h.material.needsUpdate = !0, u = _, d = _.version, m = r.toneMapping), h.layers.enableAll(), p.unshift(h, h.geometry, h.material, 0, 0, null)) : _ && _.isTexture && (c === void 0 && (c = new Rt(new rr(2, 2), new un({ name: "BackgroundMaterial", uniforms: Jn(kt.background.uniforms), vertexShader: kt.background.vertexShader, fragmentShader: kt.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function () { return this.uniforms.t2D.value } }), i.update(c)), c.material.uniforms.t2D.value = _, c.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, c.material.toneMapped = je.getTransfer(_.colorSpace) !== et, _.matrixAutoUpdate === !0 && _.updateMatrix(), c.material.uniforms.uvTransform.value.copy(_.matrix), (u !== _ || d !== _.version || m !== r.toneMapping) && (c.material.needsUpdate = !0, u = _, d = _.version, m = r.toneMapping), c.layers.enableAll(), p.unshift(c, c.geometry, c.material, 0, 0, null)) } function v(p, f) { p.getRGB(Hi, Fa(r)), n.buffers.color.setClear(Hi.r, Hi.g, Hi.b, f, a) } return { getClearColor: function () { return o }, setClearColor: function (p, f = 1) { o.set(p), l = f, v(o, l) }, getClearAlpha: function () { return l }, setClearAlpha: function (p) { l = p, v(o, l) }, render: g } } function Ph(r, e, t, n) { const i = r.getParameter(r.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = n.isWebGL2 || s !== null, o = {}, l = p(null); let c = l, h = !1; function u(C, O, G, X, k) { let V = !1; if (a) { const Z = v(X, G, O); c !== Z && (c = Z, m(c.object)), V = f(C, X, G, k), V && E(C, X, G, k) } else { const Z = O.wireframe === !0; (c.geometry !== X.id || c.program !== G.id || c.wireframe !== Z) && (c.geometry = X.id, c.program = G.id, c.wireframe = Z, V = !0) } k !== null && t.update(k, r.ELEMENT_ARRAY_BUFFER), (V || h) && (h = !1, z(C, O, G, X), k !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(k).buffer)) } function d() { return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES() } function m(C) { return n.isWebGL2 ? r.bindVertexArray(C) : s.bindVertexArrayOES(C) } function g(C) { return n.isWebGL2 ? r.deleteVertexArray(C) : s.deleteVertexArrayOES(C) } function v(C, O, G) { const X = G.wireframe === !0; let k = o[C.id]; k === void 0 && (k = {}, o[C.id] = k); let V = k[O.id]; V === void 0 && (V = {}, k[O.id] = V); let Z = V[X]; return Z === void 0 && (Z = p(d()), V[X] = Z), Z } function p(C) { const O = [], G = [], X = []; for (let k = 0; k < i; k++)O[k] = 0, G[k] = 0, X[k] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: O, enabledAttributes: G, attributeDivisors: X, object: C, attributes: {}, index: null } } function f(C, O, G, X) { const k = c.attributes, V = O.attributes; let Z = 0; const $ = G.getAttributes(); for (const ce in $) if ($[ce].location >= 0) { const H = k[ce]; let K = V[ce]; if (K === void 0 && (ce === "instanceMatrix" && C.instanceMatrix && (K = C.instanceMatrix), ce === "instanceColor" && C.instanceColor && (K = C.instanceColor)), H === void 0 || H.attribute !== K || K && H.data !== K.data) return !0; Z++ } return c.attributesNum !== Z || c.index !== X } function E(C, O, G, X) { const k = {}, V = O.attributes; let Z = 0; const $ = G.getAttributes(); for (const ce in $) if ($[ce].location >= 0) { let H = V[ce]; H === void 0 && (ce === "instanceMatrix" && C.instanceMatrix && (H = C.instanceMatrix), ce === "instanceColor" && C.instanceColor && (H = C.instanceColor)); const K = {}; K.attribute = H, H && H.data && (K.data = H.data), k[ce] = K, Z++ } c.attributes = k, c.attributesNum = Z, c.index = X } function _() { const C = c.newAttributes; for (let O = 0, G = C.length; O < G; O++)C[O] = 0 } function b(C) { L(C, 0) } function L(C, O) { const G = c.newAttributes, X = c.enabledAttributes, k = c.attributeDivisors; G[C] = 1, X[C] === 0 && (r.enableVertexAttribArray(C), X[C] = 1), k[C] !== O && ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](C, O), k[C] = O) } function w() { const C = c.newAttributes, O = c.enabledAttributes; for (let G = 0, X = O.length; G < X; G++)O[G] !== C[G] && (r.disableVertexAttribArray(G), O[G] = 0) } function R(C, O, G, X, k, V, Z) { Z === !0 ? r.vertexAttribIPointer(C, O, G, k, V) : r.vertexAttribPointer(C, O, G, X, k, V) } function z(C, O, G, X) { if (n.isWebGL2 === !1 && (C.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return; _(); const k = X.attributes, V = G.getAttributes(), Z = O.defaultAttributeValues; for (const $ in V) { const ce = V[$]; if (ce.location >= 0) { let Te = k[$]; if (Te === void 0 && ($ === "instanceMatrix" && C.instanceMatrix && (Te = C.instanceMatrix), $ === "instanceColor" && C.instanceColor && (Te = C.instanceColor)), Te !== void 0) { const H = Te.normalized, K = Te.itemSize, ae = t.get(Te); if (ae === void 0) continue; const ve = ae.buffer, xe = ae.type, ue = ae.bytesPerElement, ke = n.isWebGL2 === !0 && (xe === r.INT || xe === r.UNSIGNED_INT || Te.gpuType === 1013); if (Te.isInterleavedBufferAttribute) { const we = Te.data, I = we.stride, ft = Te.offset; if (we.isInstancedInterleavedBuffer) { for (let ge = 0; ge < ce.locationSize; ge++)L(ce.location + ge, we.meshPerAttribute); C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = we.meshPerAttribute * we.count) } else for (let ge = 0; ge < ce.locationSize; ge++)b(ce.location + ge); r.bindBuffer(r.ARRAY_BUFFER, ve); for (let ge = 0; ge < ce.locationSize; ge++)R(ce.location + ge, K / ce.locationSize, xe, H, I * ue, (ft + K / ce.locationSize * ge) * ue, ke) } else { if (Te.isInstancedBufferAttribute) { for (let we = 0; we < ce.locationSize; we++)L(ce.location + we, Te.meshPerAttribute); C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = Te.meshPerAttribute * Te.count) } else for (let we = 0; we < ce.locationSize; we++)b(ce.location + we); r.bindBuffer(r.ARRAY_BUFFER, ve); for (let we = 0; we < ce.locationSize; we++)R(ce.location + we, K / ce.locationSize, xe, H, K * ue, K / ce.locationSize * we * ue, ke) } } else if (Z !== void 0) { const H = Z[$]; if (H !== void 0) switch (H.length) { case 2: r.vertexAttrib2fv(ce.location, H); break; case 3: r.vertexAttrib3fv(ce.location, H); break; case 4: r.vertexAttrib4fv(ce.location, H); break; default: r.vertexAttrib1fv(ce.location, H) } } } } w() } function ne() { W(); for (const C in o) { const O = o[C]; for (const G in O) { const X = O[G]; for (const k in X) g(X[k].object), delete X[k]; delete O[G] } delete o[C] } } function M(C) { if (o[C.id] === void 0) return; const O = o[C.id]; for (const G in O) { const X = O[G]; for (const k in X) g(X[k].object), delete X[k]; delete O[G] } delete o[C.id] } function A(C) { for (const O in o) { const G = o[O]; if (G[C.id] === void 0) continue; const X = G[C.id]; for (const k in X) g(X[k].object), delete X[k]; delete G[C.id] } } function W() { q(), h = !0, c !== l && (c = l, m(c.object)) } function q() { l.geometry = null, l.program = null, l.wireframe = !1 } return { setup: u, reset: W, resetDefaultState: q, dispose: ne, releaseStatesOfGeometry: M, releaseStatesOfProgram: A, initAttributes: _, enableAttribute: b, disableUnusedAttributes: w } } function Dh(r, e, t, n) { const i = n.isWebGL2; let s; function a(h) { s = h } function o(h, u) { r.drawArrays(s, h, u), t.update(u, s, 1) } function l(h, u, d) { if (d === 0) return; let m, g; if (i) m = r, g = "drawArraysInstanced"; else if (m = e.get("ANGLE_instanced_arrays"), g = "drawArraysInstancedANGLE", m === null) { console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } m[g](s, h, u, d), t.update(u, s, d) } function c(h, u, d) { if (d === 0) return; const m = e.get("WEBGL_multi_draw"); if (m === null) for (let g = 0; g < d; g++)this.render(h[g], u[g]); else { m.multiDrawArraysWEBGL(s, h, 0, u, 0, d); let g = 0; for (let v = 0; v < d; v++)g += u[v]; t.update(g, s, 1) } } this.setMode = a, this.render = o, this.renderInstances = l, this.renderMultiDraw = c } function Ih(r, e, t) { let n; function i() { if (n !== void 0) return n; if (e.has("EXT_texture_filter_anisotropic") === !0) { const R = e.get("EXT_texture_filter_anisotropic"); n = r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else n = 0; return n } function s(R) { if (R === "highp") { if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0) return "highp"; R = "mediump" } return R === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } const a = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext"; let o = t.precision !== void 0 ? t.precision : "highp"; const l = s(o); l !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", l, "instead."), o = l); const c = a || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), d = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = r.getParameter(r.MAX_TEXTURE_SIZE), g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), v = r.getParameter(r.MAX_VERTEX_ATTRIBS), p = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), f = r.getParameter(r.MAX_VARYING_VECTORS), E = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), _ = d > 0, b = a || e.has("OES_texture_float"), L = _ && b, w = a ? r.getParameter(r.MAX_SAMPLES) : 0; return { isWebGL2: a, drawBuffers: c, getMaxAnisotropy: i, getMaxPrecision: s, precision: o, logarithmicDepthBuffer: h, maxTextures: u, maxVertexTextures: d, maxTextureSize: m, maxCubemapSize: g, maxAttributes: v, maxVertexUniforms: p, maxVaryings: f, maxFragmentUniforms: E, vertexTextures: _, floatFragmentTextures: b, floatVertexTextures: L, maxSamples: w } } function Nh(r) { const e = this; let t = null, n = 0, i = !1, s = !1; const a = new yn, o = new Fe, l = { value: null, needsUpdate: !1 }; this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, d) { const m = u.length !== 0 || d || n !== 0 || i; return i = d, n = u.length, m }, this.beginShadows = function () { s = !0, h(null) }, this.endShadows = function () { s = !1 }, this.setGlobalState = function (u, d) { t = h(u, d, 0) }, this.setState = function (u, d, m) { const g = u.clippingPlanes, v = u.clipIntersection, p = u.clipShadows, f = r.get(u); if (!i || g === null || g.length === 0 || s && !p) s ? h(null) : c(); else { const E = s ? 0 : n, _ = E * 4; let b = f.clippingState || null; l.value = b, b = h(g, d, _, m); for (let L = 0; L !== _; ++L)b[L] = t[L]; f.clippingState = b, this.numIntersection = v ? this.numPlanes : 0, this.numPlanes += E } }; function c() { l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 } function h(u, d, m, g) { const v = u !== null ? u.length : 0; let p = null; if (v !== 0) { if (p = l.value, g !== !0 || p === null) { const f = m + v * 4, E = d.matrixWorldInverse; o.getNormalMatrix(E), (p === null || p.length < f) && (p = new Float32Array(f)); for (let _ = 0, b = m; _ !== v; ++_, b += 4)a.copy(u[_]).applyMatrix4(E, o), a.normal.toArray(p, b), p[b + 3] = a.constant } l.value = p, l.needsUpdate = !0 } return e.numPlanes = v, e.numIntersection = 0, p } } function Uh(r) { let e = new WeakMap; function t(a, o) { return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a } function n(a) { if (a && a.isTexture) { const o = a.mapping; if (o === 303 || o === 304) if (e.has(a)) { const l = e.get(a).texture; return t(l, a.mapping) } else { const l = a.image; if (l && l.height > 0) { const c = new Yo(l.height); return c.fromEquirectangularTexture(r, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping) } else return null } } return a } function i(a) { const o = a.target; o.removeEventListener("dispose", i); const l = e.get(o); l !== void 0 && (e.delete(o), l.dispose()) } function s() { e = new WeakMap } return { get: n, dispose: s } } class Jr extends Oa { constructor(e = -1, t = 1, n = 1, i = -1, s = .1, a = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, t, n, i, s, a) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2; let s = n - e, a = n + e, o = i + t, l = i - t; if (this.view !== null && this.view.enabled) { const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom; s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height } this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } } const Yn = 4, Ns = [.125, .215, .35, .446, .526, .582], Tn = 20, wr = new Jr, Us = new ye; let Cr = null, Lr = 0, Pr = 0; const En = (1 + Math.sqrt(5)) / 2, Xn = 1 / En, Fs = [new P(1, 1, 1), new P(-1, 1, 1), new P(1, 1, -1), new P(-1, 1, -1), new P(0, En, Xn), new P(0, En, -Xn), new P(Xn, 0, En), new P(-Xn, 0, En), new P(En, Xn, 0), new P(-En, Xn, 0)]; class Os { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, i = 100) { Cr = this._renderer.getRenderTarget(), Lr = this._renderer.getActiveCubeFace(), Pr = this._renderer.getActiveMipmapLevel(), this._setSize(256); const s = this._allocateTargets(); return s.depthBuffer = !0, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s } fromEquirectangular(e, t = null) { return this._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e, t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = Hs(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = Gs(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(Cr, Lr, Pr), e.scissorTest = !1, zi(e, 0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Cr = this._renderer.getRenderTarget(), Lr = this._renderer.getActiveCubeFace(), Pr = this._renderer.getActiveMipmapLevel(); const n = t || this._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: 1006, minFilter: 1006, generateMipmaps: !1, type: 1016, format: 1023, colorSpace: en, depthBuffer: !1 }, i = Bs(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Bs(e, t, n); const { _lodMax: s } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Fh(s)), this._blurMaterial = Oh(s, e, t) } return i } _compileMaterial(e) { const t = new Rt(this._lodPlanes[0], e); this._renderer.compile(t, wr) } _sceneToCubeUV(e, t, n, i) { const o = new Et(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping; h.getClearColor(Us), h.toneMapping = 0, h.autoClear = !1; const m = new An({ name: "PMREM.Background", side: 1, depthWrite: !1, depthTest: !1 }), g = new Rt(new _i, m); let v = !1; const p = e.background; p ? p.isColor && (m.color.copy(p), e.background = null, v = !0) : (m.color.copy(Us), v = !0); for (let f = 0; f < 6; f++) { const E = f % 3; E === 0 ? (o.up.set(0, l[f], 0), o.lookAt(c[f], 0, 0)) : E === 1 ? (o.up.set(0, 0, l[f]), o.lookAt(0, c[f], 0)) : (o.up.set(0, l[f], 0), o.lookAt(0, 0, c[f])); const _ = this._cubeSize; zi(i, E * _, f > 2 ? _ : 0, _, _), h.setRenderTarget(i), v && h.render(g, o), h.render(e, o) } g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = p } _textureToCubeUV(e, t) { const n = this._renderer, i = e.mapping === 301 || e.mapping === 302; i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Hs()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Gs()); const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Rt(this._lodPlanes[0], s), o = s.uniforms; o.envMap.value = e; const l = this._cubeSize; zi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, wr) } _applyPMREM(e) { const t = this._renderer, n = t.autoClear; t.autoClear = !1; for (let i = 1; i < this._lodPlanes.length; i++) { const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]), a = Fs[(i - 1) % Fs.length]; this._blur(e, i - 1, i, s, a) } t.autoClear = n } _blur(e, t, n, i, s) { const a = this._pingPongRenderTarget; this._halfBlur(e, a, t, n, i, "latitudinal", s), this._halfBlur(a, e, n, n, i, "longitudinal", s) } _halfBlur(e, t, n, i, s, a, o) { const l = this._renderer, c = this._blurMaterial; a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const h = 3, u = new Rt(this._lodPlanes[i], c), d = c.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Tn - 1), v = s / g, p = isFinite(s) ? 1 + Math.floor(h * v) : Tn; p > Tn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tn}`); const f = []; let E = 0; for (let R = 0; R < Tn; ++R) { const z = R / v, ne = Math.exp(-z * z / 2); f.push(ne), R === 0 ? E += ne : R < p && (E += 2 * ne) } for (let R = 0; R < f.length; R++)f[R] = f[R] / E; d.envMap.value = e.texture, d.samples.value = p, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o); const { _lodMax: _ } = this; d.dTheta.value = g, d.mipInt.value = _ - n; const b = this._sizeLods[i], L = 3 * b * (i > _ - Yn ? i - _ + Yn : 0), w = 4 * (this._cubeSize - b); zi(t, L, w, 3 * b, 2 * b), l.setRenderTarget(t), l.render(u, wr) } } function Fh(r) { const e = [], t = [], n = []; let i = r; const s = r - Yn + 1 + Ns.length; for (let a = 0; a < s; a++) { const o = Math.pow(2, i); t.push(o); let l = 1 / o; a > r - Yn ? l = Ns[a - r + Yn - 1] : a === 0 && (l = 0), n.push(l); const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, v = 3, p = 2, f = 1, E = new Float32Array(v * g * m), _ = new Float32Array(p * g * m), b = new Float32Array(f * g * m); for (let w = 0; w < m; w++) { const R = w % 3 * 2 / 3 - 1, z = w > 2 ? 0 : -1, ne = [R, z, 0, R + 2 / 3, z, 0, R + 2 / 3, z + 1, 0, R, z, 0, R + 2 / 3, z + 1, 0, R, z + 1, 0]; E.set(ne, v * g * w), _.set(d, p * g * w); const M = [w, w, w, w, w, w]; b.set(M, f * g * w) } const L = new Nt; L.setAttribute("position", new mt(E, v)), L.setAttribute("uv", new mt(_, p)), L.setAttribute("faceIndex", new mt(b, f)), e.push(L), i > Yn && i-- } return { lodPlanes: e, sizeLods: t, sigmas: n } } function Bs(r, e, t) { const n = new Cn(r, e, t); return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function zi(r, e, t, n, i) { r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i) } function Oh(r, e, t) {
	const n = new Float32Array(Tn), i = new P(0, 1, 0); return new un({
		name: "SphericalGaussianBlur", defines: { n: Tn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Qr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: 0, depthTest: !1, depthWrite: !1
	})
} function Gs() {
	return new un({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Qr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1
	})
} function Hs() {
	return new un({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Qr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: 0, depthTest: !1, depthWrite: !1
	})
} function Qr() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function Bh(r) { let e = new WeakMap, t = null; function n(o) { if (o && o.isTexture) { const l = o.mapping, c = l === 303 || l === 304, h = l === 301 || l === 302; if (c || h) if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) { o.needsPMREMUpdate = !1; let u = e.get(o); return t === null && (t = new Os(r)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), e.set(o, u), u.texture } else { if (e.has(o)) return e.get(o).texture; { const u = o.image; if (c && u && u.height > 0 || h && u && i(u)) { t === null && (t = new Os(r)); const d = c ? t.fromEquirectangular(o) : t.fromCubemap(o); return e.set(o, d), o.addEventListener("dispose", s), d.texture } else return null } } } return o } function i(o) { let l = 0; const c = 6; for (let h = 0; h < c; h++)o[h] !== void 0 && l++; return l === c } function s(o) { const l = o.target; l.removeEventListener("dispose", s); const c = e.get(l); c !== void 0 && (e.delete(l), c.dispose()) } function a() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: a } } function Gh(r) { const e = {}; function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) { case "WEBGL_depth_texture": i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: i = r.getExtension(n) }return e[n] = i, i } return { has: function (n) { return t(n) !== null }, init: function (n) { n.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture") }, get: function (n) { const i = t(n); return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i } } } function Hh(r, e, t, n) { const i = {}, s = new WeakMap; function a(u) { const d = u.target; d.index !== null && e.remove(d.index); for (const g in d.attributes) e.remove(d.attributes[g]); for (const g in d.morphAttributes) { const v = d.morphAttributes[g]; for (let p = 0, f = v.length; p < f; p++)e.remove(v[p]) } d.removeEventListener("dispose", a), delete i[d.id]; const m = s.get(d); m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- } function o(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, t.memory.geometries++), d } function l(u) { const d = u.attributes; for (const g in d) e.update(d[g], r.ARRAY_BUFFER); const m = u.morphAttributes; for (const g in m) { const v = m[g]; for (let p = 0, f = v.length; p < f; p++)e.update(v[p], r.ARRAY_BUFFER) } } function c(u) { const d = [], m = u.index, g = u.attributes.position; let v = 0; if (m !== null) { const E = m.array; v = m.version; for (let _ = 0, b = E.length; _ < b; _ += 3) { const L = E[_ + 0], w = E[_ + 1], R = E[_ + 2]; d.push(L, w, w, R, R, L) } } else if (g !== void 0) { const E = g.array; v = g.version; for (let _ = 0, b = E.length / 3 - 1; _ < b; _ += 3) { const L = _ + 0, w = _ + 1, R = _ + 2; d.push(L, w, w, R, R, L) } } else return; const p = new (wa(d) ? Ua : Na)(d, 1); p.version = v; const f = s.get(u); f && e.remove(f), s.set(u, p) } function h(u) { const d = s.get(u); if (d) { const m = u.index; m !== null && d.version < m.version && c(u) } else c(u); return s.get(u) } return { get: o, update: l, getWireframeAttribute: h } } function zh(r, e, t, n) { const i = n.isWebGL2; let s; function a(m) { s = m } let o, l; function c(m) { o = m.type, l = m.bytesPerElement } function h(m, g) { r.drawElements(s, g, o, m * l), t.update(g, s, 1) } function u(m, g, v) { if (v === 0) return; let p, f; if (i) p = r, f = "drawElementsInstanced"; else if (p = e.get("ANGLE_instanced_arrays"), f = "drawElementsInstancedANGLE", p === null) { console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."); return } p[f](s, g, o, m * l, v), t.update(g, s, v) } function d(m, g, v) { if (v === 0) return; const p = e.get("WEBGL_multi_draw"); if (p === null) for (let f = 0; f < v; f++)this.render(m[f] / l, g[f]); else { p.multiDrawElementsWEBGL(s, g, 0, o, m, 0, v); let f = 0; for (let E = 0; E < v; E++)f += g[E]; t.update(f, s, 1) } } this.setMode = a, this.setIndex = c, this.render = h, this.renderInstances = u, this.renderMultiDraw = d } function kh(r) { const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(s, a, o) { switch (t.calls++, a) { case r.TRIANGLES: t.triangles += o * (s / 3); break; case r.LINES: t.lines += o * (s / 2); break; case r.LINE_STRIP: t.lines += o * (s - 1); break; case r.LINE_LOOP: t.lines += o * s; break; case r.POINTS: t.points += o * s; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", a); break } } function i() { t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } } function Vh(r, e) { return r[0] - e[0] } function Wh(r, e) { return Math.abs(e[1]) - Math.abs(r[1]) } function Xh(r, e, t) { const n = {}, i = new Float32Array(8), s = new WeakMap, a = new Ze, o = []; for (let c = 0; c < 8; c++)o[c] = [c, 0]; function l(c, h, u) { const d = c.morphTargetInfluences; if (e.isWebGL2 === !0) { const m = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = m !== void 0 ? m.length : 0; let v = s.get(h); if (v === void 0 || v.count !== g) { let C = function () { W.dispose(), s.delete(h), h.removeEventListener("dispose", C) }; v !== void 0 && v.texture.dispose(); const E = h.morphAttributes.position !== void 0, _ = h.morphAttributes.normal !== void 0, b = h.morphAttributes.color !== void 0, L = h.morphAttributes.position || [], w = h.morphAttributes.normal || [], R = h.morphAttributes.color || []; let z = 0; E === !0 && (z = 1), _ === !0 && (z = 2), b === !0 && (z = 3); let ne = h.attributes.position.count * z, M = 1; ne > e.maxTextureSize && (M = Math.ceil(ne / e.maxTextureSize), ne = e.maxTextureSize); const A = new Float32Array(ne * M * 4 * g), W = new Pa(A, ne, M, g); W.type = 1015, W.needsUpdate = !0; const q = z * 4; for (let O = 0; O < g; O++) { const G = L[O], X = w[O], k = R[O], V = ne * M * 4 * O; for (let Z = 0; Z < G.count; Z++) { const $ = Z * q; E === !0 && (a.fromBufferAttribute(G, Z), A[V + $ + 0] = a.x, A[V + $ + 1] = a.y, A[V + $ + 2] = a.z, A[V + $ + 3] = 0), _ === !0 && (a.fromBufferAttribute(X, Z), A[V + $ + 4] = a.x, A[V + $ + 5] = a.y, A[V + $ + 6] = a.z, A[V + $ + 7] = 0), b === !0 && (a.fromBufferAttribute(k, Z), A[V + $ + 8] = a.x, A[V + $ + 9] = a.y, A[V + $ + 10] = a.z, A[V + $ + 11] = k.itemSize === 4 ? a.w : 1) } } v = { count: g, texture: W, size: new Oe(ne, M) }, s.set(h, v), h.addEventListener("dispose", C) } let p = 0; for (let E = 0; E < d.length; E++)p += d[E]; const f = h.morphTargetsRelative ? 1 : 1 - p; u.getUniforms().setValue(r, "morphTargetBaseInfluence", f), u.getUniforms().setValue(r, "morphTargetInfluences", d), u.getUniforms().setValue(r, "morphTargetsTexture", v.texture, t), u.getUniforms().setValue(r, "morphTargetsTextureSize", v.size) } else { const m = d === void 0 ? 0 : d.length; let g = n[h.id]; if (g === void 0 || g.length !== m) { g = []; for (let _ = 0; _ < m; _++)g[_] = [_, 0]; n[h.id] = g } for (let _ = 0; _ < m; _++) { const b = g[_]; b[0] = _, b[1] = d[_] } g.sort(Wh); for (let _ = 0; _ < 8; _++)_ < m && g[_][1] ? (o[_][0] = g[_][0], o[_][1] = g[_][1]) : (o[_][0] = Number.MAX_SAFE_INTEGER, o[_][1] = 0); o.sort(Vh); const v = h.morphAttributes.position, p = h.morphAttributes.normal; let f = 0; for (let _ = 0; _ < 8; _++) { const b = o[_], L = b[0], w = b[1]; L !== Number.MAX_SAFE_INTEGER && w ? (v && h.getAttribute("morphTarget" + _) !== v[L] && h.setAttribute("morphTarget" + _, v[L]), p && h.getAttribute("morphNormal" + _) !== p[L] && h.setAttribute("morphNormal" + _, p[L]), i[_] = w, f += w) : (v && h.hasAttribute("morphTarget" + _) === !0 && h.deleteAttribute("morphTarget" + _), p && h.hasAttribute("morphNormal" + _) === !0 && h.deleteAttribute("morphNormal" + _), i[_] = 0) } const E = h.morphTargetsRelative ? 1 : 1 - f; u.getUniforms().setValue(r, "morphTargetBaseInfluence", E), u.getUniforms().setValue(r, "morphTargetInfluences", i) } } return { update: l } } function qh(r, e, t, n) { let i = new WeakMap; function s(l) { const c = n.render.frame, h = l.geometry, u = e.get(l, h); if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) { const d = l.skeleton; i.get(d) !== c && (d.update(), i.set(d, c)) } return u } function a() { i = new WeakMap } function o(l) { const c = l.target; c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor) } return { update: s, dispose: a } } class Ga extends dt { constructor(e, t, n, i, s, a, o, l, c, h) { if (h = h !== void 0 ? h : 1026, h !== 1026 && h !== 1027) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && h === 1026 && (n = 1014), n === void 0 && h === 1027 && (n = 1020), super(null, i, s, a, o, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e), this.compareFunction = e.compareFunction, this } toJSON(e) { const t = super.toJSON(e); return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t } } const Ha = new dt, za = new Ga(1, 1); za.compareFunction = 515; const ka = new Pa, Va = new Lo, Wa = new Zr, zs = [], ks = [], Vs = new Float32Array(16), Ws = new Float32Array(9), Xs = new Float32Array(4); function ei(r, e, t) { const n = r[0]; if (n <= 0 || n > 0) return r; const i = e * t; let s = zs[i]; if (s === void 0 && (s = new Float32Array(i), zs[i] = s), e !== 0) { n.toArray(s, 0); for (let a = 1, o = 0; a !== e; ++a)o += t, r[a].toArray(s, o) } return s } function ot(r, e) { if (r.length !== e.length) return !1; for (let t = 0, n = r.length; t < n; t++)if (r[t] !== e[t]) return !1; return !0 } function lt(r, e) { for (let t = 0, n = e.length; t < n; t++)r[t] = e[t] } function sr(r, e) { let t = ks[e]; t === void 0 && (t = new Int32Array(e), ks[e] = t); for (let n = 0; n !== e; ++n)t[n] = r.allocateTextureUnit(); return t } function Yh(r, e) { const t = this.cache; t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e) } function jh(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (ot(t, e)) return; r.uniform2fv(this.addr, e), lt(t, e) } } function Kh(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b); else { if (ot(t, e)) return; r.uniform3fv(this.addr, e), lt(t, e) } } function Zh(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (ot(t, e)) return; r.uniform4fv(this.addr, e), lt(t, e) } } function $h(r, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (ot(t, e)) return; r.uniformMatrix2fv(this.addr, !1, e), lt(t, e) } else { if (ot(t, n)) return; Xs.set(n), r.uniformMatrix2fv(this.addr, !1, Xs), lt(t, n) } } function Jh(r, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (ot(t, e)) return; r.uniformMatrix3fv(this.addr, !1, e), lt(t, e) } else { if (ot(t, n)) return; Ws.set(n), r.uniformMatrix3fv(this.addr, !1, Ws), lt(t, n) } } function Qh(r, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (ot(t, e)) return; r.uniformMatrix4fv(this.addr, !1, e), lt(t, e) } else { if (ot(t, n)) return; Vs.set(n), r.uniformMatrix4fv(this.addr, !1, Vs), lt(t, n) } } function eu(r, e) { const t = this.cache; t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e) } function tu(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (ot(t, e)) return; r.uniform2iv(this.addr, e), lt(t, e) } } function nu(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (ot(t, e)) return; r.uniform3iv(this.addr, e), lt(t, e) } } function iu(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (ot(t, e)) return; r.uniform4iv(this.addr, e), lt(t, e) } } function ru(r, e) { const t = this.cache; t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e) } function su(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (ot(t, e)) return; r.uniform2uiv(this.addr, e), lt(t, e) } } function au(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (ot(t, e)) return; r.uniform3uiv(this.addr, e), lt(t, e) } } function ou(r, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (ot(t, e)) return; r.uniform4uiv(this.addr, e), lt(t, e) } } function lu(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i); const s = this.type === r.SAMPLER_2D_SHADOW ? za : Ha; t.setTexture2D(e || s, i) } function cu(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Va, i) } function hu(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Wa, i) } function uu(r, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || ka, i) } function du(r) { switch (r) { case 5126: return Yh; case 35664: return jh; case 35665: return Kh; case 35666: return Zh; case 35674: return $h; case 35675: return Jh; case 35676: return Qh; case 5124: case 35670: return eu; case 35667: case 35671: return tu; case 35668: case 35672: return nu; case 35669: case 35673: return iu; case 5125: return ru; case 36294: return su; case 36295: return au; case 36296: return ou; case 35678: case 36198: case 36298: case 36306: case 35682: return lu; case 35679: case 36299: case 36307: return cu; case 35680: case 36300: case 36308: case 36293: return hu; case 36289: case 36303: case 36311: case 36292: return uu } } function fu(r, e) { r.uniform1fv(this.addr, e) } function pu(r, e) { const t = ei(e, this.size, 2); r.uniform2fv(this.addr, t) } function mu(r, e) { const t = ei(e, this.size, 3); r.uniform3fv(this.addr, t) } function gu(r, e) { const t = ei(e, this.size, 4); r.uniform4fv(this.addr, t) } function _u(r, e) { const t = ei(e, this.size, 4); r.uniformMatrix2fv(this.addr, !1, t) } function vu(r, e) { const t = ei(e, this.size, 9); r.uniformMatrix3fv(this.addr, !1, t) } function xu(r, e) { const t = ei(e, this.size, 16); r.uniformMatrix4fv(this.addr, !1, t) } function Mu(r, e) { r.uniform1iv(this.addr, e) } function Su(r, e) { r.uniform2iv(this.addr, e) } function yu(r, e) { r.uniform3iv(this.addr, e) } function Eu(r, e) { r.uniform4iv(this.addr, e) } function Tu(r, e) { r.uniform1uiv(this.addr, e) } function Au(r, e) { r.uniform2uiv(this.addr, e) } function bu(r, e) { r.uniform3uiv(this.addr, e) } function Ru(r, e) { r.uniform4uiv(this.addr, e) } function wu(r, e, t) { const n = this.cache, i = e.length, s = sr(t, i); ot(n, s) || (r.uniform1iv(this.addr, s), lt(n, s)); for (let a = 0; a !== i; ++a)t.setTexture2D(e[a] || Ha, s[a]) } function Cu(r, e, t) { const n = this.cache, i = e.length, s = sr(t, i); ot(n, s) || (r.uniform1iv(this.addr, s), lt(n, s)); for (let a = 0; a !== i; ++a)t.setTexture3D(e[a] || Va, s[a]) } function Lu(r, e, t) { const n = this.cache, i = e.length, s = sr(t, i); ot(n, s) || (r.uniform1iv(this.addr, s), lt(n, s)); for (let a = 0; a !== i; ++a)t.setTextureCube(e[a] || Wa, s[a]) } function Pu(r, e, t) { const n = this.cache, i = e.length, s = sr(t, i); ot(n, s) || (r.uniform1iv(this.addr, s), lt(n, s)); for (let a = 0; a !== i; ++a)t.setTexture2DArray(e[a] || ka, s[a]) } function Du(r) { switch (r) { case 5126: return fu; case 35664: return pu; case 35665: return mu; case 35666: return gu; case 35674: return _u; case 35675: return vu; case 35676: return xu; case 5124: case 35670: return Mu; case 35667: case 35671: return Su; case 35668: case 35672: return yu; case 35669: case 35673: return Eu; case 5125: return Tu; case 36294: return Au; case 36295: return bu; case 36296: return Ru; case 35678: case 36198: case 36298: case 36306: case 35682: return wu; case 35679: case 36299: case 36307: return Cu; case 35680: case 36300: case 36308: case 36293: return Lu; case 36289: case 36303: case 36311: case 36292: return Pu } } class Iu { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = du(t.type) } } class Nu { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Du(t.type) } } class Uu { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, t, n) { const i = this.seq; for (let s = 0, a = i.length; s !== a; ++s) { const o = i[s]; o.setValue(e, t[o.id], n) } } } const Dr = /(\w+)(\])?(\[|\.)?/g; function qs(r, e) { r.seq.push(e), r.map[e.id] = e } function Fu(r, e, t) { const n = r.name, i = n.length; for (Dr.lastIndex = 0; ;) { const s = Dr.exec(n), a = Dr.lastIndex; let o = s[1]; const l = s[2] === "]", c = s[3]; if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) { qs(t, c === void 0 ? new Iu(o, r, e) : new Nu(o, r, e)); break } else { let u = t.map[o]; u === void 0 && (u = new Uu(o), qs(t, u)), t = u } } } class ji { constructor(e, t) { this.seq = [], this.map = {}; const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let i = 0; i < n; ++i) { const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name); Fu(s, a, this) } } setValue(e, t, n, i) { const s = this.map[t]; s !== void 0 && s.setValue(e, n, i) } setOptional(e, t, n) { const i = t[n]; i !== void 0 && this.setValue(e, n, i) } static upload(e, t, n, i) { for (let s = 0, a = t.length; s !== a; ++s) { const o = t[s], l = n[o.id]; l.needsUpdate !== !1 && o.setValue(e, l.value, i) } } static seqWithValue(e, t) { const n = []; for (let i = 0, s = e.length; i !== s; ++i) { const a = e[i]; a.id in t && n.push(a) } return n } } function Ys(r, e, t) { const n = r.createShader(e); return r.shaderSource(n, t), r.compileShader(n), n } const Ou = 37297; let Bu = 0; function Gu(r, e) {
	const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length); for (let a = i; a < s; a++) { const o = a + 1; n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`) } return n.join(`
`)
} function Hu(r) { const e = je.getPrimaries(je.workingColorSpace), t = je.getPrimaries(r); let n; switch (e === t ? n = "" : e === $i && t === Zi ? n = "LinearDisplayP3ToLinearSRGB" : e === Zi && t === $i && (n = "LinearSRGBToLinearDisplayP3"), r) { case en: case tr: return [n, "LinearTransferOETF"]; case ut: case jr: return [n, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"] } } function js(r, e, t) {
	const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim(); if (n && i === "") return ""; const s = /ERROR: 0:(\d+)/.exec(i); if (s) {
		const a = parseInt(s[1]); return t.toUpperCase() + `

`+ i + `

`+ Gu(r.getShaderSource(e), a)
	} else return i
} function zu(r, e) { const t = Hu(e); return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }` } function ku(r, e) { let t; switch (e) { case 1: t = "Linear"; break; case 2: t = "Reinhard"; break; case 3: t = "OptimizedCineon"; break; case 4: t = "ACESFilmic"; break; case 6: t = "AgX"; break; case 5: t = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" }return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }" } function Vu(r) {
	return [r.extensionDerivatives || r.envMapCubeUVHeight || r.bumpMap || r.normalMapTangentSpace || r.clearcoatNormalMap || r.flatShading || r.alphaToCoverage || r.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "", (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(jn).join(`
`)
} function Wu(r) {
	return [r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(jn).join(`
`)
} function Xu(r) {
	const e = []; for (const t in r) { const n = r[t]; n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`)
} function qu(r, e) { const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES); for (let i = 0; i < n; i++) { const s = r.getActiveAttrib(e, i), a = s.name; let o = 1; s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: r.getAttribLocation(e, a), locationSize: o } } return t } function jn(r) { return r !== "" } function Ks(r, e) { const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function Zs(r, e) { return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } const Yu = /^[ \t]*#include +<([\w\d./]+)>/gm; function Wr(r) { return r.replace(Yu, Ku) } const ju = new Map([["encodings_fragment", "colorspace_fragment"], ["encodings_pars_fragment", "colorspace_pars_fragment"], ["output_fragment", "opaque_fragment"]]); function Ku(r, e) { let t = De[e]; if (t === void 0) { const n = ju.get(e); if (n !== void 0) t = De[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n); else throw new Error("Can not resolve #include <" + e + ">") } return Wr(t) } const Zu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function $s(r) { return r.replace(Zu, $u) } function $u(r, e, t, n) { let i = ""; for (let s = parseInt(e); s < parseInt(t); s++)i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s); return i } function Js(r) {
	let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`; return r.isWebGL2 && (e += `precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`), r.precision === "highp" ? e += `
#define HIGH_PRECISION`: r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
} function Ju(r) { let e = "SHADOWMAP_TYPE_BASIC"; return r.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e } function Qu(r) { let e = "ENVMAP_TYPE_CUBE"; if (r.envMap) switch (r.envMapMode) { case 301: case 302: e = "ENVMAP_TYPE_CUBE"; break; case 306: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function ed(r) { let e = "ENVMAP_MODE_REFLECTION"; if (r.envMap) switch (r.envMapMode) { case 302: e = "ENVMAP_MODE_REFRACTION"; break }return e } function td(r) { let e = "ENVMAP_BLENDING_NONE"; if (r.envMap) switch (r.combine) { case 0: e = "ENVMAP_BLENDING_MULTIPLY"; break; case 1: e = "ENVMAP_BLENDING_MIX"; break; case 2: e = "ENVMAP_BLENDING_ADD"; break }return e } function nd(r) { const e = r.envMapCubeUVHeight; if (e === null) return null; const t = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t } } function id(r, e, t, n) {
	const i = r.getContext(), s = t.defines; let a = t.vertexShader, o = t.fragmentShader; const l = Ju(t), c = Qu(t), h = ed(t), u = td(t), d = nd(t), m = t.isWebGL2 ? "" : Vu(t), g = Wu(t), v = Xu(s), p = i.createProgram(); let f, E, _ = t.glslVersion ? "#version " + t.glslVersion + `
`: ""; t.isRawShaderMaterial ? (f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(jn).join(`
`), f.length > 0 && (f += `
`), E = [m, "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(jn).join(`
`), E.length > 0 && (E += `
`)) : (f = [Js(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(jn).join(`
`), E = [m, Js(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? De.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? ku("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", De.colorspace_pars_fragment, zu("linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(jn).join(`
`)), a = Wr(a), a = Ks(a, t), a = Zs(a, t), o = Wr(o), o = Ks(o, t), o = Zs(o, t), a = $s(a), o = $s(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (_ = `#version 300 es
`, f = [g, "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ f, E = ["precision mediump sampler2DArray;", "#define varying in", t.glslVersion === ps ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === ps ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ E); const b = _ + f + a, L = _ + E + o, w = Ys(i, i.VERTEX_SHADER, b), R = Ys(i, i.FRAGMENT_SHADER, L); i.attachShader(p, w), i.attachShader(p, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"), i.linkProgram(p); function z(W) {
		if (r.debug.checkShaderErrors) {
			const q = i.getProgramInfoLog(p).trim(), C = i.getShaderInfoLog(w).trim(), O = i.getShaderInfoLog(R).trim(); let G = !0, X = !0; if (i.getProgramParameter(p, i.LINK_STATUS) === !1) if (G = !1, typeof r.debug.onShaderError == "function") r.debug.onShaderError(i, p, w, R); else {
				const k = js(i, w, "vertex"), V = js(i, R, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(p, i.VALIDATE_STATUS) + `

Material Name: `+ W.name + `
Material Type: `+ W.type + `

Program Info Log: `+ q + `
`+ k + `
`+ V)
			} else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (C === "" || O === "") && (X = !1); X && (W.diagnostics = { runnable: G, programLog: q, vertexShader: { log: C, prefix: f }, fragmentShader: { log: O, prefix: E } })
		} i.deleteShader(w), i.deleteShader(R), ne = new ji(i, p), M = qu(i, p)
	} let ne; this.getUniforms = function () { return ne === void 0 && z(this), ne }; let M; this.getAttributes = function () { return M === void 0 && z(this), M }; let A = t.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return A === !1 && (A = i.getProgramParameter(p, Ou)), A }, this.destroy = function () { n.releaseStatesOfProgram(this), i.deleteProgram(p), this.program = void 0 }, this.type = t.shaderType, this.name = t.shaderName, this.id = Bu++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = w, this.fragmentShader = R, this
} let rd = 0; class sd { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e); return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this } remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { const t = this.materialCache; let n = t.get(e); return n === void 0 && (n = new Set, t.set(e, n)), n } _getShaderStage(e) { const t = this.shaderCache; let n = t.get(e); return n === void 0 && (n = new ad(e), t.set(e, n)), n } } class ad { constructor(e) { this.id = rd++, this.code = e, this.usedTimes = 0 } } function od(r, e, t, n, i, s, a) { const o = new Da, l = new sd, c = new Set, h = [], u = i.isWebGL2, d = i.logarithmicDepthBuffer, m = i.vertexTextures; let g = i.precision; const v = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function p(M) { return c.add(M), M === 0 ? "uv" : `uv${M}` } function f(M, A, W, q, C) { const O = q.fog, G = C.geometry, X = M.isMeshStandardMaterial ? q.environment : null, k = (M.isMeshStandardMaterial ? t : e).get(M.envMap || X), V = k && k.mapping === 306 ? k.image.height : null, Z = v[M.type]; M.precision !== null && (g = i.getMaxPrecision(M.precision), g !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", g, "instead.")); const $ = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, ce = $ !== void 0 ? $.length : 0; let Te = 0; G.morphAttributes.position !== void 0 && (Te = 1), G.morphAttributes.normal !== void 0 && (Te = 2), G.morphAttributes.color !== void 0 && (Te = 3); let H, K, ae, ve; if (Z) { const $e = kt[Z]; H = $e.vertexShader, K = $e.fragmentShader } else H = M.vertexShader, K = M.fragmentShader, l.update(M), ae = l.getVertexShaderID(M), ve = l.getFragmentShaderID(M); const xe = r.getRenderTarget(), ue = C.isInstancedMesh === !0, ke = C.isBatchedMesh === !0, we = !!M.map, I = !!M.matcap, ft = !!k, ge = !!M.aoMap, Ae = !!M.lightMap, pe = !!M.bumpMap, tt = !!M.normalMap, Le = !!M.displacementMap, y = !!M.emissiveMap, x = !!M.metalnessMap, N = !!M.roughnessMap, Q = M.anisotropy > 0, Y = M.clearcoat > 0, J = M.iridescence > 0, de = M.sheen > 0, re = M.transmission > 0, oe = Q && !!M.anisotropyMap, Se = Y && !!M.clearcoatMap, Ie = Y && !!M.clearcoatNormalMap, j = Y && !!M.clearcoatRoughnessMap, Ye = J && !!M.iridescenceMap, Ge = J && !!M.iridescenceThicknessMap, be = de && !!M.sheenColorMap, me = de && !!M.sheenRoughnessMap, le = !!M.specularMap, Pe = !!M.specularColorMap, Ve = !!M.specularIntensityMap, Qe = re && !!M.transmissionMap, He = re && !!M.thicknessMap, Ke = !!M.gradientMap, T = !!M.alphaMap, ee = M.alphaTest > 0, te = !!M.alphaHash, he = !!M.extensions; let _e = 0; M.toneMapped && (xe === null || xe.isXRRenderTarget === !0) && (_e = r.toneMapping); const We = { isWebGL2: u, shaderID: Z, shaderType: M.type, shaderName: M.name, vertexShader: H, fragmentShader: K, defines: M.defines, customVertexShaderID: ae, customFragmentShaderID: ve, isRawShaderMaterial: M.isRawShaderMaterial === !0, glslVersion: M.glslVersion, precision: g, batching: ke, instancing: ue, instancingColor: ue && C.instanceColor !== null, supportsVertexTextures: m, outputColorSpace: xe === null ? r.outputColorSpace : xe.isXRRenderTarget === !0 ? xe.texture.colorSpace : en, alphaToCoverage: !!M.alphaToCoverage, map: we, matcap: I, envMap: ft, envMapMode: ft && k.mapping, envMapCubeUVHeight: V, aoMap: ge, lightMap: Ae, bumpMap: pe, normalMap: tt, displacementMap: m && Le, emissiveMap: y, normalMapObjectSpace: tt && M.normalMapType === 1, normalMapTangentSpace: tt && M.normalMapType === 0, metalnessMap: x, roughnessMap: N, anisotropy: Q, anisotropyMap: oe, clearcoat: Y, clearcoatMap: Se, clearcoatNormalMap: Ie, clearcoatRoughnessMap: j, iridescence: J, iridescenceMap: Ye, iridescenceThicknessMap: Ge, sheen: de, sheenColorMap: be, sheenRoughnessMap: me, specularMap: le, specularColorMap: Pe, specularIntensityMap: Ve, transmission: re, transmissionMap: Qe, thicknessMap: He, gradientMap: Ke, opaque: M.transparent === !1 && M.blending === 1 && M.alphaToCoverage === !1, alphaMap: T, alphaTest: ee, alphaHash: te, combine: M.combine, mapUv: we && p(M.map.channel), aoMapUv: ge && p(M.aoMap.channel), lightMapUv: Ae && p(M.lightMap.channel), bumpMapUv: pe && p(M.bumpMap.channel), normalMapUv: tt && p(M.normalMap.channel), displacementMapUv: Le && p(M.displacementMap.channel), emissiveMapUv: y && p(M.emissiveMap.channel), metalnessMapUv: x && p(M.metalnessMap.channel), roughnessMapUv: N && p(M.roughnessMap.channel), anisotropyMapUv: oe && p(M.anisotropyMap.channel), clearcoatMapUv: Se && p(M.clearcoatMap.channel), clearcoatNormalMapUv: Ie && p(M.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: j && p(M.clearcoatRoughnessMap.channel), iridescenceMapUv: Ye && p(M.iridescenceMap.channel), iridescenceThicknessMapUv: Ge && p(M.iridescenceThicknessMap.channel), sheenColorMapUv: be && p(M.sheenColorMap.channel), sheenRoughnessMapUv: me && p(M.sheenRoughnessMap.channel), specularMapUv: le && p(M.specularMap.channel), specularColorMapUv: Pe && p(M.specularColorMap.channel), specularIntensityMapUv: Ve && p(M.specularIntensityMap.channel), transmissionMapUv: Qe && p(M.transmissionMap.channel), thicknessMapUv: He && p(M.thicknessMap.channel), alphaMapUv: T && p(M.alphaMap.channel), vertexTangents: !!G.attributes.tangent && (tt || Q), vertexColors: M.vertexColors, vertexAlphas: M.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4, pointsUvs: C.isPoints === !0 && !!G.attributes.uv && (we || T), fog: !!O, useFog: M.fog === !0, fogExp2: !!O && O.isFogExp2, flatShading: M.flatShading === !0, sizeAttenuation: M.sizeAttenuation === !0, logarithmicDepthBuffer: d, skinning: C.isSkinnedMesh === !0, morphTargets: G.morphAttributes.position !== void 0, morphNormals: G.morphAttributes.normal !== void 0, morphColors: G.morphAttributes.color !== void 0, morphTargetsCount: ce, morphTextureStride: Te, numDirLights: A.directional.length, numPointLights: A.point.length, numSpotLights: A.spot.length, numSpotLightMaps: A.spotLightMap.length, numRectAreaLights: A.rectArea.length, numHemiLights: A.hemi.length, numDirLightShadows: A.directionalShadowMap.length, numPointLightShadows: A.pointShadowMap.length, numSpotLightShadows: A.spotShadowMap.length, numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps, numLightProbes: A.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: M.dithering, shadowMapEnabled: r.shadowMap.enabled && W.length > 0, shadowMapType: r.shadowMap.type, toneMapping: _e, useLegacyLights: r._useLegacyLights, decodeVideoTexture: we && M.map.isVideoTexture === !0 && je.getTransfer(M.map.colorSpace) === et, premultipliedAlpha: M.premultipliedAlpha, doubleSided: M.side === 2, flipSided: M.side === 1, useDepthPacking: M.depthPacking >= 0, depthPacking: M.depthPacking || 0, index0AttributeName: M.index0AttributeName, extensionDerivatives: he && M.extensions.derivatives === !0, extensionFragDepth: he && M.extensions.fragDepth === !0, extensionDrawBuffers: he && M.extensions.drawBuffers === !0, extensionShaderTextureLOD: he && M.extensions.shaderTextureLOD === !0, extensionClipCullDistance: he && M.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: he && M.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"), rendererExtensionFragDepth: u || n.has("EXT_frag_depth"), rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: M.customProgramCacheKey() }; return We.vertexUv1s = c.has(1), We.vertexUv2s = c.has(2), We.vertexUv3s = c.has(3), c.clear(), We } function E(M) { const A = []; if (M.shaderID ? A.push(M.shaderID) : (A.push(M.customVertexShaderID), A.push(M.customFragmentShaderID)), M.defines !== void 0) for (const W in M.defines) A.push(W), A.push(M.defines[W]); return M.isRawShaderMaterial === !1 && (_(A, M), b(A, M), A.push(r.outputColorSpace)), A.push(M.customProgramCacheKey), A.join() } function _(M, A) { M.push(A.precision), M.push(A.outputColorSpace), M.push(A.envMapMode), M.push(A.envMapCubeUVHeight), M.push(A.mapUv), M.push(A.alphaMapUv), M.push(A.lightMapUv), M.push(A.aoMapUv), M.push(A.bumpMapUv), M.push(A.normalMapUv), M.push(A.displacementMapUv), M.push(A.emissiveMapUv), M.push(A.metalnessMapUv), M.push(A.roughnessMapUv), M.push(A.anisotropyMapUv), M.push(A.clearcoatMapUv), M.push(A.clearcoatNormalMapUv), M.push(A.clearcoatRoughnessMapUv), M.push(A.iridescenceMapUv), M.push(A.iridescenceThicknessMapUv), M.push(A.sheenColorMapUv), M.push(A.sheenRoughnessMapUv), M.push(A.specularMapUv), M.push(A.specularColorMapUv), M.push(A.specularIntensityMapUv), M.push(A.transmissionMapUv), M.push(A.thicknessMapUv), M.push(A.combine), M.push(A.fogExp2), M.push(A.sizeAttenuation), M.push(A.morphTargetsCount), M.push(A.morphAttributeCount), M.push(A.numDirLights), M.push(A.numPointLights), M.push(A.numSpotLights), M.push(A.numSpotLightMaps), M.push(A.numHemiLights), M.push(A.numRectAreaLights), M.push(A.numDirLightShadows), M.push(A.numPointLightShadows), M.push(A.numSpotLightShadows), M.push(A.numSpotLightShadowsWithMaps), M.push(A.numLightProbes), M.push(A.shadowMapType), M.push(A.toneMapping), M.push(A.numClippingPlanes), M.push(A.numClipIntersection), M.push(A.depthPacking) } function b(M, A) { o.disableAll(), A.isWebGL2 && o.enable(0), A.supportsVertexTextures && o.enable(1), A.instancing && o.enable(2), A.instancingColor && o.enable(3), A.matcap && o.enable(4), A.envMap && o.enable(5), A.normalMapObjectSpace && o.enable(6), A.normalMapTangentSpace && o.enable(7), A.clearcoat && o.enable(8), A.iridescence && o.enable(9), A.alphaTest && o.enable(10), A.vertexColors && o.enable(11), A.vertexAlphas && o.enable(12), A.vertexUv1s && o.enable(13), A.vertexUv2s && o.enable(14), A.vertexUv3s && o.enable(15), A.vertexTangents && o.enable(16), A.anisotropy && o.enable(17), A.alphaHash && o.enable(18), A.batching && o.enable(19), M.push(o.mask), o.disableAll(), A.fog && o.enable(0), A.useFog && o.enable(1), A.flatShading && o.enable(2), A.logarithmicDepthBuffer && o.enable(3), A.skinning && o.enable(4), A.morphTargets && o.enable(5), A.morphNormals && o.enable(6), A.morphColors && o.enable(7), A.premultipliedAlpha && o.enable(8), A.shadowMapEnabled && o.enable(9), A.useLegacyLights && o.enable(10), A.doubleSided && o.enable(11), A.flipSided && o.enable(12), A.useDepthPacking && o.enable(13), A.dithering && o.enable(14), A.transmission && o.enable(15), A.sheen && o.enable(16), A.opaque && o.enable(17), A.pointsUvs && o.enable(18), A.decodeVideoTexture && o.enable(19), A.alphaToCoverage && o.enable(20), M.push(o.mask) } function L(M) { const A = v[M.type]; let W; if (A) { const q = kt[A]; W = Vo.clone(q.uniforms) } else W = M.uniforms; return W } function w(M, A) { let W; for (let q = 0, C = h.length; q < C; q++) { const O = h[q]; if (O.cacheKey === A) { W = O, ++W.usedTimes; break } } return W === void 0 && (W = new id(r, A, M, s), h.push(W)), W } function R(M) { if (--M.usedTimes === 0) { const A = h.indexOf(M); h[A] = h[h.length - 1], h.pop(), M.destroy() } } function z(M) { l.remove(M) } function ne() { l.dispose() } return { getParameters: f, getProgramCacheKey: E, getUniforms: L, acquireProgram: w, releaseProgram: R, releaseShaderCache: z, programs: h, dispose: ne } } function ld() { let r = new WeakMap; function e(s) { let a = r.get(s); return a === void 0 && (a = {}, r.set(s, a)), a } function t(s) { r.delete(s) } function n(s, a, o) { r.get(s)[a] = o } function i() { r = new WeakMap } return { get: e, remove: t, update: n, dispose: i } } function cd(r, e) { return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id } function Qs(r, e) { return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id } function ea() { const r = []; let e = 0; const t = [], n = [], i = []; function s() { e = 0, t.length = 0, n.length = 0, i.length = 0 } function a(u, d, m, g, v, p) { let f = r[e]; return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: m, groupOrder: g, renderOrder: u.renderOrder, z: v, group: p }, r[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = m, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = v, f.group = p), e++, f } function o(u, d, m, g, v, p) { const f = a(u, d, m, g, v, p); m.transmission > 0 ? n.push(f) : m.transparent === !0 ? i.push(f) : t.push(f) } function l(u, d, m, g, v, p) { const f = a(u, d, m, g, v, p); m.transmission > 0 ? n.unshift(f) : m.transparent === !0 ? i.unshift(f) : t.unshift(f) } function c(u, d) { t.length > 1 && t.sort(u || cd), n.length > 1 && n.sort(d || Qs), i.length > 1 && i.sort(d || Qs) } function h() { for (let u = e, d = r.length; u < d; u++) { const m = r[u]; if (m.id === null) break; m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null } } return { opaque: t, transmissive: n, transparent: i, init: s, push: o, unshift: l, finish: h, sort: c } } function hd() { let r = new WeakMap; function e(n, i) { const s = r.get(n); let a; return s === void 0 ? (a = new ea, r.set(n, [a])) : i >= s.length ? (a = new ea, s.push(a)) : a = s[i], a } function t() { r = new WeakMap } return { get: e, dispose: t } } function ud() { const r = {}; return { get: function (e) { if (r[e.id] !== void 0) return r[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { direction: new P, color: new ye }; break; case "SpotLight": t = { position: new P, direction: new P, color: new ye, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": t = { position: new P, color: new ye, distance: 0, decay: 0 }; break; case "HemisphereLight": t = { direction: new P, skyColor: new ye, groundColor: new ye }; break; case "RectAreaLight": t = { color: new ye, position: new P, halfWidth: new P, halfHeight: new P }; break }return r[e.id] = t, t } } } function dd() { const r = {}; return { get: function (e) { if (r[e.id] !== void 0) return r[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Oe }; break; case "SpotLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Oe }; break; case "PointLight": t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Oe, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return r[e.id] = t, t } } } let fd = 0; function pd(r, e) { return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0) } function md(r, e) { const t = new ud, n = dd(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let h = 0; h < 9; h++)i.probe.push(new P); const s = new P, a = new Be, o = new Be; function l(h, u) { let d = 0, m = 0, g = 0; for (let W = 0; W < 9; W++)i.probe[W].set(0, 0, 0); let v = 0, p = 0, f = 0, E = 0, _ = 0, b = 0, L = 0, w = 0, R = 0, z = 0, ne = 0; h.sort(pd); const M = u === !0 ? Math.PI : 1; for (let W = 0, q = h.length; W < q; W++) { const C = h[W], O = C.color, G = C.intensity, X = C.distance, k = C.shadow && C.shadow.map ? C.shadow.map.texture : null; if (C.isAmbientLight) d += O.r * G * M, m += O.g * G * M, g += O.b * G * M; else if (C.isLightProbe) { for (let V = 0; V < 9; V++)i.probe[V].addScaledVector(C.sh.coefficients[V], G); ne++ } else if (C.isDirectionalLight) { const V = t.get(C); if (V.color.copy(C.color).multiplyScalar(C.intensity * M), C.castShadow) { const Z = C.shadow, $ = n.get(C); $.shadowBias = Z.bias, $.shadowNormalBias = Z.normalBias, $.shadowRadius = Z.radius, $.shadowMapSize = Z.mapSize, i.directionalShadow[v] = $, i.directionalShadowMap[v] = k, i.directionalShadowMatrix[v] = C.shadow.matrix, b++ } i.directional[v] = V, v++ } else if (C.isSpotLight) { const V = t.get(C); V.position.setFromMatrixPosition(C.matrixWorld), V.color.copy(O).multiplyScalar(G * M), V.distance = X, V.coneCos = Math.cos(C.angle), V.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), V.decay = C.decay, i.spot[f] = V; const Z = C.shadow; if (C.map && (i.spotLightMap[R] = C.map, R++, Z.updateMatrices(C), C.castShadow && z++), i.spotLightMatrix[f] = Z.matrix, C.castShadow) { const $ = n.get(C); $.shadowBias = Z.bias, $.shadowNormalBias = Z.normalBias, $.shadowRadius = Z.radius, $.shadowMapSize = Z.mapSize, i.spotShadow[f] = $, i.spotShadowMap[f] = k, w++ } f++ } else if (C.isRectAreaLight) { const V = t.get(C); V.color.copy(O).multiplyScalar(G), V.halfWidth.set(C.width * .5, 0, 0), V.halfHeight.set(0, C.height * .5, 0), i.rectArea[E] = V, E++ } else if (C.isPointLight) { const V = t.get(C); if (V.color.copy(C.color).multiplyScalar(C.intensity * M), V.distance = C.distance, V.decay = C.decay, C.castShadow) { const Z = C.shadow, $ = n.get(C); $.shadowBias = Z.bias, $.shadowNormalBias = Z.normalBias, $.shadowRadius = Z.radius, $.shadowMapSize = Z.mapSize, $.shadowCameraNear = Z.camera.near, $.shadowCameraFar = Z.camera.far, i.pointShadow[p] = $, i.pointShadowMap[p] = k, i.pointShadowMatrix[p] = C.shadow.matrix, L++ } i.point[p] = V, p++ } else if (C.isHemisphereLight) { const V = t.get(C); V.skyColor.copy(C.color).multiplyScalar(G * M), V.groundColor.copy(C.groundColor).multiplyScalar(G * M), i.hemi[_] = V, _++ } } E > 0 && (e.isWebGL2 ? r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : r.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_FLOAT_1, i.rectAreaLTC2 = ie.LTC_FLOAT_2) : r.has("OES_texture_half_float_linear") === !0 ? (i.rectAreaLTC1 = ie.LTC_HALF_1, i.rectAreaLTC2 = ie.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), i.ambient[0] = d, i.ambient[1] = m, i.ambient[2] = g; const A = i.hash; (A.directionalLength !== v || A.pointLength !== p || A.spotLength !== f || A.rectAreaLength !== E || A.hemiLength !== _ || A.numDirectionalShadows !== b || A.numPointShadows !== L || A.numSpotShadows !== w || A.numSpotMaps !== R || A.numLightProbes !== ne) && (i.directional.length = v, i.spot.length = f, i.rectArea.length = E, i.point.length = p, i.hemi.length = _, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.pointShadow.length = L, i.pointShadowMap.length = L, i.spotShadow.length = w, i.spotShadowMap.length = w, i.directionalShadowMatrix.length = b, i.pointShadowMatrix.length = L, i.spotLightMatrix.length = w + R - z, i.spotLightMap.length = R, i.numSpotLightShadowsWithMaps = z, i.numLightProbes = ne, A.directionalLength = v, A.pointLength = p, A.spotLength = f, A.rectAreaLength = E, A.hemiLength = _, A.numDirectionalShadows = b, A.numPointShadows = L, A.numSpotShadows = w, A.numSpotMaps = R, A.numLightProbes = ne, i.version = fd++) } function c(h, u) { let d = 0, m = 0, g = 0, v = 0, p = 0; const f = u.matrixWorldInverse; for (let E = 0, _ = h.length; E < _; E++) { const b = h[E]; if (b.isDirectionalLight) { const L = i.directional[d]; L.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), L.direction.sub(s), L.direction.transformDirection(f), d++ } else if (b.isSpotLight) { const L = i.spot[g]; L.position.setFromMatrixPosition(b.matrixWorld), L.position.applyMatrix4(f), L.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), L.direction.sub(s), L.direction.transformDirection(f), g++ } else if (b.isRectAreaLight) { const L = i.rectArea[v]; L.position.setFromMatrixPosition(b.matrixWorld), L.position.applyMatrix4(f), o.identity(), a.copy(b.matrixWorld), a.premultiply(f), o.extractRotation(a), L.halfWidth.set(b.width * .5, 0, 0), L.halfHeight.set(0, b.height * .5, 0), L.halfWidth.applyMatrix4(o), L.halfHeight.applyMatrix4(o), v++ } else if (b.isPointLight) { const L = i.point[m]; L.position.setFromMatrixPosition(b.matrixWorld), L.position.applyMatrix4(f), m++ } else if (b.isHemisphereLight) { const L = i.hemi[p]; L.direction.setFromMatrixPosition(b.matrixWorld), L.direction.transformDirection(f), p++ } } } return { setup: l, setupView: c, state: i } } function ta(r, e) { const t = new md(r, e), n = [], i = []; function s() { n.length = 0, i.length = 0 } function a(u) { n.push(u) } function o(u) { i.push(u) } function l(u) { t.setup(n, u) } function c(u) { t.setupView(n, u) } return { init: s, state: { lightsArray: n, shadowsArray: i, lights: t }, setupLights: l, setupLightsView: c, pushLight: a, pushShadow: o } } function gd(r, e) { let t = new WeakMap; function n(s, a = 0) { const o = t.get(s); let l; return o === void 0 ? (l = new ta(r, e), t.set(s, [l])) : a >= o.length ? (l = new ta(r, e), o.push(l)) : l = o[a], l } function i() { t = new WeakMap } return { get: n, dispose: i } } class _d extends Ht { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } } class vd extends Ht { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } } const xd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Md = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function Sd(r, e, t) { let n = new $r; const i = new Oe, s = new Oe, a = new Ze, o = new _d({ depthPacking: 3201 }), l = new vd, c = {}, h = t.maxTextureSize, u = { 0: 1, 1: 0, 2: 2 }, d = new un({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Oe }, radius: { value: 4 } }, vertexShader: xd, fragmentShader: Md }), m = d.clone(); m.defines.HORIZONTAL_PASS = 1; const g = new Nt; g.setAttribute("position", new mt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const v = new Rt(g, d), p = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1; let f = this.type; this.render = function (w, R, z) { if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || w.length === 0) return; const ne = r.getRenderTarget(), M = r.getActiveCubeFace(), A = r.getActiveMipmapLevel(), W = r.state; W.setBlending(0), W.buffers.color.setClear(1, 1, 1, 1), W.buffers.depth.setTest(!0), W.setScissorTest(!1); const q = f !== 3 && this.type === 3, C = f === 3 && this.type !== 3; for (let O = 0, G = w.length; O < G; O++) { const X = w[O], k = X.shadow; if (k === void 0) { console.warn("THREE.WebGLShadowMap:", X, "has no shadow."); continue } if (k.autoUpdate === !1 && k.needsUpdate === !1) continue; i.copy(k.mapSize); const V = k.getFrameExtents(); if (i.multiply(V), s.copy(k.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / V.x), i.x = s.x * V.x, k.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / V.y), i.y = s.y * V.y, k.mapSize.y = s.y)), k.map === null || q === !0 || C === !0) { const $ = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {}; k.map !== null && k.map.dispose(), k.map = new Cn(i.x, i.y, $), k.map.texture.name = X.name + ".shadowMap", k.camera.updateProjectionMatrix() } r.setRenderTarget(k.map), r.clear(); const Z = k.getViewportCount(); for (let $ = 0; $ < Z; $++) { const ce = k.getViewport($); a.set(s.x * ce.x, s.y * ce.y, s.x * ce.z, s.y * ce.w), W.viewport(a), k.updateMatrices(X, $), n = k.getFrustum(), b(R, z, k.camera, X, this.type) } k.isPointLightShadow !== !0 && this.type === 3 && E(k, z), k.needsUpdate = !1 } f = this.type, p.needsUpdate = !1, r.setRenderTarget(ne, M, A) }; function E(w, R) { const z = e.update(v); d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, m.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), w.mapPass === null && (w.mapPass = new Cn(i.x, i.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, r.setRenderTarget(w.mapPass), r.clear(), r.renderBufferDirect(R, null, z, d, v, null), m.uniforms.shadow_pass.value = w.mapPass.texture, m.uniforms.resolution.value = w.mapSize, m.uniforms.radius.value = w.radius, r.setRenderTarget(w.map), r.clear(), r.renderBufferDirect(R, null, z, m, v, null) } function _(w, R, z, ne) { let M = null; const A = z.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial; if (A !== void 0) M = A; else if (M = z.isPointLight === !0 ? l : o, r.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) { const W = M.uuid, q = R.uuid; let C = c[W]; C === void 0 && (C = {}, c[W] = C); let O = C[q]; O === void 0 && (O = M.clone(), C[q] = O, R.addEventListener("dispose", L)), M = O } if (M.visible = R.visible, M.wireframe = R.wireframe, ne === 3 ? M.side = R.shadowSide !== null ? R.shadowSide : R.side : M.side = R.shadowSide !== null ? R.shadowSide : u[R.side], M.alphaMap = R.alphaMap, M.alphaTest = R.alphaTest, M.map = R.map, M.clipShadows = R.clipShadows, M.clippingPlanes = R.clippingPlanes, M.clipIntersection = R.clipIntersection, M.displacementMap = R.displacementMap, M.displacementScale = R.displacementScale, M.displacementBias = R.displacementBias, M.wireframeLinewidth = R.wireframeLinewidth, M.linewidth = R.linewidth, z.isPointLight === !0 && M.isMeshDistanceMaterial === !0) { const W = r.properties.get(M); W.light = z } return M } function b(w, R, z, ne, M) { if (w.visible === !1) return; if (w.layers.test(R.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === 3) && (!w.frustumCulled || n.intersectsObject(w))) { w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, w.matrixWorld); const q = e.update(w), C = w.material; if (Array.isArray(C)) { const O = q.groups; for (let G = 0, X = O.length; G < X; G++) { const k = O[G], V = C[k.materialIndex]; if (V && V.visible) { const Z = _(w, V, ne, M); w.onBeforeShadow(r, w, R, z, q, Z, k), r.renderBufferDirect(z, null, q, Z, w, k), w.onAfterShadow(r, w, R, z, q, Z, k) } } } else if (C.visible) { const O = _(w, C, ne, M); w.onBeforeShadow(r, w, R, z, q, O, null), r.renderBufferDirect(z, null, q, O, w, null), w.onAfterShadow(r, w, R, z, q, O, null) } } const W = w.children; for (let q = 0, C = W.length; q < C; q++)b(W[q], R, z, ne, M) } function L(w) { w.target.removeEventListener("dispose", L); for (const z in c) { const ne = c[z], M = w.target.uuid; M in ne && (ne[M].dispose(), delete ne[M]) } } } function yd(r, e, t) { const n = t.isWebGL2; function i() { let T = !1; const ee = new Ze; let te = null; const he = new Ze(0, 0, 0, 0); return { setMask: function (_e) { te !== _e && !T && (r.colorMask(_e, _e, _e, _e), te = _e) }, setLocked: function (_e) { T = _e }, setClear: function (_e, We, $e, pt, wt) { wt === !0 && (_e *= pt, We *= pt, $e *= pt), ee.set(_e, We, $e, pt), he.equals(ee) === !1 && (r.clearColor(_e, We, $e, pt), he.copy(ee)) }, reset: function () { T = !1, te = null, he.set(-1, 0, 0, 0) } } } function s() { let T = !1, ee = null, te = null, he = null; return { setTest: function (_e) { _e ? ue(r.DEPTH_TEST) : ke(r.DEPTH_TEST) }, setMask: function (_e) { ee !== _e && !T && (r.depthMask(_e), ee = _e) }, setFunc: function (_e) { if (te !== _e) { switch (_e) { case 0: r.depthFunc(r.NEVER); break; case 1: r.depthFunc(r.ALWAYS); break; case 2: r.depthFunc(r.LESS); break; case 3: r.depthFunc(r.LEQUAL); break; case 4: r.depthFunc(r.EQUAL); break; case 5: r.depthFunc(r.GEQUAL); break; case 6: r.depthFunc(r.GREATER); break; case 7: r.depthFunc(r.NOTEQUAL); break; default: r.depthFunc(r.LEQUAL) }te = _e } }, setLocked: function (_e) { T = _e }, setClear: function (_e) { he !== _e && (r.clearDepth(_e), he = _e) }, reset: function () { T = !1, ee = null, te = null, he = null } } } function a() { let T = !1, ee = null, te = null, he = null, _e = null, We = null, $e = null, pt = null, wt = null; return { setTest: function (Je) { T || (Je ? ue(r.STENCIL_TEST) : ke(r.STENCIL_TEST)) }, setMask: function (Je) { ee !== Je && !T && (r.stencilMask(Je), ee = Je) }, setFunc: function (Je, Mt, zt) { (te !== Je || he !== Mt || _e !== zt) && (r.stencilFunc(Je, Mt, zt), te = Je, he = Mt, _e = zt) }, setOp: function (Je, Mt, zt) { (We !== Je || $e !== Mt || pt !== zt) && (r.stencilOp(Je, Mt, zt), We = Je, $e = Mt, pt = zt) }, setLocked: function (Je) { T = Je }, setClear: function (Je) { wt !== Je && (r.clearStencil(Je), wt = Je) }, reset: function () { T = !1, ee = null, te = null, he = null, _e = null, We = null, $e = null, pt = null, wt = null } } } const o = new i, l = new s, c = new a, h = new WeakMap, u = new WeakMap; let d = {}, m = {}, g = new WeakMap, v = [], p = null, f = !1, E = null, _ = null, b = null, L = null, w = null, R = null, z = null, ne = new ye(0, 0, 0), M = 0, A = !1, W = null, q = null, C = null, O = null, G = null; const X = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let k = !1, V = 0; const Z = r.getParameter(r.VERSION); Z.indexOf("WebGL") !== -1 ? (V = parseFloat(/^WebGL (\d)/.exec(Z)[1]), k = V >= 1) : Z.indexOf("OpenGL ES") !== -1 && (V = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), k = V >= 2); let $ = null, ce = {}; const Te = r.getParameter(r.SCISSOR_BOX), H = r.getParameter(r.VIEWPORT), K = new Ze().fromArray(Te), ae = new Ze().fromArray(H); function ve(T, ee, te, he) { const _e = new Uint8Array(4), We = r.createTexture(); r.bindTexture(T, We), r.texParameteri(T, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(T, r.TEXTURE_MAG_FILTER, r.NEAREST); for (let $e = 0; $e < te; $e++)n && (T === r.TEXTURE_3D || T === r.TEXTURE_2D_ARRAY) ? r.texImage3D(ee, 0, r.RGBA, 1, 1, he, 0, r.RGBA, r.UNSIGNED_BYTE, _e) : r.texImage2D(ee + $e, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, _e); return We } const xe = {}; xe[r.TEXTURE_2D] = ve(r.TEXTURE_2D, r.TEXTURE_2D, 1), xe[r.TEXTURE_CUBE_MAP] = ve(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (xe[r.TEXTURE_2D_ARRAY] = ve(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), xe[r.TEXTURE_3D] = ve(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), ue(r.DEPTH_TEST), l.setFunc(3), Le(!1), y(1), ue(r.CULL_FACE), pe(0); function ue(T) { d[T] !== !0 && (r.enable(T), d[T] = !0) } function ke(T) { d[T] !== !1 && (r.disable(T), d[T] = !1) } function we(T, ee) { return m[T] !== ee ? (r.bindFramebuffer(T, ee), m[T] = ee, n && (T === r.DRAW_FRAMEBUFFER && (m[r.FRAMEBUFFER] = ee), T === r.FRAMEBUFFER && (m[r.DRAW_FRAMEBUFFER] = ee)), !0) : !1 } function I(T, ee) { let te = v, he = !1; if (T) if (te = g.get(ee), te === void 0 && (te = [], g.set(ee, te)), T.isWebGLMultipleRenderTargets) { const _e = T.texture; if (te.length !== _e.length || te[0] !== r.COLOR_ATTACHMENT0) { for (let We = 0, $e = _e.length; We < $e; We++)te[We] = r.COLOR_ATTACHMENT0 + We; te.length = _e.length, he = !0 } } else te[0] !== r.COLOR_ATTACHMENT0 && (te[0] = r.COLOR_ATTACHMENT0, he = !0); else te[0] !== r.BACK && (te[0] = r.BACK, he = !0); he && (t.isWebGL2 ? r.drawBuffers(te) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te)) } function ft(T) { return p !== T ? (r.useProgram(T), p = T, !0) : !1 } const ge = { 100: r.FUNC_ADD, 101: r.FUNC_SUBTRACT, 102: r.FUNC_REVERSE_SUBTRACT }; if (n) ge[103] = r.MIN, ge[104] = r.MAX; else { const T = e.get("EXT_blend_minmax"); T !== null && (ge[103] = T.MIN_EXT, ge[104] = T.MAX_EXT) } const Ae = { 200: r.ZERO, 201: r.ONE, 202: r.SRC_COLOR, 204: r.SRC_ALPHA, 210: r.SRC_ALPHA_SATURATE, 208: r.DST_COLOR, 206: r.DST_ALPHA, 203: r.ONE_MINUS_SRC_COLOR, 205: r.ONE_MINUS_SRC_ALPHA, 209: r.ONE_MINUS_DST_COLOR, 207: r.ONE_MINUS_DST_ALPHA, 211: r.CONSTANT_COLOR, 212: r.ONE_MINUS_CONSTANT_COLOR, 213: r.CONSTANT_ALPHA, 214: r.ONE_MINUS_CONSTANT_ALPHA }; function pe(T, ee, te, he, _e, We, $e, pt, wt, Je) { if (T === 0) { f === !0 && (ke(r.BLEND), f = !1); return } if (f === !1 && (ue(r.BLEND), f = !0), T !== 5) { if (T !== E || Je !== A) { if ((_ !== 100 || w !== 100) && (r.blendEquation(r.FUNC_ADD), _ = 100, w = 100), Je) switch (T) { case 1: r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA); break; case 2: r.blendFunc(r.ONE, r.ONE); break; case 3: r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE); break; case 4: r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", T); break } else switch (T) { case 1: r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA); break; case 2: r.blendFunc(r.SRC_ALPHA, r.ONE); break; case 3: r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE); break; case 4: r.blendFunc(r.ZERO, r.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", T); break }b = null, L = null, R = null, z = null, ne.set(0, 0, 0), M = 0, E = T, A = Je } return } _e = _e || ee, We = We || te, $e = $e || he, (ee !== _ || _e !== w) && (r.blendEquationSeparate(ge[ee], ge[_e]), _ = ee, w = _e), (te !== b || he !== L || We !== R || $e !== z) && (r.blendFuncSeparate(Ae[te], Ae[he], Ae[We], Ae[$e]), b = te, L = he, R = We, z = $e), (pt.equals(ne) === !1 || wt !== M) && (r.blendColor(pt.r, pt.g, pt.b, wt), ne.copy(pt), M = wt), E = T, A = !1 } function tt(T, ee) { T.side === 2 ? ke(r.CULL_FACE) : ue(r.CULL_FACE); let te = T.side === 1; ee && (te = !te), Le(te), T.blending === 1 && T.transparent === !1 ? pe(0) : pe(T.blending, T.blendEquation, T.blendSrc, T.blendDst, T.blendEquationAlpha, T.blendSrcAlpha, T.blendDstAlpha, T.blendColor, T.blendAlpha, T.premultipliedAlpha), l.setFunc(T.depthFunc), l.setTest(T.depthTest), l.setMask(T.depthWrite), o.setMask(T.colorWrite); const he = T.stencilWrite; c.setTest(he), he && (c.setMask(T.stencilWriteMask), c.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask), c.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)), N(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits), T.alphaToCoverage === !0 ? ue(r.SAMPLE_ALPHA_TO_COVERAGE) : ke(r.SAMPLE_ALPHA_TO_COVERAGE) } function Le(T) { W !== T && (T ? r.frontFace(r.CW) : r.frontFace(r.CCW), W = T) } function y(T) { T !== 0 ? (ue(r.CULL_FACE), T !== q && (T === 1 ? r.cullFace(r.BACK) : T === 2 ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : ke(r.CULL_FACE), q = T } function x(T) { T !== C && (k && r.lineWidth(T), C = T) } function N(T, ee, te) { T ? (ue(r.POLYGON_OFFSET_FILL), (O !== ee || G !== te) && (r.polygonOffset(ee, te), O = ee, G = te)) : ke(r.POLYGON_OFFSET_FILL) } function Q(T) { T ? ue(r.SCISSOR_TEST) : ke(r.SCISSOR_TEST) } function Y(T) { T === void 0 && (T = r.TEXTURE0 + X - 1), $ !== T && (r.activeTexture(T), $ = T) } function J(T, ee, te) { te === void 0 && ($ === null ? te = r.TEXTURE0 + X - 1 : te = $); let he = ce[te]; he === void 0 && (he = { type: void 0, texture: void 0 }, ce[te] = he), (he.type !== T || he.texture !== ee) && ($ !== te && (r.activeTexture(te), $ = te), r.bindTexture(T, ee || xe[T]), he.type = T, he.texture = ee) } function de() { const T = ce[$]; T !== void 0 && T.type !== void 0 && (r.bindTexture(T.type, null), T.type = void 0, T.texture = void 0) } function re() { try { r.compressedTexImage2D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function oe() { try { r.compressedTexImage3D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function Se() { try { r.texSubImage2D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function Ie() { try { r.texSubImage3D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function j() { try { r.compressedTexSubImage2D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function Ye() { try { r.compressedTexSubImage3D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function Ge() { try { r.texStorage2D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function be() { try { r.texStorage3D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function me() { try { r.texImage2D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function le() { try { r.texImage3D.apply(r, arguments) } catch (T) { console.error("THREE.WebGLState:", T) } } function Pe(T) { K.equals(T) === !1 && (r.scissor(T.x, T.y, T.z, T.w), K.copy(T)) } function Ve(T) { ae.equals(T) === !1 && (r.viewport(T.x, T.y, T.z, T.w), ae.copy(T)) } function Qe(T, ee) { let te = u.get(ee); te === void 0 && (te = new WeakMap, u.set(ee, te)); let he = te.get(T); he === void 0 && (he = r.getUniformBlockIndex(ee, T.name), te.set(T, he)) } function He(T, ee) { const he = u.get(ee).get(T); h.get(ee) !== he && (r.uniformBlockBinding(ee, he, T.__bindingPointIndex), h.set(ee, he)) } function Ke() { r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(!0, !0, !0, !0), r.clearColor(0, 0, 0, 0), r.depthMask(!0), r.depthFunc(r.LESS), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), d = {}, $ = null, ce = {}, m = {}, g = new WeakMap, v = [], p = null, f = !1, E = null, _ = null, b = null, L = null, w = null, R = null, z = null, ne = new ye(0, 0, 0), M = 0, A = !1, W = null, q = null, C = null, O = null, G = null, K.set(0, 0, r.canvas.width, r.canvas.height), ae.set(0, 0, r.canvas.width, r.canvas.height), o.reset(), l.reset(), c.reset() } return { buffers: { color: o, depth: l, stencil: c }, enable: ue, disable: ke, bindFramebuffer: we, drawBuffers: I, useProgram: ft, setBlending: pe, setMaterial: tt, setFlipSided: Le, setCullFace: y, setLineWidth: x, setPolygonOffset: N, setScissorTest: Q, activeTexture: Y, bindTexture: J, unbindTexture: de, compressedTexImage2D: re, compressedTexImage3D: oe, texImage2D: me, texImage3D: le, updateUBOMapping: Qe, uniformBlockBinding: He, texStorage2D: Ge, texStorage3D: be, texSubImage2D: Se, texSubImage3D: Ie, compressedTexSubImage2D: j, compressedTexSubImage3D: Ye, scissor: Pe, viewport: Ve, reset: Ke } } function Ed(r, e, t, n, i, s, a) { const o = i.isWebGL2, l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), h = new WeakMap; let u; const d = new WeakMap; let m = !1; try { m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function g(y, x) { return m ? new OffscreenCanvas(y, x) : pi("canvas") } function v(y, x, N, Q) { let Y = 1; if ((y.width > Q || y.height > Q) && (Y = Q / Math.max(y.width, y.height)), Y < 1 || x === !0) if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap) { const J = x ? Ji : Math.floor, de = J(Y * y.width), re = J(Y * y.height); u === void 0 && (u = g(de, re)); const oe = N ? g(de, re) : u; return oe.width = de, oe.height = re, oe.getContext("2d").drawImage(y, 0, 0, de, re), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + y.width + "x" + y.height + ") to (" + de + "x" + re + ")."), oe } else return "data" in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + y.width + "x" + y.height + ")."), y; return y } function p(y) { return Vr(y.width) && Vr(y.height) } function f(y) { return o ? !1 : y.wrapS !== 1001 || y.wrapT !== 1001 || y.minFilter !== 1003 && y.minFilter !== 1006 } function E(y, x) { return y.generateMipmaps && x && y.minFilter !== 1003 && y.minFilter !== 1006 } function _(y) { r.generateMipmap(y) } function b(y, x, N, Q, Y = !1) { if (o === !1) return x; if (y !== null) { if (r[y] !== void 0) return r[y]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'") } let J = x; if (x === r.RED && (N === r.FLOAT && (J = r.R32F), N === r.HALF_FLOAT && (J = r.R16F), N === r.UNSIGNED_BYTE && (J = r.R8)), x === r.RED_INTEGER && (N === r.UNSIGNED_BYTE && (J = r.R8UI), N === r.UNSIGNED_SHORT && (J = r.R16UI), N === r.UNSIGNED_INT && (J = r.R32UI), N === r.BYTE && (J = r.R8I), N === r.SHORT && (J = r.R16I), N === r.INT && (J = r.R32I)), x === r.RG && (N === r.FLOAT && (J = r.RG32F), N === r.HALF_FLOAT && (J = r.RG16F), N === r.UNSIGNED_BYTE && (J = r.RG8)), x === r.RGBA) { const de = Y ? Ki : je.getTransfer(Q); N === r.FLOAT && (J = r.RGBA32F), N === r.HALF_FLOAT && (J = r.RGBA16F), N === r.UNSIGNED_BYTE && (J = de === et ? r.SRGB8_ALPHA8 : r.RGBA8), N === r.UNSIGNED_SHORT_4_4_4_4 && (J = r.RGBA4), N === r.UNSIGNED_SHORT_5_5_5_1 && (J = r.RGB5_A1) } return (J === r.R16F || J === r.R32F || J === r.RG16F || J === r.RG32F || J === r.RGBA16F || J === r.RGBA32F) && e.get("EXT_color_buffer_float"), J } function L(y, x, N) { return E(y, N) === !0 || y.isFramebufferTexture && y.minFilter !== 1003 && y.minFilter !== 1006 ? Math.log2(Math.max(x.width, x.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? x.mipmaps.length : 1 } function w(y) { return y === 1003 || y === 1004 || y === 1005 ? r.NEAREST : r.LINEAR } function R(y) { const x = y.target; x.removeEventListener("dispose", R), ne(x), x.isVideoTexture && h.delete(x) } function z(y) { const x = y.target; x.removeEventListener("dispose", z), A(x) } function ne(y) { const x = n.get(y); if (x.__webglInit === void 0) return; const N = y.source, Q = d.get(N); if (Q) { const Y = Q[x.__cacheKey]; Y.usedTimes--, Y.usedTimes === 0 && M(y), Object.keys(Q).length === 0 && d.delete(N) } n.remove(y) } function M(y) { const x = n.get(y); r.deleteTexture(x.__webglTexture); const N = y.source, Q = d.get(N); delete Q[x.__cacheKey], a.memory.textures-- } function A(y) { const x = y.texture, N = n.get(y), Q = n.get(x); if (Q.__webglTexture !== void 0 && (r.deleteTexture(Q.__webglTexture), a.memory.textures--), y.depthTexture && y.depthTexture.dispose(), y.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) { if (Array.isArray(N.__webglFramebuffer[Y])) for (let J = 0; J < N.__webglFramebuffer[Y].length; J++)r.deleteFramebuffer(N.__webglFramebuffer[Y][J]); else r.deleteFramebuffer(N.__webglFramebuffer[Y]); N.__webglDepthbuffer && r.deleteRenderbuffer(N.__webglDepthbuffer[Y]) } else { if (Array.isArray(N.__webglFramebuffer)) for (let Y = 0; Y < N.__webglFramebuffer.length; Y++)r.deleteFramebuffer(N.__webglFramebuffer[Y]); else r.deleteFramebuffer(N.__webglFramebuffer); if (N.__webglDepthbuffer && r.deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && r.deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer) for (let Y = 0; Y < N.__webglColorRenderbuffer.length; Y++)N.__webglColorRenderbuffer[Y] && r.deleteRenderbuffer(N.__webglColorRenderbuffer[Y]); N.__webglDepthRenderbuffer && r.deleteRenderbuffer(N.__webglDepthRenderbuffer) } if (y.isWebGLMultipleRenderTargets) for (let Y = 0, J = x.length; Y < J; Y++) { const de = n.get(x[Y]); de.__webglTexture && (r.deleteTexture(de.__webglTexture), a.memory.textures--), n.remove(x[Y]) } n.remove(x), n.remove(y) } let W = 0; function q() { W = 0 } function C() { const y = W; return y >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + i.maxTextures), W += 1, y } function O(y) { const x = []; return x.push(y.wrapS), x.push(y.wrapT), x.push(y.wrapR || 0), x.push(y.magFilter), x.push(y.minFilter), x.push(y.anisotropy), x.push(y.internalFormat), x.push(y.format), x.push(y.type), x.push(y.generateMipmaps), x.push(y.premultiplyAlpha), x.push(y.flipY), x.push(y.unpackAlignment), x.push(y.colorSpace), x.join() } function G(y, x) { const N = n.get(y); if (y.isVideoTexture && tt(y), y.isRenderTargetTexture === !1 && y.version > 0 && N.__version !== y.version) { const Q = y.image; if (Q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (Q.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { K(N, y, x); return } } t.bindTexture(r.TEXTURE_2D, N.__webglTexture, r.TEXTURE0 + x) } function X(y, x) { const N = n.get(y); if (y.version > 0 && N.__version !== y.version) { K(N, y, x); return } t.bindTexture(r.TEXTURE_2D_ARRAY, N.__webglTexture, r.TEXTURE0 + x) } function k(y, x) { const N = n.get(y); if (y.version > 0 && N.__version !== y.version) { K(N, y, x); return } t.bindTexture(r.TEXTURE_3D, N.__webglTexture, r.TEXTURE0 + x) } function V(y, x) { const N = n.get(y); if (y.version > 0 && N.__version !== y.version) { ae(N, y, x); return } t.bindTexture(r.TEXTURE_CUBE_MAP, N.__webglTexture, r.TEXTURE0 + x) } const Z = { 1e3: r.REPEAT, 1001: r.CLAMP_TO_EDGE, 1002: r.MIRRORED_REPEAT }, $ = { 1003: r.NEAREST, 1004: r.NEAREST_MIPMAP_NEAREST, 1005: r.NEAREST_MIPMAP_LINEAR, 1006: r.LINEAR, 1007: r.LINEAR_MIPMAP_NEAREST, 1008: r.LINEAR_MIPMAP_LINEAR }, ce = { 512: r.NEVER, 519: r.ALWAYS, 513: r.LESS, 515: r.LEQUAL, 514: r.EQUAL, 518: r.GEQUAL, 516: r.GREATER, 517: r.NOTEQUAL }; function Te(y, x, N) { if (x.type === 1015 && e.has("OES_texture_float_linear") === !1 && (x.magFilter === 1006 || x.magFilter === 1007 || x.magFilter === 1005 || x.magFilter === 1008 || x.minFilter === 1006 || x.minFilter === 1007 || x.minFilter === 1005 || x.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), N ? (r.texParameteri(y, r.TEXTURE_WRAP_S, Z[x.wrapS]), r.texParameteri(y, r.TEXTURE_WRAP_T, Z[x.wrapT]), (y === r.TEXTURE_3D || y === r.TEXTURE_2D_ARRAY) && r.texParameteri(y, r.TEXTURE_WRAP_R, Z[x.wrapR]), r.texParameteri(y, r.TEXTURE_MAG_FILTER, $[x.magFilter]), r.texParameteri(y, r.TEXTURE_MIN_FILTER, $[x.minFilter])) : (r.texParameteri(y, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(y, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), (y === r.TEXTURE_3D || y === r.TEXTURE_2D_ARRAY) && r.texParameteri(y, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE), (x.wrapS !== 1001 || x.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), r.texParameteri(y, r.TEXTURE_MAG_FILTER, w(x.magFilter)), r.texParameteri(y, r.TEXTURE_MIN_FILTER, w(x.minFilter)), x.minFilter !== 1003 && x.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), x.compareFunction && (r.texParameteri(y, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(y, r.TEXTURE_COMPARE_FUNC, ce[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { const Q = e.get("EXT_texture_filter_anisotropic"); if (x.magFilter === 1003 || x.minFilter !== 1005 && x.minFilter !== 1008 || x.type === 1015 && e.has("OES_texture_float_linear") === !1 || o === !1 && x.type === 1016 && e.has("OES_texture_half_float_linear") === !1) return; (x.anisotropy > 1 || n.get(x).__currentAnisotropy) && (r.texParameterf(y, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy) } } function H(y, x) { let N = !1; y.__webglInit === void 0 && (y.__webglInit = !0, x.addEventListener("dispose", R)); const Q = x.source; let Y = d.get(Q); Y === void 0 && (Y = {}, d.set(Q, Y)); const J = O(x); if (J !== y.__cacheKey) { Y[J] === void 0 && (Y[J] = { texture: r.createTexture(), usedTimes: 0 }, a.memory.textures++, N = !0), Y[J].usedTimes++; const de = Y[y.__cacheKey]; de !== void 0 && (Y[y.__cacheKey].usedTimes--, de.usedTimes === 0 && M(x)), y.__cacheKey = J, y.__webglTexture = Y[J].texture } return N } function K(y, x, N) { let Q = r.TEXTURE_2D; (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Q = r.TEXTURE_2D_ARRAY), x.isData3DTexture && (Q = r.TEXTURE_3D); const Y = H(y, x), J = x.source; t.bindTexture(Q, y.__webglTexture, r.TEXTURE0 + N); const de = n.get(J); if (J.version !== de.__version || Y === !0) { t.activeTexture(r.TEXTURE0 + N); const re = je.getPrimaries(je.workingColorSpace), oe = x.colorSpace === Dt ? null : je.getPrimaries(x.colorSpace), Se = x.colorSpace === Dt || re === oe ? r.NONE : r.BROWSER_DEFAULT_WEBGL; r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Se); const Ie = f(x) && p(x.image) === !1; let j = v(x.image, Ie, !1, i.maxTextureSize); j = Le(x, j); const Ye = p(j) || o, Ge = s.convert(x.format, x.colorSpace); let be = s.convert(x.type), me = b(x.internalFormat, Ge, be, x.colorSpace, x.isVideoTexture); Te(Q, x, Ye); let le; const Pe = x.mipmaps, Ve = o && x.isVideoTexture !== !0 && me !== 36196, Qe = de.__version === void 0 || Y === !0, He = J.dataReady, Ke = L(x, j, Ye); if (x.isDepthTexture) me = r.DEPTH_COMPONENT, o ? x.type === 1015 ? me = r.DEPTH_COMPONENT32F : x.type === 1014 ? me = r.DEPTH_COMPONENT24 : x.type === 1020 ? me = r.DEPTH24_STENCIL8 : me = r.DEPTH_COMPONENT16 : x.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), x.format === 1026 && me === r.DEPTH_COMPONENT && x.type !== 1012 && x.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), x.type = 1014, be = s.convert(x.type)), x.format === 1027 && me === r.DEPTH_COMPONENT && (me = r.DEPTH_STENCIL, x.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), x.type = 1020, be = s.convert(x.type))), Qe && (Ve ? t.texStorage2D(r.TEXTURE_2D, 1, me, j.width, j.height) : t.texImage2D(r.TEXTURE_2D, 0, me, j.width, j.height, 0, Ge, be, null)); else if (x.isDataTexture) if (Pe.length > 0 && Ye) { Ve && Qe && t.texStorage2D(r.TEXTURE_2D, Ke, me, Pe[0].width, Pe[0].height); for (let T = 0, ee = Pe.length; T < ee; T++)le = Pe[T], Ve ? He && t.texSubImage2D(r.TEXTURE_2D, T, 0, 0, le.width, le.height, Ge, be, le.data) : t.texImage2D(r.TEXTURE_2D, T, me, le.width, le.height, 0, Ge, be, le.data); x.generateMipmaps = !1 } else Ve ? (Qe && t.texStorage2D(r.TEXTURE_2D, Ke, me, j.width, j.height), He && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, j.width, j.height, Ge, be, j.data)) : t.texImage2D(r.TEXTURE_2D, 0, me, j.width, j.height, 0, Ge, be, j.data); else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) { Ve && Qe && t.texStorage3D(r.TEXTURE_2D_ARRAY, Ke, me, Pe[0].width, Pe[0].height, j.depth); for (let T = 0, ee = Pe.length; T < ee; T++)le = Pe[T], x.format !== 1023 ? Ge !== null ? Ve ? He && t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, T, 0, 0, 0, le.width, le.height, j.depth, Ge, le.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, T, me, le.width, le.height, j.depth, 0, le.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? He && t.texSubImage3D(r.TEXTURE_2D_ARRAY, T, 0, 0, 0, le.width, le.height, j.depth, Ge, be, le.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, T, me, le.width, le.height, j.depth, 0, Ge, be, le.data) } else { Ve && Qe && t.texStorage2D(r.TEXTURE_2D, Ke, me, Pe[0].width, Pe[0].height); for (let T = 0, ee = Pe.length; T < ee; T++)le = Pe[T], x.format !== 1023 ? Ge !== null ? Ve ? He && t.compressedTexSubImage2D(r.TEXTURE_2D, T, 0, 0, le.width, le.height, Ge, le.data) : t.compressedTexImage2D(r.TEXTURE_2D, T, me, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ve ? He && t.texSubImage2D(r.TEXTURE_2D, T, 0, 0, le.width, le.height, Ge, be, le.data) : t.texImage2D(r.TEXTURE_2D, T, me, le.width, le.height, 0, Ge, be, le.data) } else if (x.isDataArrayTexture) Ve ? (Qe && t.texStorage3D(r.TEXTURE_2D_ARRAY, Ke, me, j.width, j.height, j.depth), He && t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, Ge, be, j.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, me, j.width, j.height, j.depth, 0, Ge, be, j.data); else if (x.isData3DTexture) Ve ? (Qe && t.texStorage3D(r.TEXTURE_3D, Ke, me, j.width, j.height, j.depth), He && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, Ge, be, j.data)) : t.texImage3D(r.TEXTURE_3D, 0, me, j.width, j.height, j.depth, 0, Ge, be, j.data); else if (x.isFramebufferTexture) { if (Qe) if (Ve) t.texStorage2D(r.TEXTURE_2D, Ke, me, j.width, j.height); else { let T = j.width, ee = j.height; for (let te = 0; te < Ke; te++)t.texImage2D(r.TEXTURE_2D, te, me, T, ee, 0, Ge, be, null), T >>= 1, ee >>= 1 } } else if (Pe.length > 0 && Ye) { Ve && Qe && t.texStorage2D(r.TEXTURE_2D, Ke, me, Pe[0].width, Pe[0].height); for (let T = 0, ee = Pe.length; T < ee; T++)le = Pe[T], Ve ? He && t.texSubImage2D(r.TEXTURE_2D, T, 0, 0, Ge, be, le) : t.texImage2D(r.TEXTURE_2D, T, me, Ge, be, le); x.generateMipmaps = !1 } else Ve ? (Qe && t.texStorage2D(r.TEXTURE_2D, Ke, me, j.width, j.height), He && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Ge, be, j)) : t.texImage2D(r.TEXTURE_2D, 0, me, Ge, be, j); E(x, Ye) && _(Q), de.__version = J.version, x.onUpdate && x.onUpdate(x) } y.__version = x.version } function ae(y, x, N) { if (x.image.length !== 6) return; const Q = H(y, x), Y = x.source; t.bindTexture(r.TEXTURE_CUBE_MAP, y.__webglTexture, r.TEXTURE0 + N); const J = n.get(Y); if (Y.version !== J.__version || Q === !0) { t.activeTexture(r.TEXTURE0 + N); const de = je.getPrimaries(je.workingColorSpace), re = x.colorSpace === Dt ? null : je.getPrimaries(x.colorSpace), oe = x.colorSpace === Dt || de === re ? r.NONE : r.BROWSER_DEFAULT_WEBGL; r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, oe); const Se = x.isCompressedTexture || x.image[0].isCompressedTexture, Ie = x.image[0] && x.image[0].isDataTexture, j = []; for (let T = 0; T < 6; T++)!Se && !Ie ? j[T] = v(x.image[T], !1, !0, i.maxCubemapSize) : j[T] = Ie ? x.image[T].image : x.image[T], j[T] = Le(x, j[T]); const Ye = j[0], Ge = p(Ye) || o, be = s.convert(x.format, x.colorSpace), me = s.convert(x.type), le = b(x.internalFormat, be, me, x.colorSpace), Pe = o && x.isVideoTexture !== !0, Ve = J.__version === void 0 || Q === !0, Qe = Y.dataReady; let He = L(x, Ye, Ge); Te(r.TEXTURE_CUBE_MAP, x, Ge); let Ke; if (Se) { Pe && Ve && t.texStorage2D(r.TEXTURE_CUBE_MAP, He, le, Ye.width, Ye.height); for (let T = 0; T < 6; T++) { Ke = j[T].mipmaps; for (let ee = 0; ee < Ke.length; ee++) { const te = Ke[ee]; x.format !== 1023 ? be !== null ? Pe ? Qe && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee, 0, 0, te.width, te.height, be, te.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee, le, te.width, te.height, 0, te.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pe ? Qe && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee, 0, 0, te.width, te.height, be, me, te.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee, le, te.width, te.height, 0, be, me, te.data) } } } else { Ke = x.mipmaps, Pe && Ve && (Ke.length > 0 && He++, t.texStorage2D(r.TEXTURE_CUBE_MAP, He, le, j[0].width, j[0].height)); for (let T = 0; T < 6; T++)if (Ie) { Pe ? Qe && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, 0, 0, j[T].width, j[T].height, be, me, j[T].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, le, j[T].width, j[T].height, 0, be, me, j[T].data); for (let ee = 0; ee < Ke.length; ee++) { const he = Ke[ee].image[T].image; Pe ? Qe && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee + 1, 0, 0, he.width, he.height, be, me, he.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee + 1, le, he.width, he.height, 0, be, me, he.data) } } else { Pe ? Qe && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, 0, 0, be, me, j[T]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, le, be, me, j[T]); for (let ee = 0; ee < Ke.length; ee++) { const te = Ke[ee]; Pe ? Qe && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee + 1, 0, 0, be, me, te.image[T]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + T, ee + 1, le, be, me, te.image[T]) } } } E(x, Ge) && _(r.TEXTURE_CUBE_MAP), J.__version = Y.version, x.onUpdate && x.onUpdate(x) } y.__version = x.version } function ve(y, x, N, Q, Y, J) { const de = s.convert(N.format, N.colorSpace), re = s.convert(N.type), oe = b(N.internalFormat, de, re, N.colorSpace); if (!n.get(x).__hasExternalTextures) { const Ie = Math.max(1, x.width >> J), j = Math.max(1, x.height >> J); Y === r.TEXTURE_3D || Y === r.TEXTURE_2D_ARRAY ? t.texImage3D(Y, J, oe, Ie, j, x.depth, 0, de, re, null) : t.texImage2D(Y, J, oe, Ie, j, 0, de, re, null) } t.bindFramebuffer(r.FRAMEBUFFER, y), pe(x) ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Q, Y, n.get(N).__webglTexture, 0, Ae(x)) : (Y === r.TEXTURE_2D || Y >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Q, Y, n.get(N).__webglTexture, J), t.bindFramebuffer(r.FRAMEBUFFER, null) } function xe(y, x, N) { if (r.bindRenderbuffer(r.RENDERBUFFER, y), x.depthBuffer && !x.stencilBuffer) { let Q = o === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16; if (N || pe(x)) { const Y = x.depthTexture; Y && Y.isDepthTexture && (Y.type === 1015 ? Q = r.DEPTH_COMPONENT32F : Y.type === 1014 && (Q = r.DEPTH_COMPONENT24)); const J = Ae(x); pe(x) ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, J, Q, x.width, x.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, J, Q, x.width, x.height) } else r.renderbufferStorage(r.RENDERBUFFER, Q, x.width, x.height); r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, y) } else if (x.depthBuffer && x.stencilBuffer) { const Q = Ae(x); N && pe(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, x.width, x.height) : pe(x) ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Q, r.DEPTH24_STENCIL8, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, x.width, x.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, y) } else { const Q = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture]; for (let Y = 0; Y < Q.length; Y++) { const J = Q[Y], de = s.convert(J.format, J.colorSpace), re = s.convert(J.type), oe = b(J.internalFormat, de, re, J.colorSpace), Se = Ae(x); N && pe(x) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Se, oe, x.width, x.height) : pe(x) ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Se, oe, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, oe, x.width, x.height) } } r.bindRenderbuffer(r.RENDERBUFFER, null) } function ue(y, x) { if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(r.FRAMEBUFFER, y), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), G(x.depthTexture, 0); const Q = n.get(x.depthTexture).__webglTexture, Y = Ae(x); if (x.depthTexture.format === 1026) pe(x) ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0, Y) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Q, 0); else if (x.depthTexture.format === 1027) pe(x) ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0, Y) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Q, 0); else throw new Error("Unknown depthTexture format") } function ke(y) { const x = n.get(y), N = y.isWebGLCubeRenderTarget === !0; if (y.depthTexture && !x.__autoAllocateDepthBuffer) { if (N) throw new Error("target.depthTexture not supported in Cube render targets"); ue(x.__webglFramebuffer, y) } else if (N) { x.__webglDepthbuffer = []; for (let Q = 0; Q < 6; Q++)t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer[Q]), x.__webglDepthbuffer[Q] = r.createRenderbuffer(), xe(x.__webglDepthbuffer[Q], y, !1) } else t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer = r.createRenderbuffer(), xe(x.__webglDepthbuffer, y, !1); t.bindFramebuffer(r.FRAMEBUFFER, null) } function we(y, x, N) { const Q = n.get(y); x !== void 0 && ve(Q.__webglFramebuffer, y, y.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), N !== void 0 && ke(y) } function I(y) { const x = y.texture, N = n.get(y), Q = n.get(x); y.addEventListener("dispose", z), y.isWebGLMultipleRenderTargets !== !0 && (Q.__webglTexture === void 0 && (Q.__webglTexture = r.createTexture()), Q.__version = x.version, a.memory.textures++); const Y = y.isWebGLCubeRenderTarget === !0, J = y.isWebGLMultipleRenderTargets === !0, de = p(y) || o; if (Y) { N.__webglFramebuffer = []; for (let re = 0; re < 6; re++)if (o && x.mipmaps && x.mipmaps.length > 0) { N.__webglFramebuffer[re] = []; for (let oe = 0; oe < x.mipmaps.length; oe++)N.__webglFramebuffer[re][oe] = r.createFramebuffer() } else N.__webglFramebuffer[re] = r.createFramebuffer() } else { if (o && x.mipmaps && x.mipmaps.length > 0) { N.__webglFramebuffer = []; for (let re = 0; re < x.mipmaps.length; re++)N.__webglFramebuffer[re] = r.createFramebuffer() } else N.__webglFramebuffer = r.createFramebuffer(); if (J) if (i.drawBuffers) { const re = y.texture; for (let oe = 0, Se = re.length; oe < Se; oe++) { const Ie = n.get(re[oe]); Ie.__webglTexture === void 0 && (Ie.__webglTexture = r.createTexture(), a.memory.textures++) } } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."); if (o && y.samples > 0 && pe(y) === !1) { const re = J ? x : [x]; N.__webglMultisampledFramebuffer = r.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, N.__webglMultisampledFramebuffer); for (let oe = 0; oe < re.length; oe++) { const Se = re[oe]; N.__webglColorRenderbuffer[oe] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, N.__webglColorRenderbuffer[oe]); const Ie = s.convert(Se.format, Se.colorSpace), j = s.convert(Se.type), Ye = b(Se.internalFormat, Ie, j, Se.colorSpace, y.isXRRenderTarget === !0), Ge = Ae(y); r.renderbufferStorageMultisample(r.RENDERBUFFER, Ge, Ye, y.width, y.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + oe, r.RENDERBUFFER, N.__webglColorRenderbuffer[oe]) } r.bindRenderbuffer(r.RENDERBUFFER, null), y.depthBuffer && (N.__webglDepthRenderbuffer = r.createRenderbuffer(), xe(N.__webglDepthRenderbuffer, y, !0)), t.bindFramebuffer(r.FRAMEBUFFER, null) } } if (Y) { t.bindTexture(r.TEXTURE_CUBE_MAP, Q.__webglTexture), Te(r.TEXTURE_CUBE_MAP, x, de); for (let re = 0; re < 6; re++)if (o && x.mipmaps && x.mipmaps.length > 0) for (let oe = 0; oe < x.mipmaps.length; oe++)ve(N.__webglFramebuffer[re][oe], y, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, oe); else ve(N.__webglFramebuffer[re], y, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0); E(x, de) && _(r.TEXTURE_CUBE_MAP), t.unbindTexture() } else if (J) { const re = y.texture; for (let oe = 0, Se = re.length; oe < Se; oe++) { const Ie = re[oe], j = n.get(Ie); t.bindTexture(r.TEXTURE_2D, j.__webglTexture), Te(r.TEXTURE_2D, Ie, de), ve(N.__webglFramebuffer, y, Ie, r.COLOR_ATTACHMENT0 + oe, r.TEXTURE_2D, 0), E(Ie, de) && _(r.TEXTURE_2D) } t.unbindTexture() } else { let re = r.TEXTURE_2D; if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (o ? re = y.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(re, Q.__webglTexture), Te(re, x, de), o && x.mipmaps && x.mipmaps.length > 0) for (let oe = 0; oe < x.mipmaps.length; oe++)ve(N.__webglFramebuffer[oe], y, x, r.COLOR_ATTACHMENT0, re, oe); else ve(N.__webglFramebuffer, y, x, r.COLOR_ATTACHMENT0, re, 0); E(x, de) && _(re), t.unbindTexture() } y.depthBuffer && ke(y) } function ft(y) { const x = p(y) || o, N = y.isWebGLMultipleRenderTargets === !0 ? y.texture : [y.texture]; for (let Q = 0, Y = N.length; Q < Y; Q++) { const J = N[Q]; if (E(J, x)) { const de = y.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D, re = n.get(J).__webglTexture; t.bindTexture(de, re), _(de), t.unbindTexture() } } } function ge(y) { if (o && y.samples > 0 && pe(y) === !1) { const x = y.isWebGLMultipleRenderTargets ? y.texture : [y.texture], N = y.width, Q = y.height; let Y = r.COLOR_BUFFER_BIT; const J = [], de = y.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, re = n.get(y), oe = y.isWebGLMultipleRenderTargets === !0; if (oe) for (let Se = 0; Se < x.length; Se++)t.bindFramebuffer(r.FRAMEBUFFER, re.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, re.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.TEXTURE_2D, null, 0); t.bindFramebuffer(r.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, re.__webglFramebuffer); for (let Se = 0; Se < x.length; Se++) { J.push(r.COLOR_ATTACHMENT0 + Se), y.depthBuffer && J.push(de); const Ie = re.__ignoreDepthValues !== void 0 ? re.__ignoreDepthValues : !1; if (Ie === !1 && (y.depthBuffer && (Y |= r.DEPTH_BUFFER_BIT), y.stencilBuffer && (Y |= r.STENCIL_BUFFER_BIT)), oe && r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, re.__webglColorRenderbuffer[Se]), Ie === !0 && (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [de]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [de])), oe) { const j = n.get(x[Se]).__webglTexture; r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, j, 0) } r.blitFramebuffer(0, 0, N, Q, 0, 0, N, Q, Y, r.NEAREST), c && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, J) } if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), oe) for (let Se = 0; Se < x.length; Se++) { t.bindFramebuffer(r.FRAMEBUFFER, re.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.RENDERBUFFER, re.__webglColorRenderbuffer[Se]); const Ie = n.get(x[Se]).__webglTexture; t.bindFramebuffer(r.FRAMEBUFFER, re.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + Se, r.TEXTURE_2D, Ie, 0) } t.bindFramebuffer(r.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer) } } function Ae(y) { return Math.min(i.maxSamples, y.samples) } function pe(y) { const x = n.get(y); return o && y.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1 } function tt(y) { const x = a.render.frame; h.get(y) !== x && (h.set(y, x), y.update()) } function Le(y, x) { const N = y.colorSpace, Q = y.format, Y = y.type; return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || y.format === 1035 || N !== en && N !== Dt && (je.getTransfer(N) === et ? o === !1 ? e.has("EXT_sRGB") === !0 && Q === 1023 ? (y.format = 1035, y.minFilter = 1006, y.generateMipmaps = !1) : x = Ca.sRGBToLinear(x) : (Q !== 1023 || Y !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), x } this.allocateTextureUnit = C, this.resetTextureUnits = q, this.setTexture2D = G, this.setTexture2DArray = X, this.setTexture3D = k, this.setTextureCube = V, this.rebindTextures = we, this.setupRenderTarget = I, this.updateRenderTargetMipmap = ft, this.updateMultisampleRenderTarget = ge, this.setupDepthRenderbuffer = ke, this.setupFrameBufferTexture = ve, this.useMultisampledRTT = pe } function Td(r, e, t) { const n = t.isWebGL2; function i(s, a = Dt) { let o; const l = je.getTransfer(a); if (s === 1009) return r.UNSIGNED_BYTE; if (s === 1017) return r.UNSIGNED_SHORT_4_4_4_4; if (s === 1018) return r.UNSIGNED_SHORT_5_5_5_1; if (s === 1010) return r.BYTE; if (s === 1011) return r.SHORT; if (s === 1012) return r.UNSIGNED_SHORT; if (s === 1013) return r.INT; if (s === 1014) return r.UNSIGNED_INT; if (s === 1015) return r.FLOAT; if (s === 1016) return n ? r.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null); if (s === 1021) return r.ALPHA; if (s === 1023) return r.RGBA; if (s === 1024) return r.LUMINANCE; if (s === 1025) return r.LUMINANCE_ALPHA; if (s === 1026) return r.DEPTH_COMPONENT; if (s === 1027) return r.DEPTH_STENCIL; if (s === 1035) return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null; if (s === 1028) return r.RED; if (s === 1029) return r.RED_INTEGER; if (s === 1030) return r.RG; if (s === 1031) return r.RG_INTEGER; if (s === 1033) return r.RGBA_INTEGER; if (s === 33776 || s === 33777 || s === 33778 || s === 33779) if (l === et) if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) { if (s === 33776) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (s === 33777) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (s === 33778) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (s === 33779) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) { if (s === 33776) return o.COMPRESSED_RGB_S3TC_DXT1_EXT; if (s === 33777) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (s === 33778) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (s === 33779) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (s === 35840 || s === 35841 || s === 35842 || s === 35843) if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) { if (s === 35840) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (s === 35841) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (s === 35842) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (s === 35843) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (s === 36196) return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null; if (s === 37492 || s === 37496) if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) { if (s === 37492) return l === et ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2; if (s === 37496) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821) if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) { if (s === 37808) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR; if (s === 37809) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR; if (s === 37810) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR; if (s === 37811) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR; if (s === 37812) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR; if (s === 37813) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR; if (s === 37814) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR; if (s === 37815) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR; if (s === 37816) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR; if (s === 37817) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR; if (s === 37818) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR; if (s === 37819) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR; if (s === 37820) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR; if (s === 37821) return l === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (s === 36492 || s === 36494 || s === 36495) if (o = e.get("EXT_texture_compression_bptc"), o !== null) { if (s === 36492) return l === et ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (s === 36494) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (s === 36495) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (s === 36283 || s === 36284 || s === 36285 || s === 36286) if (o = e.get("EXT_texture_compression_rgtc"), o !== null) { if (s === 36492) return o.COMPRESSED_RED_RGTC1_EXT; if (s === 36284) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (s === 36285) return o.COMPRESSED_RED_GREEN_RGTC2_EXT; if (s === 36286) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return s === 1020 ? n ? r.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : r[s] !== void 0 ? r[s] : null } return { convert: i } } class Ad extends Et { constructor(e = []) { super(), this.isArrayCamera = !0, this.cameras = e } } class bn extends it { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const bd = { type: "move" }; class Ir { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new bn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new bn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new P, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new P), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new bn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new P, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new P), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } connect(e) { if (e && e.hand) { const t = this._hand; if (t) for (const n of e.hand.values()) this._getHandJoint(t, n) } return this.dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let i = null, s = null, a = null; const o = this._targetRay, l = this._grip, c = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (c && e.hand) { a = !0; for (const v of e.hand.values()) { const p = t.getJointPose(v, n), f = this._getHandJoint(c, v); p !== null && (f.matrix.fromArray(p.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = p.radius), f.visible = p !== null } const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), m = .02, g = .005; c.inputState.pinching && d > m + g ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= m - g && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = !1)); o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(bd))) } return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this } _getHandJoint(e, t) { if (e.joints[t.jointName] === void 0) { const n = new bn; n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n) } return e.joints[t.jointName] } } const Rd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, wd = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`; class Cd { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(e, t, n) { if (this.texture === null) { const i = new dt, s = e.properties.get(i); s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i } } render(e, t) { if (this.texture !== null) { if (this.mesh === null) { const n = t.cameras[0].viewport, i = new un({ extensions: { fragDepth: !0 }, vertexShader: Rd, fragmentShader: wd, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: n.z }, depthHeight: { value: n.w } } }); this.mesh = new Rt(new rr(20, 20), i) } e.render(this.mesh, t) } } reset() { this.texture = null, this.mesh = null } } class Ld extends Qn { constructor(e, t) { super(); const n = this; let i = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, m = null, g = null; const v = new Cd, p = t.getContextAttributes(); let f = null, E = null; const _ = [], b = [], L = new Oe; let w = null; const R = new Et; R.layers.enable(1), R.viewport = new Ze; const z = new Et; z.layers.enable(2), z.viewport = new Ze; const ne = [R, z], M = new Ad; M.layers.enable(1), M.layers.enable(2); let A = null, W = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (H) { let K = _[H]; return K === void 0 && (K = new Ir, _[H] = K), K.getTargetRaySpace() }, this.getControllerGrip = function (H) { let K = _[H]; return K === void 0 && (K = new Ir, _[H] = K), K.getGripSpace() }, this.getHand = function (H) { let K = _[H]; return K === void 0 && (K = new Ir, _[H] = K), K.getHandSpace() }; function q(H) { const K = b.indexOf(H.inputSource); if (K === -1) return; const ae = _[K]; ae !== void 0 && (ae.update(H.inputSource, H.frame, c || a), ae.dispatchEvent({ type: H.type, data: H.inputSource })) } function C() { i.removeEventListener("select", q), i.removeEventListener("selectstart", q), i.removeEventListener("selectend", q), i.removeEventListener("squeeze", q), i.removeEventListener("squeezestart", q), i.removeEventListener("squeezeend", q), i.removeEventListener("end", C), i.removeEventListener("inputsourceschange", O); for (let H = 0; H < _.length; H++) { const K = b[H]; K !== null && (b[H] = null, _[H].disconnect(K)) } A = null, W = null, v.reset(), e.setRenderTarget(f), m = null, d = null, u = null, i = null, E = null, Te.stop(), n.isPresenting = !1, e.setPixelRatio(w), e.setSize(L.width, L.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (H) { s = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (H) { o = H, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return c || a }, this.setReferenceSpace = function (H) { c = H }, this.getBaseLayer = function () { return d !== null ? d : m }, this.getBinding = function () { return u }, this.getFrame = function () { return g }, this.getSession = function () { return i }, this.setSession = async function (H) { if (i = H, i !== null) { if (f = e.getRenderTarget(), i.addEventListener("select", q), i.addEventListener("selectstart", q), i.addEventListener("selectend", q), i.addEventListener("squeeze", q), i.addEventListener("squeezestart", q), i.addEventListener("squeezeend", q), i.addEventListener("end", C), i.addEventListener("inputsourceschange", O), p.xrCompatible !== !0 && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(L), i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) { const K = { antialias: i.renderState.layers === void 0 ? p.antialias : !0, alpha: !0, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: s }; m = new XRWebGLLayer(i, t, K), i.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), E = new Cn(m.framebufferWidth, m.framebufferHeight, { format: 1023, type: 1009, colorSpace: e.outputColorSpace, stencilBuffer: p.stencil }) } else { let K = null, ae = null, ve = null; p.depth && (ve = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, K = p.stencil ? 1027 : 1026, ae = p.stencil ? 1020 : 1014); const xe = { colorFormat: t.RGBA8, depthFormat: ve, scaleFactor: s }; u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(xe), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), E = new Cn(d.textureWidth, d.textureHeight, { format: 1023, type: 1009, depthTexture: new Ga(d.textureWidth, d.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, K), stencilBuffer: p.stencil, colorSpace: e.outputColorSpace, samples: p.antialias ? 4 : 0 }); const ue = e.properties.get(E); ue.__ignoreDepthValues = d.ignoreDepthValues } E.isXRRenderTarget = !0, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), Te.setContext(i), Te.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (i !== null) return i.environmentBlendMode }; function O(H) { for (let K = 0; K < H.removed.length; K++) { const ae = H.removed[K], ve = b.indexOf(ae); ve >= 0 && (b[ve] = null, _[ve].disconnect(ae)) } for (let K = 0; K < H.added.length; K++) { const ae = H.added[K]; let ve = b.indexOf(ae); if (ve === -1) { for (let ue = 0; ue < _.length; ue++)if (ue >= b.length) { b.push(ae), ve = ue; break } else if (b[ue] === null) { b[ue] = ae, ve = ue; break } if (ve === -1) break } const xe = _[ve]; xe && xe.connect(ae) } } const G = new P, X = new P; function k(H, K, ae) { G.setFromMatrixPosition(K.matrixWorld), X.setFromMatrixPosition(ae.matrixWorld); const ve = G.distanceTo(X), xe = K.projectionMatrix.elements, ue = ae.projectionMatrix.elements, ke = xe[14] / (xe[10] - 1), we = xe[14] / (xe[10] + 1), I = (xe[9] + 1) / xe[5], ft = (xe[9] - 1) / xe[5], ge = (xe[8] - 1) / xe[0], Ae = (ue[8] + 1) / ue[0], pe = ke * ge, tt = ke * Ae, Le = ve / (-ge + Ae), y = Le * -ge; K.matrixWorld.decompose(H.position, H.quaternion, H.scale), H.translateX(y), H.translateZ(Le), H.matrixWorld.compose(H.position, H.quaternion, H.scale), H.matrixWorldInverse.copy(H.matrixWorld).invert(); const x = ke + Le, N = we + Le, Q = pe - y, Y = tt + (ve - y), J = I * we / N * x, de = ft * we / N * x; H.projectionMatrix.makePerspective(Q, Y, J, de, x, N), H.projectionMatrixInverse.copy(H.projectionMatrix).invert() } function V(H, K) { K === null ? H.matrixWorld.copy(H.matrix) : H.matrixWorld.multiplyMatrices(K.matrixWorld, H.matrix), H.matrixWorldInverse.copy(H.matrixWorld).invert() } this.updateCamera = function (H) { if (i === null) return; v.texture !== null && (H.near = v.depthNear, H.far = v.depthFar), M.near = z.near = R.near = H.near, M.far = z.far = R.far = H.far, (A !== M.near || W !== M.far) && (i.updateRenderState({ depthNear: M.near, depthFar: M.far }), A = M.near, W = M.far, R.near = A, R.far = W, z.near = A, z.far = W, R.updateProjectionMatrix(), z.updateProjectionMatrix(), H.updateProjectionMatrix()); const K = H.parent, ae = M.cameras; V(M, K); for (let ve = 0; ve < ae.length; ve++)V(ae[ve], K); ae.length === 2 ? k(M, R, z) : M.projectionMatrix.copy(R.projectionMatrix), Z(H, M, K) }; function Z(H, K, ae) { ae === null ? H.matrix.copy(K.matrixWorld) : (H.matrix.copy(ae.matrixWorld), H.matrix.invert(), H.matrix.multiply(K.matrixWorld)), H.matrix.decompose(H.position, H.quaternion, H.scale), H.updateMatrixWorld(!0), H.projectionMatrix.copy(K.projectionMatrix), H.projectionMatrixInverse.copy(K.projectionMatrixInverse), H.isPerspectiveCamera && (H.fov = $n * 2 * Math.atan(1 / H.projectionMatrix.elements[5]), H.zoom = 1) } this.getCamera = function () { return M }, this.getFoveation = function () { if (!(d === null && m === null)) return l }, this.setFoveation = function (H) { l = H, d !== null && (d.fixedFoveation = H), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = H) }, this.hasDepthSensing = function () { return v.texture !== null }; let $ = null; function ce(H, K) { if (h = K.getViewerPose(c || a), g = K, h !== null) { const ae = h.views; m !== null && (e.setRenderTargetFramebuffer(E, m.framebuffer), e.setRenderTarget(E)); let ve = !1; ae.length !== M.cameras.length && (M.cameras.length = 0, ve = !0); for (let ue = 0; ue < ae.length; ue++) { const ke = ae[ue]; let we = null; if (m !== null) we = m.getViewport(ke); else { const ft = u.getViewSubImage(d, ke); we = ft.viewport, ue === 0 && (e.setRenderTargetTextures(E, ft.colorTexture, d.ignoreDepthValues ? void 0 : ft.depthStencilTexture), e.setRenderTarget(E)) } let I = ne[ue]; I === void 0 && (I = new Et, I.layers.enable(ue), I.viewport = new Ze, ne[ue] = I), I.matrix.fromArray(ke.transform.matrix), I.matrix.decompose(I.position, I.quaternion, I.scale), I.projectionMatrix.fromArray(ke.projectionMatrix), I.projectionMatrixInverse.copy(I.projectionMatrix).invert(), I.viewport.set(we.x, we.y, we.width, we.height), ue === 0 && (M.matrix.copy(I.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), ve === !0 && M.cameras.push(I) } const xe = i.enabledFeatures; if (xe && xe.includes("depth-sensing")) { const ue = u.getDepthInformation(ae[0]); ue && ue.isValid && ue.texture && v.init(e, ue, i.renderState) } } for (let ae = 0; ae < _.length; ae++) { const ve = b[ae], xe = _[ae]; ve !== null && xe !== void 0 && xe.update(ve, K, c || a) } v.render(e, M), $ && $(H, K), K.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: K }), g = null } const Te = new Ba; Te.setAnimationLoop(ce), this.setAnimationLoop = function (H) { $ = H }, this.dispose = function () { } } } function Pd(r, e) { function t(p, f) { p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix) } function n(p, f) { f.color.getRGB(p.fogColor.value, Fa(r)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density) } function i(p, f, E, _, b) { f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(p, f) : f.isMeshToonMaterial ? (s(p, f), u(p, f)) : f.isMeshPhongMaterial ? (s(p, f), h(p, f)) : f.isMeshStandardMaterial ? (s(p, f), d(p, f), f.isMeshPhysicalMaterial && m(p, f, b)) : f.isMeshMatcapMaterial ? (s(p, f), g(p, f)) : f.isMeshDepthMaterial ? s(p, f) : f.isMeshDistanceMaterial ? (s(p, f), v(p, f)) : f.isMeshNormalMaterial ? s(p, f) : f.isLineBasicMaterial ? (a(p, f), f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? l(p, f, E, _) : f.isSpriteMaterial ? c(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1) } function s(p, f) { p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.bumpMap && (p.bumpMap.value = f.bumpMap, t(f.bumpMap, p.bumpMapTransform), p.bumpScale.value = f.bumpScale, f.side === 1 && (p.bumpScale.value *= -1)), f.normalMap && (p.normalMap.value = f.normalMap, t(f.normalMap, p.normalMapTransform), p.normalScale.value.copy(f.normalScale), f.side === 1 && p.normalScale.value.negate()), f.displacementMap && (p.displacementMap.value = f.displacementMap, t(f.displacementMap, p.displacementMapTransform), p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, p.emissiveMapTransform)), f.specularMap && (p.specularMap.value = f.specularMap, t(f.specularMap, p.specularMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest); const E = e.get(f).envMap; if (E && (p.envMap.value = E, p.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) { p.lightMap.value = f.lightMap; const _ = r._useLegacyLights === !0 ? Math.PI : 1; p.lightMapIntensity.value = f.lightMapIntensity * _, t(f.lightMap, p.lightMapTransform) } f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, p.aoMapTransform)) } function a(p, f) { p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, f.map && (p.map.value = f.map, t(f.map, p.mapTransform)) } function o(p, f) { p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale } function l(p, f, E, _) { p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * E, p.scale.value = _ * .5, f.map && (p.map.value = f.map, t(f.map, p.uvTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest) } function c(p, f) { p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest) } function h(p, f) { p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4) } function u(p, f) { f.gradientMap && (p.gradientMap.value = f.gradientMap) } function d(p, f) { p.metalness.value = f.metalness, f.metalnessMap && (p.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, p.metalnessMapTransform)), p.roughness.value = f.roughness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, p.roughnessMapTransform)), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity) } function m(p, f, E) { p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, p.sheenColorMapTransform)), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, p.clearcoatMapTransform)), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (p.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === 1 && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, p.iridescenceMapTransform)), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = E.texture, p.transmissionSamplerSize.value.set(E.width, E.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, p.transmissionMapTransform)), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (p.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (p.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, p.specularColorMapTransform)), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, p.specularIntensityMapTransform)) } function g(p, f) { f.matcap && (p.matcap.value = f.matcap) } function v(p, f) { const E = e.get(f).light; p.referencePosition.value.setFromMatrixPosition(E.matrixWorld), p.nearDistance.value = E.shadow.camera.near, p.farDistance.value = E.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: i } } function Dd(r, e, t, n) { let i = {}, s = {}, a = []; const o = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0; function l(E, _) { const b = _.program; n.uniformBlockBinding(E, b) } function c(E, _) { let b = i[E.id]; b === void 0 && (g(E), b = h(E), i[E.id] = b, E.addEventListener("dispose", p)); const L = _.program; n.updateUBOMapping(E, L); const w = e.render.frame; s[E.id] !== w && (d(E), s[E.id] = w) } function h(E) { const _ = u(); E.__bindingPointIndex = _; const b = r.createBuffer(), L = E.__size, w = E.usage; return r.bindBuffer(r.UNIFORM_BUFFER, b), r.bufferData(r.UNIFORM_BUFFER, L, w), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, _, b), b } function u() { for (let E = 0; E < o; E++)if (a.indexOf(E) === -1) return a.push(E), E; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function d(E) { const _ = i[E.id], b = E.uniforms, L = E.__cache; r.bindBuffer(r.UNIFORM_BUFFER, _); for (let w = 0, R = b.length; w < R; w++) { const z = Array.isArray(b[w]) ? b[w] : [b[w]]; for (let ne = 0, M = z.length; ne < M; ne++) { const A = z[ne]; if (m(A, w, ne, L) === !0) { const W = A.__offset, q = Array.isArray(A.value) ? A.value : [A.value]; let C = 0; for (let O = 0; O < q.length; O++) { const G = q[O], X = v(G); typeof G == "number" || typeof G == "boolean" ? (A.__data[0] = G, r.bufferSubData(r.UNIFORM_BUFFER, W + C, A.__data)) : G.isMatrix3 ? (A.__data[0] = G.elements[0], A.__data[1] = G.elements[1], A.__data[2] = G.elements[2], A.__data[3] = 0, A.__data[4] = G.elements[3], A.__data[5] = G.elements[4], A.__data[6] = G.elements[5], A.__data[7] = 0, A.__data[8] = G.elements[6], A.__data[9] = G.elements[7], A.__data[10] = G.elements[8], A.__data[11] = 0) : (G.toArray(A.__data, C), C += X.storage / Float32Array.BYTES_PER_ELEMENT) } r.bufferSubData(r.UNIFORM_BUFFER, W, A.__data) } } } r.bindBuffer(r.UNIFORM_BUFFER, null) } function m(E, _, b, L) { const w = E.value, R = _ + "_" + b; if (L[R] === void 0) return typeof w == "number" || typeof w == "boolean" ? L[R] = w : L[R] = w.clone(), !0; { const z = L[R]; if (typeof w == "number" || typeof w == "boolean") { if (z !== w) return L[R] = w, !0 } else if (z.equals(w) === !1) return z.copy(w), !0 } return !1 } function g(E) { const _ = E.uniforms; let b = 0; const L = 16; for (let R = 0, z = _.length; R < z; R++) { const ne = Array.isArray(_[R]) ? _[R] : [_[R]]; for (let M = 0, A = ne.length; M < A; M++) { const W = ne[M], q = Array.isArray(W.value) ? W.value : [W.value]; for (let C = 0, O = q.length; C < O; C++) { const G = q[C], X = v(G), k = b % L; k !== 0 && L - k < X.boundary && (b += L - k), W.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), W.__offset = b, b += X.storage } } } const w = b % L; return w > 0 && (b += L - w), E.__size = b, E.__cache = {}, this } function v(E) { const _ = { boundary: 0, storage: 0 }; return typeof E == "number" || typeof E == "boolean" ? (_.boundary = 4, _.storage = 4) : E.isVector2 ? (_.boundary = 8, _.storage = 8) : E.isVector3 || E.isColor ? (_.boundary = 16, _.storage = 12) : E.isVector4 ? (_.boundary = 16, _.storage = 16) : E.isMatrix3 ? (_.boundary = 48, _.storage = 48) : E.isMatrix4 ? (_.boundary = 64, _.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), _ } function p(E) { const _ = E.target; _.removeEventListener("dispose", p); const b = a.indexOf(_.__bindingPointIndex); a.splice(b, 1), r.deleteBuffer(i[_.id]), delete i[_.id], delete s[_.id] } function f() { for (const E in i) r.deleteBuffer(i[E]); a = [], i = {}, s = {} } return { bind: l, update: c, dispose: f } } class Id { constructor(e = {}) { const { canvas: t = Ao(), context: n = null, depth: i = !0, stencil: s = !0, alpha: a = !1, antialias: o = !1, premultipliedAlpha: l = !0, preserveDrawingBuffer: c = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = !1 } = e; this.isWebGLRenderer = !0; let d; n !== null ? d = n.getContextAttributes().alpha : d = a; const m = new Uint32Array(4), g = new Int32Array(4); let v = null, p = null; const f = [], E = []; this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ut, this._useLegacyLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1; const _ = this; let b = !1, L = 0, w = 0, R = null, z = -1, ne = null; const M = new Ze, A = new Ze; let W = null; const q = new ye(0); let C = 0, O = t.width, G = t.height, X = 1, k = null, V = null; const Z = new Ze(0, 0, O, G), $ = new Ze(0, 0, O, G); let ce = !1; const Te = new $r; let H = !1, K = !1, ae = null; const ve = new Be, xe = new Oe, ue = new P, ke = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; function we() { return R === null ? X : 1 } let I = n; function ft(S, D) { for (let F = 0; F < S.length; F++) { const B = S[F], U = t.getContext(B, D); if (U !== null) return U } return null } try { const S = { alpha: !0, depth: i, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u }; if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${er}`), t.addEventListener("webglcontextlost", Ke, !1), t.addEventListener("webglcontextrestored", T, !1), t.addEventListener("webglcontextcreationerror", ee, !1), I === null) { const D = ["webgl2", "webgl", "experimental-webgl"]; if (_.isWebGL1Renderer === !0 && D.shift(), I = ft(D, S), I === null) throw ft(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } typeof WebGLRenderingContext < "u" && I instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), I.getShaderPrecisionFormat === void 0 && (I.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (S) { throw console.error("THREE.WebGLRenderer: " + S.message), S } let ge, Ae, pe, tt, Le, y, x, N, Q, Y, J, de, re, oe, Se, Ie, j, Ye, Ge, be, me, le, Pe, Ve; function Qe() { ge = new Gh(I), Ae = new Ih(I, ge, e), ge.init(Ae), le = new Td(I, ge, Ae), pe = new yd(I, ge, Ae), tt = new kh(I), Le = new ld, y = new Ed(I, ge, pe, Le, Ae, le, tt), x = new Uh(_), N = new Bh(_), Q = new Zo(I, Ae), Pe = new Ph(I, ge, Q, Ae), Y = new Hh(I, Q, tt, Pe), J = new qh(I, Y, Q, tt), Ge = new Xh(I, Ae, y), Ie = new Nh(Le), de = new od(_, x, N, ge, Ae, Pe, Ie), re = new Pd(_, Le), oe = new hd, Se = new gd(ge, Ae), Ye = new Lh(_, x, N, pe, J, d, l), j = new Sd(_, J, Ae), Ve = new Dd(I, tt, Ae, pe), be = new Dh(I, ge, tt, Ae), me = new zh(I, ge, tt, Ae), tt.programs = de.programs, _.capabilities = Ae, _.extensions = ge, _.properties = Le, _.renderLists = oe, _.shadowMap = j, _.state = pe, _.info = tt } Qe(); const He = new Ld(_, I); this.xr = He, this.getContext = function () { return I }, this.getContextAttributes = function () { return I.getContextAttributes() }, this.forceContextLoss = function () { const S = ge.get("WEBGL_lose_context"); S && S.loseContext() }, this.forceContextRestore = function () { const S = ge.get("WEBGL_lose_context"); S && S.restoreContext() }, this.getPixelRatio = function () { return X }, this.setPixelRatio = function (S) { S !== void 0 && (X = S, this.setSize(O, G, !1)) }, this.getSize = function (S) { return S.set(O, G) }, this.setSize = function (S, D, F = !0) { if (He.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } O = S, G = D, t.width = Math.floor(S * X), t.height = Math.floor(D * X), F === !0 && (t.style.width = S + "px", t.style.height = D + "px"), this.setViewport(0, 0, S, D) }, this.getDrawingBufferSize = function (S) { return S.set(O * X, G * X).floor() }, this.setDrawingBufferSize = function (S, D, F) { O = S, G = D, X = F, t.width = Math.floor(S * F), t.height = Math.floor(D * F), this.setViewport(0, 0, S, D) }, this.getCurrentViewport = function (S) { return S.copy(M) }, this.getViewport = function (S) { return S.copy(Z) }, this.setViewport = function (S, D, F, B) { S.isVector4 ? Z.set(S.x, S.y, S.z, S.w) : Z.set(S, D, F, B), pe.viewport(M.copy(Z).multiplyScalar(X).floor()) }, this.getScissor = function (S) { return S.copy($) }, this.setScissor = function (S, D, F, B) { S.isVector4 ? $.set(S.x, S.y, S.z, S.w) : $.set(S, D, F, B), pe.scissor(A.copy($).multiplyScalar(X).floor()) }, this.getScissorTest = function () { return ce }, this.setScissorTest = function (S) { pe.setScissorTest(ce = S) }, this.setOpaqueSort = function (S) { k = S }, this.setTransparentSort = function (S) { V = S }, this.getClearColor = function (S) { return S.copy(Ye.getClearColor()) }, this.setClearColor = function () { Ye.setClearColor.apply(Ye, arguments) }, this.getClearAlpha = function () { return Ye.getClearAlpha() }, this.setClearAlpha = function () { Ye.setClearAlpha.apply(Ye, arguments) }, this.clear = function (S = !0, D = !0, F = !0) { let B = 0; if (S) { let U = !1; if (R !== null) { const se = R.texture.format; U = se === 1033 || se === 1031 || se === 1029 } if (U) { const se = R.texture.type, fe = se === 1009 || se === 1014 || se === 1012 || se === 1020 || se === 1017 || se === 1018, Me = Ye.getClearColor(), Ee = Ye.getClearAlpha(), Ne = Me.r, Re = Me.g, Ce = Me.b; fe ? (m[0] = Ne, m[1] = Re, m[2] = Ce, m[3] = Ee, I.clearBufferuiv(I.COLOR, 0, m)) : (g[0] = Ne, g[1] = Re, g[2] = Ce, g[3] = Ee, I.clearBufferiv(I.COLOR, 0, g)) } else B |= I.COLOR_BUFFER_BIT } D && (B |= I.DEPTH_BUFFER_BIT), F && (B |= I.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I.clear(B) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { t.removeEventListener("webglcontextlost", Ke, !1), t.removeEventListener("webglcontextrestored", T, !1), t.removeEventListener("webglcontextcreationerror", ee, !1), oe.dispose(), Se.dispose(), Le.dispose(), x.dispose(), N.dispose(), J.dispose(), Pe.dispose(), Ve.dispose(), de.dispose(), He.dispose(), He.removeEventListener("sessionstart", wt), He.removeEventListener("sessionend", Je), ae && (ae.dispose(), ae = null), Mt.stop() }; function Ke(S) { S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0 } function T() { console.log("THREE.WebGLRenderer: Context Restored."), b = !1; const S = tt.autoReset, D = j.enabled, F = j.autoUpdate, B = j.needsUpdate, U = j.type; Qe(), tt.autoReset = S, j.enabled = D, j.autoUpdate = F, j.needsUpdate = B, j.type = U } function ee(S) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage) } function te(S) { const D = S.target; D.removeEventListener("dispose", te), he(D) } function he(S) { _e(S), Le.remove(S) } function _e(S) { const D = Le.get(S).programs; D !== void 0 && (D.forEach(function (F) { de.releaseProgram(F) }), S.isShaderMaterial && de.releaseShaderCache(S)) } this.renderBufferDirect = function (S, D, F, B, U, se) { D === null && (D = ke); const fe = U.isMesh && U.matrixWorld.determinant() < 0, Me = ro(S, D, F, B, U); pe.setMaterial(B, fe); let Ee = F.index, Ne = 1; if (B.wireframe === !0) { if (Ee = Y.getWireframeAttribute(F), Ee === void 0) return; Ne = 2 } const Re = F.drawRange, Ce = F.attributes.position; let st = Re.start * Ne, Tt = (Re.start + Re.count) * Ne; se !== null && (st = Math.max(st, se.start * Ne), Tt = Math.min(Tt, (se.start + se.count) * Ne)), Ee !== null ? (st = Math.max(st, 0), Tt = Math.min(Tt, Ee.count)) : Ce != null && (st = Math.max(st, 0), Tt = Math.min(Tt, Ce.count)); const ct = Tt - st; if (ct < 0 || ct === 1 / 0) return; Pe.setup(U, B, Me, F, Ee); let qt, nt = be; if (Ee !== null && (qt = Q.get(Ee), nt = me, nt.setIndex(qt)), U.isMesh) B.wireframe === !0 ? (pe.setLineWidth(B.wireframeLinewidth * we()), nt.setMode(I.LINES)) : nt.setMode(I.TRIANGLES); else if (U.isLine) { let Ue = B.linewidth; Ue === void 0 && (Ue = 1), pe.setLineWidth(Ue * we()), U.isLineSegments ? nt.setMode(I.LINES) : U.isLineLoop ? nt.setMode(I.LINE_LOOP) : nt.setMode(I.LINE_STRIP) } else U.isPoints ? nt.setMode(I.POINTS) : U.isSprite && nt.setMode(I.TRIANGLES); if (U.isBatchedMesh) nt.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount); else if (U.isInstancedMesh) nt.renderInstances(st, ct, U.count); else if (F.isInstancedBufferGeometry) { const Ue = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, or = Math.min(F.instanceCount, Ue); nt.renderInstances(st, ct, or) } else nt.render(st, ct) }; function We(S, D, F) { S.transparent === !0 && S.side === 2 && S.forceSinglePass === !1 ? (S.side = 1, S.needsUpdate = !0, Mi(S, D, F), S.side = 0, S.needsUpdate = !0, Mi(S, D, F), S.side = 2) : Mi(S, D, F) } this.compile = function (S, D, F = null) { F === null && (F = S), p = Se.get(F), p.init(), E.push(p), F.traverseVisible(function (U) { U.isLight && U.layers.test(D.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U)) }), S !== F && S.traverseVisible(function (U) { U.isLight && U.layers.test(D.layers) && (p.pushLight(U), U.castShadow && p.pushShadow(U)) }), p.setupLights(_._useLegacyLights); const B = new Set; return S.traverse(function (U) { const se = U.material; if (se) if (Array.isArray(se)) for (let fe = 0; fe < se.length; fe++) { const Me = se[fe]; We(Me, F, U), B.add(Me) } else We(se, F, U), B.add(se) }), E.pop(), p = null, B }, this.compileAsync = function (S, D, F = null) { const B = this.compile(S, D, F); return new Promise(U => { function se() { if (B.forEach(function (fe) { Le.get(fe).currentProgram.isReady() && B.delete(fe) }), B.size === 0) { U(S); return } setTimeout(se, 10) } ge.get("KHR_parallel_shader_compile") !== null ? se() : setTimeout(se, 10) }) }; let $e = null; function pt(S) { $e && $e(S) } function wt() { Mt.stop() } function Je() { Mt.start() } const Mt = new Ba; Mt.setAnimationLoop(pt), typeof self < "u" && Mt.setContext(self), this.setAnimationLoop = function (S) { $e = S, He.setAnimationLoop(S), S === null ? Mt.stop() : Mt.start() }, He.addEventListener("sessionstart", wt), He.addEventListener("sessionend", Je), this.render = function (S, D) { if (D !== void 0 && D.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (b === !0) return; S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), He.enabled === !0 && He.isPresenting === !0 && (He.cameraAutoUpdate === !0 && He.updateCamera(D), D = He.getCamera()), S.isScene === !0 && S.onBeforeRender(_, S, D, R), p = Se.get(S, E.length), p.init(), E.push(p), ve.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), Te.setFromProjectionMatrix(ve), K = this.localClippingEnabled, H = Ie.init(this.clippingPlanes, K), v = oe.get(S, f.length), v.init(), f.push(v), zt(S, D, 0, _.sortObjects), v.finish(), _.sortObjects === !0 && v.sort(k, V), this.info.render.frame++, H === !0 && Ie.beginShadows(); const F = p.state.shadowsArray; if (j.render(F, S, D), H === !0 && Ie.endShadows(), this.info.autoReset === !0 && this.info.reset(), (He.enabled === !1 || He.isPresenting === !1 || He.hasDepthSensing() === !1) && Ye.render(v, S), p.setupLights(_._useLegacyLights), D.isArrayCamera) { const B = D.cameras; for (let U = 0, se = B.length; U < se; U++) { const fe = B[U]; os(v, S, fe, fe.viewport) } } else os(v, S, D); R !== null && (y.updateMultisampleRenderTarget(R), y.updateRenderTargetMipmap(R)), S.isScene === !0 && S.onAfterRender(_, S, D), Pe.resetDefaultState(), z = -1, ne = null, E.pop(), E.length > 0 ? p = E[E.length - 1] : p = null, f.pop(), f.length > 0 ? v = f[f.length - 1] : v = null }; function zt(S, D, F, B) { if (S.visible === !1) return; if (S.layers.test(D.layers)) { if (S.isGroup) F = S.renderOrder; else if (S.isLOD) S.autoUpdate === !0 && S.update(D); else if (S.isLight) p.pushLight(S), S.castShadow && p.pushShadow(S); else if (S.isSprite) { if (!S.frustumCulled || Te.intersectsSprite(S)) { B && ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve); const fe = J.update(S), Me = S.material; Me.visible && v.push(S, fe, Me, F, ue.z, null) } } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || Te.intersectsObject(S))) { const fe = J.update(S), Me = S.material; if (B && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), ue.copy(S.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), ue.copy(fe.boundingSphere.center)), ue.applyMatrix4(S.matrixWorld).applyMatrix4(ve)), Array.isArray(Me)) { const Ee = fe.groups; for (let Ne = 0, Re = Ee.length; Ne < Re; Ne++) { const Ce = Ee[Ne], st = Me[Ce.materialIndex]; st && st.visible && v.push(S, fe, st, F, ue.z, Ce) } } else Me.visible && v.push(S, fe, Me, F, ue.z, null) } } const se = S.children; for (let fe = 0, Me = se.length; fe < Me; fe++)zt(se[fe], D, F, B) } function os(S, D, F, B) { const U = S.opaque, se = S.transmissive, fe = S.transparent; p.setupLightsView(F), H === !0 && Ie.setGlobalState(_.clippingPlanes, F), se.length > 0 && io(U, se, D, F), B && pe.viewport(M.copy(B)), U.length > 0 && xi(U, D, F), se.length > 0 && xi(se, D, F), fe.length > 0 && xi(fe, D, F), pe.buffers.depth.setTest(!0), pe.buffers.depth.setMask(!0), pe.buffers.color.setMask(!0), pe.setPolygonOffset(!1) } function io(S, D, F, B) { if ((F.isScene === !0 ? F.overrideMaterial : null) !== null) return; const se = Ae.isWebGL2; ae === null && (ae = new Cn(1, 1, { generateMipmaps: !0, type: ge.has("EXT_color_buffer_half_float") ? 1016 : 1009, minFilter: 1008, samples: se ? 4 : 0 })), _.getDrawingBufferSize(xe), se ? ae.setSize(xe.x, xe.y) : ae.setSize(Ji(xe.x), Ji(xe.y)); const fe = _.getRenderTarget(); _.setRenderTarget(ae), _.getClearColor(q), C = _.getClearAlpha(), C < 1 && _.setClearColor(16777215, .5), _.clear(); const Me = _.toneMapping; _.toneMapping = 0, xi(S, F, B), y.updateMultisampleRenderTarget(ae), y.updateRenderTargetMipmap(ae); let Ee = !1; for (let Ne = 0, Re = D.length; Ne < Re; Ne++) { const Ce = D[Ne], st = Ce.object, Tt = Ce.geometry, ct = Ce.material, qt = Ce.group; if (ct.side === 2 && st.layers.test(B.layers)) { const nt = ct.side; ct.side = 1, ct.needsUpdate = !0, ls(st, F, B, Tt, ct, qt), ct.side = nt, ct.needsUpdate = !0, Ee = !0 } } Ee === !0 && (y.updateMultisampleRenderTarget(ae), y.updateRenderTargetMipmap(ae)), _.setRenderTarget(fe), _.setClearColor(q, C), _.toneMapping = Me } function xi(S, D, F) { const B = D.isScene === !0 ? D.overrideMaterial : null; for (let U = 0, se = S.length; U < se; U++) { const fe = S[U], Me = fe.object, Ee = fe.geometry, Ne = B === null ? fe.material : B, Re = fe.group; Me.layers.test(F.layers) && ls(Me, D, F, Ee, Ne, Re) } } function ls(S, D, F, B, U, se) { S.onBeforeRender(_, D, F, B, U, se), S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), U.onBeforeRender(_, D, F, B, S, se), U.transparent === !0 && U.side === 2 && U.forceSinglePass === !1 ? (U.side = 1, U.needsUpdate = !0, _.renderBufferDirect(F, D, B, U, S, se), U.side = 0, U.needsUpdate = !0, _.renderBufferDirect(F, D, B, U, S, se), U.side = 2) : _.renderBufferDirect(F, D, B, U, S, se), S.onAfterRender(_, D, F, B, U, se) } function Mi(S, D, F) { D.isScene !== !0 && (D = ke); const B = Le.get(S), U = p.state.lights, se = p.state.shadowsArray, fe = U.state.version, Me = de.getParameters(S, U.state, se, D, F), Ee = de.getProgramCacheKey(Me); let Ne = B.programs; B.environment = S.isMeshStandardMaterial ? D.environment : null, B.fog = D.fog, B.envMap = (S.isMeshStandardMaterial ? N : x).get(S.envMap || B.environment), Ne === void 0 && (S.addEventListener("dispose", te), Ne = new Map, B.programs = Ne); let Re = Ne.get(Ee); if (Re !== void 0) { if (B.currentProgram === Re && B.lightsStateVersion === fe) return hs(S, Me), Re } else Me.uniforms = de.getUniforms(S), S.onBuild(F, Me, _), S.onBeforeCompile(Me, _), Re = de.acquireProgram(Me, Ee), Ne.set(Ee, Re), B.uniforms = Me.uniforms; const Ce = B.uniforms; return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ce.clippingPlanes = Ie.uniform), hs(S, Me), B.needsLights = ao(S), B.lightsStateVersion = fe, B.needsLights && (Ce.ambientLightColor.value = U.state.ambient, Ce.lightProbe.value = U.state.probe, Ce.directionalLights.value = U.state.directional, Ce.directionalLightShadows.value = U.state.directionalShadow, Ce.spotLights.value = U.state.spot, Ce.spotLightShadows.value = U.state.spotShadow, Ce.rectAreaLights.value = U.state.rectArea, Ce.ltc_1.value = U.state.rectAreaLTC1, Ce.ltc_2.value = U.state.rectAreaLTC2, Ce.pointLights.value = U.state.point, Ce.pointLightShadows.value = U.state.pointShadow, Ce.hemisphereLights.value = U.state.hemi, Ce.directionalShadowMap.value = U.state.directionalShadowMap, Ce.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Ce.spotShadowMap.value = U.state.spotShadowMap, Ce.spotLightMatrix.value = U.state.spotLightMatrix, Ce.spotLightMap.value = U.state.spotLightMap, Ce.pointShadowMap.value = U.state.pointShadowMap, Ce.pointShadowMatrix.value = U.state.pointShadowMatrix), B.currentProgram = Re, B.uniformsList = null, Re } function cs(S) { if (S.uniformsList === null) { const D = S.currentProgram.getUniforms(); S.uniformsList = ji.seqWithValue(D.seq, S.uniforms) } return S.uniformsList } function hs(S, D) { const F = Le.get(S); F.outputColorSpace = D.outputColorSpace, F.batching = D.batching, F.instancing = D.instancing, F.instancingColor = D.instancingColor, F.skinning = D.skinning, F.morphTargets = D.morphTargets, F.morphNormals = D.morphNormals, F.morphColors = D.morphColors, F.morphTargetsCount = D.morphTargetsCount, F.numClippingPlanes = D.numClippingPlanes, F.numIntersection = D.numClipIntersection, F.vertexAlphas = D.vertexAlphas, F.vertexTangents = D.vertexTangents, F.toneMapping = D.toneMapping } function ro(S, D, F, B, U) { D.isScene !== !0 && (D = ke), y.resetTextureUnits(); const se = D.fog, fe = B.isMeshStandardMaterial ? D.environment : null, Me = R === null ? _.outputColorSpace : R.isXRRenderTarget === !0 ? R.texture.colorSpace : en, Ee = (B.isMeshStandardMaterial ? N : x).get(B.envMap || fe), Ne = B.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4, Re = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Ce = !!F.morphAttributes.position, st = !!F.morphAttributes.normal, Tt = !!F.morphAttributes.color; let ct = 0; B.toneMapped && (R === null || R.isXRRenderTarget === !0) && (ct = _.toneMapping); const qt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, nt = qt !== void 0 ? qt.length : 0, Ue = Le.get(B), or = p.state.lights; if (H === !0 && (K === !0 || S !== ne)) { const Ct = S === ne && B.id === z; Ie.setState(B, S, Ct) } let rt = !1; B.version === Ue.__version ? (Ue.needsLights && Ue.lightsStateVersion !== or.state.version || Ue.outputColorSpace !== Me || U.isBatchedMesh && Ue.batching === !1 || !U.isBatchedMesh && Ue.batching === !0 || U.isInstancedMesh && Ue.instancing === !1 || !U.isInstancedMesh && Ue.instancing === !0 || U.isSkinnedMesh && Ue.skinning === !1 || !U.isSkinnedMesh && Ue.skinning === !0 || U.isInstancedMesh && Ue.instancingColor === !0 && U.instanceColor === null || U.isInstancedMesh && Ue.instancingColor === !1 && U.instanceColor !== null || Ue.envMap !== Ee || B.fog === !0 && Ue.fog !== se || Ue.numClippingPlanes !== void 0 && (Ue.numClippingPlanes !== Ie.numPlanes || Ue.numIntersection !== Ie.numIntersection) || Ue.vertexAlphas !== Ne || Ue.vertexTangents !== Re || Ue.morphTargets !== Ce || Ue.morphNormals !== st || Ue.morphColors !== Tt || Ue.toneMapping !== ct || Ae.isWebGL2 === !0 && Ue.morphTargetsCount !== nt) && (rt = !0) : (rt = !0, Ue.__version = B.version); let mn = Ue.currentProgram; rt === !0 && (mn = Mi(B, D, U)); let us = !1, ii = !1, lr = !1; const gt = mn.getUniforms(), gn = Ue.uniforms; if (pe.useProgram(mn.program) && (us = !0, ii = !0, lr = !0), B.id !== z && (z = B.id, ii = !0), us || ne !== S) { gt.setValue(I, "projectionMatrix", S.projectionMatrix), gt.setValue(I, "viewMatrix", S.matrixWorldInverse); const Ct = gt.map.cameraPosition; Ct !== void 0 && Ct.setValue(I, ue.setFromMatrixPosition(S.matrixWorld)), Ae.logarithmicDepthBuffer && gt.setValue(I, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && gt.setValue(I, "isOrthographic", S.isOrthographicCamera === !0), ne !== S && (ne = S, ii = !0, lr = !0) } if (U.isSkinnedMesh) { gt.setOptional(I, U, "bindMatrix"), gt.setOptional(I, U, "bindMatrixInverse"); const Ct = U.skeleton; Ct && (Ae.floatVertexTextures ? (Ct.boneTexture === null && Ct.computeBoneTexture(), gt.setValue(I, "boneTexture", Ct.boneTexture, y)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.")) } U.isBatchedMesh && (gt.setOptional(I, U, "batchingTexture"), gt.setValue(I, "batchingTexture", U._matricesTexture, y)); const cr = F.morphAttributes; if ((cr.position !== void 0 || cr.normal !== void 0 || cr.color !== void 0 && Ae.isWebGL2 === !0) && Ge.update(U, F, mn), (ii || Ue.receiveShadow !== U.receiveShadow) && (Ue.receiveShadow = U.receiveShadow, gt.setValue(I, "receiveShadow", U.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (gn.envMap.value = Ee, gn.flipEnvMap.value = Ee.isCubeTexture && Ee.isRenderTargetTexture === !1 ? -1 : 1), ii && (gt.setValue(I, "toneMappingExposure", _.toneMappingExposure), Ue.needsLights && so(gn, lr), se && B.fog === !0 && re.refreshFogUniforms(gn, se), re.refreshMaterialUniforms(gn, B, X, G, ae), ji.upload(I, cs(Ue), gn, y)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (ji.upload(I, cs(Ue), gn, y), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && gt.setValue(I, "center", U.center), gt.setValue(I, "modelViewMatrix", U.modelViewMatrix), gt.setValue(I, "normalMatrix", U.normalMatrix), gt.setValue(I, "modelMatrix", U.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) { const Ct = B.uniformsGroups; for (let hr = 0, oo = Ct.length; hr < oo; hr++)if (Ae.isWebGL2) { const ds = Ct[hr]; Ve.update(ds, mn), Ve.bind(ds, mn) } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.") } return mn } function so(S, D) { S.ambientLightColor.needsUpdate = D, S.lightProbe.needsUpdate = D, S.directionalLights.needsUpdate = D, S.directionalLightShadows.needsUpdate = D, S.pointLights.needsUpdate = D, S.pointLightShadows.needsUpdate = D, S.spotLights.needsUpdate = D, S.spotLightShadows.needsUpdate = D, S.rectAreaLights.needsUpdate = D, S.hemisphereLights.needsUpdate = D } function ao(S) { return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0 } this.getActiveCubeFace = function () { return L }, this.getActiveMipmapLevel = function () { return w }, this.getRenderTarget = function () { return R }, this.setRenderTargetTextures = function (S, D, F) { Le.get(S.texture).__webglTexture = D, Le.get(S.depthTexture).__webglTexture = F; const B = Le.get(S); B.__hasExternalTextures = !0, B.__hasExternalTextures && (B.__autoAllocateDepthBuffer = F === void 0, B.__autoAllocateDepthBuffer || ge.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1)) }, this.setRenderTargetFramebuffer = function (S, D) { const F = Le.get(S); F.__webglFramebuffer = D, F.__useDefaultFramebuffer = D === void 0 }, this.setRenderTarget = function (S, D = 0, F = 0) { R = S, L = D, w = F; let B = !0, U = null, se = !1, fe = !1; if (S) { const Ee = Le.get(S); Ee.__useDefaultFramebuffer !== void 0 ? (pe.bindFramebuffer(I.FRAMEBUFFER, null), B = !1) : Ee.__webglFramebuffer === void 0 ? y.setupRenderTarget(S) : Ee.__hasExternalTextures && y.rebindTextures(S, Le.get(S.texture).__webglTexture, Le.get(S.depthTexture).__webglTexture); const Ne = S.texture; (Ne.isData3DTexture || Ne.isDataArrayTexture || Ne.isCompressedArrayTexture) && (fe = !0); const Re = Le.get(S).__webglFramebuffer; S.isWebGLCubeRenderTarget ? (Array.isArray(Re[D]) ? U = Re[D][F] : U = Re[D], se = !0) : Ae.isWebGL2 && S.samples > 0 && y.useMultisampledRTT(S) === !1 ? U = Le.get(S).__webglMultisampledFramebuffer : Array.isArray(Re) ? U = Re[F] : U = Re, M.copy(S.viewport), A.copy(S.scissor), W = S.scissorTest } else M.copy(Z).multiplyScalar(X).floor(), A.copy($).multiplyScalar(X).floor(), W = ce; if (pe.bindFramebuffer(I.FRAMEBUFFER, U) && Ae.drawBuffers && B && pe.drawBuffers(S, U), pe.viewport(M), pe.scissor(A), pe.setScissorTest(W), se) { const Ee = Le.get(S.texture); I.framebufferTexture2D(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, I.TEXTURE_CUBE_MAP_POSITIVE_X + D, Ee.__webglTexture, F) } else if (fe) { const Ee = Le.get(S.texture), Ne = D || 0; I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, Ee.__webglTexture, F || 0, Ne) } z = -1 }, this.readRenderTargetPixels = function (S, D, F, B, U, se, fe) { if (!(S && S.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let Me = Le.get(S).__webglFramebuffer; if (S.isWebGLCubeRenderTarget && fe !== void 0 && (Me = Me[fe]), Me) { pe.bindFramebuffer(I.FRAMEBUFFER, Me); try { const Ee = S.texture, Ne = Ee.format, Re = Ee.type; if (Ne !== 1023 && le.convert(Ne) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } const Ce = Re === 1016 && (ge.has("EXT_color_buffer_half_float") || Ae.isWebGL2 && ge.has("EXT_color_buffer_float")); if (Re !== 1009 && le.convert(Re) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) && !(Re === 1015 && (Ae.isWebGL2 || ge.has("OES_texture_float") || ge.has("WEBGL_color_buffer_float"))) && !Ce) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } D >= 0 && D <= S.width - B && F >= 0 && F <= S.height - U && I.readPixels(D, F, B, U, le.convert(Ne), le.convert(Re), se) } finally { const Ee = R !== null ? Le.get(R).__webglFramebuffer : null; pe.bindFramebuffer(I.FRAMEBUFFER, Ee) } } }, this.copyFramebufferToTexture = function (S, D, F = 0) { const B = Math.pow(2, -F), U = Math.floor(D.image.width * B), se = Math.floor(D.image.height * B); y.setTexture2D(D, 0), I.copyTexSubImage2D(I.TEXTURE_2D, F, 0, 0, S.x, S.y, U, se), pe.unbindTexture() }, this.copyTextureToTexture = function (S, D, F, B = 0) { const U = D.image.width, se = D.image.height, fe = le.convert(F.format), Me = le.convert(F.type); y.setTexture2D(F, 0), I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, F.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, F.unpackAlignment), D.isDataTexture ? I.texSubImage2D(I.TEXTURE_2D, B, S.x, S.y, U, se, fe, Me, D.image.data) : D.isCompressedTexture ? I.compressedTexSubImage2D(I.TEXTURE_2D, B, S.x, S.y, D.mipmaps[0].width, D.mipmaps[0].height, fe, D.mipmaps[0].data) : I.texSubImage2D(I.TEXTURE_2D, B, S.x, S.y, fe, Me, D.image), B === 0 && F.generateMipmaps && I.generateMipmap(I.TEXTURE_2D), pe.unbindTexture() }, this.copyTextureToTexture3D = function (S, D, F, B, U = 0) { if (_.isWebGL1Renderer) { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."); return } const se = S.max.x - S.min.x + 1, fe = S.max.y - S.min.y + 1, Me = S.max.z - S.min.z + 1, Ee = le.convert(B.format), Ne = le.convert(B.type); let Re; if (B.isData3DTexture) y.setTexture3D(B, 0), Re = I.TEXTURE_3D; else if (B.isDataArrayTexture || B.isCompressedArrayTexture) y.setTexture2DArray(B, 0), Re = I.TEXTURE_2D_ARRAY; else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return } I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, B.flipY), I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), I.pixelStorei(I.UNPACK_ALIGNMENT, B.unpackAlignment); const Ce = I.getParameter(I.UNPACK_ROW_LENGTH), st = I.getParameter(I.UNPACK_IMAGE_HEIGHT), Tt = I.getParameter(I.UNPACK_SKIP_PIXELS), ct = I.getParameter(I.UNPACK_SKIP_ROWS), qt = I.getParameter(I.UNPACK_SKIP_IMAGES), nt = F.isCompressedTexture ? F.mipmaps[U] : F.image; I.pixelStorei(I.UNPACK_ROW_LENGTH, nt.width), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, nt.height), I.pixelStorei(I.UNPACK_SKIP_PIXELS, S.min.x), I.pixelStorei(I.UNPACK_SKIP_ROWS, S.min.y), I.pixelStorei(I.UNPACK_SKIP_IMAGES, S.min.z), F.isDataTexture || F.isData3DTexture ? I.texSubImage3D(Re, U, D.x, D.y, D.z, se, fe, Me, Ee, Ne, nt.data) : F.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), I.compressedTexSubImage3D(Re, U, D.x, D.y, D.z, se, fe, Me, Ee, nt.data)) : I.texSubImage3D(Re, U, D.x, D.y, D.z, se, fe, Me, Ee, Ne, nt), I.pixelStorei(I.UNPACK_ROW_LENGTH, Ce), I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, st), I.pixelStorei(I.UNPACK_SKIP_PIXELS, Tt), I.pixelStorei(I.UNPACK_SKIP_ROWS, ct), I.pixelStorei(I.UNPACK_SKIP_IMAGES, qt), U === 0 && B.generateMipmaps && I.generateMipmap(Re), pe.unbindTexture() }, this.initTexture = function (S) { S.isCubeTexture ? y.setTextureCube(S, 0) : S.isData3DTexture ? y.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? y.setTexture2DArray(S, 0) : y.setTexture2D(S, 0), pe.unbindTexture() }, this.resetState = function () { L = 0, w = 0, R = null, pe.reset(), Pe.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return 2e3 } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; const t = this.getContext(); t.drawingBufferColorSpace = e === jr ? "display-p3" : "srgb", t.unpackColorSpace = je.workingColorSpace === tr ? "display-p3" : "srgb" } get outputEncoding() { return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === ut ? 3001 : 3e3 } set outputEncoding(e) { console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === 3001 ? ut : en } get useLegacyLights() { return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights } set useLegacyLights(e) { console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e } } class Nd extends Id { } Nd.prototype.isWebGL1Renderer = !0; class rp extends it { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t } } class Ud { constructor(e, t) { this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = Gt() } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return Rn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this } copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, s = this.stride; i < s; i++)this.array[e + i] = t.array[n + i]; return this } set(e, t = 0) { return this.array.set(e, t), this } clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n } onUpload(e) { return this.onUploadCallback = e, this } toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Gt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } } const St = new P; class es { constructor(e, t, n, i = !1) { this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i } get count() { return this.data.count } get array() { return this.data.array } set needsUpdate(e) { this.data.needsUpdate = e } applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++)St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z); return this } getComponent(e, t) { let n = this.array[e * this.data.stride + this.offset + t]; return this.normalized && (n = Bt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = Xe(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this } setX(e, t) { return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this } setY(e, t) { return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this } setZ(e, t) { return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this } setW(e, t) { return this.normalized && (t = Xe(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this } getX(e) { let t = this.data.array[e * this.data.stride + this.offset]; return this.normalized && (t = Bt(t, this.array)), t } getY(e) { let t = this.data.array[e * this.data.stride + this.offset + 1]; return this.normalized && (t = Bt(t, this.array)), t } getZ(e) { let t = this.data.array[e * this.data.stride + this.offset + 2]; return this.normalized && (t = Bt(t, this.array)), t } getW(e) { let t = this.data.array[e * this.data.stride + this.offset + 3]; return this.normalized && (t = Bt(t, this.array)), t } setXY(e, t, n) { return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), i = Xe(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this } setXYZW(e, t, n, i, s) { return e = e * this.data.stride + this.offset, this.normalized && (t = Xe(t, this.array), n = Xe(n, this.array), i = Xe(i, this.array), s = Xe(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this } clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let s = 0; s < this.itemSize; s++)t.push(this.data.array[i + s]) } return new mt(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new es(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) } toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let s = 0; s < this.itemSize; s++)t.push(this.data.array[i + s]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } } const na = new P, ia = new Ze, ra = new Ze, Fd = new P, sa = new Be, ki = new P, Nr = new Wt, aa = new Be, Ur = new nr; class Od extends Rt { constructor(e, t) { super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = fs, this.bindMatrix = new Be, this.bindMatrixInverse = new Be, this.boundingBox = null, this.boundingSphere = null } computeBoundingBox() { const e = this.geometry; this.boundingBox === null && (this.boundingBox = new tn), this.boundingBox.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, ki), this.boundingBox.expandByPoint(ki) } computeBoundingSphere() { const e = this.geometry; this.boundingSphere === null && (this.boundingSphere = new Wt), this.boundingSphere.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, ki), this.boundingSphere.expandByPoint(ki) } copy(e, t) { return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } raycast(e, t) { const n = this.material, i = this.matrixWorld; n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Nr.copy(this.boundingSphere), Nr.applyMatrix4(i), e.ray.intersectsSphere(Nr) !== !1 && (aa.copy(i).invert(), Ur.copy(e.ray).applyMatrix4(aa), !(this.boundingBox !== null && Ur.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Ur))) } getVertexPosition(e, t) { return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t } bind(e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() } pose() { this.skeleton.pose() } normalizeSkinWeights() { const e = new Ze, t = this.geometry.attributes.skinWeight; for (let n = 0, i = t.count; n < i; n++) { e.fromBufferAttribute(t, n); const s = 1 / e.manhattanLength(); s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w) } } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.bindMode === fs ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === lo ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) } applyBoneTransform(e, t) { const n = this.skeleton, i = this.geometry; ia.fromBufferAttribute(i.attributes.skinIndex, e), ra.fromBufferAttribute(i.attributes.skinWeight, e), na.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0); for (let s = 0; s < 4; s++) { const a = ra.getComponent(s); if (a !== 0) { const o = ia.getComponent(s); sa.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(Fd.copy(na).applyMatrix4(sa), a) } } return t.applyMatrix4(this.bindMatrixInverse) } } class Xa extends it { constructor() { super(), this.isBone = !0, this.type = "Bone" } } class Bd extends dt { constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = 1003, h = 1003, u, d) { super(null, a, o, l, c, h, i, s, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } const oa = new Be, Gd = new Be; class ts { constructor(e = [], t = []) { this.uuid = Gt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init() } init() { const e = this.bones, t = this.boneInverses; if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses(); else if (e.length !== t.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let n = 0, i = this.bones.length; n < i; n++)this.boneInverses.push(new Be) } } calculateInverses() { this.boneInverses.length = 0; for (let e = 0, t = this.bones.length; e < t; e++) { const n = new Be; this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n) } } pose() { for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && n.matrixWorld.copy(this.boneInverses[e]).invert() } for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale)) } } update() { const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture; for (let s = 0, a = e.length; s < a; s++) { const o = e[s] ? e[s].matrixWorld : Gd; oa.multiplyMatrices(o, t[s]), oa.toArray(n, s * 16) } i !== null && (i.needsUpdate = !0) } clone() { return new ts(this.bones, this.boneInverses) } computeBoneTexture() { let e = Math.sqrt(this.bones.length * 4); e = Math.ceil(e / 4) * 4, e = Math.max(e, 4); const t = new Float32Array(e * e * 4); t.set(this.boneMatrices); const n = new Bd(t, e, e, 1023, 1015); return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this } getBoneByName(e) { for (let t = 0, n = this.bones.length; t < n; t++) { const i = this.bones[t]; if (i.name === e) return i } } dispose() { this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null) } fromJSON(e, t) { this.uuid = e.uuid; for (let n = 0, i = e.bones.length; n < i; n++) { const s = e.bones[n]; let a = t[s]; a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new Xa), this.bones.push(a), this.boneInverses.push(new Be().fromArray(e.boneInverses[n])) } return this.init(), this } toJSON() { const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] }; e.uuid = this.uuid; const t = this.bones, n = this.boneInverses; for (let i = 0, s = t.length; i < s; i++) { const a = t[i]; e.bones.push(a.uuid); const o = n[i]; e.boneInverses.push(o.toArray()) } return e } } class la extends mt { constructor(e, t, n, i = 1) { super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i } copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this } toJSON() { const e = super.toJSON(); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } } const qn = new Be, ca = new Be, Vi = [], ha = new tn, Hd = new Be, li = new Rt, ci = new Wt; class zd extends Rt { constructor(e, t, n) { super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new la(new Float32Array(n * 16), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null; for (let i = 0; i < n; i++)this.setMatrixAt(i, Hd) } computeBoundingBox() { const e = this.geometry, t = this.count; this.boundingBox === null && (this.boundingBox = new tn), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, qn), ha.copy(e.boundingBox).applyMatrix4(qn), this.boundingBox.union(ha) } computeBoundingSphere() { const e = this.geometry, t = this.count; this.boundingSphere === null && (this.boundingSphere = new Wt), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, qn), ci.copy(e.boundingSphere).applyMatrix4(qn), this.boundingSphere.union(ci) } copy(e, t) { return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } getColorAt(e, t) { t.fromArray(this.instanceColor.array, e * 3) } getMatrixAt(e, t) { t.fromArray(this.instanceMatrix.array, e * 16) } raycast(e, t) { const n = this.matrixWorld, i = this.count; if (li.geometry = this.geometry, li.material = this.material, li.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ci.copy(this.boundingSphere), ci.applyMatrix4(n), e.ray.intersectsSphere(ci) !== !1)) for (let s = 0; s < i; s++) { this.getMatrixAt(s, qn), ca.multiplyMatrices(n, qn), li.matrixWorld = ca, li.raycast(e, Vi); for (let a = 0, o = Vi.length; a < o; a++) { const l = Vi[a]; l.instanceId = s, l.object = this, t.push(l) } Vi.length = 0 } } setColorAt(e, t) { this.instanceColor === null && (this.instanceColor = new la(new Float32Array(this.instanceMatrix.count * 3), 3)), t.toArray(this.instanceColor.array, e * 3) } setMatrixAt(e, t) { t.toArray(this.instanceMatrix.array, e * 16) } updateMorphTargets() { } dispose() { this.dispatchEvent({ type: "dispose" }) } } class qa extends Ht { constructor(e) { super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new ye(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this } } const ua = new P, da = new P, fa = new Be, Fr = new nr, Wi = new Wt; class ns extends it { constructor(e = new Nt, t = new qa) { super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = [0]; for (let i = 1, s = t.count; i < s; i++)ua.fromBufferAttribute(t, i - 1), da.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += ua.distanceTo(da); e.setAttribute("lineDistance", new It(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Wi.copy(n.boundingSphere), Wi.applyMatrix4(i), Wi.radius += s, e.ray.intersectsSphere(Wi) === !1) return; fa.copy(i).invert(), Fr.copy(e.ray).applyMatrix4(fa); const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = new P, h = new P, u = new P, d = new P, m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position; if (g !== null) { const f = Math.max(0, a.start), E = Math.min(g.count, a.start + a.count); for (let _ = f, b = E - 1; _ < b; _ += m) { const L = g.getX(_), w = g.getX(_ + 1); if (c.fromBufferAttribute(p, L), h.fromBufferAttribute(p, w), Fr.distanceSqToSegment(c, h, d, u) > l) continue; d.applyMatrix4(this.matrixWorld); const z = e.ray.origin.distanceTo(d); z < e.near || z > e.far || t.push({ distance: z, point: u.clone().applyMatrix4(this.matrixWorld), index: _, face: null, faceIndex: null, object: this }) } } else { const f = Math.max(0, a.start), E = Math.min(p.count, a.start + a.count); for (let _ = f, b = E - 1; _ < b; _ += m) { if (c.fromBufferAttribute(p, _), h.fromBufferAttribute(p, _ + 1), Fr.distanceSqToSegment(c, h, d, u) > l) continue; d.applyMatrix4(this.matrixWorld); const w = e.ray.origin.distanceTo(d); w < e.near || w > e.far || t.push({ distance: w, point: u.clone().applyMatrix4(this.matrixWorld), index: _, face: null, faceIndex: null, object: this }) } } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, a = i.length; s < a; s++) { const o = i[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s } } } } } const pa = new P, ma = new P; class kd extends ns { constructor(e, t) { super(e, t), this.isLineSegments = !0, this.type = "LineSegments" } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = []; for (let i = 0, s = t.count; i < s; i += 2)pa.fromBufferAttribute(t, i), ma.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + pa.distanceTo(ma); e.setAttribute("lineDistance", new It(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } } class Vd extends ns { constructor(e, t) { super(e, t), this.isLineLoop = !0, this.type = "LineLoop" } } class Ya extends Ht { constructor(e) { super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ye(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this } } const ga = new Be, Xr = new nr, Xi = new Wt, qi = new P; class Wd extends it { constructor(e = new Nt, t = new Ya) { super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Xi.copy(n.boundingSphere), Xi.applyMatrix4(i), Xi.radius += s, e.ray.intersectsSphere(Xi) === !1) return; ga.copy(i).invert(), Xr.copy(e.ray).applyMatrix4(ga); const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position; if (c !== null) { const d = Math.max(0, a.start), m = Math.min(c.count, a.start + a.count); for (let g = d, v = m; g < v; g++) { const p = c.getX(g); qi.fromBufferAttribute(u, p), _a(qi, p, l, i, e, t, this) } } else { const d = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count); for (let g = d, v = m; g < v; g++)qi.fromBufferAttribute(u, g), _a(qi, g, l, i, e, t, this) } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, a = i.length; s < a; s++) { const o = i[s].name || String(s); this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s } } } } } function _a(r, e, t, n, i, s, a) { const o = Xr.distanceSqToPoint(r); if (o < t) { const l = new P; Xr.closestPointToPoint(r, l), l.applyMatrix4(n); const c = i.ray.origin.distanceTo(l); if (c < i.near || c > i.far) return; s.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, object: a }) } } class ja extends Nt { constructor(e = 1, t = 32, n = 16, i = 0, s = Math.PI * 2, a = 0, o = Math.PI) { super(), this.type = "SphereGeometry", this.parameters = { radius: e, widthSegments: t, heightSegments: n, phiStart: i, phiLength: s, thetaStart: a, thetaLength: o }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n)); const l = Math.min(a + o, Math.PI); let c = 0; const h = [], u = new P, d = new P, m = [], g = [], v = [], p = []; for (let f = 0; f <= n; f++) { const E = [], _ = f / n; let b = 0; f === 0 && a === 0 ? b = .5 / t : f === n && l === Math.PI && (b = -.5 / t); for (let L = 0; L <= t; L++) { const w = L / t; u.x = -e * Math.cos(i + w * s) * Math.sin(a + _ * o), u.y = e * Math.cos(a + _ * o), u.z = e * Math.sin(i + w * s) * Math.sin(a + _ * o), g.push(u.x, u.y, u.z), d.copy(u).normalize(), v.push(d.x, d.y, d.z), p.push(w + b, 1 - _), E.push(c++) } h.push(E) } for (let f = 0; f < n; f++)for (let E = 0; E < t; E++) { const _ = h[f][E + 1], b = h[f][E], L = h[f + 1][E], w = h[f + 1][E + 1]; (f !== 0 || a > 0) && m.push(_, b, w), (f !== n - 1 || l < Math.PI) && m.push(b, L, w) } this.setIndex(m), this.setAttribute("position", new It(g, 3)), this.setAttribute("normal", new It(v, 3)), this.setAttribute("uv", new It(p, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new ja(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength) } } class is extends Ht { constructor(e) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new ye(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ye(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Oe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } class fn extends is { constructor(e) { super(), this.isMeshPhysicalMaterial = !0, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Oe(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function () { return xt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function (t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ye(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ye(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ye(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e) } get anisotropy() { return this._anisotropy } set anisotropy(e) { this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e } get clearcoat() { return this._clearcoat } set clearcoat(e) { this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e } get iridescence() { return this._iridescence } set iridescence(e) { this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e } get sheen() { return this._sheen } set sheen(e) { this._sheen > 0 != e > 0 && this.version++, this._sheen = e } get transmission() { return this._transmission } set transmission(e) { this._transmission > 0 != e > 0 && this.version++, this._transmission = e } copy(e) { return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this } } class sp extends Ht { constructor(e) { super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new ye(16777215), this.specular = new ye(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ye(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Oe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } function Yi(r, e, t) { return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r) } function Xd(r) { return ArrayBuffer.isView(r) && !(r instanceof DataView) } function qd(r) { function e(i, s) { return r[i] - r[s] } const t = r.length, n = new Array(t); for (let i = 0; i !== t; ++i)n[i] = i; return n.sort(e), n } function va(r, e, t) { const n = r.length, i = new r.constructor(n); for (let s = 0, a = 0; a !== n; ++s) { const o = t[s] * e; for (let l = 0; l !== e; ++l)i[a++] = r[o + l] } return i } function Ka(r, e, t, n) { let i = 1, s = r[0]; for (; s !== void 0 && s[n] === void 0;)s = r[i++]; if (s === void 0) return; let a = s[n]; if (a !== void 0) if (Array.isArray(a)) do a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++]; while (s !== void 0); else if (a.toArray !== void 0) do a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++]; while (s !== void 0); else do a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++]; while (s !== void 0) } class vi { constructor(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} } evaluate(e) { const t = this.parameterPositions; let n = this._cachedIndex, i = t[n], s = t[n - 1]; n: { e: { let a; t: { i: if (!(e < i)) { for (let o = n + 2; ;) { if (i === void 0) { if (e < s) break i; return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } if (n === o) break; if (s = i, i = t[++n], e < i) break e } a = t.length; break t } if (!(e >= s)) { const o = t[1]; e < o && (n = 2, s = o); for (let l = n - 2; ;) { if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (n === l) break; if (i = s, s = t[--n - 1], e >= s) break e } a = n, n = 0; break t } break n } for (; n < a;) { const o = n + a >>> 1; e < t[o] ? a = o : n = o + 1 } if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } this._cachedIndex = n, this.intervalChanged_(n, s, i) } return this.interpolate_(n, s, e, i) } getSettings_() { return this.settings || this.DefaultSettings_ } copySampleValue_(e) { const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i; for (let a = 0; a !== i; ++a)t[a] = n[s + a]; return t } interpolate_() { throw new Error("call to abstract method") } intervalChanged_() { } } class Yd extends vi { constructor(e, t, n, i) { super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 } } intervalChanged_(e, t, n) { const i = this.parameterPositions; let s = e - 2, a = e + 1, o = i[s], l = i[a]; if (o === void 0) switch (this.getSettings_().endingStart) { case 2401: s = e, o = 2 * t - n; break; case 2402: s = i.length - 2, o = t + i[s] - i[s + 1]; break; default: s = e, o = n }if (l === void 0) switch (this.getSettings_().endingEnd) { case 2401: a = e, l = 2 * n - t; break; case 2402: a = 1, l = n + i[1] - i[0]; break; default: a = e - 1, l = t }const c = (n - t) * .5, h = this.valueSize; this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h } interpolate_(e, t, n, i) { const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, m = this._weightNext, g = (n - t) / (i - t), v = g * g, p = v * g, f = -d * p + 2 * d * v - d * g, E = (1 + d) * p + (-1.5 - 2 * d) * v + (-.5 + d) * g + 1, _ = (-1 - m) * p + (1.5 + m) * v + .5 * g, b = m * p - m * v; for (let L = 0; L !== o; ++L)s[L] = f * a[h + L] + E * a[c + L] + _ * a[l + L] + b * a[u + L]; return s } } class jd extends vi { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h; for (let d = 0; d !== o; ++d)s[d] = a[c + d] * u + a[l + d] * h; return s } } class Kd extends vi { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e) { return this.copySampleValue_(e - 1) } } class Xt { constructor(e, t, n, i) { if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e); this.name = e, this.times = Yi(t, this.TimeBufferType), this.values = Yi(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) } static toJSON(e) { const t = e.constructor; let n; if (t.toJSON !== this.toJSON) n = t.toJSON(e); else { n = { name: e.name, times: Yi(e.times, Array), values: Yi(e.values, Array) }; const i = e.getInterpolation(); i !== e.DefaultInterpolation && (n.interpolation = i) } return n.type = e.ValueTypeName, n } InterpolantFactoryMethodDiscrete(e) { return new Kd(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodLinear(e) { return new jd(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodSmooth(e) { return new Yd(this.times, this.values, this.getValueSize(), e) } setInterpolation(e) { let t; switch (e) { case 2300: t = this.InterpolantFactoryMethodDiscrete; break; case 2301: t = this.InterpolantFactoryMethodLinear; break; case 2302: t = this.InterpolantFactoryMethodSmooth; break }if (t === void 0) { const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation); else throw new Error(n); return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = t, this } getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return 2300; case this.InterpolantFactoryMethodLinear: return 2301; case this.InterpolantFactoryMethodSmooth: return 2302 } } getValueSize() { return this.values.length / this.times.length } shift(e) { if (e !== 0) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] += e } return this } scale(e) { if (e !== 1) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] *= e } return this } trim(e, t) { const n = this.times, i = n.length; let s = 0, a = i - 1; for (; s !== i && n[s] < e;)++s; for (; a !== -1 && n[a] > t;)--a; if (++a, s !== 0 || a !== i) { s >= a && (a = Math.max(a, 1), s = a - 1); const o = this.getValueSize(); this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o) } return this } validate() { let e = !0; const t = this.getValueSize(); t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); const n = this.times, i = this.values, s = n.length; s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); let a = null; for (let o = 0; o !== s; o++) { const l = n[o]; if (typeof l == "number" && isNaN(l)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = !1; break } if (a !== null && a > l) { console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = !1; break } a = l } if (i !== void 0 && Xd(i)) for (let o = 0, l = i.length; o !== l; ++o) { const c = i[o]; if (isNaN(c)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = !1; break } } return e } optimize() { const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = e.length - 1; let a = 1; for (let o = 1; o < s; ++o) { let l = !1; const c = e[o], h = e[o + 1]; if (c !== h && (o !== 1 || c !== e[0])) if (i) l = !0; else { const u = o * n, d = u - n, m = u + n; for (let g = 0; g !== n; ++g) { const v = t[u + g]; if (v !== t[d + g] || v !== t[m + g]) { l = !0; break } } } if (l) { if (o !== a) { e[a] = e[o]; const u = o * n, d = a * n; for (let m = 0; m !== n; ++m)t[d + m] = t[u + m] } ++a } } if (s > 0) { e[a] = e[s]; for (let o = s * n, l = a * n, c = 0; c !== n; ++c)t[l + c] = t[o + c]; ++a } return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this } clone() { const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t); return i.createInterpolant = this.createInterpolant, i } } Xt.prototype.TimeBufferType = Float32Array; Xt.prototype.ValueBufferType = Float32Array; Xt.prototype.DefaultInterpolation = 2301; class ti extends Xt { } ti.prototype.ValueTypeName = "bool"; ti.prototype.ValueBufferType = Array; ti.prototype.DefaultInterpolation = 2300; ti.prototype.InterpolantFactoryMethodLinear = void 0; ti.prototype.InterpolantFactoryMethodSmooth = void 0; class Za extends Xt { } Za.prototype.ValueTypeName = "color"; class mi extends Xt { } mi.prototype.ValueTypeName = "number"; class Zd extends vi { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t); let c = e * o; for (let h = c + o; c !== h; c += 4)dn.slerpFlat(s, 0, a, c - o, a, c, l); return s } } class Ln extends Xt { InterpolantFactoryMethodLinear(e) { return new Zd(this.times, this.values, this.getValueSize(), e) } } Ln.prototype.ValueTypeName = "quaternion"; Ln.prototype.DefaultInterpolation = 2301; Ln.prototype.InterpolantFactoryMethodSmooth = void 0; class ni extends Xt { } ni.prototype.ValueTypeName = "string"; ni.prototype.ValueBufferType = Array; ni.prototype.DefaultInterpolation = 2300; ni.prototype.InterpolantFactoryMethodLinear = void 0; ni.prototype.InterpolantFactoryMethodSmooth = void 0; class gi extends Xt { } gi.prototype.ValueTypeName = "vector"; class $d { constructor(e, t = -1, n, i = 2500) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Gt(), this.duration < 0 && this.resetDuration() } static parse(e) { const t = [], n = e.tracks, i = 1 / (e.fps || 1); for (let a = 0, o = n.length; a !== o; ++a)t.push(Qd(n[a]).scale(i)); const s = new this(e.name, e.duration, t, e.blendMode); return s.uuid = e.uuid, s } static toJSON(e) { const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode }; for (let s = 0, a = n.length; s !== a; ++s)t.push(Xt.toJSON(n[s])); return i } static CreateFromMorphTargetSequence(e, t, n, i) { const s = t.length, a = []; for (let o = 0; o < s; o++) { let l = [], c = []; l.push((o + s - 1) % s, o, (o + 1) % s), c.push(0, 1, 0); const h = qd(l); l = va(l, 1, h), c = va(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(new mi(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n)) } return new this(e, -1, a) } static findByName(e, t) { let n = e; if (!Array.isArray(e)) { const i = e; n = i.geometry && i.geometry.animations || i.animations } for (let i = 0; i < n.length; i++)if (n[i].name === t) return n[i]; return null } static CreateClipsFromMorphTargetSequences(e, t, n) { const i = {}, s = /^([\w-]*?)([\d]+)$/; for (let o = 0, l = e.length; o < l; o++) { const c = e[o], h = c.name.match(s); if (h && h.length > 1) { const u = h[1]; let d = i[u]; d || (i[u] = d = []), d.push(c) } } const a = []; for (const o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n)); return a } static parseAnimation(e, t) { if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const n = function (u, d, m, g, v) { if (m.length !== 0) { const p = [], f = []; Ka(m, p, f, g), p.length !== 0 && v.push(new u(d, p, f)) } }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode; let l = e.length || -1; const c = e.hierarchy || []; for (let u = 0; u < c.length; u++) { const d = c[u].keys; if (!(!d || d.length === 0)) if (d[0].morphTargets) { const m = {}; let g; for (g = 0; g < d.length; g++)if (d[g].morphTargets) for (let v = 0; v < d[g].morphTargets.length; v++)m[d[g].morphTargets[v]] = -1; for (const v in m) { const p = [], f = []; for (let E = 0; E !== d[g].morphTargets.length; ++E) { const _ = d[g]; p.push(_.time), f.push(_.morphTarget === v ? 1 : 0) } i.push(new mi(".morphTargetInfluence[" + v + "]", p, f)) } l = m.length * a } else { const m = ".bones[" + t[u].name + "]"; n(gi, m + ".position", d, "pos", i), n(Ln, m + ".quaternion", d, "rot", i), n(gi, m + ".scale", d, "scl", i) } } return i.length === 0 ? null : new this(s, l, i, o) } resetDuration() { const e = this.tracks; let t = 0; for (let n = 0, i = e.length; n !== i; ++n) { const s = this.tracks[n]; t = Math.max(t, s.times[s.times.length - 1]) } return this.duration = t, this } trim() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration); return this } validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++)e = e && this.tracks[t].validate(); return e } optimize() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].optimize(); return this } clone() { const e = []; for (let t = 0; t < this.tracks.length; t++)e.push(this.tracks[t].clone()); return new this.constructor(this.name, this.duration, e, this.blendMode) } toJSON() { return this.constructor.toJSON(this) } } function Jd(r) { switch (r.toLowerCase()) { case "scalar": case "double": case "float": case "number": case "integer": return mi; case "vector": case "vector2": case "vector3": case "vector4": return gi; case "color": return Za; case "quaternion": return Ln; case "bool": case "boolean": return ti; case "string": return ni }throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r) } function Qd(r) { if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = Jd(r.type); if (r.times === void 0) { const t = [], n = []; Ka(r.keys, t, n, "value"), r.times = t, r.values = n } return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation) } const Qt = { enabled: !1, files: {}, add: function (r, e) { this.enabled !== !1 && (this.files[r] = e) }, get: function (r) { if (this.enabled !== !1) return this.files[r] }, remove: function (r) { delete this.files[r] }, clear: function () { this.files = {} } }; class ef { constructor(e, t, n) { const i = this; let s = !1, a = 0, o = 0, l; const c = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (h) { o++, s === !1 && i.onStart !== void 0 && i.onStart(h, a, o), s = !0 }, this.itemEnd = function (h) { a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function (h) { i.onError !== void 0 && i.onError(h) }, this.resolveURL = function (h) { return l ? l(h) : h }, this.setURLModifier = function (h) { return l = h, this }, this.addHandler = function (h, u) { return c.push(h, u), this }, this.removeHandler = function (h) { const u = c.indexOf(h); return u !== -1 && c.splice(u, 2), this }, this.getHandler = function (h) { for (let u = 0, d = c.length; u < d; u += 2) { const m = c[u], g = c[u + 1]; if (m.global && (m.lastIndex = 0), m.test(h)) return g } return null } } } const tf = new ef; class pn { constructor(e) { this.manager = e !== void 0 ? e : tf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(e, t) { const n = this; return new Promise(function (i, s) { n.load(e, i, t, s) }) } parse() { } setCrossOrigin(e) { return this.crossOrigin = e, this } setWithCredentials(e) { return this.withCredentials = e, this } setPath(e) { return this.path = e, this } setResourcePath(e) { return this.resourcePath = e, this } setRequestHeader(e) { return this.requestHeader = e, this } } pn.DEFAULT_MATERIAL_NAME = "__DEFAULT"; const Jt = {}; class nf extends Error { constructor(e, t) { super(e), this.response = t } } class Qi extends pn { constructor(e) { super(e) } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const s = Qt.get(e); if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(s), this.manager.itemEnd(e) }, 0), s; if (Jt[e] !== void 0) { Jt[e].push({ onLoad: t, onProgress: n, onError: i }); return } Jt[e] = [], Jt[e].push({ onLoad: t, onProgress: n, onError: i }); const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, l = this.responseType; fetch(a).then(c => { if (c.status === 200 || c.status === 0) { if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c; const h = Jt[e], u = c.body.getReader(), d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0; let v = 0; const p = new ReadableStream({ start(f) { E(); function E() { u.read().then(({ done: _, value: b }) => { if (_) f.close(); else { v += b.byteLength; const L = new ProgressEvent("progress", { lengthComputable: g, loaded: v, total: m }); for (let w = 0, R = h.length; w < R; w++) { const z = h[w]; z.onProgress && z.onProgress(L) } f.enqueue(b), E() } }) } } }); return new Response(p) } else throw new nf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c) }).then(c => { switch (l) { case "arraybuffer": return c.arrayBuffer(); case "blob": return c.blob(); case "document": return c.text().then(h => new DOMParser().parseFromString(h, o)); case "json": return c.json(); default: if (o === void 0) return c.text(); { const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(d); return c.arrayBuffer().then(g => m.decode(g)) } } }).then(c => { Qt.add(e, c); const h = Jt[e]; delete Jt[e]; for (let u = 0, d = h.length; u < d; u++) { const m = h[u]; m.onLoad && m.onLoad(c) } }).catch(c => { const h = Jt[e]; if (h === void 0) throw this.manager.itemError(e), c; delete Jt[e]; for (let u = 0, d = h.length; u < d; u++) { const m = h[u]; m.onError && m.onError(c) } this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) } setResponseType(e) { return this.responseType = e, this } setMimeType(e) { return this.mimeType = e, this } } class $a extends pn { constructor(e) { super(e) } load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const s = this, a = Qt.get(e); if (a !== void 0) return s.manager.itemStart(e), setTimeout(function () { t && t(a), s.manager.itemEnd(e) }, 0), a; const o = pi("img"); function l() { h(), Qt.add(e, this), t && t(this), s.manager.itemEnd(e) } function c(u) { h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e) } function h() { o.removeEventListener("load", l, !1), o.removeEventListener("error", c, !1) } return o.addEventListener("load", l, !1), o.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o } } class ap extends pn { constructor(e) { super(e) } load(e, t, n, i) { const s = new Zr; s.colorSpace = ut; const a = new $a(this.manager); a.setCrossOrigin(this.crossOrigin), a.setPath(this.path); let o = 0; function l(c) { a.load(e[c], function (h) { s.images[c] = h, o++, o === 6 && (s.needsUpdate = !0, t && t(s)) }, void 0, i) } for (let c = 0; c < e.length; ++c)l(c); return s } } class Ja extends pn { constructor(e) { super(e) } load(e, t, n, i) { const s = new dt, a = new $a(this.manager); return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function (o) { s.image = o, s.needsUpdate = !0, t !== void 0 && t(s) }, n, i), s } } class ar extends it { constructor(e, t = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new ye(e), this.intensity = t } dispose() { } copy(e, t) { return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this } toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t } } const Or = new Be, xa = new P, Ma = new P; class rs { constructor(e) { this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Oe(512, 512), this.map = null, this.mapPass = null, this.matrix = new Be, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new $r, this._frameExtents = new Oe(1, 1), this._viewportCount = 1, this._viewports = [new Ze(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(e) { const t = this.camera, n = this.matrix; xa.setFromMatrixPosition(e.matrixWorld), t.position.copy(xa), Ma.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Ma), t.updateMatrixWorld(), Or.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Or), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(Or) } getViewport(e) { return this._viewports[e] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(e) { return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { const e = {}; return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } } class rf extends rs { constructor() { super(new Et(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1 } updateMatrices(e) { const t = this.camera, n = $n * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far; (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e) } copy(e) { return super.copy(e), this.focus = e.focus, this } } class sf extends ar { constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) { super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it, this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new rf } get power() { return this.intensity * Math.PI } set power(e) { this.intensity = e / Math.PI } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } const Sa = new Be, hi = new P, Br = new P; class af extends rs { constructor() { super(new Et(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new Oe(4, 2), this._viewportCount = 6, this._viewports = [new Ze(2, 1, 1, 1), new Ze(0, 1, 1, 1), new Ze(3, 1, 1, 1), new Ze(1, 1, 1, 1), new Ze(3, 0, 1, 1), new Ze(1, 0, 1, 1)], this._cubeDirections = [new P(1, 0, 0), new P(-1, 0, 0), new P(0, 0, 1), new P(0, 0, -1), new P(0, 1, 0), new P(0, -1, 0)], this._cubeUps = [new P(0, 1, 0), new P(0, 1, 0), new P(0, 1, 0), new P(0, 1, 0), new P(0, 0, 1), new P(0, 0, -1)] } updateMatrices(e, t = 0) { const n = this.camera, i = this.matrix, s = e.distance || n.far; s !== n.far && (n.far = s, n.updateProjectionMatrix()), hi.setFromMatrixPosition(e.matrixWorld), n.position.copy(hi), Br.copy(n.position), Br.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Br), n.updateMatrixWorld(), i.makeTranslation(-hi.x, -hi.y, -hi.z), Sa.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Sa) } } class of extends ar { constructor(e, t, n = 0, i = 2) { super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new af } get power() { return this.intensity * 4 * Math.PI } set power(e) { this.intensity = e / (4 * Math.PI) } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } } class lf extends rs { constructor() { super(new Jr(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } } class cf extends ar { constructor(e, t) { super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it, this.shadow = new lf } dispose() { this.shadow.dispose() } copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } class op extends ar { constructor(e, t) { super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight" } } class wn { static decodeText(e) { if (typeof TextDecoder < "u") return new TextDecoder().decode(e); let t = ""; for (let n = 0, i = e.length; n < i; n++)t += String.fromCharCode(e[n]); try { return decodeURIComponent(escape(t)) } catch { return t } } static extractUrlBase(e) { const t = e.lastIndexOf("/"); return t === -1 ? "./" : e.slice(0, t + 1) } static resolveURL(e, t) { return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) } } class hf extends pn { constructor(e) { super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" } } setOptions(e) { return this.options = e, this } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const s = this, a = Qt.get(e); if (a !== void 0) { if (s.manager.itemStart(e), a.then) { a.then(c => { t && t(c), s.manager.itemEnd(e) }).catch(c => { i && i(c) }); return } return setTimeout(function () { t && t(a), s.manager.itemEnd(e) }, 0), a } const o = {}; o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader; const l = fetch(e, o).then(function (c) { return c.blob() }).then(function (c) { return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" })) }).then(function (c) { return Qt.add(e, c), t && t(c), s.manager.itemEnd(e), c }).catch(function (c) { i && i(c), Qt.remove(e), s.manager.itemError(e), s.manager.itemEnd(e) }); Qt.add(e, l), s.manager.itemStart(e) } } const ss = "\\[\\]\\.:\\/", uf = new RegExp("[" + ss + "]", "g"), as = "[^" + ss + "]", df = "[^" + ss.replace("\\.", "") + "]", ff = /((?:WC+[\/:])*)/.source.replace("WC", as), pf = /(WCOD+)?/.source.replace("WCOD", df), mf = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", as), gf = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", as), _f = new RegExp("^" + ff + pf + mf + gf + "$"), vf = ["material", "materials", "bones", "map"]; class xf { constructor(e, t, n) { const i = n || qe.parseTrackName(t); this._targetGroup = e, this._bindings = e.subscribe_(t, i) } getValue(e, t) { this.bind(); const n = this._targetGroup.nCachedObjects_, i = this._bindings[n]; i !== void 0 && i.getValue(e, t) } setValue(e, t) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)n[i].setValue(e, t) } bind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind() } unbind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind() } } class qe { constructor(e, t, n) { this.path = t, this.parsedPath = n || qe.parseTrackName(t), this.node = qe.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } static create(e, t, n) { return e && e.isAnimationObjectGroup ? new qe.Composite(e, t, n) : new qe(e, t, n) } static sanitizeNodeName(e) { return e.replace(/\s/g, "_").replace(uf, "") } static parseTrackName(e) { const t = _f.exec(e); if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e); const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf("."); if (i !== void 0 && i !== -1) { const s = n.nodeName.substring(i + 1); vf.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n } static findNode(e, t) { if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e; if (e.skeleton) { const n = e.skeleton.getBoneByName(t); if (n !== void 0) return n } if (e.children) { const n = function (s) { for (let a = 0; a < s.length; a++) { const o = s[a]; if (o.name === t || o.uuid === t) return o; const l = n(o.children); if (l) return l } return null }, i = n(e.children); if (i) return i } return null } _getValue_unavailable() { } _setValue_unavailable() { } _getValue_direct(e, t) { e[t] = this.targetObject[this.propertyName] } _getValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)e[t++] = n[i] } _getValue_arrayElement(e, t) { e[t] = this.resolvedProperty[this.propertyIndex] } _getValue_toArray(e, t) { this.resolvedProperty.toArray(e, t) } _setValue_direct(e, t) { this.targetObject[this.propertyName] = e[t] } _setValue_direct_setNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0 } _setValue_direct_setMatrixWorldNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++] } _setValue_array_setNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++]; this.targetObject.needsUpdate = !0 } _setValue_array_setMatrixWorldNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, s = n.length; i !== s; ++i)n[i] = e[t++]; this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_arrayElement(e, t) { this.resolvedProperty[this.propertyIndex] = e[t] } _setValue_arrayElement_setNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0 } _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_fromArray(e, t) { this.resolvedProperty.fromArray(e, t) } _setValue_fromArray_setNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0 } _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0 } _getValue_unbound(e, t) { this.bind(), this.getValue(e, t) } _setValue_unbound(e, t) { this.bind(), this.setValue(e, t) } bind() { let e = this.node; const t = this.parsedPath, n = t.objectName, i = t.propertyName; let s = t.propertyIndex; if (e || (e = qe.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) { console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + "."); return } if (n) { let c = t.objectIndex; switch (n) { case "materials": if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.materials) { console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this); return } e = e.material.materials; break; case "bones": if (!e.skeleton) { console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this); return } e = e.skeleton.bones; for (let h = 0; h < e.length; h++)if (e[h].name === c) { c = h; break } break; case "map": if ("map" in e) { e = e.map; break } if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.map) { console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this); return } e = e.material.map; break; default: if (e[n] === void 0) { console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this); return } e = e[n] }if (c !== void 0) { if (e[c] === void 0) { console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e); return } e = e[c] } } const a = e[i]; if (a === void 0) { const c = t.nodeName; console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e); return } let o = this.Versioning.None; this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate); let l = this.BindingType.Direct; if (s !== void 0) { if (i === "morphTargetInfluences") { if (!e.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (!e.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return } e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]) } l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i; this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o] } unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } } qe.Composite = xf; qe.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }; qe.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }; qe.prototype.GetterByBindingType = [qe.prototype._getValue_direct, qe.prototype._getValue_array, qe.prototype._getValue_arrayElement, qe.prototype._getValue_toArray]; qe.prototype.SetterByBindingTypeAndVersioning = [[qe.prototype._setValue_direct, qe.prototype._setValue_direct_setNeedsUpdate, qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [qe.prototype._setValue_array, qe.prototype._setValue_array_setNeedsUpdate, qe.prototype._setValue_array_setMatrixWorldNeedsUpdate], [qe.prototype._setValue_arrayElement, qe.prototype._setValue_arrayElement_setNeedsUpdate, qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [qe.prototype._setValue_fromArray, qe.prototype._setValue_fromArray_setNeedsUpdate, qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]]; typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: er } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = er); function ya(r, e) { if (e === 0) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r; if (e === 2 || e === 1) { let t = r.getIndex(); if (t === null) { const a = [], o = r.getAttribute("position"); if (o !== void 0) { for (let l = 0; l < o.count; l++)a.push(l); r.setIndex(a), t = r.getIndex() } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r } const n = t.count - 2, i = []; if (t) if (e === 2) for (let a = 1; a <= n; a++)i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1)); else for (let a = 0; a < n; a++)a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a))); i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."); const s = r.clone(); return s.setIndex(i), s.clearGroups(), s } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r } const Mf = parseInt(er.replace(/\D+/g, "")); class Sf extends pn { constructor(e) { super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function (t) { return new bf(t) }), this.register(function (t) { return new Nf(t) }), this.register(function (t) { return new Uf(t) }), this.register(function (t) { return new Ff(t) }), this.register(function (t) { return new wf(t) }), this.register(function (t) { return new Cf(t) }), this.register(function (t) { return new Lf(t) }), this.register(function (t) { return new Pf(t) }), this.register(function (t) { return new Af(t) }), this.register(function (t) { return new Df(t) }), this.register(function (t) { return new Rf(t) }), this.register(function (t) { return new If(t) }), this.register(function (t) { return new Ef(t) }), this.register(function (t) { return new Of(t) }), this.register(function (t) { return new Bf(t) }) } load(e, t, n, i) { const s = this; let a; this.resourcePath !== "" ? a = this.resourcePath : this.path !== "" ? a = this.path : a = wn.extractUrlBase(e), this.manager.itemStart(e); const o = function (c) { i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e) }, l = new Qi(this.manager); l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function (c) { try { s.parse(c, a, function (h) { t(h), s.manager.itemEnd(e) }, o) } catch (h) { o(h) } }, n, o) } setDRACOLoader(e) { return this.dracoLoader = e, this } setDDSLoader() { throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".') } setKTX2Loader(e) { return this.ktx2Loader = e, this } setMeshoptDecoder(e) { return this.meshoptDecoder = e, this } register(e) { return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this } unregister(e) { return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this } parse(e, t, n, i) { let s; const a = {}, o = {}; if (typeof e == "string") s = JSON.parse(e); else if (e instanceof ArrayBuffer) if (wn.decodeText(new Uint8Array(e.slice(0, 4))) === Qa) { try { a[ze.KHR_BINARY_GLTF] = new Gf(e) } catch (h) { i && i(h); return } s = JSON.parse(a[ze.KHR_BINARY_GLTF].content) } else s = JSON.parse(wn.decodeText(new Uint8Array(e))); else s = e; if (s.asset === void 0 || s.asset.version[0] < 2) { i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")); return } const l = new Jf(s, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder }); l.fileLoader.setRequestHeader(this.requestHeader); for (let c = 0; c < this.pluginCallbacks.length; c++) { const h = this.pluginCallbacks[c](l); o[h.name] = h, a[h.name] = !0 } if (s.extensionsUsed) for (let c = 0; c < s.extensionsUsed.length; ++c) { const h = s.extensionsUsed[c], u = s.extensionsRequired || []; switch (h) { case ze.KHR_MATERIALS_UNLIT: a[h] = new Tf; break; case ze.KHR_DRACO_MESH_COMPRESSION: a[h] = new Hf(s, this.dracoLoader); break; case ze.KHR_TEXTURE_TRANSFORM: a[h] = new zf; break; case ze.KHR_MESH_QUANTIZATION: a[h] = new kf; break; default: u.indexOf(h) >= 0 && o[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".') } } l.setExtensions(a), l.setPlugins(o), l.parse(n, i) } parseAsync(e, t) { const n = this; return new Promise(function (i, s) { n.parse(e, t, i, s) }) } } function yf() { let r = {}; return { get: function (e) { return r[e] }, add: function (e, t) { r[e] = t }, remove: function (e) { delete r[e] }, removeAll: function () { r = {} } } } const ze = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" }; class Ef { constructor(e) { this.parser = e, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} } } _markDefs() { const e = this.parser, t = this.parser.json.nodes || []; for (let n = 0, i = t.length; n < i; n++) { const s = t[n]; s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light) } } _loadLight(e) { const t = this.parser, n = "light:" + e; let i = t.cache.get(n); if (i) return i; const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e]; let c; const h = new ye(16777215); l.color !== void 0 && h.fromArray(l.color); const u = l.range !== void 0 ? l.range : 0; switch (l.type) { case "directional": c = new cf(h), c.target.position.set(0, 0, -1), c.add(c.target); break; case "point": c = new of(h), c.distance = u; break; case "spot": c = new sf(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target); break; default: throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type) }return c.position.set(0, 0, 0), c.decay = 2, hn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i } getDependency(e, t) { if (e === "light") return this._loadLight(t) } createNodeAttachment(e) { const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light; return o === void 0 ? null : this._loadLight(o).then(function (l) { return n._getNodeRef(t.cache, o, l) }) } } class Tf { constructor() { this.name = ze.KHR_MATERIALS_UNLIT } getMaterialType() { return An } extendParams(e, t, n) { const i = []; e.color = new ye(1, 1, 1), e.opacity = 1; const s = t.pbrMetallicRoughness; if (s) { if (Array.isArray(s.baseColorFactor)) { const a = s.baseColorFactor; e.color.fromArray(a), e.opacity = a[3] } s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, 3001)) } return Promise.all(i) } } class Af { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH } extendMaterialParams(e, t) { const i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = i.extensions[this.name].emissiveStrength; return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve() } } class bf { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_CLEARCOAT } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = [], a = i.extensions[this.name]; if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) { const o = a.clearcoatNormalTexture.scale; t.clearcoatNormalScale = new Oe(o, o) } return Promise.all(s) } } class Rf { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_IRIDESCENCE } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = [], a = i.extensions[this.name]; return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s) } } class wf { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_SHEEN } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = []; t.sheenColor = new ye(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1; const a = i.extensions[this.name]; return a.sheenColorFactor !== void 0 && t.sheenColor.fromArray(a.sheenColorFactor), a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, 3001)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s) } } class Cf { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_TRANSMISSION } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = [], a = i.extensions[this.name]; return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s) } } class Lf { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_VOLUME } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = [], a = i.extensions[this.name]; t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0; const o = a.attenuationColor || [1, 1, 1]; return t.attenuationColor = new ye(o[0], o[1], o[2]), Promise.all(s) } } class Pf { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_IOR } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = i.extensions[this.name]; return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve() } } class Df { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_SPECULAR } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = [], a = i.extensions[this.name]; t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture)); const o = a.specularColorFactor || [1, 1, 1]; return t.specularColor = new ye(o[0], o[1], o[2]), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, 3001)), Promise.all(s) } } class If { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_ANISOTROPY } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : fn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const s = [], a = i.extensions[this.name]; return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s) } } class Nf { constructor(e) { this.parser = e, this.name = ze.KHR_TEXTURE_BASISU } loadTexture(e) { const t = this.parser, n = t.json, i = n.textures[e]; if (!i.extensions || !i.extensions[this.name]) return null; const s = i.extensions[this.name], a = t.options.ktx2Loader; if (!a) { if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"); return null } return t.loadTextureImage(e, s.source, a) } } class Uf { constructor(e) { this.parser = e, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null } loadTexture(e) { const t = this.name, n = this.parser, i = n.json, s = i.textures[e]; if (!s.extensions || !s.extensions[t]) return null; const a = s.extensions[t], o = i.images[a.source]; let l = n.textureLoader; if (o.uri) { const c = n.options.manager.getHandler(o.uri); c !== null && (l = c) } return this.detectSupport().then(function (c) { if (c) return n.loadTextureImage(e, a.source, l); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { const t = new Image; t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } } class Ff { constructor(e) { this.parser = e, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null } loadTexture(e) { const t = this.name, n = this.parser, i = n.json, s = i.textures[e]; if (!s.extensions || !s.extensions[t]) return null; const a = s.extensions[t], o = i.images[a.source]; let l = n.textureLoader; if (o.uri) { const c = n.options.manager.getHandler(o.uri); c !== null && (l = c) } return this.detectSupport().then(function (c) { if (c) return n.loadTextureImage(e, a.source, l); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { const t = new Image; t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } } class Of { constructor(e) { this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = e } loadBufferView(e) { const t = this.parser.json, n = t.bufferViews[e]; if (n.extensions && n.extensions[this.name]) { const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder; if (!a || !a.supported) { if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"); return null } return s.then(function (o) { const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, l, c); return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function (m) { return m.buffer }) : a.ready.then(function () { const m = new ArrayBuffer(h * u); return a.decodeGltfBuffer(new Uint8Array(m), h, u, d, i.mode, i.filter), m }) }) } else return null } } class Bf { constructor(e) { this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = e } createNodeMesh(e) { const t = this.parser.json, n = t.nodes[e]; if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null; const i = t.meshes[n.mesh]; for (const c of i.primitives) if (c.mode !== Pt.TRIANGLES && c.mode !== Pt.TRIANGLE_STRIP && c.mode !== Pt.TRIANGLE_FAN && c.mode !== void 0) return null; const a = n.extensions[this.name].attributes, o = [], l = {}; for (const c in a) o.push(this.parser.getDependency("accessor", a[c]).then(h => (l[c] = h, l[c]))); return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then(c => { const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, m = []; for (const g of u) { const v = new Be, p = new P, f = new dn, E = new P(1, 1, 1), _ = new zd(g.geometry, g.material, d); for (let b = 0; b < d; b++)l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, b), l.ROTATION && f.fromBufferAttribute(l.ROTATION, b), l.SCALE && E.fromBufferAttribute(l.SCALE, b), _.setMatrixAt(b, v.compose(p, f, E)); for (const b in l) b !== "TRANSLATION" && b !== "ROTATION" && b !== "SCALE" && g.geometry.setAttribute(b, l[b]); it.prototype.copy.call(_, g), this.parser.assignFinalMaterial(_), m.push(_) } return h.isGroup ? (h.clear(), h.add(...m), h) : m[0] })) } } const Qa = "glTF", ui = 12, Ea = { JSON: 1313821514, BIN: 5130562 }; class Gf { constructor(e) { this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null; const t = new DataView(e, 0, ui); if (this.header = { magic: wn.decodeText(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, !0), length: t.getUint32(8, !0) }, this.header.magic !== Qa) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header."); if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected."); const n = this.header.length - ui, i = new DataView(e, ui); let s = 0; for (; s < n;) { const a = i.getUint32(s, !0); s += 4; const o = i.getUint32(s, !0); if (s += 4, o === Ea.JSON) { const l = new Uint8Array(e, ui + s, a); this.content = wn.decodeText(l) } else if (o === Ea.BIN) { const l = ui + s; this.body = e.slice(l, l + a) } s += a } if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.") } } class Hf { constructor(e, t) { if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided."); this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload() } decodePrimitive(e, t) { const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {}; for (const h in a) { const u = qr[h] || h.toLowerCase(); o[u] = a[h] } for (const h in e.attributes) { const u = qr[h] || h.toLowerCase(); if (a[h] !== void 0) { const d = n.accessors[e.attributes[h]], m = Zn[d.componentType]; c[u] = m.name, l[u] = d.normalized === !0 } } return t.getDependency("bufferView", s).then(function (h) { return new Promise(function (u) { i.decodeDracoFile(h, function (d) { for (const m in d.attributes) { const g = d.attributes[m], v = l[m]; v !== void 0 && (g.normalized = v) } u(d) }, o, c) }) }) } } class zf { constructor() { this.name = ze.KHR_TEXTURE_TRANSFORM } extendTexture(e, t) { return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e } } class kf { constructor() { this.name = ze.KHR_MESH_QUANTIZATION } } class eo extends vi { constructor(e, t, n, i) { super(e, t, n, i) } copySampleValue_(e) { const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i; for (let a = 0; a !== i; a++)t[a] = n[s + a]; return t } interpolate_(e, t, n, i) { const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, d = u * u, m = d * u, g = e * c, v = g - c, p = -2 * m + 3 * d, f = m - d, E = 1 - p, _ = f - d + u; for (let b = 0; b !== o; b++) { const L = a[v + b + o], w = a[v + b + l] * h, R = a[g + b + o], z = a[g + b] * h; s[b] = E * L + _ * w + p * R + f * z } return s } } const Vf = new dn; class Wf extends eo { interpolate_(e, t, n, i) { const s = super.interpolate_(e, t, n, i); return Vf.fromArray(s).normalize().toArray(s), s } } const Pt = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Zn = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, Ta = { 9728: 1003, 9729: 1006, 9984: 1004, 9985: 1007, 9986: 1005, 9987: 1008 }, Aa = { 33071: 1001, 33648: 1002, 10497: 1e3 }, Gr = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, qr = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", ...Mf >= 152 ? { TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3" } : { TEXCOORD_0: "uv", TEXCOORD_1: "uv2" }, COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, cn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, Xf = { CUBICSPLINE: void 0, LINEAR: 2301, STEP: 2300 }, Hr = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" }; function qf(r) { return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new is({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: !1, depthTest: !0, side: 0 })), r.DefaultMaterial } function Sn(r, e, t) { for (const n in t.extensions) r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]) } function hn(r, e) { e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras)) } function Yf(r, e, t) { let n = !1, i = !1, s = !1; for (let c = 0, h = e.length; c < h; c++) { const u = e[c]; if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (s = !0), n && i && s) break } if (!n && !i && !s) return Promise.resolve(r); const a = [], o = [], l = []; for (let c = 0, h = e.length; c < h; c++) { const u = e[c]; if (n) { const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position; a.push(d) } if (i) { const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal; o.push(d) } if (s) { const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color; l.push(d) } } return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(function (c) { const h = c[0], u = c[1], d = c[2]; return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = !0, r }) } function jf(r, e) { if (r.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++)r.morphTargetInfluences[t] = e.weights[t]; if (e.extras && Array.isArray(e.extras.targetNames)) { const t = e.extras.targetNames; if (r.morphTargetInfluences.length === t.length) { r.morphTargetDictionary = {}; for (let n = 0, i = t.length; n < i; n++)r.morphTargetDictionary[t[n]] = n } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.") } } function Kf(r) { let e; const t = r.extensions && r.extensions[ze.KHR_DRACO_MESH_COMPRESSION]; if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + zr(t.attributes) : e = r.indices + ":" + zr(r.attributes) + ":" + r.mode, r.targets !== void 0) for (let n = 0, i = r.targets.length; n < i; n++)e += ":" + zr(r.targets[n]); return e } function zr(r) { let e = ""; const t = Object.keys(r).sort(); for (let n = 0, i = t.length; n < i; n++)e += t[n] + ":" + r[t[n]] + ";"; return e } function Yr(r) { switch (r) { case Int8Array: return 1 / 127; case Uint8Array: return 1 / 255; case Int16Array: return 1 / 32767; case Uint16Array: return 1 / 65535; default: throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.") } } function Zf(r) { return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png" } const $f = new Be; class Jf { constructor(e = {}, t = {}) { this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new yf, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {}; let n = !1, i = !1, s = -1; typeof navigator < "u" && typeof navigator.userAgent < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, i = navigator.userAgent.indexOf("Firefox") > -1, s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new Ja(this.options.manager) : this.textureLoader = new hf(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Qi(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0) } setExtensions(e) { this.extensions = e } setPlugins(e) { this.plugins = e } parse(e, t) { const n = this, i = this.json, s = this.extensions; this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function (a) { return a._markDefs && a._markDefs() }), Promise.all(this._invokeAll(function (a) { return a.beforeRoot && a.beforeRoot() })).then(function () { return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]) }).then(function (a) { const o = { scene: a[0][i.scene || 0], scenes: a[0], animations: a[1], cameras: a[2], asset: i.asset, parser: n, userData: {} }; Sn(s, o, i), hn(o, i), Promise.all(n._invokeAll(function (l) { return l.afterRoot && l.afterRoot(o) })).then(function () { e(o) }) }).catch(t) } _markDefs() { const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || []; for (let i = 0, s = t.length; i < s; i++) { const a = t[i].joints; for (let o = 0, l = a.length; o < l; o++)e[a[o]].isBone = !0 } for (let i = 0, s = e.length; i < s; i++) { const a = e[i]; a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera) } } _addNodeRef(e, t) { t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++) } _getNodeRef(e, t, n) { if (e.refs[t] <= 1) return n; const i = n.clone(), s = (a, o) => { const l = this.associations.get(a); l != null && this.associations.set(o, l); for (const [c, h] of a.children.entries()) s(h, o.children[c]) }; return s(n, i), i.name += "_instance_" + e.uses[t]++, i } _invokeOne(e) { const t = Object.values(this.plugins); t.push(this); for (let n = 0; n < t.length; n++) { const i = e(t[n]); if (i) return i } return null } _invokeAll(e) { const t = Object.values(this.plugins); t.unshift(this); const n = []; for (let i = 0; i < t.length; i++) { const s = e(t[i]); s && n.push(s) } return n } getDependency(e, t) { const n = e + ":" + t; let i = this.cache.get(n); if (!i) { switch (e) { case "scene": i = this.loadScene(t); break; case "node": i = this._invokeOne(function (s) { return s.loadNode && s.loadNode(t) }); break; case "mesh": i = this._invokeOne(function (s) { return s.loadMesh && s.loadMesh(t) }); break; case "accessor": i = this.loadAccessor(t); break; case "bufferView": i = this._invokeOne(function (s) { return s.loadBufferView && s.loadBufferView(t) }); break; case "buffer": i = this.loadBuffer(t); break; case "material": i = this._invokeOne(function (s) { return s.loadMaterial && s.loadMaterial(t) }); break; case "texture": i = this._invokeOne(function (s) { return s.loadTexture && s.loadTexture(t) }); break; case "skin": i = this.loadSkin(t); break; case "animation": i = this._invokeOne(function (s) { return s.loadAnimation && s.loadAnimation(t) }); break; case "camera": i = this.loadCamera(t); break; default: if (i = this._invokeOne(function (s) { return s != this && s.getDependency && s.getDependency(e, t) }), !i) throw new Error("Unknown type: " + e); break }this.cache.add(n, i) } return i } getDependencies(e) { let t = this.cache.get(e); if (!t) { const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || []; t = Promise.all(i.map(function (s, a) { return n.getDependency(e, a) })), this.cache.add(e, t) } return t } loadBuffer(e) { const t = this.json.buffers[e], n = this.fileLoader; if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported."); if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body); const i = this.options; return new Promise(function (s, a) { n.load(wn.resolveURL(t.uri, i.path), s, void 0, function () { a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')) }) }) } loadBufferView(e) { const t = this.json.bufferViews[e]; return this.getDependency("buffer", t.buffer).then(function (n) { const i = t.byteLength || 0, s = t.byteOffset || 0; return n.slice(s, s + i) }) } loadAccessor(e) { const t = this, n = this.json, i = this.json.accessors[e]; if (i.bufferView === void 0 && i.sparse === void 0) { const a = Gr[i.type], o = Zn[i.componentType], l = i.normalized === !0, c = new o(i.count * a); return Promise.resolve(new mt(c, a, l)) } const s = []; return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function (a) { const o = a[0], l = Gr[i.type], c = Zn[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0; let v, p; if (m && m !== u) { const f = Math.floor(d / m), E = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count; let _ = t.cache.get(E); _ || (v = new c(o, f * m, i.count * m / h), _ = new Ud(v, m / h), t.cache.add(E, _)), p = new es(_, l, d % m / h, g) } else o === null ? v = new c(i.count * l) : v = new c(o, d, i.count * l), p = new mt(v, l, g); if (i.sparse !== void 0) { const f = Gr.SCALAR, E = Zn[i.sparse.indices.componentType], _ = i.sparse.indices.byteOffset || 0, b = i.sparse.values.byteOffset || 0, L = new E(a[1], _, i.sparse.count * f), w = new c(a[2], b, i.sparse.count * l); o !== null && (p = new mt(p.array.slice(), p.itemSize, p.normalized)); for (let R = 0, z = L.length; R < z; R++) { const ne = L[R]; if (p.setX(ne, w[R * l]), l >= 2 && p.setY(ne, w[R * l + 1]), l >= 3 && p.setZ(ne, w[R * l + 2]), l >= 4 && p.setW(ne, w[R * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.") } } return p }) } loadTexture(e) { const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s]; let o = this.textureLoader; if (a.uri) { const l = n.manager.getHandler(a.uri); l !== null && (o = l) } return this.loadTextureImage(e, s, o) } loadTextureImage(e, t, n) { const i = this, s = this.json, a = s.textures[e], o = s.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler; if (this.textureCache[l]) return this.textureCache[l]; const c = this.loadImageSource(t, n).then(function (h) { h.flipY = !1, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri); const d = (s.samplers || {})[a.sampler] || {}; return h.magFilter = Ta[d.magFilter] || 1006, h.minFilter = Ta[d.minFilter] || 1008, h.wrapS = Aa[d.wrapS] || 1e3, h.wrapT = Aa[d.wrapT] || 1e3, i.associations.set(h, { textures: e }), h }).catch(function () { return null }); return this.textureCache[l] = c, c } loadImageSource(e, t) { const n = this, i = this.json, s = this.options; if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then(u => u.clone()); const a = i.images[e], o = self.URL || self.webkitURL; let l = a.uri || "", c = !1; if (a.bufferView !== void 0) l = n.getDependency("bufferView", a.bufferView).then(function (u) { c = !0; const d = new Blob([u], { type: a.mimeType }); return l = o.createObjectURL(d), l }); else if (a.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"); const h = Promise.resolve(l).then(function (u) { return new Promise(function (d, m) { let g = d; t.isImageBitmapLoader === !0 && (g = function (v) { const p = new dt(v); p.needsUpdate = !0, d(p) }), t.load(wn.resolveURL(u, s.path), g, void 0, m) }) }).then(function (u) { return c === !0 && o.revokeObjectURL(l), u.userData.mimeType = a.mimeType || Zf(a.uri), u }).catch(function (u) { throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u }); return this.sourceCache[e] = h, h } assignTexture(e, t, n, i) { const s = this; return this.getDependency("texture", n.index).then(function (a) { if (!a) return null; if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[ze.KHR_TEXTURE_TRANSFORM]) { const o = n.extensions !== void 0 ? n.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0; if (o) { const l = s.associations.get(a); a = s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, l) } } return i !== void 0 && ("colorSpace" in a ? a.colorSpace = i === 3001 ? "srgb" : "srgb-linear" : a.encoding = i), e[t] = a, a }) } assignFinalMaterial(e) { const t = e.geometry; let n = e.material; const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0; if (e.isPoints) { const o = "PointsMaterial:" + n.uuid; let l = this.cache.get(o); l || (l = new Ya, Ht.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(o, l)), n = l } else if (e.isLine) { const o = "LineBasicMaterial:" + n.uuid; let l = this.cache.get(o); l || (l = new qa, Ht.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l } if (i || s || a) { let o = "ClonedMaterial:" + n.uuid + ":"; i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:"); let l = this.cache.get(o); l || (l = n.clone(), s && (l.vertexColors = !0), a && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l } e.material = n } getMaterialType() { return is } loadMaterial(e) { const t = this, n = this.json, i = this.extensions, s = n.materials[e]; let a; const o = {}, l = s.extensions || {}, c = []; if (l[ze.KHR_MATERIALS_UNLIT]) { const u = i[ze.KHR_MATERIALS_UNLIT]; a = u.getMaterialType(), c.push(u.extendParams(o, s, t)) } else { const u = s.pbrMetallicRoughness || {}; if (o.color = new ye(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) { const d = u.baseColorFactor; o.color.fromArray(d), o.opacity = d[3] } u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, 3001)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function (d) { return d.getMaterialType && d.getMaterialType(e) }), c.push(Promise.all(this._invokeAll(function (d) { return d.extendMaterialParams && d.extendMaterialParams(e, o) }))) } s.doubleSided === !0 && (o.side = 2); const h = s.alphaMode || Hr.OPAQUE; if (h === Hr.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, h === Hr.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : .5)), s.normalTexture !== void 0 && a !== An && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Oe(1, 1), s.normalTexture.scale !== void 0)) { const u = s.normalTexture.scale; o.normalScale.set(u, u) } return s.occlusionTexture !== void 0 && a !== An && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== An && (o.emissive = new ye().fromArray(s.emissiveFactor)), s.emissiveTexture !== void 0 && a !== An && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, 3001)), Promise.all(c).then(function () { const u = new a(o); return s.name && (u.name = s.name), hn(u, s), t.associations.set(u, { materials: e }), s.extensions && Sn(i, u, s), u }) } createUniqueName(e) { const t = qe.sanitizeNodeName(e || ""); return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t) } loadGeometries(e) { const t = this, n = this.extensions, i = this.primitiveCache; function s(o) { return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function (l) { return ba(l, o, t) }) } const a = []; for (let o = 0, l = e.length; o < l; o++) { const c = e[o], h = Kf(c), u = i[h]; if (u) a.push(u.promise); else { let d; c.extensions && c.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? d = s(c) : d = ba(new Nt, c, t), i[h] = { primitive: c, promise: d }, a.push(d) } } return Promise.all(a) } loadMesh(e) { const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = []; for (let l = 0, c = a.length; l < c; l++) { const h = a[l].material === void 0 ? qf(this.cache) : this.getDependency("material", a[l].material); o.push(h) } return o.push(t.loadGeometries(a)), Promise.all(o).then(function (l) { const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = []; for (let m = 0, g = h.length; m < g; m++) { const v = h[m], p = a[m]; let f; const E = c[m]; if (p.mode === Pt.TRIANGLES || p.mode === Pt.TRIANGLE_STRIP || p.mode === Pt.TRIANGLE_FAN || p.mode === void 0) f = s.isSkinnedMesh === !0 ? new Od(v, E) : new Rt(v, E), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), p.mode === Pt.TRIANGLE_STRIP ? f.geometry = ya(f.geometry, 1) : p.mode === Pt.TRIANGLE_FAN && (f.geometry = ya(f.geometry, 2)); else if (p.mode === Pt.LINES) f = new kd(v, E); else if (p.mode === Pt.LINE_STRIP) f = new ns(v, E); else if (p.mode === Pt.LINE_LOOP) f = new Vd(v, E); else if (p.mode === Pt.POINTS) f = new Wd(v, E); else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode); Object.keys(f.geometry.morphAttributes).length > 0 && jf(f, s), f.name = t.createUniqueName(s.name || "mesh_" + e), hn(f, s), p.extensions && Sn(i, f, p), t.assignFinalMaterial(f), u.push(f) } for (let m = 0, g = u.length; m < g; m++)t.associations.set(u[m], { meshes: e, primitives: m }); if (u.length === 1) return s.extensions && Sn(i, u[0], s), u[0]; const d = new bn; s.extensions && Sn(i, d, s), t.associations.set(d, { meshes: e }); for (let m = 0, g = u.length; m < g; m++)d.add(u[m]); return d }) } loadCamera(e) { let t; const n = this.json.cameras[e], i = n[n.type]; if (!i) { console.warn("THREE.GLTFLoader: Missing camera parameters."); return } return n.type === "perspective" ? t = new Et(To.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Jr(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), hn(t, n), Promise.resolve(t) } loadSkin(e) { const t = this.json.skins[e], n = []; for (let i = 0, s = t.joints.length; i < s; i++)n.push(this._loadNodeShallow(t.joints[i])); return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function (i) { const s = i.pop(), a = i, o = [], l = []; for (let c = 0, h = a.length; c < h; c++) { const u = a[c]; if (u) { o.push(u); const d = new Be; s !== null && d.fromArray(s.array, c * 16), l.push(d) } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]) } return new ts(o, l) }) } loadAnimation(e) { const n = this.json.animations[e], i = n.name ? n.name : "animation_" + e, s = [], a = [], o = [], l = [], c = []; for (let h = 0, u = n.channels.length; h < u; h++) { const d = n.channels[h], m = n.samplers[d.sampler], g = d.target, v = g.node, p = n.parameters !== void 0 ? n.parameters[m.input] : m.input, f = n.parameters !== void 0 ? n.parameters[m.output] : m.output; g.node !== void 0 && (s.push(this.getDependency("node", v)), a.push(this.getDependency("accessor", p)), o.push(this.getDependency("accessor", f)), l.push(m), c.push(g)) } return Promise.all([Promise.all(s), Promise.all(a), Promise.all(o), Promise.all(l), Promise.all(c)]).then(function (h) { const u = h[0], d = h[1], m = h[2], g = h[3], v = h[4], p = []; for (let f = 0, E = u.length; f < E; f++) { const _ = u[f], b = d[f], L = m[f], w = g[f], R = v[f]; if (_ === void 0) continue; _.updateMatrix(); let z; switch (cn[R.path]) { case cn.weights: z = mi; break; case cn.rotation: z = Ln; break; case cn.position: case cn.scale: default: z = gi; break }const ne = _.name ? _.name : _.uuid, M = w.interpolation !== void 0 ? Xf[w.interpolation] : 2301, A = []; cn[R.path] === cn.weights ? _.traverse(function (q) { q.morphTargetInfluences && A.push(q.name ? q.name : q.uuid) }) : A.push(ne); let W = L.array; if (L.normalized) { const q = Yr(W.constructor), C = new Float32Array(W.length); for (let O = 0, G = W.length; O < G; O++)C[O] = W[O] * q; W = C } for (let q = 0, C = A.length; q < C; q++) { const O = new z(A[q] + "." + cn[R.path], b.array, W, M); w.interpolation === "CUBICSPLINE" && (O.createInterpolant = function (X) { const k = this instanceof Ln ? Wf : eo; return new k(this.times, this.values, this.getValueSize() / 3, X) }, O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), p.push(O) } } return new $d(i, void 0, p) }) } createNodeMesh(e) { const t = this.json, n = this, i = t.nodes[e]; return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function (s) { const a = n._getNodeRef(n.meshCache, i.mesh, s); return i.weights !== void 0 && a.traverse(function (o) { if (o.isMesh) for (let l = 0, c = i.weights.length; l < c; l++)o.morphTargetInfluences[l] = i.weights[l] }), a }) } loadNode(e) { const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || []; for (let c = 0, h = o.length; c < h; c++)a.push(n.getDependency("node", o[c])); const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin); return Promise.all([s, Promise.all(a), l]).then(function (c) { const h = c[0], u = c[1], d = c[2]; d !== null && h.traverse(function (m) { m.isSkinnedMesh && m.bind(d, $f) }); for (let m = 0, g = u.length; m < g; m++)h.add(u[m]); return h }) } _loadNodeShallow(e) { const t = this.json, n = this.extensions, i = this; if (this.nodeCache[e] !== void 0) return this.nodeCache[e]; const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], l = i._invokeOne(function (c) { return c.createNodeMesh && c.createNodeMesh(e) }); return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function (c) { return i._getNodeRef(i.cameraCache, s.camera, c) })), i._invokeAll(function (c) { return c.createNodeAttachment && c.createNodeAttachment(e) }).forEach(function (c) { o.push(c) }), this.nodeCache[e] = Promise.all(o).then(function (c) { let h; if (s.isBone === !0 ? h = new Xa : c.length > 1 ? h = new bn : c.length === 1 ? h = c[0] : h = new it, h !== c[0]) for (let u = 0, d = c.length; u < d; u++)h.add(c[u]); if (s.name && (h.userData.name = s.name, h.name = a), hn(h, s), s.extensions && Sn(n, h, s), s.matrix !== void 0) { const u = new Be; u.fromArray(s.matrix), h.applyMatrix4(u) } else s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale); return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h }), this.nodeCache[e] } loadScene(e) { const t = this.extensions, n = this.json.scenes[e], i = this, s = new bn; n.name && (s.name = i.createUniqueName(n.name)), hn(s, n), n.extensions && Sn(t, s, n); const a = n.nodes || [], o = []; for (let l = 0, c = a.length; l < c; l++)o.push(i.getDependency("node", a[l])); return Promise.all(o).then(function (l) { for (let h = 0, u = l.length; h < u; h++)s.add(l[h]); const c = h => { const u = new Map; for (const [d, m] of i.associations) (d instanceof Ht || d instanceof dt) && u.set(d, m); return h.traverse(d => { const m = i.associations.get(d); m != null && u.set(d, m) }), u }; return i.associations = c(s), s }) } } function Qf(r, e, t) { const n = e.attributes, i = new tn; if (n.POSITION !== void 0) { const o = t.json.accessors[n.POSITION], l = o.min, c = o.max; if (l !== void 0 && c !== void 0) { if (i.set(new P(l[0], l[1], l[2]), new P(c[0], c[1], c[2])), o.normalized) { const h = Yr(Zn[o.componentType]); i.min.multiplyScalar(h), i.max.multiplyScalar(h) } } else { console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."); return } } else return; const s = e.targets; if (s !== void 0) { const o = new P, l = new P; for (let c = 0, h = s.length; c < h; c++) { const u = s[c]; if (u.POSITION !== void 0) { const d = t.json.accessors[u.POSITION], m = d.min, g = d.max; if (m !== void 0 && g !== void 0) { if (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))), d.normalized) { const v = Yr(Zn[d.componentType]); l.multiplyScalar(v) } o.max(l) } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.") } } i.expandByVector(o) } r.boundingBox = i; const a = new Wt; i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a } function ba(r, e, t) { const n = e.attributes, i = []; function s(a, o) { return t.getDependency("accessor", a).then(function (l) { r.setAttribute(o, l) }) } for (const a in n) { const o = qr[a] || a.toLowerCase(); o in r.attributes || i.push(s(n[a], o)) } if (e.indices !== void 0 && !r.index) { const a = t.getDependency("accessor", e.indices).then(function (o) { r.setIndex(o) }); i.push(a) } return hn(r, e), Qf(r, e, t), Promise.all(i).then(function () { return e.targets !== void 0 ? Yf(r, e.targets, t) : r }) } const kr = new WeakMap; class ep extends pn {
	constructor(e) { super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = { position: "POSITION", normal: "NORMAL", color: "COLOR", uv: "TEX_COORD" }, this.defaultAttributeTypes = { position: "Float32Array", normal: "Float32Array", color: "Float32Array", uv: "Float32Array" } } setDecoderPath(e) { return this.decoderPath = e, this } setDecoderConfig(e) { return this.decoderConfig = e, this } setWorkerLimit(e) { return this.workerLimit = e, this } load(e, t, n, i) { const s = new Qi(this.manager); s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, a => { const o = { attributeIDs: this.defaultAttributeIDs, attributeTypes: this.defaultAttributeTypes, useUniqueIDs: !1 }; this.decodeGeometry(a, o).then(t).catch(i) }, n, i) } decodeDracoFile(e, t, n, i) { const s = { attributeIDs: n || this.defaultAttributeIDs, attributeTypes: i || this.defaultAttributeTypes, useUniqueIDs: !!n }; this.decodeGeometry(e, s).then(t) } decodeGeometry(e, t) { for (const l in t.attributeTypes) { const c = t.attributeTypes[l]; c.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[l] = c.name) } const n = JSON.stringify(t); if (kr.has(e)) { const l = kr.get(e); if (l.key === n) return l.promise; if (e.byteLength === 0) throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.") } let i; const s = this.workerNextTaskID++, a = e.byteLength, o = this._getWorker(s, a).then(l => (i = l, new Promise((c, h) => { i._callbacks[s] = { resolve: c, reject: h }, i.postMessage({ type: "decode", id: s, taskConfig: t, buffer: e }, [e]) }))).then(l => this._createGeometry(l.geometry)); return o.catch(() => !0).then(() => { i && s && this._releaseTask(i, s) }), kr.set(e, { key: n, promise: o }), o } _createGeometry(e) { const t = new Nt; e.index && t.setIndex(new mt(e.index.array, 1)); for (let n = 0; n < e.attributes.length; n++) { const i = e.attributes[n], s = i.name, a = i.array, o = i.itemSize; t.setAttribute(s, new mt(a, o)) } return t } _loadLibrary(e, t) { const n = new Qi(this.manager); return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((i, s) => { n.load(e, i, void 0, s) }) } preload() { return this._initDecoder(), this } _initDecoder() {
		if (this.decoderPending) return this.decoderPending; const e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = []; return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then(n => {
			const i = n[0]; e || (this.decoderConfig.wasmBinary = n[1]); const s = tp.toString(), a = ["/* draco decoder */", i, "", "/* worker */", s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))].join(`
`); this.workerSourceURL = URL.createObjectURL(new Blob([a]))
		}), this.decoderPending
	} _getWorker(e, t) { return this._initDecoder().then(() => { if (this.workerPool.length < this.workerLimit) { const i = new Worker(this.workerSourceURL); i._callbacks = {}, i._taskCosts = {}, i._taskLoad = 0, i.postMessage({ type: "init", decoderConfig: this.decoderConfig }), i.onmessage = function (s) { const a = s.data; switch (a.type) { case "decode": i._callbacks[a.id].resolve(a); break; case "error": i._callbacks[a.id].reject(a); break; default: console.error('THREE.DRACOLoader: Unexpected message, "' + a.type + '"') } }, this.workerPool.push(i) } else this.workerPool.sort(function (i, s) { return i._taskLoad > s._taskLoad ? -1 : 1 }); const n = this.workerPool[this.workerPool.length - 1]; return n._taskCosts[e] = t, n._taskLoad += t, n }) } _releaseTask(e, t) { e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t] } debug() { console.log("Task load: ", this.workerPool.map(e => e._taskLoad)) } dispose() { for (let e = 0; e < this.workerPool.length; ++e)this.workerPool[e].terminate(); return this.workerPool.length = 0, this }
} function tp() { let r, e; onmessage = function (a) { const o = a.data; switch (o.type) { case "init": r = o.decoderConfig, e = new Promise(function (h) { r.onModuleLoaded = function (u) { h({ draco: u }) }, DracoDecoderModule(r) }); break; case "decode": const l = o.buffer, c = o.taskConfig; e.then(h => { const u = h.draco, d = new u.Decoder, m = new u.DecoderBuffer; m.Init(new Int8Array(l), l.byteLength); try { const g = t(u, d, m, c), v = g.attributes.map(p => p.array.buffer); g.index && v.push(g.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: g }, v) } catch (g) { console.error(g), self.postMessage({ type: "error", id: o.id, error: g.message }) } finally { u.destroy(m), u.destroy(d) } }); break } }; function t(a, o, l, c) { const h = c.attributeIDs, u = c.attributeTypes; let d, m; const g = o.GetEncodedGeometryType(l); if (g === a.TRIANGULAR_MESH) d = new a.Mesh, m = o.DecodeBufferToMesh(l, d); else if (g === a.POINT_CLOUD) d = new a.PointCloud, m = o.DecodeBufferToPointCloud(l, d); else throw new Error("THREE.DRACOLoader: Unexpected geometry type."); if (!m.ok() || d.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + m.error_msg()); const v = { index: null, attributes: [] }; for (const p in h) { const f = self[u[p]]; let E, _; if (c.useUniqueIDs) _ = h[p], E = o.GetAttributeByUniqueId(d, _); else { if (_ = o.GetAttributeId(d, a[h[p]]), _ === -1) continue; E = o.GetAttribute(d, _) } v.attributes.push(i(a, o, d, p, f, E)) } return g === a.TRIANGULAR_MESH && (v.index = n(a, o, d)), a.destroy(d), v } function n(a, o, l) { const h = l.num_faces() * 3, u = h * 4, d = a._malloc(u); o.GetTrianglesUInt32Array(l, u, d); const m = new Uint32Array(a.HEAPF32.buffer, d, h).slice(); return a._free(d), { array: m, itemSize: 1 } } function i(a, o, l, c, h, u) { const d = u.num_components(), g = l.num_points() * d, v = g * h.BYTES_PER_ELEMENT, p = s(a, h), f = a._malloc(v); o.GetAttributeDataArrayForAllPoints(l, u, p, v, f); const E = new h(a.HEAPF32.buffer, f, g).slice(); return a._free(f), { name: c, array: E, itemSize: d } } function s(a, o) { switch (o) { case Float32Array: return a.DT_FLOAT32; case Int8Array: return a.DT_INT8; case Int16Array: return a.DT_INT16; case Int32Array: return a.DT_INT32; case Uint8Array: return a.DT_UINT8; case Uint16Array: return a.DT_UINT16; case Uint32Array: return a.DT_UINT32 } } } Qt.enabled = !0; const to = new ep, no = new Sf; to.setDecoderPath("/assets/draco/"); no.setDRACOLoader(to); const lp = no, cp = new Ja, hp = r => { r == null || r.traverse(e => { if (e.isMesh) if (e.geometry.dispose(), e.material.isMaterial) Ra(e.material); else for (const t of e.material) Ra(t) }) }, Ra = r => { var e, t, n; r.dispose(); for (const i of Object.keys(r)) { const s = r[i]; s && typeof s == "object" && "minFilter" in s && (s.dispose(), (n = (t = (e = s.source) == null ? void 0 : e.data) == null ? void 0 : t.close) == null || n.call(t)) } }, up = r => { r.dispose(), r = null }, dp = r => { for (const e of r) e.parent.remove(e) }; export { op as A, ye as C, cf as D, bn as G, en as L, Rt as M, Jr as O, rr as P, rp as S, Vo as U, Oe as V, Id as W, up as a, ip as b, hp as c, un as d, Et as e, sp as f, ja as g, ut as h, Cn as i, An as j, _d as k, P as l, lp as m, To as n, np as o, ap as p, Os as q, dp as r, cp as t };
