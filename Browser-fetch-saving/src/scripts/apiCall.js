class Client {
<<<<<<< HEAD
    export class Client {
        constructor() {
            //Your token goes here
            this.token = "";
            this.token = "e555e94f";
        }
=======
    constructor () {
        //Your token goes here
        this.token = "4da339a9";
    }
>>>>>>> bc113b5484ecc7f51da1bc1d22f504f7c9ba48f7

        async getMovieData(movie) {
            let response = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${this.token}`);
            let data = await response.json();
            return data;
        }
    }
}
export { Client }