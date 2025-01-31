const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
$('svg #ON').tooltip({
    title: '<h4>Toronto</h4><ul><li style="color:#fff; font-size:12px">(ON)</li></ul>',
    html: true,
    placement: 'bottom',
    container: 'body'
});

$('svg #OH').tooltip({
    title: '<h4>Columbus</h4><ul><li style="color:#fff; font-size:12px">(OH)</li></ul>',
    html: true,
    placement: 'bottom',
    container: 'body'
});
$('svg #TG').tooltip({
    title: '<h4>Hyderabad</h4><ul><li style="color:#fff; font-size:12px">(TG)</li></ul>',
    html: true,
    placement: 'bottom',
    container: 'body'
});

$('svg #UP').tooltip({
    title: '<h4>Noida</h4><ul><li style="color:#fff; font-size:12px">(UP)</li></ul>',
    html: true,
    placement: 'bottom',
    container: 'body'
});

$('svg #TX').tooltip({
    title: '<h4>Dallas</h4><ul><li style="color:#fff; font-size:12px">(TX)</li></ul>',
    html: true,
    placement: 'bottom',
    container: 'body'
});

$('svg #ANT').tooltip({
    title: '<h4>Medellin</h4><ul><li style="color:#fff; font-size:12px">(ANT)</li></ul>',
    html: true,
    placement: 'bottom',
    container: 'body'
});

$('svg #NJ').tooltip({
    title: '<h4>New Jersey</h4>',
    html: true,
    placement: 'bottom',
    container: 'body'
});
 
$('svg #BA').tooltip({
    title: '<h4>Buenos Aires</h4>',
    html: true,
    placement: 'bottom',
    container: 'body'
});

$('svg #SP').tooltip({
    title: '<h4>São Paulo</h4>',
    html: true,
    placement: 'bottom',
    container: 'body'
});
 