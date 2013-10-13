(function($){
    $(function(){
        var openID = parseInt(config.ProcessPageList.openPageIDs);
        $('PageListID'+openID).addClass('PageListTriggerOpen');
    });
})(jQuery);