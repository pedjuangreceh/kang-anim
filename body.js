
/* Blogger Sitemap One Label Title Only by igniel.com */
/* Remod by kang-anim.blogspot.com */

var textElem = document.getElementById("lebelnya");
   textElem.textContent = textElem.innerText;
var label = textElem.textContent;
var sortby = 'date'; /* 'date' OR 'title' */




var start = 1,
    max = 150,
    sitemap6Arr = new Array();

function runSitemap6() {
    var _0x6718x5 = document.createElement('script');
    _0x6718x5.src = 'https://kang-anim.blogspot.com/feeds/posts/default/-/' + label + '?alt=json&callback=sitemap6&start-index=' + start + '&max-results=' + max;
    document.body.appendChild(_0x6718x5)
}

function sitemap6(_0x6718x7) {
    var _0x6718x8 = document.getElementById('anjay');
    if (!_0x6718x8) {
        return
    };
    _0x6718x8.innerHTML = '';
    var _0x6718x9 = _0x6718x7.feed;
    if (_0x6718x9.entry.length > 0) {
        for (var _0x6718xa = 0; _0x6718xa < _0x6718x9.entry.length; _0x6718xa++) {
            var _0x6718xb = _0x6718x9.entry[_0x6718xa];
            var _0x6718xc = _0x6718xb.title.$t;
            for (var _0x6718xd = 0; _0x6718xd < _0x6718xb.link.length; _0x6718xd++) {
                if (_0x6718xb.link[_0x6718xd].rel == 'alternate') {
                    var _0x6718xe = _0x6718xb.link[_0x6718xd].href;
                    if (_0x6718xe && _0x6718xe.length > 0 && _0x6718xc && _0x6718xc.length > 0) {
                        sitemap6Arr.push({
                            "url": _0x6718xe,
                            "judul": _0x6718xc
                        })
                    };
                    break
                }
            }
        };
        if (_0x6718x9.entry.length >= max) {
            start += max;
            runSitemap6()
        } else {
            var _0x6718xf = '',
                _0x6718x10;
            var _0x6718x10 = (sortby === 'title' ? sitemap6Arr.sort(function (_0x6718x10, _0x6718x11) {
                return _0x6718x10.judul > _0x6718x11.judul ? 1 : -1
            }) : sitemap6Arr);
            for (var _0x6718x12 = 0; _0x6718x12 < _0x6718x10.length; _0x6718x12++) {
                _0x6718xf += '<li><a href="' + _0x6718x10[_0x6718x12].url + '" title="' + _0x6718x10[_0x6718x12].judul + '">' + _0x6718x10[_0x6718x12].judul + '</a></li>'
            };
            _0x6718x8.innerHTML = '<div class="ignielRelatedMiddle"><span class="judul"><span>Baca Juga</span></span><ul>' + _0x6718xf + '</ul></div>'
        }
    }
}
runSitemap6()
