
function appendData(data: {}[]) {
    let tblBody = document.getElementById('tableWithContent') as HTMLTableElement;
    let outPut = '';
    
    //data.sort((a,b) => a.company.localeCompare(b.company));

    let groups = data.reduce((acc: any , curr: any) => {
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


const asyncForPete = async () => {
    try {
        const res = await fetch('http://localhost:3000/people');
        const data = await res.json();
        appendData(data);
        
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('Finished executing code...');
    }
}



asyncForPete();
