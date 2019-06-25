
export function loadArticlesApi(){
    return fetch('https://conduit.productionready.io/api/articles?limit=10&offset=0')
    .then(response => response.json())
    .then(json => json.articles);
}