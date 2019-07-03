export default function getBaseUrl () {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:4041/' : '/';
}

// NOTE: To use mockApi enter this in browser http://localhost:4040/?useMockApi=true

function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}