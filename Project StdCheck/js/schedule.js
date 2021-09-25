getLessons()

function getLessons() {
    var url = window.location.href.split("?");
    var idx = url[1].split('&')
    let id = idx[0]
    //let id=2;
    let lessonsStr = `<tr>
         <th> Num of lesson </th>
         <th> Name of lesson </th>
         <th> Day </th>
    </tr>`
    const requestURL = `http://localhost:4000/api/teacher-timetable/`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestURL + `${id}`)
    xhr.onload = () => {
       let lessons = JSON.parse(xhr.response)
        lessons.forEach((lesson) => {
            lessonsStr += `<tr>
            <td>${lesson.NumofPair}</td>
            <td>${lesson.Name}</td>
            <td>${lesson.Day.toLocaleString()}</td>
            </tr>`
        })
     console.log(lessons)
        $(`#table-content`).html(lessonsStr);
    }
    xhr.send()
}