     // Problem 1
     var employee = {
        FirstName: [
            "Sam",
            "Mary",
            "Bill",
            "Anna" // Problem 3
        ],
        Department: [
            "Tech",
            "Finance",
            "HR",
            "Tech" // Problem 3
        ],
        Designation: [
            "Manager",
            "Trainee",
            "Executive",
            "Executive"
        ],
        Salary: [
            40000,
            18500,
            21200,
            25600 // Problem 3
        ],
        RaiseEligible: [
            "True",
            "True",
            "False",
            "False" // Problem 3
        ],
        WFH: [  // Problem 6
            "True",
            "False",
            "False",
            "True"
        ]
      
    };
    
    //Problem 2
    var company = {
    
        "Company Name": "Tech Stars",
        "Website": "www.techstars.site",
        "Employees": employee.FirstName
           
        
    };
    
    //display information
    console.log("1. JSON for each employee:", employee);
    console.log("2. JSON for company:", company);
    
    //Problem 4
    total = 0;  //set a variable that holds our total
       const Salary = employee.Salary;  //reference the element in the "JSON" aka object literal we want
    var i = 0;
    for (i = 0; i < 4; i++) {  //loop through the array
        total += employee.Salary[i];  //Do the math!
    }
    console.log("4. The total salary of this company is: $",total);  //display the result
    
    //Problem 5
    i=0;
    for (i = 0; i < 4; i++) { 
    if(employee.RaiseEligible[i]=="True"){
        employee.Salary[i] += (employee.Salary[i])*0.1;
        console.log("5. The new salary of ", employee.FirstName[i], "is: $", employee.Salary[i]);
    }
    }
    
    
    //Problem 6
    i=0;
    for (i=0; i < 4; i++) { 
    if(employee.WFH[i]=="True"){
        console.log("6. Works from home: ", employee.FirstName[i]);
    
    }
    }
    