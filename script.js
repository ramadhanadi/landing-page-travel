$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $("#navbar").addClass("fixed-top shadow");
    } else {
        $("#navbar").removeClass("fixed-top shadow");
    }
});

$(document).ready(function() {
    // Tampilkan tombol saat di-scroll ke bawah 300px
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $("#topButton").fadeIn();
        } else {
            $("#topButton").fadeOut();
        }
    });

    // Ketika tombol diklik, kembali ke atas dengan animasi
    $("#topButton").click(function() {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
});



