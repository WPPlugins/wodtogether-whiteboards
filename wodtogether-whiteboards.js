jQuery(document).ready(function() {
	// <![CDATA[
	(function(d, s, id) {
	  var js;
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//wodtogether.com/js/widgets/widget-loader.js";
	  d.body.appendChild(js);
	}(document, 'script', 'wodtogether-jssdk'));
	// ]]>
});