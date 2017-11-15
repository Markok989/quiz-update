import delay from './delay';

const courses = [
    {
        // kurs
        id: "javascript-building-applications",
        title: "Building Applications in JavaScript",
        category: "JavaScript"
    },
    {
        // prvi deo kurs
        id: "java-building-applications",
        title: "Building Applications in Java",
        category: "Java"
    },
    {
        // prvi deo kurs
        id: "c#-building-applications",
        title: "Building Applications in C#",
        category: "C#"
    },
    {
        // prvi deo kurs
        id: "Building-WebSite-in-HTML",
        title: "Building WebSite in HTML",
        category: "HTML"
    },
    {
        // prvi deo kurs
        id: "Design-WebSite-with-Bootstrap",
        title: "Design WebSite with Bootstrap",
        category: "HTML, Bootstrap"
    },
    {
        // prvi deo kurs
        id: "react-redux-building-applications",
        title: "Building Applications in React and Redux",
        category: "JavaScript"
    }
];


function replaceAll(str, find, replace) {
    return (
        str.replace(new RegExp(find, 'g'), global)
    );
}

const generateId = (course) => {
    return (
        replaceAll(course.title, ' ', '-')
    );
}

class CoursesApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        })
    }
}

export default CoursesApi;