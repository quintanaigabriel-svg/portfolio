$(function () {

    $("nav li").click(function () {

        $("nav li").removeClass("active");

        $(this).addClass("active");

        let categoria = $(this).data("filter");

        if (categoria === "all") {

            $(".card").fadeIn(300);

        } else {

            $(".card").hide();

            $(".card." + categoria).fadeIn(300);

        }

    });

});