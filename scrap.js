< h1 > < %= seller.name % > Detail Page < /h1> <
h4 > Add Albums < /h4> <
form action = "/sellers/<%= seller.id %>/albums?_method=PUT"
method = "POST" >
    <
    %
    albums.forEach(album => {
        %
        >
        <
        input type = "checkbox"
        name = "albums"
        value = "<%= album.id %>" / >
            <
            label
        for = "<%= album.name %>" > < %= album.name % > < /label><br / >
            <
            %
    }) % >
    <
    input type = "submit"
value = "Add Albums" / >
    <
    /form> <
h4 > Albums < /h4> <
ul >
    <
    %
    seller.albums.sort().forEach(ing => {
        %
        >
        <
        li > < %= ing.name % > < %
    }) % > < /li> < /
    ul >