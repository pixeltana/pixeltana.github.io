(this["webpackJsonptana-comish"]=this["webpackJsonptana-comish"]||[]).push([[0],{29:function(e,n,t){e.exports=t(42)},34:function(e,n,t){},35:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(13),o=t.n(l),i=(t(34),t(35),t(45)),c=t(44),s=t(9),m=t(10),d=t(5),u=t(6);function p(){var e=Object(d.a)(["\nbox-sizing: border-box;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n\np {\n    font-weight: bold;\n    font-size: 1.133rem\n    line-height: 0.9\n}\n\nmain {\n    display: flex;\n    margin: 2rem;\n    margin-left:8rem;\n    .BannerHeading{\n        margin: 0;\n        font-size: 3rem;\n        color: #68894D;\n    }\n    .Description{\n        padding-left: 2.33rem;\n        order: 2\n    }\n    .Images{\n        order: 1\n    }    \n}\n\n\n"]);return p=function(){return e},e}var h=function(e){for(var n=e.photos,t=[],l=0;n.length>l;l++)t.push(r.a.createElement("img",{key:l,src:n[l].url,alt:"".concat(n[l].name)}));return r.a.createElement(a.Fragment,null,t)},g=function(e){var n=e.name,t=void 0===n?"":n,a=e.photos,l=void 0===a?[]:a,o=e.children,i=e.background;return r.a.createElement(f,{background:i},r.a.createElement("main",null,r.a.createElement("div",{className:"Description"},r.a.createElement(s.b,{to:"/".concat(t.toLowerCase())},r.a.createElement("h1",{className:"BannerHeading"},t)),o),r.a.createElement("div",{className:"Images"},r.a.createElement(s.b,{to:"/".concat(t.toLowerCase())},r.a.createElement(h,{photos:l})))))},f=u.a.section(p()),b=t(14),E=t(15);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function w(){var e=Object(d.a)(["\nposition: relative;\nbackground: #68894D50;\nflex: 2 0 44%;\nmax-width: 300px;\ndisplay: flex;\nflex-flow: column nowrap;\nbox-shadow: 4px 4px 5px 0px #2e251e80;\n\n\n.ImageBox {\n    width: fit-content;\n    margin: 0 auto;\n}\n\nh2 {\n    font-size: 1.33rem;\n    margin: 0.33rem 1.3rem;\n}\n\n.Description{ \n    margin: 0 1.3rem;\n}\n\nh3 {\n    width: fit-content;\n    position: absolute;\n    right: 1rem;\n    top: 1.66rem;\n    font-size: 1.33rem;\n    background: white;\n    transform: rotate(30deg);\n    box-shadow: 5px 5px;\n}\n.Modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width:100%;\n    min-height: 100vh;\n    background: #000000B0\n\n        img, iframe{\n            padding-top: 2rem;\n            display: block;\n            margin: auto;\n        }\n    }\n.Modal-enter{\n        opacity: 0;\n        z-index: 10;\n    }\n.Modal-enter-active{\n        opacity: 1;\n        transition: all 666ms;\n        z-index: 10;\n    }\n.Modal-exit{\n        opacity: 1;\n        z-index: 10;\n    }\n.Modal-exit-active{\n        opacity: 0;\n        z-index: -1;\n        transition: all 666ms;\n    }\n"]);return w=function(){return e},e}var y=u.a.section(w()),v=function(e){var n=Object(a.useState)(!0),t=Object(E.a)(n,2),l=t[0],o=t[1],i=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(t,!0).forEach((function(n){Object(b.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{hide:l,toggleHide:function(e){o(!l),console.log("Hide is now ",l)}});return r.a.createElement(k,i)},k=function(e){var n=e.srcHint,t=e.alt,a=e.price,l=e.children,o=e.hide,i=e.toggleHide;return r.a.createElement(y,{key:n},r.a.createElement("h2",null,t),r.a.createElement("div",{onClick:i,className:"ImageBox"},r.a.createElement("img",{src:"/assets/".concat(n,"Thumb.png"),alt:t}),r.a.createElement("h3",null,"$",a)),r.a.createElement("div",{className:"Description"},l),r.a.createElement("div",{onClick:i,className:"Modal \n        ".concat(o?"Modal-exit Modal-exit-active":"Modal-enter Modal-enter-active")},r.a.createElement("img",{src:"/assets/".concat(n,"Large.png"),alt:t})))};function O(){var e=Object(d.a)(["\nwidth: 100%;\nmin-height: 100vh;\nmargin: 0;\n\n.GalleryImages {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-evenly;\n}\n.PageTitle{\n    margin: .6rem;\n    margin-left:7rem;\n    font-size: 4rem;\n}\n"]);return O=function(){return e},e}var j=u.a.section(O()),P=function(e){var n=e.title,t=e.background,a=e.children;return r.a.createElement(j,{background:t},r.a.createElement("h1",{className:"PageTitle"},n),r.a.createElement("section",{className:"GalleryImages"},a))},z=function(){return r.a.createElement(g,{name:"Illustrations",background:"/assets/Background1.jpg",photos:[{name:"Illustrations",url:"/assets/ShadowboxThumb.png"}]},r.a.createElement("p",null,"A character in a dynamic pose drawn full body."),r.a.createElement("p",null,"Tiers range from pencil sketch or digital sketch, clean line, simple colors, or detailed colors."),r.a.createElement("p",null,"Backgrounds range from solid color to simple stylized to detailed."),r.a.createElement("p",null,"Additional characters can be added up to three total characters."))},I=function(){return r.a.createElement(P,{background:"/assets/Background1.jpg",title:"Illustrations"},r.a.createElement(v,{srcHint:"Shadowbox",alt:"Hail the King",price:500},r.a.createElement("p",null,"A young woman and her winged fox companion discover the remains of a long-dead king.  Painted in gouache as a multi-layer shadowbox.  11x14 inches.  ",r.a.createElement("a",{href:"https://www.redbubble.com/people/aleesatana/works/41050284-hail-the-king"},"Prints Available"))),r.a.createElement(v,{srcHint:"Castle",alt:"Grimms Fairy Tales",price:300},r.a.createElement("p",null,"A replacement cover for an aged copy of a beloved book, a dark castle looms over an enchanted landscape.  Painted in gouache.  9x12 inches.  ",r.a.createElement("a",{href:"https://www.redbubble.com/people/aleesatana/works/40667572-grimms-fairy-tales"},"Prints Available"))),r.a.createElement(v,{srcHint:"Axomaid",alt:"Axolotlmaid",price:60},r.a.createElement("p",null,"A cute mermaid based on an albino Axolotl.  Painted in goauche, with a simple watercolor wash background.  5x8.5 inches.")))};function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}var M=function(){return r.a.createElement(g,{name:"Models",background:"/assets/Background1.jpg",photos:[{name:"3DModels",url:"/assets/PrincessThumb.png"}]},r.a.createElement("p",null,"3d Models optimized for mobile"),r.a.createElement("p",null,"Characters, Creatures, Vehicles and Environments"),r.a.createElement("p",null,"Can include rig and animations"),r.a.createElement("p",null,"Materials setup, including PBR, node-based and code based shaders, and hand painted texturing"))},D=function(e){var n=Object(a.useState)(!0),t=Object(E.a)(n,2),l=t[0],o=t[1],i=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(t,!0).forEach((function(n){Object(b.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{hide:l,toggleHide:function(e){o(!l),console.log("Hide is now ",l)}});return r.a.createElement(T,i)},H=function(e){var n=e.external;return e.hide?r.a.createElement("div",null):r.a.createElement("div",{class:"sketchfab-embed-wrapper"},r.a.createElement("iframe",{title:"A 3D model",width:"640",height:"480",src:"".concat(n,"/embed?autostart=1&amp;preload=1"),frameborder:"0",allow:"autoplay; fullscreen; vr",mozallowfullscreen:"true",webkitallowfullscreen:"true"}))},T=function(e){var n=e.external,t=e.srcHint,a=e.alt,l=e.price,o=e.children,i=e.hide,c=e.toggleHide;return r.a.createElement(y,{key:t},r.a.createElement("h2",null,a),r.a.createElement("div",{onClick:c,className:"ImageBox"},r.a.createElement("img",{src:"/assets/".concat(t,"Thumb.png"),alt:a}),r.a.createElement("h3",null,"$",l)),r.a.createElement("div",{className:"Description"},o),r.a.createElement("div",{onClick:c,className:"Modal \n        ".concat(i?"Modal-exit Modal-exit-active":"Modal-enter Modal-enter-active")},r.a.createElement(H,{external:n,hide:i})))},B=function(){return r.a.createElement(P,{background:"/assets/Background1.jpg",title:"3DModels"},r.a.createElement(D,{srcHint:"Mermaid",alt:"Mermaid",price:180,external:"https://sketchfab.com/models/e11ffeb575554b34a977152062ebe0ef"},r.a.createElement("p",null,"Stylized mermaid character created for Mermaid Dash, a 3d mobile flappy bird clone, 338 tris, hand-painted texture, and simple animations")),r.a.createElement(D,{srcHint:"Princess",alt:"Royal Teen",price:360,external:"https://sketchfab.com/models/537b79b6752c4b64a7a434cbae3ffb9c"},r.a.createElement("p",null,"Royal teenage character created for a action puzzle game, 935 tris, hand-painted texture.  One of three alternate outfits.")),r.a.createElement(D,{srcHint:"Vulcan",alt:"Vulcan Centaur",price:2400,external:"https://sketchfab.com/models/41970ea193144cbc8f2d53eb57e05f92"},r.a.createElement("p",null,"Rocket model created for ULA Anywhere, an Augmented Reality mobile game. 21.6k tris, hand-painted PBR textures.  One of three rockets included in the app.")))};function N(){var e=Object(d.a)(["\n.zoom-in-enter{\n    transform:scale(0) translateY(-30%);\n    z-index: 2;\n}\n.zoom-in-enter-active{\n    transition: all 800ms;\n    transform: scale(1) translateY(0%);\n    z-index: 2;\n}\n.zoom-in-exit{\n    transform: scale(1) translateY(0%);;\n    z-index: 3;\n}\n.zoom-in-exit-active{\n    transition: all 800ms;\n    transform: scale(0) translateY(-30%);;\n    z-index: 2;    \n}\n"]);return N=function(){return e},e}var C=u.a.section(N());function G(){var e=Object(d.a)(["\nwidth: 100%;\nmin-height: 100vh;\n\nheader{\n   width: 854px;\n   height:480px;\n   margin: 0 auto;\n   padding-top: 1rem;\n   iframe{\n    box-shadow: 4px 4px 5px 0px #2e251e80;\n   }  \n}\n\nmain{\n    width: 854px;\n    margin: 1rem auto;\n}\n\nfooter{\n    width: 854px;\n    margin: auto;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    h3 {\n        font-size: 1.1rem;\n    }\n}\n\n.CallBack{\n    flex: 1 0 100%;\n    text-align: center;\n}\n\na.External{\n    flex: 1 0 40%;\n    margin:20px;\n    display: flex;\n}\n\n\n"]);return G=function(){return e},e}var S=u.a.section(G()),R=function(){return r.a.createElement(S,null,r.a.createElement("header",null,r.a.createElement("iframe",{frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",width:"854",height:"480",src:"https://www.youtube.com/embed/h7SuutuGQC8"})),r.a.createElement("main",null,r.a.createElement("h2",null,"Aleesa Pixel Tana"),r.a.createElement("p",null,"I\u2019m a pencil-and-paper animator that loves pixel art, low-poly 3D models, that also knows how to write UI and shader code, while contributing meaningfully to discussions of game design and user experience.  I enjoy creating character artwork that evokes a living story and utilizes a variety of cartoony styles.  I am greatly inspired by manga, comic book and animation artists including Bryan Konietzko, Wendy Pini, CLAMP, Gurihiru, Bruce Timm, Naoko Takeuchi and many more.I love working in colerase pencils, alcohol markers, gouache, pixel art and hand painted 3D.  I enjoy taking my art beyond still flat pictures by introducing movement, either through animation, interactivity, three-dimensionality and the play of light. I want to make art that inspires others to be creative, and encourages others that, like me, have suffered trauma, to believe that healing is possible through creativity."),r.a.createElement("h2",null,"LIZ TANA"),r.a.createElement("p",null,"I have a hard time making connections and a weird skill set for making games, so I'm starting my published games career later than some. I grew up in some rough circumstances and am mostly self-educated and fringes of online community educated. I deal with a lot of anxiety, social and otherwise, so I am turning to this medium to help me get past that. I'm part of a weird walk of life, and that doesn't always get me much positive attention. I have begun making games that evoke calm, have an focus on relating game concepts to real life. I'm focused on meditative games focused toward puzzles, exploration of space, concepts, and character. I'm working to improve my skills at creating satisfyingly weighty character movement mechanics, as well as music and soundscape production & editing.")),r.a.createElement("footer",null,r.a.createElement(s.b,{className:"CallBack",to:"/about"},r.a.createElement("h1",null,"Visit at our commision gallery to get a good look at what we do")),r.a.createElement("a",{className:"External",href:"https://www.patreon.com/Aleesatana"},r.a.createElement("img",{src:"/assets/Patreon_Mark_White.png",alt:"Patreon",width:"80px",height:"80px"}),r.a.createElement("h3",null,"To support our ongoing publishing efforts, come see our Patreon")),r.a.createElement("a",{className:"External",href:"https://discord.gg/kSQp9p3"},r.a.createElement("img",{src:"/assets/Discord-Logo-White.png",alt:"Discord",width:"80px",height:"80px"}),r.a.createElement("h3",null,"Join us on Discord to discuss your commission"))))};function L(){var e=Object(d.a)(["\nposition: fixed;\ntop: 0.66rem;\nright: -3.66rem;\npadding: 1rem 5rem;\nbackground: #f2ffd680;\ntransform: rotate(30deg);\n\nh1{\n    margin: auto;\n}\n\n"]);return L=function(){return e},e}var W=u.a.section(L());var Q=function(){return r.a.createElement(W,null,r.a.createElement("h1",{className:"CallToAction"},r.a.createElement(s.b,{to:"/callToAction"},"Connect")))},V=function(){return r.a.createElement(g,{name:"PixelArt",photos:[{name:"PixelArt",url:"/assets/GrasstilesThumb.png"}]},r.a.createElement("p",null,"Hi-bit textures for 2.5d and 2d games"),r.a.createElement("p",null,"Hand painted normal, texture and light mapping"),r.a.createElement("p",null,"2.5d and 2d shaders"),r.a.createElement("p",null,"Expressive actor animations"),r.a.createElement("p",null,"Matching close ups of actors"),r.a.createElement("p",null,"Tilesets and environments"))},Y=function(){return r.a.createElement(P,{background:"/assets/Background1.jpg",title:"PixelArt"},r.a.createElement(v,{srcHint:"GrassHero",alt:"Grassland Hero",price:1e3},r.a.createElement("p",null,"An action-adventure hero sprite, including four directions, an idle, four-frame walk and six-frame run.")),r.a.createElement(v,{srcHint:"GrassTiles",alt:"Grassland Tileset",price:3e3},r.a.createElement("p",null,"RPG style game tileset, 32x32px tiles.  Ready for use in Godot, Unity or other game engine.")),r.a.createElement(v,{srcHint:"Quakithere",alt:"Quakithere",price:500},r.a.createElement("p",null,"An alien creature design and attack animation, for a side-view platformer.")))};function J(){return r.a.createElement(C,null,r.a.createElement(s.a,null,r.a.createElement(Q,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(m.a,{to:"/about"})),r.a.createElement(m.b,{path:"*"},r.a.createElement(U,null)))))}function U(){var e=Object(m.g)();return r.a.createElement(i.a,null,r.a.createElement(c.a,{key:e.key,classNames:"zoom-in",timeout:900},r.a.createElement(m.d,{location:e},r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(m.a,{to:"/about"})),r.a.createElement(m.b,{exact:!0,path:"/about"},r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(M,null),r.a.createElement(V,null))),r.a.createElement(m.b,{exact:!0,path:"/illustrations"},r.a.createElement(I,null)),r.a.createElement(m.b,{exact:!0,path:"/callToAction"},r.a.createElement(R,null)),r.a.createElement(m.b,{exact:!0,path:"/models"},r.a.createElement(B,null)),r.a.createElement(m.b,{exact:!0,path:"/pixelart"},r.a.createElement(Y,null)))))}var $=function(){return r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.eea05776.chunk.js.map