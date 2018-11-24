$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();

	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr id="new">' +
                      '<td><input id="date" type="text" class="form-control" name="date"></td>' +
                      '<td><input id="description" type="text" class="form-control" name="description"></td>' +
                      '<td><input id="lang" type="text" class="form-control" name="lang"></td>' +
                      '<td><input id="granularity" type="text" class="form-control" name="granularity"></td>' +
                      '<td>' +
                          '<a class="add" title="Add" data-toggle="tooltip">' +
                              '<i class="material-icons" style="vertical-align: middle;">&#xE03B;</i></a>' +
                          '<a class="edit" title="Edit" data-toggle="tooltip">' +
                              '<i class="material-icons" style="vertical-align: middle;">&#xE254;</i></a>' +

                          '<form id="form_add-new" action="../events/create" method="post" style="display: none">' +
                              '{% csrf_token %}' +
							  '<input id="hidden_id-new" type="hidden" name="id" value="new">' +
							  '<input id="hidden_date-new" type="hidden" name="date" value="">' +
							  '<input id="hidden_description-new" type="hidden" name="description" value="">' +
							  '<input id="hidden_lang-new" type="hidden" name="lang" value="">' +
							  '<input id="hidden_granularity-new" type="hidden" name="granularity" value="">' +
						  '</form>' +

						  '<form id="form_delete-new" action="../events/delete" method="post" style="display: none">' +
						      '{% csrf_token %}' +
							  '<input type="hidden" name="id" value="new">' +
						  '</form>' +
                      '</td>' +
                  '</tr>';

    	$("table").append(row);
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();

        // Inputs changes
		$("#date").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_date-" + id

            var value = $(this).val()
            console.log(value)
            $(selector).val(value)
        });

        $("#description").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_description-" + id

            var value = $(this).val()
            $(selector).val(value)
        });

        $("#lang").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_lang-" + id

            var value = $(this).val()
            $(selector).val(value)
        });

        $("#granularity").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_granularity-" + id

            var value = $(this).val()
            $(selector).val(value)
        });
    });

	// Add row on add button click
	$(document).on("click", ".add", function(){
        var id = $(this).closest("tr").attr("id")
        var selector = "#form_add-" + id
        $(selector).submit()
    });

	// Edit row on edit button click
	$(document).on("click", ".edit", function(){
	    var ids = ["date", "description", "lang", "granularity"]

        $(this).parents("tr").find("td:not(:last-child)").each(function(index, element){
			$(this).html('<input id="' + ids[index] + '" type="text" class="form-control" value="' + $(this).text() + '">');
		});
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");

        // Inputs changes
		$("#date").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_date-" + id

            var value = $(this).val()
            console.log(value)
            $(selector).val(value)
        });

        $("#description").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_description-" + id

            var value = $(this).val()
            $(selector).val(value)
        });

        $("#lang").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_lang-" + id

            var value = $(this).val()
            $(selector).val(value)
        });

        $("#granularity").change(function(){
            var id = $(this).closest("tr").attr("id")
            var selector = "#hidden_granularity-" + id

            var value = $(this).val()
            $(selector).val(value)
        });
    });

	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        var id = $(this).closest("tr").attr("id")
        var selector = "#form_delete-" + id

        $(selector).submit()
    });
});
