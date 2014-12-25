$(document).ready(function() {
	$("#screen").click(function(event) {		
		$('.nav_close,.scree_nav').removeClass('d_n');
	});
	$('.nav_close').click(function(event) {
		$('.nav_close').addClass('d_n');
		$('.scree_nav').addClass('d_n');
	});
	$('#rader').click(function(){
		$('.radar').removeClass('d_n');
		if($(this).hasClass('ent')){			
			setTimeout(function(){
				window.location.href='ent_rader_list.html';
			},2000);
		}else{
			setTimeout(function(){
				window.location.href='rader_list.html';
			},2000);
		}
	});
	$('.job_Category_btn').click(function(event) {
		if($('#rader').hasClass('ent')){
			window.location.href='ent_rader_list.html';
		}else{			
			window.location.href='rader_list.html';
		}
	});
	/*
		此处是工作查找后显示的工作列表
		并且每个tr会有自己一个页面。
	*/
	$('#job_main_list tbody tr').each(function(index, el) {		
		$(this).click(function(event) {
			if($('#job_main_list').hasClass('ent')){
				window.location.href='ent_perrest.html';
			}else{				
				window.location.href='job_acitle.html';
			}
		});
	});

	/*申请岗位*/
	$('.apply').click(function(event) {
		alert('申请成功');
	});
	$('.souchang').click(function(event) {
		alert('收藏成功');
	});

	/*雷达结果页*/
	$('.map_icon').each(function(index, el) {
		$(this).click(function(event) {
			var thisP = $(this).parent();
			if($(this).hasClass('map_icon_active')){
				return false;
			}else{				
				thisP.siblings().removeClass('z-active');
				// thisP.siblings().find('a').hide();
				thisP.siblings().find('div').removeClass('map_icon_active');
				thisP.addClass('z-active');
				$(this).addClass('map_icon_active');

			}
			event.cancelBubble=true;
		});
	});
});