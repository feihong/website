(function() {
//=============================================================================
var images = [
    'http://25.media.tumblr.com/c7d88c7be9e63efc98f71c7b30ac6a21/tumblr_mi2qblTO1e1rvuj8do1_500.png',
    'http://25.media.tumblr.com/e3bfe933f5efbd8e2390c37a4930a83d/tumblr_mi2q8lb7Ki1rvuj8do1_500.png',
    'http://25.media.tumblr.com/88a6ef9b836bed9adf1e1347222f92cb/tumblr_mi2q62B2fe1rvuj8do1_500.png',
    'http://25.media.tumblr.com/9413438b63492238889a7a6ff4df74d4/tumblr_mi2or2g6vL1rvuj8do1_500.png',
    'http://24.media.tumblr.com/71313cc8d41737c0ec31d957fe9dfb61/tumblr_mi2on7vxWZ1rvuj8do1_500.png',
    'http://24.media.tumblr.com/a8d2661014e81bd60d4ca1f65e2fca76/tumblr_mgji53G6zk1rvuj8do1_500.png',
    'http://25.media.tumblr.com/tumblr_mauyywrs2P1rvuj8do1_500.png',
    'http://25.media.tumblr.com/tumblr_mauyxe9KvZ1rvuj8do1_500.png',
    'http://24.media.tumblr.com/tumblr_m9twbv2CqY1rvuj8do1_500.png',
    'http://25.media.tumblr.com/tumblr_m5cw4iD3fD1rvuj8do1_500.png',
    'http://25.media.tumblr.com/tumblr_m63cfytuGJ1rvuj8do1_500.png',
    'http://25.media.tumblr.com/tumblr_m63bndI46Y1rvuj8do1_500.png',
    'http://24.media.tumblr.com/tumblr_m5cw0wu2ZP1rvuj8do1_500.png'
];

// Replace characters in h1 with links.
var title = $('h1').text();
var html = '';
for (var i=0; i < title.length; i++) {
    var c = title.charAt(i);
    if (c === ' ') {
        html += ' '
    } else {
        html += '<a href="#" data-src="' + images.shift() + '">' + title.charAt(i) + '</a>';
    }
}
$('h1').html(html);

// Replace each character in p with a link.
$('.hanzi p').each(function() {
    var text = $(this).text();
    $(this).html('<a href="#" data-src="' + images.shift() + '">' + text + '</a>');
});

// Crossfade between images when a link is clicked.
$('h1 a, .hanzi a').on('click', function(evt) {
    evt.preventDefault();
    var src = $(evt.target).attr('data-src');

    var hidden = $('img.transparent');
    var visible = $('img:not(.transparent)');

    hidden.attr('src', src);
    hidden.removeClass('transparent');
    visible.addClass('transparent');
});
//=============================================================================
})();
