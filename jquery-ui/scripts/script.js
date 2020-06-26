$('button').click(function () {
  $(this).addClass('no-hover');
});
$('button').mouseleave(function () {
  $(this).removeClass('no-hover');
});

$('button:first-of-type, button:nth-of-type(4)').click(function () {
  $(this).toggleClass('inactive');
  var hidePanel = $(this).attr('id');
  $('.' + hidePanel).toggleClass('invisible');
});

$('button:nth-of-type(2), button:nth-of-type(3)').click(function () {
  $(this).toggleClass('active');
  var showPanel = $(this).attr('id');
  $('.' + showPanel).toggle();
});

$(document).ready(function () {
  var $output = $('.output');
  var $markup = $('.html').val();
  $output.html($markup);
  var $styles = '<style> div.output ' + $('.css').val() + '</style>';
  $output.append($styles);
  var $script = '<script>' + $('.js').val() + "</script>";
  $output.append($script);
})

$('.html').on('input', function () {
  var $markup = $(this).val();
  var $output = $('.output');
  $output.html($markup);
  var $styles = '<style> div.output ' + $('.css').val() + '</style>';
  $output.append($styles);
  var $script = '<script>' + $('.js').val() + "</script>";
  $output.append($script);
});

$('.css').on('input', function () {
  var $output = $('.output');
  $output.children("style").remove();
  var $styles = '<style> div.output ' + $(this).val() + '</style>';
  var $output = $('.output');
  $output.append($styles);
  if ($(this).val() == '') {
    $output.children("style").remove();
  }
});

$('.js').on('input', function () {
  var $output = $('.output');
  $output.children("script").remove();
  var $script = '<script>' + $(this).val() + '</script>';
  $output.append($script);
  if ($(this).val() == '') {
    $output.children("script").remove();
    var $markup = $('.html').val();
    $output.html($markup);
    var $styles = '<style> div.output ' + $('.css').val() + '</style>';
    $output.append($styles);
  }
});