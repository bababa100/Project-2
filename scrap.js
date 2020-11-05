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


    Latest - model from seller show page

    <
    h1 > < %= food.name % > Detail Page < /h1> <
h4 > Add Ingredients < /h4> <
form action = "/foods/<%= food.id %>/ingredients?_method=PUT"
method = "POST" >
    <
    %
    ingredients.forEach(ingredient => {
        %
        >
        <
        input type = "checkbox"
        name = "ingredients"
        value = "<%= ingredient.id %>" / >
            <
            label
        for = "<%= ingredient.name %>" > < %= ingredient.name % > < /label><br / >
            <
            %
    }) % >
    <
    input type = "submit"
value = "Add Ingredients" / >
    <
    /form>