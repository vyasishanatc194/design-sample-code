$(function() {


    // Table setup
    // ------------------------------

    // Setting datatable defaults
    $.extend( $.fn.dataTable.defaults, {
        autoWidth: false,
        columnDefs: [{ 
            orderable: false,
            width: '100px',
            targets: [ 5 ]
        }],
        dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
        language: {
            search: '<span>Search:</span> _INPUT_',
            lengthMenu: '<span>Show:</span> _MENU_',
            paginate: { 'first': 'First', 'last': 'Last', 'next': '&rarr;', 'previous': '&larr;' }
        },
        drawCallback: function () {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').addClass('dropup');
        },
        preDrawCallback: function() {
            $(this).find('tbody tr').slice(-3).find('.dropdown, .btn-group').removeClass('dropup');
        }
    });

    /* "bPaginate": false, */

    // Default ordering example
    $('.datatable-sorting').DataTable({
        order: [3, "desc"]
    });


    // Multi column ordering
    $('.datatable-multi-sorting').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [4],
            orderData: [4, 0]
        }, {
            orderable: false,
            width: '100px',
            targets: [5]
        }]
    });

    $('.datatable-Summary-sorting').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [5],
            orderData: [5, 0]
        }, {
            targets: [6]
        }],
        "iDisplayLength": 30,
	    "aLengthMenu": [[30, 50, 100, -1], [30, 50, 100, "All"]]
    });

    $('.payout-none').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [5],
            orderData: [5, 0]
        }, {
            targets: [6]
        }],
        "bPaginate": false

    });
    
    $('.pagination-none').DataTable({
        "bPaginate": false
    });

    $('.pagination-none2').DataTable({
       
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [3],
            orderData: [3, 0]
        }, {
            targets: [4]
        }],

       "bPaginate": false
    });

    $('.pagination-record').DataTable({
       
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [4],
            orderData: [4, 0]
        }, {
            targets: [5]
        }],
       "bPaginate": false
    });

    $('.table-credentials').DataTable({
       
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [2],
            orderData: [2, 0]
        }],

       "bPaginate": false
    });

    // Multi column ordering
    $('.datatable-multi-sorting1').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {    
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [5],
            orderData: [5, 0]
        }, {
            orderable: false,
            targets: [6]
        }]
    });

    $('.sorting-reserve').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [3],
            orderData: [3, 0]
        }]
    });

    $('.parent-sorting').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [3],
            orderData: [3, 0]
        }, {
            orderable: false,
            targets: [4]
        }]
    });

    $('.child_info1').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [3],
            orderData: [3, 0]
        }, {
            orderable: false,
            targets: [4]
        }]
    });

    $('.reservations-info').DataTable({
        columnDefs: [{
            targets: [0],
            orderData: [0, 1]
        }, {
            targets: [1],
            orderData: [1, 0]
        }, {
            targets: [3],
            orderData: [3, 0]
        }]
    });
    


    // Complex headers with sorting
    $('.datatable-complex-header').DataTable({
        columnDefs: []
    });


    // Sequence control
    $('.datatable-sequence-control').dataTable( {
        "aoColumns": [
            null,
            null,
            {"orderSequence": ["asc"]},
            {"orderSequence": ["desc", "asc", "asc"]},
            {"orderSequence": ["desc"]},
            null
        ]
    });



    // External table additions
    // ------------------------------

    // Add placeholder to the datatable filter option
    $('.dataTables_filter input[type=search]').attr('placeholder','Search Here...');


    // Enable Select2 select for the length option
    $('.dataTables_length select').select2({
        minimumResultsForSearch: "-1"
    });
    
});
