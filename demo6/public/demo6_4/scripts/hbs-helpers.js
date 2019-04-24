Handlebars.registerHelper('??', function(exp, elseValue, options) {
    if (exp) {
        return exp;
    }
    return elseValue;
});


Handlebars.registerHelper('list', function(context, options) {
    let out = '<ul>';
    Array.from(context).forEach((ctx) => {
       out += '<li>' + options.fn(ctx) + '</li>';
    });
    return out + '</ul>';
});


