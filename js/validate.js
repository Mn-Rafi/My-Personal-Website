

    jQuery("#main-contact-form").validate({
        rules:{
            NameoftheVisitor:{
                required : true,
                integer: false,
                minlength:3
            },
            EmailoftheVisitor:{
                email:true,
                required:true
            },
            Subject:{
                required:true,
                minlength:6
            },
            Message:{
                required:true,
                minlength:10
            }
        }
        
    });

