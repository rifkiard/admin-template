$(function(){
    $.validator.setDefaults({
        errorElement: 'label',
        errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
    });

    if($('.my-validate').length){
        $('.my-validate').validate()
    }

    if($('.alert-slide').length){
        setTimeout(function(){
            $(".alert-slide").slideUp()
        }, 5000)
    }
})