export const getImagen = async() => {
    try {
        const apiKey = '9hcV5IfP92eG8oqCGHSXqLBE9S9fg9r9';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;
    } catch (error) {
        console.error(error);
    }
}