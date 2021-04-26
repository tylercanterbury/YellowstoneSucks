
(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $(document).on('submit', '#contact_form', function (e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
			var company = $('#company').val();
			var phone = $('#phone').val();
            var message = $('#message').val();

            if (!name) {
                 $('#name').removeClass('error');
                 $('#name').addClass('error').attr('placeholder','Please Enter Name');
             }else{
                 $('#name').removeClass('error');
             }
           
            if (!email) {
                 $('#email').removeClass('error');
                 $('#email').addClass('error').attr('placeholder','Please Enter Email')
             }else{
                 $('#email').removeClass('error');
             }
			  if (!company) {
                 $('#company').removeClass('error');
                 $('#company').addClass('error').attr('placeholder','Please Enter Company')
             }else{
                 $('#company').removeClass('error');
             }
			  if (!phone) {
                 $('#phone').removeClass('error');
                 $('#phone').addClass('error').attr('placeholder','Please Enter Phone')
             }else{
                 $('#phone').removeClass('error');
             }
            if (!message) {
                 $('#message').removeClass('error');
                 $('#message').addClass('error').attr('placeholder','Please Enter Your Message')
             }else{
                 $('#message').removeClass('error');
             }
             
            
            if (name && email  && company  && phone && message ) {
             	$.ajax({
	                 type: "POST",
	                 url:'contact.php',
	                 data:{
                         'name': name,
                         'email': email,
						 'company': company,
						 'phone': phone,
                         'message': message,
	                 },
	                 success:function(data){
                         $('#contact_form').children('.email-success').remove();
                         $('#contact_form').prepend('<span class="alert alert-success email-success">' + data + '</span>');
                         $('#name').val('');
                         $('#email').val('');
						 $('#company').val('');
						 $('#phone').val('');
                         $('#message').val('');
                         $('.email-success').fadeOut(5000);
	                 },
	                 error:function(res){

	                 }
	             });
             }else{
                $('#contact_form').children('.email-success').remove();
                $('#contact_form').prepend('<span class="alert alert-danger email-success">Somenthing is wrong</span>');
                $('.email-success').fadeOut(5000);
             }
        });
    })

}(jQuery));	
