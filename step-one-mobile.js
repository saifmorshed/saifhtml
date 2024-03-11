
$(function(){

    $(document).on('click','.mobile-toggle-icon', function(){
        $("#mobile-toggle-section").slideToggle(200, function(){
            if($("#mobile-toggle-section").is(':hidden')){
                $('.m-toggle-icon').html('<i class="fa-solid fa-pencil"></i>');
            } else {
                $('.m-toggle-icon').html('<i class="fa-solid fa-xmark"></i>');
            }
        });
        
    });

    $('.btn-toggle-selector').click(function() {
        var accordionItem = $(this).parent();
        accordionItem.toggleClass('active');
        $('.toggle-item').not(accordionItem).removeClass('active');
 
        accordionItem.find('.toggle-item-content').slideToggle(200);
        $('.toggle-item').not(accordionItem).find('.toggle-item-content').slideUp(200);
        

        // $('.toggle-item.active').find('.toggle-item-content').slide
    });


    
    $('select#m-inputTravelDestination').select2().on('change', function(e){
        var $selected = $(this).find('option:selected');
        var $container = $(this).siblings('.tags-container');

        var $list = $('<ul>');
        $selected.each(function(k, v) {
            var $li = $('<li class="tag-selected"><a class="destroy-tag-selected">×</a>' + $(v).text() + '</li>');
            $li.children('a.destroy-tag-selected')
            .off('click.select2-copy')
            .on('click.select2-copy', function(e) {
                var $opt = $(this).data('select2-opt');

                $opt.prop('selected', false); // <-- Main difference

                $opt.parents('select').trigger('change');
            }).data('select2-opt', $(v));
            $list.append($li);
        });
        $container.html('').append($list); 
    }) 

    // Trip Type Mobile View
    $(document).on('change', 'input[name="m_trip_type"]', function(){
        if($(this).val() != 'single') {
            $('#m_trip_info').text('Trip Type Single Trip Annual- Multi Trip Provides cover for an unlimited number of trips within 12 month period 250kms from home. Max Trip Duration 30, 45, 60 days');  
        } else {
            $('#m_trip_info').text('Provides cover for a single domestic or international round trip.');  
        }
    })


    // Travel Destination Date Select Mobile Script
    $('#mDepartReturnDate').daterangepicker({
        parentEl: '#customDateRange',
            showDropdowns: true, 
            minDate: moment(), 
            startDate: moment(), 
            locale: {
                cancelLabel: 'Clear',
                format: 'DD MMM \'YY', 
            },  
            alwaysShowCalendars: true,
            showCustomRangeLabel: true,
            linkedCalendars: false,
            opens: 'center',
            isInvalidDate: function(date) {
            return false;
        }
    });
    $('#mDepartReturnDate').on('apply.daterangepicker cancel.daterangepicker hide.daterangepicker', function(ev, picker) { 
        $('#customDateRange label').hide();        
        $('#departReturnDateValue').val(picker.startDate.format('DD MMM \'YY')+' - '+picker.endDate.format('DD MMM \'YY')); 
        $('#departReturnDateValue').parents('.btn-toggle-selector').find('div:first-child>span').fadeIn(200) 

    });
    $('#mDepartReturnDate').on('show.daterangepicker', function(ev, picker) { 
        $('#customDateRange label').show();
    });


    // onGoningCruise Mobile Script
    $('#mdateCruise').datepicker({
        startDate: new Date(),
        todayHighlight:true,
        multidate: true,
        // multidateSeparator: "-",
        autoClose: true, 
    }).on("changeDate", function(event) {   
        $('#onCruise_hidden_input').val(
            $(this).datepicker('getFormattedDate') 
        );
        var selectedDates = $(this).datepicker('getDates');
        var totalDays = selectedDates.length;
        $('#mtotalDaysCruise').parent('div').show();
        $('#mtotalDaysCruise').text('Total Days: ' + totalDays);                   
    });

    // 
    $('#mdateSki').datepicker({
        startDate: new Date(),
        todayHighlight:true,
        multidate: true,
        autoClose: true,         
    }).on("changeDate", function(event) {
        $('#skiSports_hidden_input').val(
            $(this).datepicker('getFormattedDate') 
        ); 
        // Show How much days are selected
        var selectedDates = $(this).datepicker('getDates');
        var totalDays = selectedDates.length;
        $('#mtotalDaysSki').parent('div').show();
        $('#mtotalDaysSki').text('Total Days: ' + totalDays);                     
    });


    // Compare Table Mobile View Script
    function replaceTableForMobile() {
        // Check if the screen width is less than 820px
        if ($(window).width() < 640) {
			$set_row_id = 1;
            $('#compare-destop-view tbody tr').each(function(index){
                // Replace each table tr with some other HTML content (Accordion)
				if (index % 2 !== 1) {
					$col_data_1 = $(this).find('td:first-child').html()
					$col_data_2 = $(this).find('td:nth-child(2)').html()
					$col_data_3 = $(this).find('td:nth-child(3)').html()
					$col_data_4 = $(this).find('td:nth-child(4)').html()
					$details_data = $(this).next().text(); 
					if(index === 0){
						$show_accordion = 'show';
						$collapsed =  '';
						$data_aria = 'true';
					} else {
						$show_accordion = ' ';
						$collapsed =  'collapsed';
						$data_aria = 'false';
					}
					// console.log($details_data)

					$html_data = `<div class="accordion-item">
						<div class="">
							<span class="accordion-button `+$collapsed+`" type="button" data-bs-toggle="collapse" data-bs-target="#mrow_`+$set_row_id+`" aria-expanded="`+$data_aria+`" aria-controls="collapseOne">
								`+$col_data_1+`
							</span>
						</div>
						<div id="mrow_`+$set_row_id+`" class="accordion-collapse collapse `+$show_accordion+`" data-bs-parent="#compare-table">
						<div class="accordion-body">
							<div class="d-flex">
								<div class="col-5"><b>Top Cover</b></div>
								<div class="col-7">`+$col_data_2+`</div>
							</div>
							<div class="d-flex justify-content-between">
								<div class="col-5"><b>Essentials Cover</b></div>
								<div class="col-7">`+$col_data_3+`</div>
							</div>
							<div class="d-flex justify-content-between">
								<div class="col-5"><b>Basics Cover</b></div>
								<div class="col-7">`+$col_data_4+`</div>
							</div>
							<div class="py-2">`+$details_data+`</div>
						</div>
						</div>
					</div>`;					

					$('#compare-table').append($html_data);					
					$set_row_id++;
				} else {
					$(this).replaceWith('');
				}
            });
        }
    }
    // Call the function initially
    replaceTableForMobile();
    // Call the function when the window is resized
    $(window).resize(function(){
        replaceTableForMobile();
    });


 

 



});

 
function expandNextPartForDate(e){ 
    $(e).next().slideDown(200, function(){
        if($(this).is(':hidden')){
            $(e).find('div:first-child>span').fadeIn(200) 
        } else { 
            $(e).find('div:first-child > span').hide()
        }
    });  
}
 


// Destop Demo View
