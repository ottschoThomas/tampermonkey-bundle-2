// ==UserScript==
// @name         Symfony Dump
// @namespace    ott
// @version      1
// @description  Symfony Dump
// @author       Thomas Lesinski
// @include      *://*/*
// @include      localhost
// @grant        none
// @icon         https://www.google.com/s2/favicons?domain=ottscho-it-service.de
// @noframes
// @downloadURL  https://github.com/ottschoThomas/tampermonkey-bundle/raw/main/Symfony-Dump.user.js
// @updateURL    https://github.com/ottschoThomas/tampermonkey-bundle/raw/main/Symfony-Dump.user.js
// ==/UserScript==
!function(){"use strict";(new class{init(){void 0!==window.PluginManager&&void 0!==window.Sfdump&&(this.createStyle(),this.handleKeyboard())}createStyle(){document.body.insertAdjacentHTML("beforeend","<style>\n                    .ott-symfony-dump-modal {\n                        background: #18171b;\n                        bottom: 0;\n                        left: 0;\n                        overflow-y: scroll;\n                        position: fixed;\n                        right: 0;\n                        top: 0;\n                        z-index: 2147483647;\n                    }\n                    \n                    .ott-symfony-dump-modal .sf-dump {\n                        margin: 0;\n                    }\n                    \n                    .ott-symfony-dump-modal .sf-dump-search-wrapper {\n                        padding-left: 75%;\n                        padding-right: 4rem;\n                    }\n                    \n                    .ott-symfony-dump-modal-content {\n                        position: relative;\n                    }\n                    \n                    .ott-symfony-dump-modal-close {\n                        cursor: pointer;\n                        font-size: 30px;\n                        position: fixed;\n                        right: 22px;\n                        top: 0;\n                        z-index: 2147483647;\n                    }\n                    \n                    .ott-symfony-dump-trigger {\n                        height: 30px;\n                        line-height: 20px;\n                    }\n                </style>")}handleKeyboard(){this.keyStates={controlleft:!1,altleft:!1,keyo:!1},document.addEventListener("keydown",(t=>{const e=t.code.toLowerCase();if(!(e in this.keyStates))return;this.keyStates[e]=!0;let n=!0;for(const t in this.keyStates)if(!1===this.keyStates[t]){n=!1;break}n&&(this.openDumpAtCursor(),Object.keys(this.keyStates).forEach((t=>this.keyStates[t]=!1)))})),document.addEventListener("keyup",(t=>{const e=t.code.toLowerCase();e in this.keyStates&&(this.keyStates[e]=!1)}))}openDumpAtCursor(){const t=Array.from(document.querySelectorAll(":hover"));if(!t.length)return;const e=t[t.length-1];let n=e;Array.from(e.classList).includes("sf-dump")||(n=e.closest(".sf-dump")),null!==n&&this.createDump(n)}createModal(){document.querySelector(".ott-symfony-dump-modal")?.remove(),this.modal=document.createElement("div"),this.modal.classList.add("ott-symfony-dump-modal"),this.modalContentWrapper=document.createElement("div"),this.modalContentWrapper.classList.add("ott-symfony-dump-modal-content"),this.modal.appendChild(this.modalContentWrapper),this.modalCloseButton=document.createElement("div"),this.modalCloseButton.classList.add("ott-symfony-dump-modal-close"),this.modalCloseButton.innerHTML="❌",this.modalCloseButton.addEventListener("click",this.hideModal.bind(this)),this.modal.appendChild(this.modalCloseButton),document.body.appendChild(this.modal)}createDump(t){(t=t.cloneNode(!0)).id="ott-symfony-dump",t.querySelectorAll("span").forEach((t=>{"▼"!==t.innerHTML&&"▶"!==t.innerHTML||t.remove()})),document.body.classList.add("overflow-hidden"),this.createModal(),this.modalContentWrapper.innerHTML="",this.modalContentWrapper.appendChild(t),window.Sfdump("ott-symfony-dump")}hideModal(){document.body.classList.remove("overflow-hidden"),this.modal.style.display="none"}}).init()}();
