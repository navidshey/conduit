export function loadTagsApi() {
   return fetch('https://conduit.productionready.io/api/tags')
        .then(response => response.json())
        .then(json => json.tags);
}