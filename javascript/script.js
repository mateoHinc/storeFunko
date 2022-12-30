var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('#sendComment').on('show.bs.modal', function(e) {
    console.log('Mostrando modal');
    $('#commentBtn').removeClass('btn-outline-info');
    $('#commentBtn').addClass('btn-success');
    $('#commentBtn').prop('disabled',true);
});


/*$('#sendComment').on('shown.bs.modal', function(e) {
    console.log('Se mostró modal');
    $('#commentBtn').removeClass('btn-success');
    $('#commentBtn').addClass('btn-warning');
});*/


$('#sendComment').on('hide.bs.modal', function(e) {
    console.log('El modal contacto se oculta');
});

$('#sendComment').on('hidden.bs.modal', function(e) {
    console.log('El modal contacto se ocultó');
    $('#commentBtn').removeClass('btn-success');
    $('#commentBtn').addClass('btn-outline-info')
    /*$('#commentBtn').prop('disabled', false);*/
});
