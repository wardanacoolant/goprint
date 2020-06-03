//event saat link d klik
//untuk membuat href tidak aktif ditambah e atau event
$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	//console.log($('body').scrollTop());
	//console.log(elemenTujuan.offset().top);

	//pindah scrol
	//$('body').scrollTop('0');
	//$('body').scrollTop(elemenTujuan.offset().top);
	
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	},1250, 'swing');
	
	e.preventDefault();
});

