const dataList = document.getElementById("data-list");
const dropAreas = document.querySelectorAll(".drop-area");
const result = document.getElementById("result");

const url = "https://whyanbu.github.io/files/cs601-assignment2-data.json";
// const url = "https://cs601projectapi.vercel.app/get";

const fetchData = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        for (d of data) {
            const li = document.createElement("li");
            li.draggable = true;
            li.setAttribute("data-item-id", d.id);
            li.setAttribute("data-name", d.name);
            li.setAttribute("data-category", d.category);
            li.innerText = d.name;
            dataList.appendChild(li);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const initialize = async () => {
    await fetchData();
    dataList.querySelectorAll("li").forEach(record => record.addEventListener("dragstart", e => {
        const selected = e.target;
        e.dataTransfer.setData("application/json", JSON.stringify(
            {
                id: selected.getAttribute("data-item-id"),
                name: selected.getAttribute("data-name"),
                category: selected.getAttribute("data-category")
            }
        ));
    }));
}

dropAreas.forEach(da => da.addEventListener("dragover", e => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
}));

dropAreas.forEach(da => da.addEventListener("dragleave", e => {
    e.currentTarget.classList.remove("drag-over");
}));

dropAreas.forEach(da => da.addEventListener("drop", e => {
    e.currentTarget.classList.remove("drag-over");
    const draggedData = JSON.parse(e.dataTransfer.getData("application/json"));
    const dom = document.querySelector(`[data-item-id="${draggedData.id}"]`);
    if (draggedData.category === da.getAttribute("data-category")) {
        da.appendChild(dom);
        dom.classList.add("correct");
        dom.draggable = false;
        result.innerText = `CORRECT.  ${draggedData.name} is ${da.getAttribute("data-category")}.`;
    } else {
        result.innerText = `INCORRECT.  ${draggedData.name} is NOT ${da.getAttribute("data-category")}.`;
    }
}));

initialize();