(function (e) {
    function o(o) {
        for (var n, t, c = o[0], s = o[1], d = o[2], l = 0, u = []; l < c.length; l++) (t = c[l]), Object.prototype.hasOwnProperty.call(i, t) && i[t] && u.push(i[t][0]), (i[t] = 0);
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        f && f(o);
        while (u.length) u.shift()();
        return r.push.apply(r, d || []), a();
    }
    function a() {
        for (var e, o = 0; o < r.length; o++) {
            for (var a = r[o], n = !0, t = 1; t < a.length; t++) {
                var c = a[t];
                0 !== i[c] && (n = !1);
            }
            n && (r.splice(o--, 1), (e = s((s.s = a[0]))));
        }
        return e;
    }
    var n = {},
        t = { app: 0 },
        i = { app: 0 },
        r = [];
    function c(e) {
        return (
            s.p +
            "js/" +
            ({ actividad: "actividad", comple: "comple", creditos: "creditos", glosario: "glosario", intro: "intro", referencias: "referencias", tema1: "tema1", tema2: "tema2", tema3: "tema3", tema4: "tema4" }[e] || e) +
            "." +
            {
                actividad: "f5520226",
                "chunk-006c2fad": "f3eef09e",
                "chunk-194ee642": "351824b5",
                "chunk-2d208d90": "af33d1a3",
                "chunk-2d21d0e2": "c61d3d4c",
                "chunk-2e80bb9a": "5da96b24",
                "chunk-30b0e353": "0a32e65e",
                "chunk-5787996f": "ddc9ee20",
                "chunk-66b189cb": "d56e96cb",
                "chunk-a10f0b1c": "0fab1c1e",
                "chunk-adbc4b64": "7bb904a7",
                "chunk-b77cb95c": "f6f5bbe8",
                "chunk-ba0f9ef8": "8f6905e2",
                "chunk-bd03d8c6": "d8514ae3",
                "chunk-c796899c": "d7912fcc",
                "chunk-d1f0440c": "cdcf0035",
                "chunk-f3d500be": "871ffb0e",
                comple: "ca11a0f0",
                creditos: "0fdf12bb",
                glosario: "7e63d274",
                intro: "4d54beb5",
                referencias: "e588dff6",
                tema1: "680154ab",
                tema2: "b6a1ecea",
                tema3: "418c6848",
                tema4: "a2ef1914",
            }[e] +
            ".js"
        );
    }
    function s(o) {
        if (n[o]) return n[o].exports;
        var a = (n[o] = { i: o, l: !1, exports: {} });
        return e[o].call(a.exports, a, a.exports, s), (a.l = !0), a.exports;
    }
    (s.e = function (e) {
        var o = [],
            a = {
                "chunk-006c2fad": 1,
                "chunk-194ee642": 1,
                "chunk-30b0e353": 1,
                "chunk-5787996f": 1,
                "chunk-66b189cb": 1,
                "chunk-a10f0b1c": 1,
                "chunk-adbc4b64": 1,
                "chunk-b77cb95c": 1,
                "chunk-ba0f9ef8": 1,
                "chunk-bd03d8c6": 1,
                "chunk-d1f0440c": 1,
                "chunk-f3d500be": 1,
                comple: 1,
                creditos: 1,
                glosario: 1,
                intro: 1,
                referencias: 1,
                tema1: 1,
                tema3: 1,
                tema4: 1,
            };
        t[e]
            ? o.push(t[e])
            : 0 !== t[e] &&
              a[e] &&
              o.push(
                  (t[e] = new Promise(function (o, a) {
                      for (
                          var n =
                                  "css/" +
                                  ({ actividad: "actividad", comple: "comple", creditos: "creditos", glosario: "glosario", intro: "intro", referencias: "referencias", tema1: "tema1", tema2: "tema2", tema3: "tema3", tema4: "tema4" }[e] ||
                                      e) +
                                  "." +
                                  {
                                      actividad: "31d6cfe0",
                                      "chunk-006c2fad": "77c731f3",
                                      "chunk-194ee642": "9c79cb53",
                                      "chunk-2d208d90": "31d6cfe0",
                                      "chunk-2d21d0e2": "31d6cfe0",
                                      "chunk-2e80bb9a": "31d6cfe0",
                                      "chunk-30b0e353": "912c0549",
                                      "chunk-5787996f": "6190711a",
                                      "chunk-66b189cb": "a4ade0d1",
                                      "chunk-a10f0b1c": "a4ade0d1",
                                      "chunk-adbc4b64": "a74b3138",
                                      "chunk-b77cb95c": "a4ade0d1",
                                      "chunk-ba0f9ef8": "a4ade0d1",
                                      "chunk-bd03d8c6": "9c7d6ac3",
                                      "chunk-c796899c": "31d6cfe0",
                                      "chunk-d1f0440c": "88c71ff6",
                                      "chunk-f3d500be": "9478c91c",
                                      comple: "0f62084e",
                                      creditos: "a74b3138",
                                      glosario: "40c83c48",
                                      intro: "0e433876",
                                      referencias: "1dd737d9",
                                      tema1: "9d63337d",
                                      tema2: "31d6cfe0",
                                      tema3: "2c354e45",
                                      tema4: "4a938467",
                                  }[e] +
                                  ".css",
                              i = s.p + n,
                              r = document.getElementsByTagName("link"),
                              c = 0;
                          c < r.length;
                          c++
                      ) {
                          var d = r[c],
                              l = d.getAttribute("data-href") || d.getAttribute("href");
                          if ("stylesheet" === d.rel && (l === n || l === i)) return o();
                      }
                      var u = document.getElementsByTagName("style");
                      for (c = 0; c < u.length; c++) {
                          (d = u[c]), (l = d.getAttribute("data-href"));
                          if (l === n || l === i) return o();
                      }
                      var f = document.createElement("link");
                      (f.rel = "stylesheet"),
                          (f.type = "text/css"),
                          (f.onload = o),
                          (f.onerror = function (o) {
                              var n = (o && o.target && o.target.src) || i,
                                  r = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                              (r.code = "CSS_CHUNK_LOAD_FAILED"), (r.request = n), delete t[e], f.parentNode.removeChild(f), a(r);
                          }),
                          (f.href = i);
                      var m = document.getElementsByTagName("head")[0];
                      m.appendChild(f);
                  }).then(function () {
                      t[e] = 0;
                  }))
              );
        var n = i[e];
        if (0 !== n)
            if (n) o.push(n[2]);
            else {
                var r = new Promise(function (o, a) {
                    n = i[e] = [o, a];
                });
                o.push((n[2] = r));
                var d,
                    l = document.createElement("script");
                (l.charset = "utf-8"), (l.timeout = 120), s.nc && l.setAttribute("nonce", s.nc), (l.src = c(e));
                var u = new Error();
                d = function (o) {
                    (l.onerror = l.onload = null), clearTimeout(f);
                    var a = i[e];
                    if (0 !== a) {
                        if (a) {
                            var n = o && ("load" === o.type ? "missing" : o.type),
                                t = o && o.target && o.target.src;
                            (u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + t + ")"), (u.name = "ChunkLoadError"), (u.type = n), (u.request = t), a[1](u);
                        }
                        i[e] = void 0;
                    }
                };
                var f = setTimeout(function () {
                    d({ type: "timeout", target: l });
                }, 12e4);
                (l.onerror = l.onload = d), document.head.appendChild(l);
            }
        return Promise.all(o);
    }),
        (s.m = e),
        (s.c = n),
        (s.d = function (e, o, a) {
            s.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: a });
        }),
        (s.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.t = function (e, o) {
            if ((1 & o && (e = s(e)), 8 & o)) return e;
            if (4 & o && "object" === typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if ((s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & o && "string" != typeof e))
                for (var n in e)
                    s.d(
                        a,
                        n,
                        function (o) {
                            return e[o];
                        }.bind(null, n)
                    );
            return a;
        }),
        (s.n = function (e) {
            var o =
                e && e.__esModule
                    ? function () {
                          return e["default"];
                      }
                    : function () {
                          return e;
                      };
            return s.d(o, "a", o), o;
        }),
        (s.o = function (e, o) {
            return Object.prototype.hasOwnProperty.call(e, o);
        }),
        (s.p = ""),
        (s.oe = function (e) {
            throw (console.error(e), e);
        });
    var d = (window["webpackJsonp"] = window["webpackJsonp"] || []),
        l = d.push.bind(d);
    (d.push = o), (d = d.slice());
    for (var u = 0; u < d.length; u++) o(d[u]);
    var f = l;
    r.push([0, "chunk-vendors"]), a();
})({
    0: function (e, o, a) {
        e.exports = a("56d7");
    },
    "230f": function (e, o, a) {
        e.exports = a.p + "img/fondo-banner-principal.5d5e2f66.svg";
    },
    "52e5": function (e, o, a) {
        e.exports = a.p + "img/cc.58a75e32.svg";
    },
    "56d7": function (e, o, a) {
        "use strict";
        a.r(o);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("2b0e"),
            t = function () {
                var e = this,
                    o = e.$createElement,
                    a = e._self._c || o;
                return a(
                    "div",
                    { staticClass: "app", attrs: { id: "app" } },
                    [
                        a("Header"),
                        a(
                            "div",
                            { staticClass: "contenedor-principal" },
                            [a("AsideMenu"), a("section", { staticClass: "seccion-principal", class: { "seccion-principal--barra-avance-open": !e.menuState } }, [a("router-view"), a("footer")], 1)],
                            1
                        ),
                        a("BarraAvance"),
                    ],
                    1
                );
            },
            i = [],
            r = {
                name: "App",
                data: function () {
                    return { menuOpen: !1 };
                },
                computed: {
                    menuState: function () {
                        return this.$store.getters.isMenuOpen;
                    },
                },
            },
            c = r,
            s = (a("cf25"), a("2877")),
            d = Object(s["a"])(c, t, i, !1, null, null, null),
            l = d.exports,
            u = (a("d3b7"), a("3ca3"), a("ddb0"), a("b0c0"), a("8c4f")),
            f = a("ae58"),
            m = a("7e58");
        n["a"].use(u["a"]);
        var p = new u["a"]({
                routes: [
                    { path: "/", name: "inicio", component: f["a"] },
                    {
                        path: "/introduccion",
                        name: "introduccion",
                        component: function () {
                            return a.e("intro").then(a.bind(null, "5167"));
                        },
                    },
                    {
                        path: "/curso",
                        name: "curso",
                        component: m["a"],
                        redirect: { name: "tema1" },
                        children: [
                            {
                                path: "tema1",
                                name: "tema1",
                                component: function () {
                                    return a.e("tema1").then(a.bind(null, "02c8"));
                                },
                            },
                            {
                                path: "tema2",
                                name: "tema2",
                                component: function () {
                                    return a.e("tema2").then(a.bind(null, "fd11"));
                                },
                            },
                            {
                                path: "tema3",
                                name: "tema3",
                                component: function () {
                                    return a.e("tema3").then(a.bind(null, "eb46"));
                                },
                            },
                            {
                                path: "tema4",
                                name: "tema4",
                                component: function () {
                                    return a.e("tema4").then(a.bind(null, "3eb5"));
                                },
                            },
                        ],
                    },
                    {
                        path: "/actividad/:index?",
                        name: "actividad",
                        component: function () {
                            return a.e("actividad").then(a.bind(null, "4298"));
                        },
                    },
                    {
                        path: "/glosario",
                        name: "glosario",
                        component: function () {
                            return a.e("glosario").then(a.bind(null, "c92c"));
                        },
                    },
                    {
                        path: "/complementario",
                        name: "complementario",
                        component: function () {
                            return a.e("comple").then(a.bind(null, "dd8c"));
                        },
                    },
                    {
                        path: "/referencias",
                        name: "referencias",
                        component: function () {
                            return a.e("referencias").then(a.bind(null, "64ef"));
                        },
                    },
                    {
                        path: "/creditos",
                        name: "creditos",
                        component: function () {
                            return a.e("creditos").then(a.bind(null, "2e81"));
                        },
                    },
                ],
                scrollBehavior: function (e, o) {
                    if (e.hash) {
                        var a = { selector: e.hash, offset: { y: 100 }, behavior: "smooth" };
                        return e.name === o.name
                            ? a
                            : new Promise(function (e) {
                                  setTimeout(function () {
                                      e(a);
                                  }, 500);
                              });
                    }
                    return { x: 0, y: 0, behavior: "auto" };
                },
            }),
            b = p,
            h = a("1c2c"),
            g = (a("becf"), a("7b17"), a("ab8b"), a("a3a0"), a("4bc7"), a("78df"), a("cdd9"));
        (n["a"].prototype.$config = g["a"]),
            (n["a"].config.productionTip = !1),
            new n["a"]({
                router: b,
                store: h["a"],
                render: function (e) {
                    return e(l);
                },
            }).$mount("#app");
    },
    a3a0: function (e, o, a) {},
    bce2: function (e, o, a) {
        e.exports = a.p + "img/banner-principal.604ada0c.svg";
    },
    cdd9: function (e, o, a) {
        "use strict";
        o["a"] = {
            global: {
                componenteFormativo: "Ingeniería de requisitos",
                descripcionCurso:
                    "En este componente formativo se abordan los saberes de ingeniería de requisitos: ciclo de vida del software fases y objetivos, modelos, características, caracterización de la fase de definición de requisitos y herramientas para el uso de captura de requisitos que se usan para el desarrollo del software.",
                imagenBannerPrincipal: a("bce2"),
                fondoBannerPrincipal: a("230f"),
                programaFormacion: "Construcción de requisitos del software",
            },
            menuPrincipal: {
                menu: [
                    { nombreRuta: "inicio", icono: "fas fa-home", titulo: "Volver al inicio" },
                    { nombreRuta: "introduccion", icono: "fas fa-info", titulo: "Introducción", desarrolloContenidos: !0 },
                    {
                        nombreRuta: "tema1",
                        icono: "far fa-file-alt",
                        numero: "1",
                        titulo: "Ciclo de vida del software",
                        desarrolloContenidos: !0,
                        subMenu: [
                            { icono: "far fa-file-alt", numero: "1.1", titulo: "Fases ", hash: "t_1_1" },
                            { icono: "far fa-file-alt", numero: "1.2", titulo: "Paradigmas de los modelos de ciclo de vida del software", hash: "t_1_2" },
                        ],
                    },
                    { nombreRuta: "tema2", icono: "far fa-file-alt", numero: "2", titulo: "Fase de definición de requisitos", desarrolloContenidos: !0, subMenu: [] },
                    {
                        nombreRuta: "tema3",
                        icono: "far fa-file-alt",
                        numero: "3",
                        titulo: "Requisitos",
                        desarrolloContenidos: !0,
                        subMenu: [
                            { icono: "far fa-file-alt", numero: "3.1", titulo: "Importancia de los requisitos.", hash: "t_3_1" },
                            { icono: "far fa-file-alt", numero: "3.2", titulo: "Clasificación", hash: "t_3_2" },
                        ],
                    },
                    { nombreRuta: "tema4", icono: "far fa-file-alt", numero: "4", titulo: "Ingeniería de requisitos", desarrolloContenidos: !0, subMenu: [] },
                ],
                subMenu: [
                    { nombreRuta: "actividad", icono: "far fa-question-circle", titulo: "Actividad didáctica", desarrolloContenidos: !0 },
                    { nombreRuta: "glosario", icono: "fas fa-sort-alpha-down", titulo: "Glosario" },
                    { nombreRuta: "complementario", icono: "far fa-folder-open", titulo: "Material complementario" },
                    { icono: "fas fa-book", titulo: "Referencias bibliográficas", nombreRuta: "referencias" },
                    { icono: "fas fa-download", titulo: "Descargar material", download: "downloads/material.zip" },
                    { icono: "far fa-registered", titulo: "Créditos", nombreRuta: "creditos" },
                ],
            },
            creditos: {
                liderEquipo: { nombre: "María Camila García Santamaría", cargo: "Líder del equipo" },
                contenidoInstruccional: [
                    { nombre: "Rafael Neftalí Lizcano Reyes", cargo: "Asesor metodológico y pedagógico", centro: "Centro industrial del diseño y la manufactura", regional: "Regional Santander" },
                    { nombre: ["Jonathan Guerrero Astaiza", "Zulema Yidney León Escobar"], cargo: "Expertos temáticos", centro: "Centro de teleinformática y producción industrial", regional: "Regional Cauca" },
                    { nombre: ["Alix Cecilia Chinchilla Rueda"], cargo: "Diseñadora Instruccional", centro: "Centro de gestión industrial", regional: "Regional Bogotá" },
                    { nombre: ["José Gabriel Ortiz Abella", "Julia Isabel Roberto"], cargo: "Evaluadores instruccionales", centro: "Centro para la industria y la comunicación gráfica", regional: "Regional Distrito Capital" },
                    { nombre: "José Gabriel Ortiz Abella", cargo: "Revisión de estilo", centro: "Centro para la industria de la comunicación gráfica", regional: "Regional Distrito Capital" },
                ],
                desarrolloProducto: [
                    { nombre: "Francisco José Lizcano Reyes", cargo: "Responsable del equipo", centro: "Centro industrial del diseño y la manufactura", regional: "Regional Santander" },
                    { nombre: "Leyson Fabian Castaño Perez", cargo: "Soporte organizacional", centro: "Centro de comercio y servicios", regional: "Regional Tolima" },
                    { nombre: ["Luis Gabriel Urueta Álvarez", "Yuly Andrea Rey Quiñonez"], cargo: "Diseño web y Producción Audiovisual" },
                    { nombre: ["Lizeth Karina Manchego Suarez"], cargo: "Desarrollo Front-End" },
                    { nombre: ["Jhana Johana Bustillo"], cargo: "Revisora de Contenidos" },
                    { centro: "Centro industrial del diseño y la manufactura", regional: "Regional Santander" },
                ],
                gestoresRepositorio: [{ nombre: ["Milady Tatiana Villamil Castellanos"], cargo: ["Validación de recursos"], centro: "Centro de comercio y servicios", regional: "Regional Tolima" }],
            },
            referencias: [
                { referencia: "Boehm, B. W. (1979). A Spiral Model of Software Development and Enhancement. ACM Software Engineering Notes, 11(4), 22-42. ", link: "" },
                { referencia: "Durán, A., y Bernárdez, B. (2001). Metodología para el análisis de requisitos de sistemas software.", link: "https://www.infor.uva.es/~mlaguna/is1/materiales/metodologia_elicitacion.pdf" },
                { referencia: "Pantaleo, G., y Rinaudo, L. (2018). Ingeniería de software. Alfaomega.", link: "" },
                { referencia: "ISO/IEC 12207. (2008). Systems and software engineering - Software life cycle processes", link: "https://www.iso.org/obp/ui/#iso:std:iso-iec:12207:ed-2:v1:en" },
                {
                    referencia:
                        "McCracken, D., y Jackson, M. A. (1981). “A Minority Dissenting Opinion”. En W. W. Cotterman, J. D. Couger, N. L. Enger, F. Harold (Eds.). Systems Analysis and Design: A Foundation for the 1980s (pp. 551-553). Elsevier.",
                    link: "",
                },
                { referencia: "Penzenstadler, B. (s. f.). Requirements Engineering. CSU Long Beach. https://bit.ly/3rtBKXN", link: "" },
                { referencia: "Pfleeger, Sh. (2002). Ingeniería del software. Teoría y práctica. Prentice Hall. ", link: "" },
                { referencia: "Porfirio, C. (s. f.). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. atSistemas - Consultoría it blog. https://bit.ly/3cvumqz", link: "" },
                { referencia: "Rivadeneira, M., S. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1-29", link: " https://doi.org/10.22305/ict-unpa.v5i1.66 " },
                { referencia: "Sommerville I. (2011). Ingeniería del software. Addison-Wesley. ", link: "" },
            ],
            glosario: [
                {
                    termino: "Ágil",
                    significado:
                        "comprende un conjunto de tareas o acciones que se utilizan para producir y mantener productos, así como para lograr los objetivos del proceso. La actividad incluye los procedimientos, estándares, políticas y objetivos para crear y modificar un conjunto de productos de trabajo.",
                },
                { termino: "Ciclo de vida de software", significado: "aplicación de metodologías para el desarrollo del sistema software [AECC, 1986]." },
                { termino: "Método", significado: "indica cómo construir técnicamente el software. Se incluyen técnicas de modelado y otras técnicas descriptivas." },
                { termino: "Metodología", significado: "colección de métodos para resolver un tipo de problema." },
                { termino: "Requerimiento", significado: "se refiere a la petición que se hace de algo que se solicita." },
                { termino: "Requisito", significado: "condición que debe cumplir algo, en general el requisito cumple con lo que se requiere con el requerimiento." },
            ],
            complementario: [
                {
                    texto:
                        "Andrade, J. C. (2012). Desarrollo de un prototipo informático de consulta y asignación de plazas libres en parqueaderos. (Tesis pregrado). Pontifica Universidad Católica del Ecuador. http://repositorio.puce.edu.ec/handle/22000/6354",
                    tipo: "Tesis",
                    link: " http://repositorio.puce.edu.ec/handle/22000/6354",
                },
                {
                    texto: "Pressman, R. (1993). Ingeniería del software: un enfoque práctico. McGraw-Hill Inc. https://doku.pub/documents/ingenieria-de-software-un-enfoque-practico6thedicion-rogerpressman1-p6lkgywex804",
                    tipo: "Libro",
                    link: "https://doku.pub/documents/ingenieria-de-software-un-enfoque-practico6thedicion-rogerpressman1-p6lkgywex804",
                },
                {
                    texto: "Norris, M., y Rigby, P. (1994). Ingeniería de software explicada. MegaByte-Noriega Editores. http://cic.puj.edu.co/wiki/lib/exe/fetch.php?media=materias:is1:01_lectura_ingenieria_software.pdf",
                    tipo: "Libro",
                    link: "http://cic.puj.edu.co/wiki/lib/exe/fetch.php?media=materias:is1:01_lectura_ingenieria_software.pdf",
                },
                {
                    texto: "Universidad Católica de Murcia. (11 de febrero de 2015). Ingeniería del software - Ciclo de vida - Raquel Martínez. [Video]. YouTube. https://www.youtube.com/watch?v=4tWmULUzVdE&t=199s",
                    tipo: "Video",
                    link: "https://www.youtube.com/watch?v=4tWmULUzVdE&t=199s",
                },
                { texto: "Itunes U – UAEH. (10 de enero de 2019). Tipos de requerimientos. [Video]. YouTube. https://www.youtube.com/watch?v=PUyfzEzSUSg", tipo: "Video", link: "https://www.youtube.com/watch?v=PUyfzEzSUSg" },
                {
                    texto: "CavernaTech. (01 de septiembre de 2019). Requisitos funcionales y no funcionales. [Video]. YouTube. https://www.youtube.com/watch?v=Lv7XbZtnQ6A ",
                    tipo: "Video",
                    link: "https://www.youtube.com/watch?v=Lv7XbZtnQ6A",
                },
                { texto: "Salamea, J. (2016). Requisitos funcionales, no funcionales. [Video]. YouTube. https://www.youtube.com/watch?v=JXT1Hxth9bA", tipo: "Video", link: "https://www.youtube.com/watch?v=JXT1Hxth9bA" },
            ],
        };
    },
    cf25: function (e, o, a) {
        "use strict";
        a("fea6");
    },
    fea6: function (e, o, a) {},
});
//# sourceMappingURL=app.ad42e382.js.map
