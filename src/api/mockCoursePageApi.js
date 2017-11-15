import delay from './delay';

const coursePages = [
    {
        id: "1",
        courseTitle: "JavaScript",
        category: "JavaScript",
        contentCourse: "Learn all of the fundamentals of JavaScript, and have fun while doing it – with SoloLearn!",
        chapters: [
            {
                id: "1",
                chapterTitle: "Module 1",
                lessons: [
                    {
                        lessonId: "1",
                        id: "wqeqw4",
                        lessonTitle: "introduction"
                    },
                    {
                        lessonId: "2",
                        id: "wqeqw3",
                        lessonTitle: "introduction 1"
                    }
                ]
            },
            {
                id: "12",
                chapterTitle: "Module 12",
                lessons: [
                    {
                        lessonId: "12",
                        id: "wqeqw42",
                        lessonTitle: "introduction 2"
                    },
                    {
                        lessonId: "2",
                        id: "wqeqw13",
                        lessonTitle: "introduction 12"
                    }
                ]
            }
        ]
    }
]

// replaceAll je funkcija koja se primenjuje za zamenu
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

// metoda generateId, vraca se vrednost: replaceAll funkcija koja menja quiz.title
const generateId = (quiz) => {
    return (
        replaceAll(quiz.title, ' ', '-')
    );
};


class CoursePageAPI {
    static getAllCoursePages() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], coursePages));
            }, delay);
        })
    }

    static saveCoursePage(coursePage) {
        coursePage = Object.assign({}, coursePage);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const minCourseTitleLength = 1;
                if (coursePage.courseTitle.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }
                coursePages.push(coursePage);
                resolve(coursePage);
            }, delay);
        })
    }
}

export default CoursePageAPI;