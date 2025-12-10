const getStudents = (req , res) => {

    let stdData = {
        name : "Gopi",
        rol : "4255"
    };
    res.status(200).json(stdData);
};

const addStudents = (req , res) => {
    
    res.status(201).json({message : "Student data added successfully"
    });
}