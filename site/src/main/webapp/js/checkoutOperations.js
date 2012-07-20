/* Operations that deal with checkout */
$(function(){
	// The options used for the login/register fancybox modal
	var fancyCheckoutOptions = {
		maxWidth	: 720,
		maxHeight	: 560,	
		fitToView	: true,
		width		: '100%',
		autoSize	: true,
		closeClick	: false,
		topRatio	: 0,
		openEffect	: 'none',
		closeEffect	: 'none',
		type        : 'ajax',
		scrolling   : 'no'
	};
	
    function copyShippingForm() {
        $('.cloneable').each(function() {
            $("#billing_info input[name='" + $(this).attr('name') + "']").val($(this).val());
            $("#billing_info select[name='" + $(this).attr('name') + "']").val($(this).val());
        })
    }
    
    function showAddAddress() {
		var $form = $('form#multiship_address');
		BLC.ajax({url: $form.attr('action'),
				type: "POST", 
				data: $form.serialize() 
			}, function(data, extraData) {
		    	var showAddAddressUrl = $('a.add-address-link').attr('href');
				BLC.ajax({url: showAddAddressUrl}, function(data, extraData) {
					$('#multiship-products').hide();
					$('.fancybox-inner').append(data);
				});
			}
		);
		return false;
    }
    
    function addAddAddressDropDownOptions() {
		$('select.multiship-address')
         .append($("<option></option>")
         .attr("value",'')
         .text('Add new address...')); 
    }

    /* Toggle visibility of payment methods */
    $('body').on('click', 'input#paymentMethod_cc, input#paymentMethod_paypal', function() {
        $('#paymentOptions dd').css({display:"none"});
        $(this).closest('dt').next().css({display:"block"});
    });

    /* Copy Shipping Form to Billing Form Checkbox */
    $('body').on('click', 'input#use_shipping_address', function() {
        if ($(this).is(':checked')) {
            copyShippingForm();
        } else {
            $(this).closest('form').find(".clearable").val("");
        }
    });

    /* Submit Shipping Form when radio button is checked */
    $('body').on('click', 'input.shipping_method_option', function() {
        if (!$('#shipping_info').valid()){
            $(this).prop('checked', false);
        } else {
            $('#shipping_info').submit();
        }
    });

    /* Show or Edit multiship options link was clicked */
    $('body').on('click', 'a#multiship', function() {
		$.fancybox.open($.extend(fancyCheckoutOptions, { href : $(this).attr('href'), afterShow: function() {
			addAddAddressDropDownOptions();
		}}));
		return false;
    });
    
    /* Add address from the dropdown was selected */
    $('body').on('change', 'select.multiship-address', function() {
    	var $option = $(this).children(':selected');
    	if ($option.text() == 'Add new address...') {
    		showAddAddress();
    	}
    });
    
    /* Add address button clicked */
    $('body').on('click', 'a.add-address-link', function() {
    	return showAddAddress();
    });
    
    /* Cancel pressed on multiship */
    $('body').on('click', '#multiship-products a.cancel', function() {
		$.fancybox.close();
		return false;
    });
    
    /* Cancel pressed on add address */
    $('body').on('click', '#multiship-add-address a.cancel', function() {
		$('#multiship-products').show();
		$('#multiship-add-address').remove();
		return false;
    });
    
    /* Save pressed on add address */
	$('body').on('click', '#multiship-add-address input.save', function() {
		var $form = $(this).closest('form');
		
		BLC.ajax({url: $form.attr('action'),
				type: "POST", 
				data: $form.serialize() 
			}, function(data, extraData) {
				$('.fancybox-inner').html(data);
				addAddAddressDropDownOptions();
			}
		);
		return false;
	});
});