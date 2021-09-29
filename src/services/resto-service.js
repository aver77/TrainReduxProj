export default class RestoService {
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems () {
        return await this.getResource('/menu/');
    }

    async getItem(id) {
        const res = await this.getResource('/menu/');
        const item = res.find( (el) => {
            console.log(`el.id: ${el.id}, id: ${id}`);
            return el.id === +id;
        }) 
        return item;
    } 

    async postData(data, url) {
        const responce = await fetch(`${this._apiBase}${url}`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await responce.json();
    }

    async postMenuItems(data) {
        return await this.postData(data,'/sendedMenu');
    }
}