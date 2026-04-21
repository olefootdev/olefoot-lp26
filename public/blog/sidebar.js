(function () {
  var root = document.getElementById("blog-sidebar");
  if (!root || !window.OLEFOOT_BLOG) return;
  var cfg = window.OLEFOOT_BLOG;
  var current = document.body.getAttribute("data-current-post") || "";
  var posts = cfg.posts;
  var html = "";
  html += '<p class="blog-sidebar-eyebrow">Histórico</p>';
  html += '<nav class="blog-sidebar-nav" aria-label="Postagens anteriores"><ul class="blog-sidebar-list">';
  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    var active = current === post.id;
    var cls = "blog-sidebar-link" + (active ? " is-active" : "");
    html += "<li><a class=\"" + cls + "\" href=\"" + post.href + "\">";
    html += "<span class=\"blog-sidebar-date\">" + post.dateLabel + "</span>";
    html += "<span class=\"blog-sidebar-txt\">" + post.title + "</span>";
    html += "</a></li>";
  }
  html += "</ul></nav>";
  root.innerHTML = html;
})();
