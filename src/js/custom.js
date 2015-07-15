$(document).ready(function () {
    $(document).on('scroll', onScroll);

    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();
        $(document).off('scroll');

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on('scroll', onScroll);
        });
    });
    
    var animationDelay = 200;

    $('#membership-button').on('click', function() {
        var $membershipForm = $('#membership-form');
        var $registrationBenefits = $('#registration-benefits');
        var $membershipButton = $('#membership-button');
        if ($membershipForm.is(':visible')) {
            $membershipForm.hide(animationDelay);
            $registrationBenefits.show(animationDelay);
            $membershipButton.text('Register');
        } else {
            $membershipForm.show(animationDelay);
            $registrationBenefits.hide(animationDelay);
            $membershipButton.text('Benefits');
        }
    });

    var $history = $('#history');
    var $awards = $('#awards');
    var $mission = $('#mission');

    $history.show();
    $('#history-tab').addClass('current');

    $('#history-tab').on('click', function() {
        $history.show(animationDelay);
        $awards.hide(animationDelay);
        $mission.hide(animationDelay);
        $('#history-tab').addClass('current');
        $('#awards-tab').removeClass('current');
        $('#mission-tab').removeClass('current');
    });

    $('#awards-tab').on('click', function() {
        $awards.show(animationDelay);
        $history.hide(animationDelay);
        $mission.hide(animationDelay);
        $('#awards-tab').addClass('current');
        $('#history-tab').removeClass('current');
        $('#mission-tab').removeClass('current');
    });

    $('#mission-tab').on('click', function() {
        $mission.show(animationDelay);
        $awards.hide(animationDelay);
        $history.hide(animationDelay);
        $('#mission-tab').addClass('current');
        $('#awards-tab').removeClass('current');
        $('#history-tab').removeClass('current');
    });

});
 
function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr('href'));
        if (refElement.position().top <= scrollPosition + 40) {
            $('nav ul li a').removeClass('active');
            currentLink.addClass('active');
        }
        else{
            currentLink.removeClass('active');
        }
    });
}