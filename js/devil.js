$(document).ready(function() {
	$('#letter-a a').click(function(event) {
		event.preventDefault();
		$('#dictionary').load('a.html');
	});
});

$(document).ready(function() {
	$('#letter-b a').click(function(event) {
		event.preventDefault();
		$.getJSON('b.json', function(data) {
			var html = '';
			$.each(data, function(entryIndex, entry) {
				html += '<div class="entry">';
				html += '<h3 class="term">' + entry.term + '</h3>';
				html += '<div class="part">' + entry.part + '</div>';
				html += '<div class="definition">';
				html += entry.definition;
				if (entry.quote) {
					html += '<div class="quote">';
					$.each(entry.quote, function(lineIndex, line) {
						html += '<div class="quote-line">' + line + '</div>';
					});
					if (entry.author) {
						html += '<div class="quote-author">' + entry.author + '</div>';
					}
					html += '</div>';
				}
				html += '</div>';
				html += '</div>';
			});
			$('#dictionary').html(html);
		});
	});
});


$(document).ready(function() {
	$('#letter-g a').click(function(event) {
		event.preventDefault();
		$.getJSON('g.json', function(data) {
			var html = '';
			$.each(data, function(entryIndex, entry) {
				html += '<div class="entry">';
				html += '<h3 class="term">' + entry.term + '</h3>';
				html += '<div class="part">' + entry.part + '</div>';
				html += '<div class="definition">';
				html += entry.definition;
				if (entry.quote) {
					html += '<div class="quote">';
					$.each(entry.quote, function(lineIndex, line) {
						html += '<div class="quote-line">' + line + '</div>';
					});
					if (entry.author) {
						html += '<div class="quote-author">' + entry.author + '</div>';
					}
					html += '</div>';
				}
				html += '</div>';
				html += '</div>';
			});
			$('#dictionary').html(html);
		});
	});
});


$(document).ready(function() {
	$('#letter-j j').click(function(event) {
		event.preventDefault();
		$('#dictionary').load('j.html');
	});
});

$(document).ready(function() {
	$('#letter-d a').click(function(event) {
		event.preventDefault();
		$.get('d.xml', function(data) {
			var html = '';
			$(data).find('definition').each(function() {
				var $definition = $(this);
				var word = $definition.find('word').text();
				var part = $definition.find('part').text();
				var description = $definition.find('description').text();
				html += '<div class="entry">';
				html += '<h3 class="term">' + word + '</h3>';
				html += '<div class="part">' + part + '</div>';
				html += '<div class="definition">'+ description + '</div>';
				html += '</div>';
			});
			$('#dictionary').html(html);
		});
	});
});
