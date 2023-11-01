$(function() {
    strget=window.location.search.substr(1);
    id= strget.split("=")[1];
   
    url =
   "https://itunes.apple.com/lookup?id="+id+"&entity=song&callback=?";
    $.getJSON(url).done(function(data){
    cd = data.results;
    tam= cd.length;
    html='';
    $('header').html(cd[0].collectionName + ' - ' +
   cd[0].artistName);
   
    for (var i = 1; i< tam; i++) {
    title = cd[i].trackName;
    audio = cd[i].previewUrl;
    number = cd[i].trackNumber;
   
    html += lili(title, audio, number);
    }
    $("ul").html(html).listview("refresh");
    });
   });
   function lili(title, audio, number){
    htmlli='<li><h2>'+number+'-'+title+'</h2>';
    htmlli+='<audio controls src="'+audio+'" /></li>';
    return htmlli;
   }
   