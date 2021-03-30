function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let result = ["<table>"];
    result.push(makeKeyRow(arr));
    arr.forEach(obj => { result.push(makeValueRow(obj)) });
    result.push('</table>')

    return result.join('\n');

    function makeKeyRow(arr) {
        let res = ['   <tr>'];
        for (const key in arr[0]) {
            let reg = /[<]+|[>]+|[&]+/g;
            if (!key.match(reg)) {
                res.push(`<th>${key}</th>`);
            } else {
                key = key.split(reg).join('');
                    res.push(`<th>${key}</th>`);
            }
        }
        res.push('</tr>')
        return res.join('');
    };
    function makeValueRow(obj) {
        let res = ['   <tr>'];
        for (const key in obj) {
            let reg = /[<]+|[>]+|[&]+/g;
            let val = obj[key];
            if (isNaN(val)) {
                if (!val.match(reg)) {
                    res.push(`<td>${obj[key]}</td>`); 
                }// } else {
                //     val = val.split(reg).join('');
                //     res.push(`<td>${val}</td>`);
                // }
            } else {
                res.push(`<td>${obj[key]}</td>`);
            }
        }
        res.push('</tr>');
        return res.join('');
    }
}
console.log(JsonToHtmlTable('[{"Name":"Pe>sho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50,"Grade":10}]'
));