"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("addExceptionModal"),t=document.getElementById("exportListException"),o=document.getElementById("importListException"),n=document.getElementById("importFileListException"),l=document.getElementById("modalAddingException"),c=document.getElementById("optionsWelcome"),i=document.getElementById("exceptionTable"),a=document.getElementsByName("exception_title")[0],r=document.getElementsByName("exception_url")[0],s=document.getElementById("errorMessage");e.addEventListener("click",function(){l.style.display="block"}),t.addEventListener("click",function(){u.listExport(this)}),o.addEventListener("click",function(e){u.listImport(e)}),l.querySelector('button[data-tools="cancel"]').addEventListener("click",function(){l.style.display="none",s.style.display="none",a.value="",r.value="/"}),l.querySelector('button[data-tools="add"]').addEventListener("click",function(){u.save(a,r)});var d=function(){for(var e=document.querySelectorAll('button[data-tools="remove"]'),t=0;t<e.length;t++)e[t].onclick=function(e){confirm(chrome.i18n.getMessage("exception_remove_confirm"))&&u.remove(this.dataset.id-1)}},m=function(e){var t=e.target.files[0];t&&(saveListException(t),location.reload())},u={load:function(){if(localStorage.vkCommentBlocker){var t=loadException();u.view(t)}else c.style.display="block",i.style.display="none";if(localStorage.vkCommentBlockerTemp){var o=JSON.parse(localStorage.vkCommentBlockerTemp);a.value=o.title,r.value=o.url,e.click(),localStorage.removeItem("vkCommentBlockerTemp")}},view:function(e){var t=viewException(e),o=i.querySelector("tbody");i.replaceChild(t,o),d()},save:function(e,t){""!==e.value&&""!==t.value?saveException(e.value,t.value)?(alert(chrome.i18n.getMessage("exception_exists")),l.querySelector('button[data-tools="cancel"]').click()):location.reload():s.style.display="block"},remove:function(e){removeException(e),location.reload()},listExport:function(e){var t=JSON.stringify(loadException()),o=new Blob([t],{type:"application/json"});e.href=URL.createObjectURL(o)},listImport:function(){n.click(),n.addEventListener("change",m,!1)}};u.load()});
