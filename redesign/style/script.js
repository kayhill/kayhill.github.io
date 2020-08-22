document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var scrolls = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(scrolls);
    
    var elem = document.querySelector('.collapsible');
    var instance = M.Collapsible.init(elem);

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

  
  });
