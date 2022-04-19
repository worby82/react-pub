export default class CoctailData {
    static async getAll() {
        let response = await fetch(`https://625d96c795cd5855d62318dc.mockapi.io/cocktail`);
        let data = await response.json();
        return data;
    }
    static async getDetail(id) {
        let response = await fetch(`https://625d96c795cd5855d62318dc.mockapi.io/cocktail/${id}`);
        let data = await response.json();
        return data;
    }
}