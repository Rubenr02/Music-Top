$(function() {

    $('#countrysel').change(function() {
    var country=$('#countrysel').val();
    loadData(country);
    });
    loadData('in');
   });
   function loadData(c){
    url = "https://itunes.apple.com/" + c + "/rss/topalbums/limit=20/json";
    $.getJSON(url).done(function(data) {
   
    cds = data.feed.entry;
    tam= cds.length;
    html='';
   
    for (var i = 0; i< tam; i++) {
    image = cds[i]['im:image'][0].label;
    name = cds[i]['im:name'].label;
    artist = cds[i]['im:artist'].label;
    id = cds[i].id.attributes['im:id'];
    category = cds[i].category.attributes.label;
   
    html += lili(id, image, name, artist, category);
    }
    $("ul").html(html).listview("refresh");
    });
   }
   function lili(id, image, name, artist, category){
    htmlli = '<li><a href="album.html?id='+ id +'" data-ajax="false">';
    htmlli += '<img src="' + image +'"><h2>' + name + '</h2>';
    htmlli += '<p>' + artist + '</p></a></li>';
    return htmlli;
   }
   