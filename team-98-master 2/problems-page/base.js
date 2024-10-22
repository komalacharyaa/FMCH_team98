const data = [{
    title: "Problem 1:",
    "advice":["advice 1","advice 2", "advice 3" ],
    "medicine":["med 1","med 2", "med 3" ]
    }];
const data2 = [{
      title: "Problem 2:",
      "advice":["advice 1","advice 2", "advice 3" ],
      "medicine":["med 1","med 2", "med 3" ]
    }];
const data3 = [{
        title: "Problem 3:",
        "advice":["advice 1","advice 2", "advice 3" ],
        "medicine":["med 1","med 2", "med 3" ]
    }];


    function generateArray(myObject, index){
        let adviceStr = '';
        console.log(myObject);
        for(let i=0; i<myObject.advice.length; i++)
        {
            adviceStr += `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${index}-ad${i}">
            <label class="form-check-label" for="${index}-ad${i}">
              ${myObject.advice[i]}
            </label>
        </div>`
        }
        let medicineStr = '';
        for(let i=0; i<myObject.medicine.length; i++)
        {
            medicineStr += `<div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="${index}-md${i}">
            <label class="form-check-label" for="${index}-md${i}">
              ${myObject.medicine[i]}
            </label>
        </div>`
        }
        let str = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            ${myObject.title}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
        <label for="exampleFormControlTextarea1" class="form-label">Advice:</label>
        ${adviceStr}
        <label for="exampleFormControlTextarea1" class="form-label">Medicine:</label>
        ${medicineStr}
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea"${index}" rows="3"></textarea>
        </div>
        <input class="btn btn-primary" type="submit" value="Submit">
        </div>
        </div>
        </div>`
        return str
    }

    for(let i=0;i<data.length; i++)
    {
        const obj = data[i]
        $("#main").append(generateArray(obj, i))
    }
    for(let i=0;i<data.length; i++)
    {
        const obj = data2[i]
        $("#main").append(generateArray(obj, i))
    }
    for(let i=0;i<data.length; i++)
    {
        const obj = data3[i]
        $("#main").append(generateArray(obj, i))
    }



        




