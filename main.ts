
interface Person {
    id: string;
    company: string;
    fullName: string;
  }

type PersonData = {
  [key: string]: Person[];
};

function appendData(data: Person[]) {
    const tblBody: HTMLElement | null = document.getElementById('tableWithContent');
    let outPut: string = '';
    
    //data.sort((a,b) => a.company.localeCompare(b.company));

    let groups = data.reduce<PersonData>((groupedData, currentPerson)  => {
      if (!groupedData[currentPerson.company]) {
        groupedData[currentPerson.company]  = [];
      }

      groupedData[currentPerson.company].push(currentPerson);
      return groupedData;
   
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
    if (tblBody) {
      tblBody.innerHTML = outPut;
    }
  }


const asyncForPete = async () : Promise<void> => {
  
    try {
        const res = await fetch('http://localhost:3000/people');
        const data : Person[] = await res.json();
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
