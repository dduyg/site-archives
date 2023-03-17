let selector_query = window.location.hash.substr(1);
let filterButtons = $('.item.filter')
let filterDropdown = $('.labeled.icon.dropdown.button')

if (selector_query) {
    let element = $('#filter-' + selector_query)
    
    if (element.length) {
        filter(selector_query);
        filterButtons.removeClass('active');
        element.addClass('active');
        element.blur();
        filterDropdown.dropdown('set selected', selector_query);
    }
}

filterButtons.click(function () {
    filter(this.id.replace("filter-", ""));

    filterButtons.removeClass('active');
    $(this).addClass('active');
    $(this).blur();
    filterDropdown.dropdown('set selected', this.id.replace("filter-", ""));
})

$('#filter-all').click(function() {
    filterButtons.removeClass('active');
    $(this).addClass('active');
    $(this).blur();
    filterDropdown.dropdown('clear');
})

function filter(category) {
    let selector = $('#filterable > div, #filterable > a')

    if (category.toLowerCase() == 'all' || category.toLowerCase() == 'todos') {
        selector.fadeOut('fast', function() {
            selector.attr("style", "display: none !important");
        }).promise().done(function() {
            selector.fadeIn('slow').promise().done(function() {
                $(this).trigger("fadeInComplete");
            })
        });
    } else {
        selector.fadeOut('fast', function() {
            selector.attr("style", "display: none !important");
        }).promise().done(function() {
            $('.' + category).fadeIn('slow').promise().done(function() {
                $(this).trigger("fadeInComplete");
            })
        });
    }
}
