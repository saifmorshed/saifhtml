
   $(function(){
            
            var travelPopoverHtml = `<div data-popover-hide id="travelDistination" style=" min-width: 280px; "> 
                    <div> 
                        <label class="d-block font-20 mb-2"><strong>Travel Destination</strong></label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-transparent border-e-0"><i class="fa-solid fa-magnifying-glass"></i> </span> 
                            <select class="form-select " id="inputTravelDestination" aria-label="" style="width: 80%; height: 50px;" multiple>
                                <option value="">Select</option>
                                <option value="1">South Africa</option>
                                <option value="2">Canada</option>
                                <option value="3">Hong Kong</option>
                                <option value="3">Japan</option>
                                <option value="3">Malaysia</option>
                              </select>
                              <div class="tags-container"></div>
                        </div>
                    </div>
                </div>`;
            var tripPopoverHtml = `<div data-popover-hide id="tripType" > 
                        <div> 
                            <div class="mb-3">
                                <label class="d-block font-20 mb-2"><strong>Trip Type</strong></label>
                                <input type="radio" class="btn-check" name="trip_type" id="trip_single" autocomplete="off" value="" checked>
                                <label class="btn btn-outline-info px-3 " for="trip_single">Single Trip</label>
            
                                <input type="radio" class="btn-check" name="trip_type" id="trip_multi" autocomplete="off" value="" >
                                <label class="btn btn-outline-info px-3  " for="trip_multi" >Annual- Multi Trip</label>                                                                                              
                                <div class="d-flex align-items-top py-3"> <span class="pe-2"><i class="fa-solid fa-circle-info"></i></span> <span>Provides cover for a single domestic or <br> international round trip.</span></div>
                            </div>
                        </div>
                    </div>`;
            var goingOnCruisePopoverHtml = `<div id="GoingOnCruise" class="" style="width: 250px;"> 
                                    <div>                                                 
                                        <div class="mb-3">                                            
                                            <div class="py-2">
                                                <div id="dateCruise" data-date="02/12/2024"></div>                                                
                                            </div>  
                                            <div class="showSelectedDate d-flex justify-content-between align-items-center" style="display:none !important">
                                                <span id="totalDaysCruise" class="fw-bold text-center text-primary"></span>
                                                <span> 
                                                  <span class="btn btn-sm btn-outline-info me-1 clearBtnCruise" id="">Clear</span>
                                                  <span class="btn btn-sm btn-info" id="applieddate">Apply</span>
                                                </span>
                                            </div> 
                                            <div class="d-flex align-items-top py-3"> <span class="pe-2"><i class="fa-solid fa-circle-info"></i></span> <small>You can add multiple dates to your schedule.</small></div>
                                        </div>   
                                    </div>
                                </div>`;
            var skiSportsPopoverHtml = `<div id="skiSports" class="" style="width: 250px;"> 
                                    <div>                                                 
                                        <div class="mb-3">
                                            
                                            
                                            <div class="py-2">
                                                <div id="dateSki" data-date="02/12/2024"></div>
                                            </div>  
                                            <div class="showSelectedDate d-flex justify-content-between align-items-center " style="display:none !important">
                                                <span id="totalDaysSki" class="fw-bold text-center text-primary"></span>
                                                <span>
                                                  <span class="btn btn-sm btn-outline-info me-1 clearBtnSki" id="">Clear</span>
                                                  <span class="btn btn-sm btn-info" id="applieddate">Apply</span>  
                                                </span>
                                            </div>
                                            <div class="d-flex align-items-top py-3"> <span class="pe-2"><i class="fa-solid fa-circle-info"></i></span> <small>You can add multiple dates to your schedule.</small></div>
                                        </div>   
                                    </div>
                                </div>`;
            var excessPopoverHtml = `<div id="excess"> 
                        <div> 
                            <div class="mb-3">
                                <label class="d-block font-20 mb-2"><strong>Choose Your Excess</strong></label> 
        
                                <input type="radio" class="btn-check" name="excess" id="excess0" value="0" >
                                <label class="btn btn-outline-info px-3 " for="excess0">$0</label>
            
                                <input type="radio" class="btn-check" name="excess" id="excess100" value="100">
                                <label class="btn btn-outline-info px-3  " for="excess100" >$100</label>
        
                                <input type="radio" class="btn-check" name="excess" id="excess200" value="200" checked>
                                <label class="btn btn-outline-info px-3  " for="excess200" >$200</label>
        
                            </div>
                        </div>
                    </div>`;

         
        
            // TRAVEL DESTINATION POPOVER
            $('#travelSelect').popover({                
                placement: 'bottom',
                html:true,
                sanitize: false, 
                container : 'body', 
                content: travelPopoverHtml               
            }).on("shown.bs.popover", function(e){
                // hide all other popovers
                $("[data-bs-original-title]").not(e.target).popover("hide");
                
            });
            //  TRIP TYPE POPOVER
            $('#tripSelect').popover({                
                placement: 'bottom',
                html:true,
                sanitize: false, 
                container : 'body', 
                content: tripPopoverHtml
            }).on("shown.bs.popover", function(e){
                // hide all other popovers
                $("[data-bs-original-title]").not(e.target).popover("hide");
                
            });
             //  TRAVELLERS POPOVER
            $('#travellersSelect').popover({                
                placement: 'bottom',
                html:true,
                sanitize: false, 
                container : 'body',
                content: function(){
                    return $('#travellers').html();
                }
            }).on("shown.bs.popover", function(e){
                // hide all other popovers
                $("[data-bs-original-title]").not(e.target).popover("hide");
                
            });
            //  GOING ON CRUISE POPOVER
            // $('#GoingOnCruiseSelect').popover({                
            //     placement: 'bottom',
            //     html:true,
            //     sanitize: false, 
            //     container : 'body', 
            //     content: goingOnCruisePopoverHtml,
            //     trigger: 'manual'
            // }).on("shown.bs.popover", function(e){
            //     // hide all other popovers
            //     $("[data-bs-original-title]").not(e.target).popover("hide");
                
            // });
            $('.GoingOnCruiseSelect, .GoingOnCruiseSelect_2, .GoingOnCruiseSelect_3').popover({                
              placement: 'bottom',
              html:true,
              sanitize: false, 
              container : 'body',
              content: goingOnCruisePopoverHtml
            }).on("shown.bs.popover", function(e){ 
              $("[data-bs-original-title]").not(e.target).popover("hide");
              
				});

            
            //  SKI SPORTS POPOVER
            $('.skiSportsSelect, .skiSportsSelect_2, .skiSportsSelect_3').popover({                
                placement: 'bottom',
                html:true,
                sanitize: false, 
                container : 'body',
                content: skiSportsPopoverHtml
            }).on("shown.bs.popover", function(e){
                // hide all other popovers
                $("[data-bs-original-title]").not(e.target).popover("hide");
                
            });
            // DEPART & RETURN DATE
            $('input[name="dates"]').daterangepicker({ 
                showDropdowns: true, // Show year and month dropdowns
                minDate: moment(), // Set initial start date to today
                startDate: moment(), // Set initial start date to today
                locale: {
                    cancelLabel: 'Clear',
                    format: 'DD MMM \'YY', // Format date as desired 
                },  
                alwaysShowCalendars: true,
                showCustomRangeLabel: false,
                linkedCalendars: false,
                opens: 'center',
                isInvalidDate: function(date) {
                    return false;
                }
            }); 
 
            
            
            //  TRAVELLERS POPOVER
            $('#excessSelect').popover({                
                placement: 'bottom',
                html:true,
                sanitize: false, 
                container : 'body',
                trigger: 'focus',
                content: excessPopoverHtml
            }).on("shown.bs.popover", function(e){
                // hide all other popovers
                $("[data-bs-original-title]").not(e.target).popover("hide");
                
            });
        
            // Trevel Destination Extra codes for Popover
            $('body').on('shown.bs.popover', function(){
                    $('select#inputTravelDestination').select2().on('change', function(e){
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
        
            });
            
            // Going On Cruise Extra codes for Popover
            $('body').on('shown.bs.popover', function(){
                $('#dateCruise').datepicker({
                    startDate: new Date(),
                    todayHighlight:true,
                    multidate: true,
                    multidateSeparator: "-",
                    autoClose: true, 
                }).on("changeDate", function(event) {   
                    $('#onCruise_hidden_input').val(
                        $(this).datepicker('getFormattedDate') 
                    );
                    var selectedDates = $(this).datepicker('getDates');
                    var totalDays = selectedDates.length;
                    $('#totalDaysCruise').parent('div').show();
                    $('#totalDaysCruise').text('Total Days: ' + totalDays);                   
                  });
        
                function highlightRange(date) {
                    var selectedDates = $('#dateCruise').datepicker('getDates');
                    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
                    return 'highlighted';
                    }
                    return '';
                }
            });
            
            // SKI sports Extra codes for Popover
            $('body').on('shown.bs.popover', function(){
                $('#dateSki').datepicker({
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
                    $('#totalDaysSki').parent('div').show();
                    $('#totalDaysSki').text('Total Days: ' + totalDays);                     
                });
        
                function highlightRange(date) {
                    var selectedDates = $('#dateSki').datepicker('getDates');
                    if (selectedDates.length === 2 && date >= selectedDates[0] && date <= selectedDates[1]) {
                    return 'highlighted';
                    }
                    return '';
                }
            });
            // Clear Date Button
            $(document).on('click', '.clearBtnCruise', function(){  
              $('#dateCruise,  #mdateCruise').datepicker('clearDates');
              let demo = $('#GoingOnCruise .showSelectedDate > span:first-child, #mGoingOnCruise .showSelectedDate > span:first-child').text('Total Days: 0'); 
            });
            $(document).on('click', '.clearBtnSki', function(){  
              $('#dateSki, #mdateSki').datepicker('clearDates');
              let demo = $('#skiSports .showSelectedDate > span:first-child, #mskiSports .showSelectedDate > span:first-child').text('Total Days: 0'); 
            }) 
           
            $(document).on('change', 'input[name="GoingOnCruise"], input[name="skiWinterSports"], input[name="mGoingOnCruise"], input[name="mskiWinterSports"]', function(){
                let check   = $(this).val()
                let div     = $(this).siblings('div');
                if(check == "no"){
                    div.addClass('disabled-date');
                } else {
                    div.removeClass('disabled-date');
                }
            })      
            
            $(document).on('click', 'html', function(e) {       
                if(e.target.id == 'Cruise_yes'){
                    $('.GoingOnCruiseSelect').popover('show');
                } else if(e.target.id == 'Cruise_02_yes'){
                    $('.GoingOnCruiseSelect_2').popover('show');
                } else if(e.target.id == 'Cruise_03_yes'){
                    $('.GoingOnCruiseSelect_3').popover('show');
                } else if(e.target.id == 'Sports_yes'){
                    $('.skiSportsSelect').popover('show');
                } else if(e.target.id == 'Sports_02_yes'){
                    $('.skiSportsSelect_02').popover('show');
                } else if(e.target.id == 'Sports_03_yes'){
                    $('.skiSportsSelect_03').popover('show');
                } else if (typeof $(e.target).data('bs-original-title') == 'undefined' && !$(e.target).parents().is('.popover')) {
                $('.popover.show').popover('hide');
                $('[data-bs-original-title]').popover('hide');
              }
            }); 

        
            $(document).on('click', '#travelersApply', function(e) {                  
                if ($(e.target).parents().is('.popover')) {
                    $('#travellersSelect').popover('hide');
                }               
            });
        
           
            $(document).on('click', '#applieddate', function(e) {                  
                if ($(e.target).parents().is('.popover')) {
                    $('[data-bs-original-title]').popover('hide');
                }                
            }); 
            
            
            $(document).scroll(function() {
              var scrolled = $(this).scrollTop(); 
              if (scrolled > 780) {
                $('th.bg-info-light:first-child').removeClass('firstth'); 
                $('th.bg-info-light:last-child').removeClass('lastth'); 
              } else  {
                $('th.bg-info-light:first-child').addClass('firstth'); 
                $('th.bg-info-light:last-child').addClass('lastth'); 
              }
            });

            // Number of Dependents
            $(document).on('click', '.number-add-plus', function(e) {  
                let feild = $('input[name="numberofdependent"]').val();
                feild++;
                $('input[name="numberofdependent"]').val(feild);
            }); 
            $(document).on('click', '.number-add-minus', function(e) {  
                let feild = $('input[name="numberofdependent"]').val();
                if(feild == 0){return false}
                feild--;
                $('input[name="numberofdependent"]').val(feild);
            });

            $(document).on('click', '#addOptions', function(){
                $('#showAddOptions').slideDown(200)
            })
        
        
        });
        
