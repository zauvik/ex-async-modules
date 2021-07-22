import location from "./location.js";

// location.province
let province = await location.province()
let threeProvince = await province.slice(0,2)


for(let i = 0; i < threeProvince.length; i++){
    threeProvince[i]['regency'] = await location.regency(threeProvince[i]['id'])
    for(let j = 0; j < threeProvince[i]['regency'].length; j++){
        
        let provinceId = await threeProvince[i]['id'];
        let regencyId = await threeProvince[i]['regency'][j]['id']
        threeProvince[i]['regency'][j]['district'] = await location.district(provinceId, regencyId)
    }
}

console.log(JSON.stringify(threeProvince, null, 2))