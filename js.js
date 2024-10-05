$("#FeaturesBig").click(function (e) { 
    $("#fblist").toggle();
    $('.up').toggleClass('fa-angle-up fa-angle-down');

    
});
$("#FeaturesSmall").click(function (e) { 
    $("#fslist").toggle();
    $('.up').toggleClass('fa-angle-up fa-angle-down');

    
});
$("#CompanySmall").click(function (e) { 
    $("#cslist").toggle();
    $('.up2').toggleClass('fa-angle-up fa-angle-down');

});
$("#Companybig").click(function (e) { 
    $("#cblist").toggle();
    $('.up2').toggleClass('fa-angle-up fa-angle-down');

});

$('.bar').click(function (e) { 
    
    $('.side').toggleClass('hidden flex');
});
$('.xx').click(function (e) { 
    
    $('.side').toggleClass('hidden flex');
});