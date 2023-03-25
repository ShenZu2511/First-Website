$(document).ready(function(){
    $('body').css({
        'font-family': '"Oxygen", sans-serif',
        'font-size': '16px',
        'background-color': 'while',
        'color': 'black'
    })

    var windowWidth = window.innerWidth;
    var windowHeight = windowHeight;

    //create header
    $('body').append('<header></header>')
    $('header').append("<nav></nav>");
    $('nav').attr({
        'id':'header-nav', 
        'class':'navbar navbar-default',
    });
    $('#header-nav').css({
        'background-color':"black",
        'border-radius':0,
        'border':0,
        'color':'white'
    });

    $('#header-nav').append('<div></div>');
    $('#header-nav div').attr({
        'class': 'container-fluid'
    });

    $('.container-fluid').append('<a></a>');
    $('.container-fluid a').attr({
        'href':'main.html', 
        'class':'pull-left'
    });

    var imgWidth = parseInt(windowWidth/1000)*100;
    var imgHeight = parseInt(imgWidth/2);
    $('.container-fluid a').append('<img id="logo-img"></img>');
    $('#logo-img').attr({
        'src':'/First-Website/fig/amazon.png',
        'alt':'logo image',
        'height':imgHeight.toString() + 'px', 
        'width':imgWidth.toString() + 'px'
    });
    $('#logo-img').css({ 
        'margin': '2px'
    });

    var marginLeft = parseInt($('#logo-img').attr('width')) + 10;
    $('.container-fluid').append('<div></div>');
    $('.container-fluid div').attr({
        'id':'search', 
        'class': 'input-group'
    });
    $('#search').css({
        'margin-top': $('#logo-img').css('margin'),
        'margin-left': marginLeft.toString() + 'px',
        'text-align': 'center',
        'justify-items': 'center'
    });
    

    $('#search').append('<div></div>');
    $('#search div').attr({
        'class': 'input-group-btn',
        'text-align': 'center',
        'justify-items': 'center'
    });

    $('.input-group-btn').append('<button id="dropdown-menu1">Action</button>');
    $('#dropdown-menu1').attr({
        'type':"button",
        'class':'btn btn-default dropdown-toggle',
        'data-toggle':'dropdown',
        'aria-haspopup':true,
        'aria-expanded':false
    });
    $('#dropdown-menu1').append('<span class="caret"></span>'); 

    $('.input-group-btn').append('<ul></ul>');
    $('.input-group-btn ul').attr({
        'class':'dropdown-menu',
        'aria-labelledbly': $('.input-group-btn button').attr('id')
    });
    $('ul.dropdown-menu').append('<li><a>type 1</a></li>');
    $('li a').attr({
        'href':'#',
        'target': '_seft'
    });

    var inputWidth = parseInt(windowWidth/2);
    $('.input-group-btn').append('<input>');
    $('#search input').attr({
        'class': 'btn btn-default',
        'type': 'text',
        'placeholder':'Search',
        'aria-describedby':'basic-addon1',
        
    });
    $('#search input').css({
        'width':inputWidth.toString() + 'px',
        'text-align': 'left',
        'justify-items': 'left'
    });

    $('.input-group-btn').append('<button><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>');
    $('button').attr({
        'class': 'btn btn-default',
        'type': 'button'
    });

    $('#search').append('<div id="user-home"></div>');
    $('#user-home').css({
        'float': 'right'
    });

    $('#user-home').append('<button id="button-home"><span></span></button>');
    $('#user-home').append('<button id="button-user"><span></span></button>');
    $('#button-home span').attr({
        'class': 'glyphicon glyphicon-home',
        'aria-hidden': true,
    });
    $('#button-home').click(function(){
        window.location.href = '/First-Website/main.html'
    });
    $('#button-user span').attr({
        'class': 'glyphicon glyphicon-user',
        'aria-hidden': true,
    });
    $('#user-home button').attr({
        'class':'btn btn-default',
    });
    $('#user-home button').css({
        'background-color': $('#header-nav').css('background-color'),
        'display': 'inline-block',
        'border-width': '0px',
        'box-sizing': 'border-box',
        'font-size':'20px',
        'color': 'blue'
    });

});
