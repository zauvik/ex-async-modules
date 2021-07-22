import fetch from "node-fetch";

const location = {
    async province() {
        let data = [] 
        await fetch('http://testing-api.bracketbrick.com/api/province')
        .then(res => res.json())
        .then(json => data = json);

        return data.data
    },
    
    async regency(provinceId) {
        let data = [] 
        await fetch(`http://testing-api.bracketbrick.com/api/province=${provinceId}/regency`)
        .then(res => res.json())
        .then(json => data = json);

        return data.data
    },
    
    async district(provinceId,regencyId) {
        let data = [] 
        await fetch(`http://testing-api.bracketbrick.com/api/province=${provinceId}/regency=${regencyId}/district`)
        .then(res => res.json())
        .then(json => data = json);
        return data.data
    }
}

export default location;