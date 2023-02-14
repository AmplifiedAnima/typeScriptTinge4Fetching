"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function appendData(data) {
    let tblBody = document.getElementById('tableWithContent');
    let outPut = '';
    //data.sort((a,b) => a.company.localeCompare(b.company));
    let groups = data.reduce((acc, curr) => {
        if (!acc[curr.company]) {
            acc[curr.company] = [];
        }
        acc[curr.company].push(curr);
        return acc;
    }, {});
    for (let company in groups) {
        outPut += `<tr>
                  <td>${company}</td>
                </tr>`;
        for (let person of groups[company]) {
            outPut += `<tr>
                    <td></td>
                    <td>${person.fullName}</td>
                   </tr>`;
        }
    }
    tblBody.innerHTML = outPut;
}
const asyncForPete = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch('http://localhost:3000/people');
        const data = yield res.json();
        appendData(data);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log('Finished executing code...');
    }
});
asyncForPete();
