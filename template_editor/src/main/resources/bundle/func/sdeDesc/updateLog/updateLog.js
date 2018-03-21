$(document).ready(function () {
    createTitId();
    createVerId();
    function createTitId() {
        var $titNum = $(".page-titNum");
        $.each($titNum, function (i, n) {
            var $this = $(this);
            $this.parent().attr("id", "TitId" + $this.text().replace('、', ''));
        })
    }

    function createVerId() {
        var $section = $(".bs-docs-section");
        $.each($section, function (i, n) {
            var $this = $(this);
            var text = $this.find(".header-versionId").text();
            $this.find(".content-versionId").text(text);
        })
    }
})