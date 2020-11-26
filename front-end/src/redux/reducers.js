const intialState = {
    currentUser: {
        firstName: "Kaleb",
        lastName: "Green",
    },
    myTasks: [
        {
            objective: "Study work",
            dueDate: new Date("9/21/2020")
        },
        {
            objective: "Check work",
            dueDate: new Date("9/21/2020")
        },
        {
            objective: "Buy book",
            dueDate: new Date("9/22/2020")
        },
        {
            objective: "Buy book again",
            dueDate: new Date("9/22/2020")
        }
    ],
    myProjects: [
        {
            name: "Project 1",
            createdBy: "Anothony Garcia"
        },
        {
            name: "Project 2",
            createdBy: "Kaleb Green"
        },
        {
            name: "Project 2",
            createdBy: "Kaleb Green"
        },
        {
            name: "Project 2",
            createdBy: "Kaleb Green"
        },
        {
            name: "Project 2",
            createdBy: "Kaleb Green"
        },
        {
            name: "Project 2",
            createdBy: "Kaleb Green"
        },
        {
            name: "Project 2",
            createdBy: "Kaleb Green"
        }
    ],
    selectedDate: new Date(),

}

export default function mainReducer(state = intialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, currentUser: action.payload}
        case 'SET_SELECTED_DATE':
            return { ...state, selectedDate: action.payload}
        default:
            return state;
    }
    
}
