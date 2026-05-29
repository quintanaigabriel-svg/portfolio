$(document).ready(function(){

    $('nav li').click(function(){

        const filter = $(this).attr('data-filter');

        if(filter === 'all'){

            $('.card').show();

        } else {

            $('.card').hide();

            $('.' + filter).show();

        }

    });

});