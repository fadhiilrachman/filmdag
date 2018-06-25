var default_p = 1, json_url = '/json/process';

function renderPertanyaan(data) {
	if(!data) return false;
	$('#question-text').html(data.text).fadeIn();
	window.p_yes = data.if_yes;
	window.p_no = data.if_no;
}

function renderHasil(data) {
	if(!data) return false;
	$('#question-button').hide();
	var html='Anda cenderung memiliki tipe golongan darah ' + data.goldar, i=0;
	$('#question-title').html('Golongan Darah: ' + data.goldar);
	html+='<ol>';
	while(i < data.kriteria.length) {
		html+='<li>' + data.kriteria[i] + '</li>';
		i++;
	}
	html+='</ol>';
	$('#question-text').html(html);
}

function proses(p) {
	$('#question-text').html('<img src="/assets/images/loading-sm.gif">');
	$.post(json_url, {p: p}, function(res) {
		if(res.error) {
			alert('Terjadi galat: ' + res.error);
		} else {
			if(res.type=='kriteria') {
				renderPertanyaan(res);
			} else if(res.type=='hasil') {
				renderHasil(res);
			}
		}
	});
}

$(".btn.btn-danger").click(function(){
	if(window.p_no) {
		proses(window.p_no);
	}
});

$(".btn.btn-success").click(function(){
	if(window.p_yes) {
		proses(window.p_yes);
	}
});

$(document).ready(function() {
	if(document.title.indexOf("Beranda")==0) {
		setTimeout(function() {
			$('#question-title,#question-button').fadeIn();
			proses(default_p);
		}, 500);
	}
});